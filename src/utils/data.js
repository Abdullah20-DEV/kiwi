export const navLinks = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Services', path: '/services' },
    { id: 3, name: 'How Its Work', path: '/how-it-works' },
    { id: 4, name: 'Browse Jobs', path: '/browse-jobs' },
    { id: 5, name: 'Tokens', path: '/tokens' },
    { id: 6, name: 'Faqs', path: '/faqs' },
  ];

export const jobsData = [
    {
      title: "Dog Walk",
      description: "We understand that your dog is more than just a pet—they're family.",
    },
    {
      title: "Baby Sitting",
      description: "We know how important it is to find someone you trust to care for your children.",
    },
    {
      title: "House Sitting",
      description: "We'll treat your home like our own. Whether you're traveling for a weekend...",
    },
  ];

  export const faqData = [
  {
    key: "parental",
    question: "How does parental approval work?",
    answer:
      "Teens must invite their parent during sign-up. Parents can approve or deny each job application through their dashboard.",
  },
  {
    key: "payment",
    question: "How are payments handled securely?",
    answer:
      "Payments are processed securely through Stripe with escrow protection. Funds are only released when you approve the completed work.",
  },
  {
    key: "trust",
    question: "Can I trust the people on KiwiRoo?",
    answer:
      "All users undergo verification, and teens require parental approval. We also have a rating system and community reviews for added trust.",
  },
  {
    key: "jobs",
    question: "What types of jobs can teens apply for?",
    answer:
      "Teens can apply for various local jobs like babysitting, pet care, tutoring, yard work, and other age-appropriate tasks approved by their parents.",
  },
];


export const formFields = [
  { id: 'firstName', label: 'First Name', type: 'text', placeholder: 'Enter your first name' },
  { id: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Enter your last name' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
  { id: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
];