"use client";
import { useState, useRef, useEffect } from "react";
//import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent} from "../components/ui/card";

// Define the Quote type
interface Quote {
  text: string;
  author: string;
  topics: string[];
  category: string;
}

// Enhanced array of motivational quotes with categories
const quotes: Quote[] = [
  // Success Quotes
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
    topics: ["success", "failure", "courage"],
    category: "Success"
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Henry David Thoreau",
    topics: ["success", "busy", "focus"],
    category: "Success"
  },
  {
    text: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
    topics: ["success", "great", "pursuit"],
    category: "Success"
  },
  {
    text: "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
    topics: ["success", "failure", "enthusiasm"],
    category: "Success"
  },
  {
    text: "The road to success is always under construction.",
    author: "Lily Tomlin",
    topics: ["success", "road", "construction"],
    category: "Success"
  },
  {
    text: "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
    topics: ["success", "work", "dictionary"],
    category: "Success"
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
    topics: ["success", "happiness", "key"],
    category: "Success"
  },

  // Motivation Quotes
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown",
    topics: ["motivation", "push", "yourself"],
    category: "Motivation"
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
    topics: ["motivation", "goal", "dream"],
    category: "Motivation"
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
    topics: ["time", "life", "motivation"],
    category: "Motivation"
  },
  {
    text: "Hard work beats talent when talent doesn't work hard.",
    author: "Tim Notke",
    topics: ["work", "talent", "hard"],
    category: "Motivation"
  },
  {
    text: "If you're tired, learn to rest, not quit.",
    author: "Banksy",
    topics: ["motivation", "rest", "quit"],
    category: "Motivation"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    topics: ["work", "passion", "success"],
    category: "Motivation"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    topics: ["belief", "confidence", "motivation"],
    category: "Motivation"
  },

  // Life Quotes
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
    topics: ["opportunity", "difficulty", "growth"],
    category: "Life"
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
    topics: ["life", "simple", "complicated"],
    category: "Life"
  },
  {
    text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    author: "Maya Angelou",
    topics: ["life", "moments", "breath"],
    category: "Life"
  },
  {
    text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author: "Buddha",
    topics: ["mindfulness", "present", "moment"],
    category: "Life"
  },
  {
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    topics: ["life", "purpose", "happiness"],
    category: "Life"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    topics: ["life", "busy", "plans"],
    category: "Life"
  },

  // Action Quotes
  {
    text: "An inch of movement will bring you closer to your goals than a mile of intention.",
    author: "Steve Maraboli",
    topics: ["action", "goals", "intention"],
    category: "Action"
  },
  {
    text: "The path to success is to take massive, determined action.",
    author: "Tony Robbins",
    topics: ["action", "success", "massive"],
    category: "Action"
  },
  {
    text: "Well done is better than well said.",
    author: "Benjamin Franklin",
    topics: ["action", "done", "well"],
    category: "Action"
  },
  {
    text: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
    topics: ["action", "success", "foundational"],
    category: "Action"
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    topics: ["future", "predict", "create"],
    category: "Action"
  },

  // Mindfulness Quotes
  {
    text: "Mindfulness is a way of befriending ourselves and our experience.",
    author: "Jon Kabat-Zinn",
    topics: ["mindfulness", "bff", "experience"],
    category: "Mindfulness"
  },
  {
    text: "The present moment is the only time over which we have dominion.",
    author: "Thích Nhất Hạnh",
    topics: ["present", "moment", "dominion"],
    category: "Mindfulness"
  },
  {
    text: "Do every act of your life as though it were the very last act of your life.",
    author: "Marcus Aurelius",
    topics: ["life", "act", "last"],
    category: "Mindfulness"
  },
  {
    text: "Surrender to what is. Let go of what was. Have faith in what will be.",
    author: "Sonia Ricotti",
    topics: ["surrender", "faith", "future"],
    category: "Mindfulness"
  },
  {
    text: "Peace comes from within. Do not seek it without.",
    author: "Buddha",
    topics: ["peace", "within", "without"],
    category: "Mindfulness"
  },

  // Resilience Quotes
  {
    text: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi",
    topics: ["resilience", "knocked down", "get up"],
    category: "Resilience"
  },
  {
    text: "She stood in the storm, and when the wind did not blow her way, she adjusted her sails.",
    author: "Elizabeth Edwards",
    topics: ["resilience", "storm", "adjust"],
    category: "Resilience"
  },
  {
    text: "The oak fought the wind and was broken, the willow bent when it must and survived.",
    author: "Robert Jordan",
    topics: ["resilience", "oak", "willow"],
    category: "Resilience"
  },
  {
    text: "Resilience is knowing that you are the only one that has the power and the responsibility to pick yourself up.",
    author: "Mary Holloway",
    topics: ["resilience", "power", "responsibility"],
    category: "Resilience"
  },
  {
    text: "When we least expect it, life sets us a challenge to test our courage and willingness to change.",
    author: "Paulo Coelho",
    topics: ["life", "challenge", "change"],
    category: "Resilience"
  },

  // Dreams Quotes
  {
    text: "All our dreams can come true, if we have the courage to pursue them.",
    author: "Walt Disney",
    topics: ["dreams", "courage", "pursue"],
    category: "Dreams"
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan",
    topics: ["dreams", "big", "fail"],
    category: "Dreams"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    topics: ["dreams", "future", "belief"],
    category: "Dreams"
  },
  {
    text: "Hold fast to dreams, for if dreams die, life is a broken-winged bird that cannot fly.",
    author: "Langston Hughes",
    topics: ["dreams", "hold fast", "fly"],
    category: "Dreams"
  },
  {
    text: "Dreams don't work unless you do.",
    author: "John C. Maxwell",
    topics: ["dreams", "work", "do"],
    category: "Dreams"
  },

  // Growth Quotes
  {
    text: "Strength and growth come only through continuous effort and struggle.",
    author: "Napoleon Hill",
    topics: ["growth", "strength", "struggle"],
    category: "Growth"
  },
  {
    text: "Be not afraid of growing slowly, be afraid only of standing still.",
    author: "Chinese Proverb",
    topics: ["growth", "slow", "still"],
    category: "Growth"
  },
  {
    text: "Growth is never by mere chance; it is the result of forces working together.",
    author: "James Cash Penney",
    topics: ["growth", "forces", "result"],
    category: "Growth"
  },
  {
    text: "Change is the end result of all true learning.",
    author: "Leo Buscaglia",
    topics: ["change", "learning", "end"],
    category: "Growth"
  },
  {
    text: "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
    topics: ["growth", "destiny", "decide"],
    category: "Growth"
  },

  // Mindset Quotes
  {
    text: "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford",
    topics: ["mindset", "think", "right"],
    category: "Mindset"
  },
  {
    text: "Your mindset determines your reality.",
    author: "Anonymous",
    topics: ["mindset", "reality", "determine"],
    category: "Mindset"
  },
  {
    text: "Great works are performed not by strength but by perseverance.",
    author: "Samuel Johnson",
    topics: ["great", "works", "perseverance"],
    category: "Mindset"
  },
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
    topics: ["mindset", "think", "become"],
    category: "Mindset"
  },
  {
    text: "Attitude is a little thing that makes a big difference.",
    author: "Winston Churchill",
    topics: ["attitude", "little", "big"],
    category: "Mindset"
  },

  // Goals Quotes
  {
    text: "A goal without a plan is just a wish.",
    author: "Antoine de Saint-Exupéry",
    topics: ["goal", "plan", "wish"],
    category: "Goals"
  },
  {
    text: "Setting goals is the first step in turning the invisible into the visible.",
    author: "Tony Robbins",
    topics: ["goals", "turning", "visible"],
    category: "Goals"
  },
  {
    text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar",
    topics: ["goals", "growth", "achievement"],
    category: "Goals"
  },
  {
    text: "Discipline is the bridge between goals and accomplishment.",
    author: "Jim Rohn",
    topics: ["discipline", "goals", "accomplishment"],
    category: "Goals"
  },
  {
    text: "Goals are dreams with deadlines.",
    author: "Diana Scharf",
    topics: ["goals", "dreams", "deadlines"],
    category: "Goals"
  },

  // Persistence Quotes
  {
    text: "Energy and persistence conquer all things.",
    author: "Benjamin Franklin",
    topics: ["energy", "persistence", "conquer"],
    category: "Persistence"
  },
  {
    text: "Success is the sum of small efforts, repeated day in and day out.",
    author: "Robert Collier",
    topics: ["success", "small", "repeated"],
    category: "Persistence"
  },
  {
    text: "Ambition is the path to success. Persistence is the vehicle you arrive in.",
    author: "Bill Bradley",
    topics: ["ambition", "path", "persistence"],
    category: "Persistence"
  },
  {
    text: "Fall seven times, stand up eight.",
    author: "Japanese Proverb",
    topics: ["fall", "stand up", "seven"],
    category: "Persistence"
  },
  {
    text: "The difference between the impossible and the possible lies in determination.",
    author: "Tommy Lasorda",
    topics: ["impossible", "possible", "determination"],
    category: "Persistence"
  },

  // Original quotes for additional categories
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    topics: ["innovation", "leader", "follower"],
    category: "Innovation"
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    topics: ["future", "predict", "invent"],
    category: "Innovation"
  },
  {
    text: "Innovation is the ability to see change as an opportunity, not a threat.",
    author: "Steve Jobs",
    topics: ["innovation", "change", "opportunity"],
    category: "Innovation"
  },
  {
    text: "Leadership is the capacity to translate vision into reality.",
    author: "Warren Bennis",
    topics: ["leadership", "vision", "reality"],
    category: "Leadership"
  },
  {
    text: "The supreme quality for leadership is unquestionably integrity.",
    author: "Dwight D. Eisenhower",
    topics: ["leadership", "integrity", "supreme"],
    category: "Leadership"
  },
  {
    text: "A leader is one who knows the way, goes the way, and shows the way.",
    author: "John C. Maxwell",
    topics: ["leader", "know", "show"],
    category: "Leadership"
  },
  {
    text: "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.",
    author: "Winston Churchill",
    topics: ["courage", "stand up", "speak"],
    category: "Courage"
  },
  {
    text: "Courage is resistance to fear, mastery of fear, not absence of fear.",
    author: "Mark Twain",
    topics: ["courage", "fear", "mastery"],
    category: "Courage"
  },
  {
    text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
    author: "Albert Camus",
    topics: ["deal", "unfree", "rebellion"],
    category: "Courage"
  },
  {
    text: "Wisdom begins in wonder.",
    author: "Socrates",
    topics: ["wisdom", "begins", "wonder"],
    category: "Wisdom"
  },
  {
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    topics: ["wisdom", "knowing", "nothing"],
    category: "Wisdom"
  },
  {
    text: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
    author: "Albert Einstein",
    topics: ["wisdom", "schooling", "attempt"],
    category: "Wisdom"
  },
  {
    text: "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution.",
    author: "Aristotle",
    topics: ["excellence", "intention", "execution"],
    category: "Excellence"
  },
  {
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
    topics: ["excellence", "repeatedly", "habit"],
    category: "Excellence"
  },
  {
    text: "Excellence is the gradual result of always striving to do better.",
    author: "Pat Riley",
    topics: ["excellence", "striving", "better"],
    category: "Excellence"
  },
  {
    text: "Teamwork is the ability to work together toward a common vision.",
    author: "Andrew Carnegie",
    topics: ["teamwork", "vision", "common"],
    category: "Teamwork"
  },
  {
    text: "Alone we can do so little; together we can do so much.",
    author: "Helen Keller",
    topics: ["alone", "together", "little"],
    category: "Teamwork"
  },
  {
    text: "The strength of the team is each individual member. The strength of each member is the team.",
    author: "Phil Jackson",
    topics: ["team", "strength", "individual"],
    category: "Teamwork"
  },
  {
    text: "Change is the law of life. And those who look only to the past or present are certain to miss the future.",
    author: "John F. Kennedy",
    topics: ["change", "law", "future"],
    category: "Change"
  },
  {
    text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
    author: "Alan Watts",
    topics: ["change", "plunge", "dance"],
    category: "Change"
  },
  {
    text: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale",
    topics: ["change", "thoughts", "world"],
    category: "Change"
  },
  {
    text: "Focus is a matter of deciding what things you're not going to do.",
    author: "John Carmack",
    topics: ["focus", "decide", "things"],
    category: "Focus"
  },
  {
    text: "The successful warrior is the average man, with laser-like focus.",
    author: "Bruce Lee",
    topics: ["successful", "warrior", "laser-like"],
    category: "Focus"
  },
  {
    text: "Focus on being productive instead of busy.",
    author: "Tim Ferriss",
    topics: ["focus", "productive", "busy"],
    category: "Focus"
  },
  {
    text: "Passion is energy. Feel the power that comes from focusing on what excites you.",
    author: "Oprah Winfrey",
    topics: ["passion", "energy", "focus"],
    category: "Passion"
  },
  {
    text: "Follow your passion, be prepared to work hard and sacrifice, and, above all, don't let anyone limit your dreams.",
    author: "Donovan Bailey",
    topics: ["passion", "work", "sacrifice"],
    category: "Passion"
  },
  {
    text: "Passion is the genesis of genius.",
    author: "Tony Robbins",
    topics: ["passion", "genius", "genesis"],
    category: "Passion"
  },
  {
    text: "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.",
    author: "Abigail Adams",
    topics: ["learning", "sought", "diligence"],
    category: "Learning"
  },
  {
    text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
    author: "Dr. Seuss",
    topics: ["read", "know", "learn"],
    category: "Learning"
  },
  {
    text: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
    topics: ["education", "powerful", "world"],
    category: "Learning"
  },
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
    topics: ["creativity", "intelligence", "fun"],
    category: "Creativity"
  },
  {
    text: "The creative adult is the child who survived.",
    author: "Ursula K. Le Guin",
    topics: ["creative", "adult", "child"],
    category: "Creativity"
  },
  {
    text: "Creativity is seeing what others see and thinking what no one else ever thought.",
    author: "Albert Einstein",
    topics: ["creativity", "see", "think"],
    category: "Creativity"
  },
  {
    text: "Vision is the art of seeing what is invisible to others.",
    author: "Jonathan Swift",
    topics: ["vision", "art", "invisible"],
    category: "Vision"
  },
  {
    text: "Where there is no vision, the people perish.",
    author: "Proverbs 29:18",
    topics: ["vision", "people", "perish"],
    category: "Vision"
  },
  {
    text: "The vision that you glorify in your mind, the ideal that you enthrone in your heart, this you will build your life by.",
    author: "James Allen",
    topics: ["vision", "glorify", "ideal"],
    category: "Vision"
  },
  {
    text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    author: "Christian D. Larson",
    topics: ["believe", "yourself", "obstacle"],
    category: "Belief"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    topics: ["believe", "can", "halfway"],
    category: "Belief"
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    topics: ["realization", "doubt", "tomorrow"],
    category: "Belief"
  }
];

  const categories = ["All", "Success", "Motivation", "Life", "Action", "Mindfulness", "Resilience", "Dreams", "Growth", "Mindset", "Goals", "Persistence", "Innovation", "Leadership", "Courage", "Wisdom", "Excellence", "Teamwork", "Change", "Focus", "Passion", "Learning", "Creativity", "Vision", "Belief"];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Entrepreneur",
    content: "This quote generator has been my daily source of motivation. The curated collection is incredible!",
    avatar: "👩‍💼"
  },
  {
    name: "Michael Chen",
    role: "Software Developer",
    content: "Perfect for finding the right words when I need inspiration for my projects and presentations.",
    avatar: "👨‍💻"
  },
  {
    name: "Emma Rodriguez",
    role: "Life Coach",
    content: "I use these quotes with my clients. The categorization makes it easy to find relevant inspiration.",
    avatar: "👩‍🏫"
  }
];

const faqs = [
  {
    question: "How many quotes are available?",
    answer: "We have over 70 carefully curated motivational quotes from world-renowned leaders, thinkers, and visionaries across 25 different categories."
  },
  {
    question: "Can I search for specific topics?",
    answer: "Yes! You can search for any topic like 'success', 'motivation', 'dreams', 'resilience', and more. Our smart filtering will find the most relevant quotes."
  },
  {
    question: "Are the quotes from real people?",
    answer: "Absolutely! All quotes are from real historical figures, successful entrepreneurs, philosophers, and inspirational leaders throughout history."
  },
  {
    question: "How often do you add new quotes?",
    answer: "We regularly update our collection with new inspirational quotes to keep the content fresh and relevant for our users."
  }
];

export default function Home() {
  const [topic, setTopic] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // Track the actual search term used
  const [selectedCategory, setSelectedCategory] = useState("");
  const [results, setResults] = useState<Quote[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-animate-id');
            if (elementId) {
              setAnimatedElements(prev => new Set(prev).add(elementId));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with data-animate-id
    const elements = document.querySelectorAll('[data-animate-id]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const isAnimated = (id: string) => animatedElements.has(id);

  // Function to get category-specific emoji
  const getCategoryEmoji = (category: string) => {
    const emojiMap: { [key: string]: string } = {
      'All': '🎲',
      'Success': '🚀',
      'Motivation': '💪',
      'Leadership': '👑',
      'Innovation': '💡',
      'Wisdom': '🧠',
      'Courage': '⚡',
      'Growth': '🌱',
      'Teamwork': '🤝',
      'Excellence': '⭐',
      'Dreams': '✨',
      'Action': '🎯',
      'Belief': '🙏',
      'Change': '🔄',
      'Focus': '🎯',
      'Passion': '❤️',
      'Learning': '📚',
      'Creativity': '🎨',
      'Resilience': '🛡️',
      'Vision': '🔮',
      'Life': '🌍',
      'Mindfulness': '🧘',
      'Mindset': '🧠',
      'Goals': '🎯',
      'Persistence': '🔥'
    };
    return emojiMap[category] || '🎲';
  };

  // Function to get topic-specific emoji
  const getTopicEmoji = (topic: string) => {
    const topicEmojiMap: { [key: string]: string } = {
      'success': '🚀',
      'motivation': '💪',
      'dreams': '✨',
      'work': '💼',
      'life': '🌍',
      'time': '⏰',
      'love': '❤️',
      'happiness': '😊',
      'peace': '🕊️',
      'hope': '🌈',
      'faith': '🙏',
      'courage': '⚡',
      'wisdom': '🧠',
      'knowledge': '📚',
      'creativity': '🎨',
      'innovation': '💡',
      'leadership': '👑',
      'teamwork': '🤝',
      'growth': '🌱',
      'change': '🔄',
      'focus': '🎯',
      'passion': '❤️',
      'resilience': '🛡️',
      'mindfulness': '🧘',
      'mindset': '🧠',
      'goals': '🎯',
      'persistence': '🔥',
      'excellence': '⭐',
      'vision': '🔮',
      'action': '⚡',
      'belief': '🙏',
      'learning': '📚'
    };
    return topicEmojiMap[topic.toLowerCase()] || '💫';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setIsLoading(true);
    setSubmitted(true);
    setSearchTerm(topic.trim()); // Set the search term that was used
    setSelectedCategory(""); // Clear the selected category when performing a new search

    // Simulate API call
    setTimeout(() => {
      let filtered = quotes;
      
      // Filter by topic
      filtered = filtered.filter(q =>
        q.text.toLowerCase().includes(topic.trim().toLowerCase()) ||
        q.author.toLowerCase().includes(topic.trim().toLowerCase()) ||
        q.category.toLowerCase().includes(topic.trim().toLowerCase()) ||
        q.topics.some(t => t.toLowerCase().includes(topic.trim().toLowerCase()))
      );

      // If no matches found, show empty results
      if (filtered.length === 0) {
        setResults([]);
        setIsLoading(false);
        
        // Scroll to results section
        setTimeout(() => {
          resultsRef.current?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
        return;
      }
      
      // Randomly select quotes from filtered results
      const displayQuotes: Quote[] = [];
      const shuffled = [...filtered].sort(() => Math.random() - 0.5); // Shuffle the filtered results
      
      // Take up to 3 random quotes from filtered results
      for (let i = 0; i < Math.min(3, shuffled.length); i++) {
        displayQuotes.push(shuffled[i]);
      }
      
      // If less than 3, fill with random quotes from all quotes (no duplicates)
      if (displayQuotes.length < 3) {
        const others = quotes.filter(q => !displayQuotes.includes(q));
        const shuffledOthers = [...others].sort(() => Math.random() - 0.5);
        const additionalQuotes = [];
        while (additionalQuotes.length < (3 - displayQuotes.length) && shuffledOthers.length > 0) {
          additionalQuotes.push(shuffledOthers.shift()!);
        }
        displayQuotes.push(...additionalQuotes);
      }
      
      setResults(displayQuotes);
      setIsLoading(false);

      // Scroll to results section
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }, 1500);
  };

  function handleCategoryClick(category: string) {
    setSelectedCategory(category);
    setTopic(category); // Set the search box to show the selected category
    setSearchTerm(category); // Set search term to category name
    setSubmitted(true);
    setIsLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      let filtered = quotes;
      
      // Filter by category
      if (category !== "All") {
        filtered = filtered.filter(q => q.category === category);
      }
      
      // Randomly select quotes from filtered results
      const displayQuotes: Quote[] = [];
      const shuffled = [...filtered].sort(() => Math.random() - 0.5); // Shuffle the filtered results
      
      // Take up to 3 random quotes from filtered results
      for (let i = 0; i < Math.min(3, shuffled.length); i++) {
        displayQuotes.push(shuffled[i]);
      }
      
      // If less than 3, fill with random quotes from all quotes (no duplicates)
      if (displayQuotes.length < 3) {
        const others = quotes.filter(q => !displayQuotes.includes(q));
        const shuffledOthers = [...others].sort(() => Math.random() - 0.5);
        const additionalQuotes = [];
        while (additionalQuotes.length < (3 - displayQuotes.length) && shuffledOthers.length > 0) {
          additionalQuotes.push(shuffledOthers.shift()!);
        }
        displayQuotes.push(...additionalQuotes);
      }
      
      setResults(displayQuotes);
      setIsLoading(false);
      
      // Scroll to results section
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }, 800);
  }

  function handleSuggestionClick(suggestion: string) {
    setTopic(suggestion);
    setSearchTerm(suggestion);
    setSubmitted(true);
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      let filtered = quotes;
      
      // Filter by topic
      filtered = filtered.filter(q =>
        q.text.toLowerCase().includes(suggestion.toLowerCase()) ||
        q.author.toLowerCase().includes(suggestion.toLowerCase()) ||
        q.category.toLowerCase().includes(suggestion.toLowerCase()) ||
        q.topics.some(t => t.toLowerCase().includes(suggestion.toLowerCase()))
      );

      // If no matches found, show empty results
      if (filtered.length === 0) {
        setResults([]);
        setIsLoading(false);
        
        // Scroll to results section
        setTimeout(() => {
          resultsRef.current?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
        return;
      }
      
      // Randomly select quotes from filtered results
      const displayQuotes: Quote[] = [];
      const shuffled = [...filtered].sort(() => Math.random() - 0.5); // Shuffle the filtered results
      
      // Take up to 3 random quotes from filtered results
      for (let i = 0; i < Math.min(3, shuffled.length); i++) {
        displayQuotes.push(shuffled[i]);
      }
      
      // If less than 3, fill with random quotes from all quotes (no duplicates)
      if (displayQuotes.length < 3) {
        const others = quotes.filter(q => !displayQuotes.includes(q));
        const shuffledOthers = [...others].sort(() => Math.random() - 0.5);
        const additionalQuotes = [];
        while (additionalQuotes.length < (3 - displayQuotes.length) && shuffledOthers.length > 0) {
          additionalQuotes.push(shuffledOthers.shift()!);
        }
        displayQuotes.push(...additionalQuotes);
      }
      
      setResults(displayQuotes);
      setIsLoading(false);

      // Scroll to results section
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation Bar */}
      <nav className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💬</span>
                <h1 className="text-xl font-bold text-emerald-400">Quote Generator</h1>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                Categories
              </button>
              <button 
                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                FAQ
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Floating Decorative Elements */}
        <div className="absolute top-20 left-10 text-4xl opacity-20 float" style={{ animationDelay: '0s' }}>✨</div>
        <div className="absolute top-40 right-20 text-3xl opacity-30 float" style={{ animationDelay: '2s' }}>✨</div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-25 float" style={{ animationDelay: '4s' }}>🌟</div>
        <div className="absolute bottom-20 right-10 text-3xl opacity-20 float" style={{ animationDelay: '1s' }}>⭐</div>
        <div className="absolute top-1/2 left-5 text-2xl opacity-15 float" style={{ animationDelay: '3s' }}>🔮</div>
        <div className="absolute top-1/3 right-5 text-4xl opacity-25 float" style={{ animationDelay: '5s' }}>🎯</div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                      <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shimmer animate-float-in">
                Inspire Your Day
              </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100 max-w-3xl mx-auto animate-slide-in-up" style={{ animationDelay: '800ms' }}>
              Discover powerful quotes that resonate with your journey. Search for topics like success, motivation, dreams, and more.
            </p>
            
            {/* Search Form */}
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto animate-zoom-in" style={{ animationDelay: '1200ms' }}>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Search for topics (e.g., success, motivation, dreams, work, life)..."
                  className="flex-1 text-lg bg-white/20 backdrop-blur-sm border border-white/40 text-white placeholder-white/95 focus:ring-2 focus:ring-emerald-400 focus:border-transparent rounded-md px-4 py-3"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  size="lg"
                  className="px-8 py-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-emerald-500/25 btn-enhanced"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Finding...
                    </div>
                  ) : (
                    "Get Inspired"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div id="categories" className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 text-emerald-400 ${isAnimated('categories-title') ? 'animate-fade-in' : 'opacity-0'}`} data-animate-id="categories-title">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <Button
                key={category}
                onClick={() => handleCategoryClick(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border-gray-700"
                } ${isAnimated(`category-${index}`) ? 'animate-slide-in-up' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${index * 300}ms` }}
                data-animate-id={`category-${index}`}
              >
                <span className="mr-2">{getCategoryEmoji(category)}</span>
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      {submitted && (
        <div ref={resultsRef} className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in">
                Your Inspirational Quotes
              </h2>
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-3xl">{searchTerm === "All" ? getCategoryEmoji("All") : getTopicEmoji(searchTerm)}</span>
                <p className="text-xl text-gray-300">
                  Discovered {results.length} quotes for &qout;{searchTerm}&qout;
                </p>
              </div>
            </div>
            
            {isLoading ? (
              <div className="flex justify-center">
                <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-8">
                {results.length === 0 ? (
                  <div className="col-span-3 text-center py-12">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                      No quotes found for &qout;{searchTerm}&qout;
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-md mx-auto">
                      Try searching for different keywords like &qout;success&qout;, &qout;motivation&qout;, &qout;dreams&qout;, or browse our categories below.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {[
                        { text: "success", emoji: "🚀" },
                        { text: "motivation", emoji: "💪" },
                        { text: "dreams", emoji: "✨" },
                        { text: "work", emoji: "💼" },
                        { text: "life", emoji: "🌍" },
                        { text: "time", emoji: "⏰" }
                      ].map((suggestion) => (
                        <Button
                          key={suggestion.text}
                          variant="outline"
                          onClick={() => handleSuggestionClick(suggestion.text)}
                          className="text-sm bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 flex items-center gap-2"
                        >
                          <span>{suggestion.emoji}</span>
                          <span>{suggestion.text}</span>
                        </Button>
                      ))}
                    </div>
                    <div className="border-t border-gray-700 pt-6">
                      <p className="text-gray-300 mb-4">Or explore by category:</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {categories.slice(0, 6).map((category) => (
                          <Button
                            key={category}
                            variant="outline"
                            onClick={() => handleCategoryClick(category)}
                            className="text-sm bg-emerald-500/20 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/30 flex items-center gap-2"
                          >
                            <span>{getCategoryEmoji(category)}</span>
                            <span>{category}</span>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  results.map((quote, index) => (
                    <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-gray-700 relative overflow-hidden animate-float-in card-glow" style={{ animationDelay: `${index * 600}ms` }}>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full -mr-10 -mt-10"></div>
                      <CardContent className="p-6 relative z-10">
                        {/* Topic Header */}
                        <div className="mb-4">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{searchTerm === "All" ? getCategoryEmoji("All") : getTopicEmoji(searchTerm)}</span>
                            <div className="text-sm bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full font-medium">
                              {searchTerm}
                            </div>
                          </div>
                        </div>
                        
                        {/* Quote Text */}
                        <p className="text-lg mb-6 text-gray-200 leading-relaxed italic">&qout;{quote.text}&qout;</p>
                        
                        {/* Author */}
                        <div className="flex items-center justify-between">
                          <span className="text-emerald-400 font-semibold">— {quote.author}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400">Category:</span>
                            <span className="text-emerald-500">{searchTerm === "All" ? getCategoryEmoji("All") : getCategoryEmoji(quote.category)}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Statistics Section */}
      <div className="py-16 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <Card className={`bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-emerald-500/30 pulse-glow ${isAnimated('stat-1') ? 'animate-glow-in' : 'opacity-0 scale-90'}`} data-animate-id="stat-1">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-emerald-400 mb-2">70+</div>
                <div className="text-gray-300 font-medium">Curated Quotes</div>
              </CardContent>
            </Card>
            <Card className={`bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-emerald-500/30 pulse-glow ${isAnimated('stat-2') ? 'animate-rotate-in' : 'opacity-0 scale-90'}`} style={{ animationDelay: "500ms" }} data-animate-id="stat-2">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-emerald-400 mb-2">25</div>
                <div className="text-gray-300 font-medium">Categories</div>
              </CardContent>
            </Card>
            <Card className={`bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-emerald-500/30 pulse-glow ${isAnimated('stat-3') ? 'animate-zoom-in' : 'opacity-0 scale-90'}`} style={{ animationDelay: "800ms" }} data-animate-id="stat-3">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
                <div className="text-gray-300 font-medium">Available</div>
              </CardContent>
            </Card>
            <Card className={`bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-emerald-500/30 pulse-glow ${isAnimated('stat-4') ? 'animate-bounce-in' : 'opacity-0 scale-90'}`} style={{ animationDelay: "1100ms" }} data-animate-id="stat-4">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
                <div className="text-gray-300 font-medium">Free Access</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 text-emerald-400 ${isAnimated('testimonials-title') ? 'animate-slide-in-down' : 'opacity-0'}`} data-animate-id="testimonials-title">What People Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className={`bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg border-gray-700 hover-lift card-glow ${isAnimated(`testimonial-${index}`) ? 'animate-float-in' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: `${index * 500}ms` }} data-animate-id={`testimonial-${index}`}>
                <CardContent className="p-6">
                  <div className="text-3xl mb-4">{testimonial.avatar}</div>
                  <p className="text-gray-300 mb-4 italic">&qout;{testimonial.content}&qout;</p>
                  <div>
                    <div className="font-semibold text-emerald-400">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="py-16 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 text-emerald-400 ${isAnimated('faq-title') ? 'animate-slide-in-down' : 'opacity-0'}`} data-animate-id="faq-title">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className={`bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover-lift card-glow ${isAnimated(`faq-${index}`) ? 'animate-rotate-in' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: `${index * 400}ms` }} data-animate-id={`faq-${index}`}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-emerald-400 mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold mb-6 text-white ${isAnimated('cta-title') ? 'animate-glow-in' : 'opacity-0'}`} data-animate-id="cta-title">Ready to Get Inspired?</h2>
          <p className={`text-xl mb-8 text-emerald-100 ${isAnimated('cta-description') ? 'animate-slide-in-up' : 'opacity-0'}`} style={{ animationDelay: '800ms' }} data-animate-id="cta-description">
            Start your journey of motivation and success today. Find the perfect quote for every moment.
          </p>
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            size="lg"
            className={`px-8 py-6 bg-white text-emerald-600 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/25 btn-enhanced ${isAnimated('cta-button') ? 'animate-bounce-in' : 'opacity-0 scale-75'}`} style={{ animationDelay: '1200ms' }} data-animate-id="cta-button"
          >
            Get Started Now
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Quote Generator. Made with ❤️ to inspire and motivate.
          </p>
        </div>
      </footer>
    </div>
  );
}

