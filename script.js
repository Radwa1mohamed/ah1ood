
    // <!-- سكربت القائمة المتجاوبة للهواتف -->
  
        const mobileBtn = document.getElementById('mobileBtn');
        const navMenu = document.getElementById('navMenu');

        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });


        // <!-- جزء الخدمات ت -->

        document.addEventListener("DOMContentLoaded", function () {
            const cards = document.querySelectorAll(".alley-card");

            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -40px 0px',
                threshold: 0.12
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("aos-animate");
                    } else {
                        entry.target.classList.remove("aos-animate");
                    }
                });
            }, observerOptions);

            cards.forEach(card => {
                observer.observe(card);
            });
        });

        window.addEventListener('scroll', () => {
            const container = document.getElementById('alleysContainer');
            const dove = document.getElementById('travelingDove');

            if (!container || !dove) return;

            const rect = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // حساب نسبة التصفح داخل منطقة الشوارع
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                const totalHeight = rect.height;
                const currentProgress = (windowHeight - rect.top) / (windowHeight + totalHeight);

                // تقييد النسبة بين 0% و 95% عشان الحمامة ما تخرجش بره الشارع
                const percentage = Math.min(Math.max(currentProgress * 100, 0), 95);

                dove.style.top = `${percentage}%`;
            }
        });

        // مصفوفة الآراء المجهزة للتبديل
        const feedbacks = [
            {
                text: '"التجربة مع ساحة الحرم التسويقي كانت استثنائية جداً! الاستراتيجية المتبعة وكتابة المحتوى كانت كالجناح الذي حلق ببراندنا لأعلى أداء وصلناه حتى الآن."',
                name: "أحمد السعيد",
                role: "مؤسس متجر متكامل"
            },
            {
                text: '"إدارة السوشيال ميديا والتصاميم غيرت هوية البراند تماماً، أسلوب راقي جداً واحترافي في المواعيد والنتائج."',
                name: "سارة محمود",
                role: "مديرة براند تجميل"
            },
            {
                text: '"كتابة المقالات والـ SEO رفعت زوار موقعنا بشكل غير متوقع في فترة قصيرة، خريطة عمل واضحة ونتائج حقيقية."',
                name: "مهندس/ خالد مصطفى",
                role: "رئيس شركة حلول تقنية"
            }
        ];

        let currentIndex = 0;

        // عناصر الـ DOM
        const feedbackText = document.getElementById('feedbackText');
        const clientName = document.getElementById('clientName');
        const clientRole = document.getElementById('clientRole');
        const feedbackBody = document.querySelector('.feedback-content-body');

        const prevBtn = document.getElementById('prevFeedbackBtn');
        const nextBtn = document.getElementById('nextFeedbackBtn');

        // دالة تحديث البيانات مع أنيميشن اختفاء وظهور
        function updateFeedback(index) {
            feedbackBody.classList.add('fade-out');

            setTimeout(() => {
                feedbackText.textContent = feedbacks[index].text;
                clientName.textContent = feedbacks[index].name;
                clientRole.textContent = feedbacks[index].role;

                feedbackBody.classList.remove('fade-out');
            }, 350); // وقت الأنيميشن بالظبط
        }

        // زر التالي (اليمين)
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % feedbacks.length;
            updateFeedback(currentIndex);
        });

        // زر السابق (الشرق/الشمال)
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + feedbacks.length) % feedbacks.length;
            updateFeedback(currentIndex);
        });

        document.addEventListener("DOMContentLoaded", () => {
            const odometers = document.querySelectorAll('.pigeon-feather-stats .odometer');
            let animated = false;

            const animateFeatherNumbers = () => {
                odometers.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000;
                    const frameRate = 1000 / 60;
                    const totalFrames = Math.round(duration / frameRate);
                    let frame = 0;

                    counter.style.filter = 'blur(2px)';

                    const timer = setInterval(() => {
                        frame++;
                        const progress = frame / totalFrames;
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        const current = Math.floor(easeOut * target);

                        counter.innerText = current;

                        if (frame >= totalFrames) {
                            counter.innerText = target;
                            counter.style.filter = 'blur(0px)';
                            clearInterval(timer);
                        }
                    }, frameRate);
                });
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !animated) {
                        animateFeatherNumbers();
                        animated = true;
                    }
                });
            }, { threshold: 0.3 });

            const section = document.querySelector('.pigeon-feather-stats');
            if (section) observer.observe(section);
        });

        