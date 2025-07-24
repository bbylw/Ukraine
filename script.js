// GitHub风格的UI交互效果
class GitHubUIEffects {
    constructor() {
        this.init();
    }

    init() {
        this.setupSmoothScrolling();
        this.setupNavbarEffects();
        this.setupButtonEffects();
        this.setupBackToTop();
        this.setupMobileNavigation();
        this.setupLoadingAnimations();
        this.setupKeyboardNavigation();
        this.setupProgressIndicators();
        this.setupThemeToggle();
    }

    // 主题切换
    setupThemeToggle() {
        // 创建主题切换按钮
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.setAttribute('aria-label', '切换主题');
        themeToggle.innerHTML = `
            <svg class="theme-icon theme-icon-light" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 12a4 4 0 100-8 4 4 0 000 8zM8 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V.75A.75.75 0 018 0zm0 13a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 018 13zM2.343 2.343a.75.75 0 011.061 0l1.06 1.061a.75.75 0 01-1.06 1.06l-1.061-1.06a.75.75 0 010-1.061zm9.193 9.193a.75.75 0 011.06 0l1.061 1.06a.75.75 0 01-1.06 1.061l-1.061-1.06a.75.75 0 010-1.061zM16 8a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0116 8zM3 8a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h1.5A.75.75 0 013 8zm10.657-5.657a.75.75 0 010 1.061l-1.061 1.06a.75.75 0 11-1.06-1.06l1.06-1.061a.75.75 0 011.061 0zm-9.193 9.193a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 11-1.061-1.06l1.06-1.061a.75.75 0 011.061 0z"/>
            </svg>
            <svg class="theme-icon theme-icon-dark" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M6 .278a.768.768 0 01.08.858 7.208 7.208 0 00-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 01.81.316.733.733 0 01-.031.893A8.349 8.349 0 018.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 016 .278z"/>
            </svg>
        `;

        // 将按钮添加到导航栏
        const navContainer = document.querySelector('.nav-container');
        if (navContainer) {
            navContainer.appendChild(themeToggle);
        }

        // 检查系统偏好和本地存储
        const getInitialTheme = () => {
            const savedTheme = localStorage.getItem('color-mode');
            if (savedTheme) return savedTheme;
            
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        };

        // 应用主题
        const applyTheme = (theme) => {
            if (theme === 'dark') {
                document.documentElement.setAttribute('data-color-mode', 'dark');
                themeToggle.setAttribute('aria-label', '切换到亮色主题');
            } else {
                document.documentElement.setAttribute('data-color-mode', 'light');
                themeToggle.setAttribute('aria-label', '切换到暗色主题');
            }
            localStorage.setItem('color-mode', theme);
        };

        // 初始化主题
        const initialTheme = getInitialTheme();
        applyTheme(initialTheme);

        // 切换主题
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-color-mode');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);

            // 添加切换动画
            themeToggle.style.transform = 'scale(0.8) rotate(180deg)';
            setTimeout(() => {
                themeToggle.style.transform = '';
            }, 200);
        });

        // 监听系统主题变化
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('color-mode')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    // 平滑滚动到锚点
    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // 更新URL但不触发滚动
                    history.pushState(null, null, targetId);
                }
            });
        });
    }

    // 导航栏滚动效果
    setupNavbarEffects() {
        const navbar = document.querySelector('.navbar');
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateNavbar = () => {
            const scrollY = window.scrollY;
            
            if (scrollY > 50) {
                navbar.style.boxShadow = '0 1px 0 rgba(31, 35, 40, 0.04), 0 1px 3px rgba(31, 35, 40, 0.12)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.boxShadow = '0 1px 0 rgba(31, 35, 40, 0.04)';
                navbar.style.backdropFilter = 'none';
            }

            lastScrollY = scrollY;
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateNavbar);
                ticking = true;
            }
        });
    }

    // 按钮交互效果
    setupButtonEffects() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            // 添加涟漪效果
            button.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });

            // 添加键盘焦点指示器
            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    button.classList.add('btn-pressed');
                    setTimeout(() => {
                        button.classList.remove('btn-pressed');
                    }, 150);
                }
            });
        });
    }

    // 返回顶部按钮
    setupBackToTop() {
        const backToTopButton = document.querySelector('.back-to-top');
        let isVisible = false;

        const toggleVisibility = () => {
            const shouldShow = window.scrollY > 300;
            
            if (shouldShow && !isVisible) {
                backToTopButton.classList.add('visible');
                isVisible = true;
            } else if (!shouldShow && isVisible) {
                backToTopButton.classList.remove('visible');
                isVisible = false;
            }
        };

        window.addEventListener('scroll', throttle(toggleVisibility, 100));

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 添加点击动画
            backToTopButton.style.transform = 'translateY(-4px) scale(0.95)';
            setTimeout(() => {
                backToTopButton.style.transform = '';
            }, 150);

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 移动端导航
    setupMobileNavigation() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        if (!navToggle || !navMenu) return;

        navToggle.addEventListener('click', () => {
            const isActive = navMenu.classList.contains('active');
            
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // 添加汉堡菜单动画
            const hamburger = navToggle.querySelector('.hamburger');
            if (isActive) {
                hamburger.style.transform = 'rotate(0deg)';
            } else {
                hamburger.style.transform = 'rotate(90deg)';
            }

            // 管理焦点
            if (!isActive) {
                navMenu.setAttribute('aria-expanded', 'true');
                navLinks[0]?.focus();
            } else {
                navMenu.setAttribute('aria-expanded', 'false');
                navToggle.focus();
            }
        });

        // 点击导航链接后关闭菜单
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navMenu.setAttribute('aria-expanded', 'false');
            });
        });

        // 点击外部关闭菜单
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navMenu.setAttribute('aria-expanded', 'false');
            }
        });

        // ESC键关闭菜单
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navMenu.setAttribute('aria-expanded', 'false');
                navToggle.focus();
            }
        });
    }

    // 加载动画
    setupLoadingAnimations() {
        // 页面加载完成后的淡入效果
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
            
            // 逐步显示内容
            const animatedElements = document.querySelectorAll('.Box, .feature-item, .timeline-item');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            animatedElements.forEach(element => {
                observer.observe(element);
            });
        });
    }

    // 键盘导航
    setupKeyboardNavigation() {
        // Tab焦点管理
        const focusableElements = document.querySelectorAll(
            'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );

        // 跳到主内容的快捷键
        document.addEventListener('keydown', (e) => {
            if (e.key === '1' && e.altKey) {
                e.preventDefault();
                const main = document.querySelector('main');
                if (main) {
                    main.focus();
                    main.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });

        // 改善焦点可见性
        let isUsingKeyboard = false;
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                isUsingKeyboard = true;
                document.body.classList.add('using-keyboard');
            }
        });

        document.addEventListener('mousedown', () => {
            isUsingKeyboard = false;
            document.body.classList.remove('using-keyboard');
        });
    }

    // 进度指示器
    setupProgressIndicators() {
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        document.body.appendChild(progressBar);

        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            progressBar.style.width = Math.min(scrollPercent, 100) + '%';
        };

        window.addEventListener('scroll', throttle(updateProgress, 10));
    }
}

// 工具函数
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    new GitHubUIEffects();
});