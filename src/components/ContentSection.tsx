import { motion } from "motion/react";
import { Book, Video, FileText, Music, MessageCircle, Youtube } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { Articles } from "./Articles";

interface ContentSectionProps {
  section: string;
  onNavigate?: (section: string) => void;
}

const wisdomQuotes = [
  {
    quote: "Hinduism is not merely a religion, but a way of life — a universal philosophy that harmonizes diversity, intellect, and devotion.",
    author: "Dr. Aravinda Rao Karanam"
  },
  {
    quote: "True understanding arises when wisdom and action flow together.",
    author: "Dr. Aravinda Rao Karanam"
  },
  {
    quote: "Dharma is not a set of rituals or beliefs, but the eternal law that upholds the universe and guides righteous living.",
    author: "Dr. Aravinda Rao Karanam"
  }
];

const bhagavadGitaSlokas = [
  {
    sanskrit: "य एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम्।\nउभौ तौ न विजानीतो नायं हन्ति न हन्यते ॥ २-१९॥",
    transliteration: "ya enam vetti hantārām yaścainaṁ manyate hatam,\nubhau tau na vijānīto nāyaṁ hanti na hanyate .. 2-19..",
    translation: "One who considers this jiva as the slayer and one who considers it as slain are both incorrect. This jiva neither kills nor gets killed.",
    explanation: "The essential nature of jiva is consciousness which is eternal. The body may get killed but consciousness never ceases to exist.",
    source: "The Bhagavad Gita for A Modern Student by Dr. Aravinda Rao Karanam"
  },
  // {
  //   sanskrit: "मयि सर्वाणि कर्माणि संन्यस्याध्यात्मचेतसा।\nनिर्शीरनिर्ममो भूत्वा युध्यस्व विगतज्वः : ॥ ३-३० ॥",
  //   transliteration: "māyi sarvāṇi karmāṇi samnyasyādhyātma-cetasā\nnirāśīr-nirmamo bhūtvā yudhyasva vigata-jvaraḥ .. 3-30..",
  //   translation: "Do your fight, surrendering all actions to me (performing ethical duties as ordained), with your attention on the nature of Self, with no expectation or attachment, and without feverishness (anxiety).",
  //   source: "The Bhagavad Gita for A Modern Student by Dr. Aravinda Rao Karanam"
  // },
  {
    sanskrit: "न कर्मणामनारम्भान्नैष्कर्म्यं पुरुषोऽश्नुते।\nन च संन्यासनादेव सिद्धिं समधिगच्छति ॥ ३-४ ॥",
    transliteration: "na karmaṇāṁ-anārambhān-naiṣkarmyaṁ puruṣo'śnute .\nna ca samnyāsanād-eva siddhiṁ sam-adhigacchati .. 3-4..",
    translation: "A person would not attain an actionless state by merely abandoning duty. He would not attain fulfillment by renouncing work.",
    source: "The Bhagavad Gita for A Modern Student by Dr. Aravinda Rao Karanam"
  },
  // {
  //   sanskrit: "कर्मजं बुद्धियुक्ता हि फलं त्यक्त्वा मनीषिणः।\nजन्मबन्धविनिर्मुक्ताः पदं गच्छन्त्यानामयम् ॥ २-५१ ॥",
  //   transliteration: "karmajaṁ buddhi-yuktā hi phalaṁ tyaktvā maniṣiṇaḥ .\njanma-bandha-vinirmuktāḥ padaṁ gacchanty-anāmayam .. 2-51..",
  //   translation: "Wise men, possessing evenness of mind, having given up the fruit of karma, get freed from the bond of birth (and death) and attain the state which is beyond sorrow.",
  //   source: "The Bhagavad Gita for A Modern Student by Dr. Aravinda Rao Karanam"
  // },
  {
    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ॥ ६-५ ॥",
    transliteration: "uddhared-ātmanātmānaṁ nātmānam-avasādayet .\nātmaiva hyātmano bandhur-ātmaiva ripur-ātmanaḥ .. 6-5..",
    translation: "One should uplift oneself by one's own self and one should not weaken the self. It is because, the self is the friend of the self and the self is the enemy of oneself.",
    source: "The Bhagavad Gita for A Modern Student by Dr. Aravinda Rao Karanam"
  },
  {
    sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।\nस्वभाव-नियतं कर्म कुर्वन्नाप्नोति किल्बिषम् ॥ १८-४७ ॥",
    transliteration: "śreyān-svadharmo viguṇaḥ para-dharmāt-svanuṣṭhitāt .\nsvabhāva-niyataṁ karma kurvann-āpnoti kilbiṣam .. 18-47..",
    translation: "One's own dharma, though devoid of excellence, is better for a person than someone else's dharma well observed. A person does not attain sin by performing karma (duty) determined by his nature.",
    source: "The Bhagavad Gita for A Modern Student by Dr. Aravinda Rao Karanam"
  },
  {
    sanskrit: "विषया विनिवर्तन्ते निराहारस्य देहिनः।\nरसवर्जं रसोऽप्यस्य परं दृष्ट्वा निवर्तते ॥ २-५९ ॥",
    transliteration: "viṣayā vinivartante nirāhārasya dehinaḥ .\nrasa-varjaṁ raso'pyasya paraṁ dṛṣṭvā nivartate .. 2-59..",
    translation: "Sense objects withdraw when the person withdraws from them but the desire for them lingers. Such desire too retreats when the Supreme Truth is realized.",
    source: "The Bhagavad Gita for A Modern Student by Dr. Aravinda Rao Karanam"
  }
];

const booksByDrRao = [
  {
    title: "మన పిల్లలకు హిందూమతం చెప్పడం ఎలా?: Mana Pillalaku Hindumatam Cheppadam Ela?",
    author: "Dr. Aravinda Rao Karanam",
    description: "Telugu guide for parents on teaching Hinduism to children.",
    imageUrl: "https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books-2019-003/bae421.webp"
  },
  {
    title: "పురోహిత ప్రపంచం: Purohita Prapancham",
    author: "Dr. Aravinda Rao Karanam",
    description: "Telugu edition exploring the world of priesthood.",
    imageUrl: "https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books-2019-003/bae423.webp"
  },
  {
    title: "భగవద్గీత మనకేం చెబుతోంది?: Bhagavadgita Manakem Chebutoondi?",
    author: "Dr. Aravinda Rao Karanam",
    description: "Telugu exploration of the Bhagavad Gita's teachings.",
    imageUrl: "https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books-2019-003/bae294.webp"
  },
  {
    title: "ఆదిత్య హృదయమ్: Aaditya Hridayam",
    author: "Dr. Aravinda Rao Karanam",
    description: "Telugu edition of the Aditya Hridayam.",
    imageUrl: "https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books-2019-003/bae424.webp"
  },
  {
    title: "A Guide To Bhagavad Gita",
    author: "Dr. Aravinda Rao Karanam",
    description: "English guide to the Bhagavad Gita.",
    imageUrl: "https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books-2019-003/bae310.webp"
  },
  {
    title: "सन्ध्यावन्दनम् (Sandhya-Vandanam): A Vedic Meditation on the Supreme Reality",
    author: "Dr. Aravinda Rao Karanam",
    description: "Sanskrit and English edition of Sandhya-Vandanam.",
    imageUrl: "https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books-2019-003/bae292.webp"
  },
  {
    title: "Indic Religions – Challenges for Survival",
    author: "Dr. Aravinda Rao Karanam",
    description: "English analysis of challenges facing Indic religions.",
    imageUrl: "https://cdn.exoticindia.com/images/products/thumbnails/t400x300/book-01-2025/hbf279.webp"
  },
  {
    title: "How To Teach Hinduism To Your Child?",
    author: "Dr. Aravinda Rao Karanam",
    description: "English guide for teaching Hinduism to children.",
    imageUrl: "https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books-2019-003/bae309.webp"
  },
  {
    title: "The Bhagavad Gita for A Modern Student",
    author: "Dr. Aravinda Rao Karanam",
    description: "English commentary on the Bhagavad Gita for modern readers.",
    imageUrl: "https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books-2019-003/bae314.webp"
  }
];

const sectionContent: Record<
  string,
  {
    title: string;
    description: string;
    icon?: React.ReactNode;
    showImage?: boolean;
    imageUrl?: string;
    quote?: { quote: string; author: string };
  }
> = {
  home: {
    title: "Welcome to Hindu Digest",
    description:
      "Hindu Digest is a sacred platform dedicated to preserving and sharing the profound teachings of Sanatana Dharma (Hinduism). Through insightful talks, articles, and discussions, Hindu Digest bridges timeless wisdom with modern life — guided by Dr. Aravinda Rao Karanam. Our content focuses on Advaita Vedanta, the Upanishads, the Bhagavad Gita, and living dharma today.",
    quote: wisdomQuotes[0]
  },
  "dr-aravinda-rao": {
    title: "Dr. Aravinda Rao Karanam",
    description:
      "Dr. Aravinda Rao Karanam is a retired Director General of Police (DGP) of united Andhra Pradesh, an author and a leading speaker on Sanatana Dharma and Advaita Vedanta. He holds a Ph.D. in Sanskrit and has authored numerous books on Vedanta, Hinduism, and Indic religions.",
    showImage: true,
    imageUrl: "/images/Dr. Aravinda Rao Karanam.jpg",
    quote: wisdomQuotes[1]
  },
  "about-hindu-digest": {
    title: "About Hindu Digest",
    description:
      "Hindu Digest is a sacred platform dedicated to preserving and sharing the profound teachings of Sanatana Dharma (Hinduism). Through insightful talks, articles, and discussions, Hindu Digest bridges timeless wisdom with modern life — guided by Dr. Aravinda Rao Karanam. Our content focuses on Advaita Vedanta, the Upanishads, the Bhagavad Gita, and living dharma today.",
    showImage: true,
    imageUrl: "/images/temple.jpg",
    quote: wisdomQuotes[2]
  },
  "hindu-digest": {
    title: "Hindu Digest",
    description:
      "Hindu Digest serves as your gateway to understanding Sanatana Dharma in depth. We offer systematic study of sacred texts, video lectures, written articles, and community discussions. Our mission is to make the profound wisdom of Hindu philosophy accessible and applicable to contemporary life, while maintaining authenticity and scholarly rigor.",
    showImage: true,
    imageUrl: "/images/deity.jpg"
  },
  "articles-main": {
    title: "Articles on Hindu Philosophy",
    description: "Explore our comprehensive collection of articles on Sanatana Dharma.",
    icon: <FileText className="w-16 h-16 text-black" />,
  },
  // "writings-dr-rao": {
  //   title: "Writings by Dr. Aravinda Rao Karanam",
  //   description: "Read profound insights from Dr. Aravinda Rao Karanam on Vedanta and Hindu philosophy.",
  //   icon: <FileText className="w-16 h-16 text-black" />,
  // },
  "teachings": {
    title: "Teachings & Wisdom Quotes",
    description:
      "These carefully selected quotes from Dr. Aravinda Rao Karanam's teachings offer concentrated wisdom on Dharma, Karma, Bhakti, and the path to self-realization. Each quote invites deep contemplation and can serve as a guide for righteous living.",
    showImage: true,
    imageUrl: "/images/wisdom.jpg"
  },
  "community-articles": {
    title: "Community Articles",
    description:
      "Read personal reflections and insights from students and practitioners of Hindu philosophy. These submissions reflect individual journeys of spiritual growth and offer diverse perspectives on applying Vedantic principles and Dharmic values in daily life.",
    icon: <FileText className="w-16 h-16 text-black" />,
  },
  "talks-interviews": {
    title: "Talks & Interviews",
    description:
      "Listen to penetrating dialogues where Dr. Aravinda Rao Karanam responds to fundamental questions about existence, consciousness, and reality. These conversations reveal the spontaneous wisdom that flows when understanding is present, covering topics from the nature of enlightenment to practical questions about daily living, including his notable speech on raising Hindu children in the USA.",
    showImage: true,
    imageUrl: "/images/meditation.jpg"
  },
  "videos": {
    title: "Videos & YouTube Channel",
    description:
      "Explore our extensive collection of video lectures on Hindu philosophy, Vedanta, and Advaita. Dr. Aravinda Rao Karanam's teachings on the Bhagavad Gita, Upanishads, and other sacred texts are available on our YouTube channel. Subscribe to stay updated with new releases and access his lecture series on various themes including 'Basic Course on Hinduism' and 'Advaita Concepts'.",
    icon: <Youtube className="w-16 h-16 text-red-600" />,
    showImage: true,
    imageUrl: "/images/spiritual.jpg"
  },
  "media-clips": {
    title: "Media Clips",
    description:
      "Watch short excerpts from Dr. Aravinda Rao Karanam's lectures and discourses. These clips capture key teachings on various topics including Karma Yoga, Bhakti, Dharma, and the nature of the Self, as well as his insights on raising Hindu children in modern contexts.",
    icon: <Video className="w-16 h-16 text-black" />,
  },
  "bhakti-music": {
    title: "Bhakti Music",
    description:
      "Experience the transformative power of devotional music and sacred chants. Our collection includes traditional bhajans, kirtans, and contemplative pieces that create an atmosphere conducive to spiritual practice and inner stillness.",
    icon: <Music className="w-16 h-16 text-black" />,
    showImage: true,
    imageUrl: "/images/music.jpg"
  },
  "shop": {
    title: "Shop",
    description:
      "Support Hindu Digest's mission while enriching your spiritual library. Our shop features books, audio lectures, and video courses by Dr. Aravinda Rao Karanam covering various aspects of Hindu philosophy, Vedanta, Sanskrit, and spiritual practice.",
  },
  "books": {
    title: "Books by Dr. Aravinda Rao Karanam",
    description:
      "Discover comprehensive books on Vedanta, Advaita philosophy, and Hindu thought authored by Dr. Aravinda Rao Karanam. His works include guides for parents, commentaries on the Bhagavad Gita, analyses of Indic religions, and explorations of Hindu philosophy in multiple languages including English, Telugu, Kannada, and Sanskrit.",
    icon: <Book className="w-16 h-16 text-black" />,
    showImage: true,
    imageUrl: "/images/books.jpg"
  },
  "audio": {
    title: "Audio Lectures",
    description:
      "Listen to Dr. Aravinda Rao Karanam's recorded lectures on various aspects of Hindu philosophy and Vedanta. Available in CD and MP3 formats. Our audio collection includes systematic studies of key texts, topical discussions, and guided contemplations.",
    icon: <Music className="w-16 h-16 text-black" />,
  },
  "video": {
    title: "Video Collection",
    description:
      "Experience the complete atmosphere of Dr. Aravinda Rao Karanam's teachings through our video collection. Available in DVD and streaming formats. These comprehensive courses cover the Bhagavad Gita, major Upanishads, and fundamental concepts of Vedanta.",
    icon: <Video className="w-16 h-16 text-black" />,
  },
  "qa": {
    title: "Q&A",
    description:
      "Explore our extensive archive of questions on Hindu philosophy and Dr. Aravinda Rao Karanam's responses. Topics cover everything from basic concepts of Dharma to advanced Vedantic philosophy. Submit your own questions for consideration.",
    icon: <MessageCircle className="w-16 h-16 text-black" />,
  },
  "contact": {
    title: "Contact Hindu Digest",
    description: "We welcome your inquiries about our teachings, programs, and resources.",
  },
  "basket": {
    title: "Shopping Basket",
    description:
      "Your basket is currently empty. Browse our shop to discover books, audio lectures, and video courses that will deepen your understanding of Hindu philosophy and Vedanta.",
  },
};

export function ContentSection({ section, onNavigate }: ContentSectionProps) {
  const content = sectionContent[section] || sectionContent.home;

  // Special handling for Dr. Aravinda Rao Karanam profile page
  if (section === "dr-aravinda-rao") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 px-4 md:px-8 relative"
      >
        <div className="max-w-5xl mx-auto">
          {/* Header with portrait */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative w-40 h-40 mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white flex items-center justify-center">
                <img
                  src="/images/dr-aravinda-rao.jpg"
                  alt="Dr. Aravinda Rao Karanam"
                  className="w-full h-full object-contain bg-white"
                />
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <h1 className="text-4xl text-black">Dr. Aravinda Rao Karanam</h1>
              <p className="text-xl text-black">
                Dr. Aravinda Rao Karanam is a retired Director General of Police (DGP) of united Andhra Pradesh,
                an author and a leading speaker on Sanatana Dharma and Advaita Vedanta. He holds a Ph.D. in Sanskrit
                and has authored 12 books on Vedanta, Hinduism, and Indic religions in multiple languages.
              </p>
            </div>
          </div>

          {/* Content sections */}
          <div className="space-y-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-orange-300/50 shadow-xl p-8">
              <h2 className="text-2xl text-amber-900 mb-4">Career in Indian Police Service (IPS)</h2>
              <ul className="space-y-2 text-amber-800 list-disc list-inside">
                <li>Served 34 years in the IPS (1977–2011)</li>
                <li>Key roles: Director-General of Police; Superintendent of Police in five districts; Commissioner of Police, Vijayawada; Inspector General of Greyhounds; Additional Director General of State Intelligence</li>
                <li>Honors: Indian Police Medal and the President's Medal for Distinguished Service</li>
                <li>Noted for experience in counter-terrorism and anti-Naxal operations</li>
                <li>Recognized as an Anti-Naxal expert who combined operational efficiency with humane administration</li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-orange-300/50 shadow-xl p-8">
              <h2 className="text-2xl text-amber-900 mb-4">Philosophical & Academic Pursuits</h2>
              <ul className="space-y-2 text-amber-800 list-disc list-inside">
                <li>Holds a Ph.D. in Sanskrit; author of Analysis of Jnanam in the Upanishads</li>
                <li>Studied Vedanta under Padma Shri Pullela Ramachandrudu and Shri Tattvavidananda Swamiji of Arsha Vidya Gurukulam</li>
                <li>Focus: weaving ancient wisdom (Upanishads, Bhagavad Gita, Brahma Sutras, Shankara Bhashyas) into practical modern guidance</li>
                <li>Integrates intellectual depth with modern intellectual clarity in talks and writings</li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-orange-300/50 shadow-xl p-8">
              <h2 className="text-2xl text-amber-900 mb-4">Publications & Selected Works</h2>
              <p className="text-amber-800 mb-4">Dr. Aravinda Rao Karanam has authored 12 books in English, Telugu, Kannada, and Sanskrit:</p>
              <ul className="space-y-2 text-amber-800 list-disc list-inside">
                <li><em>How to Teach Hinduism to Your Child?</em> (English & Telugu editions)</li>
                <li><em>The Bhagavad Gita for a Modern Student</em> (English)</li>
                <li><em>Indic Religions: Challenges for Survival</em> (English)</li>
                <li><em>Bhagawadgeetha Manakem Cheputhondi?</em> (Telugu)</li>
                <li><em>Analysis of Jnanam in the Upanishads</em> (Sanskrit, Ph.D. dissertation)</li>
                <li><em>Mana Pillalaku Hindhu Matham Cheppadam Ela?</em> (Telugu)</li>
                <li><em>Nimma Maguvige Hindutvavannu Kalisuvudu Hege?</em> (Kannada)</li>
                <li><em>Nitya Jeevitamlo Bhagavad Geetha</em> (Telugu)</li>
                <li><em>Bharatiya Mataalu – Desha Bhadrata Edurkontunna Savallu</em> (Telugu)</li>
                <li><em>Organized Networks of Carbon Nanotubes</em> (English, co-authored scientific work)</li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-orange-300/50 shadow-xl p-8">
              <h2 className="text-2xl text-amber-900 mb-4">Online & Public Presence</h2>
              <p className="text-amber-800 mb-4">
                Educator at <a href="https://www.sanskritfromhome.org/teacher-profile/Dr.-Karanam-Aravinda-Rao-89166656" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">sanskritfromhome.org</a> and contributor to <a href="https://www.indica.today/author/k-aravinda-rao/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Indica Today</a>.
              </p>
              <p className="text-amber-800 mb-4">
                Active content creator on the <a href="https://youtube.com/@hindu-digest" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">Hindu Digest YouTube channel</a> with lecture series including "Basic Course on Hinduism", "Understanding Hinduism", and "Advaita Concepts".
              </p>
              <p className="text-amber-800 mb-4">
                Delivered notable speech: "How to Raise and Protect Our Precious Hindu Children in USA" at Karya Siddhi Hanuman Temple, Frisco, Texas (June 9, 2024).
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://youtube.com/@hindu-digest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-lg flex items-center gap-2"
                >
                  <Youtube className="w-5 h-5" />
                  YouTube Channel
                </a>
                <a
                  href="https://www.sanskritfromhome.org/teacher-profile/Dr.-Karanam-Aravinda-Rao-89166656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-lg"
                >
                  SanskritFromHome.org
                </a>
                <a
                  href="https://www.indica.today/author/k-aravinda-rao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Indica Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Special handling for videos section with YouTube embeds
  if (section === "videos") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 px-4 md:px-8 relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Youtube className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              Videos & YouTube Channel
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
            <p className="text-xl text-black max-w-3xl mx-auto">
              {content.description}
            </p>
          </div>

          {/* Featured Videos Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { id: "L6EbWtNFbQM", title: "Featured Lecture 1" },
              { id: "I_4WjACYCgo", title: "Featured Lecture 2" },
              { id: "KqaL2eUyyNY", title: "Featured Lecture 3" },
              { id: "Kqx45dlUUdg", title: "Featured Lecture 4" },
            ].map((video) => (
              <div key={video.id} className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] transition-all duration-500 hover:bg-white/20">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4">
                  <a
                    href={`https://youtu.be/${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 transition-colors"
                  >
                    Watch on YouTube →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Channel CTA */}
          <div className="text-center bg-gradient-to-r from-orange-100/80 to-amber-100/80 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl text-amber-900 mb-4">Subscribe to Hindu Digest</h3>
            <p className="text-amber-800 mb-6">
              Stay updated with new lectures, teachings, and discussions on Sanatana Dharma
            </p>
            <a
              href="https://youtube.com/@hindu-digest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-lg"
            >
              <Youtube className="w-6 h-6" />
              Visit YouTube Channel
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  // Special handling for articles sections
  if (section === "articles-main" || section === "writings-dr-rao") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 px-4 md:px-8 relative"
      >
        <Articles />
      </motion.div>
    );
  }

  // Special handling for contact section
  if (section === "contact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 px-4 md:px-8 relative"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <MessageCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl text-amber-900 mb-4">
              Q&A & Contact Us
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
            <p className="text-lg text-amber-800 max-w-2xl mx-auto mb-8">
              Explore our extensive archive of questions on Hindu philosophy and Dr. Aravinda Rao Karanam's responses. 
              We also welcome your inquiries about our teachings, programs, and resources.
            </p>
          </div>
          <ContactForm />
        </div>
      </motion.div>
    );
  }

  // Special handling for About Hindu Digest
  if (section === "about-hindu-digest") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 px-4 md:px-8 relative"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl text-black mb-6">About Hindu Digest</h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-8" />
          </div>

          <div className="space-y-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-orange-300/50 shadow-xl p-8">
              <h2 className="text-2xl text-black mb-4">Overview</h2>
              <p className="text-black mb-4">
                Dr. Aravinda Rao Karanam is a retired Director General of Police (DGP) of Andhra Pradesh, scholar of Sanskrit and Vedanta.
              </p>
              <p className="text-black mb-4">
                He delivers video series on YouTube under themes like: "Basic Course on Hinduism",
                "Understanding Hinduism", "Advaita Concepts", and has authored 12 books on Hindu philosophy.
              </p>
              <p className="text-black">
                Hindu Digest serves as a platform for his teachings, bridging timeless wisdom with modern life through articles, talks, and discussions on Advaita Vedanta, the Upanishads, and the Bhagavad Gita.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-orange-300/50 shadow-xl p-8">
              <h2 className="text-2xl text-black mb-4">Mission & Vision</h2>
              <p className="text-black mb-4">
                Hindu Digest aims to spread the light of Sanatana Dharma worldwide through the teachings of
                Dr. Aravinda Rao Karanam. The mission is to make Hindu philosophy accessible to modern audiences,
                especially the younger generation.
              </p>
              <p className="text-black mb-4">
                Key focus areas include:
              </p>
              <ul className="space-y-2 text-black list-disc list-inside">
                <li>Education on Hindu philosophy and Vedanta through Dr. Rao's books and lectures</li>
                <li>Preservation of cultural heritage and temple protection</li>
                <li>Guidance for Hindu families and children, including raising children abroad</li>
                <li>Bridging ancient wisdom with contemporary life through practical teachings</li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-orange-300/50 shadow-xl p-8">
              <h2 className="text-2xl text-black mb-4">What "Hindu Digest" Means</h2>
              <p className="text-black mb-4">
                Hindu Digest refers to digest-style summarized content about Hindu philosophy, practice, heritage, and culture as presented by Dr. Aravinda Rao Karanam.
              </p>
              <p className="text-black mb-4">
                The platform features articles on temple protection, Hindu children's education abroad, cultural preservation, and spiritual teachings.
              </p>
              <p className="text-black">
                Through his YouTube talks and writings, Dr. Rao provides accessible overviews of Hinduism, covering themes from basic concepts to advanced Vedantic philosophy.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-orange-300/50 shadow-xl p-8">
              <h2 className="text-2xl text-black mb-4">Key Themes & Topics</h2>
              <ul className="space-y-3 text-amber-800">
                <li className="flex gap-3">
                  <span className="text-orange-500">•</span>
                  <span>Presentation of Hindu philosophy (especially Vedanta / Non-duality) in accessible terms.
                  E.g., "Advaita Concepts – 01" talk.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500">•</span>
                  <span>Cultural and social dimensions of Hinduism: e.g., his talk "Towards a Positive Semantics of Brahminism".</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500">•</span>
                  <span>Heritage, temple protection and diaspora issues: e.g., talk on "How to Raise and Protect our
                  Precious Hindu Children in USA".</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-orange-300/50 shadow-xl p-8">
              <h2 className="text-2xl text-black mb-4">Why This is Useful</h2>
              <ul className="space-y-3 text-amber-800">
                <li className="flex gap-3">
                  <span className="text-orange-500">•</span>
                  <span>If you want a digest (that is: overview, accessible summary) of Hindu tradition rather than
                  deeply academic trench-work, his content is well suited.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500">•</span>
                  <span>It bridges philosophy + cultural application, so it's useful for someone who wants the "big picture"
                  of Hinduism: belief systems, living practices, heritage issues.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500">•</span>
                  <span>The fact that it draws from someone with both scholarly background and public-service
                  (retired DGP) gives a practical flavour.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-3xl border-2 border-orange-300/50 shadow-xl p-8">
              <h2 className="text-2xl text-black mb-4">How to Use it Effectively</h2>
              <ul className="space-y-3 text-amber-800">
                <li className="flex gap-3">
                  <span className="text-orange-500">•</span>
                  <span>Start with the playlist labelled "Basic Course on Hinduism" to get foundational material.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500">•</span>
                  <span>As you watch/listen, note down unfamiliar Sanskrit terms or concepts (e.g., "Advaita", "Brahman",
                  "Atman") and keep a glossary.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500">•</span>
                  <span>Supplement the videos with the "Hindu Digest" articles on SaveTemples.org to see how the philosophy
                  applies in heritage / social contexts.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-500">•</span>
                  <span>For deeper study: after the overview talks, you could dive into specific series (like the Gita talks,
                  or more advanced Vedanta) if you wish.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-100/80 to-amber-100/80 rounded-2xl p-8 shadow-lg text-center">
              <h3 className="text-2xl text-black mb-4">Featured Introduction Video</h3>
              <div className="aspect-video max-w-3xl mx-auto bg-white/60 rounded-xl overflow-hidden shadow-lg border-2 border-orange-300/50">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Q3tNA7Kjn1s"
                  title="Introduction to Hindu Digest"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="mt-6">
                <a
                  href="https://www.youtube.com/watch?v=Q3tNA7Kjn1s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-lg"
                >
                  <Youtube className="w-5 h-5" />
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Special handling for Writings by Dr. Aravinda Rao Karanam
  if (section === "writings-dr-rao") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 px-4 md:px-8 relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Book className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              Books by Dr. Aravinda Rao Karanam
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
            <p className="text-xl text-black max-w-3xl mx-auto">
              Explore comprehensive works on Vedanta, Advaita philosophy, and Hindu thought by Dr. Aravinda Rao Karanam
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {booksByDrRao.map((book, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-orange-300/50 hover:border-orange-500 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={book.imageUrl}
                    alt={book.title}
                    className="w-16 h-20 object-cover rounded-md flex-shrink-0"
                  />
                  <h3 className="text-xl text-black">{book.title}</h3>
                </div>
                <p className="text-sm text-orange-600 mb-3">by {book.author}</p>
                <p className="text-black leading-relaxed">{book.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-to-r from-orange-100/80 to-amber-100/80 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl text-black mb-4">Get These Books</h3>
            <p className="text-black mb-6">
              Visit our shop to purchase these insightful works and deepen your understanding of Sanatana Dharma
            </p>
            <button
              onClick={() => onNavigate?.("shop")}
              className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-lg"
            >
              Visit Shop
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  // Special handling for Books section in Shop
  if (section === "books") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 px-4 md:px-8 relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Book className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              Books by Dr. Aravinda Rao Karanam
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
            <p className="text-xl text-black max-w-3xl mx-auto">
              Discover comprehensive books on Vedanta, Advaita philosophy, and Hindu thought.
              Available in English and Telugu.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {booksByDrRao.map((book, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border-2 border-orange-300/50 hover:border-orange-500 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={book.imageUrl}
                    alt={book.title}
                    className="w-16 h-20 object-cover rounded-md flex-shrink-0"
                  />
                  <h3 className="text-xl text-black">{book.title}</h3>
                </div>
                <p className="text-sm text-orange-600 mb-3">by {book.author}</p>
                <p className="text-black leading-relaxed mb-4">{book.description}</p>
                <button
                  onClick={() => onNavigate?.("basket")}
                  className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow"
                >
                  Add to Basket
                </button>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  // Special handling for Talks & Interviews
  if (section === "talks-interviews") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 px-4 md:px-8 relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Youtube className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              Talks & Interviews
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
            <p className="text-xl text-black max-w-3xl mx-auto">
              {content.description}
            </p>
          </div>

          {/* Featured Interview */}
          <div className="mb-12 bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border-2 border-orange-300/50">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Q3tNA7Kjn1s"
                title="Interview with Dr. Aravinda Rao Karanam"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-2xl text-black mb-3">Featured Interview</h3>
              <p className="text-black mb-4">
                Watch Dr. Aravinda Rao Karanam discuss the fundamentals of Hinduism and Vedanta philosophy
              </p>
              <a
                href="https://www.youtube.com/watch?v=Q3tNA7Kjn1s"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
              >
                <Youtube className="w-5 h-5" />
                Watch on YouTube →
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-orange-100/80 to-amber-100/80 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl text-black mb-4">Explore More Talks</h3>
            <p className="text-black mb-6">
              Visit our YouTube channel for a complete collection of talks, interviews, and discussions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onNavigate?.("videos")}
                className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-lg"
              >
                Explore More
              </button>
              <a
                href="https://youtube.com/@hindu-digest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-lg"
              >
                <Youtube className="w-6 h-6" />
                Visit YouTube Channel
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Wisdom quotes/teachings section with special layout
  if (section === "teachings") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16 px-4 md:px-8 relative"
      >
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              Teachings from the Bhagavad Gita
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
            <p className="text-lg text-black max-w-3xl mx-auto">
              Sacred verses from the Bhagavad Gita with translations and commentary by Dr. Aravinda Rao Karanam
            </p>
          </div>

          {/* Durga Mata Image */}
          <div className="relative w-full max-w-md mx-auto overflow-hidden rounded-3xl shadow-2xl border border-white/30 h-[500px] md:h-[600px]">
            <img
              src="/images/Durga Mata.jpg"
              alt="Durga Mata"
              className="absolute top-0 left-0 w-full h-full object-cover object-top scale-110"
            />
          </div>

          {/* Bhagavad Gita Slokas */}
          <div className="space-y-8">
            {bhagavadGitaSlokas.map((sloka, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border-2 border-orange-300/50"
              >
                {/* Sanskrit Text */}
                <div className="mb-4 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg">
                  <p className="text-xl text-black whitespace-pre-line">
                    {sloka.sanskrit}
                  </p>
                </div>

                {/* Transliteration */}
                <div className="mb-4">
                  <p className="text-orange-700 italic whitespace-pre-line">
                    {sloka.transliteration}
                  </p>
                </div>

                {/* Translation */}
                <div className="mb-4 p-4 bg-white/60 rounded-lg border-l-4 border-orange-500">
                  <p className="text-black">{sloka.translation}</p>
                </div>

                {/* Explanation if available */}
                {sloka.explanation && (
                  <div className="mb-4">
                    <p className="text-black italic">{sloka.explanation}</p>
                  </div>
                )}
                
                {/* Source */}
                <div className="mt-4 pt-4 border-t border-orange-200">
                  <p className="text-sm text-orange-600">— {sloka.source}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center bg-gradient-to-r from-orange-100/80 to-amber-100/80 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl text-black mb-4">Explore More Teachings</h3>
            <p className="text-black mb-6">
              Discover more wisdom from Dr. Aravinda Rao Karanam's teachings on the Bhagavad Gita and Vedanta
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://youtube.com/@hindu-digest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-lg"
              >
                <Youtube className="w-5 h-5" />
                YouTube Channel
              </a>
              <button
                onClick={() => onNavigate?.("shop")}
                className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-lg"
              >
                Shop Books
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Default content section layout
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 md:px-8 relative"
    >
      <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-8">
            {content.icon && (
              <div className="flex justify-center mb-4">{content.icon}</div>
            )}
            <h2 className="text-3xl md:text-4xl text-black mb-4">
              {content.title}
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
          </div>

          <div className="space-y-6 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-orange-300/50">
            <p className="text-lg text-black leading-relaxed">
              {content.description}
            </p>

          {content.showImage && content.imageUrl && (
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg border-2 border-orange-300/50">
              <img
                src={content.imageUrl}
                alt={content.title}
                className="w-full h-64 object-cover"
              />
            </div>
          )}

          {content.quote && (
            <div className="mt-8 p-6 bg-gradient-to-r from-orange-100/80 to-amber-100/80 border-l-4 border-orange-500 rounded shadow-md">
              <p className="text-black italic text-lg mb-2">
                "{content.quote.quote}"
              </p>
              <p className="text-orange-600">— {content.quote.author}</p>
            </div>
          )}

          <div className="mt-8 flex justify-center gap-4">
            {section === "hindu-digest" && (
              <a
                href="#about-hindu-digest"
                className="px-8 py-3 bg-transparent text-amber-900 border-2 border-orange-500 rounded-md hover:bg-orange-50 transition-colors shadow-md hover:shadow-lg"
              >
                Learn More
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}