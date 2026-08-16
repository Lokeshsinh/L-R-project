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
            "L&R Prefab Solar India can support projects across prefabricated structures, PEB buildings, industrial sheds, MS containers, roofing systems, sandwich panels, LGSF buildings, rooftop structures, clean rooms, HVAC solutions and solar-ready structural solutions.",
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
            "factory building",
        ],
        answer:
            "Pre-Engineered Buildings, or PEBs, are factory-designed and fabricated structural systems assembled at the project site. They are commonly used for warehouses, industrial facilities, factories and other large-span applications.",
    },

    {
        keywords: [
            "bess container",
            "bess containers",
            "battery energy storage container",
            "battery storage container",
        ],
        answer:
            "BESS Containers are specialized containerized solutions designed to house Battery Energy Storage Systems. They can be engineered with appropriate layouts, ventilation, electrical provisions and safety considerations according to project requirements.",
    },

    {
        keywords: [
            "ms container",
            "ms containers",
            "mild steel container",
            "mild steel containers",
        ],
        answer:
            "MS Containers are durable modular structures suitable for site offices, storage, accommodation, equipment housing and other project applications. They can be customized according to dimensions, layout and functional requirements.",
    },

    {
        keywords: [
            "premium container",
            "premium containers",
        ],
        answer:
            "Premium Containers are enhanced modular container solutions designed with improved finishes, layouts and features for projects requiring a more refined and comfortable environment.",
    },

    {
        keywords: [
            "executive ms container",
            "executive ms containers",
        ],
        answer:
            "Executive MS Containers are premium MS-based modular units designed for executive offices, accommodation and other applications where additional comfort, appearance and functionality are required.",
    },

    {
        keywords: [
            "l&r value container",
            "lr value container",
            "value container",
        ],
        answer:
            "L&R Value Containers provide practical and economical modular space solutions for offices, storage, accommodation and project requirements while maintaining functional and durable construction.",
    },

    {
        keywords: [
            "home container",
            "container home",
            "container house",
        ],
        answer:
            "Home Containers are modular residential units designed to provide practical living spaces using prefabricated construction. They can be configured according to space, layout and project requirements.",
    },

    {
        keywords: [
            "executive container",
            "executive containers",
        ],
        answer:
            "Executive Containers are premium modular units suitable for executive offices, accommodation, site facilities and other applications requiring enhanced comfort, aesthetics and functionality.",
    },

    {
        keywords: [
            "puf container",
            "puf containers",
            "puf container room",
        ],
        answer:
            "PUF Containers use Polyurethane Foam insulated panels to provide improved thermal insulation. They are suitable for site offices, storage, accommodation and temperature-sensitive applications.",
    },

    {
        keywords: [
            "factory building",
            "factory buildings",
            "prefab factory",
            "prefabricated factory",
        ],
        answer:
            "Prefab Factory Buildings provide efficient structural solutions for manufacturing and industrial operations. They can be designed around production requirements, machinery, storage, ventilation and future expansion needs.",
    },

    {
        keywords: [
            "warehouse",
            "warehouses",
            "prefab warehouse",
            "industrial warehouse",
        ],
        answer:
            "Prefab Warehouses are designed for storage, logistics and industrial applications. They can provide large usable spaces with efficient structural systems and can be customized according to operational requirements.",
    },

    {
        keywords: [
            "industrial shed",
            "industrial sheds",
            "prefab industrial shed",
        ],
        answer:
            "Industrial Sheds are large-span structures designed for manufacturing, storage, workshops and industrial operations. They can be engineered according to site conditions, dimensions, loading and operational requirements.",
    },

    {
        keywords: [
            "prefab modular building",
            "prefab modular buildings",
            "modular building",
            "modular buildings",
        ],
        answer:
            "Prefab Modular Buildings are factory-manufactured building systems that can be quickly assembled at the project site. They are suitable for offices, accommodation, commercial spaces, institutional facilities and specialized applications.",
    },

    {
        keywords: [
            "prefab labour accommodation",
            "prefab labor accommodation",
            "labour accommodation",
            "labor accommodation",
            "worker accommodation",
        ],
        answer:
            "Prefab Labour Accommodation provides practical and scalable living facilities for workers and project teams. Units can include sleeping areas, common spaces, washrooms and other facilities based on project requirements.",
    },

    {
        keywords: [
            "prefab site office",
            "prefab site offices",
            "site office",
            "site offices",
        ],
        answer:
            "Prefab Site Offices are modular office units designed for construction sites, industrial projects and temporary or semi-permanent workplaces. They can be customized with office layouts, electrical systems, insulation and required facilities.",
    },

    {
        keywords: [
            "control room",
            "control rooms",
            "prefab control room",
            "electrical control room",
        ],
        answer:
            "Prefab Control Rooms are specialized modular structures designed for monitoring, electrical and operational control applications. They can be configured with appropriate insulation, electrical provisions and equipment layouts.",
    },

    {
        keywords: [
            "clean room",
            "clean rooms",
            "cleanroom",
            "cleanrooms",
            "prefab clean room",
        ],
        answer:
            "Prefab Clean Rooms are controlled-environment spaces designed for applications where cleanliness, temperature, humidity and contamination control are important. They can be configured according to the required clean-room specifications.",
    },

    {
        keywords: [
            "prefab mushroom farm",
            "prefab mushroom farms",
            "mushroom farm",
            "mushroom farming",
        ],
        answer:
            "Prefab Mushroom Farms are specialized structures designed for controlled mushroom cultivation environments. They can incorporate insulated panels and suitable environmental provisions according to cultivation requirements.",
    },

    {
        keywords: [
            "prefab industrial enclosure",
            "prefab industrial enclosures",
            "industrial enclosure",
            "industrial enclosures",
        ],
        answer:
            "Prefab Industrial Enclosures provide protected spaces for machinery, equipment, processes and industrial operations. They can be customized according to equipment dimensions, access requirements and environmental conditions.",
    },

    {
        keywords: [
            "prefab railway shelter",
            "railway shelters",
            "railway shelter",
            "prefab railway",
        ],
        answer:
            "Prefab Railway Shelters are modular structures designed for railway infrastructure applications such as equipment protection, staff facilities and utility spaces. They can be engineered according to site and operational requirements.",
    },

    {
        keywords: [
            "telecom shelter",
            "telecom shelters",
            "prefab telecom shelter",
            "telecommunication shelter",
        ],
        answer:
            "Prefab Telecom Shelters provide protected modular spaces for telecommunications equipment and infrastructure. They can be designed with suitable insulation, ventilation, electrical provisions and equipment layouts.",
    },

    {
        keywords: [
            "prefab dry wall",
            "dry wall",
            "drywall",
            "dry wall system",
        ],
        answer:
            "Prefab Dry Wall systems provide lightweight and efficient internal or partition wall solutions. They can be used for offices, commercial spaces, residential buildings and other applications requiring fast interior construction.",
    },



    {
        keywords: [
            "sandwich panel",
            "sandwich panels",
        ],
        answer:
            "Sandwich Panels are insulated building panels consisting of an insulating core between protective outer layers. They are widely used for walls, roofs, cold rooms, industrial buildings and other applications requiring insulation and efficient installation.",
    },

    {
        keywords: [
            "puf sandwich panel",
            "puf sandwich panels",
            "puf panel",
            "puf panels",
        ],
        answer:
            "PUF Sandwich Panels use Polyurethane Foam as the insulation core. They provide effective thermal insulation and are commonly used for industrial buildings, cold rooms, site facilities, walls and roofing applications.",
    },

    {
        keywords: [
            "wall puf panel",
            "wall puf panels",
            "puf wall panel",
            "puf wall panels",
        ],
        answer:
            "Wall PUF Panels are insulated wall panels designed to provide thermal performance, protection and fast installation. They are suitable for industrial, commercial, cold-room and modular building applications.",
    },

    {
        keywords: [
            "roof puf panel",
            "roof puf panels",
            "puf roof panel",
            "puf roof panels",
        ],
        answer:
            "Roof PUF Panels are insulated roofing panels designed to provide thermal insulation and weather protection. They are suitable for industrial buildings, warehouses, prefab structures and other roofing applications.",
    },

    {
        keywords: [
            "rockwool panel",
            "rock wool panel",
            "rockwool panels",
            "rock wool panels",
        ],
        answer:
            "Rockwool Panels use mineral wool insulation and are commonly selected where thermal insulation and fire-performance considerations are important. They can be used for industrial, commercial and specialized building applications.",
    },

    {
        keywords: [
            "glasswool panel",
            "glass wool panel",
            "glasswool panels",
            "glass wool panels",
        ],
        answer:
            "Glasswool Panels use glass-fibre insulation to provide thermal and acoustic insulation. They are suitable for walls, roofs, industrial buildings and applications where lightweight insulation is required.",
    },



    {
        keywords: [
            "rooftop room",
            "rooftop rooms",
            "roof top room",
            "roof top rooms",
        ],
        answer:
            "Rooftop Rooms are lightweight modular spaces designed for additional usable space on existing buildings. They can be customized for residential, hospitality, office or recreational applications subject to structural feasibility.",
    },

    {
        keywords: [
            "rooftop residential flat",
            "rooftop residential flats",
            "rooftop flat",
            "rooftop flats",
        ],
        answer:
            "Rooftop Residential Flats provide additional living spaces constructed on suitable existing rooftops. Modular construction can help create efficient layouts while reducing conventional construction time.",
    },

    {
        keywords: [
            "rooftop party lounge",
            "rooftop party lounges",
            "rooftop lounge",
            "rooftop lounges",
        ],
        answer:
            "Rooftop Party Lounges are modular rooftop spaces designed for entertainment, gatherings and recreational use. They can be customized with suitable layouts, finishes and facilities.",
    },

    {
        keywords: [
            "rooftop guest room",
            "rooftop guest rooms",
            "rooftop guest room",
        ],
        answer:
            "Rooftop Guest Rooms provide additional accommodation spaces on suitable rooftops. They can be designed as comfortable modular rooms with appropriate insulation, finishes and facilities.",
    },

    {
        keywords: [
            "rooftop servant room",
            "rooftop servant rooms",
            "servant room",
            "servant rooms",
        ],
        answer:
            "Rooftop Servant Rooms are compact modular accommodation spaces designed for residential properties where additional staff accommodation is required.",
    },


    {
        keywords: [
            "light gauge steel frame",
            "light gauge steel framing",
            "lgsf",
            "lgsf buildings",
            "lgsf building",
        ],
        answer:
            "Light Gauge Steel Frame (LGSF) Buildings use lightweight cold-formed steel framing to create strong and efficient building structures. LGSF construction is suitable for residential, commercial and specialized modular applications.",
    },

    {
        keywords: [
            "lgsf prefab residential houses",
            "lgsf residential houses",
            "lgsf house",
            "lgsf houses",
            "g+1",
            "g+2",
        ],
        answer:
            "LGSF Prefab Residential Houses can be designed for multi-level residential applications such as G+1 and G+2 buildings. The system provides lightweight structural framing with flexible layouts and efficient construction.",
    },

    {
        keywords: [
            "lgsf luxury lounge",
            "lgsf luxury lounges",
            "luxury lgsf lounge",
            "lgsf lounge",
        ],
        answer:
            "LGSF Luxury Lounges combine lightweight steel framing with premium architectural finishes to create comfortable and visually refined spaces for residential, hospitality or recreational applications.",
    },

    {
        keywords: [
            "lgsf showroom",
            "lgsf showrooms",
            "steel frame showroom",
        ],
        answer:
            "LGSF Showrooms provide lightweight and flexible structures for retail and product-display applications. Layouts and finishes can be customized according to branding and functional requirements.",
    },

    {
        keywords: [
            "lgsf prefab sales office",
            "lgsf prefab sales offices",
            "lgsf sales office",
            "prefab sales office",
        ],
        answer:
            "LGSF Prefab Sales Offices are lightweight modular structures designed for sales, customer interaction and project-site requirements. They can be configured with customized layouts and finishes.",
    },

    {
        keywords: [
            "lgsf prefab waiting area",
            "lgsf prefab waiting areas",
            "lgsf waiting area",
            "prefab waiting area",
        ],
        answer:
            "LGSF Prefab Waiting Areas provide lightweight, durable and customizable spaces for customers, visitors and staff. They can be designed for offices, commercial facilities, transport areas and other applications.",
    },


    {
        keywords: [
            "farmhouse",
            "farmhouses",
            "prefab farmhouse",
            "prefab farmhouses",
        ],
        answer:
            "Prefab Farmhouses provide comfortable modular living spaces suitable for agricultural properties, weekend homes and rural developments. Designs can be customized according to the site, lifestyle and functional requirements.",
    },

    {
        keywords: [
            "cottage",
            "cottages",
            "prefab cottage",
            "prefab cottages",
        ],
        answer:
            "Prefab Cottages are modular accommodation or residential structures designed for resorts, farmhouses, holiday properties and rural environments. They can be customized with different layouts, finishes and amenities.",
    },

    {
        keywords: [
            "hvac",
            "hvac solutions",
            "hvac system",
            "hvac systems",
            "heating ventilation air conditioning",
        ],
        answer:
            "L&R HVAC Solutions can support heating, ventilation and air-conditioning requirements for modular, industrial, commercial and specialized buildings. HVAC planning can be coordinated with the building layout, insulation and operational requirements.",
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
            "Hello! 👋 I'm the L&R Green AI Assistant. I can help you understand Pre-Engineered Prefab Solar, PEB structures, containers, industrial buildings, prefab solutions, sandwich panels, rooftop solutions, LGSF buildings, HVAC solutions and project requirements.",
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