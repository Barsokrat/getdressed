# Шаблон для статей блога GetDressed

## Структура файла статьи
Располагать в: `/app/blog/[slug]/page.tsx`

## Импорты (обязательно!)
```jsx
'use client'

import Link from 'next/link'
import ScrollToTop from '../../components/ScrollToTop'
import NewsletterPopup from '../../components/NewsletterPopup'
import { useNewsletterPopup } from '../../hooks/useNewsletterPopup'
```

## Функция компонента
```jsx
export default function ArticlePage() {
  const { isOpen, openPopup, closePopup } = useNewsletterPopup()
  return (
    // содержимое
  )
}
```

## Обязательные элементы:

### 1. Фоновые паттерны (одинаковые для всех)
```jsx
{/* Background pattern */}
<div 
  className="fixed inset-0 opacity-60 dark:opacity-0"
  style={{
    backgroundImage: 'linear-gradient(45deg, #ddc4c9 25%, transparent 25%, transparent 75%, #ddc4c9 75%, #ddc4c9), linear-gradient(45deg, #ddc4c9 25%, transparent 25%, transparent 75%, #ddc4c9 75%, #ddc4c9)',
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 10px 10px'
  }}
/>
<div 
  className="fixed inset-0 opacity-0 dark:opacity-10"
  style={{
    backgroundImage: 'linear-gradient(45deg, #f3e7e9 25%, transparent 25%, transparent 75%, #f3e7e9 75%, #f3e7e9), linear-gradient(45deg, #f3e7e9 25%, transparent 25%, transparent 75%, #f3e7e9 75%, #f3e7e9)',
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0, 10px 10px'
  }}
/>

{/* Gradient overlay */}
<div className="fixed inset-0 bg-gradient-to-br from-rose-100 via-white to-blue-100 opacity-90" />
```

### 2. Заголовок статьи
```jsx
<div className="mb-12">
  <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-black mb-6">
    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
    Back to Blog
  </Link>
  
  <div className="flex items-center gap-4 mb-6">
    <span className="bg-black text-white px-3 py-1 text-sm font-medium rounded-full">
      КАТЕГОРИЯ
    </span>
    <span className="text-gray-500 text-sm">ДАТА</span>
    <span className="text-gray-500 text-sm">•</span>
    <span className="text-gray-500 text-sm">ВРЕМЯ ЧТЕНИЯ</span>
  </div>
  
  <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
    ЗАГОЛОВОК СТАТЬИ
  </h1>
  
  <p className="text-xl text-gray-900 leading-relaxed">
    КРАТКОЕ ОПИСАНИЕ
  </p>
</div>
```

### 3. Контейнер статьи (обязательно!)
```jsx
<article className="bg-white/90 backdrop-blur rounded-lg p-8 shadow-lg prose prose-lg max-w-none">
  <!-- СОДЕРЖИМОЕ СТАТЬИ -->
</article>
```

### 4. CTA секция с поп-апом
```jsx
{/* CTA */}
<div className="mt-16 text-center bg-black text-white p-8 rounded-lg">
  <h3 className="text-2xl font-bold mb-4">ЗАГОЛОВОК CTA</h3>
  <p className="mb-6">Описание призыва к действию</p>
  <button 
    onClick={openPopup}
    className="inline-block bg-white text-black px-8 py-3 font-bold hover:bg-yellow-400 hover:shadow-lg hover:scale-105 transition-all duration-200"
  >
    ТЕКСТ КНОПКИ
  </button>
</div>
```

### 5. Завершение компонента
```jsx
      </div>
      <ScrollToTop />
      <NewsletterPopup isOpen={isOpen} onClose={closePopup} />
    </div>
  )
}
```

### 6. Добавление в список блога
В файле `/app/blog/page.tsx` добавить в массив `posts`:
```js
{
  slug: 'url-slug-statyi',
  title: 'Заголовок статьи',
  excerpt: 'Краткое описание для превью',
  date: 'Month DD, YYYY',
  readTime: 'X min read',
  category: 'Категория'
}
```

## CSS стили
Все стили для статей уже настроены в `/app/globals.css`:
- Автоматическое форматирование заголовков H2/H3
- Правильные отступы между абзацами
- Цвета для светлой и тёмной темы браузера
- Белый фон для статей в любой теме

## Важно!
- НЕ добавлять `dark:` классы в компоненты
- НЕ менять структуру фона и контейнера
- Все статьи должны использовать класс `prose` для контента