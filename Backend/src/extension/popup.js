document.getElementById("saveBtn").onclick = async () => {

    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    })

    const result = await chrome.scripting.executeScript({

        target: { tabId: tab.id },

        func: () => {

            const selectedText = window.getSelection().toString()

            return {

                title: document.title,

                content: selectedText || document.title,

                url: window.location.href

            }

        }

    })

    const data = result[0].result

    await fetch("http://localhost:9000/api/items/save", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)

    })

    alert("Saved")

}