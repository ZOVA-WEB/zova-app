"use client";

import { useState } from "react";

type Product = {
  name: string;
  image: string;
  description?: string;
};

type Category = {
  name: string;
  subtitle: string;
  image: string;
  products: Product[];
};

type Recipe = {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  ingredients: string[];
  steps: string[];
};

const categories: Category[] = [
  {
    name: "Chipsy",
    subtitle: "CRUNCH. RARE. ADDICTIVE.",
    image: "/CHIPSY.png",
    products: [
      {
        name: "Chipsy Klasyczne",
        image: "/ChipsyKlasyczne.png",
        description: "Klasyczne smaki, których nie może zabraknąć.",
      },
      {
        name: "Chipsy Ostre",
        image: "/ChipsyOstre.png",
        description: "Dla tych, którzy lubią mocniejsze doznania.",
      },
      {
        name: "Chipsy Serowe",
        image: "/ChipsySerowe.png",
        description: "Intensywnie serowe i wyjątkowo chrupiące.",
      },
    ],
  },

  {
    name: "Napoje",
    subtitle: "RARE FLAVORS. BOLD CHOICE.",
    image: "/Napoje.png",
    products: [
      {
        name: "Coca-Cola",
        image: "/NapojeCocaCola.png",
        description: "Rare & unique Coca-Cola flavors.",
      },
      {
        name: "Fanta",
        image: "/NapojeFanta.png",
        description: "Kolorowe i nietypowe warianty.",
      },
      {
        name: "Ice Tea",
        image: "/NapojeIceTea.png",
        description: "Orzeźwiające warianty z różnych zakątków świata.",
      },
      {
        name: "Red Bull",
        image: "/REDBULL.png",
        description: "Energia w wyjątkowych wariantach.",
      },
      {
        name: "Pepsi",
        image: "/PEPSI.png",
        description: "Rare Pepsi flavors.",
      },
      {
        name: "Klasyczne Orzeźwienie",
        image: "/NapojeKlasyczneOrzezwienie.png",
        description: "Wyjątkowe napoje na każdą okazję.",
      },
    ],
  },

  {
    name: "Słodkie",
    subtitle: "RARE. UNIQUE. LEGENDARY.",
    image: "/SLODYCZE.png",
    products: [
      {
        name: "OREO",
        image: "/OREO.png",
        description: "Rare & limited edition OREO flavors.",
      },
      {
        name: "KitKat",
        image: "/KITKAT.png",
        description: "Wyjątkowe warianty KitKat.",
      },
      {
        name: "Kinder",
        image: "/KINDER.png",
        description: "Limitowane i nietypowe produkty Kinder.",
      },
      {
        name: "Milka",
        image: "/MILKA.png",
        description: "Czekoladowe warianty, których nie znajdziesz wszędzie.",
      },
      {
        name: "7Days",
        image: "/7DAYS.png",
        description: "Rare croissant flavors.",
      },
      {
        name: "Reese's",
        image: "/REESES.png",
        description: "Peanut butter heaven.",
      },
    ],
  },

  {
    name: "Energy",
    subtitle: "ENERGY. RARE. DIFFERENT.",
    image: "/ENERGY.png",
    products: [
      {
        name: "Energy",
        image: "/ENERGY.png",
        description: "Nietypowe energetyki i limitowane warianty.",
      },
      {
        name: "Red Bull",
        image: "/NapojeRedBull.png",
        description: "Rare Red Bull flavors.",
      },
    ],
  },

  {
    name: "Nachosy",
    subtitle: "RARE. BOLD. ADDICTIVE.",
    image: "/NACHOS&DIPS.png",
    products: [
      {
        name: "Nachosy",
        image: "/NACHOS&DIPS.png",
        description: "Chrupiące nachosy idealne do sosów ZOVA.",
      },
    ],
  },

  {
    name: "Sosy",
    subtitle: "SOSY NA KAŻDĄ OKAZJĘ.",
    image: "/SOSY.png",
    products: [
      {
        name: "Sosy ZOVA",
        image: "/SOSY.png",
        description:
          "Wyjątkowe sosy do burgerów, nachosów, chipsów, BBQ i nie tylko.",
      },
    ],
  },
];

const reesesProducts: Product[] = [
  {
    name: "Reese's Caramel Big Cup",
    image: "/reeses_caramel_big_cup.PNG",
    description: "Reese's Big Cup z wyjątkowym karmelem.",
  },
  {
    name: "Reese's Chocolate Lava Big Cup",
    image: "/reeses_chocolate_java_big_cup.PNG",
    description: "Intensywne połączenie czekolady i peanut butter.",
  },
  {
    name: "Reese's Filled Pretzels",
    image: "/reeses_filled_pretzels.PNG",
    description: "Chrupiące precle wypełnione masłem orzechowym Reese's.",
  },
  {
    name: "Reese's Mini Pumpkins",
    image: "/reeses_mini_pumpkins.PNG",
    description: "Miniaturowe Reese's w wyjątkowym Pumpkin-Design.",
  },
  {
    name: "Reese's Nutrageous",
    image: "/reeses_nutrageous.PNG",
    description: "Peanut butter, karmel i chrupiące dodatki.",
  },
  {
    name: "Reese's Oreo",
    image: "/reeses_oreo.PNG",
    description: "Reese's połączone z kultowym Oreo.",
  },
  {
    name: "Reese's Pieces",
    image: "/reeses_pieces.PNG",
    description: "Klasyczne Reese's Pieces z peanut butter.",
  },
  {
    name: "Reese's Pretzels Big Cup",
    image: "/reeses_pretzels_big_cup.PNG",
    description: "Big Cup z chrupiącymi preclami.",
  },
  {
    name: "Reese's Sticks",
    image: "/reeses_sticks.PNG",
    description: "Knusprige Sticks mit Reese's Peanut Butter.",
  },
  {
    name: "Reese's White",
    image: "/reeses_white.PNG",
    description: "Weiße Schokolade mit klassischem Reese's Peanut Butter.",
  },
];

const recipes: Recipe[] = [
  {
    title: "ZOVA Burger Night",
    subtitle: "BURGER + SOS + CRUNCH",
    description:
      "Stwórz własnego burgera ZOVA z soczystym mięsem, serem, chrupiącymi dodatkami i ulubionym sosem.",
    icon: "🍔",
    image: "/ZOVABURGERNIGHT.png",
    ingredients: [
      "Bułka burgerowa",
      "Wołowina 150–200 g",
      "Ser cheddar",
      "Sałata",
      "Pomidor",
      "Cebula",
      "Chipsy ZOVA",
      "Ulubiony sos ZOVA",
    ],
    steps: [
      "Uformuj mięso i dopraw je według własnego smaku.",
      "Usmaż burgera na mocno rozgrzanej patelni lub grillu.",
      "Pod koniec smażenia dodaj ser cheddar.",
      "Podpiecz bułkę.",
      "Dodaj warzywa i dużą porcję sosu ZOVA.",
      "Na koniec dodaj pokruszone chipsy dla dodatkowego crunchu.",
    ],
  },

  {
    title: "BBQ Night",
    subtitle: "GRILL. SOS. SMOKE.",
    description:
      "Wieczór BBQ z grillowanym mięsem, intensywnym sosem i zimnym napojem.",
    icon: "🔥",
    image: "/BBQNIGHT.JPG",
    ingredients: [
      "Żeberka lub skrzydełka",
      "Sos BBQ ZOVA",
      "Papryka słodka",
      "Czosnek",
      "Sól",
      "Pieprz",
      "Chipsy ZOVA",
      "Ulubiony napój",
    ],
    steps: [
      "Natrzyj mięso przyprawami.",
      "Odstaw je na minimum 30 minut.",
      "Grilluj mięso powoli, aż będzie miękkie.",
      "Pod koniec dokładnie posmaruj je sosem BBQ ZOVA.",
      "Daj sosowi lekko się skarmelizować.",
      "Podawaj z chipsami i zimnym napojem.",
    ],
  },

  {
    title: "ZOVA RIBS",
    subtitle: "LOW & SLOW",
    description:
      "Soczyste żeberka z mocnym BBQ glaze'em. Idealne na wieczór ze znajomymi.",
    icon: "🍖",
    image: "/ZOVARIBS.png",
    ingredients: [
      "Żeberka wieprzowe",
      "Sól",
      "Pieprz",
      "Papryka wędzona",
      "Czosnek",
      "Sos BBQ ZOVA",
      "Odrobina miodu",
    ],
    steps: [
      "Usuń błonę z tylnej strony żeberek.",
      "Natrzyj mięso przyprawami.",
      "Piecz powoli w niskiej temperaturze.",
      "Posmaruj żeberka sosem BBQ ZOVA.",
      "Dodaj odrobinę miodu dla karmelizacji.",
      "Dopiekaj do momentu uzyskania intensywnej glazury.",
    ],
  },

  {
    title: "Nachos & Dips",
    subtitle: "CRUNCH. DIPS. FRIENDS.",
    description:
      "Chrupiące nachosy i kilka różnych sosów. Prosty zestaw na wspólny wieczór.",
    icon: "🌶️",
    image: "/NACHOS&DIPS.png",
    ingredients: [
      "Nachosy",
      "Sos serowy",
      "Sos BBQ ZOVA",
      "Sos ostry ZOVA",
      "Jalapeño",
      "Ser cheddar",
      "Guacamole",
    ],
    steps: [
      "Rozłóż nachosy na dużym talerzu.",
      "Dodaj starty cheddar.",
      "Podgrzej wszystko do momentu roztopienia sera.",
      "Dodaj jalapeño.",
      "Przygotuj kilka sosów w osobnych miseczkach.",
      "Podawaj od razu, gdy nachosy są jeszcze chrupiące.",
    ],
  },

  {
    title: "Chips & Sauce",
    subtitle: "SIMPLE. CRUNCHY. ZOVA.",
    description:
      "Najprostszy sposób na wieczór ZOVA — wybierz chipsy i połącz je z odpowiednim sosem.",
    icon: "🥔",
    image: "/CHIPS&SAUCE.png",
    ingredients: [
      "Chipsy klasyczne",
      "Chipsy ostre",
      "Chipsy serowe",
      "Sos ZOVA",
      "Sos BBQ",
      "Sos serowy",
    ],
    steps: [
      "Wybierz minimum dwa różne rodzaje chipsów.",
      "Przygotuj kilka różnych sosów.",
      "Ułóż wszystko na dużej desce lub talerzu.",
      "Spróbuj różnych kombinacji.",
      "Znajdź swoje ulubione połączenie ZOVA.",
    ],
  },
];

export default function Home() {
    const [activeCategory, setActiveCategory] = useState<Category | null>(null);
    const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);
    const [activeProductCollection, setActiveProductCollection] = useState<
    Product[] | null
    >(null);
    const [activeProduct, setActiveProduct] = useState<Product | null>(null);
    const [showAllProducts, setShowAllProducts] = useState(false);
    
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    
    const allProducts = categories.flatMap((category) =>
                                           category.products.map((product) => ({
        ...product,
        category: category.name,
    }))
                                           );
    
    const openCategory = (category: Category) => {
        setActiveCategory(category);
    };
    
    const openProduct = (product: Product) => {
        if (product.name === "Reese's") {
            setActiveProductCollection(reesesProducts);
            return;
        }
        
        setActiveProduct(product);
    };
    
    return (
            <main className="zova-page">
            {/* NAVIGATION */}
            
            <nav className="navbar">
            <button
            className="logo"
            onClick={() => scrollToSection("home")}
            aria-label="ZOVA Home"
            >
            ZOVA
            </button>
            
            <div className="nav-links">
            <button onClick={() => scrollToSection("categories")}>
            Kategorie
            </button>
            
            <button onClick={() => scrollToSection("products")}>
            Produkte
            </button>
            
            <button onClick={() => scrollToSection("diy")}>
            Zrób to Sam
            </button>
            
            <button onClick={() => scrollToSection("coming-soon")}>
            Aplikacja
            </button>
            </div>
            
            <button
            className="nav-mobile-button"
            onClick={() => scrollToSection("categories")}
            >
            MENU
            </button>
            </nav>
            
            {/* HERO */}
            
            <section id="home" className="hero">
            <div className="hero-grid" />
            <div className="hero-glow glow-one" />
            <div className="hero-glow glow-two" />
            
            <div className="hero-floating hero-floating-one">Z</div>
            <div className="hero-floating hero-floating-two">✦</div>
            
            <div className="hero-content">
            <div className="hero-small">WELCOME TO</div>
            
            <h1>ZOVA</h1>
            
            <p className="hero-title">RARE. UNIQUE. DIFFERENT.</p>
            
            <p className="hero-description">
            Produkty, których nie znajdziesz wszędzie.
            <br />
            Odkrywaj nowe smaki. Wybieraj inaczej.
            </p>
            
            <button
            className="main-button"
            onClick={() => scrollToSection("categories")}
            >
            <span>ODKRYJ ZOVA</span>
            <strong>→</strong>
            </button>
            </div>
            
            <div className="hero-scroll">
            <span>SCROLL TO DISCOVER</span>
            <strong>↓</strong>
            </div>
            </section>
            
            {/* CATEGORIES */}
            
            <section id="categories" className="categories-section">
            <div className="section-heading">
            <span>DISCOVER</span>
            
            <h2>ODKRYJ SWÓJ SMAK</h2>
            
            <p>
            Rare produkty. Limitowane edycje.
            <br />
            Smaki z całego świata.
            </p>
            </div>
            
            <div className="category-grid">
            {categories.map((category, index) => (
                                                  <button
                                                  className="category-card"
                                                  key={category.name}
                                                  onClick={() => openCategory(category)}
                                                  type="button"
                                                  style={{ animationDelay: `${index * 80}ms` }}
                                                  >
                                                  <div className="category-image-wrapper">
                                                  <img
                                                  src={category.image}
                                                  alt={category.name}
                                                  className="category-image"
                                                  />
                                                  
                                                  <div className="category-image-shine" />
                                                  <div className="category-overlay" />
                                                  </div>
                                                  
                                                  <div className="category-content">
                                                  <span>{category.subtitle}</span>
                                                  
                                                  <h3>{category.name}</h3>
                                                  
                                                  <div className="discover-link">
                                                  <span>ODKRYJ</span>
                                                  <strong>→</strong>
                                                  </div>
                                                  </div>
                                                  
                                                  <div className="card-corner">ZOVA</div>
                                                  </button>
                                                  ))}
            </div>
            </section>
            
            {/* PRODUCTS */}
            
            <section id="products" className="products-section">
            <div className="section-heading">
            <span>ZOVA SELECTION</span>
            
            <h2>RARE PRODUCTS</h2>
            
            <p>
            Wybrane produkty dostępne
            <br />
            w świecie ZOVA.
            </p>
            </div>
            
            <div className="product-showcase">
            {allProducts
                .slice(0, showAllProducts ? allProducts.length : 8)
                .map((product, index) => (
                                          <button
                                          className="product-card"
                                          key={`${product.name}-${index}`}
                                          type="button"
                                          onClick={() => openProduct(product)}
                                          >
                                          <div className="product-image-container">
                                          <img src={product.image} alt={product.name} />
                                          </div>
                                          
                                          <div className="product-info">
                                          <span>{product.category}</span>
                                          
                                          <h3>{product.name}</h3>
                                          
                                          {product.description && <p>{product.description}</p>}
                                          
                                          <div className="product-open">
                                          ZOBACZ
                                          <strong>→</strong>
                                          </div>
                                          </div>
                                          </button>
                                          ))}
            </div>
            
            <div className="center-button">
            <button
            className="outline-button"
            onClick={() => setShowAllProducts(!showAllProducts)}
            type="button"
            >
            <span>
            {showAllProducts ? "POKAŻ MNIEJ" : "ZOBACZ WIĘCEJ"}
            </span>
            
            <strong>{showAllProducts ? "↑" : "→"}</strong>
            </button>
            </div>
            </section>
            
            {/* DIY */}
            
            <section id="diy" className="diy-section">
            <div className="diy-grid" />
            <div className="diy-background" />
            
            <div className="section-heading light">
            <span>ZOVA EXPERIENCE</span>
            
            <h2>Zrób to Sam</h2>
            
            <p>
            Nie tylko kupuj.
            <br />
            Stwórz swój własny wieczór ZOVA.
            </p>
            </div>
            
            <div className="recipe-grid">
            {recipes.map((recipe, index) => (
                                             <button
                                             className="recipe-card"
                                             key={recipe.title}
                                             onClick={() => setActiveRecipe(recipe)}
                                             type="button"
                                             >
                                             <div className="recipe-image-wrapper">
                                             <img
                                             src={recipe.image}
                                             alt={recipe.title}
                                             className="recipe-image"
                                             />
                                             
                                             <div className="recipe-image-overlay" />
                                             </div>
                                             
                                             <div className="recipe-card-content">
                                             <div className="recipe-top">
                                             <div className="recipe-icon">{recipe.icon}</div>
                                             
                                             <div className="recipe-number">
                                             0{index + 1}
                                             </div>
                                             </div>
                                             
                                             <h3>{recipe.title}</h3>
                                             
                                             <span className="recipe-subtitle">
                                             {recipe.subtitle}
                                             </span>
                                             
                                             <p>{recipe.description}</p>
                                             
                                             <div className="recipe-button">
                                             <span>SPRAWDŹ PRZEPIS</span>
                                             <strong>→</strong>
                                             </div>
                                             </div>
                                             </button>
                                             ))}
            </div>
            
            {/* SPECIAL */}
            
            <section className="special-section">
            <div className="special-grid" />
            <div className="special-glow" />
            
            <div className="special-content">
            <span>THE ZOVA WAY</span>
            
            <h2>
            NIE SZUKAJ
            <br />
            <strong>ZWYKŁYCH SMAKÓW.</strong>
            </h2>
            
            <p>
            ZOVA to miejsce dla tych,
            <br />
            którzy chcą spróbować czegoś nowego.
            </p>
            
            <button
            className="main-button"
            onClick={() => scrollToSection("coming-soon")}
            >
            <span>POZNAJ ZOVA</span>
            <strong>→</strong>
            </button>
            </div>
            </section>
            
            {/* APP */}
            
            <section id="coming-soon" className="coming-soon-section">
            <div className="coming-grid" />
            <div className="coming-glow" />
            
            <div className="coming-content">
            <span className="coming-label">COMING SOON</span>
            
            <h2>
            ZOVA
            <br />
            <strong>APP</strong>
            </h2>
            
            <p className="coming-main">
            COŚ WIELKIEGO
            <br />
            NADCHODZI.
            </p>
            
            <p className="coming-description">
            ZOVA pojawi się już wkrótce
            <br />
            na iOS oraz Android.
            <br />
            Dokładna data premiery zostanie ujawniona później.
            </p>
            
            <div className="release-box">
            <small>PREMIERA</small>
            <strong>01.XX.ZOVA</strong>
            <span>DATA PREMIERY ZOSTANIE UJAWNIONA</span>
            </div>
            
            <div className="stores">
            <div className="store">
            <div className="store-icon apple"></div>
            
            <div>
            <small>AVAILABLE ON</small>
            <strong>App Store</strong>
            </div>
            </div>
            
            <div className="store">
            <div className="store-icon google">▶</div>
            
            <div>
            <small>GET IT ON</small>
            <strong>Google Play</strong>
            </div>
            </div>
            </div>
            </div>
            </section>
            
            </section>
            
            {/* CATEGORY MODAL */}
            
            {activeCategory && (
                                <div
                                className="modal-background"
                                onClick={() => setActiveCategory(null)}
                                >
                                <div
                                className="category-modal"
                                onClick={(event) => event.stopPropagation()}
                                >
                                <button
                                className="close-button"
                                onClick={() => setActiveCategory(null)}
                                type="button"
                                >
                                ×
                                </button>
                                
                                <div className="modal-header">
                                <span>RARE SELECTION</span>
                                
                                <h2>{activeCategory.name}</h2>
                                
                                <p>{activeCategory.subtitle}</p>
                                </div>
                                
                                <div className="modal-products">
                                {activeCategory.products.map((product, index) => (
                                                                                  <button
                                                                                  className="modal-product"
                                                                                  key={`${product.name}-${index}`}
                                                                                  type="button"
                                                                                  onClick={() => openProduct(product)}
                                                                                  >
                                                                                  <div className="modal-product-image">
                                                                                  <img src={product.image} alt={product.name} />
                                                                                  </div>
                                                                                  
                                                                                  <div className="modal-product-info">
                                                                                  <h3>{product.name}</h3>
                                                                                  
                                                                                  {product.description && (
                                                                                                           <p>{product.description}</p>
                                                                                                           )}
                                                                                  
                                                                                  <span>
                                                                                  ZOBACZ PRODUKT →
                                                                                  </span>
                                                                                  </div>
                                                                                  </button>
                                                                                  ))}
                                </div>
                                </div>
                                </div>
                                )}
            
            {/* REESE'S COLLECTION MODAL */}
            
            {activeProductCollection && (
                                         <div
                                         className="modal-background"
                                         onClick={() => setActiveProductCollection(null)}
                                         >
                                         <div
                                         className="collection-modal"
                                         onClick={(event) => event.stopPropagation()}
                                         >
                                         <button
                                         className="close-button"
                                         onClick={() => setActiveProductCollection(null)}
                                         type="button"
                                         >
                                         ×
                                         </button>
                                         
                                         <div className="collection-header">
                                         <span>ZOVA SELECTION</span>
                                         
                                         <h2>REESE'S</h2>
                                         
                                         <p>PEANUT BUTTER HEAVEN.</p>
                                         </div>
                                         
                                         <div className="collection-grid">
                                         {activeProductCollection.map((product, index) => (
                                                                                           <button
                                                                                           className="collection-product"
                                                                                           key={`${product.name}-${index}`}
                                                                                           type="button"
                                                                                           onClick={() => setActiveProduct(product)}
                                                                                           >
                                                                                           <div className="collection-image">
                                                                                           <img src={product.image} alt={product.name} />
                                                                                           </div>
                                                                                           
                                                                                           <div className="collection-product-info">
                                                                                           <span>REESE'S</span>
                                                                                           
                                                                                           <h3>{product.name}</h3>
                                                                                           
                                                                                           <p>{product.description}</p>
                                                                                           </div>
                                                                                           </button>
                                                                                           ))}
                                         </div>
                                         </div>
                                         </div>
                                         )}
            
            {/* PRODUCT MODAL */}
            
            {activeProduct && (
                               <div
                               className="modal-background product-modal-background"
                               onClick={() => setActiveProduct(null)}
                               >
                               <div
                               className="product-modal"
                               onClick={(event) => event.stopPropagation()}
                               >
                               <button
                               className="close-button"
                               onClick={() => setActiveProduct(null)}
                               type="button"
                               >
                               ×
                               </button>
                               
                               <div className="product-modal-image">
                               <img
                               src={activeProduct.image}
                               alt={activeProduct.name}
                               />
                               </div>
                               
                               <div className="product-modal-content">
                               <span>ZOVA SELECTION</span>
                               
                               <h2>{activeProduct.name}</h2>
                               
                               <p>
                               {activeProduct.description ||
                                   "Wyjątkowy produkt dostępny w świecie ZOVA."}
                               </p>
                               
                               <div className="product-modal-tag">
                               RARE PRODUCT
                               </div>
                               </div>
                               </div>
                               </div>
                               )}
            
            {/* RECIPE MODAL */}
            
            {activeRecipe && (
                              <div
                              className="modal-background recipe-modal-background"
                              onClick={() => setActiveRecipe(null)}
                              >
                              <div
                              className="recipe-modal"
                              onClick={(event) => event.stopPropagation()}
                              >
                              <button
                              className="close-button"
                              onClick={() => setActiveRecipe(null)}
                              type="button"
                              >
                              ×
                              </button>
                              
                              <div className="recipe-modal-top">
                              <div className="large-recipe-icon">
                              {activeRecipe.icon}
                              </div>
                              
                              <div>
                              <span>ZOVA DIY</span>
                              
                              <h2>{activeRecipe.title}</h2>
                              
                              <strong>{activeRecipe.subtitle}</strong>
                              </div>
                              </div>
                              
                              <p className="recipe-modal-description">
                              {activeRecipe.description}
                              </p>
                              
                              <div className="recipe-columns">
                              <div>
                              <h3>SKŁADNIKI</h3>
                              
                              <ul>
                              {activeRecipe.ingredients.map((ingredient) => (
                                                                             <li key={ingredient}>{ingredient}</li>
                                                                             ))}
                              </ul>
                              </div>
                              
                              <div>
                              <h3>PRZYGOTOWANIE</h3>
                              
                              <ol>
                              {activeRecipe.steps.map((step, index) => (
                                                                        <li key={index}>
                                                                        <span>{index + 1}</span>
                                                                        {step}
                                                                        </li>
                                                                        ))}
                              </ol>
                              </div>
                              </div>
                              </div>
                              </div>
                              )}
            
            {/* FOOTER */}
            
            <footer className="footer">
            <div className="footer-logo">ZOVA</div>
            
            <p>RARE PRODUCTS. UNIQUE EXPERIENCE.</p>
            
            <div className="footer-line" />
            
            <div className="footer-bottom">
            <span>
            © {new Date().getFullYear()} ZOVA. ALL RIGHTS RESERVED.
            </span>
            
            <span>RARE. UNIQUE. DIFFERENT.</span>
            </div>
            </footer>
            </main>
            );
}

