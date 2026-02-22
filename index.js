$(document).ready(function() {
    let balance = Number(localStorage.getItem('balance')) || 10000;
    let risk = Number(localStorage.getItem('risk')) || 2;

    let risk_amount = balance * risk / 100;

    $("#balanceInput").val(balance);
    $("#riskInput").val(risk);
    $("#balanceText").text(balance.toLocaleString());
    $("#riskText").text(risk);

    const symbolConfig = {
        EURUSD: { pipMultiplier: 10000, pipValue: 10 },
        GBPUSD: { pipMultiplier: 10000, pipValue: 10 },
        AUDUSD: { pipMultiplier: 10000, pipValue: 10 },
        USDJPY: { pipMultiplier: 100, pipValue: 9 },
        XAUUSD: { pipMultiplier: 10, pipValue: 1 },
        BTCUSD: { pipMultiplier: 1, pipValue: 1 }
    };

    // tab
    const tabs = [
        {
            id: "1",
            title: "XAUUSD",
            content: `
                <div class="col-1">
                    <div class="trade-summary">
                        <div class="summary-title">Trade Summary</div>

                        <div class="summary-row">
                            <span>Symbol</span>
                            <b>XAUUSD</b>
                        </div>
                    
                        <div class="summary-row">
                            <span>Stop Loss</span>
                            <b class="sum_sl">0 pips</b>
                        </div>
                    
                        <div class="summary-row big">
                            <span>Lot Size</span>
                            <b class="sum_lot">0.00</b>
                        </div>
                    </div>

                    <div class="calc-card">
                        <div class="calc-section">
                            <div class="section-title">From Stop Loss (pips)</div>
                            
                            <label>Stop Loss (pips)</label>
                            <input type="number" class="stoploss" placeholder="e.g. 150">
                        
                            <div class="hint">Enter SL distance in pips</div>
                        </div>
                        
                        <div class="divider">OR</div>
                        
                        <div class="calc-section">
                            <div class="section-title">From Prices</div>
                        
                            <label>Open Price</label>
                            <input class="price openprice" type="number" placeholder="e.g. 2350">
                        
                            <label>Stop Loss Price</label>
                            <input class="price stoploss_price" type="number" placeholder="e.g. 2335">
                        
                            <button class="calculate">Calculate Pips</button>
                        </div>
                    </div>
                </div>

                <div class="side-card tv-card">
                    <div class="iframe-clip">
                        <iframe
                            class="tv-frame"
                            src="https://s.tradingview.com/widgetembed/?symbol=OANDA:XAUUSD&interval=60&theme=light&style=1&timezone=Asia/Bangkok"
                            allowtransparency="true"
                            scrolling="no">
                        </iframe>
                    </div>
                </div>
            `
        },
        {
            id: "2",
            title: "BTCUSD",
            content: `
                <div class="col-1">
                    <div class="trade-summary">
                        <div class="summary-title">Trade Summary</div>

                        <div class="summary-row">
                            <span>Symbol</span>
                            <b>BTCUSD</b>
                        </div>
                    
                        <div class="summary-row">
                            <span>Stop Loss</span>
                            <b class="sum_sl">0 pips</b>
                        </div>
                    
                        <div class="summary-row big">
                            <span>Lot Size</span>
                            <b class="sum_lot">0.00</b>
                        </div>
                    </div>

                    <div class="calc-card">
                        <div class="calc-section">
                            <div class="section-title">From Stop Loss (pips)</div>
                            
                            <label>Stop Loss (pips)</label>
                            <input type="number" class="stoploss" placeholder="e.g. 150">
                        
                            <div class="hint">Enter SL distance in pips</div>
                        </div>
                        
                        <div class="divider">OR</div>
                        
                        <div class="calc-section">
                            <div class="section-title">From Prices</div>
                        
                            <label>Open Price</label>
                            <input class="price openprice" type="number" placeholder="e.g. 2350">
                        
                            <label>Stop Loss Price</label>
                            <input class="price stoploss_price" type="number" placeholder="e.g. 2335">
                        
                            <button class="calculate">Calculate Pips</button>
                        </div>
                    </div>
                </div>

                <div class="side-card tv-card">
                    <div class="iframe-clip">
                        <iframe
                            class="tv-frame"
                            src=""
                            allowtransparency="true"
                            scrolling="no">
                        </iframe>
                    </div>
                </div>
            `
        },
        {
            id: "3",
            title: "EURUSD",
            content: `
                <div class="col-1">
                    <div class="trade-summary">
                        <div class="summary-title">Trade Summary</div>

                        <div class="summary-row">
                            <span>Symbol</span>
                            <b>EURUSD</b>
                        </div>
                    
                        <div class="summary-row">
                            <span>Stop Loss</span>
                            <b class="sum_sl">0 pips</b>
                        </div>
                    
                        <div class="summary-row big">
                            <span>Lot Size</span>
                            <b class="sum_lot">0.00</b>
                        </div>
                    </div>

                    <div class="calc-card">
                        <div class="calc-section">
                            <div class="section-title">From Stop Loss (pips)</div>
                            
                            <label>Stop Loss (pips)</label>
                            <input type="number" class="stoploss" placeholder="e.g. 150">
                        
                            <div class="hint">Enter SL distance in pips</div>
                        </div>
                        
                        <div class="divider">OR</div>
                        
                        <div class="calc-section">
                            <div class="section-title">From Prices</div>
                        
                            <label>Open Price</label>
                            <input class="price openprice" type="number" placeholder="e.g. 2350">
                        
                            <label>Stop Loss Price</label>
                            <input class="price stoploss_price" type="number" placeholder="e.g. 2335">
                        
                            <button class="calculate">Calculate Pips</button>
                        </div>
                    </div>
                </div>

                <div class="side-card tv-card">
                    <div class="iframe-clip">
                        <iframe
                            class="tv-frame"
                            src=""
                            allowtransparency="true"
                            scrolling="no">
                        </iframe>
                    </div>
                </div>
          `
        },
            {
            id: "4",
            title: "GBPUSD",
            content: `
                            <div class="col-1">
                    <div class="trade-summary">
                        <div class="summary-title">Trade Summary</div>

                        <div class="summary-row">
                            <span>Symbol</span>
                            <b>GBPUSD</b>
                        </div>
                    
                        <div class="summary-row">
                            <span>Stop Loss</span>
                            <b class="sum_sl">0 pips</b>
                        </div>
                    
                        <div class="summary-row big">
                            <span>Lot Size</span>
                            <b class="sum_lot">0.00</b>
                        </div>
                    </div>

                    <div class="calc-card">
                        <div class="calc-section">
                            <div class="section-title">From Stop Loss (pips)</div>
                            
                            <label>Stop Loss (pips)</label>
                            <input type="number" class="stoploss" placeholder="e.g. 150">
                        
                            <div class="hint">Enter SL distance in pips</div>
                        </div>
                        
                        <div class="divider">OR</div>
                        
                        <div class="calc-section">
                            <div class="section-title">From Prices</div>
                        
                            <label>Open Price</label>
                            <input class="price openprice" type="number" placeholder="e.g. 2350">
                        
                            <label>Stop Loss Price</label>
                            <input class="price stoploss_price" type="number" placeholder="e.g. 2335">
                        
                            <button class="calculate">Calculate Pips</button>
                        </div>
                    </div>
                </div>

                <div class="side-card tv-card">
                    <div class="iframe-clip">
                        <iframe
                            class="tv-frame"
                            src=""
                            allowtransparency="true"
                            scrolling="no">
                        </iframe>
                    </div>
                </div>
          `
        },
        {
            id: "5",
            title: "USDJPY",
            content: `
                <div class="col-1">
                    <div class="trade-summary">
                        <div class="summary-title">Trade Summary</div>

                        <div class="summary-row">
                            <span>Symbol</span>
                            <b>USDJPY</b>
                        </div>
                    
                        <div class="summary-row">
                            <span>Stop Loss</span>
                            <b class="sum_sl">0 pips</b>
                        </div>
                    
                        <div class="summary-row big">
                            <span>Lot Size</span>
                            <b class="sum_lot">0.00</b>
                        </div>
                    </div>

                    <div class="calc-card">
                        <div class="calc-section">
                            <div class="section-title">From Stop Loss (pips)</div>
                            
                            <label>Stop Loss (pips)</label>
                            <input type="number" class="stoploss" placeholder="e.g. 150">
                        
                            <div class="hint">Enter SL distance in pips</div>
                        </div>
                        
                        <div class="divider">OR</div>
                        
                        <div class="calc-section">
                            <div class="section-title">From Prices</div>
                        
                            <label>Open Price</label>
                            <input class="price openprice" type="number" placeholder="e.g. 2350">
                        
                            <label>Stop Loss Price</label>
                            <input class="price stoploss_price" type="number" placeholder="e.g. 2335">
                        
                            <button class="calculate">Calculate Pips</button>
                        </div>
                    </div>
                </div>

                <div class="side-card tv-card">
                    <div class="iframe-clip">
                        <iframe
                            class="tv-frame"
                            src=""
                            allowtransparency="true"
                            scrolling="no">
                        </iframe>
                    </div>
                </div>
          `
        },
        {
            id: "6",
            title: "AUDUSD",
            content: `
                <div class="col-1">
                    <div class="trade-summary">
                        <div class="summary-title">Trade Summary</div>

                        <div class="summary-row">
                            <span>Symbol</span>
                            <b>AUDUSD</b>
                        </div>
                    
                        <div class="summary-row">
                            <span>Stop Loss</span>
                            <b class="sum_sl">0 pips</b>
                        </div>
                    
                        <div class="summary-row big">
                            <span>Lot Size</span>
                            <b class="sum_lot">0.00</b>
                        </div>
                    </div>

                    <div class="calc-card">
                        <div class="calc-section">
                            <div class="section-title">From Stop Loss (pips)</div>
                            
                            <label>Stop Loss (pips)</label>
                            <input type="number" class="stoploss" placeholder="e.g. 150">
                        
                            <div class="hint">Enter SL distance in pips</div>
                        </div>
                        
                        <div class="divider">OR</div>
                        
                        <div class="calc-section">
                            <div class="section-title">From Prices</div>
                        
                            <label>Open Price</label>
                            <input class="price openprice" type="number" placeholder="e.g. 2350">
                        
                            <label>Stop Loss Price</label>
                            <input class="price stoploss_price" type="number" placeholder="e.g. 2335">
                        
                            <button class="calculate">Calculate Pips</button>
                        </div>
                    </div>
                </div>

                <div class="side-card tv-card">
                    <div class="iframe-clip">
                        <iframe
                            class="tv-frame"
                            src=""
                            allowtransparency="true"
                            scrolling="no">
                        </iframe>
                    </div>
                </div>
          `
        }
    ];
      
    $(function() {
        tabs.forEach((t, i) => {
            $(".tabs").append(
            `<button class="tab ${i===0?'active':''}" data-tab="${t.id}">
                ${t.title}
            </button>`
            );
        
            $(".tab-contents").append(
            `<div id="${t.id}" class="tab-content ${i===0?'active':''}" data-symbol="${t.title}">
                ${t.content}
            </div>`
            );
        });
        
        $(document).on("click", ".tab", function () {

            const id = $(this).data("tab");
            const tab = $("#" + id);
        
            // active tab
            $(".tab, .tab-content").removeClass("active");
            $(this).addClass("active");
            tab.addClass("active");
        
            // ===== TradingView dynamic =====
            const symbol = tab.data("symbol"); // XAUUSD BTCUSD
            const iframe = tab.find(".tv-frame");
        
            const tvSymbolMap = {
                XAUUSD: "OANDA:XAUUSD",
                BTCUSD: "BINANCE:BTCUSDT",
                EURUSD: "FX:EURUSD",
                GBPUSD: "FX:GBPUSD",
                USDJPY: "FX:USDJPY",
                AUDUSD: "FX:AUDUSD"
            };
        
            const tvSymbol = tvSymbolMap[symbol];
        
            const newSrc =
                `https://s.tradingview.com/widgetembed/?symbol=${tvSymbol}&interval=60&theme=light&style=1&timezone=Asia/Bangkok`;
        
            iframe.attr("src", newSrc);
        });

        $(document).on('input', '.stoploss', function () {

            const tab = $(this).closest('.tab-content');
            const pip = parseFloat($(this).val());
          
            if (!pip) {
              tab.find('.sum_lot').text('0.00');
              tab.find('.sum_sl').text('0 pips');
              return;
            }
          
            const lot = calcLot(tab, pip);
            tab.find('.sum_lot').text(lot.toFixed(2));
            tab.find('.sum_sl').text(pip + ' pips');
        });

        $(document).on('click', '.calculate', function () {
            const tab = $(this).closest('.tab-content');
          
            const open = parseFloat(tab.find('.openprice').val());
            const sl   = parseFloat(tab.find('.stoploss_price').val());
          
            if (!open || !sl) return;
          
            const symbol = tab.data('symbol');
            const cfg = symbolConfig[symbol];
          
            const pip = Math.abs(open - sl) * cfg.pipMultiplier;
          
            const lot = calcLot(tab, pip);
          
            tab.find('.sum_lot').text(lot.toFixed(2));
            tab.find('.sum_sl').text(pip + ' pips');
        });
    });

    // balance button
    $("#editBtn").on("click", function () {
        $(".view-mode").hide();
        $(".edit-mode").css("display", "flex");
    });
    
    $("#saveBtn").on("click", function () {
        balance = Number($("#balanceInput").val());
        risk = Number($("#riskInput").val());
    
        // save localStorage
        localStorage.setItem('balance', balance);
        localStorage.setItem('risk', risk);
    
        $("#balanceText").text(balance.toLocaleString());
        $("#riskText").text(risk);
    
        $(".edit-mode").hide();
        $(".view-mode").css("display", "flex");
    });

    function calcLot(tabEl, pip) {
        const symbol = tabEl.data('symbol');
        const cfg = symbolConfig[symbol];
      
        if (!cfg || pip <= 0) return 0;
      
        return risk_amount / (pip * cfg.pipValue);
    }
});