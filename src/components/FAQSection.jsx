export const FAQSection = () => {
  const faqs = [
    {
      question: "Are your products safe for sensitive skin?",
      answer: "Yes, our products are formulated to be gentle and suitable for all skin types, including sensitive skin."
    },
    {
      question: "Are your products cruelty-free?",
      answer: "Absolutely! All our products are cruelty-free and many are vegan. Check individual product details for specifics."
    },
    {
      question: "What's your return policy?",
      answer: "We offer a 30-day return policy for unused and unopened products."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide with various shipping options available."
    },
    {
      question: "How do I choose the right product?",
      answer: "Our skincare quiz can help you find products tailored to your skin type and concerns."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-primary-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Answers to Your Skincare Questions
          </h2>
          <p className="text-primary-dark/80 max-w-2xl mx-auto">
            All your skincare queries answered in one place
          </p>
          <div className="w-20 h-1 bg-primary-dark mx-auto mt-4"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm cursor-pointer">
                <h3 className="font-medium text-primary-dark">{faq.question}</h3>
                <span className="text-primary-dark">+</span>
              </div>
              <div className="bg-white/80 p-4 rounded-b-lg">
                <p className="text-primary-dark/80">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};