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
- mapa z pinezkami w odpowiedniej lokalizacji

![Home](https://user-images.githubusercontent.com/94705253/231601932-c6e17c7e-1334-4649-a427-c8a45be50d2d.png)

- wyszukiwanie wycieczek po tytule

![Info_z_pinezki](https://user-images.githubusercontent.com/94705253/231602347-3d6bef39-737c-4565-8c22-4cac9453157d.png)

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

![Form_page1](https://user-images.githubusercontent.com/94705253/231602078-0ccafb98-f2a7-46be-8e23-91365c44b81d.png)

![Form_page1_completed](https://user-images.githubusercontent.com/94705253/231602097-9286dd25-3c0d-4bec-91a1-2f06607903d6.png)

![Form_page2](https://user-images.githubusercontent.com/94705253/231602118-39699e0a-30d2-4236-93fb-049b83736976.png)

![Form_page3](https://user-images.githubusercontent.com/94705253/231602123-0becd631-6f51-4e1f-90f6-31912b635672.png)

- powrót na stronę główną po wysłaniu formularza
- 
![SuccessInfo](https://user-images.githubusercontent.com/94705253/231602182-50f45f9c-1772-45cf-b152-3fe51231f0e1.png)


- podgląd pojedynczech postów

![SinglePostView](https://user-images.githubusercontent.com/94705253/231602213-ced5fab6-10d2-496e-8870-58382aa900e9.png)


- mapa z trasą wycieczki zagnieżdżona na stronie posta (przekazywana poprzez argument src iframe);
- obsługa błędnych ścieżek

![NotFoundPage](https://user-images.githubusercontent.com/94705253/231602274-982ef44d-a4e6-4cfc-a893-539f7d96e0aa.png)



## @TODO
- wyświetlenie wszystkich postów;
-  rejestracja i logowanie (Nest.js)
- dodawanie zdjęć do postów;
- zmiana mapy na mapbox;
- wyszukiwanie po #tagach i po rodzaju aktywności;
- możliwość edycji postów.
