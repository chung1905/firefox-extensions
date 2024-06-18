document.addEventListener('click', (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;  // allow normal click-to-edit when key is held
        }
        let e = event.target;
        if (e.tagName === 'A') {
            return;  // allow normal click on normal hyperlinks
        }
        while (e !== document) {
            const aa = e.attributes;
            for (let i = 0; i < aa.length; ++i) {
                const a = aa[i];
                if (a.name === 'data-component-selector'
                    && a.value === 'jira.issue-view.common.inline-edit.compact-wrapper-control'
                    && e.tagName !== 'SPAN'
                ) {
                    // This is an attempt to cleanly match relevant elements (comments, description) despite class obfuscation.
                    // Excluding <span> avoids inhibiting clicks on attach/link buttons.

                    console.log("CLICKED TO NOT EDIT, hold ctrl/cmd if you really want the thing to happen");
                    event.preventDefault();
                    event.stopPropagation();
                    return false;
                }
            }
            e = e.parentNode;
        }
    },
    {capture: true}
)
