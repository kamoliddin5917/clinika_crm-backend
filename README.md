#TZ #nt019

1.  
    Endpoint: "/register",
    Method: "POST",
    Description: "Foydalanuvchi ro`yxatdan o'tadi"
2. 
    Endpoint: "/login",
    Method: "POST",
    Description: "Admin va Oddiy foydalanuvchini tekshirgan xolda, biror bir pagega o`tkazsin."
3. 
    Endpoint: "/admins/users",
    Method: "GET",
    Description: "Admin panelda, foydalanuvchilar ro`yxatini ko'ra olsin."
4. 
    Endpoint: "/admins/orders",
    Method: "GET",
    Description: "Admin panelda, foydalanuvchi qoldirgan so'rovni ko'ra olish va uni tasdiqlash."
5. 
    Endpoint: "/admins/users/:userID",
    Method: "GET",
    Description: "Admin panelda, har bir foydalanuvchiga tegishli navbat tarixi ko'rinishi kerak."
6. 
    Endpoint: "/home",
    Method: "GET",
    Description: "Landing page."
7.
    Endpoint: "/ochered",
    Method: "POST",
    Description: "Foydalanuvchi royxatdan o'tgandan so'ng, forma orqali navbat olish kerak.
                  Formada foydalanuvchi telefon raqam, ism-familiya, klinika va klinikadagi yo'nalishni aniqlab jo'natish kerak."
8. 
    Endpoint: "/clinics",
    Method: "GET",
    Description: "Klinikalar ro'yxati ko'rinish kerak."
9. 
    Endpoint: "/yo'nalish duxtir",
    Method: "GET",
    Description: "Klinika yo'nalishlari korinishi kerak."
10.
    Endpoint: "/submitOrder",
    Method: "POST",
    Description: "Kasal shifokor ko'rigidan chiqganidan so'ng, admin u band qilgan navbatni o'chirib yuborishi kerak."