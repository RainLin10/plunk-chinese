// ==UserScript==
// @name         Plunk 中文汉化插件
// @namespace    https://github.com/RainLin10/plunk-chinese
// @version      0.1.0
// @description  将 Plunk 后台常见英文界面汉化为中文
// @author       OpenVideoMaker
// @match        https://*.useplunk.com/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    /**
     * 说明：
     * 1. 本脚本只替换页面上可见的英文文案，不会修改你的 Plunk 数据。
     * 2. 不会翻译 API Key、域名、邮箱、SMTP 地址等真实配置值。
     * 3. 如果你的 Plunk 后台地址不是 useplunk.com，请修改上面的 @match。
     */

    const DICT = Object.freeze({
        // Sidebar
        "Dashboard": "控制台",
        "Contacts": "联系人",
        "Segments": "分组",
        "Activity": "活动",
        "Analytics": "数据分析",
        "AUTOMATIONS": "自动化",
        "Templates": "模板",
        "Workflows": "工作流",
        "Campaigns": "营销活动",
        "Documentation": "文档",
        "Settings": "设置",

        // Common
        "All": "全部",
        "Email": "邮箱",
        "Role": "角色",
        "Owner": "所有者",
        "You": "你",
        "Healthy": "正常",
        "Verified": "已验证",
        "Enabled": "已启用",
        "Recommended": "推荐",
        "Save Changes": "保存更改",
        "Cancel": "取消",
        "Delete": "删除",
        "Confirm": "确认",
        "Create": "创建",
        "Update": "更新",
        "Edit": "编辑",
        "Remove": "移除",
        "Close": "关闭",
        "Copy": "复制",
        "Password": "密码",
        "Username": "用户名",
        "Domain": "域名",

        // Dashboard
        "Upgrade to remove Plunk branding": "升级以移除 Plunk 品牌标识",
        "Your emails currently include Plunk branding. Upgrade to a subscription to remove it.": "你当前发送的邮件会包含 Plunk 品牌标识。升级订阅后可移除。",
        "Upgrade Now": "立即升级",
        "Total Contacts": "联系人总数",
        "Emails Sent": "已发送邮件",
        "Open Rate": "打开率",
        "Quick Start": "快速开始",
        "Get started with Plunk in minutes": "几分钟内开始使用 Plunk",
        "Add Your First Contacts": "添加第一批联系人",
        "Import your subscriber list to start sending emails": "导入订阅用户列表后即可开始发送邮件",
        "Add Contacts": "添加联系人",
        "Upgrade Your Plan": "升级套餐",
        "Remove Plunk branding and unlock more features": "移除 Plunk 品牌标识并解锁更多功能",
        "Upgrade": "升级",
        "Need help?": "需要帮助？",
        "Join Discord": "加入 Discord",
        "Email support": "邮件支持",
        "API Keys": "API 密钥",
        "Use these keys to integrate with Plunk": "使用这些密钥集成 Plunk",
        "Public Key": "公开密钥",
        "Use this key for client-side integrations": "此密钥用于客户端集成",
        "Secret Key": "私密密钥",
        "Keep this key secure and never expose it publicly": "请妥善保管此密钥，不要公开暴露",

        // Contacts
        "Manage your email subscribers and their data.": "管理你的邮件订阅用户及其数据。",
        "Search by email...": "按邮箱搜索...",
        "Import CSV": "导入 CSV",
        "Add Contact": "添加联系人",
        "All Contacts": "所有联系人",
        "View and manage your contact list.": "查看并管理你的联系人列表。",
        "No contacts yet": "暂无联系人",
        "Add contacts to start tracking engagement.": "添加联系人后即可开始追踪互动数据。",

        // Segments
        "Create dynamic audience groups based on contact attributes and behaviors": "根据联系人属性和行为创建动态用户分组",
        "Search segments...": "搜索分组...",
        "No segments yet": "暂无分组",
        "Group contacts by attributes to target specific audiences.": "按属性对联系人分组，以便精准触达特定用户。",
        "Create Segment": "创建分组",

        // Activity
        "Real-time overview of events, emails, and workflow executions across your project.": "实时查看项目中的事件、邮件和工作流执行情况。",
        "Events Triggered": "已触发事件",
        "Click Rate": "点击率",
        "All Activity Types": "全部活动类型",
        "Recent Activity": "最近活动",
        "Live feed of all activities happening across your project. Updates automatically as new activities occur.": "实时展示项目中的全部活动。发生新活动时会自动更新。",
        "No activity yet": "暂无活动",
        "Events will appear here as contacts interact with your emails.": "当联系人与你的邮件互动时，事件会显示在这里。",

        // Analytics
        "Comprehensive insights into your email performance, engagement metrics, and delivery statistics.": "全面了解邮件表现、互动指标和投递统计。",
        "Last 7 days": "最近 7 天",
        "Last 30 days": "最近 30 天",
        "Last 90 days": "最近 90 天",
        "Last 7 Days": "最近 7 天",
        "Last 30 Days": "最近 30 天",
        "Last 90 Days": "最近 90 天",
        "Total Emails": "邮件总数",
        "Active Campaigns": "活跃营销活动",
        "Total Events": "事件总数",
        "Automations triggered": "已触发自动化",
        "Custom events tracked": "已追踪自定义事件",
        "Email Volume Trends": "邮件发送趋势",
        "Daily email sends, opens, and clicks over the selected period": "所选时间段内每日邮件发送、打开和点击趋势",
        "No email data yet": "暂无邮件数据",
        "Send your first email to see analytics here.": "发送第一封邮件后即可在这里查看分析数据。",

        // Templates
        "Email Templates": "邮件模板",
        "Create and manage reusable email templates for your campaigns and workflows.": "创建并管理可复用的邮件模板，用于营销活动和工作流。",
        "Search templates...": "搜索模板...",
        "Marketing": "营销",
        "Transactional": "交易类",
        "Headless": "无头模式",
        "No templates yet": "暂无模板",
        "Create reusable email designs for campaigns.": "为营销活动创建可复用的邮件设计。",
        "Create Template": "创建模板",

        // Workflows
        "Automate your email campaigns with powerful workflows.": "使用强大的工作流自动化你的邮件营销。",
        "Search workflows...": "搜索工作流...",
        "No workflows yet": "暂无工作流",
        "Automate emails triggered by contact events.": "根据联系人事件自动触发邮件。",
        "Create Workflow": "创建工作流",

        // Campaigns
        "Send one-time email broadcasts to your contacts.": "向联系人发送一次性邮件广播。",
        "All Statuses": "全部状态",
        "Draft": "草稿",
        "Scheduled": "已计划",
        "Sending": "发送中",
        "Sent": "已发送",
        "Cancelled": "已取消",
        "No campaigns yet": "暂无营销活动",
        "Send one-off emails to groups of contacts.": "向联系人分组发送一次性邮件。",
        "Create Campaign": "创建营销活动",

        // Settings tabs
        "General": "常规",
        "Team": "团队",
        "Security": "安全",
        "Billing": "账单",
        "Domains": "域名",
        "SMTP": "SMTP",
        "Data": "数据",
        "Manage your project settings and preferences": "管理你的项目设置和偏好",

        // Settings - General
        "Project Settings": "项目设置",
        "Update your project name and basic information": "更新项目名称和基础信息",
        "Project Name": "项目名称",
        "Email Tracking": "邮件追踪",
        "Control how email opens and clicks are tracked for this project.": "控制此项目如何追踪邮件打开和点击。",
        "Customer Language": "客户语言",
        "Language for customer-facing pages (unsubscribe, preferences) and email footers.": "用于面向客户的页面（取消订阅、偏好设置）和邮件页脚的语言。",
        "API Credentials": "API 凭证",
        "Use these keys to integrate with the Plunk API": "使用这些密钥集成 Plunk API",
        "Public API Key": "公开 API 密钥",
        "Secret API Key": "私密 API 密钥",
        "Regenerate Keys": "重新生成密钥",

        // Danger Zone
        "Danger Zone": "危险区域",
        "Irreversible actions that affect your project data": "会影响项目数据且不可逆的操作",
        "Reset Project Data": "重置项目数据",
        "Clear all campaigns, contacts, workflows, templates, and events. This gives you a blank project to start fresh.": "清空所有营销活动、联系人、工作流、模板和事件。项目会恢复为空白状态。",
        "Preserved: API keys, domains, billing information": "保留内容：API 密钥、域名、账单信息",
        "Reset Data": "重置数据",
        "Delete Project Permanently": "永久删除项目",
        "Permanently delete this project and all associated data. This action cannot be undone.": "永久删除此项目及所有相关数据。此操作无法撤销。",
        "This action cannot be undone.": "此操作无法撤销。",
        "Permanent Deletion": "永久删除",
        "All data will be lost": "所有数据都将丢失",

        // Team
        "Team Members": "团队成员",
        "Manage who has access to this project": "管理谁可以访问此项目",
        "Add Member": "添加成员",

        // Security
        "Security Overview": "安全概览",
        "Your project is in good standing": "你的项目状态良好",
        "All security metrics are within acceptable levels. Keep up the good work!": "所有安全指标都在可接受范围内。继续保持！",
        "Bounce Rate": "退信率",
        "Hard bounces indicate invalid or non-existent email addresses": "硬退信通常表示邮箱地址无效或不存在",
        "All Time": "全部时间",
        "Complaint Rate": "投诉率",
        "Complaints occur when recipients mark emails as spam": "当收件人将邮件标记为垃圾邮件时，会产生投诉记录",

        // Billing
        "Billing & Subscription": "账单与订阅",
        "Manage your subscription and billing information": "管理你的订阅和账单信息",
        "No Active Subscription": "暂无有效订阅",
        "Start a subscription and support the development of Plunk. You will be charged a one-time onboarding fee which will be credited to your first invoice.": "开始订阅并支持 Plunk 的开发。你将被收取一次性入门费用，该费用会抵扣到你的第一张账单中。",
        "Start Subscription": "开始订阅",
        "Select a different currency": "选择其他货币",
        "Billing Limits": "账单额度",
        "Free tier projects have a total limit of 1,000 emails per month across all categories.": "免费版项目每月所有类别合计最多可发送 1,000 封邮件。",
        "You're on the free tier with 1,000 emails per month. Upgrade to a paid subscription for unlimited emails or custom limits.": "你当前使用免费版，每月可发送 1,000 封邮件。升级付费订阅可获得无限邮件或自定义额度。",
        "Total Emails (All Categories)": "邮件总数（所有类别）",
        "Usage This Month": "本月用量",
        "View your current month email consumption and costs": "查看本月邮件消耗和费用",
        "Usage tracking is only available with an active subscription. Start a subscription to track your email consumption.": "用量追踪仅对有效订阅开放。开始订阅后即可追踪邮件消耗。",
        "Past Invoices": "历史账单",
        "View and download your billing history": "查看并下载你的账单历史",
        "Invoice history is only available with an active subscription. Start a subscription to view your invoices.": "历史账单仅对有效订阅开放。开始订阅后即可查看账单。",

        // Domains
        "Add Domain": "添加域名",
        "Add a custom domain to send emails from": "添加用于发信的自定义域名",
        "Your Domains": "你的域名",
        "Manage your verified domains": "管理已验证域名",
        "View DNS Records": "查看 DNS 记录",

        // SMTP
        "SMTP Server Configuration": "SMTP 服务器配置",
        "Send emails through standard email clients using SMTP protocol. Works with Outlook, Thunderbird, and any SMTP-compatible application.": "通过 SMTP 协议使用标准邮件客户端发送邮件。支持 Outlook、Thunderbird 以及任何兼容 SMTP 的应用。",
        "SMTP Server": "SMTP 服务器",
        "Use this hostname in your email client configuration": "在邮件客户端配置中使用此主机名",
        "Port (STARTTLS)": "端口（STARTTLS）",
        "Submission port with STARTTLS encryption": "使用 STARTTLS 加密的提交端口",
        "Port (SSL/TLS)": "端口（SSL/TLS）",
        "Implicit TLS encryption": "隐式 TLS 加密",
        "Authentication Credentials": "认证凭证",
        "Always use \"plunk\" as the username": "用户名始终使用 “plunk”",
        "Use your project secret key as the SMTP password": "使用项目私密密钥作为 SMTP 密码",

        // Data
        "Custom Contact Fields": "自定义联系人字段",
        "Manage custom fields stored in your contact data. You can only delete fields that are not used in any segments or campaigns.": "管理联系人数据中的自定义字段。只能删除未被任何分组或营销活动使用的字段。",
        "No custom fields": "暂无自定义字段",
        "Custom fields appear here once contacts have data properties set via the API.": "当联系人通过 API 设置数据属性后，自定义字段会显示在这里。",
        "Custom Events": "自定义事件",
        "Manage custom events tracked in your project. You can only delete events that are not used in any segments or workflows. System events (email.*, segment.*) cannot be deleted.": "管理项目中追踪的自定义事件。只能删除未被任何分组或工作流使用的事件。系统事件（email.*、segment.*）无法删除。",
        "No custom events": "暂无自定义事件",
        "Custom events appear here once your contacts trigger events via the API.": "当联系人通过 API 触发事件后，自定义事件会显示在这里。",


        // Activity 下拉筛选
        "Events": "事件",
        "Emails": "邮件",
        "Emails Delivered": "邮件已送达",
        "Emails Received": "邮件已接收",
        "Emails Opened": "邮件已打开",
        "Emails Clicked": "邮件已点击",
        "Emails Bounced": "邮件退信",
        "Email Complaints": "邮件投诉",

        // Analytics - engagement / insights
        "Engagement Rate Trends": "互动率趋势",
        "Open rate percentage over time": "打开率随时间变化趋势",
        "No engagement data": "暂无互动数据",
        "Engagement metrics will appear once emails are opened.": "当邮件被打开后，这里会显示互动指标。",

        "Performance Insights": "表现洞察",
        "Key metrics and recommendations": "关键指标与优化建议",
        "Consider improving subject lines to increase open rates.": "可以优化邮件主题，以提高打开率。",
        "Add more compelling calls-to-action to boost clicks.": "增加更有吸引力的行动号召，以提升点击率。",
        "Set up workflows to automate your email campaigns.": "设置工作流来自动化你的邮件营销。",

        "Event Activity": "事件活动",
        "Custom events and triggers": "自定义事件与触发器",
        "Events triggered by your contacts over the last 30 days. These can trigger workflows and automations.": "这是过去 30 天内由联系人触发的事件。这些事件可用于触发工作流和自动化。",

        // Workflow 创建弹窗
        "Create New Workflow": "创建新工作流",
        "Name *": "名称 *",
        "Description": "描述",
        "Trigger Event *": "触发事件 *",
        "e.g., contact.created, email.opened": "例如：contact.created、email.opened",
        "The event that triggers this workflow to start for a contact": "当该事件发生时，将为联系人启动此工作流",
        "Allow Re-entry": "允许重复进入",
        "When enabled, contacts can enter this workflow multiple times.": "启用后，联系人可以多次进入此工作流。",

        // Campaign 创建页
        "Create a new email campaign to send to your contacts": "创建一个新的邮件营销活动并发送给你的联系人",
        "Basic Information": "基本信息",
        "Name and describe your campaign": "填写营销活动名称和描述",
        "Campaign Name *": "营销活动名称 *",
        "e.g., Spring Sale Announcement": "例如：春季促销公告",
        "Internal notes about this campaign": "填写该营销活动的内部备注",

        "Campaign Type": "营销活动类型",
        "Choose how this campaign should be treated": "选择该营销活动的处理方式",
        "Subscribed contacts, includes unsubscribe link": "仅发送给已订阅联系人，包含取消订阅链接",
        "All contacts, no subscription check or footer": "发送给所有联系人，不检查订阅状态，也不附带页脚",
        "Subscribed contacts, no Plunk footer": "仅发送给已订阅联系人，不带 Plunk 页脚",

        "Email Settings": "邮件设置",
        "Configure sender information and subject": "配置发件人信息和邮件主题",
        "From Email *": "发件邮箱 *",
        "From Name": "发件人名称",
        "Reply-To Email": "回复邮箱",
        "Email Subject *": "邮件主题 *",
        "e.g., Introducing our Spring Sale!": "例如：春季促销正式上线！",

        "Email Content": "邮件内容",
        "Design your email message": "设计你的邮件内容",
        "Visual": "可视化",
        "Preview as:": "预览为：",
        "No preview": "无预览",
        "Your next email starts here!": "你的下一封邮件从这里开始！",

        "Audience": "受众",
        "Choose who will receive this campaign": "选择谁会收到这封邮件",
        "Audience Type *": "受众类型 *",
        "All Subscribed Contacts": "所有已订阅联系人",

        // Campaign 选择弹窗 / 下拉
        "Select a Campaign": "选择一个营销活动",
        "Choose a previous campaign to use as a starting point": "选择一个已有营销活动作为起点",
        "All Campaigns": "所有营销活动",
        "No campaigns found": "未找到营销活动",
        "Create your first campaign to get started.": "创建你的第一个营销活动即可开始。",

        "Empty Campaign": "空白营销活动",
        "Start from scratch with a blank canvas": "从空白内容开始创建",
        "From Template": "从模板创建",
        "Use an existing template as a starting point": "使用现有模板作为起点",
        "From Previous Campaign": "从已有营销活动创建",
        "Copy content and settings from an existing campaign": "复制已有营销活动的内容和设置",

        // Segment 创建页
        "Build complex audience filters with AND/OR logic": "使用 AND/OR 逻辑构建复杂的受众筛选条件",
        "Dynamic": "动态",
        "Static": "静态",

        "Segment Details": "分组详情",
        "Give your segment a name and description": "为你的分组填写名称和描述",
        "Segment Name *": "分组名称 *",
        "e.g., VIP Customers or Recent High Spenders": "例如：VIP 客户 或 最近高消费用户",
        "e.g., Users on VIP plan OR recent signups who spent $1000+": "例如：VIP 套餐用户，或最近注册且消费超过 1000 美元的用户",

        "Track membership changes": "追踪成员变动",
        "When enabled, segment entry and exit events will be tracked for use in workflows and analytics": "启用后，将追踪联系人进入/退出分组的事件，可用于工作流和数据分析。",

        "Filter Conditions": "筛选条件",
        "Loading available fields and events...": "正在加载可用字段和事件...",

        // Contact 创建弹窗
        "Create New Contact": "创建新联系人",
        "Email Address *": "邮箱地址 *",
        "Subscribed": "已订阅",
        "Receive emails from campaigns and workflows.": "可接收营销活动和工作流发送的邮件。",
        "Custom Data": "自定义数据",
        "Add Field": "添加字段",
        "No custom fields yet": "暂无自定义字段",
        "Click \"Add Field\" to create custom data fields": "点击“添加字段”来创建自定义数据字段",
        "Create Contact": "创建联系人",

        // Email Tracking 下拉项
        "Disabled": "已禁用",
        "No tracking for any emails": "不追踪任何邮件",
        "Marketing Only": "仅营销邮件",
        "Track only campaigns and workflow emails, not transactional": "仅追踪营销活动和工作流邮件，不追踪交易类邮件",

        // 一些补漏常见词
        "Engagement": "互动",
        "Open rate": "打开率",
        "Click rate": "点击率"
    });

    const IGNORE_TAGS = new Set([
        "SCRIPT",
        "STYLE",
        "NOSCRIPT",
        "TEXTAREA",
        "PRE",
        "CODE"
    ]);

    function normalizeText(text) {
        return String(text || "").replace(/\s+/g, " ").trim();
    }

    function dynamicTranslate(text) {
        let m;

        m = text.match(/^(\d+) opens$/);
        if (m) return `${m[1]} 次打开`;

        m = text.match(/^(\d+) clicks$/);
        if (m) return `${m[1]} 次点击`;

        m = text.match(/^(\d+) total campaigns$/);
        if (m) return `${m[1]} 个营销活动`;

        m = text.match(/^(\d+) \/ ([\d,]+) emails$/);
        if (m) return `${m[1]} / ${m[2]} 封邮件`;

        m = text.match(/^(\d+(?:\.\d+)?)% bounce rate \((\d+) of (\d+) emails\)$/);
        if (m) return `${m[1]}% 退信率（${m[2]} / ${m[3]} 封邮件）`;

        m = text.match(/^(\d+(?:\.\d+)?)% complaint rate \((\d+) of (\d+) emails\)$/);
        if (m) return `${m[1]}% 投诉率（${m[2]} / ${m[3]} 封邮件）`;

        return null;
    }

    function translateRaw(rawText) {
        if (!rawText || !rawText.trim()) return rawText;

        const leading = rawText.match(/^\s*/)?.[0] || "";
        const trailing = rawText.match(/\s*$/)?.[0] || "";
        const core = normalizeText(rawText);

        const translated = DICT[core] || DICT[core.replace(/\s+/g, " ").trim()] || dynamicTranslate(core);

        if (!translated || translated === core) {
            return rawText;
        }

        return leading + translated + trailing;
    }

    function shouldIgnoreTextNode(node) {
        const parent = node.parentElement;
        if (!parent) return true;

        if (IGNORE_TAGS.has(parent.tagName)) return true;

        if (
            parent.closest(
                "script, style, noscript, textarea, pre, code, [contenteditable='true']"
            )
        ) {
            return true;
        }

        return false;
    }

    function translateTextNodes(root) {
        if (!root) return;

        const walker = document.createTreeWalker(
            root,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode(node) {
                    if (shouldIgnoreTextNode(node)) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    if (!node.nodeValue || !node.nodeValue.trim()) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        const nodes = [];
        let node;
        while ((node = walker.nextNode())) {
            nodes.push(node);
        }

        for (const textNode of nodes) {
            const oldValue = textNode.nodeValue;
            const newValue = translateRaw(oldValue);
            if (newValue !== oldValue) {
                textNode.nodeValue = newValue;
            }
        }
    }

    function translateAttributes(root) {
        if (!root || !root.querySelectorAll) return;

        const attrs = ["placeholder", "title", "aria-label"];
        const selector = attrs.map((attr) => `[${attr}]`).join(",");

        const elements = root.querySelectorAll(selector);

        for (const el of elements) {
            for (const attr of attrs) {
                if (!el.hasAttribute(attr)) continue;

                const oldValue = el.getAttribute(attr);
                const newValue = translateRaw(oldValue);

                if (newValue !== oldValue) {
                    el.setAttribute(attr, newValue);
                }
            }
        }
    }

    function translatePage() {
        translateTextNodes(document.body);
        translateAttributes(document.body);

        if (document.title) {
            const newTitle = translateRaw(document.title);
            if (newTitle !== document.title) {
                document.title = newTitle;
            }
        }
    }

    let timer = null;

    function scheduleTranslate() {
        clearTimeout(timer);
        timer = setTimeout(translatePage, 80);
    }

    function startObserver() {
        const observer = new MutationObserver(() => {
            scheduleTranslate();
        });

        observer.observe(document.documentElement, {
            childList: true,
            subtree: true,
            characterData: true,
            attributes: true,
            attributeFilter: ["placeholder", "title", "aria-label"]
        });
    }

    // 首次执行
    translatePage();

    // 监听 React / Next.js 页面切换和异步渲染
    startObserver();

    // 兜底：监听 URL 变化
    let lastUrl = location.href;
    setInterval(() => {
        if (location.href !== lastUrl) {
            lastUrl = location.href;
            scheduleTranslate();
        }
    }, 500);
})();