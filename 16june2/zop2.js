const integrationsData = {
  applications: [
    {
      id: "wordpress",
      name: "WordPress",
      icon: "https://framerusercontent.com/images/1tMwCNL8nyVYanLeO1YXCmyD8.svg",
      description: "A content management system (CMS) written in PHP",
    },
    {
      id: "jupyter",
      name: "Jupyter",
      icon: "https://framerusercontent.com/images/hgWz13blJI6voMJlnl8LpCs7Cjs.svg",
      description: "JupyterLab Is A Next-Generation Notebook Interface",
    },
    {
      id: "superset",
      name: "Superset",
      icon: "https://framerusercontent.com/images/j2PaA4EyjB3z8Te54CPtEl9G4pg.svg",
      description: "Data Visualization and Data Exploration | Looker, Tableau alternative",
    },
    {
      id: "outline",
      name: "Outline",
      icon: "https://framerusercontent.com/images/me3PE9f0sDhtHyIisE955ABYK3c.svg",
      description: "Beautiful, realtime collaborative, feature packed, and markdown compatible.",
    }
  ],
  datastore: [
    {
      id: "mysql",
      name: "MySQL",
      icon: "https://framerusercontent.com/images/o9NXlQW93tQQ6v3jTjDOcwxCMaU.svg",
      description: "Deploy a MySQL database service",
    },
    {
      id: "redis",
      name: "Redis",
      icon: "https://framerusercontent.com/images/8MWCYgdUmGTAMwJBrF8PdkFbfnI.svg",
      description: "Redis key-value data store",
    },
    {
      id: "cassandra",
      name: "Cassandra",
      icon: "https://framerusercontent.com/images/hyQRAJJoXaCLvlAd8IqafkKPitE.svg",
      description: "Storing and managing large volumes of structured, semi-structured, and unstructured data.",
    },
    {
      id: "mariadb",
      name: "MariaDB",
      icon: "https://framerusercontent.com/images/MrgrzzqL3aHPeAvXraV4W437EI.svg",
      description: "The open source relational database",
    },
    {
      id: "postgres",
      name: "Postgres",
      icon: "https://framerusercontent.com/images/AaiB0a2xIUnIemm6V905ML5c.svg",
      description: "PostgreSQL database service",
    },
    {
      id: "kafka",
      name: "Kafka",
      icon: "https://framerusercontent.com/images/T58vVQTZl0UnFlmzHJLYR7mpd8U.svg",
      description: "A distributed event streaming platform for real-time data pipelines and stream processing.",
    },
    {
      id: "redis-distributed",
      name: "Redis (Distributed)",
      icon: "https://framerusercontent.com/images/UijaNkqS0HW6UsMqM12w0Pg.png",
      description: "Distributed Redis cluster for high availability and scalability",
    },
    {
      id: "solr",
      name: "SOLR",
      icon: "https://framerusercontent.com/images/38xBPcJEGig795UQddhD41ra5xM.svg",
      description: "An open-source search platform built on Apache Lucene.",
    },
    {
      id: "cockroachdb",
      name: "CockroachDB",
      icon: "https://framerusercontent.com/images/yYgMVdoJyroUzIpxfhPZkgzb0OA.svg",
      description: "Source-available distributed SQL database management system",
    },
    {
      id: "dgraph",
      name: "Dgraph",
      icon: "https://framerusercontent.com/images/PqVSCt2usAAIShQahcf90ovxXqI.svg",
      description: "The high-performance database for modern applications",
    },
    {
      id: "chromadb",
      name: "ChromaDB",
      icon: "https://framerusercontent.com/images/chCSrOajsbttAYyRnFvhNbRgBEQ.svg",
      description: "The AI-native embedding database",
    },
    {
      id: "opentsdb",
      name: "OpenTSDB",
      icon: "https://framerusercontent.com/images/HMe9loL8PZLicwfLI1znIttA2g.png",
      description: "A Distributed, Scalable Monitoring System",
    },
    {
      id: "surrealdb",
      name: "SurrealDB",
      icon: "https://framerusercontent.com/images/bRyFhCW7zQ6XoCJv18CxnK8uE.svg",
      description: "A scalable, distributed, collaborative, document-graph database",
    },
    {
      id: "solr-cloud",
      name: "Solr Cloud",
      icon: "https://framerusercontent.com/images/TF8qLyaVZCZ0P3IwWEqp9qfNH1A.svg",
      description: "Scalable, fault-tolerant Apache Solr for distributed search and indexing.",
    },
    {
      id: "scylladb",
      name: "ScyllaDB",
      icon: "https://framerusercontent.com/images/0MeJnJIpldPqz476W6rAWBSO4XE.svg",
      description: "ScyllaDB is a source-available distributed NoSQL wide-column data store.",
    }
  ],
  observability: [
    {
      id: "loki",
      name: "Loki",
      icon: "https://framerusercontent.com/images/6yDZTaSiaEvYgE9LqD2z3GT8h4.svg",
      description: "Loki is a horizontally scalable, log aggregation system",
    },
    {
      id: "mimir",
      name: "Mimir",
      icon: "https://framerusercontent.com/images/K4YF2J6Wb5TkQayiIUqm9gsRLOg.svg",
      description: "A scalable, multi-tenant time-series database for Prometheus metrics.",
    },
    {
      id: "tempo",
      name: "Tempo",
      icon: "https://framerusercontent.com/images/OCA4myxlzNqNgrMyxymX9LrMkJ8.svg",
      description: "Grafana's high-scale distributed tracing backend.",
    },
    {
      id: "graphana",
      name: "Graphana",
      icon: "https://framerusercontent.com/images/R3iRNGrhsULm9v6Lu62r2Mfks.svg",
      description: "Open-source analytics and visualization platform for time-series data.",
    },
    {
      id: "prometheus",
      name: "Prometheus",
      icon: "https://framerusercontent.com/images/OoYwOtYMUMSsFXqqJrSPccxKLBA.svg",
      description: "Open-source monitoring and alerting system for time-series data.",
    },
    {
      id: "splunk",
      name: "Splunk",
      icon: "https://framerusercontent.com/images/xFocUuhbKqUa0hJ5vZGvqngmUg.svg",
      description: "Open-source monitoring and alerting system for time-series data.",
    },
    {
      id: "datadog",
      name: "Datadog",
      icon: "https://framerusercontent.com/images/iKF1768aJWTjWA6gA0HNYeaem7E.svg",
      description: "Monitoring and analytics platform for large-scale applications and infrastructure.",
    },
    {
      id: "newrelic",
      name: "New Relic",
      icon: "https://framerusercontent.com/images/Vjahw0hMgW6HPNpoI5KfCUWZEHQ.svg",
      description: "monitoring and analyzing the performance of digital systems, encompassing applications and infrastructure.",
    },
    {
      id: "slack",
      name: "Slack",
      icon: "https://framerusercontent.com/images/XWqLTLXleHamR90CxjA5PSwvIcM.svg",
      description: "A simple Slack bot programmed in Python.",
    }
  ]
};

integrationsData.integrations = [
  ...integrationsData.applications.map(item => ({ ...item, category: 'Applications' })),
  ...integrationsData.datastore.map(item => ({ ...item, category: 'Datastore' })),
  ...integrationsData.observability.map(item => ({ ...item, category: 'Observability' }))
];


integrationsData.categories = ['Applications', 'Datastore', 'Observability'];

document.getElementById("head").innerText = "Connect Zopdev with the Tools You Already Use";
document.getElementById("head-bottom").innerText = "Seamlessly connect Zopdev with the essential tools your DevOps team relies on every day—CI/CD platforms, monitoring solutions, alerting systems, cloud services, and collaboration apps—all in one place.";

const allIntegrationsContainer = document.getElementById('allIntegrationsContainer');
const searchInput = document.getElementById('searchInput');
const noResultsMessage = document.getElementById('noResultsMessage');
const categoryNavigation = document.getElementById('categoryNavigation');

function createIntegrationBox(integration) {
    const boxDiv = document.createElement('div');
    boxDiv.className = 'application-box';
    boxDiv.setAttribute('data-id', integration.id);

    const imageDiv = document.createElement('div');
    imageDiv.className = 'application-image';
    const img = document.createElement('img');
    img.src = integration.icon;
    img.alt = `${integration.name} icon`;
    imageDiv.appendChild(img);

    const textDiv = document.createElement('div');
    textDiv.className = 'application-text';
    const h3 = document.createElement('h3');
    h3.textContent = integration.name;
    const p = document.createElement('p');
    p.textContent = integration.description;
    textDiv.appendChild(h3);
    textDiv.appendChild(p);

    boxDiv.appendChild(imageDiv);
    boxDiv.appendChild(textDiv);

    return boxDiv;
}

function renderIntegrations(integrationsToRender) {
    allIntegrationsContainer.innerHTML = '';
    let integrationsFound = false;

    integrationsData.categories.forEach(category => {
        const categoryIntegrations = integrationsToRender.filter(int => int.category === category);

        if (categoryIntegrations.length > 0) {
            integrationsFound = true;
            const categorySection = document.createElement('div');
            categorySection.id = category.toLowerCase().replace(/\s+/g, '-');

            const heading = document.createElement('h3');
            heading.className = 'applications-heading';
            heading.textContent = category;
            heading.id = `to${category.toLowerCase().replace(/\s+/g, '')}`;
            categorySection.appendChild(heading);

            const parentDiv = document.createElement('div');
            if (category === "Applications") {
                parentDiv.className = 'application-box-parent';
            } else if (category === "Datastore") {
                parentDiv.className = 'datastore-box-parent';
            } else if (category === "Observability") {
                parentDiv.className = 'observability-box-parent';
            } else {
                parentDiv.className = 'application-box-parent';
            }

            categoryIntegrations.forEach(integration => {
                const box = createIntegrationBox(integration);
                parentDiv.appendChild(box);
            });

            categorySection.appendChild(parentDiv);
            allIntegrationsContainer.appendChild(categorySection);
        }
    });

    noResultsMessage.style.display = integrationsFound ? 'none' : 'block';
}

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredIntegrations = integrationsData.integrations.filter(integration =>
        integration.name.toLowerCase().includes(searchTerm) ||
        integration.description.toLowerCase().includes(searchTerm) ||
        integration.category.toLowerCase().includes(searchTerm)
    );
    renderIntegrations(filteredIntegrations);
}

document.addEventListener('keydown', function (e) {
    const isModifierPressed = e.ctrlKey || e.metaKey;
    if (isModifierPressed && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.focus();
    }
});

function populateCategoryNavigation() {
    categoryNavigation.innerHTML = '';
    integrationsData.categories.forEach(category => {
        const link = document.createElement('a');
        link.className = 'category-link';
        link.href = `#to${category.toLowerCase().replace(/\s+/g, '')}`;
        link.textContent = category;
        categoryNavigation.appendChild(link);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateCategoryNavigation();
    renderIntegrations(integrationsData.integrations);
    searchInput.addEventListener('input', handleSearch);

    const faqList = document.querySelector('.faq-list');
    faqList.innerHTML = '';
    const faqItems = [
        {
            question: "What is Zopdev?",
            answer: "Zopdev is a platform that seamlessly connects your DevOps team's essential tools..."
        },
        {
            question: "How do I integrate my existing tools?",
            answer: "Zopdev provides intuitive integration guides and connectors for various popular tools..."
        },
        {
            question: "Is Zopdev compatible with all cloud providers?",
            answer: "Zopdev is designed with flexibility in mind and supports integrations with major cloud providers..."
        },
        {
            question: "Can I monitor my applications in real-time?",
            answer: "Yes, Zopdev integrates with leading monitoring solutions to provide real-time visibility..."
        },
        {
            question: "What kind of support does Zopdev offer?",
            answer: "We offer comprehensive support including documentation, a knowledge base, community forums..."
        }
    ];

    faqItems.forEach(item => {
        const faqItemDiv = document.createElement('div');
        faqItemDiv.classList.add('faq-item');

        const faqQuestionDiv = document.createElement('div');
        faqQuestionDiv.classList.add('faq-question');
        faqQuestionDiv.innerHTML = `<span>${item.question}</span><span class="icon">+</span>`;
        faqItemDiv.appendChild(faqQuestionDiv);

        const faqAnswerDiv = document.createElement('div');
        faqAnswerDiv.classList.add('faq-answer');
        faqAnswerDiv.innerHTML = `<p>${item.answer}</p>`;
        faqItemDiv.appendChild(faqAnswerDiv);

        faqList.appendChild(faqItemDiv);

        faqQuestionDiv.addEventListener('click', () => {
            const isActive = faqQuestionDiv.classList.contains('active');
            document.querySelectorAll('.faq-question.active').forEach(activeQuestion => {
                activeQuestion.classList.remove('active');
                activeQuestion.nextElementSibling.classList.remove('show');
                activeQuestion.querySelector('.icon').textContent = '+';
            });
            if (!isActive) {
                faqQuestionDiv.classList.add('active');
                faqAnswerDiv.classList.add('show');
                faqQuestionDiv.querySelector('.icon').textContent = '-';
            }
        });
    });
});






