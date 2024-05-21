// ========================================================================================================================================================================================================================================================
// Функционал =============================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as d3nFunctions from "./modules/functions.js"; // Подключение вех функций из файла "functions.js"


// ========================================================================================================================================================================================================================================================
// Подключение функции webp (или если не поддерживается no-webp) ==========================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
d3nFunctions.isWebp();


// ========================================================================================================================================================================================================================================================
// Модуль для работы с меню (Бургер) (раскоментировать если нужен не забыть стили в header.scss)===========================================================================================================================================================
// ========================================================================================================================================================================================================================================================
d3nFunctions.menuInit();


// ========================================================================================================================================================================================================================================================
// Модуль для работы слайдера "Swiper" == Сниппет(HTML): swiper ==============================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
//import "../files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Модуль для добавления класса touch тачскринам ==============================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
d3nFunctions.addTouchClass();

// ========================================================================================================================================================================================================================================================
// Подключение своих скриптов ==============================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import "../js/modules/scripts.js";