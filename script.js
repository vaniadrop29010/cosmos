document.addEventListener('DOMContentLoaded', function() {
    // Данные о планетах
    const planetData = {
        mercury: {
            name: 'Меркурий',
            diameter: '4 880 км',
            distance: '57.9 млн км',
            orbit: '88 земных дней',
            temp: 'от -173°C до +427°C',
            description: 'Меркурий — самая маленькая и ближайшая к Солнцу планета Солнечной системы. Её период обращения вокруг Солнца составляет 88 земных суток — самый короткий среди всех планет. Меркурий практически лишён атмосферы, поэтому температура на его поверхности колеблется от крайне низкой ночью до очень высокой днём. Поверхность Меркурия напоминает лунную: она покрыта многочисленными кратерами и практически не имеет крупных форм рельефа, таких как горы или долины.',
            image: 'https://i.pinimg.com/originals/1b/98/1f/1b981f8ec5a06e5c5a7aa6af0c40edbc.png'
        },
        venus: {
            name: 'Венера',
            diameter: '12 104 км',
            distance: '108.2 млн км',
            orbit: '225 земных дней',
            temp: 'около +462°C',
            description: 'Венера — вторая по удалённости от Солнца планета Солнечной системы. Названа в честь древнеримской богини любви Венеры. Венера — самая горячая планета в Солнечной системе из-за парникового эффекта, создаваемого её плотной атмосферой, состоящей в основном из углекислого газа. Поверхность Венеры скрыта под толстым слоем облаков, состоящих из серной кислоты, что делает её невидимой для оптических инструментов.',
            image: 'https://i.pinimg.com/736x/6e/e3/0a/6ee30ae5d5c481f8efca58c2e39b439a--fascinating-facts-the-planets.jpg'
        },
        earth: {
            name: 'Земля',
            diameter: '12 742 км',
            distance: '149.6 млн км',
            orbit: '365.25 земных дней',
            temp: 'от -89.2°C до +56.7°C',
            description: 'Земля — третья по удалённости от Солнца планета Солнечной системы. Самая плотная, пятая по диаметру и массе среди всех планет и крупнейшая среди планет земной группы. Единственное известное на данный момент тело во Вселенной, населённое живыми организмами. Земля образовалась около 4,5 миллиардов лет назад и является домом для миллионов видов живых существ, включая человека.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Earth_-_Western_Hemisphere_%2816106865444%29.jpg'
        },
        mars: {
            name: 'Марс',
            diameter: '6 779 км',
            distance: '227.9 млн км',
            orbit: '687 земных дней',
            temp: 'от -153°C до +20°C',
            description: 'Марс — четвёртая по удалённости от Солнца и седьмая по размеру планета Солнечной системы. Названа в честь древнеримского бога войны Марса. Иногда Марс называют «красной планетой» из-за красноватого оттенка поверхности, придаваемого ей оксидом железа. Марс — планета земной группы с разреженной атмосферой. На Марсе есть два естественных спутника — Фобос и Деймос.',
            image: 'https://avatars.mds.yandex.net/get-entity_search/2032283/930714801/S600xU_2x'
        },
        jupiter: {
            name: 'Юпитер',
            diameter: '139 822 км',
            distance: '778.5 млн км',
            orbit: '11.86 земных лет',
            temp: 'около -145°C (в верхних слоях атмосферы)',
            description: 'Юпитер — пятая планета от Солнца, крупнейшая в Солнечной системе. Масса Юпитера в 318 раз больше массы Земли и в 2,5 раза больше, чем масса всех остальных планет Солнечной системы, вместе взятых. Юпитер классифицируется как газовый гигант. Он состоит в основном из водорода и гелия. У Юпитера есть слабая кольцевая система и мощная магнитосфера. Вокруг планеты обращаются 79 спутников.',
            image: 'https://media.sketchfab.com/models/85d2ee4f43084582a2597c20356daf59/thumbnails/20bfb8b3aed8424094a0857e956b8dd4/1ae1472126f64ecf82b8708a88d398fc.jpeg'
        },
        saturn: {
            name: 'Сатурн',
            diameter: '116 464 км',
            distance: '1.43 млрд км',
            orbit: '29.46 земных лет',
            temp: 'около -178°C (в верхних слоях атмосферы)',
            description: 'Сатурн — шестая планета от Солнца и вторая по размерам планета в Солнечной системе после Юпитера. Сатурн, как и Юпитер, классифицируется как газовый гигант. Сатурн назван в честь римского бога земледелия. Сатурн известен своими кольцами, состоящими в основном из частичек льда и камня. У Сатурна 82 спутника, крупнейший из которых — Титан.',
            image: 'https://avatars.mds.yandex.net/get-entity_search/4785917/1130710058/S600xU_2x'
        },
        uranus: {
            name: 'Уран',
            diameter: '50 724 км',
            distance: '2.88 млрд км',
            orbit: '84.01 земных лет',
            temp: 'около -224°C (в верхних слоях атмосферы)',
            description: 'Уран — седьмая планета от Солнца, третья по диаметру и четвёртая по массе в Солнечной системе. Уран был открыт в 1781 году английским астрономом Уильямом Гершелем и назван в честь греческого бога неба Урана. Уран стал первой планетой, обнаруженной в Новое время. Уран имеет необычный наклон оси вращения — примерно 98 градусов к плоскости эклиптики. Из-за этого он как бы «лежит на боку», вращаясь в направлении, противоположном вращению большинства планет.',
            image: 'https://steamuserimages-a.akamaihd.net/ugc/943959879369329081/00407A6990F15A30530CE4A611F825F8E9E28E88/?imw=512&amp;imh=341&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true'
        },
        neptune: {
            name: 'Нептун',
            diameter: '49 244 км',
            distance: '4.5 млрд км',
            orbit: '164.8 земных лет',
            temp: 'около -218°C (в верхних слоях атмосферы)',
            description: 'Нептун — восьмая и самая дальняя планета Солнечной системы. Нептун был открыт 23 сентября 1846 года и был первой планетой, открытой благодаря математическим расчётам, а не путём регулярных наблюдений. Нептун назван в честь римского бога морей. Нептун по составу близок к Урану, и обе планеты отличаются по составу от более крупных газовых гигантов — Юпитера и Сатурна. Атмосфера Нептуна состоит в основном из водорода и гелия, со следами метана, который придаёт планете голубой цвет.',
            image: 'https://avatars.mds.yandex.net/get-entity_search/9706867/1131657947/S600xU_2x'
        }
    };

    // Навигация
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const header = document.querySelector('header');

    // Функция для переключения мобильного меню
    function toggleNav() {
        // Анимация ссылок
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Переключение меню
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    }

    // Обработчик клика на бургер-меню
    burger.addEventListener('click', toggleNav);

    // Закрытие меню при клике на ссылку
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                toggleNav();
            }
        });
    });

    // Изменение стиля навигации при прокрутке
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Модальное окно для планет
    const planetCards = document.querySelectorAll('.planet-card');
    const planetModal = document.querySelector('.planet-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const planetDiameter = document.getElementById('planet-diameter');
    const planetDistance = document.getElementById('planet-distance');
    const planetOrbit = document.getElementById('planet-orbit');
    const planetTemp = document.getElementById('planet-temp');
    const planetDescription = document.getElementById('planet-description');

    // Открытие модального окна при клике на карточку планеты
    planetCards.forEach(card => {
        card.addEventListener('click', () => {
            const planet = card.getAttribute('data-planet');
            const data = planetData[planet];
            
            modalTitle.textContent = data.name;
            modalImage.style.backgroundImage = `url(${data.image})`;
            planetDiameter.textContent = data.diameter;
            planetDistance.textContent = data.distance;
            planetOrbit.textContent = data.orbit;
            planetTemp.textContent = data.temp;
            planetDescription.textContent = data.description;
            
            planetModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Закрытие модального окна
    closeModal.addEventListener('click', () => {
        planetModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Закрытие модального окна при клике вне его содержимого
    window.addEventListener('click', (e) => {
        if (e.target === planetModal) {
            planetModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Загрузка видео с канала Хаббла на YouTube (без API)
    function loadHubbleVideos() {
        const videoGallery = document.getElementById('hubble-videos');
        
        // Удаляем индикатор загрузки
        const loadingElement = document.querySelector('.loading-videos');
        if (loadingElement) {
            loadingElement.remove();
        }
        
        // Видео с канала Хаббла
        const hubbleVideos = [
            {
                id: 'neOBczoTFQU',
                title: 'Невероятное Открытие НАСА: Жизнь На Юпитера Есть?',
                description: 'Cуществует ли жизнь на  Юпитере? На этот вопрос отвечает НАСА в этом видео.',
            },
            {
                id:'hxO2tBw0nLM',
                title:'Исследователи Потрясены! Получены Невероятные Снимки Поверхности Марса',
                description: 'Исследователи потрясены! Что же такое на самом деле?',

            },
            {
                id:'edCHB-8pmIg',
                title:'Зафиксирован Ужасающий Сигнал В Космосе: Что Обнаружил Космический Аппарат Юнона?',
                description: 'Сигнал, который был зафиксирован Юноной, является одним из самых важных в истории.',
            },
            {
                id: 'IPxd1qdAfpY',
                title: 'Кто живет там? Реальные СНИМКИ ОБРАТНОЙ Стороны ЛУНЫ [Космические Баталии]',
                description: 'Жизнь на обратной стороне луны, в деталях',
            },

            {
                id: 'IPxd1qdAfpY',
                title: 'Кто живет там? Реальные СНИМКИ ОБРАТНОЙ Стороны ЛУНЫ [Космические Баталии]',
                description: 'Жизнь на обратной стороне луны, в деталях',
            },
            {
                id: '7vEccumBzEI',
                title: 'Что лежит за пределами границы Вселенной?',
                description: 'что лежит за пределами границы Вселенной?'
            },
            {
                id: 'zij4lyfCEV8',
                title: 'Путешествие к Произошло! Невероятные Снимки С Андромеды — Реально? [Относительность Пространства и Времени]Вселенной',
                description: 'Произошло! Невероятные Снимки С Андромеды — Реально? [Относительность Пространства и Времени]'
            },
            {
                id: 'Lk6xD3T3ZCA',
                title: ' Получены СИГНАЛЫ Внеземного Мира: Что Последним Мог Увидеть Вояджер-1?в деталях',
                description: 'что последним мог увидеть Вояджер-1?'
            },
            {
                id: 'F0p4OkE9ac8',
                title: 'Ученые ОШЕЛОМЛЕНЫ: Вселенная — Всего Лишь Атом?',
                description: 'Неужели Вселенная= Всего Лишь Атом?'
            },
        ];
        
        // Добавляем видео на страницу
        hubbleVideos.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.className = 'video-item';
            
            videoItem.innerHTML = `
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/${video.id}" allowfullscreen></iframe>
                </div>
                <h3>${video.title}</h3>
                <p>${video.description}</p>
            `;
            
            videoGallery.appendChild(videoItem);
        });
    }

    // Вызываем функцию загрузки видео
    loadHubbleVideos();

    // Обработка отправки формы
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // В реальном проекте здесь был бы код для отправки данных на сервер
        console.log('Отправка формы:', { name, email, message });
        
        // Очистка формы и вывод сообщения об успешной отправке
        contactForm.reset();
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    });

    // Плавная прокрутка к разделам при клике на ссылки навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Учитываем высоту навигации
                    behavior: 'smooth'
                });
            }
        });
    });

    // Анимация появления элементов при прокрутке
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScrollAnimation() {
        const elements = document.querySelectorAll('.section-title, .planet-card, .timeline-item, .fact-item');
        
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('animate');
            }
        });
    }

    // Вызываем функцию при загрузке страницы и при прокрутке
    window.addEventListener('load', handleScrollAnimation);
    window.addEventListener('scroll', handleScrollAnimation);

    // Добавляем интерактивность к таймлайну
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const dot = item.querySelector('.timeline-dot');
            dot.style.transform = 'translateX(-50%) scale(1.5)';
            dot.style.boxShadow = '0 0 15px rgba(138, 43, 226, 0.8)';
        });
        
        item.addEventListener('mouseleave', () => {
            const dot = item.querySelector('.timeline-dot');
            dot.style.transform = 'translateX(-50%) scale(1)';
            dot.style.boxShadow = 'none';
        });
    });

    // Добавляем счетчик фактов (анимированный)
    const factCounters = document.querySelectorAll('.fact-counter');
    
    function animateCounter(counter, target) {
        let count = 0;
        const duration = 2000; // 2 секунды
        const interval = 50; // обновление каждые 50мс
        const steps = duration / interval;
        const increment = target / steps;
        
        const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
                clearInterval(timer);
                counter.textContent = target;
            } else {
                counter.textContent = Math.floor(count);
            }
        }, interval);
    }

    function checkCounters() {
        factCounters.forEach(counter => {
            if (isElementInViewport(counter) && !counter.classList.contains('counted')) {
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
                counter.classList.add('counted');
            }
        });
    }

    // Вызываем функцию при загрузке и прокрутке
    window.addEventListener('load', checkCounters);
    window.addEventListener('scroll', checkCounters);

    // Добавляем эффект параллакса для фоновых изображений
    function parallaxEffect() {
        const parallaxElements = document.querySelectorAll('.parallax-bg');
        
        parallaxElements.forEach(element => {
            const scrollPosition = window.pageYOffset;
            const elementPosition = element.offsetTop;
            const distance = scrollPosition - elementPosition;
            const speed = element.getAttribute('data-speed') || 0.5;
            
            if (isElementInViewport(element)) {
                element.style.backgroundPositionY = `${distance * speed}px`;
            }
        });
    }

    window.addEventListener('scroll', parallaxEffect);

    // Инициализация всплывающих подсказок
    const tooltips = document.querySelectorAll('[data-tooltip]');
    
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', () => {
            const tooltipText = tooltip.getAttribute('data-tooltip');
            const tooltipElement = document.createElement('div');
            tooltipElement.className = 'tooltip';
            tooltipElement.textContent = tooltipText;
            
            document.body.appendChild(tooltipElement);
            
            const rect = tooltip.getBoundingClientRect();
            tooltipElement.style.top = `${rect.top - tooltipElement.offsetHeight - 10}px`;
            tooltipElement.style.left = `${rect.left + (rect.width / 2) - (tooltipElement.offsetWidth / 2)}px`;
            tooltipElement.style.opacity = '1';
        });
        
        tooltip.addEventListener('mouseleave', () => {
            const tooltipElement = document.querySelector('.tooltip');
            if (tooltipElement) {
                tooltipElement.remove();
            }
        });
    });

    // Добавляем галерею изображений с возможностью увеличения
    const galleryImages = document.querySelectorAll('.gallery-image');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="lightbox-close">&times;</span>
                    <img src="${image.src}" alt="${image.alt}">
                    <p class="lightbox-caption">${image.alt}</p>
                </div>
            `;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            // Закрытие лайтбокса
            const closeButton = lightbox.querySelector('.lightbox-close');
            closeButton.addEventListener('click', () => {
                lightbox.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        });
    });

    // Закрытие лайтбокса при клике вне изображения
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Добавляем функцию "Поделиться" для социальных сетей
    const shareButtons = document.querySelectorAll('.share-button');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', () => {
            const platform = button.getAttribute('data-platform');
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(document.title);
            let shareUrl;
            
            switch (platform) {
                case 'facebook':
                    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                    break;
                case 'twitter':
                    shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                    break;
                case 'telegram':
                    shareUrl = `https://t.me/share/url?url=${url}&text=${title}`;
                    break;
                case 'vk':
                    shareUrl = `https://vk.com/share.php?url=${url}&title=${title}`;
                    break;
                default:
                    return;
            }
            
            window.open(shareUrl, '_blank', 'width=600,height=400');
        });
    });

    // Добавляем кнопку "Наверх"
    const scrollTopButton = document.createElement('button');
    scrollTopButton.className = 'scroll-top-button';
    scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTopButton);
    
    // Показываем/скрываем кнопку в зависимости от прокрутки
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    });
    
    // Прокрутка наверх при клике на кнопку
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Добавляем переключение темы (светлая/темная)
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    document.body.appendChild(themeToggle);
    
    // Проверяем сохраненную тему
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Переключение темы при клике
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });

    // Добавляем интерактивную карту звездного неба
    const starMap = document.getElementById('star-map');
    if (starMap) {
        // Создаем звезды
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Случайное положение
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            // Случайный размер
            const size = Math.random() * 3 + 1;
            
            // Случайная яркость
            const opacity = Math.random() * 0.5 + 0.5;
            
            // Применяем стили
            star.style.left = `${x}%`;
            star.style.top = `${y}%`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.opacity = opacity;
            
            // Добавляем звезду на карту
            starMap.appendChild(star);
            
            // Добавляем мерцание
            setInterval(() => {
                star.style.opacity = (Math.random() * 0.5 + 0.5) * opacity;
            }, Math.random() * 5000 + 1000);
        }
        
        // Добавляем созвездия (линии между звездами)
        const constellations = [
            // Большая Медведица
            [[15, 20], [20, 22], [25, 25], [30, 28], [35, 25], [40, 22], [45, 20]],
            // Орион
            [[60, 40], [65, 35], [70, 30], [65, 45], [70, 50], [60, 50], [55, 45]],
            // Кассиопея
            [[80, 15], [85, 10], [90, 15], [85, 20], [80, 25]]
        ];
        
        constellations.forEach(constellation => {
            for (let i = 0; i < constellation.length - 1; i++) {
                const line = document.createElement('div');
                line.className = 'constellation-line';
                
                const [x1, y1] = constellation[i];
                const [x2, y2] = constellation[i + 1];
                
                // Вычисляем длину и угол линии
                const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
                
                // Применяем стили
                line.style.width = `${length}%`;
                line.style.left = `${x1}%`;
                line.style.top = `${y1}%`;
                line.style.transform = `rotate(${angle}deg)`;
                line.style.transformOrigin = 'left center';
                
                starMap.appendChild(line);
            }
        });
    }

    // Добавляем интерактивный квиз о космосе
    const quizContainer = document.getElementById('space-quiz');
    if (quizContainer) {
        const quizQuestions = [
            {
                question: 'Какая планета самая большая в Солнечной системе?',
                options: ['Земля', 'Марс', 'Юпитер', 'Сатурн'],
                answer: 2
            },
            {
                question: 'Сколько планет в Солнечной системе?',
                options: ['7', '8', '9', '10'],
                answer: 1
            },
            {
                question: 'Какая планета известна своими кольцами?',
                options: ['Юпитер', 'Сатурн', 'Уран', 'Нептун'],
                answer: 1
            },
            {
                question: 'Какая планета ближе всего к Солнцу?',
                options: ['Венера', 'Земля', 'Марс', 'Меркурий'],
                answer: 3
            },
            {
                question: 'Как называется галактика, в которой находится Солнечная система?',
                options: ['Андромеда', 'Млечный Путь', 'Треугольник', 'Сомбреро'],
                answer: 1
            }
        ];
        
        let currentQuestion = 0;
        let score = 0;
        
        // Функция для отображения текущего вопроса
        function showQuestion() {
            const question = quizQuestions[currentQuestion];
            
            let optionsHTML = '';
            question.options.forEach((option, index) => {
                optionsHTML += `
                    <div class="quiz-option">
                        <input type="radio" name="quiz" id="option${index}" value="${index}">
                        <label for="option${index}">${option}</label>
                    </div>
                `;
            });
            
            quizContainer.innerHTML = `
                <div class="quiz-progress">Вопрос ${currentQuestion + 1} из ${quizQuestions.length}</div>
                <h3 class="quiz-question">${question.question}</h3>
                <div class="quiz-options">
                    ${optionsHTML}
                </div>
                <button class="quiz-submit">Ответить</button>
            `;
            
            // Обработчик клика на кнопку ответа
            const submitButton = quizContainer.querySelector('.quiz-submit');
            submitButton.addEventListener('click', checkAnswer);
        }
        
        // Функция для проверки ответа
        function checkAnswer() {
            const selectedOption = document.querySelector('input[name="quiz"]:checked');
            
            if (!selectedOption) {
                alert('Пожалуйста, выберите вариант ответа');
                return;
            }
            
            const answer = parseInt(selectedOption.value);
            const correctAnswer = quizQuestions[currentQuestion].answer;
            
            if (answer === correctAnswer) {
                score++;
            }
            
            currentQuestion++;
            
            if (currentQuestion < quizQuestions.length) {
                showQuestion();
            } else {
                showResults();
            }
        }
        
        // Функция для отображения результатов
        function showResults() {
            let resultMessage = '';
            
            if (score === quizQuestions.length) {
                resultMessage = 'Отлично! Вы ответили правильно на все вопросы!';
            } else if (score >= quizQuestions.length / 2) {
                resultMessage = 'Хороший результат! Вы знаете много о космосе.';
            } else {
                resultMessage = 'Попробуйте еще раз! Изучайте космос вместе с нами.';
            }
            
            quizContainer.innerHTML = `
                <h3 class="quiz-results">Ваш результат: ${score} из ${quizQuestions.length}</h3>
                <p>${resultMessage}</p>
                <button class="quiz-restart">Пройти еще раз</button>
            `;
            
            // Обработчик клика на кнопку перезапуска
            const restartButton = quizContainer.querySelector('.quiz-restart');
            restartButton.addEventListener('click', restartQuiz);
        }
        
        // Функция для перезапуска квиза
        function restartQuiz() {
            currentQuestion = 0;
            score = 0;
            showQuestion();
        }
        
        // Запускаем квиз
        showQuestion();
    }

    // Добавляем интерактивную карту запусков космических аппаратов
    const launchMap = document.getElementById('launch-map');
    if (launchMap) {
        // Данные о запусках (координаты космодромов)
        const launchSites = [
            {
                name: 'Космодром Байконур',
                lat: 45.9644,
                lng: 63.3052,
                country: 'Казахстан',
                launches: 'Более 1500 запусков'
            },
            {
                name: 'Космический центр Кеннеди',
                lat: 28.5728,
                lng: -80.6490,
                country: 'США',
                launches: 'Более 400 запусков'
            },
            {
                name: 'Космодром Куру',
                lat: 5.2367,
                lng: -52.7604,
                country: 'Французская Гвиана',
                launches: 'Более 250 запусков'
            },
            {
                name: 'Космодром Цзюцюань',
                lat: 40.9608,
                lng: 100.2910,
                country: 'Китай',
                launches: 'Более 100 запусков'
            },
            {
                name: 'Космодром Плесецк',
                lat: 62.9271,
                lng: 40.5777,
                country: 'Россия',
                launches: 'Более 1500 запусков'
            }
        ];
        
        // Создаем упрощенную карту мира
        launchMap.innerHTML = `
            <div class="world-map">
                <img src="https://i.imgur.com/3kZpwSH.png" alt="Карта мира">
            </div>
        `;
        
        const worldMap = launchMap.querySelector('.world-map');
        
        // Добавляем маркеры космодромов
        launchSites.forEach(site => {
            const marker = document.createElement('div');
            marker.className = 'launch-marker';
            
            // Преобразуем координаты в проценты для позиционирования на карте
            // Примечание: это упрощенное преобразование, не учитывающее проекцию карты
            const x = (site.lng + 180) / 360 * 100;
            const y = (90 - site.lat) / 180 * 100;
            
            marker.style.left = `${x}%`;
            marker.style.top = `${y}%`;
            
            // Добавляем всплывающую информацию
            marker.setAttribute('data-tooltip', `${site.name}, ${site.country}\n${site.launches}`);
            
            worldMap.appendChild(marker);
            
            // Анимация пульсации
            setInterval(() => {
                marker.classList.add('pulse');
                setTimeout(() => {
                    marker.classList.remove('pulse');
                }, 1000);
            }, 3000 + Math.random() * 2000);
        });
    }

    // Добавляем интерактивную временную шкалу исследования космоса
    const spaceTimeline = document.getElementById('space-timeline');
    if (spaceTimeline) {
        const timelineEvents = [
            {
                year: 1957,
                title: 'Запуск первого искусственного спутника Земли',
                description: 'СССР запустил "Спутник-1", первый искусственный спутник Земли.'
            },
            {
                year: 1961,
                title: 'Первый человек в космосе',
                description: 'Юрий Гагарин стал первым человеком, совершившим полет в космическое пространство.'
            },
            {
                year: 1969,
                title: 'Высадка на Луну',
                description: 'Нил Армстронг и Эдвин Олдрин стали первыми людьми, ступившими на поверхность Луны.'
            },
            {
                year: 1990,
                title: 'Запуск телескопа Хаббл',
                description: 'NASA запустило космический телескоп Хаббл, который произвел революцию в астрономии.'
            },
            {
                year: 1998,
                title: 'Начало строительства МКС',
                description: 'Начало сборки Международной космической станции, крупнейшего международного проекта в космосе.'
            },
            {
                year: 2012,
                title: 'Марсоход Curiosity',
                description: 'NASA успешно посадило марсоход Curiosity на поверхность Марса.'
            },
            {
                year: 2020,
                title: 'Запуск марсохода Perseverance',
                description: 'NASA запустило марсоход Perseverance и вертолет Ingenuity для исследования Марса.'
            }
        ];
        
        // Создаем временную шкалу
        let timelineHTML = '<div class="timeline-line"></div>';
        
        timelineEvents.forEach((event, index) => {
            const position = index % 2 === 0 ? 'top' : 'bottom';
            
            timelineHTML += `
                <div class="timeline-event ${position}" style="left: ${index * (100 / (timelineEvents.length - 1))}%">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <h3>${event.year}: ${event.title}</h3>
                        <p>${event.description}</p>
                    </div>
                </div>
            `;
        });
        
        spaceTimeline.innerHTML = timelineHTML;
        
        // Добавляем анимацию при прокрутке
        const timelineEvents2 = spaceTimeline.querySelectorAll('.timeline-event');
        
        function animateTimeline() {
            timelineEvents2.forEach(event => {
                if (isElementInViewport(event)) {
                    event.classList.add('visible');
                }
            });
        }
        
        window.addEventListener('load', animateTimeline);
        window.addEventListener('scroll', animateTimeline);
    }

    // Добавляем интерактивную модель Солнечной системы
    const solarSystem = document.getElementById('solar-system-model');
    if (solarSystem) {
        // Создаем модель
        solarSystem.innerHTML = `
            <div class="sun"></div>
            <div class="orbit mercury-orbit"><div class="planet mercury"></div></div>
            <div class="orbit venus-orbit"><div class="planet venus"></div></div>
            <div class="orbit earth-orbit"><div class="planet earth"></div></div>
            <div class="orbit mars-orbit"><div class="planet mars"></div></div>
            <div class="orbit jupiter-orbit"><div class="planet jupiter"></div></div>
            <div class="orbit saturn-orbit"><div class="planet saturn"><div class="saturn-rings"></div></div></div>
            <div class="orbit uranus-orbit"><div class="planet uranus"></div></div>
            <div class="orbit neptune-orbit"><div class="planet neptune"></div></div>
        `;
        
        // Добавляем всплывающие подсказки для планет
        const planets = solarSystem.querySelectorAll('.planet');
        const planetNames = ['Меркурий', 'Венера', 'Земля', 'Марс', 'Юпитер', 'Сатурн', 'Уран', 'Нептун'];
        
        planets.forEach((planet, index) => {
            planet.setAttribute('data-tooltip', planetNames[index]);
            
            // Добавляем обработчик клика для отображения информации
            planet.addEventListener('click', () => {
                const planetKey = planetNames[index].toLowerCase();
                const planetCard = document.querySelector(`.planet-card[data-planet="${planetKey}"]`);
                
                if (planetCard) {
                    planetCard.click();
                }
            });
        });
    }

    // Добавляем счетчик обратного отсчета до следующего космического события
    const countdown = document.getElementById('space-countdown');
    if (countdown) {
        // Дата следующего события (например, запуск ракеты)
        const eventDate = new Date();
        eventDate.setDate(eventDate.getDate() + 30); // Пример: событие через 30 дней
        
        function updateCountdown() {
            const now = new Date();
            const diff = eventDate - now;
            
            if (diff <= 0) {
                countdown.innerHTML = '<h3>Событие началось!</h3>';
                return;
            }
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            countdown.innerHTML = `
                <h3>До следующего запуска:</h3>
                <div class="countdown-timer">
                    <div class="countdown-item">
                        <span class="countdown-value">${days}</span>
                        <span class="countdown-label">дней</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-value">${hours}</span>
                        <span class="countdown-label">часов</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-value">${minutes}</span>
                        <span class="countdown-label">минут</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-value">${seconds}</span>
                        <span class="countdown-label">секунд</span>
                    </div>
                </div>
            `;
        }
        
        // Обновляем счетчик каждую секунду
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
});


