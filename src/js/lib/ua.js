var bbtree = bbtree || {};
bbtree.appInfo = (function(win, doc) {
    var userAgentStr = navigator.userAgent,
        bbtreeStr = (userAgentStr.toLowerCase().indexOf('bbtree') >= 0) ? /bbtree_[MPT](\/\d\.\d\.\d|\/\d\.\d|\/\d)/.exec(userAgentStr)[0] : '',
        bbtreeArr = bbtreeStr.split('/'),
        version_ = bbtreeArr[1] || '0.0.0',
        appType_ = bbtreeArr[0].split('_')[1] || '';
    var BBTreeApp = {
        /*版本号*/
        version: version_,
        /*app类型*/
        appType: appType_,
        /**
         * @param  {[type=Boolean]}
         * @return {使用场景是否在bbtreeapp中,true为在,false为不在}
         */
        isInApp: (function() {
            if (userAgentStr.toLowerCase().indexOf('bbtree') >= 0) {
                return true;
            } else {
                return false;
            }
        })(),
        /**
         * @param  {[type=Boolean]}
         * @return {返回平台类型 'ios' 'android' 'others' 均为string类型}
         */
        platForm: (function() {
            if (!!userAgentStr.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                return 'ios';
            } else if (userAgentStr.indexOf('Android') > -1 || userAgentStr.indexOf('Linux') > -1) {
                return 'android';
            } else {
                return 'others';
            }
        })(),
        /**
         * @param  {[type=Boolean]}
         * @return {是否为ios端,true为是,false为否}
         */
        isIos: (function() {
            if (!!userAgentStr.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                return true;
            } else {
                return false;
            }
        })(),
        /**
         * @param  {[type=Boolean]}
         * @return {是否为安卓端,true为是,false为否}
         */
        isAndroid: (function() {
            if (userAgentStr.indexOf('Android') > -1 || userAgentStr.indexOf('Linux') > -1) {
                return true;
            } else {
                return false
            }
        })(),
        /**
         * @param  {[type=Boolean]}
         * @return {当前版本是否大于传入版本号，传入的参数类型为string}
         */
        isVersionLager: function(ver) {
            var oldVer = ver;
            var nowVer = version_;
            if (this.isInApp && nowVer > oldVer) {
                return true;
            } else {
                return false;
            }
        },
        /**
         * @param  {[type=Boolean]}
         * @return {当前版本是否小于传入版本号，传入的参数类型为string}
         */
        isVersionLess: function(ver) {
            var oldVer = ver;
            var nowVer = version_;
            if (this.isInApp && nowVer < oldVer) {
                return true;
            } else {
                return false;
            }
        },
        /**
         * @param  {[type=Boolean]}
         * @return {当前版本是否等于传入版本号，传入的参数类型为string}
         */
        isVersion: function(ver) {
            var nowVer = ver;
            var oldVer = version_;
            if (this.isInApp && oldVer == nowVer) {
                return true;
            } else {
                return false;
            }
        },
        /**
         * @param  {[type=Boolean]}
         * @return {当前版本是否为家长端(如果不在APPwebview里使用统一返回false)}
         */
        isParentApp: (function() {
            if (appType_ == 'P') {
                return true;
            } else {
                return false;
            }
        })(),
        /**
         * @param  {[type=Boolean]}
         * @return {当前版本是否为教师端(如果不在APPwebview里使用统一返回false)}
         */
        isTeacherApp: (function() {
            if (appType_ == 'T') {
                return true;
            } else {
                return false;
            }
        })(),
        /**
         * @param  {[type=Boolean]}
         * @return {当前版本是否为园长端(如果不在app里使用统一返回false)}
         */
        isMasterApp: (function() {
            if (appType_ == 'M') {
                return true;
            } else {
                return false;
            }
        })(),
    }
    return BBTreeApp;
})(window, document)

module.exports = bbtree;