/* ==========================================================================
   APP INITIALIZATION & CONSTANTS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initThemeToggle();
  initLayoutToggle();
  initSkillsObserver();
  initTimelineFilter();
  initEinsteinChat();
  initSfConsoleTabs();
});

// Salesforce Resume Database for Einstein Bot & SF Console details
const RESUME_DATA = {
  summary: `⚡ <strong>Tejashwini B</strong> is a Senior Salesforce Developer with <strong>8+ years</strong> of hands-on experience.<br>
            • <strong>Core Expertise:</strong> Designing scalable Apex, Lightning Web Components (LWC), and API integrations.<br>
            • <strong>Cloud Stack:</strong> Strong track record in Sales Cloud, Service Cloud, and Marketing Cloud.<br>
            • <strong>Methodology:</strong> Expert in Agile, DevOps Center, GitLab CI/CD, and release management.`,
            
  lwc: `💻 <strong>LWC & Apex Experience:</strong><br>
        • Developed custom Salesforce interfaces using <strong>LWC</strong> and Aura, optimizing load times by 40% using cache-management techniques.<br>
        • Built scalable <strong>Apex Classes</strong>, high-performance triggers (bulkified, utilizing trigger frameworks), batch/queueable asynchronous code, and robust unit tests with >92% code coverage.<br>
        • Transitioned legacy Visualforce and Aura components into modern LWC frameworks.`,
        
  integrations: `🔌 <strong>Integrations & APIs:</strong><br>
                 • Designed custom <strong>REST</strong> & <strong>SOAP</strong> web service endpoints inside Salesforce.<br>
                 • Integrated Salesforce with ERPs, custom billing systems, and external databases.<br>
                 • Leveraged <strong>Platform Events</strong> for asynchronous event-driven communications, reducing lock errors.`,
                 
  certifications: `🏆 <strong>Credentials & Certifications:</strong><br>
                   • <strong>Salesforce Certified Platform Developer I</strong> (PD1)<br>
                   • <strong>Salesforce Certified Administrator</strong> (ADM 201)<br>
                   • <strong>Trailhead Ranger</strong> with superbadges including: <em>Business Administration Specialist</em> and <em>Service Cloud Specialist</em>.`,
                   
  contact: `📞 <strong>Contact Tejashwini B:</strong><br>
            • 📧 Email: <a href="mailto:btejashwini512@gmail.com" style="color:var(--primary-color)">btejashwini512@gmail.com</a><br>
            • 📱 Phone: +91 9611748512<br>
            • 📍 Location: Bengaluru, India<br>
            • 💼 Open to remote, hybrid, and onsite opportunities.`
};

const EXPERIENCE_DETAILS = {
  E2open: `
    <strong>Company:</strong> E2open (Jan 2023 - Present)<br>
    <strong>Role:</strong> Salesforce Developer<br><br>
    <strong>Detailed Technical Actions:</strong><br>
    • Coded and maintained large-scale Salesforce customizations using <strong>Apex triggers</strong>, handler classes, and customized <strong>LWC layouts</strong>.<br>
    • Streamlined release operations by adopting <strong>Salesforce DevOps Center</strong>, helping coordinate changes across development and staging sandboxes.<br>
    • Architected complex automation paths utilizing <strong>Record-Triggered Flows</strong> and subflows.<br>
    • Optimized page layout response speeds by troubleshooting SOQL query execution plans and query filters.
  `,
  Dazeworks: `
    <strong>Company:</strong> Dazeworks (Dec 2021 - Jan 2023)<br>
    <strong>Role:</strong> Application Engineer<br><br>
    <strong>Detailed Technical Actions:</strong><br>
    • Customised Salesforce instances in a fast-paced agency consulting environment, working across nonprofit (NPSP) configurations.<br>
    • Authored triggers, utility classes, and batch integrations.<br>
    • Supported Salesforce app package customization, custom object modeling, and permission sets.<br>
    • Partnered with client stakeholders to analyze business requests and translate them to technical solutions.
  `,
  Lumen: `
    <strong>Company:</strong> Lumen Technologies (Jul 2020 - Dec 2021)<br>
    <strong>Role:</strong> Software Development Engineer<br><br>
    <strong>Detailed Technical Actions:</strong><br>
    • Engineered Salesforce custom modules using a hybrid of <strong>Aura Components</strong> and modern <strong>Lightning Web Components (LWC)</strong>.<br>
    • Conducted advanced configuration inside <strong>Marketing Cloud</strong>, building out customer Journeys and configuring dynamic email sends in Email Studio.<br>
    • Handled production incident queues, resolving data skew issues, governor limit exceptions, and trigger recursion.
  `,
  CRMIT: `
    <strong>Company:</strong> CRMIT Solutions (Jun 2019 - Jul 2020)<br>
    <strong>Role:</strong> CX Cloud Developer (Client: UnitedHealth Group)<br><br>
    <strong>Detailed Technical Actions:</strong><br>
    • Built robust customer-support workflows using Service Cloud elements: Entitlements, Milestones, and case assignment rules.<br>
    • Created complex UI screens utilizing <strong>Aura components</strong> and Visualforce controllers.<br>
    • Oversaw high-volume data uploads using Data Loader, resolving mapping discrepancies.
  `,
  Accenture: `
    <strong>Company:</strong> Accenture (Dec 2017 - Jun 2019)<br>
    <strong>Role:</strong> Application Development Associate (Client: AT&T)<br><br>
    <strong>Detailed Technical Actions:</strong><br>
    • Provided level-2 support for large enterprise Salesforce systems with 5,000+ internal users.<br>
    • Configured out-of-the-box Salesforce automations including Validation Rules, Process Builders, and early Flow builders.<br>
    • Assisted QA automation streams by scripting end-to-end tests inside the <strong>Robot Framework</strong>.
  `
};


/* ==========================================================================
   INTERACTIVE FEATURES IMPLEMENTATION
   ========================================================================== */

// 1. Typewriter Animation (Hero Section)
function initTypewriter() {
  const words = ["Apex & LWC Solutions", "Custom Integrations", "Sales, Service & Marketing Cloud", "DevOps & CI/CD Pipelines"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const element = document.getElementById('typewriter');
  
  if (!element) return;
  
  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }
    
    element.innerHTML = currentWord.substring(0, charIndex);
    
    let speed = 100;
    if (isDeleting) speed /= 2;
    
    if (!isDeleting && charIndex === currentWord.length) {
      speed = 2000; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 500; // Pause before next word
    }
    
    setTimeout(type, speed);
  }
  
  type();
}

// 2. Dark / Light Theme Toggle
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;
  
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Update button icon
    const icon = themeToggle.querySelector('i');
    if (newTheme === 'light') {
      icon.className = 'fa-solid fa-sun';
    } else {
      icon.className = 'fa-solid fa-moon';
    }
  });
}

// 3. Switch between Modern Layout and Salesforce Console Layout
function initLayoutToggle() {
  const btnModern = document.getElementById('btn-modern-mode');
  const btnSalesforce = document.getElementById('btn-salesforce-mode');
  const modernView = document.getElementById('modern-view');
  const salesforceView = document.getElementById('salesforce-view');
  
  if (!btnModern || !btnSalesforce) return;
  
  btnModern.addEventListener('click', () => {
    btnModern.classList.add('active');
    btnSalesforce.classList.remove('active');
    modernView.classList.add('active');
    salesforceView.classList.remove('active');
    
    // Trigger progress bar animations for modern view
    animateProgressFills();
  });
  
  btnSalesforce.addEventListener('click', () => {
    btnSalesforce.classList.add('active');
    btnModern.classList.remove('active');
    salesforceView.classList.add('active');
    modernView.classList.remove('active');
  });
}

// 4. Skills progress bar fill animations
function initSkillsObserver() {
  // Animate on load / scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateProgressFills();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  const skillsCard = document.querySelector('.skills-card');
  if (skillsCard) {
    observer.observe(skillsCard);
  }
}

function animateProgressFills() {
  const fills = document.querySelectorAll('.progress-fill');
  fills.forEach(fill => {
    const targetWidth = fill.style.width || fill.getAttribute('data-width');
    if (targetWidth) {
      fill.style.width = '0';
      setTimeout(() => {
        fill.style.width = targetWidth;
      }, 100);
    }
  });
}

// 5. Timeline experience keyword filter
function initTimelineFilter() {
  const tags = document.querySelectorAll('.filter-tag');
  const items = document.querySelectorAll('.timeline-item');
  
  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      // Toggle active tags class
      tags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
      
      const filterValue = tag.getAttribute('data-filter');
      
      items.forEach(item => {
        const itemSkills = item.getAttribute('data-skills');
        
        if (filterValue === 'all') {
          item.classList.remove('filtered-out', 'highlighted');
        } else if (itemSkills && itemSkills.includes(filterValue)) {
          item.classList.remove('filtered-out');
          item.classList.add('highlighted');
        } else {
          item.classList.remove('highlighted');
          item.classList.add('filtered-out');
        }
      });
    });
  });
}

// 6. Salesforce CRM Console View Tab Swappings
function initSfConsoleTabs() {
  const sidebarItems = document.querySelectorAll('.sf-nav-item');
  const tabs = document.querySelectorAll('.sf-tab');
  const contents = document.querySelectorAll('.sf-tab-content');
  
  function switchTab(tabId) {
    // 1. Sidebar selection updates
    sidebarItems.forEach(item => {
      if (item.getAttribute('data-tab') === tabId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
    
    // 2. Tab Bar header updates
    tabs.forEach(tab => {
      if (tab.getAttribute('data-tab') === tabId) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
    
    // 3. Tab contents active states toggling
    contents.forEach(content => {
      if (content.id === `tab-${tabId}`) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  }
  
  // Sidebar clicks
  sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      const tabId = item.getAttribute('data-tab');
      switchTab(tabId);
    });
  });
  
  // Tab strip clicks
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-tab');
      switchTab(tabId);
    });
  });
}

// Salesforce experience drawer functions
function viewSfExperienceDetails(companyKey) {
  const drawer = document.getElementById('sf-experience-details-box');
  const content = document.getElementById('sf-drawer-content');
  const title = document.getElementById('sf-drawer-company-title');
  
  if (!drawer || !content || !title) return;
  
  title.innerText = `${companyKey} Record Details`;
  content.innerHTML = EXPERIENCE_DETAILS[companyKey] || 'Record not found.';
  drawer.style.display = 'block';
  drawer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeSfDrawer() {
  const drawer = document.getElementById('sf-experience-details-box');
  if (drawer) {
    drawer.style.display = 'none';
  }
}

// 7. Einstein Chatbot Interactivity logic
function initEinsteinChat() {
  const trigger = document.getElementById('chat-trigger');
  const windowEl = document.getElementById('chat-window');
  const closeBtn = document.getElementById('chat-close');
  const body = document.getElementById('chat-body');
  const suggestionBtns = document.querySelectorAll('.suggest-btn');
  
  if (!trigger || !windowEl || !closeBtn || !body) return;
  
  // Toggle Floating Window
  trigger.addEventListener('click', () => {
    windowEl.classList.toggle('active');
  });
  
  closeBtn.addEventListener('click', () => {
    windowEl.classList.remove('active');
  });
  
  // Click suggest options
  suggestionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const queryType = btn.getAttribute('data-query');
      const questionText = btn.innerText;
      
      handleChatQuery(questionText, queryType, body);
    });
  });
}

// Shared chatbot query function for both layouts
function handleChatQuery(question, queryType, bodyContainer) {
  // 1. Append user message
  appendMsg(question, 'user', bodyContainer);
  
  // 2. Append typing indicator
  const indicator = appendTypingIndicator(bodyContainer);
  bodyContainer.scrollTop = bodyContainer.scrollHeight;
  
  // 3. Simulated response delay
  setTimeout(() => {
    // Remove indicator
    indicator.remove();
    
    // Fetch response
    const answer = RESUME_DATA[queryType] || "I don't have details on that. Try clicking another suggestion!";
    appendMsg(answer, 'bot', bodyContainer);
    bodyContainer.scrollTop = bodyContainer.scrollHeight;
  }, 1200);
}

function appendMsg(text, type, container) {
  const msg = document.createElement('div');
  msg.className = `chat-msg ${type}`;
  msg.innerHTML = text;
  container.appendChild(msg);
}

function appendTypingIndicator(container) {
  const indicator = document.createElement('div');
  indicator.className = 'chat-msg bot typing-indicator';
  indicator.innerHTML = `
    <span class="typing-dot"></span>
    <span class="typing-dot"></span>
    <span class="typing-dot"></span>
  `;
  container.appendChild(indicator);
  return indicator;
}

// 8. Salesforce View Tab Chatbot wrapper
function askEinstein(queryType) {
  const chatMessages = document.getElementById('sf-console-chat-messages');
  if (!chatMessages) return;
  
  let question = "Tell me about Tejashwini";
  if (queryType === 'summary') question = "Can you summarize her experience?";
  if (queryType === 'lwc') question = "Explain her Apex and LWC capabilities.";
  if (queryType === 'integrations') question = "Tell me about her Integrations background.";
  if (queryType === 'certifications') question = "What certifications does she have?";
  
  // We use the same central utility
  appendMsg(question, 'user', chatMessages);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  const indicator = appendTypingIndicator(chatMessages);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  setTimeout(() => {
    indicator.remove();
    const answer = RESUME_DATA[queryType] || "Record not found.";
    appendMsg(answer, 'system', chatMessages); // In SF console we style bot as 'system' bubble
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1000);
}
