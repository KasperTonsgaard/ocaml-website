"use client"
import React, { createContext, useContext, useState, useEffect } from 'react'

type Locale = 'da' | 'en'

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('da')

  useEffect(() => {
    // Load saved locale from localStorage
    const savedLocale = localStorage.getItem('locale') as Locale
    if (savedLocale && (savedLocale === 'da' || savedLocale === 'en')) {
      setLocaleState(savedLocale)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('locale', newLocale)
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[locale]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context
}

const translations = {
  da: {
    nav: {
      home: 'Hjem',
      gameJams: 'Game Jams',
      publications: 'Udgivelser',
      tools: 'Værktøjer',
    },
    home: {
      title: 'Velkommen til OCaml\'s Univers',
      pressSpace: 'Tryk på',
      toDance: 'for at få OCaml til at danse!',
    },
    gameJams: {
      title: 'Game Jams',
      description: 'En samling af spil lavet til Game Jams af OCaml og hans venner fra DAT5.',
      checkThem: 'Tjek dem ud!',
      developers: 'Udviklere',
      hostedBy: 'Hostet af',
      gameJam: 'Game Jam',
      visitWebsite: 'Besøg hjemmeside',
      playGame: 'Spil',
      gameId: 'Spil ID',
      moreGames: 'Flere Spil Kommer Snart',
      stayTuned: 'Hold øje med flere spændende Game Jam indlæg og kreative projekter!',
      backToGameJams: 'Tilbage til Game Jams',
      aboutGame: 'Om Dette Spil',
      details: 'Game Jam Detaljer',
      date: 'Dato',
      institution: 'Institution',
      status: 'Status',
      availableToPlay: 'Tilgængelig at Spille',
      kjam25: {
        title: 'K-Jam 25',
        subtitle: 'Skabt til den årlige Game Jam hostet af DSAU 🎮',
        gameJamEntry: 'Game Jam Indlæg',
        description: 'Skabt af Kristian og Mikkel til K-Jam 2025, den årlige Game Jam hostet af DSAU (dsau.dk) - studenterforeningen på Aarhus Universitet. Denne weekend Game Jam udfordrer studerende til at skabe det bedste spil inden for et givet tema, med spil dømt på tværs af forskellige kategorier for præmier.',
        developers: 'Kristian & Mikkel',
        gameJamName: 'K-Jam 2025',
        hostedBy: 'DSAU (dsau.dk)',
        institution: 'Aarhus Universitet',
        status: 'Tilgængelig at Spille',
      },
      gmtk2025: {
        title: 'GMTK 2025 GameJam',
        gameName: 'On Loopin\'s Tail',
        description: 'Skabt af D. Jestford, SebsenCK, Jeppe Tofft og Robert F. G. B. til Game Maker\'s Toolkit 2025 Game Jam. Oplev "On Loopin\'s Tail" - et innovativt spil der udforsker unikke mekanikker og engagerende gameplay inden for jammens tema begrænsninger.',
        developers: 'D. Jestford, SebsenCK, Jeppe Tofft & Robert F. G. B.',
        hostedBy: 'GMTK',
        status: 'Spil på Itch.io',
      },
    },
    publications: {
      title: 'Udgivelser',
      description: 'En samling af bøger, artikler og andre Udgivelser lavet af OCaml og DAT5 klassen på Aarhus Universitet.',
      downloadExplore: 'Download og udforsk vores akademiske bidrag!',
      downloadPdf: 'Download PDF',
      comingSoon: 'Kommer Snart',
      viewDetails: 'Se Detaljer',
      publicationId: 'Publikations ID',
      morePublications: 'Flere Udgivelser Kommer Snart',
      stayTunedPubs: 'Hold øje med flere forskningsartikler, bøger og akademiske bidrag fra DAT5 fællesskabet!',
      backToPublications: 'Tilbage til Udgivelser',
      aboutBook: 'Om Denne Bog',
      keyTopics: 'Nøgleemner',
      publicationDetails: 'Publikationsdetaljer',
      authors: 'Forfattere',
      institution: 'Institution',
      publicationDate: 'Udgivelsesdato',
      specialThanks: 'Særlig Tak',
      format: 'Format',
      readyToMaster: 'Klar til at Mestre Master-Sætningen? 🐷',
      downloadDescription: 'Download "Grisen O(n)P og Master Teoremet" og lad vores gris guide dig til at mestre rekurrensrelationer!',
      bookComingSoon: 'Bog Kommer Snart! 🐷',
      type: 'Type',
      book: 'Bog',
      available: 'Tilgængelig',
      pages: 'sider',
      onpBook: {
        title: 'Grisen O(n)P og Master Teoremet',
        subtitle: 'Mestre Master-Sætningen - Lær ved Eksempel! 🐷',
        description: 'En omfattende guide til at forstå og mestre Master-Sætningen i algoritmer og datastrukturer. Denne bog giver klare forklaringer, praktiske eksempler og trin-for-trin tilgange til at løse rekurrensrelationer ved hjælp af Master-Sætningen. Skrevet af Kristian Anton Hedegaard og Jeppe Tofft fra DAT5 klassen på Aarhus Universitet.',
        bookDescription: 'Grisen O(n)P og Master Teoremet er en fokuseret guide designet specifikt til at hjælpe studerende med at mestre Master-Sætningen - et af de vigtigste værktøjer til analyse af opdel-og-hersk algoritmer. Skabt af DAT5 klassen 2024-2027 på Aarhus Universitet, indeholder denne bog vores elskede gris maskot, der guider dig gennem læringsprocessen.',
        bookDescription2: 'Master-Sætningen kan virke skræmmende i starten, men med klare forklaringer, trin-for-trin eksempler og praktiske anvendelser gør denne bog den tilgængelig og endda sjov. Hvert koncept er illustreret med konkrete eksempler og visuelle hjælpemidler for at sikre dyb forståelse.',
        bookDescription3: 'Uanset om du forbereder dig til eksamener i algoritmer og datastrukturer eller ønsker at styrke dit teoretiske grundlag for tekniske interviews, giver denne bog alt, hvad du behøver for selvtillid at anvende Master-Sætningen til at løse rekurrensrelationer.',
        keyTopicsList: [
          'Master-Sætning Fundamenter',
          'Rekurrensrelationer Analyse',
          'Opdel-og-Hersk Algoritmer',
          'Case Analyse & Eksempler',
          'Trin-for-Trin Problemløsning',
          'Almindelige Faldgruber & Løsninger',
          'Øvelsesopgaver & Opgaver',
          'Virkelige Anvendelser',
        ],
        authors: 'Kristian Anton Hedegaard & Jeppe Tofft',
        institution: 'Aarhus Universitet (DAT5 2024-2027)',
        publicationDate: 'November 2025',
        specialThanks: 'Kasper Tonsgaard for værdifuldt input',
        downloadBook: 'Download Grisen O(n)P (PDF)',
      },
    },
    tools: {
      title: 'Værktøjer',
      description: 'En samling af nyttige værktøjer skabt af OCaml og DAT5 klassen på Aarhus Universitet.',
      exploreTools: 'Udforsk vores værktøjer!',
      developer: 'Udvikler',
      category: 'Kategori',
      keyFeatures: 'Nøglefunktioner',
      viewTool: 'Se Værktøj',
      visitWebsite: 'Besøg Hjemmeside',
      moreTools: 'Flere Værktøjer Kommer Snart',
      stayTuned: 'Hold øje med flere nyttige værktøjer og projekter fra DAT5 fællesskabet!',
      backToTools: 'Tilbage til Værktøjer',
      available: 'Tilgængelig',
      categories: {
        scheduleViewer: "Skemavisning",
        examViewer: "Examvisning",
      },
      toolDetails: 'Værktøjsdetaljer',
      releaseDate: 'Udgivelsesdato',
      status: 'Status',
      institution: 'Institution',
      tryItOut: 'Prøv Det',
      openInNewTab: 'Åbn i Ny Fane',
      auRooms: {
        title: 'AU Lokale Skema',
        subtitle: 'Find og se skemaer for ethvert lokale på Aarhus Universitet',
        aboutTool: 'Om Dette Værktøj',
        description: 'AU Lokale Skema er et værktøj der gør det nemt at finde og se skemaer for undervisningslokaler på Aarhus Universitet.',
        longDescription: 'Skal du bruge et lokale til gruppestudie? Vil du vide, hvornår et specifikt lokale er ledigt? Dette værktøj giver dig hurtig adgang til realtids skemaoplysninger for alle undervisningslokaler på AU. Søg simpelthen efter et lokalenavn, og se dets tilgængelighed og bookinger med det samme.',
        feature1: 'Hurtig Søgning',
        feature1Desc: 'Søg efter ethvert lokale på AU ved navn eller nummer',
        feature2: 'Realtids Skema',
        feature2Desc: 'Se opdaterede skemaer og bookinger for hvert lokale',
        feature3: 'Tilgængelighed',
        feature3Desc: 'Find hurtigt ud af hvornår lokaler er ledige',
        feature4: 'Alle AU Lokaler',
        feature4Desc: 'Dækning af undervisningslokaler på tværs af alle AU campusser',
      },
      auExams: {
        title: 'AU Eksamensplan',
        subtitle: 'Se eksamensplaner for alle kurser på Aarhus Universitet',
        aboutTool: 'Om Dette Værktøj',
        description: 'AU Eksamensplan er et værktøj der gør det nemt at finde og se eksamensplaner for kurser på Aarhus Universitet.',
        longDescription: 'Skal du planlægge din studieperiode? Vil du vide, hvornår dine eksamener finder sted? Dette værktøj giver dig hurtig adgang til opdaterede eksamensplaner for alle kurser på AU. Søg simpelthen efter dit kursus, og se eksamensdatoer og tider med det samme.',
        feature1: 'Nem Søgning',
        feature1Desc: 'Søg efter ethvert kursus på AU med dit AU-login',
        feature2: 'Opdaterede Eksamensplaner',
        feature2Desc: 'Se de nyeste eksamensdatoer og tider for hvert kursus',
        feature3: 'Personlig Planlægning',
        feature3Desc: 'Få et overblik over dine kommende eksamener',
      },
    },
    footer: {
      universe: 'OCaml\'s Univers',
      github: 'GitHub',
      copyright: 'DAT5 Klasse af 2024-2027 på Aarhus Universitet',
      pressSpace: 'Tryk på',
      space: 'Mellemrum',
      toDance: 'for at få OCaml til at danse! 🎵',
    },
  },
  en: {
    nav: {
      home: 'Home',
      gameJams: 'Game Jams',
      publications: 'Publications',
      tools: 'Tools',
    },
    home: {
      title: 'Welcome to OCaml\'s Universe',
      pressSpace: 'Press',
      toDance: 'to make OCaml dance!',
    },
    gameJams: {
      title: 'Game Jams',
      description: 'A collection of games created at game jams by OCaml and his friends from DAT5.',
      checkThem: 'Check them out!',
      developers: 'Developers',
      hostedBy: 'Hosted By',
      gameJam: 'Game Jam',
      visitWebsite: 'Visit Website',
      playGame: 'Play Game',
      gameId: 'Game ID',
      moreGames: 'More Games Coming Soon',
      stayTuned: 'Stay tuned for more exciting game jam entries and creative projects!',
      backToGameJams: 'Back to Game Jams',
      aboutGame: 'About This Game',
      details: 'Game Jam Details',
      date: 'Date',
      institution: 'Institution',
      status: 'Status',
      availableToPlay: 'Available to Play',
      kjam25: {
        title: 'K-Jam 25',
        subtitle: 'Created for the yearly game jam hosted by DSAU 🎮',
        gameJamEntry: 'Game Jam Entry',
        description: 'Created by Kristian and Mikkel for K-Jam 2025, the yearly game jam hosted by DSAU (dsau.dk) - the student association at Aarhus University. This weekend game jam challenges students to create the best game within a given theme, with games judged across different categories for prizes.',
        developers: 'Kristian & Mikkel',
        gameJamName: 'K-Jam 2025',
        hostedBy: 'DSAU (dsau.dk)',
        institution: 'Aarhus University',
        status: 'Available to Play',
      },
      gmtk2025: {
        title: 'GMTK 2025 GameJam',
        gameName: 'On Loopin\'s Tail',
        description: 'Created by D. Jestford, SebsenCK, Jeppe Tofft, and Robert F. G. B. for the Game Maker\'s Toolkit 2025 game jam. Experience "On Loopin\'s Tail" - an innovative game that explores unique mechanics and engaging gameplay within the jam\'s theme constraints.',
        developers: 'D. Jestford, SebsenCK, Jeppe Tofft & Robert F. G. B.',
        hostedBy: 'GMTK',
        status: 'Play on Itch.io',
      },
    },
    publications: {
      title: 'Publications',
      description: 'A collection of books, papers, and other publications created by OCaml and the DAT5 class at Aarhus University.',
      downloadExplore: 'Download and explore our academic contributions!',
      downloadPdf: 'Download PDF',
      comingSoon: 'Coming Soon',
      viewDetails: 'View Details',
      publicationId: 'Publication ID',
      morePublications: 'More Publications Coming Soon',
      stayTunedPubs: 'Stay tuned for more research papers, books, and academic contributions from the DAT5 community!',
      backToPublications: 'Back to Publications',
      aboutBook: 'About This Book',
      keyTopics: 'Key Topics Covered',
      publicationDetails: 'Publication Details',
      authors: 'Authors',
      institution: 'Institution',
      publicationDate: 'Publication Date',
      specialThanks: 'Special Thanks',
      format: 'Format',
      readyToMaster: 'Ready to Master the Master Theorem? 🐷',
      downloadDescription: 'Download "Grisen O(n)P og Master Teoremet" and let our pig guide you to mastery of recurrence relations!',
      bookComingSoon: 'Book Coming Soon! 🐷',
      type: 'Type',
      book: 'Book',
      available: 'Available',
      pages: 'pages',
      onpBook: {
        title: 'Grisen O(n)P og Master Teoremet',
        subtitle: 'Master the Master Theorem - Learn by Example! 🐷',
        description: 'A comprehensive guide to understanding and mastering the Master Theorem in algorithms and data structures. This book provides clear explanations, practical examples, and step-by-step approaches to solving recurrence relations using the Master Theorem. Written by Kristian Anton Hedegaard and Jeppe Tofft from the DAT5 class at Aarhus University.',
        bookDescription: 'Grisen O(n)P og Master Teoremet is a focused guide designed specifically to help students master the Master Theorem - one of the most important tools for analyzing divide-and-conquer algorithms. Created by the DAT5 class of 2024-2027 at Aarhus University, this book features our beloved pig mascot guiding you through the learning process.',
        bookDescription2: 'The Master Theorem can seem intimidating at first, but with clear explanations, step-by-step examples, and practical applications, this book makes it accessible and even enjoyable. Each concept is illustrated with concrete examples and visual aids to ensure deep understanding.',
        bookDescription3: 'Whether you\'re preparing for exams in algorithms and data structures or want to strengthen your theoretical foundation for technical interviews, this book provides everything you need to confidently apply the Master Theorem to solve recurrence relations.',
        keyTopicsList: [
          'Master Theorem Fundamentals',
          'Recurrence Relations Analysis',
          'Divide-and-Conquer Algorithms',
          'Case Analysis & Examples',
          'Step-by-Step Problem Solving',
          'Common Pitfalls & Solutions',
          'Practice Problems & Exercises',
          'Real-World Applications',
        ],
        authors: 'Kristian Anton Hedegaard & Jeppe Tofft',
        institution: 'Aarhus University (DAT5 2024-2027)',
        publicationDate: 'November 2025',
        specialThanks: 'Kasper Tonsgaard for valuable input',
        downloadBook: 'Download Grisen O(n)P (PDF)',
      },
    },
    tools: {
      title: 'Tools',
      description: 'A collection of useful tools created by OCaml and the DAT5 class at Aarhus University.',
      exploreTools: 'Explore our tools!',
      developer: 'Developer',
      category: 'Category',
      keyFeatures: 'Key Features',
      viewTool: 'View Tool',
      visitWebsite: 'Visit Website',
      moreTools: 'More Tools Coming Soon',
      stayTuned: 'Stay tuned for more useful tools and projects from the DAT5 community!',
      backToTools: 'Back to Tools',
      available: 'Available',
      categories: {
        scheduleViewer: 'Schedule Viewer',
        examViewer: 'Exam Viewer',
      },
      toolDetails: 'Tool Details',
      releaseDate: 'Release Date',
      status: 'Status',
      institution: 'Institution',
      tryItOut: 'Try It Out',
      openInNewTab: 'Open in New Tab',
      auRooms: {
        title: 'AU Room Schedule',
        subtitle: 'Find and view schedules for any room at Aarhus University',
        aboutTool: 'About This Tool',
        description: 'AU Room Schedule is a tool that makes it easy to find and view schedules for teaching rooms at Aarhus University.',
        longDescription: 'Need to use a room for group study? Want to know when a specific room is available? This tool gives you quick access to real-time schedule information for all teaching rooms at AU. Simply search for a room name and see its availability and bookings instantly.',
        feature1: 'Quick Search',
        feature1Desc: 'Search for any room at AU by name or number',
        feature2: 'Real-time Schedule',
        feature2Desc: 'View updated schedules and bookings for each room',
        feature3: 'Availability',
        feature3Desc: 'Quickly find out when rooms are available',
        feature4: 'All AU Rooms',
        feature4Desc: 'Coverage of teaching rooms across all AU campuses',
      },
      auExams: {
        title: 'AU Exam Schedule',
        subtitle: 'View exam schedules for all courses at Aarhus University',
        aboutTool: 'About This Tool',
        description: 'AU Exam Schedule is a tool that makes it easy to find and view exam schedules for courses at Aarhus University.',
        longDescription: 'Need to plan your study period? Want to know when your exams take place? This tool gives you quick access to updated exam schedules for all courses at AU. Simply search for your course and see exam dates and times instantly.',
        feature1: 'Easy Search',
        feature1Desc: 'Search for any course at AU with your AU login',
        feature2: 'Updated Exam Schedules',
        feature2Desc: 'See the latest exam dates and times for each course',
        feature3: 'Personal Planning',
        feature3Desc: 'Get an overview of your upcoming exams',
      },
    },
    footer: {
      universe: 'OCaml\'s Universe',
      theOnlyReal: 'The only real one',
      github: 'GitHub',
      copyright: 'DAT5 Class of 2024-2027 at Aarhus University',
      pressSpace: 'Press',
      space: 'Space',
      toDance: 'to make OCaml dance! 🎵',
    },
  },
}
