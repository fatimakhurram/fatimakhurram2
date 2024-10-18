import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Network Traffic Analysis',
        description: "The objective of this project is to capture and analyze network traffic in order to detect and understand abnormal patterns, anomalies, or malicious activities such as DDoS attacks, Man-in-the-Middle (MITM) attacks, DNS spoofing, or unauthorized access. By analyzing the flow of data across a network, you’ll gain insights into how data is transmitted, where vulnerabilities lie, and how you can prevent potential threats.",
        tools: ['Wireshark, Scapy, tcpdump, Pyshark, Kali Linux, Nmap, Burp Suite, Metasploit'],
        role: 'Cybersecurity',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'VAPT REPORT ON 2 SITES Using OWASP ZAP',
        description: 'The goal of this project is to conduct a comprehensive Vulnerability Assessment and Penetration Testing (VAPT) on two selected websites using the OWASP Zed Attack Proxy (ZAP). The project aims to identify potential security vulnerabilities, assess their severity, and provide recommendations for remediation. we will utilize OWASP ZAP, a free, open-source web application security scanner that is widely used for finding security vulnerabilities in web applications',
        tools: [ "OWASP ZAP, Burp Suite, Nmap, Metasploit, Kali Linux, Nessus, Nikto, sqlmap"],
        role: 'Cybersecurity expert',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Dot NET web application deployment on Azure',
        description: 'The goal of this project is to deploy a .NET web application to Microsoft Azure, a leading cloud platform. By utilizing Azure cloud services, we can ensure that our application is scalable, reliable, and accessible to users globally. This project will demonstrate the deployment process, configuration, and management of a .NET application in a cloud environment.',
        tools: ['Visual Studio, Azure Portal, Azure App Service, Azure SQL Database, GitHub, Azure DevOps, Postman, Azure Application Insights'],
        code: '',
        role: 'Devops Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Dot Net Deployment using Kubernetes and Azure DevOps',
        description: "The aim of this project is to deploy a .NET application using Kubernetes, orchestrated by Azure DevOps, to ensure continuous integration and continuous deployment (CI/CD) practices. This project highlights the benefits of containerization, orchestration, and automated deployment in modern software development, enhancing scalability, reliability, and operational efficiency.",
        tools: ['Visual Studio, Docker, Kubernetes, Azure DevOps, Azure Container Registry, Helm, Azure Kubernetes Service (AKS)', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Devops Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },