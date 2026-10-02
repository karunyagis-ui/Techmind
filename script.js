const questions = [

    // 1
    {
        category: "ARTIFICIAL INTELLIGENCE",
        question: "Which AI technique is primarily used to reduce the dimensionality of a high-dimensional dataset while preserving maximum variance?",
        options: [
            "Principal Component Analysis",
            "Gradient Descent",
            "Random Forest",
            "Apriori Algorithm"
        ],
        answer: 0
    },

    // 2
    {
        category: "MACHINE LEARNING",
        question: "In a neural network, what is the primary purpose of an activation function?",
        options: [
            "Store training data",
            "Introduce non-linearity",
            "Increase RAM capacity",
            "Normalize the database"
        ],
        answer: 1
    },

    // 3
    {
        category: "DEEP LEARNING",
        question: "Which architecture is particularly effective for capturing spatial patterns in image data?",
        options: [
            "CNN",
            "RNN",
            "Hash Table",
            "Binary Search Tree"
        ],
        answer: 0
    },

    // 4
    {
        category: "AI",
        question: "What problem does the vanishing-gradient phenomenon primarily cause in deep neural networks?",
        options: [
            "Weights in early layers receive extremely small updates",
            "Training data becomes encrypted",
            "CPU frequency decreases",
            "Database indexes disappear"
        ],
        answer: 0
    },

    // 5
    {
        category: "MACHINE LEARNING",
        question: "Which regularization technique randomly disables neurons during neural-network training?",
        options: [
            "Dropout",
            "Pooling",
            "Tokenization",
            "Bagging"
        ],
        answer: 0
    },

    // 6
    {
        category: "DATA SCIENCE",
        question: "What does the ROC curve primarily visualize?",
        options: [
            "True Positive Rate against False Positive Rate",
            "Precision against dataset size",
            "Loss against memory",
            "Accuracy against CPU usage"
        ],
        answer: 0
    },

    // 7
    {
        category: "STATISTICS",
        question: "A p-value below a chosen significance level generally provides evidence against which hypothesis?",
        options: [
            "Alternative hypothesis",
            "Null hypothesis",
            "Regression hypothesis",
            "Sampling hypothesis"
        ],
        answer: 1
    },

    // 8
    {
        category: "PYTHON",
        question: "Which Python feature allows an object to define behavior for operations such as +, == and []?",
        options: [
            "Magic/Dunder methods",
            "Decorators only",
            "Generators only",
            "Lambda expressions"
        ],
        answer: 0
    },

    // 9
    {
        category: "PYTHON",
        question: "What does Python's Global Interpreter Lock primarily restrict in CPython?",
        options: [
            "Multiple native threads executing Python bytecode simultaneously",
            "Multiple processes accessing memory",
            "Use of external libraries",
            "File operations"
        ],
        answer: 0
    },

    // 10
    {
        category: "C#",
        question: "Which C# keyword allows a method to be replaced in a derived class?",
        options: [
            "override",
            "replace",
            "extend",
            "shadow"
        ],
        answer: 0
    },

    // 11
    {
        category: "C#",
        question: "What is the primary purpose of async and await in C#?",
        options: [
            "Enable asynchronous programming without manually managing continuations",
            "Increase CPU clock speed",
            "Create database indexes",
            "Encrypt network packets"
        ],
        answer: 0
    },

    // 12
    {
        category: "C#",
        question: "Which .NET mechanism automatically reclaims memory occupied by unreachable managed objects?",
        options: [
            "Garbage Collector",
            "JIT Compiler",
            "CLR Loader",
            "Reflection Engine"
        ],
        answer: 0
    },

    // 13
    {
        category: "DATABASE",
        question: "Which database isolation level prevents dirty reads but may still allow non-repeatable reads?",
        options: [
            "Read Uncommitted",
            "Read Committed",
            "Serializable",
            "Snapshot only"
        ],
        answer: 1
    },

    // 14
    {
        category: "DATABASE",
        question: "Which normal form specifically eliminates transitive dependencies on a non-key attribute?",
        options: [
            "1NF",
            "2NF",
            "3NF",
            "4NF"
        ],
        answer: 2
    },

    // 15
    {
        category: "SQL",
        question: "Which SQL clause is used to filter groups after GROUP BY has been applied?",
        options: [
            "WHERE",
            "HAVING",
            "FILTER",
            "ORDER BY"
        ],
        answer: 1
    },

    // 16
    {
        category: "DATABASE",
        question: "What is the primary purpose of an index in a relational database?",
        options: [
            "Speed up data retrieval",
            "Increase table normalization",
            "Encrypt records",
            "Prevent all deadlocks"
        ],
        answer: 0
    },

    // 17
    {
        category: "OPERATING SYSTEM",
        question: "Which condition is NOT one of the four Coffman conditions required for deadlock?",
        options: [
            "Mutual exclusion",
            "Hold and wait",
            "Circular wait",
            "Priority scheduling"
        ],
        answer: 3
    },

    // 18
    {
        category: "OPERATING SYSTEM",
        question: "What is a context switch?",
        options: [
            "Switching CPU execution from one process or thread to another",
            "Changing the operating system",
            "Moving files between disks",
            "Changing a user's password"
        ],
        answer: 0
    },

    // 19
    {
        category: "COMPUTER SCIENCE",
        question: "What is the average time complexity of lookup in a well-balanced hash table?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answer: 0
    },

    // 20
    {
        category: "ALGORITHMS",
        question: "Which sorting algorithm has O(n log n) average complexity but O(n²) worst-case complexity in its standard form?",
        options: [
            "Merge Sort",
            "Heap Sort",
            "Quick Sort",
            "Counting Sort"
        ],
        answer: 2
    },

    // 21
    {
        category: "DATA STRUCTURES",
        question: "Which data structure is most directly associated with breadth-first search?",
        options: [
            "Stack",
            "Queue",
            "Heap",
            "Hash Map"
        ],
        answer: 1
    },

    // 22
    {
        category: "NETWORKING",
        question: "Which protocol is responsible for translating an IP address into a MAC address on a local network?",
        options: [
            "DNS",
            "ARP",
            "DHCP",
            "FTP"
        ],
        answer: 1
    },

    // 23
    {
        category: "NETWORKING",
        question: "Which transport-layer protocol provides reliable, ordered delivery using a connection-oriented mechanism?",
        options: [
            "UDP",
            "ICMP",
            "TCP",
            "ARP"
        ],
        answer: 2
    },

    // 24
    {
        category: "NETWORKING",
        question: "What is the purpose of CIDR notation such as /24?",
        options: [
            "Specify the network prefix length",
            "Specify encryption strength",
            "Specify TCP port number",
            "Specify DNS priority"
        ],
        answer: 0
    },

    // 25
    {
        category: "NETWORKING",
        question: "Which device primarily operates at Layer 3 of the OSI model?",
        options: [
            "Hub",
            "Switch",
            "Router",
            "Repeater"
        ],
        answer: 2
    },

    // 26
    {
        category: "CYBERSECURITY",
        question: "Which attack attempts to inject malicious SQL syntax through application input fields?",
        options: [
            "SQL Injection",
            "ARP Spoofing",
            "DDoS",
            "Brute-force DNS"
        ],
        answer: 0
    },

    // 27
    {
        category: "CYBERSECURITY",
        question: "What is the primary security purpose of salting a password before hashing?",
        options: [
            "Make identical passwords produce identical hashes",
            "Defend against precomputed hash attacks",
            "Encrypt the database",
            "Increase password length"
        ],
        answer: 1
    },

    // 28
    {
        category: "CYBERSECURITY",
        question: "Which security principle requires users to receive only the permissions necessary for their tasks?",
        options: [
            "Zero Trust",
            "Least Privilege",
            "Defense in Depth",
            "Separation of Duties"
        ],
        answer: 1
    },

    // 29
    {
        category: "CYBERSECURITY",
        question: "What does a man-in-the-middle attack attempt to do?",
        options: [
            "Intercept or manipulate communication between parties",
            "Destroy a hard disk",
            "Increase network bandwidth",
            "Compress network traffic"
        ],
        answer: 0
    },

    // 30
    {
        category: "CRYPTOGRAPHY",
        question: "Which cryptographic property ensures that data has not been modified during transmission?",
        options: [
            "Integrity",
            "Availability",
            "Non-repudiation only",
            "Compression"
        ],
        answer: 0
    },

    // 31
    {
        category: "CLOUD COMPUTING",
        question: "Which cloud service model provides virtual machines, storage and networking resources?",
        options: [
            "SaaS",
            "PaaS",
            "IaaS",
            "FaaS only"
        ],
        answer: 2
    },

    // 32
    {
        category: "CLOUD COMPUTING",
        question: "What is horizontal scaling?",
        options: [
            "Adding more instances or machines",
            "Increasing CPU/RAM of one machine",
            "Reducing database tables",
            "Compressing application binaries"
        ],
        answer: 0
    },

    // 33
    {
        category: "DEVOPS",
        question: "What is the primary purpose of Continuous Integration?",
        options: [
            "Frequently integrate and automatically validate code changes",
            "Manually deploy software once a year",
            "Replace all testing with monitoring",
            "Increase physical server capacity"
        ],
        answer: 0
    },

    // 34
    {
        category: "DEVOPS",
        question: "Which deployment strategy gradually shifts traffic from an old version to a new version?",
        options: [
            "Blue-Green only",
            "Canary deployment",
            "Big Bang",
            "Waterfall"
        ],
        answer: 1
    },

    // 35
    {
        category: "DOCKER",
        question: "What is the main difference between a container and a traditional virtual machine?",
        options: [
            "Containers generally share the host OS kernel",
            "Containers always require more RAM",
            "VMs cannot run applications",
            "Containers cannot be isolated"
        ],
        answer: 0
    },

    // 36
    {
        category: "KUBERNETES",
        question: "In Kubernetes, what is the smallest deployable unit that can contain one or more containers?",
        options: [
            "Node",
            "Pod",
            "Cluster",
            "Namespace"
        ],
        answer: 1
    },

    // 37
    {
        category: "MICROSERVICES",
        question: "Which pattern prevents repeated calls to an unavailable downstream service from overwhelming it?",
        options: [
            "Circuit Breaker",
            "Singleton",
            "Factory",
            "Observer"
        ],
        answer: 0
    },

    // 38
    {
        category: "SOFTWARE ARCHITECTURE",
        question: "Which architectural style separates an application into independent services communicating over a network?",
        options: [
            "Microservices",
            "Monolithic only",
            "Spaghetti architecture",
            "Single-thread architecture"
        ],
        answer: 0
    },

    // 39
    {
        category: "REST API",
        question: "Which HTTP status code conventionally indicates that a request was successful and a new resource was created?",
        options: [
            "200",
            "201",
            "204",
            "304"
        ],
        answer: 1
    },

    // 40
    {
        category: "WEB DEVELOPMENT",
        question: "Which mechanism allows a browser to make cross-origin requests when the server explicitly permits them?",
        options: [
            "CORS",
            "DOM",
            "JSONP only",
            "JWT"
        ],
        answer: 0
    },

    // 41
    {
        category: "BLOCKCHAIN",
        question: "What is the primary purpose of a cryptographic hash in a blockchain?",
        options: [
            "Create a tamper-evident representation of data",
            "Increase transaction speed automatically",
            "Replace consensus",
            "Store private keys publicly"
        ],
        answer: 0
    },

    // 42
    {
        category: "BLOCKCHAIN",
        question: "What problem does a consensus mechanism primarily address in a distributed blockchain network?",
        options: [
            "Agreement on the state of the ledger",
            "Increasing monitor resolution",
            "Compressing images",
            "Improving keyboard input"
        ],
        answer: 0
    },

    // 43
    {
        category: "LINUX",
        question: "Which Linux command displays the current processes running on the system in a dynamic view?",
        options: [
            "top",
            "grep",
            "chmod",
            "mkdir"
        ],
        answer: 0
    },

    // 44
    {
        category: "LINUX",
        question: "What does chmod 755 generally grant to the owner of a file?",
        options: [
            "Read, write and execute",
            "Read only",
            "Execute only",
            "No permissions"
        ],
        answer: 0
    },

    // 45
    {
        category: "GIT",
        question: "Which Git operation creates a new commit that reverses the changes introduced by an earlier commit?",
        options: [
            "git reset",
            "git revert",
            "git stash",
            "git fetch"
        ],
        answer: 1
    },

    // 46
    {
        category: "SOFTWARE ENGINEERING",
        question: "Which SOLID principle states that a class should have one reason to change?",
        options: [
            "Open/Closed Principle",
            "Single Responsibility Principle",
            "Liskov Substitution Principle",
            "Dependency Inversion Principle"
        ],
        answer: 1
    },

    // 47
    {
        category: "SOFTWARE ENGINEERING",
        question: "What is polymorphism in object-oriented programming?",
        options: [
            "One interface allowing different implementations",
            "Encrypting an object",
            "Creating only one object",
            "Removing inheritance"
        ],
        answer: 0
    },

    // 48
    {
        category: "DATABASE",
        question: "Which technique is commonly used to avoid the N+1 query problem in ORM-based applications?",
        options: [
            "Eager loading or appropriate joins",
            "Increasing monitor resolution",
            "Deleting indexes",
            "Disabling transactions"
        ],
        answer: 0
    },

    // 49
    {
        category: "SYSTEM DESIGN",
        question: "Which component is commonly used to distribute incoming requests across multiple backend servers?",
        options: [
            "Load Balancer",
            "Compiler",
            "Text Editor",
            "Debugger"
        ],
        answer: 0
    },

    // 50
    {
        category: "SYSTEM DESIGN",
        question: "In a distributed system, why is caching commonly used?",
        options: [
            "To reduce latency and repeated access to expensive data sources",
            "To eliminate the need for databases permanently",
            "To guarantee zero network failures",
            "To replace authentication"
        ],
        answer: 0
    }

];


let currentQuestion = 0;
let score = 0;
let answered = false;
let timeLeft = 30;
let timer;


/* ELEMENTS */

const intro = document.getElementById("intro");
const quizSection = document.getElementById("quizSection");
const resultSection = document.getElementById("resultSection");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

const questionNumber = document.getElementById("questionNumber");
const question = document.getElementById("question");
const category = document.getElementById("category");
const answers = document.getElementById("answers");

const timerDisplay = document.getElementById("timer");
const timerBox = document.getElementById("timerBox");

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const feedback = document.getElementById("feedback");

const scoreDisplay = document.getElementById("score");

const nextBtn = document.getElementById("nextBtn");


/* START */

startBtn.addEventListener("click", function () {

    intro.classList.add("hidden");

    quizSection.classList.remove("hidden");

    currentQuestion = 0;
    score = 0;

    scoreDisplay.textContent = "0";

    loadQuestion();

});


/* LOAD QUESTION */

function loadQuestion() {

    clearInterval(timer);

    answered = false;

    timeLeft = 30;

    timerDisplay.textContent = timeLeft;

    timerBox.classList.remove("timer-danger");

    nextBtn.disabled = true;

    feedback.textContent = "";

    const q = questions[currentQuestion];

    questionNumber.textContent =
        String(currentQuestion + 1).padStart(2, "0")
        + " / "
        + questions.length;

    category.textContent = q.category;

    question.textContent = q.question;

    answers.innerHTML = "";


    q.options.forEach(function (option, index) {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent =
            String.fromCharCode(65 + index)
            + ". "
            + option;

        button.addEventListener(
            "click",
            function () {
                selectAnswer(index, button);
            }
        );

        answers.appendChild(button);

    });


    updateProgress();

    startTimer();
}


/* TIMER */

function startTimer() {

    timer = setInterval(function () {

        timeLeft--;

        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 10) {
            timerBox.classList.add("timer-danger");
        }

        if (timeLeft <= 0) {

            clearInterval(timer);

            selectAnswer(-1, null);

        }

    }, 1000);

}


/* SELECT ANSWER */

function selectAnswer(selected, selectedButton) {

    if (answered) {
        return;
    }

    answered = true;

    clearInterval(timer);

    const current = questions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer");

    buttons.forEach(function (button) {
        button.disabled = true;
    });


    if (selected === current.answer) {

        score++;

        scoreDisplay.textContent = score;

        selectedButton.classList.add("correct");

        feedback.textContent =
            "✓ Correct — excellent technical knowledge.";

        feedback.style.color = "#22c55e";

    } else {

        if (selectedButton) {
            selectedButton.classList.add("wrong");
        }

        buttons[current.answer].classList.add("correct");

        feedback.textContent =
            "✕ Incorrect — the correct answer is highlighted.";

        feedback.style.color = "#ff6b8a";
    }


    nextBtn.disabled = false;

}


/* NEXT QUESTION */

nextBtn.addEventListener("click", function () {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        finishQuiz();

    }

});


/* PROGRESS */

function updateProgress() {

    const percentage =
        Math.round(
            (currentQuestion / questions.length) * 100
        );

    progressBar.style.width = percentage + "%";

    progressText.textContent =
        percentage + "%";

}


/* FINISH */

function finishQuiz() {

    clearInterval(timer);

    quizSection.classList.add("hidden");

    resultSection.classList.remove("hidden");

    progressBar.style.width = "100%";

    progressText.textContent = "100%";

    const total = questions.length;

    const wrong = total - score;

    const percent =
        Math.round((score / total) * 100);

    document.getElementById("finalScore").textContent =
        score;

    document.getElementById("percentage").textContent =
        percent + "%";

    document.getElementById("correctCount").textContent =
        score;

    document.getElementById("wrongCount").textContent =
        wrong;

    document.getElementById("accuracy").textContent =
        percent + "%";


    const title =
        document.getElementById("resultTitle");

    const message =
        document.getElementById("resultMessage");


    if (score >= 45) {

        title.textContent =
            "🏆 TECHNOLOGY MASTER";

        message.textContent =
            "Exceptional performance. Your understanding spans multiple advanced areas of modern technology.";

    }

    else if (score >= 38) {

        title.textContent =
            "🚀 ELITE TECHNOLOGIST";

        message.textContent =
            "Outstanding result. You demonstrated strong knowledge across a wide range of technical domains.";

    }

    else if (score >= 30) {

        title.textContent =
            "🔥 ADVANCED THINKER";

        message.textContent =
            "Excellent work. You have a strong technical foundation and are ready for deeper challenges.";

    }

    else if (score >= 20) {

        title.textContent =
            "💡 TECH EXPLORER";

        message.textContent =
            "Good attempt. Continue strengthening your fundamentals and advanced concepts.";

    }

    else {

        title.textContent =
            "🌱 KEEP LEARNING";

        message.textContent =
            "This was an intentionally difficult challenge. Review the concepts and try again.";

    }

}


/* RESTART */

restartBtn.addEventListener("click", function () {

    currentQuestion = 0;

    score = 0;

    scoreDisplay.textContent = "0";

    resultSection.classList.add("hidden");

    intro.classList.remove("hidden");

    progressBar.style.width = "0%";

    progressText.textContent = "0%";

});