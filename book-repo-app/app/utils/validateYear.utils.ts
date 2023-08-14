export const validateYear = (_data: string) => {
    let _thisYear = 9999;

    if (_data.length != 4) return false;
    if (!_data.match(/\d{4}/)) return false;
    if (parseInt(_data) > _thisYear || parseInt(_data) < 1000)
        return false;
    return true;
}