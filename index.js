const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const services = [
    {
      title: "Web Development",
      description:
        "Custom, responsive, and scalable web solutions tailored to your business needs.",
    //   icon: "🌐",
    },
    {
      title: "Digital Marketing & SEO",
      description:
        "Data-driven strategies to improve visibility, traffic, and conversions.",
    },
    {
      title: "Data Analytics & CRM",
      description:
        "Convert raw data into actionable insights using analytics and CRM tools.",
    },
    {
      title: "IT Staff Augmentation",
      description:
        "Scale your team quickly with skilled and reliable IT professionals.",
    },
  ];
  
  const servicesGrid = document.getElementById("servicesGrid");
  
  services.forEach((service) => {
    const card = document.createElement("div");
  
    card.className =
      "p-6 sm:p-8 bg-white hover:shadow-lg transition-shadow duration-300 border border-gray-200 rounded-lg";
  
    card.innerHTML = `
      <div class="space-y-4">
        <h3 class="text-xl text-gray-900">
          ${service.title}
        </h3>
        <p class="text-sm text-gray-600 leading-relaxed">
          ${service.description}
        </p>
      </div>
    `;
  
    servicesGrid.appendChild(card);
  });
  
  
  const benefits = [
    {
      title: "Startup-Friendly",
      description:
        "We understand the unique challenges startups face and offer flexible solutions that scale with your growth.",
    },
    {
      title: "Cost-Effective",
      description:
        "Get premium quality services at competitive prices without compromising on excellence or deliverables.",
    },
    {
      title: "Skilled Technical Team",
      description:
        "Our experienced developers and consultants bring deep expertise in modern technologies and best practices.",
    },
    {
      title: "Client-Focused Approach",
      description:
        "Your success is our priority. We work collaboratively to understand your goals and deliver results that matter.",
    },
  ];
  
  const benefitsGrid = document.getElementById("benefitsGrid");
  
  benefits.forEach((benefit) => {
    const item = document.createElement("div");
  
    item.className = "flex gap-4";
  
    item.innerHTML = `
      <div class="flex-shrink-0">
        <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold">
          
        </div>
      </div>
      <div class="space-y-1">
        <h3 class="text-lg text-gray-900">
          ${benefit.title}
        </h3>
        <p class="text-sm text-gray-600 leading-relaxed">
          ${benefit.description}
        </p>
      </div>
    `;
  
    benefitsGrid.appendChild(item);
  });

  const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value,
  };

  console.log("Form submitted:", formData);

  alert("Thank you for reaching out! We will get back to you soon.");

  form.reset();
});

  