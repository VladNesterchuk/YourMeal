// Catalog open for all products
{
    document.addEventListener('DOMContentLoaded', function() {
      const buttons = {
        CatalogBurgerOpen: document.getElementById('CatalogBurgerOpen'),
        CatalogSnackOpen: document.getElementById('CatalogSnackOpen'),
        CatalogHotDogOpen: document.getElementById('CatalogHotDogOpen'),
        CatalogComboOpen: document.getElementById('CatalogComboOpen'),
        CatalogShawarmaOpen: document.getElementById('CatalogShawarmaOpen'),
        CatalogPizzaOpen: document.getElementById('CatalogPizzaOpen'),
        CatalogSauceOpen: document.getElementById('CatalogSauceOpen'),
        CatalogDrinksOpen: document.getElementById('CatalogDrinksOpen'),
        CatalogDessertsOpen: document.getElementById('CatalogDessertsOpen')
      };
    
      const catalogs = {
        CatalogBurger: document.getElementById('CatalogBurger'),
        CatalogSnack: document.getElementById('CatalogSnack'),
        CatalogHotDog: document.getElementById('CatalogHotDog'),
        CatalogCombo: document.getElementById('CatalogCombo'),
        CatalogShawarma: document.getElementById('CatalogShawarma'),
        CatalogPizza: document.getElementById('CatalogPizza'),
        CatalogSauce: document.getElementById('CatalogSauce'),
        CatalogDrinks: document.getElementById('CatalogDrinks'),
        CatalogDesserts: document.getElementById('CatalogDesserts')
      };
    
      function handleButtonClick(activeButtonId, activeCatalogId) {
        Object.values(buttons).forEach(button => button.classList.remove('navigation__button_active'));
    
        buttons[activeButtonId].classList.add('navigation__button_active');
    
        // Ховаємо всі каталоги
        Object.values(catalogs).forEach(catalog => {
          catalog.classList.add('catalog_invisible');
          catalog.classList.remove('catalog_visible');
        });
    
        // Показуємо обраний каталог
        catalogs[activeCatalogId].classList.remove('catalog_invisible');
        catalogs[activeCatalogId].classList.add('catalog_visible');
      }
    
      Object.entries(buttons).forEach(([buttonId, button]) => {
        button.addEventListener('click', function() {
          const catalogId = buttonId.replace('Open', '');
          handleButtonClick(buttonId, catalogId);
        });
      });
    });
    }
    