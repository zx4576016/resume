// 页面滚动时添加导航栏阴影效果
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 添加滚动时的渐入效果
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(section);
    });

    // 添加技能项目的火焰动画效果
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            const icon = this.querySelector('i');
            icon.style.animation = 'flame 2s infinite';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            const icon = this.querySelector('i');
            icon.style.animation = 'none';
        });
    });

    // 添加时间线项目的动画效果和初始化
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // 初始化时间线动画
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = 'all 0.5s ease';
        item.style.transitionDelay = `${index * 0.2}s`;
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 500);
    });

    // 添加时间线交互效果
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.borderLeftWidth = '4px';
            this.style.paddingLeft = '2.5rem';
            this.style.boxShadow = '-4px 0 20px rgba(255, 77, 77, 0.5)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.borderLeftWidth = '2px';
            this.style.paddingLeft = '2rem';
            this.style.boxShadow = '-2px 0 10px rgba(255, 77, 77, 0.3)';
        });
    });

    // 添加联系方式的悬停效果
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.color = '#ff4d4d';
            const icon = this.querySelector('i');
            icon.style.filter = 'drop-shadow(0 0 10px rgba(255, 77, 77, 0.8))';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.color = '#ffffff';
            const icon = this.querySelector('i');
            icon.style.filter = 'drop-shadow(0 0 5px rgba(255, 77, 77, 0.5))';
        });
    });

    // 添加标题文字故障效果
    const glitchText = document.querySelector('.glitch');
    if (glitchText) {
        setInterval(() => {
            glitchText.style.animation = 'none';
            void glitchText.offsetWidth;
            glitchText.style.animation = 'float 6s ease-in-out infinite';
        }, 6000);
    }

    // 页面加载时的渐入效果
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
        document.body.style.opacity = '1';
    }, 100);

    // 添加鼠标移动视差效果（仅背景）
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        document.body.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
    });

    // 添加滚动进度条
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(to right, var(--secondary-color), #ff6666);
        z-index: 1000;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });

    // 添加技能卡片的3D倾斜效果
    skillItems.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    // 添加打字机效果
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // 为motto添加打字机效果
    const motto = document.querySelector('.motto');
    if (motto) {
        const mottoText = motto.textContent;
        typeWriter(motto, mottoText);
    }

    // 添加粒子效果
    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 3px;
            height: 3px;
            background: var(--secondary-color);
            pointer-events: none;
            border-radius: 50%;
            z-index: 1000;
        `;
        
        document.body.appendChild(particle);
        
        const destinationX = x + (Math.random() - 0.5) * 100;
        const destinationY = y - 100 - Math.random() * 50;
        const rotation = Math.random() * 520;
        const delay = Math.random() * 200;
        
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        particle.style.transition = 'all 1s ease';
        particle.style.transitionDelay = `${delay}ms`;
        
        requestAnimationFrame(() => {
            particle.style.transform = `translate(${destinationX - x}px, ${destinationY - y}px) rotate(${rotation}deg)`;
            particle.style.opacity = '0';
        });
        
        setTimeout(() => {
            particle.remove();
        }, 1000 + delay);
    }

    // 在鼠标移动时创建粒子
    let throttleTimer;
    document.addEventListener('mousemove', (e) => {
        if (!throttleTimer) {
            throttleTimer = setTimeout(() => {
                createParticle(e.clientX, e.clientY);
                throttleTimer = null;
            }, 50);
        }
    });
}); 