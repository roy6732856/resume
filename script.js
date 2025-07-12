// 履歷互動效果
document.addEventListener('DOMContentLoaded', function() {
    
    // 技能標籤點擊效果
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
            }, 200);
        });
    });

    // 專案卡片點擊效果
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 300);
        });
    });

    // 平滑滾動效果
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // 聯絡資訊點擊複製功能
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.querySelector('span').textContent;
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    showToast('已複製到剪貼簿！');
                });
            } else {
                // 備用方案
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showToast('已複製到剪貼簿！');
            }
        });
    });

    // 顯示提示訊息
    function showToast(message) {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 500;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 2000);
    }

    // 添加動畫樣式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // 技能進度條動畫
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        const tags = category.querySelectorAll('.skill-tag');
        tags.forEach((tag, index) => {
            tag.style.animationDelay = `${index * 0.1}s`;
            tag.style.animation = 'fadeInUp 0.5s ease forwards';
            tag.style.opacity = '0';
        });
    });

    // 工作經驗時間軸效果
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
    });

    // 專案作品展示效果
    const projectTechSpans = document.querySelectorAll('.project-tech span');
    projectTechSpans.forEach((span, index) => {
        span.style.animationDelay = `${index * 0.1}s`;
        span.style.animation = 'fadeInUp 0.4s ease forwards';
        span.style.opacity = '0';
    });

    // 響應式選單（如果需要）
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // 向下滾動
            header.style.transform = 'translateY(-100%)';
        } else {
            // 向上滾動
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // 列印優化
    window.addEventListener('beforeprint', () => {
        document.body.style.background = 'white';
        document.querySelector('.container').style.boxShadow = 'none';
    });

    window.addEventListener('afterprint', () => {
        document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        document.querySelector('.container').style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
    });

    // 鍵盤快捷鍵
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'p') {
            e.preventDefault();
            window.print();
        }
    });

    console.log('履歷已載入完成！🚀');
    console.log('功能包括：');
    console.log('- 技能標籤互動效果');
    console.log('- 專案卡片懸停效果');
    console.log('- 聯絡資訊一鍵複製');
    console.log('- 滾動動畫效果');
    console.log('- 響應式設計');
    console.log('- 列印優化');
}); 