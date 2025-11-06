import { FileText, Calendar, User, ExternalLink } from "lucide-react";

interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  image: string;
  youtubeUrl?: string;
}

const articles: Article[] = [
  {
    id: "1",
    title: "Understanding Dharma: The Foundation of Righteous Living",
    author: "Dr. Karanam Aravinda Rao",
    date: "March 15, 2025",
    content:
      "Dharma is the eternal law that sustains the universe and guides righteous living. It is not merely a set of rules or religious observances, but the fundamental principle that upholds cosmic order (Rita) and moral order in society. In the Bhagavad Gita, Lord Krishna teaches that each person has their own Dharma (Swadharma) based on their nature and position in life. Understanding and following one's Dharma leads to harmony within oneself and with the world. Dharma encompasses duty, righteousness, morality, and the natural law that governs all existence.",
    image:
      "https://images.unsplash.com/photo-1706777256918-6b904e41b619?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGl2YSUyMG1lZGl0YXRpb24lMjBzdGF0dWV8ZW58MXx8fHwxNzYyMzIyNTkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    youtubeUrl: "https://youtu.be/L6EbWtNFbQM"
  },
  {
    id: "2",
    title: "The Path of Bhakti: Devotion as Spiritual Practice",
    author: "Dr. Karanam Aravinda Rao",
    date: "March 10, 2025",
    content:
      "Bhakti, or devotion, is one of the primary paths to spiritual realization in Hindu philosophy. The Bhagavad Gita describes Bhakti as loving surrender to the Divine, where the devotee offers all actions and their fruits to God. This path is accessible to all, regardless of learning or social position. True Bhakti transforms the heart, purifies the mind, and leads to the direct experience of the Divine presence. It is not mere emotional sentiment, but a profound state of consciousness where the devotee sees the Divine in all beings and all actions become worship.",
    image:
      "https://images.unsplash.com/photo-1679841797892-aea650e48a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmlzaG5hJTIwZmx1dGUlMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzYyMzIyNTkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    youtubeUrl: "https://youtu.be/I_4WjACYCgo"
  },
  {
    id: "3",
    title: "Vedanta and the Nature of Reality",
    author: "Dr. Karanam Aravinda Rao",
    date: "March 5, 2025",
    content:
      "Vedanta, the culmination of Vedic wisdom found in the Upanishads, reveals the true nature of reality. It teaches that Brahman (the Absolute) is the only reality, and the individual self (Atman) is identical with Brahman. The apparent world of multiplicity is Maya, not false but a dependent reality that veils the true nature of the Self. Through knowledge (Jnana), discrimination (Viveka), and meditation, one can realize this truth directly. This realization brings liberation (Moksha) from the cycle of birth and death, and the experience of infinite peace and bliss.",
    image:
      "https://images.unsplash.com/photo-1658658160464-b018548d6648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW5kdSUyMGRlaXR5JTIwc3RhdHVlJTIwdGVtcGxlfGVufDF8fHx8MTc2MjMyMjU5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    youtubeUrl: "https://youtu.be/KqaL2eUyyNY"
  },
  {
    id: "4",
    title: "The Bhagavad Gita: A Guide for Modern Life",
    author: "Dr. Karanam Aravinda Rao",
    date: "February 28, 2025",
    content:
      "The Bhagavad Gita, though ancient, addresses the perennial questions of human existence and provides practical guidance for modern life. It teaches Karma Yoga (the path of selfless action), Bhakti Yoga (the path of devotion), and Jnana Yoga (the path of knowledge). The Gita emphasizes performing one's duty without attachment to results, maintaining equanimity in success and failure, and recognizing the Divine presence in all. These teachings help us navigate contemporary challenges while maintaining spiritual awareness and inner peace.",
    image:
      "https://images.unsplash.com/photo-1759937932463-54d9133d6538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtzaG1pJTIwZ29kZGVzcyUyMHN0YXR1ZXxlbnwxfHx8fDE3NjIzMjI1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    youtubeUrl: "https://youtu.be/Kqx45dlUUdg"
  },
  {
    id: "5",
    title: "Sanskar: Cultural Values and Spiritual Refinement",
    author: "Dr. Karanam Aravinda Rao",
    date: "February 20, 2025",
    content:
      "Sanskar refers to both the traditional sacraments (Samskaras) marking life's important transitions and the cultural refinement that comes from spiritual practice and ethical living. The sixteen major Sanskars, from birth to death, are designed to sanctify each stage of life and guide the individual toward spiritual maturity. Beyond rituals, Sanskar represents the values, virtues, and cultural heritage transmitted from generation to generation. These impressions (Samskaras) shape our character, thinking patterns, and spiritual orientation, connecting us to our dharmic roots.",
    image:
      "https://images.unsplash.com/photo-1761471680024-95bce6bb0c2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXJhc3dhdGklMjB3aXNkb20lMjBnb2RkZXNzfGVufDF8fHx8MTc2MjMyMjU5NHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "6",
    title: "Understanding the Self: Atman in Advaita Vedanta",
    author: "Dr. Karanam Aravinda Rao",
    date: "February 12, 2025",
    content:
      "The central teaching of Advaita Vedanta is the identity of Atman (individual self) and Brahman (universal consciousness). The Upanishads proclaim 'Tat Tvam Asi' (You are That), revealing that our true nature is not the body-mind complex but pure consciousness itself. This Self is eternally free, unchanging, and infinite. The sense of being a limited individual is due to ignorance (Avidya). Through self-inquiry, scriptural study, and meditation under a qualified teacher, this ignorance is dispelled, and one realizes their true nature as the infinite Self.",
    image:
      "https://images.unsplash.com/photo-1639792378050-85d804ba7b98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW5kdSUyMHRlbXBsZSUyMGRldm90aW9ufGVufDF8fHx8MTc2MjMyMjU5NHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
];

export function Articles() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <FileText className="w-16 h-16 text-orange-500 mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl text-amber-900 mb-4">
          Articles on Hindu Philosophy & Vedanta
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
        <p className="text-xl text-amber-800 max-w-3xl mx-auto">
          Explore profound insights into Sanatana Dharma, Vedanta, and the timeless wisdom of Hindu philosophy through teachings by Dr. Karanam Aravinda Rao
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border-2 border-orange-300/50 hover:shadow-2xl transition-shadow"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl text-amber-900 mb-3 line-clamp-2">
                {article.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-amber-700 mb-3">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span className="line-clamp-1">{article.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
              </div>
              <p className="text-amber-800 mb-4 line-clamp-3">
                {article.content}
              </p>
              <div className="flex gap-2">
                <button className="text-orange-500 hover:text-orange-600 transition-colors flex items-center gap-2">
                  Read More
                  <span>→</span>
                </button>
                {article.youtubeUrl && (
                  <a
                    href={article.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-red-600 hover:text-red-700 transition-colors flex items-center gap-1 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    YouTube
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-gradient-to-r from-orange-100/80 to-amber-100/80 border-l-4 border-orange-500 rounded-lg shadow-md">
        <h3 className="text-2xl text-amber-900 mb-4">
          "Dharma sustains the world, protects those who uphold it, and leads to the ultimate good."
        </h3>
        <p className="text-amber-800 italic">
          — Ancient Hindu wisdom, as taught by Dr. Karanam Aravinda Rao
        </p>
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://www.youtube.com/@hindu-digest/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-lg"
        >
          <ExternalLink className="w-5 h-5" />
          Visit Hindu Digest YouTube Channel
        </a>
      </div>
    </div>
  );
}
