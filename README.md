# AdventureTracker

# O aplikacji

Jest to prosta, acz użyteczna apka służąca do zapisywania i przeglądanie odbytych wycieczek. Jest podział na rodzaj wykonywanej aktywności: hiking, wspinaczka, alpinizm, via ferrata, rower, kajak, jacht. Po skończeniu pracy nad aplikacją, przeznaczona będzie do użytku osobistego.

# Odpalenia aplikacji lokalnie
- Ściągnij BE (branch main):
🔗 https://github.com/git-asia/AdventureTracker_Server
- Ściągnij FE (branch main):
🔗 https://github.com/git-asia/AdventureTracker_Client
- Zainstaluj zależności z package.json, zarówno na FE, jak i na BE:
`npm i`
- Na BE - zmienić dane w pliku config.example.ts na istniejącą bazę i zmienić nazwę pliku na config.ts;
- Odpalić BE:  `npm start` (localhost:3300)
- Odpalić FE:  `npm start` (localhost:3000)

# Demo
https://jt.networkmanager.pl/

(złośliwość rzeczy martwych, albo w pośpiechu coś źle podłączyłam, bo BE odmawia dostępu)

# Stack
- Express.js
- Node.js
- TS
- React
- sql
- sass

# WIP

Aplikacja nie jest jeszcze ukończona...

## Co udało się wdrożyć:
- mapa z pinezkami w odpowiedniej lokalizacji;
- wyszukiwanie wycieczek po tytule;
- dodawanie nowych wypraw poprzez 3-stopniowy formularz, poprzez który do bazy przekazywane są informacje:
	- id: string;  
	- title: string;  
	- date: string;  
	- duration: number;  
	- kind: string;  
	- tags: string;  
	- description: string;  
	- url: string;  
	- iframe: string;  (atrybut src)
	- lat: number;  
	- lon: number;
- powrót na stronę główną po wysłaniu formularza;
- podgląd pojedynczech postów;
- mapa z trasą wycieczki zagnieżdżona na stronie posta (przekazywana poprzez argument src iframe);
- obsługa błędnych ścieżek.


## @TODO
- wyświetlenie wszystkich postów;
-  rejestracja i logowanie (Nest.js)
- dodawanie zdjęć do postów;
- zmiana mapy na mapbox;
- wyszukiwanie po #tagach i po rodzaju aktywności;
- możliwość edycji postów.
