export default{
    methods : {
        pageCalc(currentPage, total, pageSize = 10, pageUnit = 10) {
            let firstPage = 1;
            let lastPage = //전체건수에서 몇건씩보일건지를 나누고 거기에 나머지가 있으면 +1을 더해
                Math.floor(total / pageUnit) + (total % pageUnit == 0 ? 0 : 1);
            let startIdx = Math.floor((currentPage - 1) / pageSize) * pageSize + 1;
            let endIdx = startIdx + pageSize - 1;
            if (endIdx > lastPage) {
                endIdx = lastPage;
            }
            console.log(currentPage, firstPage, lastPage, startIdx, endIdx);
            return { firstPage, lastPage, startIdx, endIdx };
        }
    }
}