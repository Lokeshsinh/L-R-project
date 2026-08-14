// import React, { useState } from "react";
// import {
//     MessageCircle,
//     X,
//     Bot,
//     Send,
//     ChevronRight,
//     Sparkles,
// } from "lucide-react";
// import styles from "../styles/FloatingAssistant.module.css";

// const WHATSAPP_NUMBER = "919999999999";

// const quickQuestions = [
//     "What is a pre-engineered prefab?",
//     "How does solar integration work?",
//     "What are the benefits?",
//     "How long does installation take?",
// ];

// const getBotAnswer = (question) => {
//     const text = question.toLowerCase();

//     if (
//         text.includes("pre-engineered") ||
//         text.includes("prefab") ||
//         text.includes("what is")
//     ) {
//         return "Pre-engineered prefab structures are factory-engineered building solutions designed for faster installation, structural reliability, and efficient project execution. They can be customized for warehouses, site offices, industrial buildings, and solar-ready applications.";
//     }

//     if (
//         text.includes("solar") ||
//         text.includes("integration") ||
//         text.includes("solar integration")
//     ) {
//         return "Our structures can be designed with solar integration in mind. The roof structure can accommodate suitable solar mounting systems while considering load requirements, roof layout, cable routing, access, and long-term performance.";
//     }

//     if (
//         text.includes("benefit") ||
//         text.includes("advantages")
//     ) {
//         return "Key benefits include faster construction, engineered structural performance, reduced site work, flexible layouts, easier expansion, and the ability to integrate solar energy systems into the overall roofing concept.";
//     }

//     if (
//         text.includes("installation") ||
//         text.includes("time") ||
//         text.includes("duration")
//     ) {
//         return "Installation time depends on the building size, design complexity, site conditions, and project requirements. Since components are prepared before site installation, prefab construction can significantly reduce on-site execution time compared with conventional construction.";
//     }

//     if (
//         text.includes("warehouse") ||
//         text.includes("building")
//     ) {
//         return "Pre-engineered structures are suitable for warehouses, manufacturing facilities, storage buildings, workshops, commercial spaces, and other industrial applications. The design can be developed around your dimensions and operational requirements.";
//     }

//     if (
//         text.includes("cost") ||
//         text.includes("price")
//     ) {
//         return "Project cost depends on dimensions, structural requirements, materials, roofing, insulation, accessories, solar integration, and site conditions. Share your approximate size and application to get a more specific project discussion.";
//     }

//     if (
//         text.includes("contact") ||
//         text.includes("quote") ||
//         text.includes("quotation")
//     ) {
//         return "Sure. You can contact our team through WhatsApp for project requirements, dimensions, drawings, application details, and quotation discussions.";
//     }

//     return "I can help you with pre-engineered prefab structures, solar-ready roofing, applications, benefits, installation, and project requirements. Please choose a quick question below or ask me something specific.";
// };

// const FloatingAssistant = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isChatOpen, setIsChatOpen] = useState(false);
//     const [input, setInput] = useState("");

//     const [messages, setMessages] = useState([
//         {
//             id: 1,
//             sender: "bot",
//             text: "Hello! 👋 I'm your AI assistant. I can help you understand our Pre-Engineered Prefab & Solar solutions.",
//         },
//     ]);

//     const openWhatsApp = () => {
//         const message = encodeURIComponent(
//             "Hello, I would like to know more about your Pre-Engineered Prefab & Solar solutions."
//         );

//         window.open(
//             `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
//             "_blank"
//         );
//     };

//     const openChat = () => {
//         setIsMenuOpen(false);
//         setIsChatOpen(true);
//     };

//     const closeChat = () => {
//         setIsChatOpen(false);
//     };

//     const sendMessage = (question = input) => {
//         const trimmedQuestion = question.trim();

//         if (!trimmedQuestion) return;

//         const userMessage = {
//             id: Date.now(),
//             sender: "user",
//             text: trimmedQuestion,
//         };

//         setMessages((prev) => [...prev, userMessage]);
//         setInput("");

//         setTimeout(() => {
//             const botMessage = {
//                 id: Date.now() + 1,
//                 sender: "bot",
//                 text: getBotAnswer(trimmedQuestion),
//             };

//             setMessages((prev) => [...prev, botMessage]);
//         }, 500);
//     };

//     const handleKeyDown = (e) => {
//         if (e.key === "Enter") {
//             sendMessage();
//         }
//     };

//     return (
//         <>
//             {/* =========================
//                 CHATBOT
//             ========================= */}
//             {isChatOpen && (
//                 <div className={styles.chatWindow}>

//                     {/* Header */}
//                     <div className={styles.chatHeader}>
//                         <div className={styles.botProfile}>
//                             <div className={styles.botAvatar}>
//                                 <Bot size={21} />
//                                 <span className={styles.onlineDot}></span>
//                             </div>

//                             <div>
//                                 <h3>Prefab AI Assistant</h3>
//                                 <span>
//                                     <span className={styles.statusDot}></span>
//                                     Online
//                                 </span>
//                             </div>
//                         </div>

//                         <button
//                             className={styles.closeButton}
//                             onClick={closeChat}
//                             aria-label="Close chatbot"
//                         >
//                             <X size={20} />
//                         </button>
//                     </div>

//                     {/* Chat Body */}
//                     <div className={styles.chatBody}>

//                         <div className={styles.welcomeBadge}>
//                             <Sparkles size={13} />
//                             AI Assistant
//                         </div>

//                         {messages.map((message) => (
//                             <div
//                                 key={message.id}
//                                 className={
//                                     message.sender === "user"
//                                         ? styles.userMessageRow
//                                         : styles.botMessageRow
//                                 }
//                             >
//                                 {message.sender === "bot" && (
//                                     <div className={styles.smallBotAvatar}>
//                                         <Bot size={15} />
//                                     </div>
//                                 )}

//                                 <div
//                                     className={
//                                         message.sender === "user"
//                                             ? styles.userBubble
//                                             : styles.botBubble
//                                     }
//                                 >
//                                     {message.text}
//                                 </div>
//                             </div>
//                         ))}

//                         {/* Quick Questions */}
//                         {messages.length === 1 && (
//                             <div className={styles.quickQuestions}>
//                                 <p>Quick questions</p>

//                                 {quickQuestions.map((question) => (
//                                     <button
//                                         key={question}
//                                         onClick={() => sendMessage(question)}
//                                     >
//                                         <span>{question}</span>
//                                         <ChevronRight size={15} />
//                                     </button>
//                                 ))}
//                             </div>
//                         )}
//                     </div>

//                     {/* Input */}
//                     <div className={styles.chatInputArea}>
//                         <div className={styles.inputWrapper}>
//                             <input
//                                 type="text"
//                                 placeholder="Ask about prefab or solar..."
//                                 value={input}
//                                 onChange={(e) => setInput(e.target.value)}
//                                 onKeyDown={handleKeyDown}
//                             />

//                             <button
//                                 onClick={() => sendMessage()}
//                                 className={styles.sendButton}
//                                 aria-label="Send message"
//                             >
//                                 <Send size={17} />
//                             </button>
//                         </div>

//                         <div className={styles.chatFooter}>
//                             AI assistant • Prefab & Solar Solutions
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* =========================
//                 FLOATING MENU
//             ========================= */}
//             {isMenuOpen && !isChatOpen && (
//                 <div className={styles.actionMenu}>

//                     {/* WhatsApp */}
//                     <button
//                         className={`${styles.actionItem} ${styles.whatsappItem}`}
//                         onClick={openWhatsApp}
//                     >
//                         <div className={styles.actionIcon}>
//                             <MessageCircle size={21} />
//                         </div>

//                         <div className={styles.actionText}>
//                             <strong>WhatsApp</strong>
//                             <span>Chat with our team</span>
//                         </div>
//                     </button>

//                     {/* AI */}
//                     <button
//                         className={`${styles.actionItem} ${styles.aiItem}`}
//                         onClick={openChat}
//                     >
//                         <div className={styles.actionIcon}>
//                             <Bot size={21} />
//                         </div>

//                         <div className={styles.actionText}>
//                             <strong>AI Assistant</strong>
//                             <span>Ask about prefab & solar</span>
//                         </div>
//                     </button>
//                 </div>
//             )}

//             {/* =========================
//                 MAIN FLOATING BUTTON
//             ========================= */}
//             <button
//                 className={`${styles.floatingButton} ${isMenuOpen ? styles.floatingButtonActive : ""
//                     }`}
//                 onClick={() => {
//                     setIsMenuOpen((prev) => !prev);

//                     if (isChatOpen) {
//                         setIsChatOpen(false);
//                     }
//                 }}
//                 aria-label="Open assistant"
//             >
//                 {isMenuOpen || isChatOpen ? (
//                     <X size={26} />
//                 ) : (
//                     <MessageCircle size={27} />
//                 )}

//                 {!isMenuOpen && !isChatOpen && (
//                     <span className={styles.notificationDot}></span>
//                 )}
//             </button>
//         </>
//     );
// };

// export default FloatingAssistant;









import React, { useEffect, useRef, useState } from "react";
import {
    MessageCircle,
    X,
    Send,
    Sparkles,
    User,
    MessageSquareText,
    ArrowUpRight,
    Zap,
    Sun,
    Building2,
    ChevronDown,
} from "lucide-react";

import styles from "../styles/FloatingAssistant.module.css";

/* =========================================================
   CONFIGURATION
========================================================= */

// Replace this with your actual WhatsApp number.
// Use country code without + or spaces.
// Example: 919876543210
const WHATSAPP_NUMBER = "918595351363";

const WHATSAPP_MESSAGE =
    "Hello L&R Prefab Solar India, I would like to know more about your Pre-Engineered Prefab Solar solutions.";

/*
   Optional real AI endpoint.

   Add to your .env:

   VITE_AI_API_URL=http://localhost:5000/api/chat

   Your backend should receive:

   {
      message: "user question",
      history: [...]
   }

   and return:

   {
      answer: "AI answer"
   }
*/
const AI_API_URL = import.meta.env.VITE_AI_API_URL || "";


/* =========================================================
   QUICK QUESTIONS
========================================================= */

const quickQuestions = [
    {
        icon: Sun,
        text: "What is Pre-Engineered Prefab Solar?",
    },
    {
        icon: Building2,
        text: "What prefab solar solutions do you provide?",
    },
    {
        icon: Zap,
        text: "What are the benefits of prefab solar?",
    },
];


/* =========================================================
   LOCAL AI KNOWLEDGE
   Used when no backend AI endpoint is configured.
========================================================= */

const knowledgeBase = [
    {
        keywords: [
            "what is pre engineered prefab solar",
            "what is prefab solar",
            "prefab solar",
            "pre engineered solar",
        ],
        answer:
            "Pre-Engineered Prefab Solar combines prefabricated structural systems with solar-ready roofing and renewable-energy solutions. The approach helps integrate structural design, roofing and solar requirements into one coordinated solution.",
    },

    {
        keywords: [
            "solutions",
            "products",
            "what do you provide",
            "what do you offer",
            "services",
        ],
        answer:
            "L&R Prefab Solar India can support projects across prefabricated structures, PEB buildings, industrial sheds, MS containers, roofing systems, sandwich panels and solar-ready structural solutions.",
    },

    {
        keywords: [
            "benefits",
            "advantage",
            "advantages",
            "why prefab solar",
        ],
        answer:
            "Prefab solar solutions can improve project coordination, installation efficiency and structural integration. Designing the structure and solar requirements together can also simplify planning and reduce unnecessary site work.",
    },

    {
        keywords: [
            "solar roof",
            "solar roofing",
            "roofing",
            "solar ready roof",
        ],
        answer:
            "A solar-ready roofing system is designed with the structural requirements needed to support solar installations. It considers roof geometry, load requirements, mounting interfaces and practical installation needs.",
    },

    {
        keywords: [
            "peb",
            "pre engineered building",
            "pre engineered buildings",
        ],
        answer:
            "Pre-Engineered Buildings, or PEBs, are factory-designed and fabricated structural systems assembled at the project site. They are commonly used for warehouses, industrial facilities and other large-span applications.",
    },

    {
        keywords: [
            "container",
            "ms container",
            "modular container",
        ],
        answer:
            "MS containers can be engineered for applications such as site offices, storage, accommodation and equipment housing. Their configuration can be developed according to project dimensions and functional requirements.",
    },

    {
        keywords: [
            "solar mounting",
            "mounting",
            "solar structure",
            "solar mounting structure",
        ],
        answer:
            "Solar mounting structures provide the structural interface between the solar modules and the supporting roof or ground system. Proper design considers loads, module arrangement, installation requirements and long-term durability.",
    },

    {
        keywords: [
            "contact",
            "quote",
            "quotation",
            "price",
            "cost",
            "project",
        ],
        answer:
            "For project-specific pricing or a quotation, please share your project requirements such as structure type, approximate dimensions, location and solar capacity. You can also contact the L&R Green team directly through WhatsApp.",
    },

    {
        keywords: [
            "hello",
            "hi",
            "hey",
            "good morning",
            "good afternoon",
            "good evening",
        ],
        answer:
            "Hello! 👋 I'm the L&R Green AI Assistant. I can help you understand Pre-Engineered Prefab Solar, PEB structures, roofing systems, containers, solar mounting solutions and project requirements.",
    },
];


/* =========================================================
   LOCAL ANSWER FUNCTION
========================================================= */

const getLocalAnswer = (question) => {
    const normalizedQuestion = question.toLowerCase().trim();

    const matchedItem = knowledgeBase.find((item) =>
        item.keywords.some((keyword) =>
            normalizedQuestion.includes(keyword)
        )
    );

    if (matchedItem) {
        return matchedItem.answer;
    }

    return `I can help with questions about L&R Green's Pre-Engineered Prefab Solar solutions, PEB buildings, prefab structures, MS containers, roofing systems, solar mounting structures and project requirements.

For a project-specific answer, tell me what you are planning to build, and I'll guide you through the available options.`;
};


/* =========================================================
   COMPONENT
========================================================= */

const FloatingAssistant = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);

    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([
        {
            id: 1,
            type: "bot",
            text:
                "Hello! 👋 I'm the L&R Prefab Solar AI Assistant. Ask me anything about Pre-Engineered Prefab Solar, PEB structures, roofing systems or our solutions.",
        },
    ]);

    const [isTyping, setIsTyping] = useState(false);

    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);


    /* =====================================================
       AUTO SCROLL
    ===================================================== */

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, isTyping]);


    /* =====================================================
       OPEN CHAT
    ===================================================== */

    const openChat = () => {
        setIsMenuOpen(false);
        setIsChatOpen(true);

        setTimeout(() => {
            inputRef.current?.focus();
        }, 250);
    };


    /* =====================================================
       CLOSE CHAT
    ===================================================== */

    const closeChat = () => {
        setIsChatOpen(false);
        setIsTyping(false);
    };


    /* =====================================================
       WHATSAPP
    ===================================================== */

    const openWhatsApp = () => {
        const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);

        const whatsappURL =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        window.open(whatsappURL, "_blank", "noopener,noreferrer");

        setIsMenuOpen(false);
    };


    /* =====================================================
       ASK AI
    ===================================================== */

    const askAI = async (userQuestion) => {
        if (!userQuestion.trim()) return;

        const userMessage = {
            id: Date.now(),
            type: "user",
            text: userQuestion,
        };

        setMessages((previous) => [
            ...previous,
            userMessage,
        ]);

        setMessage("");
        setIsTyping(true);

        try {

            if (AI_API_URL) {
                const response = await fetch(AI_API_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        message: userQuestion,
                        history: messages,
                    }),
                });

                if (!response.ok) {
                    throw new Error("AI request failed");
                }

                const data = await response.json();

                const aiAnswer =
                    data.answer ||
                    data.message ||
                    "Sorry, I couldn't generate an answer.";

                setMessages((previous) => [
                    ...previous,
                    {
                        id: Date.now() + 1,
                        type: "bot",
                        text: aiAnswer,
                    },
                ]);

                setIsTyping(false);
                return;
            }



            await new Promise((resolve) =>
                setTimeout(resolve, 900)
            );

            const localAnswer = getLocalAnswer(userQuestion);

            setMessages((previous) => [
                ...previous,
                {
                    id: Date.now() + 1,
                    type: "bot",
                    text: localAnswer,
                },
            ]);
        } catch (error) {
            console.error("AI Assistant Error:", error);

            setMessages((previous) => [
                ...previous,
                {
                    id: Date.now() + 1,
                    type: "bot",
                    text:
                        "I'm having trouble connecting to the AI service right now. Please try again or contact our team through WhatsApp.",
                },
            ]);
        } finally {
            setIsTyping(false);
        }
    };



    const handleSubmit = (event) => {
        event.preventDefault();

        const trimmedMessage = message.trim();

        if (!trimmedMessage || isTyping) return;

        askAI(trimmedMessage);
    };



    const handleQuickQuestion = (question) => {
        if (isTyping) return;

        askAI(question);
    };



    const handleKeyDown = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleSubmit(event);
        }
    };


    return (
        <div className={styles.assistantWrapper}>

            {/* =================================================
                AI CHAT WINDOW
            ================================================= */}

            {isChatOpen && (
                <div className={styles.chatWindow}>

                    {/* HEADER */}

                    <div className={styles.chatHeader}>

                        <div className={styles.headerIdentity}>

                            <div className={styles.botAvatar}>
                                <Sparkles size={21} />
                                <span className={styles.onlineDot}></span>
                            </div>

                            <div className={styles.headerText}>
                                <h3>L&R AI Assistant</h3>
                                <div className={styles.onlineStatus}>
                                    <span></span>
                                    Online
                                </div>
                            </div>

                        </div>

                        <div className={styles.headerActions}>

                            <button
                                className={styles.headerIcon}
                                onClick={() => setIsChatOpen(false)}
                                aria-label="Minimize chatbot"
                            >
                                <ChevronDown size={20} />
                            </button>

                            <button
                                className={styles.closeButton}
                                onClick={closeChat}
                                aria-label="Close chatbot"
                            >
                                <X size={20} />
                            </button>

                        </div>

                    </div>


                    {/* CHAT BODY */}

                    <div className={styles.chatBody}>

                        {/* INTRO CARD */}

                        <div className={styles.introArea}>

                            <div className={styles.introIcon}>
                                <Sparkles size={18} />
                            </div>

                            <div>
                                <span className={styles.introLabel}>
                                    AI ASSISTANT
                                </span>

                                <h4>
                                    How can I help
                                    <br />
                                    your project?
                                </h4>
                            </div>

                        </div>


                        {/* MESSAGES */}

                        <div className={styles.messageList}>

                            {messages.map((item) => (
                                <div
                                    key={item.id}
                                    className={
                                        item.type === "user"
                                            ? styles.userMessageRow
                                            : styles.botMessageRow
                                    }
                                >

                                    {item.type === "bot" && (
                                        <div className={styles.smallBotAvatar}>
                                            <Sparkles size={14} />
                                        </div>
                                    )}

                                    <div
                                        className={
                                            item.type === "user"
                                                ? styles.userMessage
                                                : styles.botMessage
                                        }
                                    >
                                        {item.text}
                                    </div>

                                    {item.type === "user" && (
                                        <div className={styles.userAvatar}>
                                            <User size={14} />
                                        </div>
                                    )}

                                </div>
                            ))}


                            {/* TYPING */}

                            {isTyping && (
                                <div className={styles.botMessageRow}>

                                    <div className={styles.smallBotAvatar}>
                                        <Sparkles size={14} />
                                    </div>

                                    <div className={styles.typingBubble}>

                                        <span></span>
                                        <span></span>
                                        <span></span>

                                    </div>

                                </div>
                            )}

                            <div ref={messagesEndRef}></div>

                        </div>


                        {/* QUICK QUESTIONS */}

                        {messages.length === 1 && !isTyping && (
                            <div className={styles.quickQuestions}>

                                <p>Popular questions</p>

                                {quickQuestions.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <button
                                            key={index}
                                            className={styles.quickQuestion}
                                            onClick={() =>
                                                handleQuickQuestion(item.text)
                                            }
                                        >

                                            <span className={styles.quickIcon}>
                                                <Icon size={15} />
                                            </span>

                                            <span>{item.text}</span>

                                            <ArrowUpRight
                                                size={14}
                                                className={styles.questionArrow}
                                            />

                                        </button>
                                    );
                                })}

                            </div>
                        )}

                    </div>


                    {/* INPUT */}

                    <div className={styles.inputArea}>

                        <form
                            className={styles.messageForm}
                            onSubmit={handleSubmit}
                        >

                            <input
                                ref={inputRef}
                                type="text"
                                value={message}
                                onChange={(event) =>
                                    setMessage(event.target.value)
                                }
                                onKeyDown={handleKeyDown}
                                placeholder="Ask about prefab solar..."
                                disabled={isTyping}
                            />

                            <button
                                type="submit"
                                disabled={!message.trim() || isTyping}
                                className={styles.sendButton}
                                aria-label="Send message"
                            >
                                <Send size={17} />
                            </button>

                        </form>

                        <div className={styles.inputFooter}>
                            <span>
                                <Sparkles size={11} />
                                AI-powered assistant
                            </span>

                            <button
                                type="button"
                                onClick={openWhatsApp}
                            >
                                Talk to team
                            </button>
                        </div>

                    </div>

                </div>
            )}


    

            {isMenuOpen && !isChatOpen && (
                <div className={styles.actionMenu}>

                    {/* AI BUTTON */}

                    <button
                        className={`${styles.actionItem} ${styles.aiAction}`}
                        onClick={openChat}
                    >

                        <span className={styles.actionIcon}>
                            <MessageSquareText size={20} />
                        </span>

                        <span className={styles.actionContent}>
                            <strong>AI Assistant</strong>
                            <small>Ask anything</small>
                        </span>

                        <ArrowUpRight size={17} />

                    </button>


                    {/* WHATSAPP */}

                    <button
                        className={`${styles.actionItem} ${styles.whatsappAction}`}
                        onClick={openWhatsApp}
                    >

                        <span className={styles.actionIcon}>
                            <MessageCircle size={21} />
                        </span>

                        <span className={styles.actionContent}>
                            <strong>WhatsApp</strong>
                            <small>Talk to our team</small>
                        </span>

                        <ArrowUpRight size={17} />

                    </button>

                </div>
            )}


            {/* =================================================
                FLOATING MAIN BUTTON
            ================================================= */}

            <button
                className={`${styles.floatingButton} ${isMenuOpen || isChatOpen
                        ? styles.floatingButtonActive
                        : ""
                    }`}
                onClick={() => {
                    if (isChatOpen) {
                        closeChat();
                        return;
                    }

                    setIsMenuOpen((previous) => !previous);
                }}
                aria-label="Open assistant"
            >

                <span className={styles.buttonGlow}></span>

                <span className={styles.buttonIcon}>
                    {isChatOpen || isMenuOpen ? (
                        <X size={27} />
                    ) : (
                        <MessageCircle size={27} />
                    )}
                </span>

                {!isMenuOpen && !isChatOpen && (
                    <span className={styles.buttonPulse}></span>
                )}

            </button>

        </div>
    );
};

export default FloatingAssistant;