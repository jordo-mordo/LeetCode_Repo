/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    s = s.split('');
    t = t.split('');
    const sMap = {};
    const tMap = {};
    let result = true;
    
    s.forEach((char, index) => {
        let c1 = char;
        let c2 = t[index];
        
        if ((sMap[c1] && sMap[c1] !== c2) || (tMap[c2] && tMap[c2] !== c1)) {
            result = false;
        }
        sMap[c1] = c2;
        tMap[c2] = c1;
    })
    
    console.log(JSON.stringify(sMap),'\n',JSON.stringify(tMap))
    return result;
};