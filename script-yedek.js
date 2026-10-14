let currentSubject = "math";
let currentTopic = "factors";


const questions = [
    {
        question: "72 sayısının kaç tane pozitif tam sayı çarpanı vardır?",
        answers: ["10", "12", "8", "9"],
        correct: 1
    },
    {
        question: "Aşağıdaki sayılardan hangisi hem 6'nın hem 8'in katıdır?",
        answers: ["18", "24", "32", "40"],
        correct: 1
    },
    {
        question: "48 ve 60 sayılarının EBOB'u kaçtır?",
        answers: ["6", "10", "12", "15"],
        correct: 2
    },
    {
        question: "12 ve 18 sayılarının EKOK'u kaçtır?",
        answers: ["24", "30", "36", "72"],
        correct: 2
    },
    {
        question: "Bir sayı hem 4'e hem 6'ya tam bölünüyor ve 50 ile 80 arasındadır. Bu koşulları sağlayan kaç pozitif tam sayı vardır?",
        answers: ["1", "2", "3", "4"],
        correct: 1
    },

    {
        question: "120 sayısının kaç tane pozitif tam sayı çarpanı vardır?",
        answers: ["12", "16", "18", "20"],
        correct: 1
    },
    {
        question: "84 ve 126 sayılarının EBOB'u kaçtır?",
        answers: ["14", "21", "42", "63"],
        correct: 2
    },
    {
        question: "18 ve 24 sayılarının EKOK'u kaçtır?",
        answers: ["48", "72", "96", "144"],
        correct: 1
    },
    {
        question: "100 ile 200 arasında hem 5'e hem 9'a tam bölünen kaç pozitif tam sayı vardır?",
        answers: ["1", "2", "3", "4"],
        correct: 1
    },
    {
        question: "96 ve 144 sayılarının EBOB'u kaçtır?",
        answers: ["24", "36", "48", "72"],
        correct: 2
    },
    {
        question: "14 ve 21 sayılarının EKOK'u kaçtır?",
        answers: ["28", "35", "42", "84"],
        correct: 2
    },
    {
        question: "Bir sayının asal çarpanlarına ayrılmış hâli 2³ × 3² ise bu sayının kaç pozitif tam sayı çarpanı vardır?",
        answers: ["6", "9", "12", "18"],
        correct: 2
    },
    {
        question: "8, 12 ve 15 sayılarının en küçük ortak katı kaçtır?",
        answers: ["60", "90", "120", "240"],
        correct: 2
    },
    {
        question: "90 sayısının kaç tane pozitif tam sayı çarpanı vardır?",
        answers: ["8", "10", "12", "15"],
        correct: 2
    },
    {
        question: "İki sayının EBOB'u 6, EKOK'u 72'dir. Sayılardan biri 24 ise diğeri kaçtır?",
        answers: ["12", "18", "24", "36"],
        correct: 1
    }

];



const integerQuestions = [
    {
        question: "Aşağıdaki sayılardan hangisi negatiftir?",
        answers: ["5", "0", "-3", "8"],
        correct: 2
    },
    {
        question: "(-4) + 7 işleminin sonucu kaçtır?",
        answers: ["-11", "-3", "3", "11"],
        correct: 2
    },
    {
        question: "(-6) + (-2) işleminin sonucu kaçtır?",
        answers: ["-8", "-4", "4", "8"],
        correct: 0
    },
    {
        question: "5 - 9 işleminin sonucu kaçtır?",
        answers: ["4", "-4", "14", "-14"],
        correct: 1
    },
    {
        question: "Aşağıdakilerden hangisi en büyüktür?",
        answers: ["-8", "-2", "-5", "-10"],
        correct: 1
    },
    {
        question: "(-15) + 8 işleminin sonucu kaçtır?",
        answers: ["-23", "-7", "7", "23"],
        correct: 1
    },
    {
        question: "(-12) - (-5) işleminin sonucu kaçtır?",
        answers: ["-17", "-7", "7", "17"],
        correct: 1
    },
    {
        question: "(-3) × (-8) işleminin sonucu kaçtır?",
        answers: ["-24", "-11", "11", "24"],
        correct: 3
    },
    {
        question: "(-42) ÷ 6 işleminin sonucu kaçtır?",
        answers: ["7", "-7", "-6", "-8"],
        correct: 1
    },
    {
        question: "(-5) × (4 - 9) işleminin sonucu kaçtır?",
        answers: ["-25", "-5", "5", "25"],
        correct: 3
    },
    {
        question: "Aşağıdaki sayılardan hangisi en küçüktür?",
        answers: ["-12", "-4", "-9", "2"],
        correct: 0
    },
    {
        question: "(-2)³ + 5 işleminin sonucu kaçtır?",
        answers: ["-13", "-3", "3", "13"],
        correct: 1
    },
    {
        question: "18 ÷ (-3) - 2 işleminin sonucu kaçtır?",
        answers: ["-8", "-4", "4", "8"],
        correct: 0
    },
    {
        question: "(-6) + 14 - 11 işleminin sonucu kaçtır?",
        answers: ["-9", "-3", "3", "9"],
        correct: 1
    },
    {
        question: "Hava sıcaklığı -7°C iken 12 derece yükselip ardından 9 derece düşüyor. Son sıcaklık kaç °C olur?",
        answers: ["-4", "4", "-28", "14"],
        correct: 0
    }

];

let currentQuestions = questions;


const storageKey = "askoMathProgress_v3";

function loadProgress() {
    try {
        const saved = JSON.parse(localStorage.getItem(storageKey));

        if (
            saved &&
            Number.isInteger(saved.questionIndex) &&
            saved.questionIndex >= 0 &&
            saved.questionIndex < 15 &&
            Number.isInteger(saved.correctAnswers) &&
            saved.correctAnswers >= 0 &&
            saved.correctAnswers <= 15 &&
            Number.isInteger(saved.answeredCount) &&
            saved.answeredCount >= 0 &&
            saved.answeredCount <= 15
        ) {
            return saved;
        }
    } catch (error) {
        console.log("Kayıtlı ilerleme okunamadı.");
    }

    return {
        questionIndex: 0,
        correctAnswers: 0,
        answeredCount: 0,
        answered: false,
        completed: false
    };
}

let progress = loadProgress();
let score = progress.correctAnswers * 10;

function saveProgress() {
    localStorage.setItem(storageKey, JSON.stringify(progress));
}

function updateProgress() {
    const percentage = Math.round(
    (progress.answeredCount / currentQuestions.length) * 100
);

document.getElementById("progress-text").textContent =
    progress.answeredCount + " / " +

    currentQuestions.length + " soru (%" + percentage + ")"

    document.getElementById("progress-fill").style.width =
        
        (progress.answeredCount / currentQuestions.length * 100) + "%"

    document.getElementById("score-text").textContent =
        "Matematik puanı: " + score;

    document.getElementById("correct-text").textContent =
        "Matematik doğru cevap: " + progress.correctAnswers + " / " + currentQuestions.length;
        const totalScore = score + englishScore;
const totalCorrect =
    progress.correctAnswers + (englishScore / 10);

document.getElementById("total-score-text").textContent =
    "🏆 Genel toplam puan: " + totalScore;

document.getElementById("total-correct-text").textContent =
    "🎯 Genel doğru cevap: " + totalCorrect + " / 10";
}

function renderQuestion() {
    const questionElement = document.getElementById("math-question");
    const answersElement = document.getElementById("math-answers");
    const result = document.getElementById("quiz-result");
    const nextButton = document.getElementById("next-question");

    answersElement.replaceChildren();
    result.textContent = "";
    nextButton.hidden = true;

    if (progress.completed) {
        questionElement.textContent = "🎉 Test tamamlandı!";
        result.textContent =
            "Sonuç: " + progress.correctAnswers + " doğru, " +
            score + " puan. Harika çalıştın!";
        return;
    }

    const current = currentQuestions[progress.questionIndex];

    questionElement.textContent =
        "Soru " + (progress.questionIndex + 1) + ": " + current.question;

    current.answers.forEach(function (answer, index) {
        const button = document.createElement("button");

        button.className = "answer-button";
        button.textContent = answer;
        button.disabled = progress.answered;
        button.addEventListener("click", function () {
            checkAnswer(index);
        });

        answersElement.appendChild(button);
    });

    if (progress.answered) {
        result.textContent = "Bu soruyu cevapladın. Devam edebilirsin.";
        nextButton.hidden = false;
    }
}


function openLesson(subject) {
    currentSubject = subject;
    document.querySelector("header").hidden = true;
    document.getElementById("progress-panel").hidden = true;
    document.getElementById("math-lesson").hidden = true;
    document.getElementById("english-lesson").hidden = true;
    document.getElementById("lesson-area").hidden = true;
document.getElementById("math-topics").hidden = subject !== "math";
document.getElementById("english-topics").hidden = subject !== "english";
    document.getElementById("topic-area").hidden = false;

    const topicArea = document.getElementById("topic-area");
    topicArea.hidden = false;

    document.getElementById("math-topics").hidden = subject !== "math";
    document.getElementById("english-topics").hidden = subject !== "english";

    document.getElementById("topic-page-title").textContent =
        subject === "math" ? "📐 Matematik Konuları 💗" : "🌍 İngilizce Konuları 💗";

    window.scrollTo({ top: 0, behavior: "smooth" });
}


function closeTopics() {
    document.getElementById("topic-area").hidden = true;
    document.getElementById("lesson-area").hidden = true;
    document.getElementById("progress-panel").hidden = true;

    document.getElementById("math-topics").hidden = true;
    document.getElementById("english-topics").hidden = true;

    document.querySelector("header").hidden = false;
    document.getElementById("math-lesson").hidden = false;
    document.getElementById("english-lesson").hidden = false;

    window.scrollTo({ top: 0, behavior: "smooth" });
}


function backToTopics() {
    document.getElementById("lesson-area").hidden = true;
    document.getElementById("topic-area").hidden = false;

    document.getElementById("math-topics").hidden =
        currentSubject !== "math";

    document.getElementById("english-topics").hidden =
        currentSubject !== "english";

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function openTopic(subject, topic) {
        const lessonArea = document.getElementById("lesson-area");

    lessonArea.classList.remove("grade-6", "grade-7", "grade-8", "grade-9");

    if (subject === "math") {
        lessonArea.classList.add("grade-6");
    }
    document.getElementById("topic-area").hidden = true;
    document.getElementById("progress-panel").hidden = true;
    document.getElementById("lesson-area").hidden = false;

    const mathTheory = document.getElementById("math-theory");
    const englishTheory = document.getElementById("english-theory");
    const mathQuiz = document.getElementById("math-quiz");
    const englishQuiz = document.getElementById("english-quiz");
    const integersTheory = document.getElementById("integers-theory");
integersTheory.hidden = true;

    mathTheory.hidden = true;
    englishTheory.hidden = true;
    mathQuiz.hidden = true;
    englishQuiz.hidden = true;

    if (subject === "math") {
    if (topic === "integers") {
    integersTheory.hidden = false;
    mathTheory.hidden = true;
    mathQuiz.hidden = false;
} else {
    integersTheory.hidden = true;
    mathTheory.hidden = false;
    mathQuiz.hidden = false;
}

        document.getElementById("lesson-title").textContent =
            "📐 Matematik: " + getTopicName(topic);

        document.getElementById("lesson-description").textContent =
            "Konuyu öğren, örnekleri incele ve testini çöz.";


if (topic === "integers") {
    currentQuestions = integerQuestions;
} else if (topic === "fractions") {
    currentQuestions = fractionsQuestions;
} else if (topic === "decimals") {
    currentQuestions = decimalsQuestions;
} else if (topic === "ratio") {
    currentQuestions = ratioQuestions;
    } else if (topic === "geometry") {
    currentQuestions = geometryQuestions;
} else {
    currentQuestions = questions;
}


progress = {
    questionIndex: 0,
    correctAnswers: 0,
    answeredCount: 0,
    answered: false,
    completed: false
};

score = 0;

renderQuestion();
updateProgress();

    } else {
        englishTheory.hidden = false;
        englishQuiz.hidden = false;

        document.getElementById("lesson-title").textContent =
            "🌍 English: " + getTopicName(topic);

        document.getElementById("lesson-description").textContent =
            "Study the topic, then practise with the test.";

        renderEnglishQuestion();
        updateEnglishProgress();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function getTopicName(topic) {
    const names = {
        factors: "Çarpanlar ve Katlar",
        integers: "Tam Sayılar",
        fractions: "Kesirler",
        decimals: "Ondalık Gösterim",
        ratio: "Oran",
        geometry: "Geometri",
        classroom: "Classroom Life",
        "daily-routines": "Daily Routines",
        food: "Food and Drinks",
        hobbies: "Hobbies",
        grammar: "Grammar",
        vocabulary: "Vocabulary"
    };

    return names[topic] || "Konu";
}



function checkAnswer(answerIndex) {
    if (progress.answered || progress.completed) {
        return;
    }

    const current = currentQuestions[progress.questionIndex];

    progress.answered = true;
    progress.answeredCount++;

    let feedbackMessage = "";

    if (answerIndex === current.correct) {
        progress.correctAnswers++;
        score = progress.correctAnswers * 10;

        feedbackMessage = "✅ Doğru cevap! 🎉 +10 puan";
    } else {
        feedbackMessage =
            "❌ Yanlış cevap! Doğru cevap: " +
            current.answers[current.correct];
    }

    if (progress.answeredCount === currentQuestions.length) {
        progress.completed = true;
    }

    saveProgress();
    updateProgress();
    renderQuestion();

    document.getElementById("quiz-result").textContent =
        feedbackMessage;
}


function nextQuestion() {
    if (!progress.answered || progress.completed) {
        return;
    }

    progress.questionIndex++;

if (progress.questionIndex >= currentQuestions.length) {
    progress.completed = true;
}
    progress.answered = false;

    saveProgress();
    renderQuestion();
}

function closeLesson() {
    document.getElementById("topic-area").hidden = true;
document.getElementById("math-topics").hidden = true;
document.getElementById("english-topics").hidden = true;
    document.getElementById("lesson-area").hidden = true;
    document.querySelector("header").hidden = false;

    // Ana sayfada ilerlemeyi gizle
    document.getElementById("progress-panel").hidden = true;

    // Ders kutularını göster
    document.getElementById("math-lesson").hidden = false;
    document.getElementById("english-lesson").hidden = false;

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function restartMathQuiz() {
    progress = {
        questionIndex: 0,
        correctAnswers: 0,
        answeredCount: 0,
        answered: false,
        completed: false
    };

    score = 0;

    saveProgress();
    updateProgress();
    renderQuestion();
}

const englishQuestions = [
    {
        question: '"Apple" ne demektir?',
        answers: ["Armut", "Elma", "Muz", "Portakal"],
        correct: 1
    },
    {
        question: '"Book" ne demektir?',
        answers: ["Kalem", "Masa", "Kitap", "Kapı"],
        correct: 2
    },
    {
        question: '"Water" ne demektir?',
        answers: ["Su", "Ateş", "Hava", "Toprak"],
        correct: 0
    },
    {
        question: '"House" ne demektir?',
        answers: ["Araba", "Okul", "Bahçe", "Ev"],
        correct: 3
    },
    {
        question: '"Friend" ne demektir?',
        answers: ["Öğretmen", "Arkadaş", "Doktor", "Öğrenci"],
        correct: 1
    }
];

const englishStorageKey = "askoEnglishProgress";

function loadEnglishProgress() {
    try {
        const saved = JSON.parse(
            localStorage.getItem(englishStorageKey)
        );

        if (
            saved &&
            Number.isInteger(saved.index) &&
            saved.index >= 0 &&
            saved.index < englishQuestions.length &&
            Number.isInteger(saved.score) &&
            saved.score >= 0 &&
            saved.score <= englishQuestions.length * 10 &&
            typeof saved.answered === "boolean"
        ) {
            return saved;
        }
    } catch (error) {
        console.log("İngilizce ilerlemesi okunamadı.");
    }

    return {
        index: 0,
        score: 0,
        answered: false,
        completed: false
    };
}

let englishProgress = loadEnglishProgress();

let englishIndex = englishProgress.index;
let englishScore = englishProgress.score;
let englishAnswered = englishProgress.answered;

function saveEnglishProgress() {
    localStorage.setItem(
        englishStorageKey,
        JSON.stringify({
            index: englishIndex,
            score: englishScore,
            answered: englishAnswered,
            completed: englishProgress.completed
        })
    );
}

function updateEnglishProgress() {
    const completedQuestions =
        englishIndex + (englishAnswered ? 1 : 0);

    const percentage = Math.round(
        (completedQuestions / englishQuestions.length) * 100
    );

    document.getElementById("english-progress-text").textContent =
        completedQuestions + " / " +
        englishQuestions.length + " soru (%" + percentage + ")";

    document.getElementById("english-progress-fill").style.width =
        percentage + "%";

    document.getElementById("english-score-text").textContent =
        "İngilizce puanı: " + englishScore;

    document.getElementById("english-correct-text").textContent =
        "İngilizce doğru cevap: " + (englishScore / 10) +
        " / " + englishQuestions.length;
        updateProgress();
}
function renderEnglishQuestion() {
    const question = englishQuestions[englishIndex];

    document.getElementById("english-question").textContent =
        "Kelime " + (englishIndex + 1) + ": " + question.question;

    const answers = document.getElementById("english-answers");
    answers.replaceChildren();

    document.getElementById("english-result").textContent = "";
    document.getElementById("english-next-question").hidden = true;

    question.answers.forEach(function (answer, index) {
        const button = document.createElement("button");
        button.className = "answer-button";
        button.textContent = answer;

        button.addEventListener("click", function () {
            checkEnglishAnswer(index);
        });

        answers.appendChild(button);
    });
}
function checkEnglishAnswer(answerIndex) {
    if (englishAnswered) return;

    englishAnswered = true;
    englishProgress.answered = true;

    const question = englishQuestions[englishIndex];
    const buttons = document.querySelectorAll("#english-answers button");

    buttons.forEach(function (button) {
        button.disabled = true;
    });

    if (answerIndex === question.correct) {
        englishScore += 10;
        document.getElementById("english-result").textContent =
            "Doğru! 🎉 +10 İngilizce puanı. Toplam: " + englishScore;
    } else {
        document.getElementById("english-result").textContent =
            "Doğru cevap: " + question.answers[question.correct];
    }

    englishProgress.score = englishScore;
    saveEnglishProgress();
    updateEnglishProgress();

    const nextButton = document.getElementById("english-next-question");

    if (englishIndex === englishQuestions.length - 1) {
        nextButton.textContent = "Testi bitir";
    } else {
        nextButton.textContent = "Sonraki kelime →";
    }

    nextButton.hidden = false;
}
function nextEnglishQuestion() {
    if (!englishAnswered) return;

    if (englishIndex === englishQuestions.length - 1) {
        document.getElementById("english-question").textContent =
            "🎉 İngilizce testi tamamlandı!";
        document.getElementById("english-answers").replaceChildren();
        document.getElementById("english-result").textContent =
            "Kazandığın puan: " + englishScore + " / 50. Harika çalıştın!";
        document.getElementById("english-next-question").hidden = true;
        return;
    }

    englishIndex++;
    englishProgress.index = englishIndex;
englishProgress.answered = false;
englishAnswered = false;
saveEnglishProgress();
    englishAnswered = false;
    renderEnglishQuestion();
}
updateEnglishProgress();
function restartEnglishQuiz() {
    englishIndex = 0;
    englishScore = 0;
    englishAnswered = false;

    englishProgress.index = 0;
    englishProgress.score = 0;
    englishProgress.answered = false;
    englishProgress.completed = false;

    saveEnglishProgress();
    renderEnglishQuestion();
    updateEnglishProgress();
    updateProgress();
}


const fractionsQuestions = [
    {
        question: "3/4 + 5/6 işleminin sonucu nedir?",
        answers: ["19/12", "8/10", "9/12", "7/6"],
        correct: 0
    },
    {
        question: "Bir sayının 2/3'ü 18 ise sayının tamamı kaçtır?",
        answers: ["12", "24", "27", "36"],
        correct: 2
    },
    {
        question: "5/8 - 1/4 işleminin sonucu nedir?",
        answers: ["4/4", "3/8", "1/2", "1/8"],
        correct: 1
    },
    {
        question: "2/5 × 15/4 işleminin sonucu nedir?",
        answers: ["3/2", "6/5", "30/20", "17/9"],
        correct: 0
    },
    {
        question: "3/7 kesrinin payı 6 olursa denk kesrin paydası kaç olur?",
        answers: ["12", "14", "18", "21"],
        correct: 1
    },
    {
        question: "Bir pastanın 3/8'i yeniyor. Geriye pastanın hangi kısmı kalır?",
        answers: ["3/8", "5/8", "1/8", "7/8"],
        correct: 1
    },
    {
        question: "4/9 ÷ 2/3 işleminin sonucu nedir?",
        answers: ["8/27", "2/3", "2/9", "6/9"],
        correct: 1
    },
    {
        question: "2/3 ile 3/5 kesirlerinden hangisi büyüktür?",
        answers: ["2/3", "3/5", "Eşittirler", "Belirlenemez"],
        correct: 0
    },
    {
        question: "Bir sınıfın 2/5'i 12 öğrenci ise sınıfta toplam kaç öğrenci vardır?",
        answers: ["24", "30", "36", "40"],
        correct: 1
    },
    {
        question: "7/10 + 1/5 işleminin sonucu nedir?",
        answers: ["8/15", "9/10", "8/10", "1"],
        correct: 1
    },
    {
        question: "12/18 kesrinin en sade hâli nedir?",
        answers: ["3/6", "6/9", "2/3", "4/9"],
        correct: 2
    },
    {
        question: "Bir yolun 5/12'si gidildi. Yolun kalan kısmı nedir?",
        answers: ["5/12", "7/12", "1/2", "2/12"],
        correct: 1
    },
    {
        question: "3/4 × 8/9 işleminin sonucu nedir?",
        answers: ["2/3", "5/6", "11/13", "3/8"],
        correct: 0
    },
    {
        question: "5/6 ÷ 10/9 işleminin sonucu nedir?",
        answers: ["3/4", "1/2", "2/3", "5/9"],
        correct: 0
    },
    {
        question: "Bir depodaki suyun 2/7'si kullanıldı. Depoda 25 litre kaldıysa başlangıçta kaç litre su vardı?",
        answers: ["30", "35", "40", "45"],
        correct: 1
    }
];


const decimalsQuestions = [
    {
        question: "3,75 + 2,086 işleminin sonucu kaçtır?",
        answers: ["5,836", "5,8360", "5,826", "5,936"],
        correct: 1
    },
    {
        question: "12,5 × 0,08 işleminin sonucu kaçtır?",
        answers: ["1", "10", "0,1", "100"],
        correct: 0
    },
    {
        question: "7,2 ÷ 0,06 işleminin sonucu kaçtır?",
        answers: ["12", "120", "1,2", "0,12"],
        correct: 1
    },
    {
        question: "4,08 sayısının 10 katı kaçtır?",
        answers: ["40,8", "0,408", "408", "4,080"],
        correct: 0
    },
    {
        question: "0,375 kesir olarak en sade biçimde hangisidir?",
        answers: ["3/8", "3/5", "37/100", "5/8"],
        correct: 0
    },
    {
        question: "5,6 - 2,785 işleminin sonucu kaçtır?",
        answers: ["2,815", "3,185", "2,925", "3,815"],
        correct: 1
    },
    {
        question: "0,04 × 0,5 işleminin sonucu kaçtır?",
        answers: ["0,2", "0,02", "0,002", "2"],
        correct: 1
    },
    {
        question: "18,9 ÷ 3 işleminin sonucu kaçtır?",
        answers: ["6,03", "6,3", "63", "0,63"],
        correct: 1
    },
    {
        question: "Aşağıdaki sayılardan hangisi en büyüktür?",
        answers: ["2,099", "2,9", "2,89", "2,909"],
        correct: 3
    },
    {
        question: "0,125 sayısı yüzde olarak kaçtır?",
        answers: ["1,25%", "12,5%", "125%", "0,125%"],
        correct: 1
    },
    {
        question: "Bir ürün 240 TL iken fiyatı %15 artırılıyor. Yeni fiyat kaç TL olur?",
        answers: ["255", "264", "276", "280"],
        correct: 2
    },
    {
        question: "6,4 ÷ 0,8 işleminin sonucu kaçtır?",
        answers: ["0,8", "8", "80", "5,6"],
        correct: 1
    },
    {
        question: "0,7 + 0,07 + 0,007 işleminin sonucu kaçtır?",
        answers: ["0,777", "0,707", "7,77", "0,77"],
        correct: 0
    },
    {
        question: "3,2 × 1,25 işleminin sonucu kaçtır?",
        answers: ["3,5", "4", "4,5", "40"],
        correct: 1
    },
    {
        question: "Bir araç 2,5 saatte 187,5 km gidiyor. Ortalama hızı kaç km/saattir?",
        answers: ["65", "70", "75", "80"],
        correct: 2
    }
];

const ratioQuestions = [
    {
        question: "Bir sayının 3/5'i 42 ise sayının tamamı kaçtır?",
        answers: ["60", "65", "70", "75"],
        correct: 2
    },
    {
        question: "A:B = 4:7 ve B:C = 14:9 ise A:C oranı kaçtır?",
        answers: ["4:9", "8:9", "7:9", "2:3"],
        correct: 1
    },
    {
        question: "5 işçi bir işi 12 günde bitiriyor. Aynı hızla 8 işçi kaç günde bitirir?",
        answers: ["6", "7", "7,5", "8"],
        correct: 2
    },
    {
        question: "x/18 = 14/21 ise x kaçtır?",
        answers: ["10", "12", "14", "16"],
        correct: 1
    },
    {
        question: "Bir sınıfta kızların erkeklere oranı 5:7'dir. Sınıfta 36 öğrenci varsa kaç kız vardır?",
        answers: ["12", "15", "18", "21"],
        correct: 1
    },
    {
        question: "8 makine 6 saatte 960 ürün üretiyor. Aynı hızla 5 makine 4 saatte kaç ürün üretir?",
        answers: ["360", "400", "480", "600"],
        correct: 1
    },
    {
        question: "a:b = 2:3 ve b:c = 4:5 ise a:b:c oranı nedir?",
        answers: ["2:4:5", "8:12:15", "6:9:10", "4:6:5"],
        correct: 1
    },
    {
        question: "Bir harita 1:250.000 ölçeklidir. Haritada 8 cm olan mesafe gerçekte kaç km'dir?",
        answers: ["2 km", "20 km", "200 km", "0,2 km"],
        correct: 0
    },
    {
        question: "Bir ürünün fiyatı %20 indirimden sonra 480 TL oluyor. İndirimden önceki fiyat kaç TL'dir?",
        answers: ["576", "580", "600", "620"],
        correct: 2
    },
    {
        question: "3 musluk bir havuzu 8 saatte dolduruyor. Aynı güçte 4 musluk kaç saatte doldurur?",
        answers: ["4", "5", "6", "7"],
        correct: 2
    },
    {
        question: "x:y = 7:4 ve x + y = 88 ise x - y kaçtır?",
        answers: ["16", "20", "24", "28"],
        correct: 2
    },
    {
        question: "12 kg pirinç 540 TL ise aynı pirincin 7 kg'ı kaç TL'dir?",
        answers: ["280", "315", "320", "350"],
        correct: 1
    },
    {
        question: "Bir araç 3 saatte 210 km gidiyor. Aynı hızla 5 saatte kaç km gider?",
        answers: ["300", "325", "350", "375"],
        correct: 2
    },
    {
        question: "4 kalem 30 TL ise 10 kalem ve 2 defter toplam 110 TL tutuyor. Bir defter kaç TL'dir?",
        answers: ["20", "25", "30", "35"],
        correct: 2
    },
    {
        question: "A:B = 3:8. A 15 artırılıp B 10 azaltıldığında yeni değerler eşit oluyor. A ve B'nin ilk değerleri kaçtır?",
        answers: ["A=9, B=24", "A=12, B=32", "A=15, B=40", "A=18, B=48"],
        correct: 0
    }
];

const geometryQuestions = [
    {
        question: "Bir üçgenin iki açısı 48° ve 67° ise üçüncü açısı kaç derecedir?",
        answers: ["55°", "65°", "75°", "85°"],
        correct: 1
    },
    {
        question: "Bir dikdörtgenin kısa kenarı 8 cm, uzun kenarı 15 cm'dir. Çevresi kaç cm'dir?",
        answers: ["23", "46", "120", "240"],
        correct: 1
    },
    {
        question: "Bir karenin alanı 196 cm² ise çevresi kaç cm'dir?",
        answers: ["28", "42", "56", "64"],
        correct: 2
    },
    {
        question: "Yarıçapı 7 cm olan bir çemberin çevresi kaç cm'dir? (π = 22/7)",
        answers: ["22", "44", "49", "154"],
        correct: 1
    },
    {
        question: "Tabanı 12 cm, yüksekliği 9 cm olan üçgenin alanı kaç cm²'dir?",
        answers: ["21", "54", "108", "216"],
        correct: 1
    },
    {
        question: "Bir dik üçgende dik kenarlar 9 cm ve 12 cm'dir. Hipotenüs kaç cm'dir?",
        answers: ["13", "15", "18", "21"],
        correct: 1
    },
    {
        question: "Bir düzgün altıgenin bir iç açısı kaç derecedir?",
        answers: ["90°", "108°", "120°", "135°"],
        correct: 2
    },
    {
        question: "Bir dörtgenin iç açıları 80°, 95°, 110° ve x° ise x kaçtır?",
        answers: ["65°", "75°", "85°", "95°"],
        correct: 1
    },
    {
        question: "Kenar uzunluğu 4 cm olan küpün hacmi kaç cm³'tür?",
        answers: ["16", "48", "64", "96"],
        correct: 2
    },
    {
        question: "Yarıçapı 3 cm, yüksekliği 10 cm olan silindirin hacmi kaç cm³'tür? (π = 3)",
        answers: ["30", "90", "180", "270"],
        correct: 3
    },
    {
        question: "Bir üçgenin kenarları 7 cm, 10 cm ve 12 cm'dir. Çevresi kaç cm'dir?",
        answers: ["19", "27", "29", "84"],
        correct: 2
    },
    {
        question: "Benzer iki üçgende küçük üçgenin bir kenarı 6 cm, karşılık gelen büyük kenar 15 cm'dir. Küçük üçgenin başka bir kenarı 8 cm ise büyük üçgendeki karşılığı kaç cm'dir?",
        answers: ["12", "18", "20", "24"],
        correct: 2
    },
    {
        question: "Bir paralelkenarın tabanı 14 cm, yüksekliği 6 cm'dir. Alanı kaç cm²'dir?",
        answers: ["20", "42", "84", "168"],
        correct: 2
    },
    {
        question: "Dış açısı 45° olan düzgün çokgen kaç kenarlıdır?",
        answers: ["6", "8", "9", "10"],
        correct: 1
    },
    {
        question: "Bir dikdörtgenin alanı 180 cm², kısa kenarı 10 cm'dir. Çevresi kaç cm'dir?",
        answers: ["38", "46", "56", "72"],
        correct: 1
    }
];
