var companyObject = {
  company: {
    name: "Innovative Solutions Pvt. Ltd.",
    founded: 2005,
    headquarters: {
      country: "India",
      city: "Bengaluru",
      address: {
        street: "123 Tech Park",
        zip: "560034",
      },
    },
    departments: {
      engineering: {
        head: {
          name: "Ravi Kumar",
          title: "Chief Technology Officer",
          contact: {
            phone: "080-23456789",
            email: "ravi.kumar@innovativesolutions.com",
          },
        },
        teams: {
          frontend: {
            lead: {
              name: "Anita Patel",
              experience: 6,
            },
            members: {
              member1: {
                name: "Rajesh Sharma",
                role: "Frontend Developer",
                skills: ["React", "CSS", "JavaScript"],
              },
              member2: {
                name: "Sneha Gupta",
                role: "UI/UX Designer",
                skills: ["Figma", "Illustrator"],
              },
            },
          },
          backend: {
            lead: {
              name: "Suresh Reddy",
              experience: 8,
            },
            members: {
              member1: {
                name: "Manoj Singh",
                role: "Backend Developer",
                skills: ["Node.js", "Express", "MongoDB"],
              },
              member2: {
                name: "Pooja Mehta",
                role: "Database Administrator",
                skills: ["MySQL", "PostgreSQL"],
              },
            },
          },
        },
      },
      sales: {
        head: {
          name: "Meera Desai",
          title: "Sales Manager",
          contact: {
            phone: "080-98765432",
            email: "meera.desai@innovativesolutions.com",
          },
        },
        regions: {
          north: {
            manager: {
              name: "Vikram Joshi",
              contact: {
                phone: "011-23456789",
                email: "vikram.joshi@innovativesolutions.com",
              },
            },
          },
          west: {
            manager: {
              name: "Aarti Kapoor",
              contact: {
                phone: "022-98765432",
                email: "aarti.kapoor@innovativesolutions.com",
              },
            },
          },
        },
      },
    },
  },
  products: {
    techGadgetPro: {
      name: "TechGadget Pro 2024",
      category: "Electronics",
      price: 39999,
      features: {
        connectivity: ["WiFi", "Bluetooth"],
        batteryLife: "12 hours",
        warranty: "1 year",
      },
      reviews: {
        review1: {
          user: "Amit Patel",
          rating: 4.5,
          comment: "Excellent performance and value for money.",
        },
        review2: {
          user: "Divya Reddy",
          rating: 4,
          comment: "Very good, but the battery could be better.",
        },
      },
    },
    softwareSuite: {
      name: "Software Suite Pro",
      category: "Software",
      price: 14999,
      features: {
        platform: ["Windows", "MacOS"],
        support: true,
        updates: "3 years",
      },
      reviews: {
        review1: {
          user: "Raj Malhotra",
          rating: 4,
          comment: "Great features but a bit pricey.",
        },
        review2: {
          user: "Sonia Bhardwaj",
          rating: 5,
          comment: "Fantastic tool for professionals!",
        },
      },
    },
  },
  policies: {
    returnPolicy: {
      days: 15,
      conditions: ["Original packaging", "Invoice"],
      exceptions: {
        openedSoftware: false,
        discountedItems: true,
      },
    },
    privacyPolicy: {
      dataCollection: ["Email", "Phone Number", "Purchase History"],
      thirdParties: ["Marketing Partners"],
      userRights: {
        access: true,
        delete: true,
        update: true,
      },
    },
  },
};

console.log(companyObject.company.departments.engineering.head.contact.email);
console.log(companyObject["company"]["departments"]["engineering"]);

console.log(
  "Before updating : ",
  companyObject.policies.privacyPolicy.userRights,
);
companyObject.policies.privacyPolicy.userRights.access = false;
companyObject.policies.privacyPolicy.userRights.delete = false;
companyObject.policies.privacyPolicy.userRights.update = false;

console.log(
  "After updating : ",
  companyObject.policies.privacyPolicy.userRights,
);
