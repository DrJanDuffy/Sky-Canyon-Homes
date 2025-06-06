import { Helmet } from "react-helmet-async";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  pageType?: 'general' | 'skye-canyon' | 'luxury-homes' | 'market-analysis' | 'las-vegas';
}

export default function FAQSchema({ faqs, pageType = 'general' }: FAQSchemaProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
}