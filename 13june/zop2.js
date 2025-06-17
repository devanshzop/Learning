// const jsonfile = './zop1.json';

const realdata=
 [{
    "top" : "Connect Zopdev with the Tools You Already Use",
    "bottom" :"Seamlessly connect Zopdev with the essential tools your DevOps team relies on every day—CI/CD platforms, monitoring solutions, alerting systems, cloud services, and collaboration apps—all in one place."
},
{
 "search" : "Featured Integration"
}
,
{
    "categories":"Categories",
    "1":"Applications",
    "2":"DataStore",
    "3":"Observability"
},
{
    "app" :"Applications",
    "1":"Wordpress",
    "2":"Jupyter",
    "3":"Superset",
    "4":"Outline"

},
]

const firstname = {
    
    "top" : "Connect Zopdev with the Tools You Already Use",
    "bottom" :"Seamlessly connect Zopdev with the essential tools your DevOps team relies on every day—CI/CD platforms, monitoring solutions, alerting systems, cloud services, and collaboration apps—all in one place."

};
const search ={
     "search" : "Featured Integration"
}

const categories ={
     "property":"Categories",
    "1":"Applications",
    "2":"DataStore",
    "3":"Observability"
}

const application ={
    "name" :"Applications",
    "1":"Wordpress",
    "2":"Jupyter",
    "3":"Superset",
    "4":"Outline"

}

const aplicationsdata={
    "wordpress":"A content management system (CMS) written in PHP",
    "jupyter":"JupyterLab Is A Next-Generation Notebook Interface",
    "superset":"Data Visualization and Data Exploration | Looker, Tableau alternative",
    "outline":"Beautiful, realtime collaborative, feature packed, and markdown compatible."

}
const datastore ={
    "name" :"DataStore",
    "1":"MySQL",
    "2":"Redis",
    "3":"Cassandra",
    "4":"MariaDB",
    "5":"PostgreSQL",
    "6":"Kafka",
    "7":"Redis Distributed",
    "8":"Solr",
    "9":"CockroachDB",
    "10":"Dgraph",
    "11":"Chromadb",
    "12":"OpenTSDB",
    "13":"OpenTSDB",
    "14":"SolrCloud",

}

const datastoretext={
    "name" :"DataStore",
    "MySQL":"Deploy a MySQL database service",
    "Redis":"Redis key-value data store",
    "Cassandra":"Storing and managing large volumes of structured, semi-structured, and unstructured data.",
    "MariaDB":"The open source relational database",
    "PostgreSQL":"PostgreSQL database service",
    "Kafka":"A distributed event streaming platform for real-time data pipelines and stream processing.",
    "Redis Distributed":"Distributed Redis cluster on Kubernetes with master-slave replication",
    "Solr":"An open-source search platform built on Apache Lucene.",
    "CockroachDB":"Source-available distributed SQL database management system",
    "Dgraph":"The high-performance database for modern applications",
    "Chromadb":"The AI-native embedding database",
    "OpenTSDB":"A Distributed, Scalable Monitoring System",
    "SurrealDB":"A scalable, distributed, collaborative, document-graph database",
    "SolrCloud":"Scalable, fault-tolerant Apache Solr for distributed search and indexing.",
    "ScyllaDB":"ScyllaDB is a source-available distributed NoSQL wide-column data store."

}

document.getElementById("head").innerText=firstname.top;
document.getElementById("head-bottom").innerText=firstname.bottom;

document.getElementById("wordpress").innerText=application["1"];
document.getElementById("wordpress-text").innerText=aplicationsdata.wordpress;

document.getElementById("JupyterLab").innerText=application["2"];
document.getElementById("JupyterLab-text").innerText=aplicationsdata.jupyter;

document.getElementById("superset").innerText=application["3"];
document.getElementById("superset-text").innerText=aplicationsdata.superset;

document.getElementById("outline").innerText=application["4"];
document.getElementById("outline-text").innerText=aplicationsdata.outline;

// datastore

document.getElementById("MySQL").innerText=datastore["1"];
document.getElementById("MySQL-text").innerText=datastoretext["MySQL"];

//   document.addEventListener('DOMContentLoaded', function() {
        
//             const faqQuestions = document.querySelectorAll('.faq-question');

//             faqQuestions.forEach(question => {
//                 question.addEventListener('click', function() {
                  
//                     const answer = this.nextElementSibling;
                
//                     const icon = this.querySelector('.icon');

                
//                     this.classList.toggle('active');

                
//                     answer.classList.toggle('show');

                    
//                     if (answer.classList.contains('show')) {
//                         icon.textContent = 'remove'; 
//                     } else {
//                         icon.textContent = 'add';
//                     }
//                 });
//             });
//         });


//faq

  const faqData = [
                {
                    question: "What are Zopdev integrations?",
                    answer: "Zopdev integrations are powerful connections that link Zopdev with your existing development, operations, and collaboration tools. They allow seamless data flow, automated workflows, and centralized monitoring across your entire DevOps ecosystem, streamlining your processes and improving team efficiency."
                },
                {
                    question: "How easy is it to set up an integration?",
                    answer: "Setting up Zopdev integrations is designed to be intuitive and straightforward. Most integrations can be configured with just a few clicks through our user-friendly interface, often requiring only API keys or OAuth authentication with your external services. Detailed documentation and guided tutorials are available for every integration."
                },
                {
                    question: "Do I need to be an engineer to enable integrations?",
                    answer: "No, not necessarily! While some advanced configurations might benefit from technical understanding, many of our integrations are designed for non-technical users to enable and manage. Our goal is to empower all members of your team, from developers to project managers, to leverage Zopdev's full potential."
                },
                {
                    question: "Are integrations free?",
                    answer: "Zopdev offers a tiered integration model. A selection of essential integrations are included with all plans, while advanced or premium integrations may be part of higher-tier subscriptions or available as add-ons. Please refer to our pricing page or contact our sales team for detailed information on integration availability for your plan."
                },
                {
                    question: "What if I can't find the integration I need?",
                    answer: "We are constantly expanding our library of integrations! If you can't find a specific tool you rely on, please reach out to our support team or submit a feature request. We prioritize integrations based on user demand and strategic partnerships. Zopdev also provides robust APIs for custom integrations if you have specific development needs."
                }
            ];

            const faqListContainer = document.querySelector('.faq-list');
            if (faqListContainer) {
                faqListContainer.innerHTML = ''; 

                faqData.forEach(item => {
                    const faqItemDiv = document.createElement('div');
                    faqItemDiv.classList.add('faq-item');

                    const faqQuestionDiv = document.createElement('div');
                    faqQuestionDiv.classList.add('faq-question');
                    faqQuestionDiv.innerHTML = `
                        <span>${item.question}</span>
                        <span class="material-icons icon">add</span>
                    `;

                    const faqAnswerDiv = document.createElement('div');
                    faqAnswerDiv.classList.add('faq-answer');
                    faqAnswerDiv.innerHTML = `<p>${item.answer}</p>`;

                    
                    faqQuestionDiv.addEventListener('click', function() {
                        const currentAnswer = this.nextElementSibling;
                        const currentIcon = this.querySelector('.icon');

                      
                        const allOpenAnswers = faqListContainer.querySelectorAll('.faq-answer.show');
                        allOpenAnswers.forEach(openAnswer => {
                            if (openAnswer !== currentAnswer) { 
                                openAnswer.classList.remove('show');
                                openAnswer.previousElementSibling.classList.remove('active');
                                openAnswer.previousElementSibling.querySelector('.icon').textContent = 'add';
                            }
                        });


                   
                        this.classList.toggle('active');
                        currentAnswer.classList.toggle('show');

                        if (currentAnswer.classList.contains('show')) {
                            currentIcon.textContent = 'remove';
                        } else {
                            currentIcon.textContent = 'add';
                        }
                    });

                    faqItemDiv.appendChild(faqQuestionDiv);
                    faqItemDiv.appendChild(faqAnswerDiv);
                    faqListContainer.appendChild(faqItemDiv);
                });
            } else {
                console.error("FAQ list container not found!");
            }

