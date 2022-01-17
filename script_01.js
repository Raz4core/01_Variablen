"use strict";

/***** Variablen 01 *******/

/**
 * 
 * Block-KOmmentar
 *
 */
// Zeilen-Kommentar

// Konsolen-Ausgabe
//console.log("Hello World");
//console.log(firstName);//

/****02 Deklaration + Wertzuweisung ****/

// let firstName; //Deklaration (Definition)
//firstName = "Max"; // Wertzuweisung
//console.log(firstName); // Ausgabe

//let familyName = "Mütze"; // Deklaration + Wertzuweisung
//console.log(familyName);
//console.log(firstName +" "+ familyName);

/**03 deklaration + Wertzustellung II */
//let firstName,familyName;
//firstName = prompt("Bitte Vornamen eingeben");
//familyName = prompt("Bitte Nachnamen eingeben");
//console.log(firstName + " " + familyName);



// JS ist eine untypisierte Sprache! untyped
//let test;
//test = "Hi";
//test = 2;
//test = true;

//console.log ("Datentyp:" + typeof test);
//console.log ("Inhalt:" + test);

/** 03a Konstanten ****/

//const test = "hi"; // Variable mit KONSTANTEN Inhalt
//test = 2;    // KEINE neue Zuweisung zur LZ möglich!
//console.log ("Inhalt:" + test);

/** Beisspiel **/

// Deklaration
let ageJohn, ageMark;
let birthYearJohn, birthYearMark; 

//let year = 2022;
let date = new Date();
let year = date.getFullYear();

//Wertzuweisung
ageJohn = 25;
ageMark = 30;

//Berechnung
birthYearJohn = year - ageJohn;
birthYearMark = year - ageMark;

//Ausgabe
console.log ("birthYearJohn:" + birthYearJohn);
console.log ("birthYearMark:" + birthYearMark);
