import { motion } from "motion/react";
import { Book, Video, FileText, Music, MessageCircle, Youtube } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { Articles } from "./Articles";
import drAravindaRaoImage from 'figma:asset/f7c5287d904e71abbc2c8646d8bfcee736fa59b2.png';

interface ContentSectionProps {
  section: string;
}

const wisdomQuotes = [
  {
    quote: "True understanding arises when wisdom and action flow together.",
    author: "Dr. Karanam Aravinda Rao"
  },
  {
    quote: "Dharma is not a set of rituals or beliefs, but the eternal law that upholds the universe and guides righteous living.",
    author: "Dr. Karanam Aravinda Rao"
  },
  {
    quote: "The wisdom of the Upanishads is not meant to be merely studied, but lived and experienced in daily life.",
    author: "Dr. Karanam Aravinda Rao"
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
      "Hindu Digest is a sacred platform dedicated to preserving and sharing the profound teachings of Sanatana Dharma (Hinduism). Through insightful talks, articles, and discussions, Hindu Digest bridges timeless wisdom with modern life — guided by Dr. Karanam Aravinda Rao. Our content focuses on Advaita Vedanta, the Upanishads, the Bhagavad Gita, and living dharma today.",
    quote: wisdomQuotes[0]
  },
  "dr-aravinda-rao": {
    title: "Dr. Karanam Aravinda Rao",
    description:
      "Dr. Karanam Aravinda Rao is a retired Director General of Police (DGP) of united Andhra Pradesh, an author and a leading speaker on Sanatana Dharma and Advaita Vedanta.",
    showImage: true,
    imageUrl: drAravindaRaoImage,
    quote: wisdomQuotes[1]
  },
  "about-hindu-digest": {
    title: "About Hindu Digest",
    description:
      "Hindu Digest is a sacred platform dedicated to preserving and sharing the profound teachings of Sanatana Dharma (Hinduism). Through insightful talks, articles, and discussions, Hindu Digest bridges timeless wisdom with modern life — guided by Dr. Karanam Aravinda Rao. Our content focuses on Advaita Vedanta, the Upanishads, the Bhagavad Gita, and living dharma today.",
    showImage: true,
    imageUrl: "https://images.unsplash.com/photo-1639792378050-85d804ba7b98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW5kdSUyMHRlbXBsZSUyMGRldm90aW9ufGVufDF8fHx8MTc2MjMyMjU5NHww&ixlib=rb-4.1.0&q=80&w=1080",
    quote: wisdomQuotes[2]
  },
  "hindu-digest": {
    title: "Hindu Digest",
    description:
      "Hindu Digest serves as your gateway to understanding Sanatana Dharma in depth. We offer systematic study of sacred texts, video lectures, written articles, and community discussions. Our mission is to make the profound wisdom of Hindu philosophy accessible and applicable to contemporary life, while maintaining authenticity and scholarly rigor.",
    showImage: true,
    imageUrl: "https://images.unsplash.com/photo-1658658160464-b018548d6648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW5kdSUyMGRlaXR5JTIwc3RhdHVlJTIwdGVtcGxlfGVufDF8fHx8MTc2MjMyMjU5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  "articles-main": {
    title: "Articles on Hindu Philosophy",
    description: "Explore our comprehensive collection of articles on Sanatana Dharma.",
    icon: <FileText className="w-16 h-16 text-orange-500" />,
  },
  "writings-dr-rao": {
    title: "Writings by Dr. Karanam Aravinda Rao",
    description: "Read profound insights from Dr. Aravinda Rao on Vedanta and Hindu philosophy.",
    icon: <FileText className="w-16 h-16 text-orange-500" />,
  },
  "teachings": {
    title: "Teachings & Wisdom",
    description:
      "These carefully selected quotes from Dr. Aravinda Rao's teachings offer concentrated wisdom on Dharma, Karma, Bhakti, and the path to self-realization. Each quote invites deep contemplation and can serve as a guide for righteous living.",
    showImage: true,
    imageUrl: "https://images.unsplash.com/photo-1759937932463-54d9133d6538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtzaG1pJTIwZ29kZGVzcyUyMHN0YXR1ZXxlbnwxfHx8fDE3NjIzMjI1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  "community-articles": {
    title: "Community Articles",
    description:
      "Read personal reflections and insights from students and practitioners of Hindu philosophy. These submissions reflect individual journeys of spiritual growth and offer diverse perspectives on applying Vedantic principles and Dharmic values in daily life.",
    icon: <FileText className="w-16 h-16 text-orange-500" />,
  },
  "talks-interviews": {
    title: "Talks & Interviews",
    description:
      "Listen to penetrating dialogues where Dr. Aravinda Rao responds to fundamental questions about existence, consciousness, and reality. These conversations reveal the spontaneous wisdom that flows when understanding is present, covering topics from the nature of enlightenment to practical questions about daily living.",
    showImage: true,
    imageUrl: "https://images.unsplash.com/photo-1761471680024-95bce6bb0c2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXJhc3dhdGklMjB3aXNkb20lMjBnb2RkZXNzfGVufDF8fHx8MTc2MjMyMjU5NHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  "videos": {
    title: "Videos & YouTube Channel",
    description:
      "Explore our extensive collection of video lectures on Hindu philosophy, Vedanta, and Advaita. Dr. Karanam Aravinda Rao's teachings on the Bhagavad Gita, Upanishads, and other sacred texts are available on our YouTube channel. Subscribe to stay updated with new releases.",
    icon: <Youtube className="w-16 h-16 text-red-600" />,
    showImage: true,
    imageUrl: "https://images.unsplash.com/photo-1679841797892-aea650e48a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmlzaG5hJTIwZmx1dGUlMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzYyMzIyNTkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  "media-clips": {
    title: "Media Clips",
    description:
      "Watch short excerpts from Dr. Aravinda Rao's lectures and discourses. These clips capture key teachings on various topics including Karma Yoga, Bhakti, Dharma, and the nature of the Self.",
    icon: <Video className="w-16 h-16 text-orange-500" />,
  },
  "bhakti-music": {
    title: "Bhakti Music",
    description:
      "Experience the transformative power of devotional music and sacred chants. Our collection includes traditional bhajans, kirtans, and contemplative pieces that create an atmosphere conducive to spiritual practice and inner stillness.",
    icon: <Music className="w-16 h-16 text-orange-500" />,
    showImage: true,
    imageUrl: "https://images.unsplash.com/photo-1679841797892-aea650e48a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmlzaG5hJTIwZmx1dGUlMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzYyMzIyNTkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  "news": {
    title: "News & Updates",
    description:
      "Stay informed about the latest teachings, articles, and events from Hindu Digest. Discover new content from Dr. Karanam Aravinda Rao and updates on our community programs.",
    icon: <FileText className="w-16 h-16 text-orange-500" />,
  },
  "shop": {
    title: "Shop",
    description:
      "Support Hindu Digest's mission while enriching your spiritual library. Our shop features books, audio lectures, and video courses by Dr. Karanam Aravinda Rao covering various aspects of Hindu philosophy, Vedanta, Sanskrit, and spiritual practice.",
  },
  "books": {
    title: "Books by Dr. Aravinda Rao",
    description:
      "Discover comprehensive books on Vedanta, Advaita philosophy, and Hindu thought authored by Dr. Karanam Aravinda Rao. Key titles include: 'How to Teach Hinduism to Your Child?', 'Indic Religions: Challenges for Survival', 'Bhagavadgeetha Manakem Chebutondi?', and 'Analysis of Jnanam in the Upanishads' (Ph.D. thesis). Available in English and Telugu.",
    icon: <Book className="w-16 h-16 text-orange-500" />,
    showImage: true,
    imageUrl: "https://images.unsplash.com/photo-1658658160464-b018548d6648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW5kdSUyMGRlaXR5JTIwc3RhdHVlJTIwdGVtcGxlfGVufDF8fHx8MTc2MjMyMjU5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  "audio": {
    title: "Audio Lectures",
    description:
      "Listen to Dr. Aravinda Rao's recorded lectures on various aspects of Hindu philosophy and Vedanta. Available in CD and MP3 formats. Our audio collection includes systematic studies of key texts, topical discussions, and guided contemplations.",
    icon: <Music className="w-16 h-16 text-orange-500" />,
  },
  "video": {
    title: "Video Collection",
    description:
      "Experience the complete atmosphere of Dr. Aravinda Rao's teachings through our video collection. Available in DVD and streaming formats. These comprehensive courses cover the Bhagavad Gita, major Upanishads, and fundamental concepts of Vedanta.",
    icon: <Video className="w-16 h-16 text-orange-500" />,
  },
  "qa": {
    title: "Q&A",
    description:
      "Explore our extensive archive of questions on Hindu philosophy and Dr. Aravinda Rao's responses. Topics cover everything from basic concepts of Dharma to advanced Vedantic philosophy. Submit your own questions for consideration.",
    icon: <MessageCircle className="w-16 h-16 text-orange-500" />,
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

export function ContentSection({ section }: ContentSectionProps) {
  const content = sectionContent[section] || sectionContent.home;

  // Special handling for Dr. Aravinda Rao profile page
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
            <div className="md:col-span-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-400/50">
                <img
                  src={drAravindaRaoImage}
                  alt="Dr. Karanam Aravinda Rao — Hindu Digest"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <h1 className="text-4xl text-amber-900">Dr. Karanam Aravinda Rao</h1>
              <p className="text-xl text-amber-800">
                Dr. Karanam Aravinda Rao is a retired Director General of Police (DGP) of united Andhra Pradesh, 
                an author and a leading speaker on Sanatana Dharma and Advaita Vedanta.
              </p>
            </div>
          </div>

          {/* Content sections */}
          <div className="space-y-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border-2 border-orange-300/50">
              <h2 className="text-2xl text-amber-900 mb-4">Career in Indian Police Service (IPS)</h2>
              <ul className="space-y-2 text-amber-800 list-disc list-inside">
                <li>Served 34 years in the IPS (1977–2011)</li>
                <li>Key roles: Director-General of Police; Superintendent of Police in five districts; Commissioner of Police, Vijayawada; Inspector General of Greyhounds; Additional Director General of State Intelligence</li>
                <li>Honors: Indian Police Medal and the President's Medal for Distinguished Service</li>
                <li>Noted for experience in counter-terrorism and anti-Naxal operations</li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border-2 border-orange-300/50">
              <h2 className="text-2xl text-amber-900 mb-4">Philosophical & Academic Pursuits</h2>
              <ul className="space-y-2 text-amber-800 list-disc list-inside">
                <li>Holds a Ph.D. in Sanskrit; author of Analysis of Jnanam in the Upanishads</li>
                <li>Studied Vedanta under Padmasri Pullela Ramachandruduji and Shri Tatvavidhananda Swamiji</li>
                <li>Focus: weaving ancient wisdom (Upanishads, Bhagavad Gita) into practical modern guidance</li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border-2 border-orange-300/50">
              <h2 className="text-2xl text-amber-900 mb-4">Publications & Selected Works</h2>
              <ul className="space-y-2 text-amber-800 list-disc list-inside">
                <li><em>How to Teach Hinduism to Your Child?</em></li>
                <li><em>Indic Religions: Challenges for Survival</em></li>
                <li><em>Bhagavadgeetha Manakem Chebutondi?</em></li>
                <li><em>Analysis of Jnanam in the Upanishads</em> (Ph.D. dissertation)</li>
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border-2 border-orange-300/50">
              <h2 className="text-2xl text-amber-900 mb-4">Online & Public Presence</h2>
              <p className="text-amber-800 mb-4">
                Educator at <a href="https://sanskritfromhome.org" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">sanskritfromhome.org</a> and contributor to Indica Today.
              </p>
              <p className="text-amber-800 mb-4">
                Active content creator on the <a href="https://youtube.com/@hindu-digest" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">Hindu Digest YouTube channel</a>.
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
                  href="https://sanskritfromhome.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-lg"
                >
                  SanskritFromHome.org
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
            <h2 className="text-3xl md:text-4xl text-amber-900 mb-4">
              Videos & YouTube Channel
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
            <p className="text-xl text-amber-800 max-w-3xl mx-auto">
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
              <div key={video.id} className="bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border-2 border-orange-300/50">
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
        <ContactForm />
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
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-amber-900 mb-4">
              {content.title}
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
            <p className="text-lg text-amber-800">{content.description}</p>
          </div>

          {content.showImage && content.imageUrl && (
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-400/50">
              <img
                src={content.imageUrl}
                alt={content.title}
                className="w-full h-96 object-cover"
              />
            </div>
          )}

          <div className="space-y-8">
            {wisdomQuotes.map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border-l-4 border-orange-500"
              >
                <p className="text-xl text-amber-900 italic mb-4">
                  "{item.quote}"
                </p>
                <p className="text-orange-600">— {item.author}</p>
              </div>
            ))}
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
          <h2 className="text-3xl md:text-4xl text-amber-900 mb-4">
            {content.title}
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
        </div>

        <div className="space-y-6 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-orange-300/50">
          <p className="text-lg text-amber-900 leading-relaxed">
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
              <p className="text-amber-900 italic text-lg mb-2">
                "{content.quote.quote}"
              </p>
              <p className="text-orange-600">— {content.quote.author}</p>
            </div>
          )}

          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-lg">
              Explore More
            </button>
            <button className="px-6 py-2 bg-white/90 text-amber-900 border-2 border-orange-400 rounded-lg hover:bg-orange-50 hover:border-orange-500 transition-colors shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
