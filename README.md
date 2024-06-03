# Инструкция по установке и использованию приложения

## Установка
1. Клонируйте репозиторий на вашу локальную машину.
2. Перейдите в директорию проекта.
3. Установите необходимые зависимости, запустив следующую команду в терминале:
```
npm install
```
4. Сборка Docker-образов для компонентов клиента и сервера выполняется с помощью следующей команды:
```
docker-compose build
```
5. Запустите Docker-контейнеры, выполнив следующую команду:
```
docker-compose up
```

## Использование
1. Откройте веб-браузер и перейдите по адресу http://localhost:3000, чтобы открыть клиентское приложение.
2. В клиентском приложении отобразится список доступных лент.
3. Нажмите на ленту, чтобы просмотреть ее подробности.
4. Кроме того, вы можете напрямую обратиться к API сервера по адресу http://localhost:3001/.
5. API сервера предоставляет конечные точки для получения данных о ленте. Вы можете использовать инструменты, такие как cURL или Postman, для взаимодействия с API.

## Документирование кода и архитектуры
Код сервера находится в директории `server`.