# Email Integration с Mailgun

## Настройка завершена ✅

### ✅ Production готов!
Настроен собственный домен `getdressed.ae` с полноценной отправкой писем на любые адреса.

### Автоматические Welcome письма
- **Триггер**: Когда пользователь добавляется в waitlist через любую форму
- **Содержание**: Приветственное письмо с benefits раннего доступа
- **Отправитель**: `GetDressed Team <info@getdressed.ae>`

### Формы, которые отправляют письма:
1. **Главная страница**: WaitlistForm компонент
2. **Поп-ап в статьях блога**: NewsletterPopup компонент

### API Endpoints:

#### `/api/send-welcome-email` (POST)
Отправляет welcome письмо конкретному пользователю
```json
{
  "email": "user@example.com"
}
```

#### `/api/send-bulk-email` (POST)  
Отправляет письмо всем пользователям в waitlist
```json
{
  "subject": "Тема письма",
  "htmlContent": "<html>...</html>",
  "textContent": "Текстовая версия письма"
}
```

### Переменные окружения:
```env
MAILGUN_API_KEY=your_mailgun_api_key_here
```

### Mailgun настройки:
- **Domain**: `getdressed.ae`
- **API Base URL**: `https://api.mailgun.net/v3/getdressed.ae/`
- **Отправка**: На любые email адреса ✅

## Как использовать bulk email:

### Пример отправки launch notification:
```bash
curl -X POST http://localhost:3000/api/send-bulk-email \
  -H "Content-Type: application/json" \
  -d '{
    "subject": "🎉 GetDressed is LIVE!",
    "htmlContent": "<h1>We are officially live!</h1><p>Download the app now...</p>",
    "textContent": "We are officially live! Download the app now..."
  }'
```

## Дизайн welcome письма:
- Responsive HTML дизайн
- Брендинг GetDressed
- Список benefits для early users
- Социальные ссылки
- Контактная информация

## Отказоустойчивость:
- Если письмо не отправилось, пользователь всё равно добавляется в БД
- Ошибки логируются в консоль
- Bulk отправка идёт батчами по 10 писем с паузами