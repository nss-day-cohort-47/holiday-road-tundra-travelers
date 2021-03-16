const buildDropDown = () => {
    return `
    <div class="dropSpan">
    <select>
        <option value="select" id="sel" selected> Select an eatery</option>
        <option value="test" id="e1">Test 1</option>
        <option value="test2" id="e2">Test 2 </option>
        <option value="test3" id="e3">Test 3 </option>
        <option value="test4" id="e4"><a></a>Test 4 </option>
    </select>
    <select>
    <option value="select" id="bizSelect" selected> Select An Attraction</option>
        <option value="test" id="b1">Test 1</option>
        <option value="test2" id="b2">Test 2 </option>
        <option value="test3" id="b3">Test 3 </option>
        <option value="test4" id="b4">Test 4 </option>
    </select>
    <select>
        <option value="select" id="desSel" selected> Select A Park</option>
        <option value="test" id="d1">Test 1</option>
        <option value="test2" id="d2">Test 2 </option>
        <option value="test3" id="d3">Test 3 </option>
        <option value="test4" id="d4">Test 4 </option>
    </select>
    </div>`
}

export const sendDropDownToDom = () => {
    const domRep = document.querySelector(".dropDown");
    domRep.innerHTML += buildDropDown()
}
//change lines 12 and 19 back to Bizarry and Destination respectively once done building them out