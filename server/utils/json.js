module.exports = {
    json: json
};
///////////////////////////////////////////

/**
 *
 * 辅助返回json
 *
 * @param res
 * @param status
 * @param data
 * @param code
 * @private
 */
function json(res, data/*, code, msg*/) {
    //var result = {
    //    code: code || 10000,
    //    msg: msg || '',
    //    data: data
    //};
    res.status(200).send(data);
}

////////////////////////////////////////
