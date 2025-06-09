import{a as Pn,B as Bc,p as Oc}from"./path_utils-BOv8yoCY.js";import{q as Fc,_ as Mc,r as ri,i as Nc,u as Uc,k as $c,c as nr,f as qe,a as Gc,y as Kc,t as ir,F as js,e as Hc,B as Vc,o as rr,n as qc}from"./index-BKCWTq7P.js";const Z=Number.isFinite||function(a){return typeof a=="number"&&isFinite(a)},Yc=Number.isSafeInteger||function(a){return typeof a=="number"&&Math.abs(a)<=jc},jc=Number.MAX_SAFE_INTEGER||9007199254740991;let oe=function(a){return a.NETWORK_ERROR="networkError",a.MEDIA_ERROR="mediaError",a.KEY_SYSTEM_ERROR="keySystemError",a.MUX_ERROR="muxError",a.OTHER_ERROR="otherError",a}({}),F=function(a){return a.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",a.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",a.KEY_SYSTEM_NO_SESSION="keySystemNoSession",a.KEY_SYSTEM_NO_CONFIGURED_LICENSE="keySystemNoConfiguredLicense",a.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",a.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED="keySystemServerCertificateRequestFailed",a.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED="keySystemServerCertificateUpdateFailed",a.KEY_SYSTEM_SESSION_UPDATE_FAILED="keySystemSessionUpdateFailed",a.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED="keySystemStatusOutputRestricted",a.KEY_SYSTEM_STATUS_INTERNAL_ERROR="keySystemStatusInternalError",a.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR="keySystemDestroyMediaKeysError",a.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR="keySystemDestroyCloseSessionError",a.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR="keySystemDestroyRemoveSessionError",a.MANIFEST_LOAD_ERROR="manifestLoadError",a.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",a.MANIFEST_PARSING_ERROR="manifestParsingError",a.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",a.LEVEL_EMPTY_ERROR="levelEmptyError",a.LEVEL_LOAD_ERROR="levelLoadError",a.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",a.LEVEL_PARSING_ERROR="levelParsingError",a.LEVEL_SWITCH_ERROR="levelSwitchError",a.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",a.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",a.SUBTITLE_LOAD_ERROR="subtitleTrackLoadError",a.SUBTITLE_TRACK_LOAD_TIMEOUT="subtitleTrackLoadTimeOut",a.FRAG_LOAD_ERROR="fragLoadError",a.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",a.FRAG_DECRYPT_ERROR="fragDecryptError",a.FRAG_PARSING_ERROR="fragParsingError",a.FRAG_GAP="fragGap",a.REMUX_ALLOC_ERROR="remuxAllocError",a.KEY_LOAD_ERROR="keyLoadError",a.KEY_LOAD_TIMEOUT="keyLoadTimeOut",a.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",a.BUFFER_INCOMPATIBLE_CODECS_ERROR="bufferIncompatibleCodecsError",a.BUFFER_APPEND_ERROR="bufferAppendError",a.BUFFER_APPENDING_ERROR="bufferAppendingError",a.BUFFER_STALLED_ERROR="bufferStalledError",a.BUFFER_FULL_ERROR="bufferFullError",a.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",a.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",a.ASSET_LIST_LOAD_ERROR="assetListLoadError",a.ASSET_LIST_LOAD_TIMEOUT="assetListLoadTimeout",a.ASSET_LIST_PARSING_ERROR="assetListParsingError",a.INTERSTITIAL_ASSET_ITEM_ERROR="interstitialAssetItemError",a.INTERNAL_EXCEPTION="internalException",a.INTERNAL_ABORTED="aborted",a.ATTACH_MEDIA_ERROR="attachMediaError",a.UNKNOWN="unknown",a}({}),x=function(a){return a.MEDIA_ATTACHING="hlsMediaAttaching",a.MEDIA_ATTACHED="hlsMediaAttached",a.MEDIA_DETACHING="hlsMediaDetaching",a.MEDIA_DETACHED="hlsMediaDetached",a.MEDIA_ENDED="hlsMediaEnded",a.STALL_RESOLVED="hlsStallResolved",a.BUFFER_RESET="hlsBufferReset",a.BUFFER_CODECS="hlsBufferCodecs",a.BUFFER_CREATED="hlsBufferCreated",a.BUFFER_APPENDING="hlsBufferAppending",a.BUFFER_APPENDED="hlsBufferAppended",a.BUFFER_EOS="hlsBufferEos",a.BUFFERED_TO_END="hlsBufferedToEnd",a.BUFFER_FLUSHING="hlsBufferFlushing",a.BUFFER_FLUSHED="hlsBufferFlushed",a.MANIFEST_LOADING="hlsManifestLoading",a.MANIFEST_LOADED="hlsManifestLoaded",a.MANIFEST_PARSED="hlsManifestParsed",a.LEVEL_SWITCHING="hlsLevelSwitching",a.LEVEL_SWITCHED="hlsLevelSwitched",a.LEVEL_LOADING="hlsLevelLoading",a.LEVEL_LOADED="hlsLevelLoaded",a.LEVEL_UPDATED="hlsLevelUpdated",a.LEVEL_PTS_UPDATED="hlsLevelPtsUpdated",a.LEVELS_UPDATED="hlsLevelsUpdated",a.AUDIO_TRACKS_UPDATED="hlsAudioTracksUpdated",a.AUDIO_TRACK_SWITCHING="hlsAudioTrackSwitching",a.AUDIO_TRACK_SWITCHED="hlsAudioTrackSwitched",a.AUDIO_TRACK_LOADING="hlsAudioTrackLoading",a.AUDIO_TRACK_LOADED="hlsAudioTrackLoaded",a.AUDIO_TRACK_UPDATED="hlsAudioTrackUpdated",a.SUBTITLE_TRACKS_UPDATED="hlsSubtitleTracksUpdated",a.SUBTITLE_TRACKS_CLEARED="hlsSubtitleTracksCleared",a.SUBTITLE_TRACK_SWITCH="hlsSubtitleTrackSwitch",a.SUBTITLE_TRACK_LOADING="hlsSubtitleTrackLoading",a.SUBTITLE_TRACK_LOADED="hlsSubtitleTrackLoaded",a.SUBTITLE_TRACK_UPDATED="hlsSubtitleTrackUpdated",a.SUBTITLE_FRAG_PROCESSED="hlsSubtitleFragProcessed",a.CUES_PARSED="hlsCuesParsed",a.NON_NATIVE_TEXT_TRACKS_FOUND="hlsNonNativeTextTracksFound",a.INIT_PTS_FOUND="hlsInitPtsFound",a.FRAG_LOADING="hlsFragLoading",a.FRAG_LOAD_EMERGENCY_ABORTED="hlsFragLoadEmergencyAborted",a.FRAG_LOADED="hlsFragLoaded",a.FRAG_DECRYPTED="hlsFragDecrypted",a.FRAG_PARSING_INIT_SEGMENT="hlsFragParsingInitSegment",a.FRAG_PARSING_USERDATA="hlsFragParsingUserdata",a.FRAG_PARSING_METADATA="hlsFragParsingMetadata",a.FRAG_PARSED="hlsFragParsed",a.FRAG_BUFFERED="hlsFragBuffered",a.FRAG_CHANGED="hlsFragChanged",a.FPS_DROP="hlsFpsDrop",a.FPS_DROP_LEVEL_CAPPING="hlsFpsDropLevelCapping",a.MAX_AUTO_LEVEL_UPDATED="hlsMaxAutoLevelUpdated",a.ERROR="hlsError",a.DESTROYING="hlsDestroying",a.KEY_LOADING="hlsKeyLoading",a.KEY_LOADED="hlsKeyLoaded",a.LIVE_BACK_BUFFER_REACHED="hlsLiveBackBufferReached",a.BACK_BUFFER_REACHED="hlsBackBufferReached",a.STEERING_MANIFEST_LOADED="hlsSteeringManifestLoaded",a.ASSET_LIST_LOADING="hlsAssetListLoading",a.ASSET_LIST_LOADED="hlsAssetListLoaded",a.INTERSTITIALS_UPDATED="hlsInterstitialsUpdated",a.INTERSTITIALS_BUFFERED_TO_BOUNDARY="hlsInterstitialsBufferedToBoundary",a.INTERSTITIAL_ASSET_PLAYER_CREATED="hlsInterstitialAssetPlayerCreated",a.INTERSTITIAL_STARTED="hlsInterstitialStarted",a.INTERSTITIAL_ASSET_STARTED="hlsInterstitialAssetStarted",a.INTERSTITIAL_ASSET_ENDED="hlsInterstitialAssetEnded",a.INTERSTITIAL_ASSET_ERROR="hlsInterstitialAssetError",a.INTERSTITIAL_ENDED="hlsInterstitialEnded",a.INTERSTITIALS_PRIMARY_RESUMED="hlsInterstitialsPrimaryResumed",a.PLAYOUT_LIMIT_REACHED="hlsPlayoutLimitReached",a.EVENT_CUE_ENTER="hlsEventCueEnter",a}({});var me={MANIFEST:"manifest",LEVEL:"level",AUDIO_TRACK:"audioTrack",SUBTITLE_TRACK:"subtitleTrack"},re={MAIN:"main",AUDIO:"audio",SUBTITLE:"subtitle"};class jt{constructor(e,t=0,n=0){this.halfLife=void 0,this.alpha_=void 0,this.estimate_=void 0,this.totalWeight_=void 0,this.halfLife=e,this.alpha_=e?Math.exp(Math.log(.5)/e):0,this.estimate_=t,this.totalWeight_=n}sample(e,t){const n=Math.pow(this.alpha_,e);this.estimate_=t*(1-n)+n*this.estimate_,this.totalWeight_+=e}getTotalWeight(){return this.totalWeight_}getEstimate(){if(this.alpha_){const e=1-Math.pow(this.alpha_,this.totalWeight_);if(e)return this.estimate_/e}return this.estimate_}}class Wc{constructor(e,t,n,i=100){this.defaultEstimate_=void 0,this.minWeight_=void 0,this.minDelayMs_=void 0,this.slow_=void 0,this.fast_=void 0,this.defaultTTFB_=void 0,this.ttfb_=void 0,this.defaultEstimate_=n,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new jt(e),this.fast_=new jt(t),this.defaultTTFB_=i,this.ttfb_=new jt(e)}update(e,t){const{slow_:n,fast_:i,ttfb_:r}=this;n.halfLife!==e&&(this.slow_=new jt(e,n.getEstimate(),n.getTotalWeight())),i.halfLife!==t&&(this.fast_=new jt(t,i.getEstimate(),i.getTotalWeight())),r.halfLife!==e&&(this.ttfb_=new jt(e,r.getEstimate(),r.getTotalWeight()))}sample(e,t){e=Math.max(e,this.minDelayMs_);const n=8*t,i=e/1e3,r=n/i;this.fast_.sample(i,r),this.slow_.sample(i,r)}sampleTTFB(e){const t=e/1e3,n=Math.sqrt(2)*Math.exp(-Math.pow(t,2)/2);this.ttfb_.sample(n,Math.max(e,5))}canEstimate(){return this.fast_.getTotalWeight()>=this.minWeight_}getEstimate(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_}getEstimateTTFB(){return this.ttfb_.getTotalWeight()>=this.minWeight_?this.ttfb_.getEstimate():this.defaultTTFB_}get defaultEstimate(){return this.defaultEstimate_}destroy(){}}function zc(a,e,t){return(e=Xc(e))in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function Se(){return Se=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)({}).hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a},Se.apply(null,arguments)}function Ws(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),t.push.apply(t,n)}return t}function Ee(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ws(Object(t),!0).forEach(function(n){zc(a,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):Ws(Object(t)).forEach(function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(t,n))})}return a}function Qc(a,e){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var n=t.call(a,e);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function Xc(a){var e=Qc(a,"string");return typeof e=="symbol"?e:e+""}class vt{constructor(e,t){this.trace=void 0,this.debug=void 0,this.log=void 0,this.warn=void 0,this.info=void 0,this.error=void 0;const n=`[${e}]:`;this.trace=It,this.debug=t.debug.bind(null,n),this.log=t.log.bind(null,n),this.warn=t.warn.bind(null,n),this.info=t.info.bind(null,n),this.error=t.error.bind(null,n)}}const It=function(){},Zc={trace:It,debug:It,log:It,warn:It,info:It,error:It};function wr(){return Se({},Zc)}function Jc(a,e){const t=self.console[a];return t?t.bind(self.console,`${e?"["+e+"] ":""}[${a}] >`):It}function zs(a,e,t){return e[a]?e[a].bind(e):Jc(a,t)}const Rr=wr();function eu(a,e,t){const n=wr();if(typeof console=="object"&&a===!0||typeof a=="object"){const i=["debug","log","info","warn","error"];i.forEach(r=>{n[r]=zs(r,a,t)});try{n.log(`Debug logs enabled for "${e}" in hls.js version 1.6.5`)}catch{return wr()}i.forEach(r=>{Rr[r]=zs(r,a)})}else Se(Rr,n);return n}const be=Rr;function Rt(a=!0){return typeof self>"u"?void 0:(a||!self.MediaSource)&&self.ManagedMediaSource||self.MediaSource||self.WebKitMediaSource}function tu(a){return typeof self<"u"&&a===self.ManagedMediaSource}function co(a,e){const t=Object.keys(a),n=Object.keys(e),i=t.length,r=n.length;return!i||!r||i===r&&!t.some(s=>n.indexOf(s)===-1)}function We(a,e=!1){if(typeof TextDecoder<"u"){const l=new TextDecoder("utf-8").decode(a);if(e){const c=l.indexOf("\0");return c!==-1?l.substring(0,c):l}return l.replace(/\0/g,"")}const t=a.length;let n,i,r,s="",o=0;for(;o<t;){if(n=a[o++],n===0&&e)return s;if(n===0||n===3)continue;switch(n>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:s+=String.fromCharCode(n);break;case 12:case 13:i=a[o++],s+=String.fromCharCode((n&31)<<6|i&63);break;case 14:i=a[o++],r=a[o++],s+=String.fromCharCode((n&15)<<12|(i&63)<<6|(r&63)<<0);break}}return s}const ot={hexDump:function(a){let e="";for(let t=0;t<a.length;t++){let n=a[t].toString(16);n.length<2&&(n="0"+n),e+=n}return e}};function nu(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var sr={exports:{}},Qs;function iu(){return Qs||(Qs=1,function(a,e){(function(t){var n=/^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/,i=/^(?=([^\/?#]*))\1([^]*)$/,r=/(?:\/|^)\.(?=\/)/g,s=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,o={buildAbsoluteURL:function(d,l,c){if(c=c||{},d=d.trim(),l=l.trim(),!l){if(!c.alwaysNormalize)return d;var u=o.parseURL(d);if(!u)throw new Error("Error trying to parse base URL.");return u.path=o.normalizePath(u.path),o.buildURLFromParts(u)}var h=o.parseURL(l);if(!h)throw new Error("Error trying to parse relative URL.");if(h.scheme)return c.alwaysNormalize?(h.path=o.normalizePath(h.path),o.buildURLFromParts(h)):l;var m=o.parseURL(d);if(!m)throw new Error("Error trying to parse base URL.");if(!m.netLoc&&m.path&&m.path[0]!=="/"){var g=i.exec(m.path);m.netLoc=g[1],m.path=g[2]}m.netLoc&&!m.path&&(m.path="/");var v={scheme:m.scheme,netLoc:h.netLoc,path:null,params:h.params,query:h.query,fragment:h.fragment};if(!h.netLoc&&(v.netLoc=m.netLoc,h.path[0]!=="/"))if(!h.path)v.path=m.path,h.params||(v.params=m.params,h.query||(v.query=m.query));else{var E=m.path,C=E.substring(0,E.lastIndexOf("/")+1)+h.path;v.path=o.normalizePath(C)}return v.path===null&&(v.path=c.alwaysNormalize?o.normalizePath(h.path):h.path),o.buildURLFromParts(v)},parseURL:function(d){var l=n.exec(d);return l?{scheme:l[1]||"",netLoc:l[2]||"",path:l[3]||"",params:l[4]||"",query:l[5]||"",fragment:l[6]||""}:null},normalizePath:function(d){for(d=d.split("").reverse().join("").replace(r,"");d.length!==(d=d.replace(s,"")).length;);return d.split("").reverse().join("")},buildURLFromParts:function(d){return d.scheme+d.netLoc+d.path+d.params+d.query+d.fragment}};a.exports=o})()}(sr)),sr.exports}var Yr=iu();class jr{constructor(){this.aborted=!1,this.loaded=0,this.retry=0,this.total=0,this.chunkCount=0,this.bwEstimate=0,this.loading={start:0,first:0,end:0},this.parsing={start:0,end:0},this.buffering={start:0,first:0,end:0}}}var Le={AUDIO:"audio",VIDEO:"video",AUDIOVIDEO:"audiovideo"};class uo{constructor(e){this._byteRange=null,this._url=null,this._stats=null,this._streams=null,this.base=void 0,this.relurl=void 0,typeof e=="string"&&(e={url:e}),this.base=e,su(this,"stats")}setByteRange(e,t){const n=e.split("@",2);let i;n.length===1?i=(t==null?void 0:t.byteRangeEndOffset)||0:i=parseInt(n[1]),this._byteRange=[i,parseInt(n[0])+i]}get baseurl(){return this.base.url}get byteRange(){return this._byteRange===null?[]:this._byteRange}get byteRangeStartOffset(){return this.byteRange[0]}get byteRangeEndOffset(){return this.byteRange[1]}get elementaryStreams(){return this._streams===null&&(this._streams={[Le.AUDIO]:null,[Le.VIDEO]:null,[Le.AUDIOVIDEO]:null}),this._streams}set elementaryStreams(e){this._streams=e}get hasStats(){return this._stats!==null}get hasStreams(){return this._streams!==null}get stats(){return this._stats===null&&(this._stats=new jr),this._stats}set stats(e){this._stats=e}get url(){return!this._url&&this.baseurl&&this.relurl&&(this._url=Yr.buildAbsoluteURL(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url||""}set url(e){this._url=e}clearElementaryStreamInfo(){const{elementaryStreams:e}=this;e[Le.AUDIO]=null,e[Le.VIDEO]=null,e[Le.AUDIOVIDEO]=null}}function Ne(a){return a.sn!=="initSegment"}class ar extends uo{constructor(e,t){super(t),this._decryptdata=null,this._programDateTime=null,this._ref=null,this._bitrate=void 0,this.rawProgramDateTime=null,this.tagList=[],this.duration=0,this.sn=0,this.levelkeys=void 0,this.type=void 0,this.loader=null,this.keyLoader=null,this.level=-1,this.cc=0,this.startPTS=void 0,this.endPTS=void 0,this.startDTS=void 0,this.endDTS=void 0,this.start=0,this.playlistOffset=0,this.deltaPTS=void 0,this.maxStartPTS=void 0,this.minEndPTS=void 0,this.data=void 0,this.bitrateTest=!1,this.title=null,this.initSegment=null,this.endList=void 0,this.gap=void 0,this.urlId=0,this.type=e}get byteLength(){if(this.hasStats){const e=this.stats.total;if(e)return e}if(this.byteRange){const e=this.byteRange[0],t=this.byteRange[1];if(Z(e)&&Z(t))return t-e}return null}get bitrate(){return this.byteLength?this.byteLength*8/this.duration:this._bitrate?this._bitrate:null}set bitrate(e){this._bitrate=e}get decryptdata(){const{levelkeys:e}=this;if(!e&&!this._decryptdata)return null;if(!this._decryptdata&&this.levelkeys&&!this.levelkeys.NONE){const t=this.levelkeys.identity;if(t)this._decryptdata=t.getDecryptData(this.sn);else{const n=Object.keys(this.levelkeys);if(n.length===1)return this._decryptdata=this.levelkeys[n[0]].getDecryptData(this.sn)}}return this._decryptdata}get end(){return this.start+this.duration}get endProgramDateTime(){if(this.programDateTime===null)return null;const e=Z(this.duration)?this.duration:0;return this.programDateTime+e*1e3}get encrypted(){var e;if((e=this._decryptdata)!=null&&e.encrypted)return!0;if(this.levelkeys){const t=Object.keys(this.levelkeys),n=t.length;if(n>1||n===1&&this.levelkeys[t[0]].encrypted)return!0}return!1}get programDateTime(){return this._programDateTime===null&&this.rawProgramDateTime&&(this.programDateTime=Date.parse(this.rawProgramDateTime)),this._programDateTime}set programDateTime(e){if(!Z(e)){this._programDateTime=this.rawProgramDateTime=null;return}this._programDateTime=e}get ref(){return Ne(this)?(this._ref||(this._ref={base:this.base,start:this.start,duration:this.duration,sn:this.sn,programDateTime:this.programDateTime}),this._ref):null}addStart(e){this.setStart(this.start+e)}setStart(e){this.start=e,this._ref&&(this._ref.start=e)}setDuration(e){this.duration=e,this._ref&&(this._ref.duration=e)}setKeyFormat(e){if(this.levelkeys){const t=this.levelkeys[e];t&&!this._decryptdata&&(this._decryptdata=t.getDecryptData(this.sn))}}abortRequests(){var e,t;(e=this.loader)==null||e.abort(),(t=this.keyLoader)==null||t.abort()}setElementaryStreamInfo(e,t,n,i,r,s=!1){const{elementaryStreams:o}=this,d=o[e];if(!d){o[e]={startPTS:t,endPTS:n,startDTS:i,endDTS:r,partial:s};return}d.startPTS=Math.min(d.startPTS,t),d.endPTS=Math.max(d.endPTS,n),d.startDTS=Math.min(d.startDTS,i),d.endDTS=Math.max(d.endDTS,r)}}class ru extends uo{constructor(e,t,n,i,r){super(n),this.fragOffset=0,this.duration=0,this.gap=!1,this.independent=!1,this.relurl=void 0,this.fragment=void 0,this.index=void 0,this.duration=e.decimalFloatingPoint("DURATION"),this.gap=e.bool("GAP"),this.independent=e.bool("INDEPENDENT"),this.relurl=e.enumeratedString("URI"),this.fragment=t,this.index=i;const s=e.enumeratedString("BYTERANGE");s&&this.setByteRange(s,r),r&&(this.fragOffset=r.fragOffset+r.duration)}get start(){return this.fragment.start+this.fragOffset}get end(){return this.start+this.duration}get loaded(){const{elementaryStreams:e}=this;return!!(e.audio||e.video||e.audiovideo)}}function ho(a,e){const t=Object.getPrototypeOf(a);if(t){const n=Object.getOwnPropertyDescriptor(t,e);return n||ho(t,e)}}function su(a,e){const t=ho(a,e);t&&(t.enumerable=!0,Object.defineProperty(a,e,t))}const ki=Math.pow(2,32)-1,au=[].push,fo={video:1,audio:2,id3:3,text:4};function Be(a){return String.fromCharCode.apply(null,a)}function po(a,e){const t=a[e]<<8|a[e+1];return t<0?65536+t:t}function ce(a,e){const t=mo(a,e);return t<0?4294967296+t:t}function Xs(a,e){let t=ce(a,e);return t*=Math.pow(2,32),t+=ce(a,e+4),t}function mo(a,e){return a[e]<<24|a[e+1]<<16|a[e+2]<<8|a[e+3]}function or(a,e,t){a[e]=t>>24,a[e+1]=t>>16&255,a[e+2]=t>>8&255,a[e+3]=t&255}function ou(a){const e=a.byteLength;for(let t=0;t<e;){const n=ce(a,t);if(n>8&&a[t+4]===109&&a[t+5]===111&&a[t+6]===111&&a[t+7]===102)return!0;t=n>1?t+n:e}return!1}function pe(a,e){const t=[];if(!e.length)return t;const n=a.byteLength;for(let i=0;i<n;){const r=ce(a,i),s=Be(a.subarray(i+4,i+8)),o=r>1?i+r:n;if(s===e[0])if(e.length===1)t.push(a.subarray(i+8,o));else{const d=pe(a.subarray(i+8,o),e.slice(1));d.length&&au.apply(t,d)}i=o}return t}function lu(a){const e=[],t=a[0];let n=8;const i=ce(a,n);n+=4;let r=0,s=0;t===0?(r=ce(a,n),s=ce(a,n+4),n+=8):(r=Xs(a,n),s=Xs(a,n+8),n+=16),n+=2;let o=a.length+s;const d=po(a,n);n+=2;for(let l=0;l<d;l++){let c=n;const u=ce(a,c);c+=4;const h=u&2147483647;if((u&2147483648)>>>31===1)return be.warn("SIDX has hierarchical references (not supported)"),null;const g=ce(a,c);c+=4,e.push({referenceSize:h,subsegmentDuration:g,info:{duration:g/i,start:o,end:o+h-1}}),o+=h,c+=4,n=c}return{earliestPresentationTime:r,timescale:i,version:t,referencesCount:d,references:e}}function go(a){const e=[],t=pe(a,["moov","trak"]);for(let i=0;i<t.length;i++){const r=t[i],s=pe(r,["tkhd"])[0];if(s){let o=s[0];const d=ce(s,o===0?12:20),l=pe(r,["mdia","mdhd"])[0];if(l){o=l[0];const c=ce(l,o===0?12:20),u=pe(r,["mdia","hdlr"])[0];if(u){const h=Be(u.subarray(8,12)),m={soun:Le.AUDIO,vide:Le.VIDEO}[h],g=pe(r,["mdia","minf","stbl","stsd"])[0],v=du(g);m?(e[d]={timescale:c,type:m,stsd:v},e[m]=Ee({timescale:c,id:d},v)):e[d]={timescale:c,type:h,stsd:v}}}}}return pe(a,["moov","mvex","trex"]).forEach(i=>{const r=ce(i,4),s=e[r];s&&(s.default={duration:ce(i,12),flags:ce(i,20)})}),e}function du(a){const e=a.subarray(8),t=e.subarray(86),n=Be(e.subarray(4,8));let i=n,r;const s=n==="enca"||n==="encv";if(s){const l=pe(e,[n])[0].subarray(n==="enca"?28:78);pe(l,["sinf"]).forEach(u=>{const h=pe(u,["schm"])[0];if(h){const m=Be(h.subarray(4,8));if(m==="cbcs"||m==="cenc"){const g=pe(u,["frma"])[0];g&&(i=Be(g))}}})}const o=i;switch(i){case"avc1":case"avc2":case"avc3":case"avc4":{const d=pe(t,["avcC"])[0];d&&d.length>3&&(i+="."+ai(d[1])+ai(d[2])+ai(d[3]),r=si(o==="avc1"?"dva1":"dvav",t));break}case"mp4a":{const d=pe(e,[n])[0],l=pe(d.subarray(28),["esds"])[0];if(l&&l.length>7){let c=4;if(l[c++]!==3)break;c=lr(l,c),c+=2;const u=l[c++];if(u&128&&(c+=2),u&64&&(c+=l[c++]),l[c++]!==4)break;c=lr(l,c);const h=l[c++];if(h===64)i+="."+ai(h);else break;if(c+=12,l[c++]!==5)break;c=lr(l,c);const m=l[c++];let g=(m&248)>>3;g===31&&(g+=1+((m&7)<<3)+((l[c]&224)>>5)),i+="."+g}break}case"hvc1":case"hev1":{const d=pe(t,["hvcC"])[0];if(d&&d.length>12){const l=d[1],c=["","A","B","C"][l>>6],u=l&31,h=ce(d,2),m=(l&32)>>5?"H":"L",g=d[12],v=d.subarray(6,12);i+="."+c+u,i+="."+cu(h).toString(16).toUpperCase(),i+="."+m+g;let E="";for(let C=v.length;C--;){const I=v[C];(I||E)&&(E="."+I.toString(16).toUpperCase()+E)}i+=E}r=si(o=="hev1"?"dvhe":"dvh1",t);break}case"dvh1":case"dvhe":case"dvav":case"dva1":case"dav1":{i=si(i,t)||i;break}case"vp09":{const d=pe(t,["vpcC"])[0];if(d&&d.length>6){const l=d[4],c=d[5],u=d[6]>>4&15;i+="."+at(l)+"."+at(c)+"."+at(u)}break}case"av01":{const d=pe(t,["av1C"])[0];if(d&&d.length>2){const l=d[1]>>>5,c=d[1]&31,u=d[2]>>>7?"H":"M",h=(d[2]&64)>>6,m=(d[2]&32)>>5,g=l===2&&h?m?12:10:h?10:8,v=(d[2]&16)>>4,E=(d[2]&8)>>3,C=(d[2]&4)>>2,I=d[2]&3;i+="."+l+"."+at(c)+u+"."+at(g)+"."+v+"."+E+C+I+"."+at(1)+"."+at(1)+"."+at(1)+"."+0,r=si("dav1",t)}break}}return{codec:i,encrypted:s,supplemental:r}}function si(a,e){const t=pe(e,["dvvC"]),n=t.length?t[0]:pe(e,["dvcC"])[0];if(n){const i=n[2]>>1&127,r=n[2]<<5&32|n[3]>>3&31;return a+"."+at(i)+"."+at(r)}}function cu(a){let e=0;for(let t=0;t<32;t++)e|=(a>>t&1)<<31-t;return e>>>0}function lr(a,e){const t=e+5;for(;a[e++]&128&&e<t;);return e}function ai(a){return("0"+a.toString(16).toUpperCase()).slice(-2)}function at(a){return(a<10?"0":"")+a}function uu(a,e){if(!a||!e)return a;const t=e.keyId;return t&&e.isCommonEncryption&&pe(a,["moov","trak"]).forEach(i=>{const s=pe(i,["mdia","minf","stbl","stsd"])[0].subarray(8);let o=pe(s,["enca"]);const d=o.length>0;d||(o=pe(s,["encv"])),o.forEach(l=>{const c=d?l.subarray(28):l.subarray(78);pe(c,["sinf"]).forEach(h=>{const m=yo(h);if(m){const g=m.subarray(8,24);g.some(v=>v!==0)||(be.log(`[eme] Patching keyId in 'enc${d?"a":"v"}>sinf>>tenc' box: ${ot.hexDump(g)} -> ${ot.hexDump(t)}`),m.set(t,8))}})})}),a}function yo(a){const e=pe(a,["schm"])[0];if(e){const t=Be(e.subarray(4,8));if(t==="cbcs"||t==="cenc")return pe(a,["schi","tenc"])[0]}return null}function hu(a,e,t){const n={},i=pe(a,["moof","traf"]);for(let r=0;r<i.length;r++){const s=i[r],o=pe(s,["tfhd"])[0],d=ce(o,4),l=e[d];if(!l)continue;const c=n[d]||(n[d]={start:NaN,duration:0,sampleCount:0,timescale:l.timescale,type:l.type}),u=pe(s,["tfdt"])[0];if(u){const L=u[0];let R=ce(u,4);L===1&&(R===ki?t.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"):(R*=ki+1,R+=ce(u,8))),Z(R)&&(!Z(c.start)||R<c.start)&&(c.start=R)}const h=l.default,m=ce(o,0)|(h==null?void 0:h.flags);let g=(h==null?void 0:h.duration)||0;m&8&&(m&2?g=ce(o,12):g=ce(o,8));const v=pe(s,["trun"]);let E=c.start||0,C=0,I=g;for(let L=0;L<v.length;L++){const R=v[L],_=ce(R,4),N=c.sampleCount;c.sampleCount+=_;const P=R[3]&1,O=R[3]&4,U=R[2]&1,D=R[2]&2,V=R[2]&4,Y=R[2]&8;let se=8,J=_;for(P&&(se+=4),O&&_&&(!(R[se+1]&1)&&c.keyFrameIndex===void 0&&(c.keyFrameIndex=N),se+=4,U?(I=ce(R,se),se+=4):I=g,D&&(se+=4),Y&&(se+=4),E+=I,C+=I,J--);J--;)U?(I=ce(R,se),se+=4):I=g,D&&(se+=4),V&&(R[se+1]&1||c.keyFrameIndex===void 0&&(c.keyFrameIndex=c.sampleCount-(J+1),c.keyFrameStart=E),se+=4),Y&&(se+=4),E+=I,C+=I;!C&&g&&(C+=g*_)}c.duration+=C}if(!Object.keys(n).some(r=>n[r].duration)){let r=1/0,s=0;const o=pe(a,["sidx"]);for(let d=0;d<o.length;d++){const l=lu(o[d]);if(l!=null&&l.references){r=Math.min(r,l.earliestPresentationTime/l.timescale);const c=l.references.reduce((u,h)=>u+h.info.duration||0,0);s=Math.max(s,c+l.earliestPresentationTime/l.timescale)}}s&&Z(s)&&Object.keys(n).forEach(d=>{n[d].duration||(n[d].duration=s*n[d].timescale-n[d].start)})}return n}function fu(a,e,t){pe(e,["moof","traf"]).forEach(n=>{pe(n,["tfhd"]).forEach(i=>{const r=ce(i,4),s=a[r];if(!s)return;const o=s.timescale||9e4;pe(n,["tfdt"]).forEach(d=>{const l=d[0],c=t*o;if(c){let u=ce(d,4);if(l===0)u-=c,u=Math.max(u,0),or(d,4,u);else{u*=Math.pow(2,32),u+=ce(d,8),u-=c,u=Math.max(u,0);const h=Math.floor(u/(ki+1)),m=Math.floor(u%(ki+1));or(d,4,h),or(d,8,m)}}})})})}function pu(a){const e={valid:null,remainder:null},t=pe(a,["moof"]);if(t.length<2)return e.remainder=a,e;const n=t[t.length-1];return e.valid=a.slice(0,n.byteOffset-8),e.remainder=a.slice(n.byteOffset-8),e}function Je(a,e){const t=new Uint8Array(a.length+e.length);return t.set(a),t.set(e,a.length),t}function Zs(a,e){const t=[],n=e.samples,i=e.timescale,r=e.id;let s=!1;return pe(n,["moof"]).map(d=>{const l=d.byteOffset-8;pe(d,["traf"]).map(u=>{const h=pe(u,["tfdt"]).map(m=>{const g=m[0];let v=ce(m,4);return g===1&&(v*=Math.pow(2,32),v+=ce(m,8)),v/i})[0];return h!==void 0&&(a=h),pe(u,["tfhd"]).map(m=>{const g=ce(m,4),v=ce(m,0)&16777215,E=(v&1)!==0,C=(v&2)!==0,I=(v&8)!==0;let L=0;const R=(v&16)!==0;let _=0;const N=(v&32)!==0;let P=8;g===r&&(E&&(P+=8),C&&(P+=4),I&&(L=ce(m,P),P+=4),R&&(_=ce(m,P),P+=4),N&&(P+=4),e.type==="video"&&(s=Ui(e.codec)),pe(u,["trun"]).map(O=>{const U=O[0],D=ce(O,0)&16777215,V=(D&1)!==0;let Y=0;const se=(D&4)!==0,J=(D&256)!==0;let ee=0;const W=(D&512)!==0;let ne=0;const ie=(D&1024)!==0,$=(D&2048)!==0;let q=0;const de=ce(O,4);let le=8;V&&(Y=ce(O,le),le+=4),se&&(le+=4);let fe=Y+l;for(let ge=0;ge<de;ge++){if(J?(ee=ce(O,le),le+=4):ee=L,W?(ne=ce(O,le),le+=4):ne=_,ie&&(le+=4),$&&(U===0?q=ce(O,le):q=mo(O,le),le+=4),e.type===Le.VIDEO){let Ae=0;for(;Ae<ne;){const ye=ce(n,fe);if(fe+=4,mu(s,n[fe])){const De=n.subarray(fe,fe+ye);Wr(De,s?2:1,a+q/i,t)}fe+=ye,Ae+=ye+4}}a+=ee/i}}))})})}),t}function Ui(a){if(!a)return!1;const e=a.substring(0,4);return e==="hvc1"||e==="hev1"||e==="dvh1"||e==="dvhe"}function mu(a,e){if(a){const t=e>>1&63;return t===39||t===40}else return(e&31)===6}function Wr(a,e,t,n){const i=Ao(a);let r=0;r+=e;let s=0,o=0,d=0;for(;r<i.length;){s=0;do{if(r>=i.length)break;d=i[r++],s+=d}while(d===255);o=0;do{if(r>=i.length)break;d=i[r++],o+=d}while(d===255);const l=i.length-r;let c=r;if(o<l)r+=o;else if(o>l){be.error(`Malformed SEI payload. ${o} is too small, only ${l} bytes left to parse.`);break}if(s===4){if(i[c++]===181){const h=po(i,c);if(c+=2,h===49){const m=ce(i,c);if(c+=4,m===1195456820){const g=i[c++];if(g===3){const v=i[c++],E=31&v,C=64&v,I=C?2+E*3:0,L=new Uint8Array(I);if(C){L[0]=v;for(let R=1;R<I;R++)L[R]=i[c++]}n.push({type:g,payloadType:s,pts:t,bytes:L})}}}}}else if(s===5&&o>16){const u=[];for(let g=0;g<16;g++){const v=i[c++].toString(16);u.push(v.length==1?"0"+v:v),(g===3||g===5||g===7||g===9)&&u.push("-")}const h=o-16,m=new Uint8Array(h);for(let g=0;g<h;g++)m[g]=i[c++];n.push({payloadType:s,pts:t,uuid:u.join(""),userData:We(m),userDataBytes:m})}}}function Ao(a){const e=a.byteLength,t=[];let n=1;for(;n<e-2;)a[n]===0&&a[n+1]===0&&a[n+2]===3?(t.push(n+2),n+=2):n++;if(t.length===0)return a;const i=e-t.length,r=new Uint8Array(i);let s=0;for(n=0;n<i;s++,n++)s===t[0]&&(s++,t.shift()),r[n]=a[s];return r}function gu(a){const e=a[0];let t="",n="",i=0,r=0,s=0,o=0,d=0,l=0;if(e===0){for(;Be(a.subarray(l,l+1))!=="\0";)t+=Be(a.subarray(l,l+1)),l+=1;for(t+=Be(a.subarray(l,l+1)),l+=1;Be(a.subarray(l,l+1))!=="\0";)n+=Be(a.subarray(l,l+1)),l+=1;n+=Be(a.subarray(l,l+1)),l+=1,i=ce(a,12),r=ce(a,16),o=ce(a,20),d=ce(a,24),l=28}else if(e===1){l+=4,i=ce(a,l),l+=4;const u=ce(a,l);l+=4;const h=ce(a,l);for(l+=4,s=2**32*u+h,Yc(s)||(s=Number.MAX_SAFE_INTEGER,be.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")),o=ce(a,l),l+=4,d=ce(a,l),l+=4;Be(a.subarray(l,l+1))!=="\0";)t+=Be(a.subarray(l,l+1)),l+=1;for(t+=Be(a.subarray(l,l+1)),l+=1;Be(a.subarray(l,l+1))!=="\0";)n+=Be(a.subarray(l,l+1)),l+=1;n+=Be(a.subarray(l,l+1)),l+=1}const c=a.subarray(l,a.byteLength);return{schemeIdUri:t,value:n,timeScale:i,presentationTime:s,presentationTimeDelta:r,eventDuration:o,id:d,payload:c}}function yu(a,...e){const t=e.length;let n=8,i=t;for(;i--;)n+=e[i].byteLength;const r=new Uint8Array(n);for(r[0]=n>>24&255,r[1]=n>>16&255,r[2]=n>>8&255,r[3]=n&255,r.set(a,4),i=0,n=8;i<t;i++)r.set(e[i],n),n+=e[i].byteLength;return r}function Au(a,e,t){if(a.byteLength!==16)throw new RangeError("Invalid system id");let n,i;n=0,i=new Uint8Array;let r;n>0?(r=new Uint8Array(4),e.length>0&&new DataView(r.buffer).setUint32(0,e.length,!1)):r=new Uint8Array;const s=new Uint8Array(4);return t&&t.byteLength>0&&new DataView(s.buffer).setUint32(0,t.byteLength,!1),yu([112,115,115,104],new Uint8Array([n,0,0,0]),a,r,i,s,t||new Uint8Array)}function vu(a){const e=[];if(a instanceof ArrayBuffer){const t=a.byteLength;let n=0;for(;n+32<t;){const i=new DataView(a,n),r=bu(i);e.push(r),n+=r.size}}return e}function bu(a){const e=a.getUint32(0),t=a.byteOffset,n=a.byteLength;if(n<e)return{offset:t,size:n};if(a.getUint32(4)!==1886614376)return{offset:t,size:e};const r=a.getUint32(8)>>>24;if(r!==0&&r!==1)return{offset:t,size:e};const s=a.buffer,o=ot.hexDump(new Uint8Array(s,t+12,16)),d=a.getUint32(28);let l=null,c=null;if(r===0){if(e-32<d||d<22)return{offset:t,size:e};c=new Uint8Array(s,t+32,d)}else if(r===1){if(!d||n<t+32+d*16+16)return{offset:t,size:e};l=[];for(let u=0;u<d;u++)l.push(new Uint8Array(s,t+32+u*16,16))}return{version:r,systemId:o,kids:l,data:c,offset:t,size:e}}const vo=()=>/\(Windows.+Firefox\//i.test(navigator.userAgent),nn={audio:{a3ds:1,"ac-3":.95,"ac-4":1,alac:.9,alaw:1,dra1:1,"dts+":1,"dts-":1,dtsc:1,dtse:1,dtsh:1,"ec-3":.9,enca:1,fLaC:.9,flac:.9,FLAC:.9,g719:1,g726:1,m4ae:1,mha1:1,mha2:1,mhm1:1,mhm2:1,mlpa:1,mp4a:1,"raw ":1,Opus:1,opus:1,samr:1,sawb:1,sawp:1,sevc:1,sqcp:1,ssmv:1,twos:1,ulaw:1},video:{avc1:1,avc2:1,avc3:1,avc4:1,avcp:1,av01:.8,dav1:.8,drac:1,dva1:1,dvav:1,dvh1:.7,dvhe:.7,encv:1,hev1:.75,hvc1:.75,mjp2:1,mp4v:1,mvc1:1,mvc2:1,mvc3:1,mvc4:1,resv:1,rv60:1,s263:1,svc1:1,svc2:1,"vc-1":1,vp08:1,vp09:.9},text:{stpp:1,wvtt:1}};function bo(a,e){const t=nn[e];return!!t&&!!t[a.slice(0,4)]}function Dr(a,e,t=!0){return!a.split(",").some(n=>!Eo(n,e,t))}function Eo(a,e,t=!0){var n;const i=Rt(t);return(n=i==null?void 0:i.isTypeSupported($n(a,e)))!=null?n:!1}function $n(a,e){return`${e}/mp4;codecs=${a}`}function Js(a){if(a){const e=a.substring(0,4);return nn.video[e]}return 2}function wi(a){const e=vo();return a.split(",").reduce((t,n)=>{const r=e&&Ui(n)?9:nn.video[n];return r?(r*2+t)/(t?3:2):(nn.audio[n]+t)/(t?2:1)},0)}const dr={};function Eu(a,e=!0){if(dr[a])return dr[a];const t={flac:["flac","fLaC","FLAC"],opus:["opus","Opus"],"mp4a.40.34":["mp3"]}[a];for(let i=0;i<t.length;i++){var n;if(Eo(t[i],"audio",e))return dr[a]=t[i],t[i];if(t[i]==="mp3"&&(n=Rt(e))!=null&&n.isTypeSupported("audio/mpeg"))return""}return a}const xu=/flac|opus|mp4a\.40\.34/i;function Ri(a,e=!0){return a.replace(xu,t=>Eu(t.toLowerCase(),e))}function Su(a,e){const t=[];if(a){const n=a.split(",");for(let i=0;i<n.length;i++)bo(n[i],"video")||t.push(n[i])}return e&&t.push(e),t.join(",")}function bi(a,e){if(a&&(a.length>4||["ac-3","ec-3","alac","fLaC","Opus"].indexOf(a)!==-1))return a;if(e){const t=e.split(",");if(t.length>1){if(a){for(let n=t.length;n--;)if(t[n].substring(0,4)===a.substring(0,4))return t[n]}return t[0]}}return e||a}function Tu(a){const e=a.split(",");for(let t=0;t<e.length;t++){const n=e[t].split(".");n.length>2&&n[0]==="avc1"&&(e[t]=`avc1.${parseInt(n[1]).toString(16)}${("000"+parseInt(n[2]).toString(16)).slice(-4)}`)}return e.join(",")}function Cu(a){if(a.startsWith("av01.")){const e=a.split("."),t=["0","111","01","01","01","0"];for(let n=e.length;n>4&&n<10;n++)e[n]=t[n-4];return e.join(".")}return a}function ea(a){const e=Rt(a)||{isTypeSupported:()=>!1};return{mpeg:e.isTypeSupported("audio/mpeg"),mp3:e.isTypeSupported('audio/mp4; codecs="mp3"'),ac3:e.isTypeSupported('audio/mp4; codecs="ac-3"')}}function xo(a){return a.replace(/^.+codecs=["']?([^"']+).*$/,"$1")}const So={supported:!0,configurations:[],decodingInfoResults:[{supported:!0,powerEfficient:!0,smooth:!0}]};function To(a,e){return{supported:!1,configurations:e,decodingInfoResults:[{supported:!1,smooth:!1,powerEfficient:!1}],error:a}}const ta={};function Lu(a,e,t,n,i,r){const s=a.audioCodec?a.audioGroups:null,o=r==null?void 0:r.audioCodec,d=r==null?void 0:r.channels,l=d?parseInt(d):o?1/0:2;let c=null;if(s!=null&&s.length)try{s.length===1&&s[0]?c=e.groups[s[0]].channels:c=s.reduce((u,h)=>{if(h){const m=e.groups[h];if(!m)throw new Error(`Audio track group ${h} not found`);Object.keys(m.channels).forEach(g=>{u[g]=(u[g]||0)+m.channels[g]})}return u},{2:0})}catch{return!0}return a.videoCodec!==void 0&&(a.width>1920&&a.height>1088||a.height>1920&&a.width>1088||a.frameRate>Math.max(n,30)||a.videoRange!=="SDR"&&a.videoRange!==t||a.bitrate>Math.max(i,8e6))||!!c&&Z(l)&&Object.keys(c).some(u=>parseInt(u)>l)}function Co(a,e,t){const n=a.videoCodec,i=a.audioCodec;if(!n&&!i||!t)return Promise.resolve(So);const r=[];if(n){const s={width:a.width,height:a.height,bitrate:Math.ceil(Math.max(a.bitrate*.9,a.averageBitrate)),framerate:a.frameRate||30},o=a.videoRange;o!=="SDR"&&(s.transferFunction=o.toLowerCase());const d=n.split(","),l=navigator.userAgent;if(d.some(c=>Ui(c))&&vo())return Promise.resolve(To(new Error(`Overriding Windows Firefox HEVC MediaCapabilities result based on user-agent sting: (${l})`),r));r.push.apply(r,d.map(c=>({type:"media-source",video:Ee(Ee({},s),{},{contentType:$n(Cu(c),"video")})})))}return i&&a.audioGroups&&a.audioGroups.forEach(s=>{var o;s&&((o=e.groups[s])==null||o.tracks.forEach(d=>{if(d.groupId===s){const l=d.channels||"",c=parseFloat(l);Z(c)&&c>2&&r.push.apply(r,i.split(",").map(u=>({type:"media-source",audio:{contentType:$n(u,"audio"),channels:""+c}})))}}))}),Promise.all(r.map(s=>{const o=Iu(s);return ta[o]||(ta[o]=t.decodingInfo(s))})).then(s=>({supported:!s.some(o=>!o.supported),configurations:r,decodingInfoResults:s})).catch(s=>({supported:!1,configurations:r,decodingInfoResults:[],error:s}))}function Iu(a){const{audio:e,video:t}=a,n=t||e;if(n){const i=xo(n.contentType);if(t)return`r${t.height}x${t.width}f${Math.ceil(t.framerate)}${t.transferFunction||"sd"}_${i}_${Math.ceil(t.bitrate/1e5)}`;if(e)return`c${e.channels}${e.spatialRendering?"s":"n"}_${i}`}return""}const _r=["NONE","TYPE-0","TYPE-1",null];function ku(a){return _r.indexOf(a)>-1}const Di=["SDR","PQ","HLG"];function wu(a){return!!a&&Di.indexOf(a)>-1}var Ei={No:"",Yes:"YES",v2:"v2"};function na(a){const{canSkipUntil:e,canSkipDateRanges:t,age:n}=a,i=n<e/2;return e&&i?t?Ei.v2:Ei.Yes:Ei.No}class ia{constructor(e,t,n){this.msn=void 0,this.part=void 0,this.skip=void 0,this.msn=e,this.part=t,this.skip=n}addDirectives(e){const t=new self.URL(e);return this.msn!==void 0&&t.searchParams.set("_HLS_msn",this.msn.toString()),this.part!==void 0&&t.searchParams.set("_HLS_part",this.part.toString()),this.skip&&t.searchParams.set("_HLS_skip",this.skip),t.href}}class Gn{constructor(e){if(this._attrs=void 0,this.audioCodec=void 0,this.bitrate=void 0,this.codecSet=void 0,this.url=void 0,this.frameRate=void 0,this.height=void 0,this.id=void 0,this.name=void 0,this.supplemental=void 0,this.videoCodec=void 0,this.width=void 0,this.details=void 0,this.fragmentError=0,this.loadError=0,this.loaded=void 0,this.realBitrate=0,this.supportedPromise=void 0,this.supportedResult=void 0,this._avgBitrate=0,this._audioGroups=void 0,this._subtitleGroups=void 0,this._urlId=0,this.url=[e.url],this._attrs=[e.attrs],this.bitrate=e.bitrate,e.details&&(this.details=e.details),this.id=e.id||0,this.name=e.name,this.width=e.width||0,this.height=e.height||0,this.frameRate=e.attrs.optionalFloat("FRAME-RATE",0),this._avgBitrate=e.attrs.decimalInteger("AVERAGE-BANDWIDTH"),this.audioCodec=e.audioCodec,this.videoCodec=e.videoCodec,this.codecSet=[e.videoCodec,e.audioCodec].filter(n=>!!n).map(n=>n.substring(0,4)).join(","),"supplemental"in e){var t;this.supplemental=e.supplemental;const n=(t=e.supplemental)==null?void 0:t.videoCodec;n&&n!==e.videoCodec&&(this.codecSet+=`,${n.substring(0,4)}`)}this.addGroupId("audio",e.attrs.AUDIO),this.addGroupId("text",e.attrs.SUBTITLES)}get maxBitrate(){return Math.max(this.realBitrate,this.bitrate)}get averageBitrate(){return this._avgBitrate||this.realBitrate||this.bitrate}get attrs(){return this._attrs[0]}get codecs(){return this.attrs.CODECS||""}get pathwayId(){return this.attrs["PATHWAY-ID"]||"."}get videoRange(){return this.attrs["VIDEO-RANGE"]||"SDR"}get score(){return this.attrs.optionalFloat("SCORE",0)}get uri(){return this.url[0]||""}hasAudioGroup(e){return ra(this._audioGroups,e)}hasSubtitleGroup(e){return ra(this._subtitleGroups,e)}get audioGroups(){return this._audioGroups}get subtitleGroups(){return this._subtitleGroups}addGroupId(e,t){if(t){if(e==="audio"){let n=this._audioGroups;n||(n=this._audioGroups=[]),n.indexOf(t)===-1&&n.push(t)}else if(e==="text"){let n=this._subtitleGroups;n||(n=this._subtitleGroups=[]),n.indexOf(t)===-1&&n.push(t)}}}get urlId(){return 0}set urlId(e){}get audioGroupIds(){return this.audioGroups?[this.audioGroupId]:void 0}get textGroupIds(){return this.subtitleGroups?[this.textGroupId]:void 0}get audioGroupId(){var e;return(e=this.audioGroups)==null?void 0:e[0]}get textGroupId(){var e;return(e=this.subtitleGroups)==null?void 0:e[0]}addFallback(){}}function ra(a,e){return!e||!a?!1:a.indexOf(e)!==-1}function Ru(){if(typeof matchMedia=="function"){const a=matchMedia("(dynamic-range: high)"),e=matchMedia("bad query");if(a.media!==e.media)return a.matches===!0}return!1}function Du(a,e){let t=!1,n=[];if(a&&(t=a!=="SDR",n=[a]),e){n=e.allowedVideoRanges||Di.slice(0);const i=n.join("")!=="SDR"&&!e.videoCodec;t=e.preferHDR!==void 0?e.preferHDR:i&&Ru(),t||(n=["SDR"])}return{preferHDR:t,allowedVideoRanges:n}}const _u=a=>{const e=new WeakSet;return(t,n)=>{if(a&&(n=a(t,n)),typeof n=="object"&&n!==null){if(e.has(n))return;e.add(n)}return n}},Ie=(a,e)=>JSON.stringify(a,_u(e));function Pu(a,e,t,n,i){const r=Object.keys(a),s=n==null?void 0:n.channels,o=n==null?void 0:n.audioCodec,d=i==null?void 0:i.videoCodec,l=s&&parseInt(s)===2;let c=!1,u=!1,h=1/0,m=1/0,g=1/0,v=1/0,E=0,C=[];const{preferHDR:I,allowedVideoRanges:L}=Du(e,i);for(let O=r.length;O--;){const U=a[r[O]];c||(c=U.channels[2]>0),h=Math.min(h,U.minHeight),m=Math.min(m,U.minFramerate),g=Math.min(g,U.minBitrate),L.filter(V=>U.videoRanges[V]>0).length>0&&(u=!0)}h=Z(h)?h:0,m=Z(m)?m:0;const R=Math.max(1080,h),_=Math.max(30,m);g=Z(g)?g:t,t=Math.max(g,t),u||(e=void 0);const N=r.length>1;return{codecSet:r.reduce((O,U)=>{const D=a[U];if(U===O)return O;if(C=u?L.filter(V=>D.videoRanges[V]>0):[],N){if(D.minBitrate>t)return st(U,`min bitrate of ${D.minBitrate} > current estimate of ${t}`),O;if(!D.hasDefaultAudio)return st(U,"no renditions with default or auto-select sound found"),O;if(o&&U.indexOf(o.substring(0,4))%5!==0)return st(U,`audio codec preference "${o}" not found`),O;if(s&&!l){if(!D.channels[s])return st(U,`no renditions with ${s} channel sound found (channels options: ${Object.keys(D.channels)})`),O}else if((!o||l)&&c&&D.channels[2]===0)return st(U,"no renditions with stereo sound found"),O;if(D.minHeight>R)return st(U,`min resolution of ${D.minHeight} > maximum of ${R}`),O;if(D.minFramerate>_)return st(U,`min framerate of ${D.minFramerate} > maximum of ${_}`),O;if(!C.some(V=>D.videoRanges[V]>0))return st(U,`no variants with VIDEO-RANGE of ${Ie(C)} found`),O;if(d&&U.indexOf(d.substring(0,4))%5!==0)return st(U,`video codec preference "${d}" not found`),O;if(D.maxScore<E)return st(U,`max score of ${D.maxScore} < selected max of ${E}`),O}return O&&(wi(U)>=wi(O)||D.fragmentError>a[O].fragmentError)?O:(v=D.minIndex,E=D.maxScore,U)},void 0),videoRanges:C,preferHDR:I,minFramerate:m,minBitrate:g,minIndex:v}}function st(a,e){be.log(`[abr] start candidates with "${a}" ignored because ${e}`)}function Lo(a){return a.reduce((e,t)=>{let n=e.groups[t.groupId];n||(n=e.groups[t.groupId]={tracks:[],channels:{2:0},hasDefault:!1,hasAutoSelect:!1}),n.tracks.push(t);const i=t.channels||"2";return n.channels[i]=(n.channels[i]||0)+1,n.hasDefault=n.hasDefault||t.default,n.hasAutoSelect=n.hasAutoSelect||t.autoselect,n.hasDefault&&(e.hasDefaultAudio=!0),n.hasAutoSelect&&(e.hasAutoSelectAudio=!0),e},{hasDefaultAudio:!1,hasAutoSelectAudio:!1,groups:{}})}function Bu(a,e,t,n){return a.slice(t,n+1).reduce((i,r,s)=>{if(!r.codecSet)return i;const o=r.audioGroups;let d=i[r.codecSet];d||(i[r.codecSet]=d={minBitrate:1/0,minHeight:1/0,minFramerate:1/0,minIndex:s,maxScore:0,videoRanges:{SDR:0},channels:{2:0},hasDefaultAudio:!o,fragmentError:0}),d.minBitrate=Math.min(d.minBitrate,r.bitrate);const l=Math.min(r.height,r.width);return d.minHeight=Math.min(d.minHeight,l),d.minFramerate=Math.min(d.minFramerate,r.frameRate),d.minIndex=Math.min(d.minIndex,s),d.maxScore=Math.max(d.maxScore,r.score),d.fragmentError+=r.fragmentError,d.videoRanges[r.videoRange]=(d.videoRanges[r.videoRange]||0)+1,o&&o.forEach(c=>{if(!c)return;const u=e.groups[c];u&&(d.hasDefaultAudio=d.hasDefaultAudio||e.hasDefaultAudio?u.hasDefault:u.hasAutoSelect||!e.hasDefaultAudio&&!e.hasAutoSelectAudio,Object.keys(u.channels).forEach(h=>{d.channels[h]=(d.channels[h]||0)+u.channels[h]}))}),i},{})}function sa(a){if(!a)return a;const{lang:e,assocLang:t,characteristics:n,channels:i,audioCodec:r}=a;return{lang:e,assocLang:t,characteristics:n,channels:i,audioCodec:r}}function dt(a,e,t){if("attrs"in a){const n=e.indexOf(a);if(n!==-1)return n}for(let n=0;n<e.length;n++){const i=e[n];if(Mt(a,i,t))return n}return-1}function Mt(a,e,t){const{groupId:n,name:i,lang:r,assocLang:s,default:o}=a,d=a.forced;return(n===void 0||e.groupId===n)&&(i===void 0||e.name===i)&&(r===void 0||Ou(r,e.lang))&&(r===void 0||e.assocLang===s)&&(o===void 0||e.default===o)&&(d===void 0||e.forced===d)&&(!("characteristics"in a)||Fu(a.characteristics||"",e.characteristics))&&(t===void 0||t(a,e))}function Ou(a,e="--"){return a.length===e.length?a===e:a.startsWith(e)||e.startsWith(a)}function Fu(a,e=""){const t=a.split(","),n=e.split(",");return t.length===n.length&&!t.some(i=>n.indexOf(i)===-1)}function Ft(a,e){const{audioCodec:t,channels:n}=a;return(t===void 0||(e.audioCodec||"").substring(0,4)===t.substring(0,4))&&(n===void 0||n===(e.channels||"2"))}function Mu(a,e,t,n,i){const r=e[n],o=e.reduce((h,m,g)=>{const v=m.uri;return(h[v]||(h[v]=[])).push(g),h},{})[r.uri];o.length>1&&(n=Math.max.apply(Math,o));const d=r.videoRange,l=r.frameRate,c=r.codecSet.substring(0,4),u=aa(e,n,h=>{if(h.videoRange!==d||h.frameRate!==l||h.codecSet.substring(0,4)!==c)return!1;const m=h.audioGroups,g=t.filter(v=>!m||m.indexOf(v.groupId)!==-1);return dt(a,g,i)>-1});return u>-1?u:aa(e,n,h=>{const m=h.audioGroups,g=t.filter(v=>!m||m.indexOf(v.groupId)!==-1);return dt(a,g,i)>-1})}function aa(a,e,t){for(let n=e;n>-1;n--)if(t(a[n]))return n;for(let n=e+1;n<a.length;n++)if(t(a[n]))return n;return-1}function _i(a,e){var t;return!!a&&a!==((t=e.loadLevelObj)==null?void 0:t.uri)}class Nu extends vt{constructor(e){super("abr",e.logger),this.hls=void 0,this.lastLevelLoadSec=0,this.lastLoadedFragLevel=-1,this.firstSelection=-1,this._nextAutoLevel=-1,this.nextAutoLevelKey="",this.audioTracksByGroup=null,this.codecTiers=null,this.timer=-1,this.fragCurrent=null,this.partCurrent=null,this.bitrateTestDelay=0,this.rebufferNotice=-1,this.bwEstimator=void 0,this._abandonRulesCheck=t=>{var n;const{fragCurrent:i,partCurrent:r,hls:s}=this,{autoLevelEnabled:o,media:d}=s;if(!i||!d)return;const l=performance.now(),c=r?r.stats:i.stats,u=r?r.duration:i.duration,h=l-c.loading.start,m=s.minAutoLevel,g=i.level,v=this._nextAutoLevel;if(c.aborted||c.loaded&&c.loaded===c.total||g<=m){this.clearTimer(),this._nextAutoLevel=-1;return}if(!o)return;const E=v>-1&&v!==g,C=!!t||E;if(!C&&(d.paused||!d.playbackRate||!d.readyState))return;const I=s.mainForwardBufferInfo;if(!C&&I===null)return;const L=this.bwEstimator.getEstimateTTFB(),R=Math.abs(d.playbackRate);if(h<=Math.max(L,1e3*(u/(R*2))))return;const _=I?I.len/R:0,N=c.loading.first?c.loading.first-c.loading.start:-1,P=c.loaded&&N>-1,O=this.getBwEstimate(),U=s.levels,D=U[g],V=Math.max(c.loaded,Math.round(u*(i.bitrate||D.averageBitrate)/8));let Y=P?h-N:h;Y<1&&P&&(Y=Math.min(h,c.loaded*8/O));const se=P?c.loaded*1e3/Y:0,J=L/1e3,ee=se?(V-c.loaded)/se:V*8/O+J;if(ee<=_)return;const W=se?se*8:O,ne=((n=(t==null?void 0:t.details)||this.hls.latestLevelDetails)==null?void 0:n.live)===!0,ie=this.hls.config.abrBandWidthUpFactor;let $=Number.POSITIVE_INFINITY,q;for(q=g-1;q>m;q--){const ge=U[q].maxBitrate,Ae=!U[q].details||ne;if($=this.getTimeToLoadFrag(J,W,u*ge,Ae),$<Math.min(_,u+J))break}if($>=ee||$>u*10)return;P?this.bwEstimator.sample(h-Math.min(L,N),c.loaded):this.bwEstimator.sampleTTFB(h);const de=U[q].maxBitrate;this.getBwEstimate()*ie>de&&this.resetEstimator(de);const le=this.findBestLevel(de,m,q,0,_,1,1);le>-1&&(q=le),this.warn(`Fragment ${i.sn}${r?" part "+r.index:""} of level ${g} is loading too slowly;
      Fragment duration: ${i.duration.toFixed(3)}
      Time to underbuffer: ${_.toFixed(3)} s
      Estimated load time for current fragment: ${ee.toFixed(3)} s
      Estimated load time for down switch fragment: ${$.toFixed(3)} s
      TTFB estimate: ${N|0} ms
      Current BW estimate: ${Z(O)?O|0:"Unknown"} bps
      New BW estimate: ${this.getBwEstimate()|0} bps
      Switching to level ${q} @ ${de|0} bps`),s.nextLoadLevel=s.nextAutoLevel=q,this.clearTimer();const fe=()=>{if(this.clearTimer(),this.fragCurrent===i&&this.hls.loadLevel===q&&q>0){const ge=this.getStarvationDelay();if(this.warn(`Aborting inflight request ${q>0?"and switching down":""}
      Fragment duration: ${i.duration.toFixed(3)} s
      Time to underbuffer: ${ge.toFixed(3)} s`),i.abortRequests(),this.fragCurrent=this.partCurrent=null,q>m){let Ae=this.findBestLevel(this.hls.levels[m].bitrate,m,q,0,ge,1,1);Ae===-1&&(Ae=m),this.hls.nextLoadLevel=this.hls.nextAutoLevel=Ae,this.resetEstimator(this.hls.levels[Ae].bitrate)}}};E||ee>$*2?fe():this.timer=self.setInterval(fe,$*1e3),s.trigger(x.FRAG_LOAD_EMERGENCY_ABORTED,{frag:i,part:r,stats:c})},this.hls=e,this.bwEstimator=this.initEstimator(),this.registerListeners()}resetEstimator(e){e&&(this.log(`setting initial bwe to ${e}`),this.hls.config.abrEwmaDefaultEstimate=e),this.firstSelection=-1,this.bwEstimator=this.initEstimator()}initEstimator(){const e=this.hls.config;return new Wc(e.abrEwmaSlowVoD,e.abrEwmaFastVoD,e.abrEwmaDefaultEstimate)}registerListeners(){const{hls:e}=this;e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.FRAG_LOADING,this.onFragLoading,this),e.on(x.FRAG_LOADED,this.onFragLoaded,this),e.on(x.FRAG_BUFFERED,this.onFragBuffered,this),e.on(x.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(x.LEVEL_LOADED,this.onLevelLoaded,this),e.on(x.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(x.MAX_AUTO_LEVEL_UPDATED,this.onMaxAutoLevelUpdated,this),e.on(x.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e&&(e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.FRAG_LOADING,this.onFragLoading,this),e.off(x.FRAG_LOADED,this.onFragLoaded,this),e.off(x.FRAG_BUFFERED,this.onFragBuffered,this),e.off(x.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(x.LEVEL_LOADED,this.onLevelLoaded,this),e.off(x.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(x.MAX_AUTO_LEVEL_UPDATED,this.onMaxAutoLevelUpdated,this),e.off(x.ERROR,this.onError,this))}destroy(){this.unregisterListeners(),this.clearTimer(),this.hls=this._abandonRulesCheck=null,this.fragCurrent=this.partCurrent=null}onManifestLoading(e,t){this.lastLoadedFragLevel=-1,this.firstSelection=-1,this.lastLevelLoadSec=0,this.fragCurrent=this.partCurrent=null,this.onLevelsUpdated(),this.clearTimer()}onLevelsUpdated(){this.lastLoadedFragLevel>-1&&this.fragCurrent&&(this.lastLoadedFragLevel=this.fragCurrent.level),this._nextAutoLevel=-1,this.onMaxAutoLevelUpdated(),this.codecTiers=null,this.audioTracksByGroup=null}onMaxAutoLevelUpdated(){this.firstSelection=-1,this.nextAutoLevelKey=""}onFragLoading(e,t){const n=t.frag;if(!this.ignoreFragment(n)){if(!n.bitrateTest){var i;this.fragCurrent=n,this.partCurrent=(i=t.part)!=null?i:null}this.clearTimer(),this.timer=self.setInterval(this._abandonRulesCheck,100)}}onLevelSwitching(e,t){this.clearTimer()}onError(e,t){if(!t.fatal)switch(t.details){case F.BUFFER_ADD_CODEC_ERROR:case F.BUFFER_APPEND_ERROR:this.lastLoadedFragLevel=-1,this.firstSelection=-1;break;case F.FRAG_LOAD_TIMEOUT:{const n=t.frag,{fragCurrent:i,partCurrent:r}=this;if(n&&i&&n.sn===i.sn&&n.level===i.level){const s=performance.now(),o=r?r.stats:n.stats,d=s-o.loading.start,l=o.loading.first?o.loading.first-o.loading.start:-1;if(o.loaded&&l>-1){const u=this.bwEstimator.getEstimateTTFB();this.bwEstimator.sample(d-Math.min(u,l),o.loaded)}else this.bwEstimator.sampleTTFB(d)}break}}}getTimeToLoadFrag(e,t,n,i){const r=e+n/t,s=i?e+this.lastLevelLoadSec:0;return r+s}onLevelLoaded(e,t){const n=this.hls.config,{loading:i}=t.stats,r=i.end-i.first;Z(r)&&(this.lastLevelLoadSec=r/1e3),t.details.live?this.bwEstimator.update(n.abrEwmaSlowLive,n.abrEwmaFastLive):this.bwEstimator.update(n.abrEwmaSlowVoD,n.abrEwmaFastVoD),this.timer>-1&&this._abandonRulesCheck(t.levelInfo)}onFragLoaded(e,{frag:t,part:n}){const i=n?n.stats:t.stats;if(t.type===re.MAIN&&this.bwEstimator.sampleTTFB(i.loading.first-i.loading.start),!this.ignoreFragment(t)){if(this.clearTimer(),t.level===this._nextAutoLevel&&(this._nextAutoLevel=-1),this.firstSelection=-1,this.hls.config.abrMaxWithRealBitrate){const r=n?n.duration:t.duration,s=this.hls.levels[t.level],o=(s.loaded?s.loaded.bytes:0)+i.loaded,d=(s.loaded?s.loaded.duration:0)+r;s.loaded={bytes:o,duration:d},s.realBitrate=Math.round(8*o/d)}if(t.bitrateTest){const r={stats:i,frag:t,part:n,id:t.type};this.onFragBuffered(x.FRAG_BUFFERED,r),t.bitrateTest=!1}else this.lastLoadedFragLevel=t.level}}onFragBuffered(e,t){const{frag:n,part:i}=t,r=i!=null&&i.stats.loaded?i.stats:n.stats;if(r.aborted||this.ignoreFragment(n))return;const s=r.parsing.end-r.loading.start-Math.min(r.loading.first-r.loading.start,this.bwEstimator.getEstimateTTFB());this.bwEstimator.sample(s,r.loaded),r.bwEstimate=this.getBwEstimate(),n.bitrateTest?this.bitrateTestDelay=s/1e3:this.bitrateTestDelay=0}ignoreFragment(e){return e.type!==re.MAIN||e.sn==="initSegment"}clearTimer(){this.timer>-1&&(self.clearInterval(this.timer),this.timer=-1)}get firstAutoLevel(){const{maxAutoLevel:e,minAutoLevel:t}=this.hls,n=this.getBwEstimate(),i=this.hls.config.maxStarvationDelay,r=this.findBestLevel(n,t,e,0,i,1,1);if(r>-1)return r;const s=this.hls.firstLevel,o=Math.min(Math.max(s,t),e);return this.warn(`Could not find best starting auto level. Defaulting to first in playlist ${s} clamped to ${o}`),o}get forcedAutoLevel(){return this.nextAutoLevelKey?-1:this._nextAutoLevel}get nextAutoLevel(){const e=this.forcedAutoLevel,n=this.bwEstimator.canEstimate(),i=this.lastLoadedFragLevel>-1;if(e!==-1&&(!n||!i||this.nextAutoLevelKey===this.getAutoLevelKey()))return e;const r=n&&i?this.getNextABRAutoLevel():this.firstAutoLevel;if(e!==-1){const s=this.hls.levels;if(s.length>Math.max(e,r)&&s[e].loadError<=s[r].loadError)return e}return this._nextAutoLevel=r,this.nextAutoLevelKey=this.getAutoLevelKey(),r}getAutoLevelKey(){return`${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`}getNextABRAutoLevel(){const{fragCurrent:e,partCurrent:t,hls:n}=this;if(n.levels.length<=1)return n.loadLevel;const{maxAutoLevel:i,config:r,minAutoLevel:s}=n,o=t?t.duration:e?e.duration:0,d=this.getBwEstimate(),l=this.getStarvationDelay();let c=r.abrBandWidthFactor,u=r.abrBandWidthUpFactor;if(l){const E=this.findBestLevel(d,s,i,l,0,c,u);if(E>=0)return this.rebufferNotice=-1,E}let h=o?Math.min(o,r.maxStarvationDelay):r.maxStarvationDelay;if(!l){const E=this.bitrateTestDelay;E&&(h=(o?Math.min(o,r.maxLoadingDelay):r.maxLoadingDelay)-E,this.info(`bitrate test took ${Math.round(1e3*E)}ms, set first fragment max fetchDuration to ${Math.round(1e3*h)} ms`),c=u=1)}const m=this.findBestLevel(d,s,i,l,h,c,u);if(this.rebufferNotice!==m&&(this.rebufferNotice=m,this.info(`${l?"rebuffering expected":"buffer is empty"}, optimal quality level ${m}`)),m>-1)return m;const g=n.levels[s],v=n.loadLevelObj;return v&&(g==null?void 0:g.bitrate)<v.bitrate?s:n.loadLevel}getStarvationDelay(){const e=this.hls,t=e.media;if(!t)return 1/0;const n=t&&t.playbackRate!==0?Math.abs(t.playbackRate):1,i=e.mainForwardBufferInfo;return(i?i.len:0)/n}getBwEstimate(){return this.bwEstimator.canEstimate()?this.bwEstimator.getEstimate():this.hls.config.abrEwmaDefaultEstimate}findBestLevel(e,t,n,i,r,s,o){var d;const l=i+r,c=this.lastLoadedFragLevel,u=c===-1?this.hls.firstLevel:c,{fragCurrent:h,partCurrent:m}=this,{levels:g,allAudioTracks:v,loadLevel:E,config:C}=this.hls;if(g.length===1)return 0;const I=g[u],L=!!((d=this.hls.latestLevelDetails)!=null&&d.live),R=E===-1||c===-1;let _,N="SDR",P=(I==null?void 0:I.frameRate)||0;const{audioPreference:O,videoPreference:U}=C,D=this.audioTracksByGroup||(this.audioTracksByGroup=Lo(v));let V=-1;if(R){if(this.firstSelection!==-1)return this.firstSelection;const W=this.codecTiers||(this.codecTiers=Bu(g,D,t,n)),ne=Pu(W,N,e,O,U),{codecSet:ie,videoRanges:$,minFramerate:q,minBitrate:de,minIndex:le,preferHDR:fe}=ne;V=le,_=ie,N=fe?$[$.length-1]:$[0],P=q,e=Math.max(e,de),this.log(`picked start tier ${Ie(ne)}`)}else _=I==null?void 0:I.codecSet,N=I==null?void 0:I.videoRange;const Y=m?m.duration:h?h.duration:0,se=this.bwEstimator.getEstimateTTFB()/1e3,J=[];for(let W=n;W>=t;W--){var ee;const ne=g[W],ie=W>u;if(!ne)continue;if(C.useMediaCapabilities&&!ne.supportedResult&&!ne.supportedPromise){const Ae=navigator.mediaCapabilities;typeof(Ae==null?void 0:Ae.decodingInfo)=="function"&&(Lu(ne,D,N,P,e,O)||Ui(ne.videoCodec))?(ne.supportedPromise=Co(ne,D,Ae),ne.supportedPromise.then(ye=>{if(!this.hls)return;ne.supportedResult=ye;const De=this.hls.levels,we=De.indexOf(ne);ye.error?this.warn(`MediaCapabilities decodingInfo error: "${ye.error}" for level ${we} ${Ie(ye)}`):ye.supported||(this.warn(`Unsupported MediaCapabilities decodingInfo result for level ${we} ${Ie(ye)}`),we>-1&&De.length>1&&(this.log(`Removing unsupported level ${we}`),this.hls.removeLevel(we),this.hls.loadLevel===-1&&(this.hls.nextLoadLevel=0)))})):ne.supportedResult=So}if((_&&ne.codecSet!==_||N&&ne.videoRange!==N||ie&&P>ne.frameRate||!ie&&P>0&&P<ne.frameRate||ne.supportedResult&&!((ee=ne.supportedResult.decodingInfoResults)!=null&&ee[0].smooth))&&(!R||W!==V)){J.push(W);continue}const $=ne.details,q=(m?$==null?void 0:$.partTarget:$==null?void 0:$.averagetargetduration)||Y;let de;ie?de=o*e:de=s*e;const le=Y&&i>=Y*2&&r===0?ne.averageBitrate:ne.maxBitrate,fe=this.getTimeToLoadFrag(se,de,le*q,$===void 0);if(de>=le&&(W===c||ne.loadError===0&&ne.fragmentError===0)&&(fe<=se||!Z(fe)||L&&!this.bitrateTestDelay||fe<l)){const Ae=this.forcedAutoLevel;return W!==E&&(Ae===-1||Ae!==E)&&(J.length&&this.trace(`Skipped level(s) ${J.join(",")} of ${n} max with CODECS and VIDEO-RANGE:"${g[J[0]].codecs}" ${g[J[0]].videoRange}; not compatible with "${_}" ${N}`),this.info(`switch candidate:${u}->${W} adjustedbw(${Math.round(de)})-bitrate=${Math.round(de-le)} ttfb:${se.toFixed(1)} avgDuration:${q.toFixed(1)} maxFetchDuration:${l.toFixed(1)} fetchDuration:${fe.toFixed(1)} firstSelection:${R} codecSet:${ne.codecSet} videoRange:${ne.videoRange} hls.loadLevel:${E}`)),R&&(this.firstSelection=W),W}}return-1}set nextAutoLevel(e){const t=this.deriveNextAutoLevel(e);this._nextAutoLevel!==t&&(this.nextAutoLevelKey="",this._nextAutoLevel=t)}deriveNextAutoLevel(e){const{maxAutoLevel:t,minAutoLevel:n}=this.hls;return Math.min(Math.max(e,n),t)}}const Io={search:function(a,e){let t=0,n=a.length-1,i=null,r=null;for(;t<=n;){i=(t+n)/2|0,r=a[i];const s=e(r);if(s>0)t=i+1;else if(s<0)n=i-1;else return r}return null}};function Uu(a,e,t){if(e===null||!Array.isArray(a)||!a.length||!Z(e))return null;const n=a[0].programDateTime;if(e<(n||0))return null;const i=a[a.length-1].endProgramDateTime;if(e>=(i||0))return null;for(let r=0;r<a.length;++r){const s=a[r];if(Gu(e,t,s))return s}return null}function Nt(a,e,t=0,n=0,i=.005){let r=null;if(a){r=e[1+a.sn-e[0].sn]||null;const o=a.endDTS-t;o>0&&o<15e-7&&(t+=15e-7),r&&a.level!==r.level&&r.end<=a.end&&(r=e[2+a.sn-e[0].sn]||null)}else t===0&&e[0].start===0&&(r=e[0]);if(r&&((!a||a.level===r.level)&&oa(t,n,r)===0||$u(r,a,Math.min(i,n))))return r;const s=Io.search(e,oa.bind(null,t,n));return s&&(s!==a||!r)?s:r}function $u(a,e,t){if(e&&e.start===0&&e.level<a.level&&(e.endPTS||0)>0){const n=e.tagList.reduce((i,r)=>(r[0]==="INF"&&(i+=parseFloat(r[1])),i),t);return a.start<=n}return!1}function oa(a=0,e=0,t){if(t.start<=a&&t.start+t.duration>a)return 0;const n=Math.min(e,t.duration+(t.deltaPTS?t.deltaPTS:0));return t.start+t.duration-n<=a?1:t.start-n>a&&t.start?-1:0}function Gu(a,e,t){const n=Math.min(e,t.duration+(t.deltaPTS?t.deltaPTS:0))*1e3;return(t.endProgramDateTime||0)-n>a}function ko(a,e,t){if(a&&a.startCC<=e&&a.endCC>=e){let n=a.fragments;const{fragmentHint:i}=a;i&&(n=n.concat(i));let r;return Io.search(n,s=>s.cc<e?1:s.cc>e?-1:(r=s,s.end<=t?1:s.start>t?-1:0)),r||null}return null}function Pi(a){switch(a.details){case F.FRAG_LOAD_TIMEOUT:case F.KEY_LOAD_TIMEOUT:case F.LEVEL_LOAD_TIMEOUT:case F.MANIFEST_LOAD_TIMEOUT:return!0}return!1}function la(a,e){const t=Pi(e);return a.default[`${t?"timeout":"error"}Retry`]}function zr(a,e){const t=a.backoff==="linear"?1:Math.pow(2,e);return Math.min(t*a.retryDelayMs,a.maxRetryDelayMs)}function da(a){return Ee(Ee({},a),{errorRetry:null,timeoutRetry:null})}function Bi(a,e,t,n){if(!a)return!1;const i=n==null?void 0:n.code,r=e<a.maxNumRetry&&(Ku(i)||!!t);return a.shouldRetry?a.shouldRetry(a,e,t,n,r):r}function Ku(a){return a===0&&navigator.onLine===!1||!!a&&(a<400||a>499)}var Ue={DoNothing:0,SendAlternateToPenaltyBox:2,RemoveAlternatePermanently:3,RetryRequest:5},nt={None:0,MoveAllAlternatesMatchingHost:1,MoveAllAlternatesMatchingHDCP:2};class Hu extends vt{constructor(e){super("error-controller",e.logger),this.hls=void 0,this.playlistError=0,this.penalizedRenditions={},this.hls=e,this.registerListeners()}registerListeners(){const e=this.hls;e.on(x.ERROR,this.onError,this),e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.LEVEL_UPDATED,this.onLevelUpdated,this)}unregisterListeners(){const e=this.hls;e&&(e.off(x.ERROR,this.onError,this),e.off(x.ERROR,this.onErrorOut,this),e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.LEVEL_UPDATED,this.onLevelUpdated,this))}destroy(){this.unregisterListeners(),this.hls=null,this.penalizedRenditions={}}startLoad(e){}stopLoad(){this.playlistError=0}getVariantLevelIndex(e){return(e==null?void 0:e.type)===re.MAIN?e.level:this.hls.loadLevel}onManifestLoading(){this.playlistError=0,this.penalizedRenditions={}}onLevelUpdated(){this.playlistError=0}onError(e,t){var n;if(t.fatal)return;const i=this.hls,r=t.context;switch(t.details){case F.FRAG_LOAD_ERROR:case F.FRAG_LOAD_TIMEOUT:case F.KEY_LOAD_ERROR:case F.KEY_LOAD_TIMEOUT:t.errorAction=this.getFragRetryOrSwitchAction(t);return;case F.FRAG_PARSING_ERROR:if((n=t.frag)!=null&&n.gap){t.errorAction=Kn();return}case F.FRAG_GAP:case F.FRAG_DECRYPT_ERROR:{t.errorAction=this.getFragRetryOrSwitchAction(t),t.errorAction.action=Ue.SendAlternateToPenaltyBox;return}case F.LEVEL_EMPTY_ERROR:case F.LEVEL_PARSING_ERROR:{var s,o;const l=t.parent===re.MAIN?t.level:i.loadLevel;t.details===F.LEVEL_EMPTY_ERROR&&((s=t.context)!=null&&(o=s.levelDetails)!=null&&o.live)?t.errorAction=this.getPlaylistRetryOrSwitchAction(t,l):(t.levelRetry=!1,t.errorAction=this.getLevelSwitchAction(t,l))}return;case F.LEVEL_LOAD_ERROR:case F.LEVEL_LOAD_TIMEOUT:typeof(r==null?void 0:r.level)=="number"&&(t.errorAction=this.getPlaylistRetryOrSwitchAction(t,r.level));return;case F.AUDIO_TRACK_LOAD_ERROR:case F.AUDIO_TRACK_LOAD_TIMEOUT:case F.SUBTITLE_LOAD_ERROR:case F.SUBTITLE_TRACK_LOAD_TIMEOUT:if(r){const l=i.loadLevelObj;if(l&&(r.type===me.AUDIO_TRACK&&l.hasAudioGroup(r.groupId)||r.type===me.SUBTITLE_TRACK&&l.hasSubtitleGroup(r.groupId))){t.errorAction=this.getPlaylistRetryOrSwitchAction(t,i.loadLevel),t.errorAction.action=Ue.SendAlternateToPenaltyBox,t.errorAction.flags=nt.MoveAllAlternatesMatchingHost;return}}return;case F.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:{const l=i.loadLevelObj,c=l==null?void 0:l.attrs["HDCP-LEVEL"];c?t.errorAction={action:Ue.SendAlternateToPenaltyBox,flags:nt.MoveAllAlternatesMatchingHDCP,hdcpLevel:c}:this.keySystemError(t)}return;case F.BUFFER_ADD_CODEC_ERROR:case F.REMUX_ALLOC_ERROR:case F.BUFFER_APPEND_ERROR:if(!t.errorAction){var d;t.errorAction=this.getLevelSwitchAction(t,(d=t.level)!=null?d:i.loadLevel)}return;case F.INTERNAL_EXCEPTION:case F.BUFFER_APPENDING_ERROR:case F.BUFFER_FULL_ERROR:case F.LEVEL_SWITCH_ERROR:case F.BUFFER_STALLED_ERROR:case F.BUFFER_SEEK_OVER_HOLE:case F.BUFFER_NUDGE_ON_STALL:t.errorAction=Kn();return}t.type===oe.KEY_SYSTEM_ERROR&&this.keySystemError(t)}keySystemError(e){const t=this.getVariantLevelIndex(e.frag);e.levelRetry=!1,e.errorAction=this.getLevelSwitchAction(e,t)}getPlaylistRetryOrSwitchAction(e,t){const n=this.hls,i=la(n.config.playlistLoadPolicy,e),r=this.playlistError++;if(Bi(i,r,Pi(e),e.response))return{action:Ue.RetryRequest,flags:nt.None,retryConfig:i,retryCount:r};const o=this.getLevelSwitchAction(e,t);return i&&(o.retryConfig=i,o.retryCount=r),o}getFragRetryOrSwitchAction(e){const t=this.hls,n=this.getVariantLevelIndex(e.frag),i=t.levels[n],{fragLoadPolicy:r,keyLoadPolicy:s}=t.config,o=la(e.details.startsWith("key")?s:r,e),d=t.levels.reduce((c,u)=>c+u.fragmentError,0);if(i&&(e.details!==F.FRAG_GAP&&i.fragmentError++,Bi(o,d,Pi(e),e.response)))return{action:Ue.RetryRequest,flags:nt.None,retryConfig:o,retryCount:d};const l=this.getLevelSwitchAction(e,n);return o&&(l.retryConfig=o,l.retryCount=d),l}getLevelSwitchAction(e,t){const n=this.hls;t==null&&(t=n.loadLevel);const i=this.hls.levels[t];if(i){var r,s;const l=e.details;i.loadError++,l===F.BUFFER_APPEND_ERROR&&i.fragmentError++;let c=-1;const{levels:u,loadLevel:h,minAutoLevel:m,maxAutoLevel:g}=n;!n.autoLevelEnabled&&!n.config.preserveManualLevelOnError&&(n.loadLevel=-1);const v=(r=e.frag)==null?void 0:r.type,C=(v===re.AUDIO&&l===F.FRAG_PARSING_ERROR||e.sourceBufferName==="audio"&&(l===F.BUFFER_ADD_CODEC_ERROR||l===F.BUFFER_APPEND_ERROR))&&u.some(({audioCodec:N})=>i.audioCodec!==N),L=e.sourceBufferName==="video"&&(l===F.BUFFER_ADD_CODEC_ERROR||l===F.BUFFER_APPEND_ERROR)&&u.some(({codecSet:N,audioCodec:P})=>i.codecSet!==N&&i.audioCodec===P),{type:R,groupId:_}=(s=e.context)!=null?s:{};for(let N=u.length;N--;){const P=(N+h)%u.length;if(P!==h&&P>=m&&P<=g&&u[P].loadError===0){var o,d;const O=u[P];if(l===F.FRAG_GAP&&v===re.MAIN&&e.frag){const U=u[P].details;if(U){const D=Nt(e.frag,U.fragments,e.frag.start);if(D!=null&&D.gap)continue}}else{if(R===me.AUDIO_TRACK&&O.hasAudioGroup(_)||R===me.SUBTITLE_TRACK&&O.hasSubtitleGroup(_))continue;if(v===re.AUDIO&&(o=i.audioGroups)!=null&&o.some(U=>O.hasAudioGroup(U))||v===re.SUBTITLE&&(d=i.subtitleGroups)!=null&&d.some(U=>O.hasSubtitleGroup(U))||C&&i.audioCodec===O.audioCodec||!C&&i.audioCodec!==O.audioCodec||L&&i.codecSet===O.codecSet)continue}c=P;break}}if(c>-1&&n.loadLevel!==c)return e.levelRetry=!0,this.playlistError=0,{action:Ue.SendAlternateToPenaltyBox,flags:nt.None,nextAutoLevel:c}}return{action:Ue.SendAlternateToPenaltyBox,flags:nt.MoveAllAlternatesMatchingHost}}onErrorOut(e,t){var n;switch((n=t.errorAction)==null?void 0:n.action){case Ue.DoNothing:break;case Ue.SendAlternateToPenaltyBox:this.sendAlternateToPenaltyBox(t),!t.errorAction.resolved&&t.details!==F.FRAG_GAP?t.fatal=!0:/MediaSource readyState: ended/.test(t.error.message)&&(this.warn(`MediaSource ended after "${t.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`),this.hls.recoverMediaError());break}if(t.fatal){this.hls.stopLoad();return}}sendAlternateToPenaltyBox(e){const t=this.hls,n=e.errorAction;if(!n)return;const{flags:i,hdcpLevel:r,nextAutoLevel:s}=n;switch(i){case nt.None:this.switchLevel(e,s);break;case nt.MoveAllAlternatesMatchingHDCP:r&&(t.maxHdcpLevel=_r[_r.indexOf(r)-1],n.resolved=!0),this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);break}n.resolved||this.switchLevel(e,s)}switchLevel(e,t){if(t!==void 0&&e.errorAction&&(this.warn(`switching to level ${t} after ${e.details}`),this.hls.nextAutoLevel=t,e.errorAction.resolved=!0,this.hls.nextLoadLevel=this.hls.nextAutoLevel,e.details===F.BUFFER_ADD_CODEC_ERROR&&e.mimeType&&e.sourceBufferName!=="audiovideo")){const n=xo(e.mimeType),i=this.hls.levels;for(let r=i.length;r--;)i[r][`${e.sourceBufferName}Codec`]===n&&this.hls.removeLevel(r)}}}function Kn(a){const e={action:Ue.DoNothing,flags:nt.None};return a&&(e.resolved=!0),e}var Oe={NOT_LOADED:"NOT_LOADED",APPENDING:"APPENDING",PARTIAL:"PARTIAL",OK:"OK"};class Vu{constructor(e){this.activePartLists=Object.create(null),this.endListFragments=Object.create(null),this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.bufferPadding=.2,this.hls=void 0,this.hasGaps=!1,this.hls=e,this._registerListeners()}_registerListeners(){const{hls:e}=this;e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.BUFFER_APPENDED,this.onBufferAppended,this),e.on(x.FRAG_BUFFERED,this.onFragBuffered,this),e.on(x.FRAG_LOADED,this.onFragLoaded,this)}_unregisterListeners(){const{hls:e}=this;e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.BUFFER_APPENDED,this.onBufferAppended,this),e.off(x.FRAG_BUFFERED,this.onFragBuffered,this),e.off(x.FRAG_LOADED,this.onFragLoaded,this)}destroy(){this._unregisterListeners(),this.fragments=this.activePartLists=this.endListFragments=this.timeRanges=null}getAppendedFrag(e,t){const n=this.activePartLists[t];if(n)for(let i=n.length;i--;){const r=n[i];if(!r)break;const s=r.end;if(r.start<=e&&s!==null&&e<=s)return r}return this.getBufferedFrag(e,t)}getBufferedFrag(e,t){return this.getFragAtPos(e,t,!0)}getFragAtPos(e,t,n){const{fragments:i}=this,r=Object.keys(i);for(let s=r.length;s--;){const o=i[r[s]];if((o==null?void 0:o.body.type)===t&&(!n||o.buffered)){const d=o.body;if(d.start<=e&&e<=d.end)return d}}return null}detectEvictedFragments(e,t,n,i,r){this.timeRanges&&(this.timeRanges[e]=t);const s=(i==null?void 0:i.fragment.sn)||-1;Object.keys(this.fragments).forEach(o=>{const d=this.fragments[o];if(!d||s>=d.body.sn)return;if(!d.buffered&&(!d.loaded||r)){d.body.type===n&&this.removeFragment(d.body);return}const l=d.range[e];if(l){if(l.time.length===0){this.removeFragment(d.body);return}l.time.some(c=>{const u=!this.isTimeBuffered(c.startPTS,c.endPTS,t);return u&&this.removeFragment(d.body),u})}})}detectPartialFragments(e){const t=this.timeRanges;if(!t||e.frag.sn==="initSegment")return;const n=e.frag,i=Wt(n),r=this.fragments[i];if(!r||r.buffered&&n.gap)return;const s=!n.relurl;Object.keys(t).forEach(o=>{const d=n.elementaryStreams[o];if(!d)return;const l=t[o],c=s||d.partial===!0;r.range[o]=this.getBufferedTimes(n,e.part,c,l)}),r.loaded=null,Object.keys(r.range).length?(r.buffered=!0,(r.body.endList=n.endList||r.body.endList)&&(this.endListFragments[r.body.type]=r),oi(r)||this.removeParts(n.sn-1,n.type)):this.removeFragment(r.body)}removeParts(e,t){const n=this.activePartLists[t];n&&(this.activePartLists[t]=ca(n,i=>i.fragment.sn>=e))}fragBuffered(e,t){const n=Wt(e);let i=this.fragments[n];!i&&t&&(i=this.fragments[n]={body:e,appendedPTS:null,loaded:null,buffered:!1,range:Object.create(null)},e.gap&&(this.hasGaps=!0)),i&&(i.loaded=null,i.buffered=!0)}getBufferedTimes(e,t,n,i){const r={time:[],partial:n},s=e.start,o=e.end,d=e.minEndPTS||o,l=e.maxStartPTS||s;for(let c=0;c<i.length;c++){const u=i.start(c)-this.bufferPadding,h=i.end(c)+this.bufferPadding;if(l>=u&&d<=h){r.time.push({startPTS:Math.max(s,i.start(c)),endPTS:Math.min(o,i.end(c))});break}else if(s<h&&o>u){const m=Math.max(s,i.start(c)),g=Math.min(o,i.end(c));g>m&&(r.partial=!0,r.time.push({startPTS:m,endPTS:g}))}else if(o<=u)break}return r}getPartialFragment(e){let t=null,n,i,r,s=0;const{bufferPadding:o,fragments:d}=this;return Object.keys(d).forEach(l=>{const c=d[l];c&&oi(c)&&(i=c.body.start-o,r=c.body.end+o,e>=i&&e<=r&&(n=Math.min(e-i,r-e),s<=n&&(t=c.body,s=n)))}),t}isEndListAppended(e){const t=this.endListFragments[e];return t!==void 0&&(t.buffered||oi(t))}getState(e){const t=Wt(e),n=this.fragments[t];return n?n.buffered?oi(n)?Oe.PARTIAL:Oe.OK:Oe.APPENDING:Oe.NOT_LOADED}isTimeBuffered(e,t,n){let i,r;for(let s=0;s<n.length;s++){if(i=n.start(s)-this.bufferPadding,r=n.end(s)+this.bufferPadding,e>=i&&t<=r)return!0;if(t<=i)return!1}return!1}onManifestLoading(){this.removeAllFragments()}onFragLoaded(e,t){if(t.frag.sn==="initSegment"||t.frag.bitrateTest)return;const n=t.frag,i=t.part?null:t,r=Wt(n);this.fragments[r]={body:n,appendedPTS:null,loaded:i,buffered:!1,range:Object.create(null)}}onBufferAppended(e,t){const{frag:n,part:i,timeRanges:r,type:s}=t;if(n.sn==="initSegment")return;const o=n.type;if(i){let l=this.activePartLists[o];l||(this.activePartLists[o]=l=[]),l.push(i)}this.timeRanges=r;const d=r[s];this.detectEvictedFragments(s,d,o,i)}onFragBuffered(e,t){this.detectPartialFragments(t)}hasFragment(e){const t=Wt(e);return!!this.fragments[t]}hasFragments(e){const{fragments:t}=this,n=Object.keys(t);if(!e)return n.length>0;for(let i=n.length;i--;){const r=t[n[i]];if((r==null?void 0:r.body.type)===e)return!0}return!1}hasParts(e){var t;return!!((t=this.activePartLists[e])!=null&&t.length)}removeFragmentsInRange(e,t,n,i,r){i&&!this.hasGaps||Object.keys(this.fragments).forEach(s=>{const o=this.fragments[s];if(!o)return;const d=o.body;d.type!==n||i&&!d.gap||d.start<t&&d.end>e&&(o.buffered||r)&&this.removeFragment(d)})}removeFragment(e){const t=Wt(e);e.clearElementaryStreamInfo();const n=this.activePartLists[e.type];if(n){const i=e.sn;this.activePartLists[e.type]=ca(n,r=>r.fragment.sn!==i)}delete this.fragments[t],e.endList&&delete this.endListFragments[e.type]}removeAllFragments(){var e,t;this.fragments=Object.create(null),this.endListFragments=Object.create(null),this.activePartLists=Object.create(null),this.hasGaps=!1;const n=(e=this.hls)==null||(t=e.latestLevelDetails)==null?void 0:t.partList;n&&n.forEach(i=>i.clearElementaryStreamInfo())}}function oi(a){var e,t,n;return a.buffered&&(a.body.gap||((e=a.range.video)==null?void 0:e.partial)||((t=a.range.audio)==null?void 0:t.partial)||((n=a.range.audiovideo)==null?void 0:n.partial))}function Wt(a){return`${a.type}_${a.level}_${a.sn}`}function ca(a,e){return a.filter(t=>{const n=e(t);return n||t.clearElementaryStreamInfo(),n})}var Dt={cbc:0,ctr:1};class qu{constructor(e,t,n){this.subtle=void 0,this.aesIV=void 0,this.aesMode=void 0,this.subtle=e,this.aesIV=t,this.aesMode=n}decrypt(e,t){switch(this.aesMode){case Dt.cbc:return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},t,e);case Dt.ctr:return this.subtle.decrypt({name:"AES-CTR",counter:this.aesIV,length:64},t,e);default:throw new Error(`[AESCrypto] invalid aes mode ${this.aesMode}`)}}}function Yu(a){const e=a.byteLength,t=e&&new DataView(a.buffer).getUint8(e-1);return t?a.slice(0,e-t):a}class ju{constructor(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.ksRows=0,this.keySize=0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.initTable()}uint8ArrayToUint32Array_(e){const t=new DataView(e),n=new Uint32Array(4);for(let i=0;i<4;i++)n[i]=t.getUint32(i*4);return n}initTable(){const e=this.sBox,t=this.invSBox,n=this.subMix,i=n[0],r=n[1],s=n[2],o=n[3],d=this.invSubMix,l=d[0],c=d[1],u=d[2],h=d[3],m=new Uint32Array(256);let g=0,v=0,E=0;for(E=0;E<256;E++)E<128?m[E]=E<<1:m[E]=E<<1^283;for(E=0;E<256;E++){let C=v^v<<1^v<<2^v<<3^v<<4;C=C>>>8^C&255^99,e[g]=C,t[C]=g;const I=m[g],L=m[I],R=m[L];let _=m[C]*257^C*16843008;i[g]=_<<24|_>>>8,r[g]=_<<16|_>>>16,s[g]=_<<8|_>>>24,o[g]=_,_=R*16843009^L*65537^I*257^g*16843008,l[C]=_<<24|_>>>8,c[C]=_<<16|_>>>16,u[C]=_<<8|_>>>24,h[C]=_,g?(g=I^m[m[m[R^I]]],v^=m[m[v]]):g=v=1}}expandKey(e){const t=this.uint8ArrayToUint32Array_(e);let n=!0,i=0;for(;i<t.length&&n;)n=t[i]===this.key[i],i++;if(n)return;this.key=t;const r=this.keySize=t.length;if(r!==4&&r!==6&&r!==8)throw new Error("Invalid aes key size="+r);const s=this.ksRows=(r+6+1)*4;let o,d;const l=this.keySchedule=new Uint32Array(s),c=this.invKeySchedule=new Uint32Array(s),u=this.sBox,h=this.rcon,m=this.invSubMix,g=m[0],v=m[1],E=m[2],C=m[3];let I,L;for(o=0;o<s;o++){if(o<r){I=l[o]=t[o];continue}L=I,o%r===0?(L=L<<8|L>>>24,L=u[L>>>24]<<24|u[L>>>16&255]<<16|u[L>>>8&255]<<8|u[L&255],L^=h[o/r|0]<<24):r>6&&o%r===4&&(L=u[L>>>24]<<24|u[L>>>16&255]<<16|u[L>>>8&255]<<8|u[L&255]),l[o]=I=(l[o-r]^L)>>>0}for(d=0;d<s;d++)o=s-d,d&3?L=l[o]:L=l[o-4],d<4||o<=4?c[d]=L:c[d]=g[u[L>>>24]]^v[u[L>>>16&255]]^E[u[L>>>8&255]]^C[u[L&255]],c[d]=c[d]>>>0}networkToHostOrderSwap(e){return e<<24|(e&65280)<<8|(e&16711680)>>8|e>>>24}decrypt(e,t,n){const i=this.keySize+6,r=this.invKeySchedule,s=this.invSBox,o=this.invSubMix,d=o[0],l=o[1],c=o[2],u=o[3],h=this.uint8ArrayToUint32Array_(n);let m=h[0],g=h[1],v=h[2],E=h[3];const C=new Int32Array(e),I=new Int32Array(C.length);let L,R,_,N,P,O,U,D,V,Y,se,J,ee,W;const ne=this.networkToHostOrderSwap;for(;t<C.length;){for(V=ne(C[t]),Y=ne(C[t+1]),se=ne(C[t+2]),J=ne(C[t+3]),P=V^r[0],O=J^r[1],U=se^r[2],D=Y^r[3],ee=4,W=1;W<i;W++)L=d[P>>>24]^l[O>>16&255]^c[U>>8&255]^u[D&255]^r[ee],R=d[O>>>24]^l[U>>16&255]^c[D>>8&255]^u[P&255]^r[ee+1],_=d[U>>>24]^l[D>>16&255]^c[P>>8&255]^u[O&255]^r[ee+2],N=d[D>>>24]^l[P>>16&255]^c[O>>8&255]^u[U&255]^r[ee+3],P=L,O=R,U=_,D=N,ee=ee+4;L=s[P>>>24]<<24^s[O>>16&255]<<16^s[U>>8&255]<<8^s[D&255]^r[ee],R=s[O>>>24]<<24^s[U>>16&255]<<16^s[D>>8&255]<<8^s[P&255]^r[ee+1],_=s[U>>>24]<<24^s[D>>16&255]<<16^s[P>>8&255]<<8^s[O&255]^r[ee+2],N=s[D>>>24]<<24^s[P>>16&255]<<16^s[O>>8&255]<<8^s[U&255]^r[ee+3],I[t]=ne(L^m),I[t+1]=ne(N^g),I[t+2]=ne(_^v),I[t+3]=ne(R^E),m=V,g=Y,v=se,E=J,t=t+4}return I.buffer}}class Wu{constructor(e,t,n){this.subtle=void 0,this.key=void 0,this.aesMode=void 0,this.subtle=e,this.key=t,this.aesMode=n}expandKey(){const e=zu(this.aesMode);return this.subtle.importKey("raw",this.key,{name:e},!1,["encrypt","decrypt"])}}function zu(a){switch(a){case Dt.cbc:return"AES-CBC";case Dt.ctr:return"AES-CTR";default:throw new Error(`[FastAESKey] invalid aes mode ${a}`)}}const Qu=16;class Qr{constructor(e,{removePKCS7Padding:t=!0}={}){if(this.logEnabled=!0,this.removePKCS7Padding=void 0,this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null,this.useSoftware=void 0,this.enableSoftwareAES=void 0,this.enableSoftwareAES=e.enableSoftwareAES,this.removePKCS7Padding=t,t)try{const n=self.crypto;n&&(this.subtle=n.subtle||n.webkitSubtle)}catch{}this.useSoftware=!this.subtle}destroy(){this.subtle=null,this.softwareDecrypter=null,this.key=null,this.fastAesKey=null,this.remainderData=null,this.currentIV=null,this.currentResult=null}isSync(){return this.useSoftware}flush(){const{currentResult:e,remainderData:t}=this;if(!e||t)return this.reset(),null;const n=new Uint8Array(e);return this.reset(),this.removePKCS7Padding?Yu(n):n}reset(){this.currentResult=null,this.currentIV=null,this.remainderData=null,this.softwareDecrypter&&(this.softwareDecrypter=null)}decrypt(e,t,n,i){return this.useSoftware?new Promise((r,s)=>{const o=ArrayBuffer.isView(e)?e:new Uint8Array(e);this.softwareDecrypt(o,t,n,i);const d=this.flush();d?r(d.buffer):s(new Error("[softwareDecrypt] Failed to decrypt data"))}):this.webCryptoDecrypt(new Uint8Array(e),t,n,i)}softwareDecrypt(e,t,n,i){const{currentIV:r,currentResult:s,remainderData:o}=this;if(i!==Dt.cbc||t.byteLength!==16)return be.warn("SoftwareDecrypt: can only handle AES-128-CBC"),null;this.logOnce("JS AES decrypt"),o&&(e=Je(o,e),this.remainderData=null);const d=this.getValidChunk(e);if(!d.length)return null;r&&(n=r);let l=this.softwareDecrypter;l||(l=this.softwareDecrypter=new ju),l.expandKey(t);const c=s;return this.currentResult=l.decrypt(d.buffer,0,n),this.currentIV=d.slice(-16).buffer,c||null}webCryptoDecrypt(e,t,n,i){if(this.key!==t||!this.fastAesKey){if(!this.subtle)return Promise.resolve(this.onWebCryptoError(e,t,n,i));this.key=t,this.fastAesKey=new Wu(this.subtle,t,i)}return this.fastAesKey.expandKey().then(r=>this.subtle?(this.logOnce("WebCrypto AES decrypt"),new qu(this.subtle,new Uint8Array(n),i).decrypt(e.buffer,r)):Promise.reject(new Error("web crypto not initialized"))).catch(r=>(be.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${r.name}: ${r.message}`),this.onWebCryptoError(e,t,n,i)))}onWebCryptoError(e,t,n,i){const r=this.enableSoftwareAES;if(r){this.useSoftware=!0,this.logEnabled=!0,this.softwareDecrypt(e,t,n,i);const s=this.flush();if(s)return s.buffer}throw new Error("WebCrypto"+(r?" and softwareDecrypt":"")+": failed to decrypt data")}getValidChunk(e){let t=e;const n=e.length-e.length%Qu;return n!==e.length&&(t=e.slice(0,n),this.remainderData=e.slice(n)),t}logOnce(e){this.logEnabled&&(be.log(`[decrypter]: ${e}`),this.logEnabled=!1)}}const ua=Math.pow(2,17);class Xu{constructor(e){this.config=void 0,this.loader=null,this.partLoadTimeout=-1,this.config=e}destroy(){this.loader&&(this.loader.destroy(),this.loader=null)}abort(){this.loader&&this.loader.abort()}load(e,t){const n=e.url;if(!n)return Promise.reject(new yt({type:oe.NETWORK_ERROR,details:F.FRAG_LOAD_ERROR,fatal:!1,frag:e,error:new Error(`Fragment does not have a ${n?"part list":"url"}`),networkDetails:null}));this.abort();const i=this.config,r=i.fLoader,s=i.loader;return new Promise((o,d)=>{if(this.loader&&this.loader.destroy(),e.gap)if(e.tagList.some(g=>g[0]==="GAP")){d(fa(e));return}else e.gap=!1;const l=this.loader=r?new r(i):new s(i),c=ha(e);e.loader=l;const u=da(i.fragLoadPolicy.default),h={loadPolicy:u,timeout:u.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0,highWaterMark:e.sn==="initSegment"?1/0:ua};e.stats=l.stats;const m={onSuccess:(g,v,E,C)=>{this.resetLoader(e,l);let I=g.data;E.resetIV&&e.decryptdata&&(e.decryptdata.iv=new Uint8Array(I.slice(0,16)),I=I.slice(16)),o({frag:e,part:null,payload:I,networkDetails:C})},onError:(g,v,E,C)=>{this.resetLoader(e,l),d(new yt({type:oe.NETWORK_ERROR,details:F.FRAG_LOAD_ERROR,fatal:!1,frag:e,response:Ee({url:n,data:void 0},g),error:new Error(`HTTP Error ${g.code} ${g.text}`),networkDetails:E,stats:C}))},onAbort:(g,v,E)=>{this.resetLoader(e,l),d(new yt({type:oe.NETWORK_ERROR,details:F.INTERNAL_ABORTED,fatal:!1,frag:e,error:new Error("Aborted"),networkDetails:E,stats:g}))},onTimeout:(g,v,E)=>{this.resetLoader(e,l),d(new yt({type:oe.NETWORK_ERROR,details:F.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e,error:new Error(`Timeout after ${h.timeout}ms`),networkDetails:E,stats:g}))}};t&&(m.onProgress=(g,v,E,C)=>t({frag:e,part:null,payload:E,networkDetails:C})),l.load(c,h,m)})}loadPart(e,t,n){this.abort();const i=this.config,r=i.fLoader,s=i.loader;return new Promise((o,d)=>{if(this.loader&&this.loader.destroy(),e.gap||t.gap){d(fa(e,t));return}const l=this.loader=r?new r(i):new s(i),c=ha(e,t);e.loader=l;const u=da(i.fragLoadPolicy.default),h={loadPolicy:u,timeout:u.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0,highWaterMark:ua};t.stats=l.stats,l.load(c,h,{onSuccess:(m,g,v,E)=>{this.resetLoader(e,l),this.updateStatsFromPart(e,t);const C={frag:e,part:t,payload:m.data,networkDetails:E};n(C),o(C)},onError:(m,g,v,E)=>{this.resetLoader(e,l),d(new yt({type:oe.NETWORK_ERROR,details:F.FRAG_LOAD_ERROR,fatal:!1,frag:e,part:t,response:Ee({url:c.url,data:void 0},m),error:new Error(`HTTP Error ${m.code} ${m.text}`),networkDetails:v,stats:E}))},onAbort:(m,g,v)=>{e.stats.aborted=t.stats.aborted,this.resetLoader(e,l),d(new yt({type:oe.NETWORK_ERROR,details:F.INTERNAL_ABORTED,fatal:!1,frag:e,part:t,error:new Error("Aborted"),networkDetails:v,stats:m}))},onTimeout:(m,g,v)=>{this.resetLoader(e,l),d(new yt({type:oe.NETWORK_ERROR,details:F.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e,part:t,error:new Error(`Timeout after ${h.timeout}ms`),networkDetails:v,stats:m}))}})})}updateStatsFromPart(e,t){const n=e.stats,i=t.stats,r=i.total;if(n.loaded+=i.loaded,r){const d=Math.round(e.duration/t.duration),l=Math.min(Math.round(n.loaded/r),d),u=(d-l)*Math.round(n.loaded/l);n.total=n.loaded+u}else n.total=Math.max(n.loaded,n.total);const s=n.loading,o=i.loading;s.start?s.first+=o.first-o.start:(s.start=o.start,s.first=o.first),s.end=o.end}resetLoader(e,t){e.loader=null,this.loader===t&&(self.clearTimeout(this.partLoadTimeout),this.loader=null),t.destroy()}}function ha(a,e=null){const t=e||a,n={frag:a,part:e,responseType:"arraybuffer",url:t.url,headers:{},rangeStart:0,rangeEnd:0},i=t.byteRangeStartOffset,r=t.byteRangeEndOffset;if(Z(i)&&Z(r)){var s;let o=i,d=r;if(a.sn==="initSegment"&&Zu((s=a.decryptdata)==null?void 0:s.method)){const l=r-i;l%16&&(d=r+(16-l%16)),i!==0&&(n.resetIV=!0,o=i-16)}n.rangeStart=o,n.rangeEnd=d}return n}function fa(a,e){const t=new Error(`GAP ${a.gap?"tag":"attribute"} found`),n={type:oe.MEDIA_ERROR,details:F.FRAG_GAP,fatal:!1,frag:a,error:t,networkDetails:null};return e&&(n.part=e),(e||a).stats.aborted=!0,new yt(n)}function Zu(a){return a==="AES-128"||a==="AES-256"}class yt extends Error{constructor(e){super(e.error.message),this.data=void 0,this.data=e}}class wo extends vt{constructor(e,t){super(e,t),this._boundTick=void 0,this._tickTimer=null,this._tickInterval=null,this._tickCallCount=0,this._boundTick=this.tick.bind(this)}destroy(){this.onHandlerDestroying(),this.onHandlerDestroyed()}onHandlerDestroying(){this.clearNextTick(),this.clearInterval()}onHandlerDestroyed(){}hasInterval(){return!!this._tickInterval}hasNextTick(){return!!this._tickTimer}setInterval(e){return this._tickInterval?!1:(this._tickCallCount=0,this._tickInterval=self.setInterval(this._boundTick,e),!0)}clearInterval(){return this._tickInterval?(self.clearInterval(this._tickInterval),this._tickInterval=null,!0):!1}clearNextTick(){return this._tickTimer?(self.clearTimeout(this._tickTimer),this._tickTimer=null,!0):!1}tick(){this._tickCallCount++,this._tickCallCount===1&&(this.doTick(),this._tickCallCount>1&&this.tickImmediate(),this._tickCallCount=0)}tickImmediate(){this.clearNextTick(),this._tickTimer=self.setTimeout(this._boundTick,0)}doTick(){}}class Xr{constructor(e,t,n,i=0,r=-1,s=!1){this.level=void 0,this.sn=void 0,this.part=void 0,this.id=void 0,this.size=void 0,this.partial=void 0,this.transmuxing=li(),this.buffering={audio:li(),video:li(),audiovideo:li()},this.level=e,this.sn=t,this.id=n,this.size=i,this.part=r,this.partial=s}}function li(){return{start:0,executeStart:0,executeEnd:0,end:0}}const pa={length:0,start:()=>0,end:()=>0};class he{static isBuffered(e,t){if(e){const n=he.getBuffered(e);for(let i=n.length;i--;)if(t>=n.start(i)&&t<=n.end(i))return!0}return!1}static bufferedRanges(e){if(e){const t=he.getBuffered(e);return he.timeRangesToArray(t)}return[]}static timeRangesToArray(e){const t=[];for(let n=0;n<e.length;n++)t.push({start:e.start(n),end:e.end(n)});return t}static bufferInfo(e,t,n){if(e){const i=he.bufferedRanges(e);if(i.length)return he.bufferedInfo(i,t,n)}return{len:0,start:t,end:t,bufferedIndex:-1}}static bufferedInfo(e,t,n){t=Math.max(0,t),e.length>1&&e.sort((c,u)=>c.start-u.start||u.end-c.end);let i=-1,r=[];if(n)for(let c=0;c<e.length;c++){t>=e[c].start&&t<=e[c].end&&(i=c);const u=r.length;if(u){const h=r[u-1].end;e[c].start-h<n?e[c].end>h&&(r[u-1].end=e[c].end):r.push(e[c])}else r.push(e[c])}else r=e;let s=0,o,d=t,l=t;for(let c=0;c<r.length;c++){const u=r[c].start,h=r[c].end;if(i===-1&&t>=u&&t<=h&&(i=c),t+n>=u&&t<h)d=u,l=h,s=l-t;else if(t+n<u){o=u;break}}return{len:s,start:d||0,end:l||0,nextStart:o,buffered:e,bufferedIndex:i}}static getBuffered(e){try{return e.buffered||pa}catch(t){return be.log("failed to get media.buffered",t),pa}}}const Ro=/\{\$([a-zA-Z0-9-_]+)\}/g;function ma(a){return Ro.test(a)}function Pr(a,e){if(a.variableList!==null||a.hasVariableRefs){const t=a.variableList;return e.replace(Ro,n=>{const i=n.substring(2,n.length-1),r=t==null?void 0:t[i];return r===void 0?(a.playlistParsingError||(a.playlistParsingError=new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${i}"`)),n):r})}return e}function ga(a,e,t){let n=a.variableList;n||(a.variableList=n={});let i,r;if("QUERYPARAM"in e){i=e.QUERYPARAM;try{const s=new self.URL(t).searchParams;if(s.has(i))r=s.get(i);else throw new Error(`"${i}" does not match any query parameter in URI: "${t}"`)}catch(s){a.playlistParsingError||(a.playlistParsingError=new Error(`EXT-X-DEFINE QUERYPARAM: ${s.message}`))}}else i=e.NAME,r=e.VALUE;i in n?a.playlistParsingError||(a.playlistParsingError=new Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${i}"`)):n[i]=r||""}function Ju(a,e,t){const n=e.IMPORT;if(t&&n in t){let i=a.variableList;i||(a.variableList=i={}),i[n]=t[n]}else a.playlistParsingError||(a.playlistParsingError=new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${n}"`))}const eh=/^(\d+)x(\d+)$/,ya=/(.+?)=(".*?"|.*?)(?:,|$)/g;class ke{constructor(e,t){typeof e=="string"&&(e=ke.parseAttrList(e,t)),Se(this,e)}get clientAttrs(){return Object.keys(this).filter(e=>e.substring(0,2)==="X-")}decimalInteger(e){const t=parseInt(this[e],10);return t>Number.MAX_SAFE_INTEGER?1/0:t}hexadecimalInteger(e){if(this[e]){let t=(this[e]||"0x").slice(2);t=(t.length&1?"0":"")+t;const n=new Uint8Array(t.length/2);for(let i=0;i<t.length/2;i++)n[i]=parseInt(t.slice(i*2,i*2+2),16);return n}return null}hexadecimalIntegerAsNumber(e){const t=parseInt(this[e],16);return t>Number.MAX_SAFE_INTEGER?1/0:t}decimalFloatingPoint(e){return parseFloat(this[e])}optionalFloat(e,t){const n=this[e];return n?parseFloat(n):t}enumeratedString(e){return this[e]}enumeratedStringList(e,t){const n=this[e];return(n?n.split(/[ ,]+/):[]).reduce((i,r)=>(i[r.toLowerCase()]=!0,i),t)}bool(e){return this[e]==="YES"}decimalResolution(e){const t=eh.exec(this[e]);if(t!==null)return{width:parseInt(t[1],10),height:parseInt(t[2],10)}}static parseAttrList(e,t){let n;const i={},r='"';for(ya.lastIndex=0;(n=ya.exec(e))!==null;){const s=n[1].trim();let o=n[2];const d=o.indexOf(r)===0&&o.lastIndexOf(r)===o.length-1;let l=!1;if(d)o=o.slice(1,-1);else switch(s){case"IV":case"SCTE35-CMD":case"SCTE35-IN":case"SCTE35-OUT":l=!0}if(t&&(d||l))o=Pr(t,o);else if(!l&&!d)switch(s){case"CLOSED-CAPTIONS":if(o==="NONE")break;case"ALLOWED-CPC":case"CLASS":case"ASSOC-LANGUAGE":case"AUDIO":case"BYTERANGE":case"CHANNELS":case"CHARACTERISTICS":case"CODECS":case"DATA-ID":case"END-DATE":case"GROUP-ID":case"ID":case"IMPORT":case"INSTREAM-ID":case"KEYFORMAT":case"KEYFORMATVERSIONS":case"LANGUAGE":case"NAME":case"PATHWAY-ID":case"QUERYPARAM":case"RECENTLY-REMOVED-DATERANGES":case"SERVER-URI":case"STABLE-RENDITION-ID":case"STABLE-VARIANT-ID":case"START-DATE":case"SUBTITLES":case"SUPPLEMENTAL-CODECS":case"URI":case"VALUE":case"VIDEO":case"X-ASSET-LIST":case"X-ASSET-URI":be.warn(`${e}: attribute ${s} is missing quotes`)}i[s]=o}return i}}const th="com.apple.hls.interstitial";function nh(a){return a!=="ID"&&a!=="CLASS"&&a!=="CUE"&&a!=="START-DATE"&&a!=="DURATION"&&a!=="END-DATE"&&a!=="END-ON-NEXT"}function ih(a){return a==="SCTE35-OUT"||a==="SCTE35-IN"||a==="SCTE35-CMD"}class Do{constructor(e,t,n=0){var i;if(this.attr=void 0,this.tagAnchor=void 0,this.tagOrder=void 0,this._startDate=void 0,this._endDate=void 0,this._dateAtEnd=void 0,this._cue=void 0,this._badValueForSameId=void 0,this.tagAnchor=(t==null?void 0:t.tagAnchor)||null,this.tagOrder=(i=t==null?void 0:t.tagOrder)!=null?i:n,t){const r=t.attr;for(const s in r)if(Object.prototype.hasOwnProperty.call(e,s)&&e[s]!==r[s]){be.warn(`DATERANGE tag attribute: "${s}" does not match for tags with ID: "${e.ID}"`),this._badValueForSameId=s;break}e=Se(new ke({}),r,e)}if(this.attr=e,t?(this._startDate=t._startDate,this._cue=t._cue,this._endDate=t._endDate,this._dateAtEnd=t._dateAtEnd):this._startDate=new Date(e["START-DATE"]),"END-DATE"in this.attr){const r=(t==null?void 0:t.endDate)||new Date(this.attr["END-DATE"]);Z(r.getTime())&&(this._endDate=r)}}get id(){return this.attr.ID}get class(){return this.attr.CLASS}get cue(){const e=this._cue;return e===void 0?this._cue=this.attr.enumeratedStringList(this.attr.CUE?"CUE":"X-CUE",{pre:!1,post:!1,once:!1}):e}get startTime(){const{tagAnchor:e}=this;return e===null||e.programDateTime===null?(be.warn(`Expected tagAnchor Fragment with PDT set for DateRange "${this.id}": ${e}`),NaN):e.start+(this.startDate.getTime()-e.programDateTime)/1e3}get startDate(){return this._startDate}get endDate(){const e=this._endDate||this._dateAtEnd;if(e)return e;const t=this.duration;return t!==null?this._dateAtEnd=new Date(this._startDate.getTime()+t*1e3):null}get duration(){if("DURATION"in this.attr){const e=this.attr.decimalFloatingPoint("DURATION");if(Z(e))return e}else if(this._endDate)return(this._endDate.getTime()-this._startDate.getTime())/1e3;return null}get plannedDuration(){return"PLANNED-DURATION"in this.attr?this.attr.decimalFloatingPoint("PLANNED-DURATION"):null}get endOnNext(){return this.attr.bool("END-ON-NEXT")}get isInterstitial(){return this.class===th}get isValid(){return!!this.id&&!this._badValueForSameId&&Z(this.startDate.getTime())&&(this.duration===null||this.duration>=0)&&(!this.endOnNext||!!this.class)&&(!this.attr.CUE||!this.cue.pre&&!this.cue.post||this.cue.pre!==this.cue.post)&&(!this.isInterstitial||"X-ASSET-URI"in this.attr||"X-ASSET-LIST"in this.attr)}}const rh=10;class sh{constructor(e){this.PTSKnown=!1,this.alignedSliding=!1,this.averagetargetduration=void 0,this.endCC=0,this.endSN=0,this.fragments=void 0,this.fragmentHint=void 0,this.partList=null,this.dateRanges=void 0,this.dateRangeTagCount=0,this.live=!0,this.requestScheduled=-1,this.ageHeader=0,this.advancedDateTime=void 0,this.updated=!0,this.advanced=!0,this.misses=0,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=void 0,this.m3u8="",this.version=null,this.canBlockReload=!1,this.canSkipUntil=0,this.canSkipDateRanges=!1,this.skippedSegments=0,this.recentlyRemovedDateranges=void 0,this.partHoldBack=0,this.holdBack=0,this.partTarget=0,this.preloadHint=void 0,this.renditionReports=void 0,this.tuneInGoal=0,this.deltaUpdateFailed=void 0,this.driftStartTime=0,this.driftEndTime=0,this.driftStart=0,this.driftEnd=0,this.encryptedFragments=void 0,this.playlistParsingError=null,this.variableList=null,this.hasVariableRefs=!1,this.appliedTimelineOffset=void 0,this.fragments=[],this.encryptedFragments=[],this.dateRanges={},this.url=e}reloaded(e){if(!e){this.advanced=!0,this.updated=!0;return}const t=this.lastPartSn-e.lastPartSn,n=this.lastPartIndex-e.lastPartIndex;this.updated=this.endSN!==e.endSN||!!n||!!t||!this.live,this.advanced=this.endSN>e.endSN||t>0||t===0&&n>0,this.updated||this.advanced?this.misses=Math.floor(e.misses*.6):this.misses=e.misses+1}get hasProgramDateTime(){return this.fragments.length?Z(this.fragments[this.fragments.length-1].programDateTime):!1}get levelTargetDuration(){return this.averagetargetduration||this.targetduration||rh}get drift(){const e=this.driftEndTime-this.driftStartTime;return e>0?(this.driftEnd-this.driftStart)*1e3/e:1}get edge(){return this.partEnd||this.fragmentEnd}get partEnd(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].end:this.fragmentEnd}get fragmentEnd(){var e;return(e=this.fragments)!=null&&e.length?this.fragments[this.fragments.length-1].end:0}get fragmentStart(){var e;return(e=this.fragments)!=null&&e.length?this.fragments[0].start:0}get age(){return this.advancedDateTime?Math.max(Date.now()-this.advancedDateTime,0)/1e3:0}get lastPartIndex(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].index:-1}get maxPartIndex(){const e=this.partList;if(e){const t=this.lastPartIndex;if(t!==-1){for(let n=e.length;n--;)if(e[n].index>t)return e[n].index;return t}}return 0}get lastPartSn(){var e;return(e=this.partList)!=null&&e.length?this.partList[this.partList.length-1].fragment.sn:this.endSN}get expired(){if(this.live&&this.age&&this.misses<3){const e=this.partEnd-this.fragmentStart;return this.age>Math.max(e,this.totalduration)+this.levelTargetDuration}return!1}}function Jt(a){return a==="AES-128"||a==="AES-256"||a==="AES-256-CTR"}function Zr(a){switch(a){case"AES-128":case"AES-256":return Dt.cbc;case"AES-256-CTR":return Dt.ctr;default:throw new Error(`invalid full segment method ${a}`)}}function Jr(a){return Uint8Array.from(atob(a),e=>e.charCodeAt(0))}function Br(a){return Uint8Array.from(unescape(encodeURIComponent(a)),e=>e.charCodeAt(0))}function ah(a){const e=Br(a).subarray(0,16),t=new Uint8Array(16);return t.set(e,16-e.length),t}function oh(a){const e=function(n,i,r){const s=n[i];n[i]=n[r],n[r]=s};e(a,0,3),e(a,1,2),e(a,4,5),e(a,6,7)}function lh(a){const e=a.split(":");let t=null;if(e[0]==="data"&&e.length===2){const n=e[1].split(";"),i=n[n.length-1].split(",");if(i.length===2){const r=i[0]==="base64",s=i[1];r?(n.splice(-1,1),t=Jr(s)):t=ah(s)}}return t}const Oi=typeof self<"u"?self:void 0;var xe={CLEARKEY:"org.w3.clearkey",FAIRPLAY:"com.apple.fps",PLAYREADY:"com.microsoft.playready",WIDEVINE:"com.widevine.alpha"},He={CLEARKEY:"org.w3.clearkey",FAIRPLAY:"com.apple.streamingkeydelivery",PLAYREADY:"com.microsoft.playready",WIDEVINE:"urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"};function xi(a){switch(a){case He.FAIRPLAY:return xe.FAIRPLAY;case He.PLAYREADY:return xe.PLAYREADY;case He.WIDEVINE:return xe.WIDEVINE;case He.CLEARKEY:return xe.CLEARKEY}}var di={CENC:"1077efecc0b24d02ace33c1e52e2fb4b",CLEARKEY:"e2719d58a985b3c9781ab030af78d30e",PLAYREADY:"9a04f07998404286ab92e65be0885f95",WIDEVINE:"edef8ba979d64acea3c827dcd51d21ed"};function cr(a){if(a===di.WIDEVINE)return xe.WIDEVINE;if(a===di.PLAYREADY)return xe.PLAYREADY;if(a===di.CENC||a===di.CLEARKEY)return xe.CLEARKEY}function ci(a){switch(a){case xe.FAIRPLAY:return He.FAIRPLAY;case xe.PLAYREADY:return He.PLAYREADY;case xe.WIDEVINE:return He.WIDEVINE;case xe.CLEARKEY:return He.CLEARKEY}}function On(a){const{drmSystems:e,widevineLicenseUrl:t}=a,n=e?[xe.FAIRPLAY,xe.WIDEVINE,xe.PLAYREADY,xe.CLEARKEY].filter(i=>!!e[i]):[];return!n[xe.WIDEVINE]&&t&&n.push(xe.WIDEVINE),n}const _o=function(a){return Oi!=null&&(a=Oi.navigator)!=null&&a.requestMediaKeySystemAccess?self.navigator.requestMediaKeySystemAccess.bind(self.navigator):null}();function dh(a,e,t,n){let i;switch(a){case xe.FAIRPLAY:i=["cenc","sinf"];break;case xe.WIDEVINE:case xe.PLAYREADY:i=["cenc"];break;case xe.CLEARKEY:i=["cenc","keyids"];break;default:throw new Error(`Unknown key-system: ${a}`)}return ch(i,e,t,n)}function ch(a,e,t,n){return[{initDataTypes:a,persistentState:n.persistentState||"optional",distinctiveIdentifier:n.distinctiveIdentifier||"optional",sessionTypes:n.sessionTypes||[n.sessionType||"temporary"],audioCapabilities:e.map(r=>({contentType:`audio/mp4; codecs=${r}`,robustness:n.audioRobustness||"",encryptionScheme:n.audioEncryptionScheme||null})),videoCapabilities:t.map(r=>({contentType:`video/mp4; codecs=${r}`,robustness:n.videoRobustness||"",encryptionScheme:n.videoEncryptionScheme||null}))}]}function uh(a){var e;return a.sessionType==="persistent-license"||!!((e=a.sessionTypes)!=null&&e.some(t=>t==="persistent-license"))}function Po(a){const e=new Uint16Array(a.buffer,a.byteOffset,a.byteLength/2),t=String.fromCharCode.apply(null,Array.from(e)),n=t.substring(t.indexOf("<"),t.length),s=new DOMParser().parseFromString(n,"text/xml").getElementsByTagName("KID")[0];if(s){const o=s.childNodes[0]?s.childNodes[0].nodeValue:s.getAttribute("VALUE");if(o){const d=Jr(o).subarray(0,16);return oh(d),d}}return null}let ui={};class Hn{static clearKeyUriToKeyIdMap(){ui={}}constructor(e,t,n,i=[1],r=null){this.uri=void 0,this.method=void 0,this.keyFormat=void 0,this.keyFormatVersions=void 0,this.encrypted=void 0,this.isCommonEncryption=void 0,this.iv=null,this.key=null,this.keyId=null,this.pssh=null,this.method=e,this.uri=t,this.keyFormat=n,this.keyFormatVersions=i,this.iv=r,this.encrypted=e?e!=="NONE":!1,this.isCommonEncryption=this.encrypted&&!Jt(e)}isSupported(){if(this.method){if(Jt(this.method)||this.method==="NONE")return!0;if(this.keyFormat==="identity")return this.method==="SAMPLE-AES";switch(this.keyFormat){case He.FAIRPLAY:case He.WIDEVINE:case He.PLAYREADY:case He.CLEARKEY:return["ISO-23001-7","SAMPLE-AES","SAMPLE-AES-CENC","SAMPLE-AES-CTR"].indexOf(this.method)!==-1}}return!1}getDecryptData(e){if(!this.encrypted||!this.uri)return null;if(Jt(this.method)&&this.uri&&!this.iv){typeof e!="number"&&(be.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`),e=0);const n=hh(e);return new Hn(this.method,this.uri,"identity",this.keyFormatVersions,n)}const t=lh(this.uri);if(t)switch(this.keyFormat){case He.WIDEVINE:this.pssh=t,t.length>=22&&(this.keyId=t.subarray(t.length-22,t.length-6));break;case He.PLAYREADY:{const n=new Uint8Array([154,4,240,121,152,64,66,134,171,146,230,91,224,136,95,149]);this.pssh=Au(n,null,t),this.keyId=Po(t);break}default:{let n=t.subarray(0,16);if(n.length!==16){const i=new Uint8Array(16);i.set(n,16-n.length),n=i}this.keyId=n;break}}if(!this.keyId||this.keyId.byteLength!==16){let n=ui[this.uri];if(!n){const i=Object.keys(ui).length%Number.MAX_SAFE_INTEGER;n=new Uint8Array(16),new DataView(n.buffer,12,4).setUint32(0,i),ui[this.uri]=n}this.keyId=n}return this}}function hh(a){const e=new Uint8Array(16);for(let t=12;t<16;t++)e[t]=a>>8*(15-t)&255;return e}const Aa=/#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g,va=/#EXT-X-MEDIA:(.*)/g,fh=/^#EXT(?:INF|-X-TARGETDURATION):/m,ur=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/(?!#) *(\S[^\r\n]*)/.source,/#.*/.source].join("|"),"g"),ph=new RegExp([/#EXT-X-(PROGRAM-DATE-TIME|BYTERANGE|DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source,/#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source,/#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source,/(#)([^:]*):(.*)/.source,/(#)(.*)(?:.*)\r?\n?/.source].join("|"));class ct{static findGroup(e,t){for(let n=0;n<e.length;n++){const i=e[n];if(i.id===t)return i}}static resolve(e,t){return Yr.buildAbsoluteURL(t,e,{alwaysNormalize:!0})}static isMediaPlaylist(e){return fh.test(e)}static parseMasterPlaylist(e,t){const n=ma(e),i={contentSteering:null,levels:[],playlistParsingError:null,sessionData:null,sessionKeys:null,startTimeOffset:null,variableList:null,hasVariableRefs:n},r=[];Aa.lastIndex=0;let s;for(;(s=Aa.exec(e))!=null;)if(s[1]){var o;const l=new ke(s[1],i),c=Pr(i,s[2]),u={attrs:l,bitrate:l.decimalInteger("BANDWIDTH")||l.decimalInteger("AVERAGE-BANDWIDTH"),name:l.NAME,url:ct.resolve(c,t)},h=l.decimalResolution("RESOLUTION");h&&(u.width=h.width,u.height=h.height),xa(l.CODECS,u);const m=l["SUPPLEMENTAL-CODECS"];m&&(u.supplemental={},xa(m,u.supplemental)),(o=u.unknownCodecs)!=null&&o.length||r.push(u),i.levels.push(u)}else if(s[3]){const l=s[3],c=s[4];switch(l){case"SESSION-DATA":{const u=new ke(c,i),h=u["DATA-ID"];h&&(i.sessionData===null&&(i.sessionData={}),i.sessionData[h]=u);break}case"SESSION-KEY":{const u=ba(c,t,i);u.encrypted&&u.isSupported()?(i.sessionKeys===null&&(i.sessionKeys=[]),i.sessionKeys.push(u)):be.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${c}"`);break}case"DEFINE":{{const u=new ke(c,i);ga(i,u,t)}break}case"CONTENT-STEERING":{const u=new ke(c,i);i.contentSteering={uri:ct.resolve(u["SERVER-URI"],t),pathwayId:u["PATHWAY-ID"]||"."};break}case"START":{i.startTimeOffset=Ea(c);break}}}const d=r.length>0&&r.length<i.levels.length;return i.levels=d?r:i.levels,i.levels.length===0&&(i.playlistParsingError=new Error("no levels found in manifest")),i}static parseMasterPlaylistMedia(e,t,n){let i;const r={},s=n.levels,o={AUDIO:s.map(l=>({id:l.attrs.AUDIO,audioCodec:l.audioCodec})),SUBTITLES:s.map(l=>({id:l.attrs.SUBTITLES,textCodec:l.textCodec})),"CLOSED-CAPTIONS":[]};let d=0;for(va.lastIndex=0;(i=va.exec(e))!==null;){const l=new ke(i[1],n),c=l.TYPE;if(c){const u=o[c],h=r[c]||[];r[c]=h;const m=l.LANGUAGE,g=l["ASSOC-LANGUAGE"],v=l.CHANNELS,E=l.CHARACTERISTICS,C=l["INSTREAM-ID"],I={attrs:l,bitrate:0,id:d++,groupId:l["GROUP-ID"]||"",name:l.NAME||m||"",type:c,default:l.bool("DEFAULT"),autoselect:l.bool("AUTOSELECT"),forced:l.bool("FORCED"),lang:m,url:l.URI?ct.resolve(l.URI,t):""};if(g&&(I.assocLang=g),v&&(I.channels=v),E&&(I.characteristics=E),C&&(I.instreamId=C),u!=null&&u.length){const L=ct.findGroup(u,I.groupId)||u[0];Sa(I,L,"audioCodec"),Sa(I,L,"textCodec")}h.push(I)}}return r}static parseLevelPlaylist(e,t,n,i,r,s){var o;const d={url:t},l=new sh(t),c=l.fragments,u=[];let h=null,m=0,g=0,v=0,E=0,C=0,I=null,L=new ar(i,d),R,_,N,P=-1,O=!1,U=null,D;if(ur.lastIndex=0,l.m3u8=e,l.hasVariableRefs=ma(e),((o=ur.exec(e))==null?void 0:o[0])!=="#EXTM3U")return l.playlistParsingError=new Error("Missing format identifier #EXTM3U"),l;for(;(R=ur.exec(e))!==null;){O&&(O=!1,L=new ar(i,d),L.playlistOffset=v,L.start=v,L.sn=m,L.cc=E,C&&(L.bitrate=C),L.level=n,h&&(L.initSegment=h,h.rawProgramDateTime&&(L.rawProgramDateTime=h.rawProgramDateTime,h.rawProgramDateTime=null),U&&(L.setByteRange(U),U=null)));const J=R[1];if(J){L.duration=parseFloat(J);const ee=(" "+R[2]).slice(1);L.title=ee||null,L.tagList.push(ee?["INF",J,ee]:["INF",J])}else if(R[3]){if(Z(L.duration)){L.playlistOffset=v,L.start=v,N&&Ca(L,N,l),L.sn=m,L.level=n,L.cc=E,c.push(L);const ee=(" "+R[3]).slice(1);L.relurl=Pr(l,ee),Or(L,I,u),I=L,v+=L.duration,m++,g=0,O=!0}}else{if(R=R[0].match(ph),!R){be.warn("No matches on slow regex match for level playlist!");continue}for(_=1;_<R.length&&R[_]===void 0;_++);const ee=(" "+R[_]).slice(1),W=(" "+R[_+1]).slice(1),ne=R[_+2]?(" "+R[_+2]).slice(1):null;switch(ee){case"BYTERANGE":I?L.setByteRange(W,I):L.setByteRange(W);break;case"PROGRAM-DATE-TIME":L.rawProgramDateTime=W,L.tagList.push(["PROGRAM-DATE-TIME",W]),P===-1&&(P=c.length);break;case"PLAYLIST-TYPE":l.type&&mt(l,ee,R),l.type=W.toUpperCase();break;case"MEDIA-SEQUENCE":l.startSN!==0?mt(l,ee,R):c.length>0&&La(l,ee,R),m=l.startSN=parseInt(W);break;case"SKIP":{l.skippedSegments&&mt(l,ee,R);const ie=new ke(W,l),$=ie.decimalInteger("SKIPPED-SEGMENTS");if(Z($)){l.skippedSegments+=$;for(let de=$;de--;)c.push(null);m+=$}const q=ie.enumeratedString("RECENTLY-REMOVED-DATERANGES");q&&(l.recentlyRemovedDateranges=(l.recentlyRemovedDateranges||[]).concat(q.split("	")));break}case"TARGETDURATION":l.targetduration!==0&&mt(l,ee,R),l.targetduration=Math.max(parseInt(W),1);break;case"VERSION":l.version!==null&&mt(l,ee,R),l.version=parseInt(W);break;case"INDEPENDENT-SEGMENTS":break;case"ENDLIST":l.live||mt(l,ee,R),l.live=!1;break;case"#":(W||ne)&&L.tagList.push(ne?[W,ne]:[W]);break;case"DISCONTINUITY":E++,L.tagList.push(["DIS"]);break;case"GAP":L.gap=!0,L.tagList.push([ee]);break;case"BITRATE":L.tagList.push([ee,W]),C=parseInt(W)*1e3,Z(C)?L.bitrate=C:C=0;break;case"DATERANGE":{const ie=new ke(W,l),$=new Do(ie,l.dateRanges[ie.ID],l.dateRangeTagCount);l.dateRangeTagCount++,$.isValid||l.skippedSegments?l.dateRanges[$.id]=$:be.warn(`Ignoring invalid DATERANGE tag: "${W}"`),L.tagList.push(["EXT-X-DATERANGE",W]);break}case"DEFINE":{{const ie=new ke(W,l);"IMPORT"in ie?Ju(l,ie,s):ga(l,ie,t)}break}case"DISCONTINUITY-SEQUENCE":l.startCC!==0?mt(l,ee,R):c.length>0&&La(l,ee,R),l.startCC=E=parseInt(W);break;case"KEY":{const ie=ba(W,t,l);if(ie.isSupported()){if(ie.method==="NONE"){N=void 0;break}N||(N={}),N[ie.keyFormat]&&(N=Se({},N)),N[ie.keyFormat]=ie}else be.warn(`[Keys] Ignoring invalid EXT-X-KEY tag: "${W}"`);break}case"START":l.startTimeOffset=Ea(W);break;case"MAP":{const ie=new ke(W,l);if(L.duration){const $=new ar(i,d);Ta($,ie,n,N),h=$,L.initSegment=h,h.rawProgramDateTime&&!L.rawProgramDateTime&&(L.rawProgramDateTime=h.rawProgramDateTime)}else{const $=L.byteRangeEndOffset;if($){const q=L.byteRangeStartOffset;U=`${$-q}@${q}`}else U=null;Ta(L,ie,n,N),h=L,O=!0}h.cc=E;break}case"SERVER-CONTROL":{D&&mt(l,ee,R),D=new ke(W),l.canBlockReload=D.bool("CAN-BLOCK-RELOAD"),l.canSkipUntil=D.optionalFloat("CAN-SKIP-UNTIL",0),l.canSkipDateRanges=l.canSkipUntil>0&&D.bool("CAN-SKIP-DATERANGES"),l.partHoldBack=D.optionalFloat("PART-HOLD-BACK",0),l.holdBack=D.optionalFloat("HOLD-BACK",0);break}case"PART-INF":{l.partTarget&&mt(l,ee,R);const ie=new ke(W);l.partTarget=ie.decimalFloatingPoint("PART-TARGET");break}case"PART":{let ie=l.partList;ie||(ie=l.partList=[]);const $=g>0?ie[ie.length-1]:void 0,q=g++,de=new ke(W,l),le=new ru(de,L,d,q,$);ie.push(le),L.duration+=le.duration;break}case"PRELOAD-HINT":{const ie=new ke(W,l);l.preloadHint=ie;break}case"RENDITION-REPORT":{const ie=new ke(W,l);l.renditionReports=l.renditionReports||[],l.renditionReports.push(ie);break}default:be.warn(`line parsed but not handled: ${R}`);break}}}I&&!I.relurl?(c.pop(),v-=I.duration,l.partList&&(l.fragmentHint=I)):l.partList&&(Or(L,I,u),L.cc=E,l.fragmentHint=L,N&&Ca(L,N,l)),l.targetduration||(l.playlistParsingError=new Error("#EXT-X-TARGETDURATION is required"));const V=c.length,Y=c[0],se=c[V-1];if(v+=l.skippedSegments*l.targetduration,v>0&&V&&se){l.averagetargetduration=v/V;const J=se.sn;l.endSN=J!=="initSegment"?J:0,l.live||(se.endList=!0),Y&&l.startCC===void 0&&(l.startCC=Y.cc),P>0&&(gh(c,P),Y&&u.unshift(Y))}else l.endSN=0,l.startCC=0;return l.fragmentHint&&(v+=l.fragmentHint.duration),l.totalduration=v,u.length&&l.dateRangeTagCount&&Y&&Bo(u,l),l.endCC=E,l}}function Bo(a,e){const t=a.length;if(!t)return;const n=a[t-1],i=e.live?1/0:e.totalduration,r=Object.keys(e.dateRanges);for(let s=r.length;s--;){const o=e.dateRanges[r[s]],d=o.startDate.getTime();o.tagAnchor=n.ref;for(let l=t;l--;){const c=mh(e,d,a,l,i);if(c!==-1){o.tagAnchor=e.fragments[c].ref;break}}}}function mh(a,e,t,n,i){const r=t[n];if(r){const o=r.programDateTime;if(e>=o||n===0){var s;const d=(((s=t[n+1])==null?void 0:s.start)||i)-r.start;if(e<=o+d*1e3){const l=t[n].sn-a.startSN,c=a.fragments;if(c.length>t.length){const h=(t[n+1]||c[c.length-1]).sn-a.startSN;for(let m=h;m>l;m--){const g=c[m].programDateTime;if(e>=g&&e<g+c[m].duration*1e3)return m}}return l}}}return-1}function ba(a,e,t){var n,i;const r=new ke(a,t),s=(n=r.METHOD)!=null?n:"",o=r.URI,d=r.hexadecimalInteger("IV"),l=r.KEYFORMATVERSIONS,c=(i=r.KEYFORMAT)!=null?i:"identity";o&&r.IV&&!d&&be.error(`Invalid IV: ${r.IV}`);const u=o?ct.resolve(o,e):"",h=(l||"1").split("/").map(Number).filter(Number.isFinite);return new Hn(s,u,c,h,d)}function Ea(a){const t=new ke(a).decimalFloatingPoint("TIME-OFFSET");return Z(t)?t:null}function xa(a,e){let t=(a||"").split(/[ ,]+/).filter(n=>n);["video","audio","text"].forEach(n=>{const i=t.filter(r=>bo(r,n));i.length&&(e[`${n}Codec`]=i.map(r=>r.split("/")[0]).join(","),t=t.filter(r=>i.indexOf(r)===-1))}),e.unknownCodecs=t}function Sa(a,e,t){const n=e[t];n&&(a[t]=n)}function gh(a,e){let t=a[e];for(let n=e;n--;){const i=a[n];if(!i)return;i.programDateTime=t.programDateTime-i.duration*1e3,t=i}}function Or(a,e,t){a.rawProgramDateTime?t.push(a):e!=null&&e.programDateTime&&(a.programDateTime=e.endProgramDateTime)}function Ta(a,e,t,n){a.relurl=e.URI,e.BYTERANGE&&a.setByteRange(e.BYTERANGE),a.level=t,a.sn="initSegment",n&&(a.levelkeys=n),a.initSegment=null}function Ca(a,e,t){a.levelkeys=e;const{encryptedFragments:n}=t;(!n.length||n[n.length-1].levelkeys!==e)&&Object.keys(e).some(i=>e[i].isCommonEncryption)&&n.push(a)}function mt(a,e,t){a.playlistParsingError=new Error(`#EXT-X-${e} must not appear more than once (${t[0]})`)}function La(a,e,t){a.playlistParsingError=new Error(`#EXT-X-${e} must appear before the first Media Segment (${t[0]})`)}function hr(a,e){const t=e.startPTS;if(Z(t)){let n=0,i;e.sn>a.sn?(n=t-a.start,i=a):(n=a.start-t,i=e),i.duration!==n&&i.setDuration(n)}else e.sn>a.sn?a.cc===e.cc&&a.minEndPTS?e.setStart(a.start+(a.minEndPTS-a.start)):e.setStart(a.start+a.duration):e.setStart(Math.max(a.start-e.duration,0))}function Oo(a,e,t,n,i,r){n-t<=0&&(be.warn("Fragment should have a positive duration",e),n=t+e.duration,r=i+e.duration);let o=t,d=n;const l=e.startPTS,c=e.endPTS;if(Z(l)){const E=Math.abs(l-t);Z(e.deltaPTS)?e.deltaPTS=Math.max(E,e.deltaPTS):e.deltaPTS=E,o=Math.max(t,l),t=Math.min(t,l),i=Math.min(i,e.startDTS),d=Math.min(n,c),n=Math.max(n,c),r=Math.max(r,e.endDTS)}const u=t-e.start;e.start!==0&&e.setStart(t),e.setDuration(n-e.start),e.startPTS=t,e.maxStartPTS=o,e.startDTS=i,e.endPTS=n,e.minEndPTS=d,e.endDTS=r;const h=e.sn;if(!a||h<a.startSN||h>a.endSN)return 0;let m;const g=h-a.startSN,v=a.fragments;for(v[g]=e,m=g;m>0;m--)hr(v[m],v[m-1]);for(m=g;m<v.length-1;m++)hr(v[m],v[m+1]);return a.fragmentHint&&hr(v[v.length-1],a.fragmentHint),a.PTSKnown=a.alignedSliding=!0,u}function yh(a,e){if(a===e)return;let t=null;const n=a.fragments;for(let l=n.length-1;l>=0;l--){const c=n[l].initSegment;if(c){t=c;break}}a.fragmentHint&&delete a.fragmentHint.endPTS;let i;bh(a,e,(l,c,u,h)=>{if((!e.startCC||e.skippedSegments)&&c.cc!==l.cc){const m=l.cc-c.cc;for(let g=u;g<h.length;g++)h[g].cc+=m;e.endCC=h[h.length-1].cc}Z(l.startPTS)&&Z(l.endPTS)&&(c.setStart(c.startPTS=l.startPTS),c.startDTS=l.startDTS,c.maxStartPTS=l.maxStartPTS,c.endPTS=l.endPTS,c.endDTS=l.endDTS,c.minEndPTS=l.minEndPTS,c.setDuration(l.endPTS-l.startPTS),c.duration&&(i=c),e.PTSKnown=e.alignedSliding=!0),l.hasStreams&&(c.elementaryStreams=l.elementaryStreams),c.loader=l.loader,l.hasStats&&(c.stats=l.stats),l.initSegment&&(c.initSegment=l.initSegment,t=l.initSegment)});const r=e.fragments,s=e.fragmentHint?r.concat(e.fragmentHint):r;if(t&&s.forEach(l=>{var c;l&&(!l.initSegment||l.initSegment.relurl===((c=t)==null?void 0:c.relurl))&&(l.initSegment=t)}),e.skippedSegments){if(e.deltaUpdateFailed=r.some(l=>!l),e.deltaUpdateFailed){be.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");for(let l=e.skippedSegments;l--;)r.shift();e.startSN=r[0].sn}else{e.canSkipDateRanges&&(e.dateRanges=Ah(a.dateRanges,e));const l=a.fragments.filter(c=>c.rawProgramDateTime);if(a.hasProgramDateTime&&!e.hasProgramDateTime)for(let c=1;c<s.length;c++)s[c].programDateTime===null&&Or(s[c],s[c-1],l);Bo(l,e)}e.endCC=r[r.length-1].cc}if(!e.startCC){var o;const l=No(a,e.startSN-1);e.startCC=(o=l==null?void 0:l.cc)!=null?o:r[0].cc}vh(a.partList,e.partList,(l,c)=>{c.elementaryStreams=l.elementaryStreams,c.stats=l.stats}),i?Oo(e,i,i.startPTS,i.endPTS,i.startDTS,i.endDTS):Fo(a,e),r.length&&(e.totalduration=e.edge-r[0].start),e.driftStartTime=a.driftStartTime,e.driftStart=a.driftStart;const d=e.advancedDateTime;if(e.advanced&&d){const l=e.edge;e.driftStart||(e.driftStartTime=d,e.driftStart=l),e.driftEndTime=d,e.driftEnd=l}else e.driftEndTime=a.driftEndTime,e.driftEnd=a.driftEnd,e.advancedDateTime=a.advancedDateTime;e.requestScheduled===-1&&(e.requestScheduled=a.requestScheduled)}function Ah(a,e){const{dateRanges:t,recentlyRemovedDateranges:n}=e,i=Se({},a);n&&n.forEach(o=>{delete i[o]});const s=Object.keys(i).length;return s&&Object.keys(t).forEach(o=>{const d=i[o],l=new Do(t[o].attr,d);l.isValid?(i[o]=l,d||(l.tagOrder+=s)):be.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${Ie(t[o].attr)}"`)}),i}function vh(a,e,t){if(a&&e){let n=0;for(let i=0,r=a.length;i<=r;i++){const s=a[i],o=e[i+n];s&&o&&s.index===o.index&&s.fragment.sn===o.fragment.sn?t(s,o):n--}}}function bh(a,e,t){const n=e.skippedSegments,i=Math.max(a.startSN,e.startSN)-e.startSN,r=(a.fragmentHint?1:0)+(n?e.endSN:Math.min(a.endSN,e.endSN))-e.startSN,s=e.startSN-a.startSN,o=e.fragmentHint?e.fragments.concat(e.fragmentHint):e.fragments,d=a.fragmentHint?a.fragments.concat(a.fragmentHint):a.fragments;for(let l=i;l<=r;l++){const c=d[s+l];let u=o[l];if(n&&!u&&c&&(u=e.fragments[l]=c),c&&u){if(t(c,u,l,o),c.url&&c.url!==u.url){e.playlistParsingError=Ia(`media sequence mismatch ${u.sn}:`,a,e,c,u);return}else if(c.cc!==u.cc){e.playlistParsingError=Ia(`discontinuity sequence mismatch (${c.cc}!=${u.cc})`,a,e,c,u);return}}}}function Ia(a,e,t,n,i){return new Error(`${a} ${i.url}
Playlist starting @${e.startSN}
${e.m3u8}

Playlist starting @${t.startSN}
${t.m3u8}`)}function Fo(a,e,t=!0){const n=e.startSN+e.skippedSegments-a.startSN,i=a.fragments,r=n>=0;let s=0;if(r&&n<i.length)s=i[n].start;else if(r&&e.startSN===a.endSN+1)s=a.fragmentEnd;else if(r&&t)s=a.fragmentStart+n*e.levelTargetDuration;else if(!e.skippedSegments&&e.fragmentStart===0)s=a.fragmentStart;else return;Fr(e,s)}function Fr(a,e){if(e){const t=a.fragments;for(let n=a.skippedSegments;n<t.length;n++)t[n].addStart(e);a.fragmentHint&&a.fragmentHint.addStart(e)}}function Mo(a,e=1/0){let t=1e3*a.targetduration;if(a.updated){const n=a.fragments;if(n.length&&t*4>e){const r=n[n.length-1].duration*1e3;r<t&&(t=r)}}else t/=2;return Math.round(t)}function No(a,e,t){if(!a)return null;let n=a.fragments[e-a.startSN];return n||(n=a.fragmentHint,n&&n.sn===e)?n:e<a.startSN&&t&&t.sn===e?t:null}function ka(a,e,t){return a?Uo(a.partList,e,t):null}function Uo(a,e,t){if(a)for(let n=a.length;n--;){const i=a[n];if(i.index===t&&i.fragment.sn===e)return i}return null}function $o(a){a.forEach((e,t)=>{var n;(n=e.details)==null||n.fragments.forEach(i=>{i.level=t,i.initSegment&&(i.initSegment.level=t)})})}function Mn(a,e){for(let n=0,i=a.length;n<i;n++){var t;if(((t=a[n])==null?void 0:t.cc)===e)return a[n]}return null}function Eh(a,e){return!!(a&&e.startCC<a.endCC&&e.endCC>a.startCC)}function wa(a,e){if(a){const t=a.start+e;a.start=a.startPTS=t,a.endPTS=t+a.duration}}function Go(a,e){const t=e.fragments;for(let n=0,i=t.length;n<i;n++)wa(t[n],a);e.fragmentHint&&wa(e.fragmentHint,a),e.alignedSliding=!0}function xh(a,e){a&&(Ko(e,a),!e.alignedSliding&&a&&Fi(e,a),!e.alignedSliding&&a&&!e.skippedSegments&&Fo(a,e,!1))}function Ko(a,e){if(!Eh(e,a))return;const t=Math.min(e.endCC,a.endCC),n=Mn(e.fragments,t),i=Mn(a.fragments,t);if(!n||!i)return;be.log(`Aligning playlist at start of dicontinuity sequence ${t}`);const r=n.start-i.start;Go(r,a)}function Fi(a,e){if(!a.hasProgramDateTime||!e.hasProgramDateTime)return;const t=a.fragments,n=e.fragments;if(!t.length||!n.length)return;let i,r;const s=Math.min(e.endCC,a.endCC);e.startCC<s&&a.startCC<s&&(i=Mn(n,s),r=Mn(t,s)),(!i||!r)&&(i=n[Math.floor(n.length/2)],r=Mn(t,i.cc)||t[Math.floor(t.length/2)]);const o=i.programDateTime,d=r.programDateTime;if(!o||!d)return;const l=(d-o)/1e3-(r.start-i.start);Go(l,a)}const Sh={toString:function(a){let e="";const t=a.length;for(let n=0;n<t;n++)e+=`[${a.start(n).toFixed(3)}-${a.end(n).toFixed(3)}]`;return e}},K={STOPPED:"STOPPED",IDLE:"IDLE",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_TRACK:"WAITING_TRACK",PARSING:"PARSING",PARSED:"PARSED",ENDED:"ENDED",ERROR:"ERROR",WAITING_INIT_PTS:"WAITING_INIT_PTS",WAITING_LEVEL:"WAITING_LEVEL"};class es extends wo{constructor(e,t,n,i,r){super(i,e.logger),this.hls=void 0,this.fragPrevious=null,this.fragCurrent=null,this.fragmentTracker=void 0,this.transmuxer=null,this._state=K.STOPPED,this.playlistType=void 0,this.media=null,this.mediaBuffer=null,this.config=void 0,this.bitrateTest=!1,this.lastCurrentTime=0,this.nextLoadPosition=0,this.startPosition=0,this.startTimeOffset=null,this.retryDate=0,this.levels=null,this.fragmentLoader=void 0,this.keyLoader=void 0,this.levelLastLoaded=null,this.startFragRequested=!1,this.decrypter=void 0,this.initPTS=[],this.buffering=!0,this.loadingParts=!1,this.loopSn=void 0,this.onMediaSeeking=()=>{const{config:s,fragCurrent:o,media:d,mediaBuffer:l,state:c}=this,u=d?d.currentTime:0,h=he.bufferInfo(l||d,u,s.maxBufferHole);if(this.log(`media seeking to ${Z(u)?u.toFixed(3):u}, state: ${c}`),this.state===K.ENDED)this.resetLoadingState();else if(o){const m=s.maxFragLookUpTolerance,g=o.start-m,v=o.start+o.duration+m;if(!h.len||v<h.start||g>h.end){const E=u>v;(u<g||E)&&(E&&o.loader&&(this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),o.abortRequests(),this.resetLoadingState()),this.fragPrevious=null)}}if(d){this.fragmentTracker.removeFragmentsInRange(u,1/0,this.playlistType,!0);const m=this.lastCurrentTime;if(u>m&&(this.lastCurrentTime=u),!this.loadingParts){const g=Math.max(h.end,u),v=this.shouldLoadParts(this.getLevelDetails(),g);v&&(this.log(`LL-Part loading ON after seeking to ${u.toFixed(2)} with buffer @${g.toFixed(2)}`),this.loadingParts=v)}}!this.hls.hasEnoughToStart&&!h.len&&(this.log(`setting startPosition to ${u} because of seek before start`),this.nextLoadPosition=this.startPosition=u),this.tickImmediate()},this.onMediaEnded=()=>{this.log("setting startPosition to 0 because media ended"),this.startPosition=this.lastCurrentTime=0},this.playlistType=r,this.hls=e,this.fragmentLoader=new Xu(e.config),this.keyLoader=n,this.fragmentTracker=t,this.config=e.config,this.decrypter=new Qr(e.config)}registerListeners(){const{hls:e}=this;e.on(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(x.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e.off(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(x.ERROR,this.onError,this)}doTick(){this.onTickEnd()}onTickEnd(){}startLoad(e){}stopLoad(){if(this.state===K.STOPPED)return;this.fragmentLoader.abort(),this.keyLoader.abort(this.playlistType);const e=this.fragCurrent;e!=null&&e.loader&&(e.abortRequests(),this.fragmentTracker.removeFragment(e)),this.resetTransmuxer(),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=K.STOPPED}get startPositionValue(){const{nextLoadPosition:e,startPosition:t}=this;return t===-1&&e?e:t}get bufferingEnabled(){return this.buffering}pauseBuffering(){this.buffering=!1}resumeBuffering(){this.buffering=!0}get inFlightFrag(){return{frag:this.fragCurrent,state:this.state}}_streamEnded(e,t){if(t.live||!this.media)return!1;const n=e.end||0,i=this.config.timelineOffset||0;if(n<=i)return!1;const r=e.buffered;this.config.maxBufferHole&&r&&r.length>1&&(e=he.bufferedInfo(r,e.start,0));const s=e.nextStart;if(s&&s>i&&s<t.edge||this.media.currentTime<e.start)return!1;const d=t.partList;if(d!=null&&d.length){const c=d[d.length-1];return he.isBuffered(this.media,c.start+c.duration/2)}const l=t.fragments[t.fragments.length-1].type;return this.fragmentTracker.isEndListAppended(l)}getLevelDetails(){if(this.levels&&this.levelLastLoaded!==null){var e;return(e=this.levelLastLoaded)==null?void 0:e.details}}get timelineOffset(){const e=this.config.timelineOffset;if(e){var t;return((t=this.getLevelDetails())==null?void 0:t.appliedTimelineOffset)||e}return 0}onMediaAttached(e,t){const n=this.media=this.mediaBuffer=t.media;n.removeEventListener("seeking",this.onMediaSeeking),n.removeEventListener("ended",this.onMediaEnded),n.addEventListener("seeking",this.onMediaSeeking),n.addEventListener("ended",this.onMediaEnded);const i=this.config;this.levels&&i.autoStartLoad&&this.state===K.STOPPED&&this.startLoad(i.startPosition)}onMediaDetaching(e,t){const n=!!t.transferMedia,i=this.media;if(i!==null){if(i.ended&&(this.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),i.removeEventListener("seeking",this.onMediaSeeking),i.removeEventListener("ended",this.onMediaEnded),this.keyLoader&&!n&&this.keyLoader.detach(),this.media=this.mediaBuffer=null,this.loopSn=void 0,n){this.resetLoadingState(),this.resetTransmuxer();return}this.loadingParts=!1,this.fragmentTracker.removeAllFragments(),this.stopLoad()}}onManifestLoading(){this.initPTS=[],this.levels=this.levelLastLoaded=this.fragCurrent=null,this.lastCurrentTime=this.startPosition=0,this.startFragRequested=!1}onError(e,t){}onManifestLoaded(e,t){this.startTimeOffset=t.startTimeOffset}onHandlerDestroying(){this.stopLoad(),this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null),super.onHandlerDestroying(),this.hls=this.onMediaSeeking=this.onMediaEnded=null}onHandlerDestroyed(){this.state=K.STOPPED,this.fragmentLoader&&this.fragmentLoader.destroy(),this.keyLoader&&this.keyLoader.destroy(),this.decrypter&&this.decrypter.destroy(),this.hls=this.log=this.warn=this.decrypter=this.keyLoader=this.fragmentLoader=this.fragmentTracker=null,super.onHandlerDestroyed()}loadFragment(e,t,n){this.startFragRequested=!0,this._loadFragForPlayback(e,t,n)}_loadFragForPlayback(e,t,n){const i=r=>{const s=r.frag;if(this.fragContextChanged(s)){this.warn(`${s.type} sn: ${s.sn}${r.part?" part: "+r.part.index:""} of ${this.fragInfo(s,!1,r.part)}) was dropped during download.`),this.fragmentTracker.removeFragment(s);return}s.stats.chunkCount++,this._handleFragmentLoadProgress(r)};this._doFragLoad(e,t,n,i).then(r=>{if(!r)return;const s=this.state,o=r.frag;if(this.fragContextChanged(o)){(s===K.FRAG_LOADING||!this.fragCurrent&&s===K.PARSING)&&(this.fragmentTracker.removeFragment(o),this.state=K.IDLE);return}"payload"in r&&(this.log(`Loaded ${o.type} sn: ${o.sn} of ${this.playlistLabel()} ${o.level}`),this.hls.trigger(x.FRAG_LOADED,r)),this._handleFragmentLoadComplete(r)}).catch(r=>{this.state===K.STOPPED||this.state===K.ERROR||(this.warn(`Frag error: ${(r==null?void 0:r.message)||r}`),this.resetFragmentLoading(e))})}clearTrackerIfNeeded(e){var t;const{fragmentTracker:n}=this;if(n.getState(e)===Oe.APPENDING){const r=e.type,s=this.getFwdBufferInfo(this.mediaBuffer,r),o=Math.max(e.duration,s?s.len:this.config.maxBufferLength),d=this.backtrackFragment;((d?e.sn-d.sn:0)===1||this.reduceMaxBufferLength(o,e.duration))&&n.removeFragment(e)}else((t=this.mediaBuffer)==null?void 0:t.buffered.length)===0?n.removeAllFragments():n.hasParts(e.type)&&(n.detectPartialFragments({frag:e,part:null,stats:e.stats,id:e.type}),n.getState(e)===Oe.PARTIAL&&n.removeFragment(e))}checkLiveUpdate(e){if(e.updated&&!e.live){const t=e.fragments[e.fragments.length-1];this.fragmentTracker.detectPartialFragments({frag:t,part:null,stats:t.stats,id:t.type})}e.fragments[0]||(e.deltaUpdateFailed=!0)}waitForLive(e){const t=e.details;return(t==null?void 0:t.live)&&t.type!=="EVENT"&&(this.levelLastLoaded!==e||t.expired)}flushMainBuffer(e,t,n=null){if(!(e-t))return;const i={startOffset:e,endOffset:t,type:n};this.hls.trigger(x.BUFFER_FLUSHING,i)}_loadInitSegment(e,t){this._doFragLoad(e,t).then(n=>{const i=n==null?void 0:n.frag;if(!i||this.fragContextChanged(i)||!this.levels)throw new Error("init load aborted");return n}).then(n=>{const{hls:i}=this,{frag:r,payload:s}=n,o=r.decryptdata;if(s&&s.byteLength>0&&o!=null&&o.key&&o.iv&&Jt(o.method)){const d=self.performance.now();return this.decrypter.decrypt(new Uint8Array(s),o.key.buffer,o.iv.buffer,Zr(o.method)).catch(l=>{throw i.trigger(x.ERROR,{type:oe.MEDIA_ERROR,details:F.FRAG_DECRYPT_ERROR,fatal:!1,error:l,reason:l.message,frag:r}),l}).then(l=>{const c=self.performance.now();return i.trigger(x.FRAG_DECRYPTED,{frag:r,payload:l,stats:{tstart:d,tdecrypt:c}}),n.payload=l,this.completeInitSegmentLoad(n)})}return this.completeInitSegmentLoad(n)}).catch(n=>{this.state===K.STOPPED||this.state===K.ERROR||(this.warn(n),this.resetFragmentLoading(e))})}completeInitSegmentLoad(e){const{levels:t}=this;if(!t)throw new Error("init load aborted, missing levels");const n=e.frag.stats;this.state!==K.STOPPED&&(this.state=K.IDLE),e.frag.data=new Uint8Array(e.payload),n.parsing.start=n.buffering.start=self.performance.now(),n.parsing.end=n.buffering.end=self.performance.now(),this.tick()}fragContextChanged(e){const{fragCurrent:t}=this;return!e||!t||e.sn!==t.sn||e.level!==t.level}fragBufferedComplete(e,t){const n=this.mediaBuffer?this.mediaBuffer:this.media;if(this.log(`Buffered ${e.type} sn: ${e.sn}${t?" part: "+t.index:""} of ${this.fragInfo(e,!1,t)} > buffer:${n?Sh.toString(he.getBuffered(n)):"(detached)"})`),Ne(e)){var i;if(e.type!==re.SUBTITLE){const s=e.elementaryStreams;if(!Object.keys(s).some(o=>!!s[o])){this.state=K.IDLE;return}}const r=(i=this.levels)==null?void 0:i[e.level];r!=null&&r.fragmentError&&(this.log(`Resetting level fragment error count of ${r.fragmentError} on frag buffered`),r.fragmentError=0)}this.state=K.IDLE}_handleFragmentLoadComplete(e){const{transmuxer:t}=this;if(!t)return;const{frag:n,part:i,partsLoaded:r}=e,s=!r||r.length===0||r.some(d=>!d),o=new Xr(n.level,n.sn,n.stats.chunkCount+1,0,i?i.index:-1,!s);t.flush(o)}_handleFragmentLoadProgress(e){}_doFragLoad(e,t,n=null,i){var r;this.fragCurrent=e;const s=t==null?void 0:t.details;if(!this.levels||!s)throw new Error(`frag load aborted, missing level${s?"":" detail"}s`);let o=null;e.encrypted&&!((r=e.decryptdata)!=null&&r.key)?(this.log(`Loading key for ${e.sn} of [${s.startSN}-${s.endSN}], ${this.playlistLabel()} ${e.level}`),this.state=K.KEY_LOADING,this.fragCurrent=e,o=this.keyLoader.load(e).then(u=>{if(!this.fragContextChanged(u.frag))return this.hls.trigger(x.KEY_LOADED,u),this.state===K.KEY_LOADING&&(this.state=K.IDLE),u}),this.hls.trigger(x.KEY_LOADING,{frag:e}),this.fragCurrent===null&&(o=Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))):e.encrypted||(o=this.keyLoader.loadClear(e,s.encryptedFragments),o&&this.log("[eme] blocking frag load until media-keys acquired"));const d=this.fragPrevious;if(Ne(e)&&(!d||e.sn!==d.sn)){const u=this.shouldLoadParts(t.details,e.end);u!==this.loadingParts&&(this.log(`LL-Part loading ${u?"ON":"OFF"} loading sn ${d==null?void 0:d.sn}->${e.sn}`),this.loadingParts=u)}if(n=Math.max(e.start,n||0),this.loadingParts&&Ne(e)){const u=s.partList;if(u&&i){n>e.end&&s.fragmentHint&&(e=s.fragmentHint);const h=this.getNextPart(u,e,n);if(h>-1){const m=u[h];e=this.fragCurrent=m.fragment,this.log(`Loading ${e.type} sn: ${e.sn} part: ${m.index} (${h}/${u.length-1}) of ${this.fragInfo(e,!1,m)}) cc: ${e.cc} [${s.startSN}-${s.endSN}], target: ${parseFloat(n.toFixed(3))}`),this.nextLoadPosition=m.start+m.duration,this.state=K.FRAG_LOADING;let g;return o?g=o.then(v=>!v||this.fragContextChanged(v.frag)?null:this.doFragPartsLoad(e,m,t,i)).catch(v=>this.handleFragLoadError(v)):g=this.doFragPartsLoad(e,m,t,i).catch(v=>this.handleFragLoadError(v)),this.hls.trigger(x.FRAG_LOADING,{frag:e,part:m,targetBufferTime:n}),this.fragCurrent===null?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")):g}else if(!e.url||this.loadedEndOfParts(u,n))return Promise.resolve(null)}}if(Ne(e)&&this.loadingParts)this.log(`LL-Part loading OFF after next part miss @${n.toFixed(2)}`),this.loadingParts=!1;else if(!e.url)return Promise.resolve(null);this.log(`Loading ${e.type} sn: ${e.sn} of ${this.fragInfo(e,!1)}) cc: ${e.cc} ${s?"["+s.startSN+"-"+s.endSN+"]":""}, target: ${parseFloat(n.toFixed(3))}`),Z(e.sn)&&!this.bitrateTest&&(this.nextLoadPosition=e.start+e.duration),this.state=K.FRAG_LOADING;const l=this.config.progressive;let c;return l&&o?c=o.then(u=>!u||this.fragContextChanged(u==null?void 0:u.frag)?null:this.fragmentLoader.load(e,i)).catch(u=>this.handleFragLoadError(u)):c=Promise.all([this.fragmentLoader.load(e,l?i:void 0),o]).then(([u])=>(!l&&u&&i&&i(u),u)).catch(u=>this.handleFragLoadError(u)),this.hls.trigger(x.FRAG_LOADING,{frag:e,targetBufferTime:n}),this.fragCurrent===null?Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")):c}doFragPartsLoad(e,t,n,i){return new Promise((r,s)=>{var o;const d=[],l=(o=n.details)==null?void 0:o.partList,c=u=>{this.fragmentLoader.loadPart(e,u,i).then(h=>{d[u.index]=h;const m=h.part;this.hls.trigger(x.FRAG_LOADED,h);const g=ka(n.details,e.sn,u.index+1)||Uo(l,e.sn,u.index+1);if(g)c(g);else return r({frag:e,part:m,partsLoaded:d})}).catch(s)};c(t)})}handleFragLoadError(e){if("data"in e){const t=e.data;e.data&&t.details===F.INTERNAL_ABORTED?this.handleFragLoadAborted(t.frag,t.part):this.hls.trigger(x.ERROR,t)}else this.hls.trigger(x.ERROR,{type:oe.OTHER_ERROR,details:F.INTERNAL_EXCEPTION,err:e,error:e,fatal:!0});return null}_handleTransmuxerFlush(e){const t=this.getCurrentContext(e);if(!t||this.state!==K.PARSING){!this.fragCurrent&&this.state!==K.STOPPED&&this.state!==K.ERROR&&(this.state=K.IDLE);return}const{frag:n,part:i,level:r}=t,s=self.performance.now();n.stats.parsing.end=s,i&&(i.stats.parsing.end=s);const o=this.getLevelDetails(),l=o&&n.sn>o.endSN||this.shouldLoadParts(o,n.end);l!==this.loadingParts&&(this.log(`LL-Part loading ${l?"ON":"OFF"} after parsing segment ending @${n.end.toFixed(2)}`),this.loadingParts=l),this.updateLevelTiming(n,i,r,e.partial)}shouldLoadParts(e,t){if(this.config.lowLatencyMode){if(!e)return this.loadingParts;if(e!=null&&e.partList){var n;const r=e.partList[0],s=r.end+(((n=e.fragmentHint)==null?void 0:n.duration)||0);if(t>=s){var i;if((this.hls.hasEnoughToStart?((i=this.media)==null?void 0:i.currentTime)||this.lastCurrentTime:this.getLoadPosition())>r.start-r.fragment.duration)return!0}}}return!1}getCurrentContext(e){const{levels:t,fragCurrent:n}=this,{level:i,sn:r,part:s}=e;if(!(t!=null&&t[i]))return this.warn(`Levels object was unset while buffering fragment ${r} of ${this.playlistLabel()} ${i}. The current chunk will not be buffered.`),null;const o=t[i],d=o.details,l=s>-1?ka(d,r,s):null,c=l?l.fragment:No(d,r,n);return c?(n&&n!==c&&(c.stats=n.stats),{frag:c,part:l,level:o}):null}bufferFragmentData(e,t,n,i,r){var s;if(!e||this.state!==K.PARSING)return;const{data1:o,data2:d}=e;let l=o;if(o&&d&&(l=Je(o,d)),!((s=l)!=null&&s.length))return;const c={type:e.type,frag:t,part:n,chunkMeta:i,parent:t.type,data:l};if(this.hls.trigger(x.BUFFER_APPENDING,c),e.dropped&&e.independent&&!n){if(r)return;this.flushBufferGap(t)}}flushBufferGap(e){const t=this.media;if(!t)return;if(!he.isBuffered(t,t.currentTime)){this.flushMainBuffer(0,e.start);return}const n=t.currentTime,i=he.bufferInfo(t,n,0),r=e.duration,s=Math.min(this.config.maxFragLookUpTolerance*2,r*.25),o=Math.max(Math.min(e.start-s,i.end-s),n+s);e.start-o>s&&this.flushMainBuffer(o,e.start)}getFwdBufferInfo(e,t){var n;const i=this.getLoadPosition();if(!Z(i))return null;const s=this.lastCurrentTime>i||(n=this.media)!=null&&n.paused?0:this.config.maxBufferHole;return this.getFwdBufferInfoAtPos(e,i,t,s)}getFwdBufferInfoAtPos(e,t,n,i){const r=he.bufferInfo(e,t,i);if(r.len===0&&r.nextStart!==void 0){const s=this.fragmentTracker.getBufferedFrag(t,n);if(s&&(r.nextStart<=s.end||s.gap)){const o=Math.max(Math.min(r.nextStart,s.end)-t,i);return he.bufferInfo(e,t,o)}}return r}getMaxBufferLength(e){const{config:t}=this;let n;return e?n=Math.max(8*t.maxBufferSize/e,t.maxBufferLength):n=t.maxBufferLength,Math.min(n,t.maxMaxBufferLength)}reduceMaxBufferLength(e,t){const n=this.config,i=Math.max(Math.min(e-t,n.maxBufferLength),t),r=Math.max(e-t*3,n.maxMaxBufferLength/2,i);return r>=i?(n.maxMaxBufferLength=r,this.warn(`Reduce max buffer length to ${r}s`),!0):!1}getAppendedFrag(e,t=re.MAIN){var n;const i=(n=this.fragmentTracker)==null?void 0:n.getAppendedFrag(e,t);return i&&"fragment"in i?i.fragment:i}getNextFragment(e,t){const n=t.fragments,i=n.length;if(!i)return null;const{config:r}=this,s=n[0].start,o=r.lowLatencyMode&&!!t.partList;let d=null;if(t.live){const u=r.initialLiveManifestSize;if(i<u)return this.warn(`Not enough fragments to start playback (have: ${i}, need: ${u})`),null;if(!t.PTSKnown&&!this.startFragRequested&&this.startPosition===-1||e<s){var l;o&&!this.loadingParts&&(this.log("LL-Part loading ON for initial live fragment"),this.loadingParts=!0),d=this.getInitialLiveFragment(t);const h=this.hls.startPosition,m=this.hls.liveSyncPosition,g=d?(h!==-1&&h>=s?h:m)||d.start:e;this.log(`Setting startPosition to ${g} to match start frag at live edge. mainStart: ${h} liveSyncPosition: ${m} frag.start: ${(l=d)==null?void 0:l.start}`),this.startPosition=this.nextLoadPosition=g}}else e<=s&&(d=n[0]);if(!d){const u=this.loadingParts?t.partEnd:t.fragmentEnd;d=this.getFragmentAtPosition(e,u,t)}let c=this.filterReplacedPrimary(d,t);if(!c&&d){const u=d.sn-t.startSN;c=this.filterReplacedPrimary(n[u+1]||null,t)}return this.mapToInitFragWhenRequired(c)}isLoopLoading(e,t){const n=this.fragmentTracker.getState(e);return(n===Oe.OK||n===Oe.PARTIAL&&!!e.gap)&&this.nextLoadPosition>t}getNextFragmentLoopLoading(e,t,n,i,r){let s=null;if(e.gap&&(s=this.getNextFragment(this.nextLoadPosition,t),s&&!s.gap&&n.nextStart)){const o=this.getFwdBufferInfoAtPos(this.mediaBuffer?this.mediaBuffer:this.media,n.nextStart,i,0);if(o!==null&&n.len+o.len>=r){const d=s.sn;return this.loopSn!==d&&(this.log(`buffer full after gaps in "${i}" playlist starting at sn: ${d}`),this.loopSn=d),null}}return this.loopSn=void 0,s}get primaryPrefetch(){if(Ra(this.hls.config)){var e,t;if((e=this.hls.interstitialsManager)==null||(t=e.playingItem)==null?void 0:t.event)return!0}return!1}filterReplacedPrimary(e,t){if(!e)return e;if(Ra(this.hls.config)&&e.type!==re.SUBTITLE){const n=this.hls.interstitialsManager,i=n==null?void 0:n.bufferingItem;if(i){const s=i.event;if(s){if(s.appendInPlace||Math.abs(e.start-i.start)>1||i.start===0)return null}else if(e.end<=i.start&&(t==null?void 0:t.live)===!1||e.start>i.end&&i.nextEvent&&(i.nextEvent.appendInPlace||e.start-i.end>1))return null}const r=n==null?void 0:n.playerQueue;if(r)for(let s=r.length;s--;){const o=r[s].interstitial;if(o.appendInPlace&&e.start>=o.startTime&&e.end<=o.resumeTime)return null}}return e}mapToInitFragWhenRequired(e){return e!=null&&e.initSegment&&!(e!=null&&e.initSegment.data)&&!this.bitrateTest?e.initSegment:e}getNextPart(e,t,n){let i=-1,r=!1,s=!0;for(let o=0,d=e.length;o<d;o++){const l=e[o];if(s=s&&!l.independent,i>-1&&n<l.start)break;const c=l.loaded;c?i=-1:(r||l.independent||s)&&l.fragment===t&&(i=o),r=c}return i}loadedEndOfParts(e,t){const n=e[e.length-1];return n&&t>n.start&&n.loaded}getInitialLiveFragment(e){const t=e.fragments,n=this.fragPrevious;let i=null;if(n){if(e.hasProgramDateTime&&(this.log(`Live playlist, switching playlist, load frag with same PDT: ${n.programDateTime}`),i=Uu(t,n.endProgramDateTime,this.config.maxFragLookUpTolerance)),!i){const r=n.sn+1;if(r>=e.startSN&&r<=e.endSN){const s=t[r-e.startSN];n.cc===s.cc&&(i=s,this.log(`Live playlist, switching playlist, load frag with next SN: ${i.sn}`))}i||(i=ko(e,n.cc,n.end),i&&this.log(`Live playlist, switching playlist, load frag with same CC: ${i.sn}`))}}else{const r=this.hls.liveSyncPosition;r!==null&&(i=this.getFragmentAtPosition(r,this.bitrateTest?e.fragmentEnd:e.edge,e))}return i}getFragmentAtPosition(e,t,n){const{config:i}=this;let{fragPrevious:r}=this,{fragments:s,endSN:o}=n;const{fragmentHint:d}=n,{maxFragLookUpTolerance:l}=i,c=n.partList,u=!!(this.loadingParts&&c!=null&&c.length&&d);u&&d&&!this.bitrateTest&&c[c.length-1].fragment.sn===d.sn&&(s=s.concat(d),o=d.sn);let h;if(e<t){var m;const v=e<this.lastCurrentTime||e>t-l||(m=this.media)!=null&&m.paused||!this.startFragRequested?0:l;h=Nt(r,s,e,v)}else h=s[s.length-1];if(h){const g=h.sn-n.startSN,v=this.fragmentTracker.getState(h);if((v===Oe.OK||v===Oe.PARTIAL&&h.gap)&&(r=h),r&&h.sn===r.sn&&(!u||c[0].fragment.sn>h.sn||!n.live&&!u)&&r&&h.level===r.level){const C=s[g+1];h.sn<o&&this.fragmentTracker.getState(C)!==Oe.OK?h=C:h=null}}return h}alignPlaylists(e,t,n){const i=e.fragments.length;if(!i)return this.warn("No fragments in live playlist"),0;const r=e.fragmentStart,s=!t,o=e.alignedSliding&&Z(r);if(s||!o&&!r){xh(n,e);const d=e.fragmentStart;return this.log(`Live playlist sliding: ${d.toFixed(2)} start-sn: ${t?t.startSN:"na"}->${e.startSN} fragments: ${i}`),d}return r}waitForCdnTuneIn(e){return e.live&&e.canBlockReload&&e.partTarget&&e.tuneInGoal>Math.max(e.partHoldBack,e.partTarget*3)}setStartPosition(e,t){let n=this.startPosition;n<t&&(n=-1);const i=this.timelineOffset;if(n===-1){const r=this.startTimeOffset!==null,s=r?this.startTimeOffset:e.startTimeOffset;s!==null&&Z(s)?(n=t+s,s<0&&(n+=e.edge),n=Math.min(Math.max(t,n),t+e.totalduration),this.log(`Setting startPosition to ${n} for start time offset ${s} found in ${r?"multivariant":"media"} playlist`),this.startPosition=n):e.live?(n=this.hls.liveSyncPosition||t,this.log(`Setting startPosition to -1 to start at live edge ${n}`),this.startPosition=-1):(this.log("setting startPosition to 0 by default"),this.startPosition=n=0),this.lastCurrentTime=n+i}this.nextLoadPosition=n+i}getLoadPosition(){var e;const{media:t}=this;let n=0;return(e=this.hls)!=null&&e.hasEnoughToStart&&t?n=t.currentTime:this.nextLoadPosition>=0&&(n=this.nextLoadPosition),n}handleFragLoadAborted(e,t){this.transmuxer&&e.type===this.playlistType&&Ne(e)&&e.stats.aborted&&(this.warn(`Fragment ${e.sn}${t?" part "+t.index:""} of ${this.playlistLabel()} ${e.level} was aborted`),this.resetFragmentLoading(e))}resetFragmentLoading(e){(!this.fragCurrent||!this.fragContextChanged(e)&&this.state!==K.FRAG_LOADING_WAITING_RETRY)&&(this.state=K.IDLE)}onFragmentOrKeyLoadError(e,t){if(t.chunkMeta&&!t.frag){const g=this.getCurrentContext(t.chunkMeta);g&&(t.frag=g.frag)}const n=t.frag;if(!n||n.type!==e||!this.levels)return;if(this.fragContextChanged(n)){var i;this.warn(`Frag load error must match current frag to retry ${n.url} > ${(i=this.fragCurrent)==null?void 0:i.url}`);return}const r=t.details===F.FRAG_GAP;r&&this.fragmentTracker.fragBuffered(n,!0);const s=t.errorAction,{action:o,flags:d,retryCount:l=0,retryConfig:c}=s||{},u=!!s&&!!c,h=u&&o===Ue.RetryRequest,m=u&&!s.resolved&&d===nt.MoveAllAlternatesMatchingHost;if(!h&&m&&Ne(n)&&!n.endList)this.resetFragmentErrors(e),this.treatAsGap(n),s.resolved=!0;else if((h||m)&&l<c.maxNumRetry){this.resetStartWhenNotLoaded(this.levelLastLoaded);const g=zr(c,l);this.warn(`Fragment ${n.sn} of ${e} ${n.level} errored with ${t.details}, retrying loading ${l+1}/${c.maxNumRetry} in ${g}ms`),s.resolved=!0,this.retryDate=self.performance.now()+g,this.state=K.FRAG_LOADING_WAITING_RETRY}else if(c&&s)if(this.resetFragmentErrors(e),l<c.maxNumRetry)!r&&o!==Ue.RemoveAlternatePermanently&&(s.resolved=!0);else{this.warn(`${t.details} reached or exceeded max retry (${l})`);return}else o===Ue.SendAlternateToPenaltyBox?this.state=K.WAITING_LEVEL:this.state=K.ERROR;this.tickImmediate()}reduceLengthAndFlushBuffer(e){if(this.state===K.PARSING||this.state===K.PARSED){const t=e.frag,n=e.parent,i=this.getFwdBufferInfo(this.mediaBuffer,n),r=i&&i.len>.5;r&&this.reduceMaxBufferLength(i.len,(t==null?void 0:t.duration)||10);const s=!r;return s&&this.warn(`Buffer full error while media.currentTime is not buffered, flush ${n} buffer`),t&&(this.fragmentTracker.removeFragment(t),this.nextLoadPosition=t.start),this.resetLoadingState(),s}return!1}resetFragmentErrors(e){e===re.AUDIO&&(this.fragCurrent=null),this.hls.hasEnoughToStart||(this.startFragRequested=!1),this.state!==K.STOPPED&&(this.state=K.IDLE)}afterBufferFlushed(e,t,n){if(!e)return;const i=he.getBuffered(e);this.fragmentTracker.detectEvictedFragments(t,i,n),this.state===K.ENDED&&this.resetLoadingState()}resetLoadingState(){this.log("Reset loading state"),this.fragCurrent=null,this.fragPrevious=null,this.state!==K.STOPPED&&(this.state=K.IDLE)}resetStartWhenNotLoaded(e){if(!this.hls.hasEnoughToStart){this.startFragRequested=!1;const t=e?e.details:null;t!=null&&t.live?(this.log("resetting startPosition for live start"),this.startPosition=-1,this.setStartPosition(t,t.fragmentStart),this.resetLoadingState()):this.nextLoadPosition=this.startPosition}}resetWhenMissingContext(e){this.warn(`The loading context changed while buffering fragment ${e.sn} of ${this.playlistLabel()} ${e.level}. This chunk will not be buffered.`),this.removeUnbufferedFrags(),this.resetStartWhenNotLoaded(this.levelLastLoaded),this.resetLoadingState()}removeUnbufferedFrags(e=0){this.fragmentTracker.removeFragmentsInRange(e,1/0,this.playlistType,!1,!0)}updateLevelTiming(e,t,n,i){const r=n.details;if(!r){this.warn("level.details undefined");return}if(!Object.keys(e.elementaryStreams).reduce((d,l)=>{const c=e.elementaryStreams[l];if(c){const u=c.endPTS-c.startPTS;if(u<=0)return this.warn(`Could not parse fragment ${e.sn} ${l} duration reliably (${u})`),d||!1;const h=i?0:Oo(r,e,c.startPTS,c.endPTS,c.startDTS,c.endDTS);return this.hls.trigger(x.LEVEL_PTS_UPDATED,{details:r,level:n,drift:h,type:l,frag:e,start:c.startPTS,end:c.endPTS}),!0}return d},!1)){var o;if(n.fragmentError===0&&this.treatAsGap(e,n),((o=this.transmuxer)==null?void 0:o.error)===null){const d=new Error(`Found no media in fragment ${e.sn} of ${this.playlistLabel()} ${e.level} resetting transmuxer to fallback to playlist timing`);if(this.warn(d.message),this.hls.trigger(x.ERROR,{type:oe.MEDIA_ERROR,details:F.FRAG_PARSING_ERROR,fatal:!1,error:d,frag:e,reason:`Found no media in msn ${e.sn} of ${this.playlistLabel()} "${n.url}"`}),!this.hls)return;this.resetTransmuxer()}}this.state=K.PARSED,this.log(`Parsed ${e.type} sn: ${e.sn}${t?" part: "+t.index:""} of ${this.fragInfo(e,!1,t)})`),this.hls.trigger(x.FRAG_PARSED,{frag:e,part:t})}playlistLabel(){return this.playlistType===re.MAIN?"level":"track"}fragInfo(e,t=!0,n){var i,r;return`${this.playlistLabel()} ${e.level} (${n?"part":"frag"}:[${((i=t&&!n?e.startPTS:(n||e).start)!=null?i:NaN).toFixed(3)}-${((r=t&&!n?e.endPTS:(n||e).end)!=null?r:NaN).toFixed(3)}]${n&&e.type==="main"?"INDEPENDENT="+(n.independent?"YES":"NO"):""}`}treatAsGap(e,t){t&&t.fragmentError++,e.gap=!0,this.fragmentTracker.removeFragment(e),this.fragmentTracker.fragBuffered(e,!0)}resetTransmuxer(){var e;(e=this.transmuxer)==null||e.reset()}recoverWorkerError(e){e.event==="demuxerWorker"&&(this.fragmentTracker.removeAllFragments(),this.transmuxer&&(this.transmuxer.destroy(),this.transmuxer=null),this.resetStartWhenNotLoaded(this.levelLastLoaded),this.resetLoadingState())}set state(e){const t=this._state;t!==e&&(this._state=e,this.log(`${t}->${e}`))}get state(){return this._state}}function Ra(a){return!!a.interstitialsController&&a.enableInterstitialPlayback!==!1}class Ho{constructor(){this.chunks=[],this.dataLength=0}push(e){this.chunks.push(e),this.dataLength+=e.length}flush(){const{chunks:e,dataLength:t}=this;let n;if(e.length)e.length===1?n=e[0]:n=Th(e,t);else return new Uint8Array(0);return this.reset(),n}reset(){this.chunks.length=0,this.dataLength=0}}function Th(a,e){const t=new Uint8Array(e);let n=0;for(let i=0;i<a.length;i++){const r=a[i];t.set(r,n),n+=r.length}return t}var fr={exports:{}},Da;function Ch(){return Da||(Da=1,function(a){var e=Object.prototype.hasOwnProperty,t="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(t=!1));function i(d,l,c){this.fn=d,this.context=l,this.once=c||!1}function r(d,l,c,u,h){if(typeof c!="function")throw new TypeError("The listener must be a function");var m=new i(c,u||d,h),g=t?t+l:l;return d._events[g]?d._events[g].fn?d._events[g]=[d._events[g],m]:d._events[g].push(m):(d._events[g]=m,d._eventsCount++),d}function s(d,l){--d._eventsCount===0?d._events=new n:delete d._events[l]}function o(){this._events=new n,this._eventsCount=0}o.prototype.eventNames=function(){var l=[],c,u;if(this._eventsCount===0)return l;for(u in c=this._events)e.call(c,u)&&l.push(t?u.slice(1):u);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(c)):l},o.prototype.listeners=function(l){var c=t?t+l:l,u=this._events[c];if(!u)return[];if(u.fn)return[u.fn];for(var h=0,m=u.length,g=new Array(m);h<m;h++)g[h]=u[h].fn;return g},o.prototype.listenerCount=function(l){var c=t?t+l:l,u=this._events[c];return u?u.fn?1:u.length:0},o.prototype.emit=function(l,c,u,h,m,g){var v=t?t+l:l;if(!this._events[v])return!1;var E=this._events[v],C=arguments.length,I,L;if(E.fn){switch(E.once&&this.removeListener(l,E.fn,void 0,!0),C){case 1:return E.fn.call(E.context),!0;case 2:return E.fn.call(E.context,c),!0;case 3:return E.fn.call(E.context,c,u),!0;case 4:return E.fn.call(E.context,c,u,h),!0;case 5:return E.fn.call(E.context,c,u,h,m),!0;case 6:return E.fn.call(E.context,c,u,h,m,g),!0}for(L=1,I=new Array(C-1);L<C;L++)I[L-1]=arguments[L];E.fn.apply(E.context,I)}else{var R=E.length,_;for(L=0;L<R;L++)switch(E[L].once&&this.removeListener(l,E[L].fn,void 0,!0),C){case 1:E[L].fn.call(E[L].context);break;case 2:E[L].fn.call(E[L].context,c);break;case 3:E[L].fn.call(E[L].context,c,u);break;case 4:E[L].fn.call(E[L].context,c,u,h);break;default:if(!I)for(_=1,I=new Array(C-1);_<C;_++)I[_-1]=arguments[_];E[L].fn.apply(E[L].context,I)}}return!0},o.prototype.on=function(l,c,u){return r(this,l,c,u,!1)},o.prototype.once=function(l,c,u){return r(this,l,c,u,!0)},o.prototype.removeListener=function(l,c,u,h){var m=t?t+l:l;if(!this._events[m])return this;if(!c)return s(this,m),this;var g=this._events[m];if(g.fn)g.fn===c&&(!h||g.once)&&(!u||g.context===u)&&s(this,m);else{for(var v=0,E=[],C=g.length;v<C;v++)(g[v].fn!==c||h&&!g[v].once||u&&g[v].context!==u)&&E.push(g[v]);E.length?this._events[m]=E.length===1?E[0]:E:s(this,m)}return this},o.prototype.removeAllListeners=function(l){var c;return l?(c=t?t+l:l,this._events[c]&&s(this,c)):(this._events=new n,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prefixed=t,o.EventEmitter=o,a.exports=o}(fr)),fr.exports}var Lh=Ch(),ts=nu(Lh);const Vn="1.6.5",rn={};function Ih(){return typeof __HLS_WORKER_BUNDLE__=="function"}function kh(){const a=rn[Vn];if(a)return a.clientCount++,a;const e=new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`],{type:"text/javascript"}),t=self.URL.createObjectURL(e),i={worker:new self.Worker(t),objectURL:t,clientCount:1};return rn[Vn]=i,i}function wh(a){const e=rn[a];if(e)return e.clientCount++,e;const t=new self.URL(a,self.location.href).href,i={worker:new self.Worker(t),scriptURL:t,clientCount:1};return rn[a]=i,i}function Rh(a){const e=rn[a||Vn];if(e&&e.clientCount--===1){const{worker:n,objectURL:i}=e;delete rn[a||Vn],i&&self.URL.revokeObjectURL(i),n.terminate()}}function Vo(a,e){return e+10<=a.length&&a[e]===51&&a[e+1]===68&&a[e+2]===73&&a[e+3]<255&&a[e+4]<255&&a[e+6]<128&&a[e+7]<128&&a[e+8]<128&&a[e+9]<128}function ns(a,e){return e+10<=a.length&&a[e]===73&&a[e+1]===68&&a[e+2]===51&&a[e+3]<255&&a[e+4]<255&&a[e+6]<128&&a[e+7]<128&&a[e+8]<128&&a[e+9]<128}function $i(a,e){let t=0;return t=(a[e]&127)<<21,t|=(a[e+1]&127)<<14,t|=(a[e+2]&127)<<7,t|=a[e+3]&127,t}function qn(a,e){const t=e;let n=0;for(;ns(a,e);){n+=10;const i=$i(a,e+6);n+=i,Vo(a,e+10)&&(n+=10),e+=n}if(n>0)return a.subarray(t,t+n)}function Dh(a,e,t,n){const i=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],r=e[t+2],s=r>>2&15;if(s>12){const m=new Error(`invalid ADTS sampling index:${s}`);a.emit(x.ERROR,x.ERROR,{type:oe.MEDIA_ERROR,details:F.FRAG_PARSING_ERROR,fatal:!0,error:m,reason:m.message});return}const o=(r>>6&3)+1,d=e[t+3]>>6&3|(r&1)<<2,l="mp4a.40."+o,c=i[s];let u=s;(o===5||o===29)&&(u-=3);const h=[o<<3|(u&14)>>1,(u&1)<<7|d<<3];return be.log(`manifest codec:${n}, parsed codec:${l}, channels:${d}, rate:${c} (ADTS object type:${o} sampling index:${s})`),{config:h,samplerate:c,channelCount:d,codec:l,parsedCodec:l,manifestCodec:n}}function qo(a,e){return a[e]===255&&(a[e+1]&246)===240}function Yo(a,e){return a[e+1]&1?7:9}function is(a,e){return(a[e+3]&3)<<11|a[e+4]<<3|(a[e+5]&224)>>>5}function _h(a,e){return e+5<a.length}function Mi(a,e){return e+1<a.length&&qo(a,e)}function Ph(a,e){return _h(a,e)&&qo(a,e)&&is(a,e)<=a.length-e}function Bh(a,e){if(Mi(a,e)){const t=Yo(a,e);if(e+t>=a.length)return!1;const n=is(a,e);if(n<=t)return!1;const i=e+n;return i===a.length||Mi(a,i)}return!1}function jo(a,e,t,n,i){if(!a.samplerate){const r=Dh(e,t,n,i);if(!r)return;Se(a,r)}}function Wo(a){return 1024*9e4/a}function Oh(a,e){const t=Yo(a,e);if(e+t<=a.length){const n=is(a,e)-t;if(n>0)return{headerLength:t,frameLength:n}}}function zo(a,e,t,n,i){const r=Wo(a.samplerate),s=n+i*r,o=Oh(e,t);let d;if(o){const{frameLength:u,headerLength:h}=o,m=h+u,g=Math.max(0,t+m-e.length);g?(d=new Uint8Array(m-h),d.set(e.subarray(t+h,e.length),0)):d=e.subarray(t+h,t+m);const v={unit:d,pts:s};return g||a.samples.push(v),{sample:v,length:m,missing:g}}const l=e.length-t;return d=new Uint8Array(l),d.set(e.subarray(t,e.length),0),{sample:{unit:d,pts:s},length:l,missing:-1}}function Fh(a,e){return ns(a,e)&&$i(a,e+6)+10<=a.length-e}function Mh(a){return a instanceof ArrayBuffer?a:a.byteOffset==0&&a.byteLength==a.buffer.byteLength?a.buffer:new Uint8Array(a).buffer}function pr(a,e=0,t=1/0){return Nh(a,e,t,Uint8Array)}function Nh(a,e,t,n){const i=Uh(a);let r=1;"BYTES_PER_ELEMENT"in n&&(r=n.BYTES_PER_ELEMENT);const s=$h(a)?a.byteOffset:0,o=(s+a.byteLength)/r,d=(s+e)/r,l=Math.floor(Math.max(0,Math.min(d,o))),c=Math.floor(Math.min(l+Math.max(t,0),o));return new n(i,l,c-l)}function Uh(a){return a instanceof ArrayBuffer?a:a.buffer}function $h(a){return a&&a.buffer instanceof ArrayBuffer&&a.byteLength!==void 0&&a.byteOffset!==void 0}function Gh(a){const e={key:a.type,description:"",data:"",mimeType:null,pictureType:null},t=3;if(a.size<2)return;if(a.data[0]!==t){console.log("Ignore frame with unrecognized character encoding");return}const n=a.data.subarray(1).indexOf(0);if(n===-1)return;const i=We(pr(a.data,1,n)),r=a.data[2+n],s=a.data.subarray(3+n).indexOf(0);if(s===-1)return;const o=We(pr(a.data,3+n,s));let d;return i==="-->"?d=We(pr(a.data,4+n+s)):d=Mh(a.data.subarray(4+n+s)),e.mimeType=i,e.pictureType=r,e.description=o,e.data=d,e}function Kh(a){if(a.size<2)return;const e=We(a.data,!0),t=new Uint8Array(a.data.subarray(e.length+1));return{key:a.type,info:e,data:t.buffer}}function Hh(a){if(a.size<2)return;if(a.type==="TXXX"){let t=1;const n=We(a.data.subarray(t),!0);t+=n.length+1;const i=We(a.data.subarray(t));return{key:a.type,info:n,data:i}}const e=We(a.data.subarray(1));return{key:a.type,info:"",data:e}}function Vh(a){if(a.type==="WXXX"){if(a.size<2)return;let t=1;const n=We(a.data.subarray(t),!0);t+=n.length+1;const i=We(a.data.subarray(t));return{key:a.type,info:n,data:i}}const e=We(a.data);return{key:a.type,info:"",data:e}}function qh(a){return a.type==="PRIV"?Kh(a):a.type[0]==="W"?Vh(a):a.type==="APIC"?Gh(a):Hh(a)}function Yh(a){const e=String.fromCharCode(a[0],a[1],a[2],a[3]),t=$i(a,4),n=10;return{type:e,size:t,data:a.subarray(n,n+t)}}const hi=10,jh=10;function Qo(a){let e=0;const t=[];for(;ns(a,e);){const n=$i(a,e+6);a[e+5]>>6&1&&(e+=hi),e+=hi;const i=e+n;for(;e+jh<i;){const r=Yh(a.subarray(e)),s=qh(r);s&&t.push(s),e+=r.size+hi}Vo(a,e)&&(e+=hi)}return t}function Xo(a){return a&&a.key==="PRIV"&&a.info==="com.apple.streaming.transportStreamTimestamp"}function Wh(a){if(a.data.byteLength===8){const e=new Uint8Array(a.data),t=e[3]&1;let n=(e[4]<<23)+(e[5]<<15)+(e[6]<<7)+e[7];return n/=45,t&&(n+=4772185884e-2),Math.round(n)}}function rs(a){const e=Qo(a);for(let t=0;t<e.length;t++){const n=e[t];if(Xo(n))return Wh(n)}}let Ye=function(a){return a.audioId3="org.id3",a.dateRange="com.apple.quicktime.HLS",a.emsg="https://aomedia.org/emsg/ID3",a.misbklv="urn:misb:KLV:bin:1910.1",a}({});function lt(a="",e=9e4){return{type:a,id:-1,pid:-1,inputTimeScale:e,sequenceNumber:-1,samples:[],dropped:0}}class ss{constructor(){this._audioTrack=void 0,this._id3Track=void 0,this.frameIndex=0,this.cachedData=null,this.basePTS=null,this.initPTS=null,this.lastPTS=null}resetInitSegment(e,t,n,i){this._id3Track={type:"id3",id:3,pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0}}resetTimeStamp(e){this.initPTS=e,this.resetContiguity()}resetContiguity(){this.basePTS=null,this.lastPTS=null,this.frameIndex=0}canParse(e,t){return!1}appendFrame(e,t,n){}demux(e,t){this.cachedData&&(e=Je(this.cachedData,e),this.cachedData=null);let n=qn(e,0),i=n?n.length:0,r;const s=this._audioTrack,o=this._id3Track,d=n?rs(n):void 0,l=e.length;for((this.basePTS===null||this.frameIndex===0&&Z(d))&&(this.basePTS=zh(d,t,this.initPTS),this.lastPTS=this.basePTS),this.lastPTS===null&&(this.lastPTS=this.basePTS),n&&n.length>0&&o.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:n,type:Ye.audioId3,duration:Number.POSITIVE_INFINITY});i<l;){if(this.canParse(e,i)){const c=this.appendFrame(s,e,i);c?(this.frameIndex++,this.lastPTS=c.sample.pts,i+=c.length,r=i):i=l}else Fh(e,i)?(n=qn(e,i),o.samples.push({pts:this.lastPTS,dts:this.lastPTS,data:n,type:Ye.audioId3,duration:Number.POSITIVE_INFINITY}),i+=n.length,r=i):i++;if(i===l&&r!==l){const c=e.slice(r);this.cachedData?this.cachedData=Je(this.cachedData,c):this.cachedData=c}}return{audioTrack:s,videoTrack:lt(),id3Track:o,textTrack:lt()}}demuxSampleAes(e,t,n){return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`))}flush(e){const t=this.cachedData;return t&&(this.cachedData=null,this.demux(t,0)),{audioTrack:this._audioTrack,videoTrack:lt(),id3Track:this._id3Track,textTrack:lt()}}destroy(){this.cachedData=null,this._audioTrack=this._id3Track=void 0}}const zh=(a,e,t)=>{if(Z(a))return a*90;const n=t?t.baseTime*9e4/t.timescale:0;return e*9e4+n};let fi=null;const Qh=[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],Xh=[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],Zh=[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],Jh=[0,1,1,4];function Zo(a,e,t,n,i){if(t+24>e.length)return;const r=Jo(e,t);if(r&&t+r.frameLength<=e.length){const s=r.samplesPerFrame*9e4/r.sampleRate,o=n+i*s,d={unit:e.subarray(t,t+r.frameLength),pts:o,dts:o};return a.config=[],a.channelCount=r.channelCount,a.samplerate=r.sampleRate,a.samples.push(d),{sample:d,length:r.frameLength,missing:0}}}function Jo(a,e){const t=a[e+1]>>3&3,n=a[e+1]>>1&3,i=a[e+2]>>4&15,r=a[e+2]>>2&3;if(t!==1&&i!==0&&i!==15&&r!==3){const s=a[e+2]>>1&1,o=a[e+3]>>6,d=t===3?3-n:n===3?3:4,l=Qh[d*14+i-1]*1e3,u=Xh[(t===3?0:t===2?1:2)*3+r],h=o===3?1:2,m=Zh[t][n],g=Jh[n],v=m*8*g,E=Math.floor(m*l/u+s)*g;if(fi===null){const L=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);fi=L?parseInt(L[1]):0}return!!fi&&fi<=87&&n===2&&l>=224e3&&o===0&&(a[e+3]=a[e+3]|128),{sampleRate:u,channelCount:h,frameLength:E,samplesPerFrame:v}}}function as(a,e){return a[e]===255&&(a[e+1]&224)===224&&(a[e+1]&6)!==0}function el(a,e){return e+1<a.length&&as(a,e)}function ef(a,e){return as(a,e)&&4<=a.length-e}function tl(a,e){if(e+1<a.length&&as(a,e)){const n=Jo(a,e);let i=4;n!=null&&n.frameLength&&(i=n.frameLength);const r=e+i;return r===a.length||el(a,r)}return!1}class tf extends ss{constructor(e,t){super(),this.observer=void 0,this.config=void 0,this.observer=e,this.config=t}resetInitSegment(e,t,n,i){super.resetInitSegment(e,t,n,i),this._audioTrack={container:"audio/adts",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"aac",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}static probe(e,t){if(!e)return!1;const n=qn(e,0);let i=(n==null?void 0:n.length)||0;if(tl(e,i))return!1;for(let r=e.length;i<r;i++)if(Bh(e,i))return t.log("ADTS sync word found !"),!0;return!1}canParse(e,t){return Ph(e,t)}appendFrame(e,t,n){jo(e,this.observer,t,n,e.manifestCodec);const i=zo(e,t,n,this.basePTS,this.frameIndex);if(i&&i.missing===0)return i}}const nl=(a,e)=>{let t=0,n=5;e+=n;const i=new Uint32Array(1),r=new Uint32Array(1),s=new Uint8Array(1);for(;n>0;){s[0]=a[e];const o=Math.min(n,8),d=8-o;r[0]=4278190080>>>24+d<<d,i[0]=(s[0]&r[0])>>d,t=t?t<<o|i[0]:i[0],e+=1,n-=o}return t};class nf extends ss{constructor(e){super(),this.observer=void 0,this.observer=e}resetInitSegment(e,t,n,i){super.resetInitSegment(e,t,n,i),this._audioTrack={container:"audio/ac-3",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"ac3",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}canParse(e,t){return t+64<e.length}appendFrame(e,t,n){const i=il(e,t,n,this.basePTS,this.frameIndex);if(i!==-1)return{sample:e.samples[e.samples.length-1],length:i,missing:0}}static probe(e){if(!e)return!1;const t=qn(e,0);if(!t)return!1;const n=t.length;return e[n]===11&&e[n+1]===119&&rs(t)!==void 0&&nl(e,n)<16}}function il(a,e,t,n,i){if(t+8>e.length||e[t]!==11||e[t+1]!==119)return-1;const r=e[t+4]>>6;if(r>=3)return-1;const o=[48e3,44100,32e3][r],d=e[t+4]&63,c=[64,69,96,64,70,96,80,87,120,80,88,120,96,104,144,96,105,144,112,121,168,112,122,168,128,139,192,128,140,192,160,174,240,160,175,240,192,208,288,192,209,288,224,243,336,224,244,336,256,278,384,256,279,384,320,348,480,320,349,480,384,417,576,384,418,576,448,487,672,448,488,672,512,557,768,512,558,768,640,696,960,640,697,960,768,835,1152,768,836,1152,896,975,1344,896,976,1344,1024,1114,1536,1024,1115,1536,1152,1253,1728,1152,1254,1728,1280,1393,1920,1280,1394,1920][d*3+r]*2;if(t+c>e.length)return-1;const u=e[t+6]>>5;let h=0;u===2?h+=2:(u&1&&u!==1&&(h+=2),u&4&&(h+=2));const m=(e[t+6]<<8|e[t+7])>>12-h&1,v=[2,1,2,3,3,4,4,5][u]+m,E=e[t+5]>>3,C=e[t+5]&7,I=new Uint8Array([r<<6|E<<1|C>>2,(C&3)<<6|u<<3|m<<2|d>>4,d<<4&224]),L=1536/o*9e4,R=n+i*L,_=e.subarray(t,t+c);return a.config=I,a.channelCount=v,a.samplerate=o,a.samples.push({unit:_,pts:R}),c}class rf extends ss{resetInitSegment(e,t,n,i){super.resetInitSegment(e,t,n,i),this._audioTrack={container:"audio/mpeg",type:"audio",id:2,pid:-1,sequenceNumber:0,segmentCodec:"mp3",samples:[],manifestCodec:t,duration:i,inputTimeScale:9e4,dropped:0}}static probe(e){if(!e)return!1;const t=qn(e,0);let n=(t==null?void 0:t.length)||0;if(t&&e[n]===11&&e[n+1]===119&&rs(t)!==void 0&&nl(e,n)<=16)return!1;for(let i=e.length;n<i;n++)if(tl(e,n))return be.log("MPEG Audio sync word found !"),!0;return!1}canParse(e,t){return ef(e,t)}appendFrame(e,t,n){if(this.basePTS!==null)return Zo(e,t,n,this.basePTS,this.frameIndex)}}const sf=/\/emsg[-/]ID3/i;class af{constructor(e,t){this.remainderData=null,this.timeOffset=0,this.config=void 0,this.videoTrack=void 0,this.audioTrack=void 0,this.id3Track=void 0,this.txtTrack=void 0,this.config=t}resetTimeStamp(){}resetInitSegment(e,t,n,i){const r=this.videoTrack=lt("video",1),s=this.audioTrack=lt("audio",1),o=this.txtTrack=lt("text",1);if(this.id3Track=lt("id3",1),this.timeOffset=0,!(e!=null&&e.byteLength))return;const d=go(e);if(d.video){const{id:l,timescale:c,codec:u,supplemental:h}=d.video;r.id=l,r.timescale=o.timescale=c,r.codec=u,r.supplemental=h}if(d.audio){const{id:l,timescale:c,codec:u}=d.audio;s.id=l,s.timescale=c,s.codec=u}o.id=fo.text,r.sampleDuration=0,r.duration=s.duration=i}resetContiguity(){this.remainderData=null}static probe(e){return ou(e)}demux(e,t){this.timeOffset=t;let n=e;const i=this.videoTrack,r=this.txtTrack;if(this.config.progressive){this.remainderData&&(n=Je(this.remainderData,e));const o=pu(n);this.remainderData=o.remainder,i.samples=o.valid||new Uint8Array}else i.samples=n;const s=this.extractID3Track(i,t);return r.samples=Zs(t,i),{videoTrack:i,audioTrack:this.audioTrack,id3Track:s,textTrack:this.txtTrack}}flush(){const e=this.timeOffset,t=this.videoTrack,n=this.txtTrack;t.samples=this.remainderData||new Uint8Array,this.remainderData=null;const i=this.extractID3Track(t,this.timeOffset);return n.samples=Zs(e,t),{videoTrack:t,audioTrack:lt(),id3Track:i,textTrack:lt()}}extractID3Track(e,t){const n=this.id3Track;if(e.samples.length){const i=pe(e.samples,["emsg"]);i&&i.forEach(r=>{const s=gu(r);if(sf.test(s.schemeIdUri)){const o=_a(s,t);let d=s.eventDuration===4294967295?Number.POSITIVE_INFINITY:s.eventDuration/s.timeScale;d<=.001&&(d=Number.POSITIVE_INFINITY);const l=s.payload;n.samples.push({data:l,len:l.byteLength,dts:o,pts:o,type:Ye.emsg,duration:d})}else if(this.config.enableEmsgKLVMetadata&&s.schemeIdUri.startsWith("urn:misb:KLV:bin:1910.1")){const o=_a(s,t);n.samples.push({data:s.payload,len:s.payload.byteLength,dts:o,pts:o,type:Ye.misbklv,duration:Number.POSITIVE_INFINITY})}})}return n}demuxSampleAes(e,t,n){return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))}destroy(){this.config=null,this.remainderData=null,this.videoTrack=this.audioTrack=this.id3Track=this.txtTrack=void 0}}function _a(a,e){return Z(a.presentationTime)?a.presentationTime/a.timeScale:e+a.presentationTimeDelta/a.timeScale}class of{constructor(e,t,n){this.keyData=void 0,this.decrypter=void 0,this.keyData=n,this.decrypter=new Qr(t,{removePKCS7Padding:!1})}decryptBuffer(e){return this.decrypter.decrypt(e,this.keyData.key.buffer,this.keyData.iv.buffer,Dt.cbc)}decryptAacSample(e,t,n){const i=e[t].unit;if(i.length<=16)return;const r=i.subarray(16,i.length-i.length%16),s=r.buffer.slice(r.byteOffset,r.byteOffset+r.length);this.decryptBuffer(s).then(o=>{const d=new Uint8Array(o);i.set(d,16),this.decrypter.isSync()||this.decryptAacSamples(e,t+1,n)})}decryptAacSamples(e,t,n){for(;;t++){if(t>=e.length){n();return}if(!(e[t].unit.length<32)&&(this.decryptAacSample(e,t,n),!this.decrypter.isSync()))return}}getAvcEncryptedData(e){const t=Math.floor((e.length-48)/160)*16+16,n=new Int8Array(t);let i=0;for(let r=32;r<e.length-16;r+=160,i+=16)n.set(e.subarray(r,r+16),i);return n}getAvcDecryptedUnit(e,t){const n=new Uint8Array(t);let i=0;for(let r=32;r<e.length-16;r+=160,i+=16)e.set(n.subarray(i,i+16),r);return e}decryptAvcSample(e,t,n,i,r){const s=Ao(r.data),o=this.getAvcEncryptedData(s);this.decryptBuffer(o.buffer).then(d=>{r.data=this.getAvcDecryptedUnit(s,d),this.decrypter.isSync()||this.decryptAvcSamples(e,t,n+1,i)})}decryptAvcSamples(e,t,n,i){if(e instanceof Uint8Array)throw new Error("Cannot decrypt samples of type Uint8Array");for(;;t++,n=0){if(t>=e.length){i();return}const r=e[t].units;for(;!(n>=r.length);n++){const s=r[n];if(!(s.data.length<=48||s.type!==1&&s.type!==5)&&(this.decryptAvcSample(e,t,n,i,s),!this.decrypter.isSync()))return}}}}class rl{constructor(){this.VideoSample=null}createVideoSample(e,t,n){return{key:e,frame:!1,pts:t,dts:n,units:[],length:0}}getLastNalUnit(e){var t;let n=this.VideoSample,i;if((!n||n.units.length===0)&&(n=e[e.length-1]),(t=n)!=null&&t.units){const r=n.units;i=r[r.length-1]}return i}pushAccessUnit(e,t){if(e.units.length&&e.frame){if(e.pts===void 0){const n=t.samples,i=n.length;if(i){const r=n[i-1];e.pts=r.pts,e.dts=r.dts}else{t.dropped++;return}}t.samples.push(e)}}parseNALu(e,t,n){const i=t.byteLength;let r=e.naluState||0;const s=r,o=[];let d=0,l,c,u,h=-1,m=0;for(r===-1&&(h=0,m=this.getNALuType(t,0),r=0,d=1);d<i;){if(l=t[d++],!r){r=l?0:1;continue}if(r===1){r=l?0:2;continue}if(!l)r=3;else if(l===1){if(c=d-r-1,h>=0){const g={data:t.subarray(h,c),type:m};o.push(g)}else{const g=this.getLastNalUnit(e.samples);g&&(s&&d<=4-s&&g.state&&(g.data=g.data.subarray(0,g.data.byteLength-s)),c>0&&(g.data=Je(g.data,t.subarray(0,c)),g.state=0))}d<i?(u=this.getNALuType(t,d),h=d,m=u,r=0):r=-1}else r=0}if(h>=0&&r>=0){const g={data:t.subarray(h,i),type:m,state:r};o.push(g)}if(o.length===0){const g=this.getLastNalUnit(e.samples);g&&(g.data=Je(g.data,t))}return e.naluState=r,o}}class Nn{constructor(e){this.data=void 0,this.bytesAvailable=void 0,this.word=void 0,this.bitsAvailable=void 0,this.data=e,this.bytesAvailable=e.byteLength,this.word=0,this.bitsAvailable=0}loadWord(){const e=this.data,t=this.bytesAvailable,n=e.byteLength-t,i=new Uint8Array(4),r=Math.min(4,t);if(r===0)throw new Error("no bytes available");i.set(e.subarray(n,n+r)),this.word=new DataView(i.buffer).getUint32(0),this.bitsAvailable=r*8,this.bytesAvailable-=r}skipBits(e){let t;e=Math.min(e,this.bytesAvailable*8+this.bitsAvailable),this.bitsAvailable>e?(this.word<<=e,this.bitsAvailable-=e):(e-=this.bitsAvailable,t=e>>3,e-=t<<3,this.bytesAvailable-=t,this.loadWord(),this.word<<=e,this.bitsAvailable-=e)}readBits(e){let t=Math.min(this.bitsAvailable,e);const n=this.word>>>32-t;if(e>32&&be.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=t,this.bitsAvailable>0)this.word<<=t;else if(this.bytesAvailable>0)this.loadWord();else throw new Error("no bits available");return t=e-t,t>0&&this.bitsAvailable?n<<t|this.readBits(t):n}skipLZ(){let e;for(e=0;e<this.bitsAvailable;++e)if((this.word&2147483648>>>e)!==0)return this.word<<=e,this.bitsAvailable-=e,e;return this.loadWord(),e+this.skipLZ()}skipUEG(){this.skipBits(1+this.skipLZ())}skipEG(){this.skipBits(1+this.skipLZ())}readUEG(){const e=this.skipLZ();return this.readBits(e+1)-1}readEG(){const e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)}readBoolean(){return this.readBits(1)===1}readUByte(){return this.readBits(8)}readUShort(){return this.readBits(16)}readUInt(){return this.readBits(32)}}class Pa extends rl{parsePES(e,t,n,i){const r=this.parseNALu(e,n.data,i);let s=this.VideoSample,o,d=!1;n.data=null,s&&r.length&&!e.audFound&&(this.pushAccessUnit(s,e),s=this.VideoSample=this.createVideoSample(!1,n.pts,n.dts)),r.forEach(l=>{var c,u;switch(l.type){case 1:{let v=!1;o=!0;const E=l.data;if(d&&E.length>4){const C=this.readSliceType(E);(C===2||C===4||C===7||C===9)&&(v=!0)}if(v){var h;(h=s)!=null&&h.frame&&!s.key&&(this.pushAccessUnit(s,e),s=this.VideoSample=null)}s||(s=this.VideoSample=this.createVideoSample(!0,n.pts,n.dts)),s.frame=!0,s.key=v;break}case 5:o=!0,(c=s)!=null&&c.frame&&!s.key&&(this.pushAccessUnit(s,e),s=this.VideoSample=null),s||(s=this.VideoSample=this.createVideoSample(!0,n.pts,n.dts)),s.key=!0,s.frame=!0;break;case 6:{o=!0,Wr(l.data,1,n.pts,t.samples);break}case 7:{var m,g;o=!0,d=!0;const v=l.data,E=this.readSPS(v);if(!e.sps||e.width!==E.width||e.height!==E.height||((m=e.pixelRatio)==null?void 0:m[0])!==E.pixelRatio[0]||((g=e.pixelRatio)==null?void 0:g[1])!==E.pixelRatio[1]){e.width=E.width,e.height=E.height,e.pixelRatio=E.pixelRatio,e.sps=[v];const C=v.subarray(1,4);let I="avc1.";for(let L=0;L<3;L++){let R=C[L].toString(16);R.length<2&&(R="0"+R),I+=R}e.codec=I}break}case 8:o=!0,e.pps=[l.data];break;case 9:o=!0,e.audFound=!0,(u=s)!=null&&u.frame&&(this.pushAccessUnit(s,e),s=null),s||(s=this.VideoSample=this.createVideoSample(!1,n.pts,n.dts));break;case 12:o=!0;break;default:o=!1;break}s&&o&&s.units.push(l)}),i&&s&&(this.pushAccessUnit(s,e),this.VideoSample=null)}getNALuType(e,t){return e[t]&31}readSliceType(e){const t=new Nn(e);return t.readUByte(),t.readUEG(),t.readUEG()}skipScalingList(e,t){let n=8,i=8,r;for(let s=0;s<e;s++)i!==0&&(r=t.readEG(),i=(n+r+256)%256),n=i===0?n:i}readSPS(e){const t=new Nn(e);let n=0,i=0,r=0,s=0,o,d,l;const c=t.readUByte.bind(t),u=t.readBits.bind(t),h=t.readUEG.bind(t),m=t.readBoolean.bind(t),g=t.skipBits.bind(t),v=t.skipEG.bind(t),E=t.skipUEG.bind(t),C=this.skipScalingList.bind(this);c();const I=c();if(u(5),g(3),c(),E(),I===100||I===110||I===122||I===244||I===44||I===83||I===86||I===118||I===128){const O=h();if(O===3&&g(1),E(),E(),g(1),m())for(d=O!==3?8:12,l=0;l<d;l++)m()&&(l<6?C(16,t):C(64,t))}E();const L=h();if(L===0)h();else if(L===1)for(g(1),v(),v(),o=h(),l=0;l<o;l++)v();E(),g(1);const R=h(),_=h(),N=u(1);N===0&&g(1),g(1),m()&&(n=h(),i=h(),r=h(),s=h());let P=[1,1];if(m()&&m())switch(c()){case 1:P=[1,1];break;case 2:P=[12,11];break;case 3:P=[10,11];break;case 4:P=[16,11];break;case 5:P=[40,33];break;case 6:P=[24,11];break;case 7:P=[20,11];break;case 8:P=[32,11];break;case 9:P=[80,33];break;case 10:P=[18,11];break;case 11:P=[15,11];break;case 12:P=[64,33];break;case 13:P=[160,99];break;case 14:P=[4,3];break;case 15:P=[3,2];break;case 16:P=[2,1];break;case 255:{P=[c()<<8|c(),c()<<8|c()];break}}return{width:Math.ceil((R+1)*16-n*2-i*2),height:(2-N)*(_+1)*16-(N?2:4)*(r+s),pixelRatio:P}}}class Ba extends rl{constructor(...e){super(...e),this.initVPS=null}parsePES(e,t,n,i){const r=this.parseNALu(e,n.data,i);let s=this.VideoSample,o,d=!1;n.data=null,s&&r.length&&!e.audFound&&(this.pushAccessUnit(s,e),s=this.VideoSample=this.createVideoSample(!1,n.pts,n.dts)),r.forEach(l=>{var c,u;switch(l.type){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:s||(s=this.VideoSample=this.createVideoSample(!1,n.pts,n.dts)),s.frame=!0,o=!0;break;case 16:case 17:case 18:case 21:if(o=!0,d){var h;(h=s)!=null&&h.frame&&!s.key&&(this.pushAccessUnit(s,e),s=this.VideoSample=null)}s||(s=this.VideoSample=this.createVideoSample(!0,n.pts,n.dts)),s.key=!0,s.frame=!0;break;case 19:case 20:o=!0,(c=s)!=null&&c.frame&&!s.key&&(this.pushAccessUnit(s,e),s=this.VideoSample=null),s||(s=this.VideoSample=this.createVideoSample(!0,n.pts,n.dts)),s.key=!0,s.frame=!0;break;case 39:o=!0,Wr(l.data,2,n.pts,t.samples);break;case 32:o=!0,e.vps||(typeof e.params!="object"&&(e.params={}),e.params=Se(e.params,this.readVPS(l.data)),this.initVPS=l.data),e.vps=[l.data];break;case 33:if(o=!0,d=!0,e.vps!==void 0&&e.vps[0]!==this.initVPS&&e.sps!==void 0&&!this.matchSPS(e.sps[0],l.data)&&(this.initVPS=e.vps[0],e.sps=e.pps=void 0),!e.sps){const m=this.readSPS(l.data);e.width=m.width,e.height=m.height,e.pixelRatio=m.pixelRatio,e.codec=m.codecString,e.sps=[],typeof e.params!="object"&&(e.params={});for(const g in m.params)e.params[g]=m.params[g]}this.pushParameterSet(e.sps,l.data,e.vps),s||(s=this.VideoSample=this.createVideoSample(!0,n.pts,n.dts)),s.key=!0;break;case 34:if(o=!0,typeof e.params=="object"){if(!e.pps){e.pps=[];const m=this.readPPS(l.data);for(const g in m)e.params[g]=m[g]}this.pushParameterSet(e.pps,l.data,e.vps)}break;case 35:o=!0,e.audFound=!0,(u=s)!=null&&u.frame&&(this.pushAccessUnit(s,e),s=null),s||(s=this.VideoSample=this.createVideoSample(!1,n.pts,n.dts));break;default:o=!1;break}s&&o&&s.units.push(l)}),i&&s&&(this.pushAccessUnit(s,e),this.VideoSample=null)}pushParameterSet(e,t,n){(n&&n[0]===this.initVPS||!n&&!e.length)&&e.push(t)}getNALuType(e,t){return(e[t]&126)>>>1}ebsp2rbsp(e){const t=new Uint8Array(e.byteLength);let n=0;for(let i=0;i<e.byteLength;i++)i>=2&&e[i]===3&&e[i-1]===0&&e[i-2]===0||(t[n]=e[i],n++);return new Uint8Array(t.buffer,0,n)}pushAccessUnit(e,t){super.pushAccessUnit(e,t),this.initVPS&&(this.initVPS=null)}readVPS(e){const t=new Nn(e);t.readUByte(),t.readUByte(),t.readBits(4),t.skipBits(2),t.readBits(6);const n=t.readBits(3),i=t.readBoolean();return{numTemporalLayers:n+1,temporalIdNested:i}}readSPS(e){const t=new Nn(this.ebsp2rbsp(e));t.readUByte(),t.readUByte(),t.readBits(4);const n=t.readBits(3);t.readBoolean();const i=t.readBits(2),r=t.readBoolean(),s=t.readBits(5),o=t.readUByte(),d=t.readUByte(),l=t.readUByte(),c=t.readUByte(),u=t.readUByte(),h=t.readUByte(),m=t.readUByte(),g=t.readUByte(),v=t.readUByte(),E=t.readUByte(),C=t.readUByte(),I=[],L=[];for(let ve=0;ve<n;ve++)I.push(t.readBoolean()),L.push(t.readBoolean());if(n>0)for(let ve=n;ve<8;ve++)t.readBits(2);for(let ve=0;ve<n;ve++)I[ve]&&(t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte(),t.readUByte()),L[ve]&&t.readUByte();t.readUEG();const R=t.readUEG();R==3&&t.skipBits(1);const _=t.readUEG(),N=t.readUEG(),P=t.readBoolean();let O=0,U=0,D=0,V=0;P&&(O+=t.readUEG(),U+=t.readUEG(),D+=t.readUEG(),V+=t.readUEG());const Y=t.readUEG(),se=t.readUEG(),J=t.readUEG(),ee=t.readBoolean();for(let ve=ee?0:n;ve<=n;ve++)t.skipUEG(),t.skipUEG(),t.skipUEG();if(t.skipUEG(),t.skipUEG(),t.skipUEG(),t.skipUEG(),t.skipUEG(),t.skipUEG(),t.readBoolean()&&t.readBoolean())for(let Fe=0;Fe<4;Fe++)for(let Ge=0;Ge<(Fe===3?2:6);Ge++)if(!t.readBoolean())t.readUEG();else{const Ve=Math.min(64,1<<4+(Fe<<1));Fe>1&&t.readEG();for(let ze=0;ze<Ve;ze++)t.readEG()}t.readBoolean(),t.readBoolean(),t.readBoolean()&&(t.readUByte(),t.skipUEG(),t.skipUEG(),t.readBoolean());const ie=t.readUEG();let $=0;for(let ve=0;ve<ie;ve++){let Fe=!1;if(ve!==0&&(Fe=t.readBoolean()),Fe){ve===ie&&t.readUEG(),t.readBoolean(),t.readUEG();let Ge=0;for(let ft=0;ft<=$;ft++){const Ve=t.readBoolean();let ze=!1;Ve||(ze=t.readBoolean()),(Ve||ze)&&Ge++}$=Ge}else{const Ge=t.readUEG(),ft=t.readUEG();$=Ge+ft;for(let Ve=0;Ve<Ge;Ve++)t.readUEG(),t.readBoolean();for(let Ve=0;Ve<ft;Ve++)t.readUEG(),t.readBoolean()}}if(t.readBoolean()){const ve=t.readUEG();for(let Fe=0;Fe<ve;Fe++){for(let Ge=0;Ge<J+4;Ge++)t.readBits(1);t.readBits(1)}}let de=0,le=1,fe=1,ge=!0,Ae=1,ye=0;t.readBoolean(),t.readBoolean();let De=!1;if(t.readBoolean()){if(t.readBoolean()){const it=t.readUByte(),$t=[1,12,10,16,40,24,20,32,80,18,15,64,160,4,3,2],Pt=[1,11,11,11,33,11,11,11,33,11,11,33,99,3,2,1];it>0&&it<16?(le=$t[it-1],fe=Pt[it-1]):it===255&&(le=t.readBits(16),fe=t.readBits(16))}if(t.readBoolean()&&t.readBoolean(),t.readBoolean()&&(t.readBits(3),t.readBoolean(),t.readBoolean()&&(t.readUByte(),t.readUByte(),t.readUByte())),t.readBoolean()&&(t.readUEG(),t.readUEG()),t.readBoolean(),t.readBoolean(),t.readBoolean(),De=t.readBoolean(),De&&(O+=t.readUEG(),U+=t.readUEG(),D+=t.readUEG(),V+=t.readUEG()),t.readBoolean()&&(Ae=t.readBits(32),ye=t.readBits(32),t.readBoolean()&&t.readUEG(),t.readBoolean())){const Pt=t.readBoolean(),ln=t.readBoolean();let bt=!1;(Pt||ln)&&(bt=t.readBoolean(),bt&&(t.readUByte(),t.readBits(5),t.readBoolean(),t.readBits(5)),t.readBits(4),t.readBits(4),bt&&t.readBits(4),t.readBits(5),t.readBits(5),t.readBits(5));for(let Wn=0;Wn<=n;Wn++){ge=t.readBoolean();const Ki=ge||t.readBoolean();let dn=!1;Ki?t.readEG():dn=t.readBoolean();const zn=dn?1:t.readUEG()+1;if(Pt)for(let Et=0;Et<zn;Et++)t.readUEG(),t.readUEG(),bt&&(t.readUEG(),t.readUEG()),t.skipBits(1);if(ln)for(let Et=0;Et<zn;Et++)t.readUEG(),t.readUEG(),bt&&(t.readUEG(),t.readUEG()),t.skipBits(1)}}t.readBoolean()&&(t.readBoolean(),t.readBoolean(),t.readBoolean(),de=t.readUEG())}let $e=_,an=N;if(P||De){let ve=1,Fe=1;R===1?ve=Fe=2:R==2&&(ve=2),$e=_-ve*U-ve*O,an=N-Fe*V-Fe*D}const Gi=i?["A","B","C"][i]:"",ht=o<<24|d<<16|l<<8|c;let Ut=0;for(let ve=0;ve<32;ve++)Ut=(Ut|(ht>>ve&1)<<31-ve)>>>0;let _t=Ut.toString(16);return s===1&&_t==="2"&&(_t="6"),{codecString:`hvc1.${Gi}${s}.${_t}.${r?"H":"L"}${C}.B0`,params:{general_tier_flag:r,general_profile_idc:s,general_profile_space:i,general_profile_compatibility_flags:[o,d,l,c],general_constraint_indicator_flags:[u,h,m,g,v,E],general_level_idc:C,bit_depth:Y+8,bit_depth_luma_minus8:Y,bit_depth_chroma_minus8:se,min_spatial_segmentation_idc:de,chroma_format_idc:R,frame_rate:{fixed:ge,fps:ye/Ae}},width:$e,height:an,pixelRatio:[le,fe]}}readPPS(e){const t=new Nn(this.ebsp2rbsp(e));t.readUByte(),t.readUByte(),t.skipUEG(),t.skipUEG(),t.skipBits(2),t.skipBits(3),t.skipBits(2),t.skipUEG(),t.skipUEG(),t.skipEG(),t.skipBits(2),t.readBoolean()&&t.skipUEG(),t.skipEG(),t.skipEG(),t.skipBits(4);const i=t.readBoolean(),r=t.readBoolean();let s=1;return r&&i?s=0:r?s=3:i&&(s=2),{parallelismType:s}}matchSPS(e,t){return String.fromCharCode.apply(null,e).substr(3)===String.fromCharCode.apply(null,t).substr(3)}}const Me=188;class kt{constructor(e,t,n,i){this.logger=void 0,this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.sampleAes=null,this.pmtParsed=!1,this.audioCodec=void 0,this.videoCodec=void 0,this._pmtId=-1,this._videoTrack=void 0,this._audioTrack=void 0,this._id3Track=void 0,this._txtTrack=void 0,this.aacOverFlow=null,this.remainderData=null,this.videoParser=void 0,this.observer=e,this.config=t,this.typeSupported=n,this.logger=i,this.videoParser=null}static probe(e,t){const n=kt.syncOffset(e);return n>0&&t.warn(`MPEG2-TS detected but first sync word found @ offset ${n}`),n!==-1}static syncOffset(e){const t=e.length;let n=Math.min(Me*5,t-Me)+1,i=0;for(;i<n;){let r=!1,s=-1,o=0;for(let d=i;d<t;d+=Me)if(e[d]===71&&(t-d===Me||e[d+Me]===71)){if(o++,s===-1&&(s=d,s!==0&&(n=Math.min(s+Me*99,e.length-Me)+1)),r||(r=Mr(e,d)===0),r&&o>1&&(s===0&&o>2||d+Me>n))return s}else{if(o)return-1;break}i++}return-1}static createTrack(e,t){return{container:e==="video"||e==="audio"?"video/mp2t":void 0,type:e,id:fo[e],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:0,duration:e==="audio"?t:void 0}}resetInitSegment(e,t,n,i){this.pmtParsed=!1,this._pmtId=-1,this._videoTrack=kt.createTrack("video"),this._videoTrack.duration=i,this._audioTrack=kt.createTrack("audio",i),this._id3Track=kt.createTrack("id3"),this._txtTrack=kt.createTrack("text"),this._audioTrack.segmentCodec="aac",this.aacOverFlow=null,this.remainderData=null,this.audioCodec=t,this.videoCodec=n}resetTimeStamp(){}resetContiguity(){const{_audioTrack:e,_videoTrack:t,_id3Track:n}=this;e&&(e.pesData=null),t&&(t.pesData=null),n&&(n.pesData=null),this.aacOverFlow=null,this.remainderData=null}demux(e,t,n=!1,i=!1){n||(this.sampleAes=null);let r;const s=this._videoTrack,o=this._audioTrack,d=this._id3Track,l=this._txtTrack;let c=s.pid,u=s.pesData,h=o.pid,m=d.pid,g=o.pesData,v=d.pesData,E=null,C=this.pmtParsed,I=this._pmtId,L=e.length;if(this.remainderData&&(e=Je(this.remainderData,e),L=e.length,this.remainderData=null),L<Me&&!i)return this.remainderData=e,{audioTrack:o,videoTrack:s,id3Track:d,textTrack:l};const R=Math.max(0,kt.syncOffset(e));L-=(L-R)%Me,L<e.byteLength&&!i&&(this.remainderData=new Uint8Array(e.buffer,L,e.buffer.byteLength-L));let _=0;for(let P=R;P<L;P+=Me)if(e[P]===71){const O=!!(e[P+1]&64),U=Mr(e,P),D=(e[P+3]&48)>>4;let V;if(D>1){if(V=P+5+e[P+4],V===P+Me)continue}else V=P+4;switch(U){case c:if(O){if(u&&(r=zt(u,this.logger))){if(this.videoParser===null)switch(s.segmentCodec){case"avc":this.videoParser=new Pa;break;case"hevc":this.videoParser=new Ba;break}this.videoParser!==null&&this.videoParser.parsePES(s,l,r,!1)}u={data:[],size:0}}u&&(u.data.push(e.subarray(V,P+Me)),u.size+=P+Me-V);break;case h:if(O){if(g&&(r=zt(g,this.logger)))switch(o.segmentCodec){case"aac":this.parseAACPES(o,r);break;case"mp3":this.parseMPEGPES(o,r);break;case"ac3":this.parseAC3PES(o,r);break}g={data:[],size:0}}g&&(g.data.push(e.subarray(V,P+Me)),g.size+=P+Me-V);break;case m:O&&(v&&(r=zt(v,this.logger))&&this.parseID3PES(d,r),v={data:[],size:0}),v&&(v.data.push(e.subarray(V,P+Me)),v.size+=P+Me-V);break;case 0:O&&(V+=e[V]+1),I=this._pmtId=lf(e,V);break;case I:{O&&(V+=e[V]+1);const Y=df(e,V,this.typeSupported,n,this.observer,this.logger);c=Y.videoPid,c>0&&(s.pid=c,s.segmentCodec=Y.segmentVideoCodec),h=Y.audioPid,h>0&&(o.pid=h,o.segmentCodec=Y.segmentAudioCodec),m=Y.id3Pid,m>0&&(d.pid=m),E!==null&&!C&&(this.logger.warn(`MPEG-TS PMT found at ${P} after unknown PID '${E}'. Backtracking to sync byte @${R} to parse all TS packets.`),E=null,P=R-188),C=this.pmtParsed=!0;break}case 17:case 8191:break;default:E=U;break}}else _++;_>0&&Nr(this.observer,new Error(`Found ${_} TS packet/s that do not start with 0x47`),void 0,this.logger),s.pesData=u,o.pesData=g,d.pesData=v;const N={audioTrack:o,videoTrack:s,id3Track:d,textTrack:l};return i&&this.extractRemainingSamples(N),N}flush(){const{remainderData:e}=this;this.remainderData=null;let t;return e?t=this.demux(e,-1,!1,!0):t={videoTrack:this._videoTrack,audioTrack:this._audioTrack,id3Track:this._id3Track,textTrack:this._txtTrack},this.extractRemainingSamples(t),this.sampleAes?this.decrypt(t,this.sampleAes):t}extractRemainingSamples(e){const{audioTrack:t,videoTrack:n,id3Track:i,textTrack:r}=e,s=n.pesData,o=t.pesData,d=i.pesData;let l;if(s&&(l=zt(s,this.logger))){if(this.videoParser===null)switch(n.segmentCodec){case"avc":this.videoParser=new Pa;break;case"hevc":this.videoParser=new Ba;break}this.videoParser!==null&&(this.videoParser.parsePES(n,r,l,!0),n.pesData=null)}else n.pesData=s;if(o&&(l=zt(o,this.logger))){switch(t.segmentCodec){case"aac":this.parseAACPES(t,l);break;case"mp3":this.parseMPEGPES(t,l);break;case"ac3":this.parseAC3PES(t,l);break}t.pesData=null}else o!=null&&o.size&&this.logger.log("last AAC PES packet truncated,might overlap between fragments"),t.pesData=o;d&&(l=zt(d,this.logger))?(this.parseID3PES(i,l),i.pesData=null):i.pesData=d}demuxSampleAes(e,t,n){const i=this.demux(e,n,!0,!this.config.progressive),r=this.sampleAes=new of(this.observer,this.config,t);return this.decrypt(i,r)}decrypt(e,t){return new Promise(n=>{const{audioTrack:i,videoTrack:r}=e;i.samples&&i.segmentCodec==="aac"?t.decryptAacSamples(i.samples,0,()=>{r.samples?t.decryptAvcSamples(r.samples,0,0,()=>{n(e)}):n(e)}):r.samples&&t.decryptAvcSamples(r.samples,0,0,()=>{n(e)})})}destroy(){this.observer&&this.observer.removeAllListeners(),this.config=this.logger=this.observer=null,this.aacOverFlow=this.videoParser=this.remainderData=this.sampleAes=null,this._videoTrack=this._audioTrack=this._id3Track=this._txtTrack=void 0}parseAACPES(e,t){let n=0;const i=this.aacOverFlow;let r=t.data;if(i){this.aacOverFlow=null;const u=i.missing,h=i.sample.unit.byteLength;if(u===-1)r=Je(i.sample.unit,r);else{const m=h-u;i.sample.unit.set(r.subarray(0,u),m),e.samples.push(i.sample),n=i.missing}}let s,o;for(s=n,o=r.length;s<o-1&&!Mi(r,s);s++);if(s!==n){let u;const h=s<o-1;if(h?u=`AAC PES did not start with ADTS header,offset:${s}`:u="No ADTS header found in AAC PES",Nr(this.observer,new Error(u),h,this.logger),!h)return}jo(e,this.observer,r,s,this.audioCodec);let d;if(t.pts!==void 0)d=t.pts;else if(i){const u=Wo(e.samplerate);d=i.sample.pts+u}else{this.logger.warn("[tsdemuxer]: AAC PES unknown PTS");return}let l=0,c;for(;s<o;)if(c=zo(e,r,s,d,l),s+=c.length,c.missing){this.aacOverFlow=c;break}else for(l++;s<o-1&&!Mi(r,s);s++);}parseMPEGPES(e,t){const n=t.data,i=n.length;let r=0,s=0;const o=t.pts;if(o===void 0){this.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");return}for(;s<i;)if(el(n,s)){const d=Zo(e,n,s,o,r);if(d)s+=d.length,r++;else break}else s++}parseAC3PES(e,t){{const n=t.data,i=t.pts;if(i===void 0){this.logger.warn("[tsdemuxer]: AC3 PES unknown PTS");return}const r=n.length;let s=0,o=0,d;for(;o<r&&(d=il(e,n,o,i,s++))>0;)o+=d}}parseID3PES(e,t){if(t.pts===void 0){this.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");return}const n=Se({},t,{type:this._videoTrack?Ye.emsg:Ye.audioId3,duration:Number.POSITIVE_INFINITY});e.samples.push(n)}}function Mr(a,e){return((a[e+1]&31)<<8)+a[e+2]}function lf(a,e){return(a[e+10]&31)<<8|a[e+11]}function df(a,e,t,n,i,r){const s={audioPid:-1,videoPid:-1,id3Pid:-1,segmentVideoCodec:"avc",segmentAudioCodec:"aac"},o=(a[e+1]&15)<<8|a[e+2],d=e+3+o-4,l=(a[e+10]&15)<<8|a[e+11];for(e+=12+l;e<d;){const c=Mr(a,e),u=(a[e+3]&15)<<8|a[e+4];switch(a[e]){case 207:if(!n){mr("ADTS AAC",r);break}case 15:s.audioPid===-1&&(s.audioPid=c);break;case 21:s.id3Pid===-1&&(s.id3Pid=c);break;case 219:if(!n){mr("H.264",r);break}case 27:s.videoPid===-1&&(s.videoPid=c);break;case 3:case 4:!t.mpeg&&!t.mp3?r.log("MPEG audio found, not supported in this browser"):s.audioPid===-1&&(s.audioPid=c,s.segmentAudioCodec="mp3");break;case 193:if(!n){mr("AC-3",r);break}case 129:t.ac3?s.audioPid===-1&&(s.audioPid=c,s.segmentAudioCodec="ac3"):r.log("AC-3 audio found, not supported in this browser");break;case 6:if(s.audioPid===-1&&u>0){let h=e+5,m=u;for(;m>2;){switch(a[h]){case 106:t.ac3!==!0?r.log("AC-3 audio found, not supported in this browser for now"):(s.audioPid=c,s.segmentAudioCodec="ac3");break}const v=a[h+1]+2;h+=v,m-=v}}break;case 194:case 135:return Nr(i,new Error("Unsupported EC-3 in M2TS found"),void 0,r),s;case 36:s.videoPid===-1&&(s.videoPid=c,s.segmentVideoCodec="hevc",r.log("HEVC in M2TS found"));break}e+=u+5}return s}function Nr(a,e,t,n){n.warn(`parsing error: ${e.message}`),a.emit(x.ERROR,x.ERROR,{type:oe.MEDIA_ERROR,details:F.FRAG_PARSING_ERROR,fatal:!1,levelRetry:t,error:e,reason:e.message})}function mr(a,e){e.log(`${a} with AES-128-CBC encryption found in unencrypted stream`)}function zt(a,e){let t=0,n,i,r,s,o;const d=a.data;if(!a||a.size===0)return null;for(;d[0].length<19&&d.length>1;)d[0]=Je(d[0],d[1]),d.splice(1,1);if(n=d[0],(n[0]<<16)+(n[1]<<8)+n[2]===1){if(i=(n[4]<<8)+n[5],i&&i>a.size-6)return null;const c=n[7];c&192&&(s=(n[9]&14)*536870912+(n[10]&255)*4194304+(n[11]&254)*16384+(n[12]&255)*128+(n[13]&254)/2,c&64?(o=(n[14]&14)*536870912+(n[15]&255)*4194304+(n[16]&254)*16384+(n[17]&255)*128+(n[18]&254)/2,s-o>60*9e4&&(e.warn(`${Math.round((s-o)/9e4)}s delta between PTS and DTS, align them`),s=o)):o=s),r=n[8];let u=r+9;if(a.size<=u)return null;a.size-=u;const h=new Uint8Array(a.size);for(let m=0,g=d.length;m<g;m++){n=d[m];let v=n.byteLength;if(u)if(u>v){u-=v;continue}else n=n.subarray(u),v-=u,u=0;h.set(n,t),t+=v}return i&&(i-=r+3),{data:h,pts:s,dts:o,len:i}}return null}class cf{static getSilentFrame(e,t){switch(e){case"mp4a.40.2":if(t===1)return new Uint8Array([0,200,0,128,35,128]);if(t===2)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(t===3)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(t===4)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(t===5)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(t===6)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(t===1)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(t===2)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(t===3)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);break}}}const Ct=Math.pow(2,32)-1;class B{static init(){B.types={avc1:[],avcC:[],hvc1:[],hvcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],dac3:[],"ac-3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]};let e;for(e in B.types)B.types.hasOwnProperty(e)&&(B.types[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);const t=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),n=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);B.HDLR_TYPES={video:t,audio:n};const i=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),r=new Uint8Array([0,0,0,0,0,0,0,0]);B.STTS=B.STSC=B.STCO=r,B.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),B.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),B.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),B.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);const s=new Uint8Array([105,115,111,109]),o=new Uint8Array([97,118,99,49]),d=new Uint8Array([0,0,0,1]);B.FTYP=B.box(B.types.ftyp,s,d,s,o),B.DINF=B.box(B.types.dinf,B.box(B.types.dref,i))}static box(e,...t){let n=8,i=t.length;const r=i;for(;i--;)n+=t[i].byteLength;const s=new Uint8Array(n);for(s[0]=n>>24&255,s[1]=n>>16&255,s[2]=n>>8&255,s[3]=n&255,s.set(e,4),i=0,n=8;i<r;i++)s.set(t[i],n),n+=t[i].byteLength;return s}static hdlr(e){return B.box(B.types.hdlr,B.HDLR_TYPES[e])}static mdat(e){return B.box(B.types.mdat,e)}static mdhd(e,t){t*=e;const n=Math.floor(t/(Ct+1)),i=Math.floor(t%(Ct+1));return B.box(B.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,e&255,n>>24,n>>16&255,n>>8&255,n&255,i>>24,i>>16&255,i>>8&255,i&255,85,196,0,0]))}static mdia(e){return B.box(B.types.mdia,B.mdhd(e.timescale||0,e.duration||0),B.hdlr(e.type),B.minf(e))}static mfhd(e){return B.box(B.types.mfhd,new Uint8Array([0,0,0,0,e>>24,e>>16&255,e>>8&255,e&255]))}static minf(e){return e.type==="audio"?B.box(B.types.minf,B.box(B.types.smhd,B.SMHD),B.DINF,B.stbl(e)):B.box(B.types.minf,B.box(B.types.vmhd,B.VMHD),B.DINF,B.stbl(e))}static moof(e,t,n){return B.box(B.types.moof,B.mfhd(e),B.traf(n,t))}static moov(e){let t=e.length;const n=[];for(;t--;)n[t]=B.trak(e[t]);return B.box.apply(null,[B.types.moov,B.mvhd(e[0].timescale||0,e[0].duration||0)].concat(n).concat(B.mvex(e)))}static mvex(e){let t=e.length;const n=[];for(;t--;)n[t]=B.trex(e[t]);return B.box.apply(null,[B.types.mvex,...n])}static mvhd(e,t){t*=e;const n=Math.floor(t/(Ct+1)),i=Math.floor(t%(Ct+1)),r=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,e&255,n>>24,n>>16&255,n>>8&255,n&255,i>>24,i>>16&255,i>>8&255,i&255,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return B.box(B.types.mvhd,r)}static sdtp(e){const t=e.samples||[],n=new Uint8Array(4+t.length);let i,r;for(i=0;i<t.length;i++)r=t[i].flags,n[i+4]=r.dependsOn<<4|r.isDependedOn<<2|r.hasRedundancy;return B.box(B.types.sdtp,n)}static stbl(e){return B.box(B.types.stbl,B.stsd(e),B.box(B.types.stts,B.STTS),B.box(B.types.stsc,B.STSC),B.box(B.types.stsz,B.STSZ),B.box(B.types.stco,B.STCO))}static avc1(e){let t=[],n=[],i,r,s;for(i=0;i<e.sps.length;i++)r=e.sps[i],s=r.byteLength,t.push(s>>>8&255),t.push(s&255),t=t.concat(Array.prototype.slice.call(r));for(i=0;i<e.pps.length;i++)r=e.pps[i],s=r.byteLength,n.push(s>>>8&255),n.push(s&255),n=n.concat(Array.prototype.slice.call(r));const o=B.box(B.types.avcC,new Uint8Array([1,t[3],t[4],t[5],255,224|e.sps.length].concat(t).concat([e.pps.length]).concat(n))),d=e.width,l=e.height,c=e.pixelRatio[0],u=e.pixelRatio[1];return B.box(B.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,d>>8&255,d&255,l>>8&255,l&255,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),o,B.box(B.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),B.box(B.types.pasp,new Uint8Array([c>>24,c>>16&255,c>>8&255,c&255,u>>24,u>>16&255,u>>8&255,u&255])))}static esds(e){const t=e.config;return new Uint8Array([0,0,0,0,3,25,0,1,0,4,17,64,21,0,0,0,0,0,0,0,0,0,0,0,5,2,...t,6,1,2])}static audioStsd(e){const t=e.samplerate||0;return new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount||0,0,16,0,0,0,0,t>>8&255,t&255,0,0])}static mp4a(e){return B.box(B.types.mp4a,B.audioStsd(e),B.box(B.types.esds,B.esds(e)))}static mp3(e){return B.box(B.types[".mp3"],B.audioStsd(e))}static ac3(e){return B.box(B.types["ac-3"],B.audioStsd(e),B.box(B.types.dac3,e.config))}static stsd(e){const{segmentCodec:t}=e;if(e.type==="audio"){if(t==="aac")return B.box(B.types.stsd,B.STSD,B.mp4a(e));if(t==="ac3"&&e.config)return B.box(B.types.stsd,B.STSD,B.ac3(e));if(t==="mp3"&&e.codec==="mp3")return B.box(B.types.stsd,B.STSD,B.mp3(e))}else if(e.pps&&e.sps){if(t==="avc")return B.box(B.types.stsd,B.STSD,B.avc1(e));if(t==="hevc"&&e.vps)return B.box(B.types.stsd,B.STSD,B.hvc1(e))}else throw new Error("video track missing pps or sps");throw new Error(`unsupported ${e.type} segment codec (${t}/${e.codec})`)}static tkhd(e){const t=e.id,n=(e.duration||0)*(e.timescale||0),i=e.width||0,r=e.height||0,s=Math.floor(n/(Ct+1)),o=Math.floor(n%(Ct+1));return B.box(B.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,t&255,0,0,0,0,s>>24,s>>16&255,s>>8&255,s&255,o>>24,o>>16&255,o>>8&255,o&255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,i>>8&255,i&255,0,0,r>>8&255,r&255,0,0]))}static traf(e,t){const n=B.sdtp(e),i=e.id,r=Math.floor(t/(Ct+1)),s=Math.floor(t%(Ct+1));return B.box(B.types.traf,B.box(B.types.tfhd,new Uint8Array([0,0,0,0,i>>24,i>>16&255,i>>8&255,i&255])),B.box(B.types.tfdt,new Uint8Array([1,0,0,0,r>>24,r>>16&255,r>>8&255,r&255,s>>24,s>>16&255,s>>8&255,s&255])),B.trun(e,n.length+16+20+8+16+8+8),n)}static trak(e){return e.duration=e.duration||4294967295,B.box(B.types.trak,B.tkhd(e),B.mdia(e))}static trex(e){const t=e.id;return B.box(B.types.trex,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,t&255,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))}static trun(e,t){const n=e.samples||[],i=n.length,r=12+16*i,s=new Uint8Array(r);let o,d,l,c,u,h;for(t+=8+r,s.set([e.type==="video"?1:0,0,15,1,i>>>24&255,i>>>16&255,i>>>8&255,i&255,t>>>24&255,t>>>16&255,t>>>8&255,t&255],0),o=0;o<i;o++)d=n[o],l=d.duration,c=d.size,u=d.flags,h=d.cts,s.set([l>>>24&255,l>>>16&255,l>>>8&255,l&255,c>>>24&255,c>>>16&255,c>>>8&255,c&255,u.isLeading<<2|u.dependsOn,u.isDependedOn<<6|u.hasRedundancy<<4|u.paddingValue<<1|u.isNonSync,u.degradPrio&61440,u.degradPrio&15,h>>>24&255,h>>>16&255,h>>>8&255,h&255],12+16*o);return B.box(B.types.trun,s)}static initSegment(e){B.types||B.init();const t=B.moov(e);return Je(B.FTYP,t)}static hvc1(e){const t=e.params,n=[e.vps,e.sps,e.pps],i=4,r=new Uint8Array([1,t.general_profile_space<<6|(t.general_tier_flag?32:0)|t.general_profile_idc,t.general_profile_compatibility_flags[0],t.general_profile_compatibility_flags[1],t.general_profile_compatibility_flags[2],t.general_profile_compatibility_flags[3],t.general_constraint_indicator_flags[0],t.general_constraint_indicator_flags[1],t.general_constraint_indicator_flags[2],t.general_constraint_indicator_flags[3],t.general_constraint_indicator_flags[4],t.general_constraint_indicator_flags[5],t.general_level_idc,240|t.min_spatial_segmentation_idc>>8,255&t.min_spatial_segmentation_idc,252|t.parallelismType,252|t.chroma_format_idc,248|t.bit_depth_luma_minus8,248|t.bit_depth_chroma_minus8,0,parseInt(t.frame_rate.fps),i-1|t.temporal_id_nested<<2|t.num_temporal_layers<<3|(t.frame_rate.fixed?64:0),n.length]);let s=r.length;for(let g=0;g<n.length;g+=1){s+=3;for(let v=0;v<n[g].length;v+=1)s+=2+n[g][v].length}const o=new Uint8Array(s);o.set(r,0),s=r.length;const d=n.length-1;for(let g=0;g<n.length;g+=1){o.set(new Uint8Array([32+g|(g===d?128:0),0,n[g].length]),s),s+=3;for(let v=0;v<n[g].length;v+=1)o.set(new Uint8Array([n[g][v].length>>8,n[g][v].length&255]),s),s+=2,o.set(n[g][v],s),s+=n[g][v].length}const l=B.box(B.types.hvcC,o),c=e.width,u=e.height,h=e.pixelRatio[0],m=e.pixelRatio[1];return B.box(B.types.hvc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,c>>8&255,c&255,u>>8&255,u&255,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),l,B.box(B.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),B.box(B.types.pasp,new Uint8Array([h>>24,h>>16&255,h>>8&255,h&255,m>>24,m>>16&255,m>>8&255,m&255])))}}B.types=void 0;B.HDLR_TYPES=void 0;B.STTS=void 0;B.STSC=void 0;B.STCO=void 0;B.STSZ=void 0;B.VMHD=void 0;B.SMHD=void 0;B.STSD=void 0;B.FTYP=void 0;B.DINF=void 0;const sl=9e4;function os(a,e,t=1,n=!1){const i=a*e*t;return n?Math.round(i):i}function uf(a,e,t=1,n=!1){return os(a,e,1/t,n)}function Bn(a,e=!1){return os(a,1e3,1/sl,e)}function hf(a,e=1){return os(a,sl,1/e)}const ff=10*1e3,pf=1024,mf=1152,gf=1536;let Qt=null,gr=null;function Oa(a,e,t,n){return{duration:e,size:t,cts:n,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:a?2:1,isNonSync:a?0:1}}}class Si{constructor(e,t,n,i){if(this.logger=void 0,this.observer=void 0,this.config=void 0,this.typeSupported=void 0,this.ISGenerated=!1,this._initPTS=null,this._initDTS=null,this.nextAvcDts=null,this.nextAudioPts=null,this.videoSampleDuration=null,this.isAudioContiguous=!1,this.isVideoContiguous=!1,this.videoTrackConfig=void 0,this.observer=e,this.config=t,this.typeSupported=n,this.logger=i,this.ISGenerated=!1,Qt===null){const s=(navigator.userAgent||"").match(/Chrome\/(\d+)/i);Qt=s?parseInt(s[1]):0}if(gr===null){const r=navigator.userAgent.match(/Safari\/(\d+)/i);gr=r?parseInt(r[1]):0}}destroy(){this.config=this.videoTrackConfig=this._initPTS=this._initDTS=null}resetTimeStamp(e){this.logger.log("[mp4-remuxer]: initPTS & initDTS reset"),this._initPTS=this._initDTS=e}resetNextTimestamp(){this.logger.log("[mp4-remuxer]: reset next timestamp"),this.isVideoContiguous=!1,this.isAudioContiguous=!1}resetInitSegment(){this.logger.log("[mp4-remuxer]: ISGenerated flag reset"),this.ISGenerated=!1,this.videoTrackConfig=void 0}getVideoStartPts(e){let t=!1;const n=e[0].pts,i=e.reduce((r,s)=>{let o=s.pts,d=o-r;return d<-4294967296&&(t=!0,o=Xe(o,n),d=o-r),d>0?r:o},n);return t&&this.logger.debug("PTS rollover detected"),i}remux(e,t,n,i,r,s,o,d){let l,c,u,h,m,g,v=r,E=r;const C=e.pid>-1,I=t.pid>-1,L=t.samples.length,R=e.samples.length>0,_=o&&L>0||L>1;if((!C||R)&&(!I||_)||this.ISGenerated||o){if(this.ISGenerated){var P,O,U,D;const J=this.videoTrackConfig;(J&&(t.width!==J.width||t.height!==J.height||((P=t.pixelRatio)==null?void 0:P[0])!==((O=J.pixelRatio)==null?void 0:O[0])||((U=t.pixelRatio)==null?void 0:U[1])!==((D=J.pixelRatio)==null?void 0:D[1]))||!J&&_||this.nextAudioPts===null&&R)&&this.resetInitSegment()}this.ISGenerated||(u=this.generateIS(e,t,r,s));const V=this.isVideoContiguous;let Y=-1,se;if(_&&(Y=yf(t.samples),!V&&this.config.forceKeyFrameOnDiscontinuity))if(g=!0,Y>0){this.logger.warn(`[mp4-remuxer]: Dropped ${Y} out of ${L} video samples due to a missing keyframe`);const J=this.getVideoStartPts(t.samples);t.samples=t.samples.slice(Y),t.dropped+=Y,E+=(t.samples[0].pts-J)/t.inputTimeScale,se=E}else Y===-1&&(this.logger.warn(`[mp4-remuxer]: No keyframe found out of ${L} video samples`),g=!1);if(this.ISGenerated){if(R&&_){const J=this.getVideoStartPts(t.samples),W=(Xe(e.samples[0].pts,J)-J)/t.inputTimeScale;v+=Math.max(0,W),E+=Math.max(0,-W)}if(R){if(e.samplerate||(this.logger.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"),u=this.generateIS(e,t,r,s)),c=this.remuxAudio(e,v,this.isAudioContiguous,s,I||_||d===re.AUDIO?E:void 0),_){const J=c?c.endPTS-c.startPTS:0;t.inputTimeScale||(this.logger.warn("[mp4-remuxer]: regenerate InitSegment as video detected"),u=this.generateIS(e,t,r,s)),l=this.remuxVideo(t,E,V,J)}}else _&&(l=this.remuxVideo(t,E,V,0));l&&(l.firstKeyFrame=Y,l.independent=Y!==-1,l.firstKeyFramePTS=se)}}return this.ISGenerated&&this._initPTS&&this._initDTS&&(n.samples.length&&(m=al(n,r,this._initPTS,this._initDTS)),i.samples.length&&(h=ol(i,r,this._initPTS))),{audio:c,video:l,initSegment:u,independent:g,text:h,id3:m}}generateIS(e,t,n,i){const r=e.samples,s=t.samples,o=this.typeSupported,d={},l=this._initPTS;let c=!l||i,u="audio/mp4",h,m,g,v;if(c&&(h=m=1/0),e.config&&r.length){switch(e.timescale=e.samplerate,e.segmentCodec){case"mp3":o.mpeg?(u="audio/mpeg",e.codec=""):o.mp3&&(e.codec="mp3");break;case"ac3":e.codec="ac-3";break}d.audio={id:"audio",container:u,codec:e.codec,initSegment:e.segmentCodec==="mp3"&&o.mpeg?new Uint8Array(0):B.initSegment([e]),metadata:{channelCount:e.channelCount}},c&&(v=e.id,g=e.inputTimeScale,!l||g!==l.timescale?h=m=r[0].pts-Math.round(g*n):c=!1)}if(t.sps&&t.pps&&s.length){if(t.timescale=t.inputTimeScale,d.video={id:"main",container:"video/mp4",codec:t.codec,initSegment:B.initSegment([t]),metadata:{width:t.width,height:t.height}},c)if(v=t.id,g=t.inputTimeScale,!l||g!==l.timescale){const E=this.getVideoStartPts(s),C=Math.round(g*n);m=Math.min(m,Xe(s[0].dts,E)-C),h=Math.min(h,E-C)}else c=!1;this.videoTrackConfig={width:t.width,height:t.height,pixelRatio:t.pixelRatio}}if(Object.keys(d).length)return this.ISGenerated=!0,c?(this._initPTS={baseTime:h,timescale:g},this._initDTS={baseTime:m,timescale:g}):h=g=void 0,{tracks:d,initPTS:h,timescale:g,trackId:v}}remuxVideo(e,t,n,i){const r=e.inputTimeScale,s=e.samples,o=[],d=s.length,l=this._initPTS;let c=this.nextAvcDts,u=8,h=this.videoSampleDuration,m,g,v=Number.POSITIVE_INFINITY,E=Number.NEGATIVE_INFINITY,C=!1;if(!n||c===null){const $=t*r,q=s[0].pts-Xe(s[0].dts,s[0].pts);Qt&&c!==null&&Math.abs($-q-c)<15e3?n=!0:c=$-q}const I=l.baseTime*r/l.timescale;for(let $=0;$<d;$++){const q=s[$];q.pts=Xe(q.pts-I,c),q.dts=Xe(q.dts-I,c),q.dts<s[$>0?$-1:$].dts&&(C=!0)}C&&s.sort(function($,q){const de=$.dts-q.dts,le=$.pts-q.pts;return de||le}),m=s[0].dts,g=s[s.length-1].dts;const L=g-m,R=L?Math.round(L/(d-1)):h||e.inputTimeScale/30;if(n){const $=m-c,q=$>R,de=$<-1;if((q||de)&&(q?this.logger.warn(`${(e.segmentCodec||"").toUpperCase()}: ${Bn($,!0)} ms (${$}dts) hole between fragments detected at ${t.toFixed(3)}`):this.logger.warn(`${(e.segmentCodec||"").toUpperCase()}: ${Bn(-$,!0)} ms (${$}dts) overlapping between fragments detected at ${t.toFixed(3)}`),!de||c>=s[0].pts||Qt)){m=c;const le=s[0].pts-$;if(q)s[0].dts=m,s[0].pts=le;else{let fe=!0;for(let ge=0;ge<s.length&&!(s[ge].dts>le&&fe);ge++){const Ae=s[ge].pts;if(s[ge].dts-=$,s[ge].pts-=$,ge<s.length-1){const ye=s[ge+1].pts,De=s[ge].pts,we=ye<=De,$e=ye<=Ae;fe=we==$e}}}this.logger.log(`Video: Initial PTS/DTS adjusted: ${Bn(le,!0)}/${Bn(m,!0)}, delta: ${Bn($,!0)} ms`)}}m=Math.max(0,m);let _=0,N=0,P=m;for(let $=0;$<d;$++){const q=s[$],de=q.units,le=de.length;let fe=0;for(let ge=0;ge<le;ge++)fe+=de[ge].data.length;N+=fe,_+=le,q.length=fe,q.dts<P?(q.dts=P,P+=R/4|0||1):P=q.dts,v=Math.min(q.pts,v),E=Math.max(q.pts,E)}g=s[d-1].dts;const O=N+4*_+8;let U;try{U=new Uint8Array(O)}catch($){this.observer.emit(x.ERROR,x.ERROR,{type:oe.MUX_ERROR,details:F.REMUX_ALLOC_ERROR,fatal:!1,error:$,bytes:O,reason:`fail allocating video mdat ${O}`});return}const D=new DataView(U.buffer);D.setUint32(0,O),U.set(B.types.mdat,4);let V=!1,Y=Number.POSITIVE_INFINITY,se=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY,ee=Number.NEGATIVE_INFINITY;for(let $=0;$<d;$++){const q=s[$],de=q.units;let le=0;for(let Ae=0,ye=de.length;Ae<ye;Ae++){const De=de[Ae],we=De.data,$e=De.data.byteLength;D.setUint32(u,$e),u+=4,U.set(we,u),u+=$e,le+=4+$e}let fe;if($<d-1)h=s[$+1].dts-q.dts,fe=s[$+1].pts-q.pts;else{const Ae=this.config,ye=$>0?q.dts-s[$-1].dts:R;if(fe=$>0?q.pts-s[$-1].pts:R,Ae.stretchShortVideoTrack&&this.nextAudioPts!==null){const De=Math.floor(Ae.maxBufferHole*r),we=(i?v+i*r:this.nextAudioPts)-q.pts;we>De?(h=we-ye,h<0?h=ye:V=!0,this.logger.log(`[mp4-remuxer]: It is approximately ${we/90} ms to the next segment; using duration ${h/90} ms for the last video frame.`)):h=ye}else h=ye}const ge=Math.round(q.pts-q.dts);Y=Math.min(Y,h),J=Math.max(J,h),se=Math.min(se,fe),ee=Math.max(ee,fe),o.push(Oa(q.key,h,le,ge))}if(o.length){if(Qt){if(Qt<70){const $=o[0].flags;$.dependsOn=2,$.isNonSync=0}}else if(gr&&ee-se<J-Y&&R/J<.025&&o[0].cts===0){this.logger.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");let $=m;for(let q=0,de=o.length;q<de;q++){const le=$+o[q].duration,fe=$+o[q].cts;if(q<de-1){const ge=le+o[q+1].cts;o[q].duration=ge-fe}else o[q].duration=q?o[q-1].duration:R;o[q].cts=0,$=le}}}h=V||!h?R:h,this.nextAvcDts=c=g+h,this.videoSampleDuration=h,this.isVideoContiguous=!0;const ie={data1:B.moof(e.sequenceNumber++,m,Se(e,{samples:o})),data2:U,startPTS:v/r,endPTS:(E+h)/r,startDTS:m/r,endDTS:c/r,type:"video",hasAudio:!1,hasVideo:!0,nb:o.length,dropped:e.dropped};return e.samples=[],e.dropped=0,ie}getSamplesPerFrame(e){switch(e.segmentCodec){case"mp3":return mf;case"ac3":return gf;default:return pf}}remuxAudio(e,t,n,i,r){const s=e.inputTimeScale,o=e.samplerate?e.samplerate:s,d=s/o,l=this.getSamplesPerFrame(e),c=l*d,u=this._initPTS,h=e.segmentCodec==="mp3"&&this.typeSupported.mpeg,m=[],g=r!==void 0;let v=e.samples,E=h?0:8,C=this.nextAudioPts||-1;const I=t*s,L=u.baseTime*s/u.timescale;if(this.isAudioContiguous=n=n||v.length&&C>0&&(i&&Math.abs(I-C)<9e3||Math.abs(Xe(v[0].pts-L,I)-C)<20*c),v.forEach(function(W){W.pts=Xe(W.pts-L,I)}),!n||C<0){if(v=v.filter(W=>W.pts>=0),!v.length)return;r===0?C=0:i&&!g?C=Math.max(0,I):C=v[0].pts}if(e.segmentCodec==="aac"){const W=this.config.maxAudioFramesDrift;for(let ne=0,ie=C;ne<v.length;ne++){const $=v[ne],q=$.pts,de=q-ie,le=Math.abs(1e3*de/s);if(de<=-W*c&&g)ne===0&&(this.logger.warn(`Audio frame @ ${(q/s).toFixed(3)}s overlaps nextAudioPts by ${Math.round(1e3*de/s)} ms.`),this.nextAudioPts=C=ie=q);else if(de>=W*c&&le<ff&&g){let fe=Math.round(de/c);ie=q-fe*c,ie<0&&(fe--,ie+=c),ne===0&&(this.nextAudioPts=C=ie),this.logger.warn(`[mp4-remuxer]: Injecting ${fe} audio frame @ ${(ie/s).toFixed(3)}s due to ${Math.round(1e3*de/s)} ms gap.`);for(let ge=0;ge<fe;ge++){const Ae=Math.max(ie,0);let ye=cf.getSilentFrame(e.parsedCodec||e.manifestCodec||e.codec,e.channelCount);ye||(this.logger.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."),ye=$.unit.subarray()),v.splice(ne,0,{unit:ye,pts:Ae}),ie+=c,ne++}}$.pts=ie,ie+=c}}let R=null,_=null,N,P=0,O=v.length;for(;O--;)P+=v[O].unit.byteLength;for(let W=0,ne=v.length;W<ne;W++){const ie=v[W],$=ie.unit;let q=ie.pts;if(_!==null){const le=m[W-1];le.duration=Math.round((q-_)/d)}else if(n&&e.segmentCodec==="aac"&&(q=C),R=q,P>0){P+=E;try{N=new Uint8Array(P)}catch(le){this.observer.emit(x.ERROR,x.ERROR,{type:oe.MUX_ERROR,details:F.REMUX_ALLOC_ERROR,fatal:!1,error:le,bytes:P,reason:`fail allocating audio mdat ${P}`});return}h||(new DataView(N.buffer).setUint32(0,P),N.set(B.types.mdat,4))}else return;N.set($,E);const de=$.byteLength;E+=de,m.push(Oa(!0,l,de,0)),_=q}const U=m.length;if(!U)return;const D=m[m.length-1];this.nextAudioPts=C=_+d*D.duration;const V=h?new Uint8Array(0):B.moof(e.sequenceNumber++,R/d,Se({},e,{samples:m}));e.samples=[];const Y=R/s,se=C/s,ee={data1:V,data2:N,startPTS:Y,endPTS:se,startDTS:Y,endDTS:se,type:"audio",hasAudio:!0,hasVideo:!1,nb:U};return this.isAudioContiguous=!0,ee}}function Xe(a,e){let t;if(e===null)return a;for(e<a?t=-8589934592:t=8589934592;Math.abs(a-e)>4294967296;)a+=t;return a}function yf(a){for(let e=0;e<a.length;e++)if(a[e].key)return e;return-1}function al(a,e,t,n){const i=a.samples.length;if(!i)return;const r=a.inputTimeScale;for(let o=0;o<i;o++){const d=a.samples[o];d.pts=Xe(d.pts-t.baseTime*r/t.timescale,e*r)/r,d.dts=Xe(d.dts-n.baseTime*r/n.timescale,e*r)/r}const s=a.samples;return a.samples=[],{samples:s}}function ol(a,e,t){const n=a.samples.length;if(!n)return;const i=a.inputTimeScale;for(let s=0;s<n;s++){const o=a.samples[s];o.pts=Xe(o.pts-t.baseTime*i/t.timescale,e*i)/i}a.samples.sort((s,o)=>s.pts-o.pts);const r=a.samples;return a.samples=[],{samples:r}}class Af{constructor(e,t,n,i){this.logger=void 0,this.emitInitSegment=!1,this.audioCodec=void 0,this.videoCodec=void 0,this.initData=void 0,this.initPTS=null,this.initTracks=void 0,this.lastEndTime=null,this.isVideoContiguous=!1,this.logger=i}destroy(){}resetTimeStamp(e){this.initPTS=e,this.lastEndTime=null}resetNextTimestamp(){this.isVideoContiguous=!1,this.lastEndTime=null}resetInitSegment(e,t,n,i){this.audioCodec=t,this.videoCodec=n,this.generateInitSegment(uu(e,i)),this.emitInitSegment=!0}generateInitSegment(e){let{audioCodec:t,videoCodec:n}=this;if(!(e!=null&&e.byteLength)){this.initTracks=void 0,this.initData=void 0;return}const i=this.initData=go(e);i.audio&&(t=Fa(i.audio,Le.AUDIO,this.logger)),i.video&&(n=Fa(i.video,Le.VIDEO,this.logger));const r={};i.audio&&i.video?r.audiovideo={container:"video/mp4",codec:t+","+n,supplemental:i.video.supplemental,initSegment:e,id:"main"}:i.audio?r.audio={container:"audio/mp4",codec:t,initSegment:e,id:"audio"}:i.video?r.video={container:"video/mp4",codec:n,supplemental:i.video.supplemental,initSegment:e,id:"main"}:this.logger.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."),this.initTracks=r}remux(e,t,n,i,r,s){var o,d;let{initPTS:l,lastEndTime:c}=this;const u={audio:void 0,video:void 0,text:i,id3:n,initSegment:void 0};Z(c)||(c=this.lastEndTime=r||0);const h=t.samples;if(!(h!=null&&h.length))return u;const m={initPTS:void 0,timescale:void 0,trackId:void 0};let g=this.initData;if((o=g)!=null&&o.length||(this.generateInitSegment(h),g=this.initData),!((d=g)!=null&&d.length))return this.logger.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."),u;this.emitInitSegment&&(m.tracks=this.initTracks,this.emitInitSegment=!1);const v=hu(h,g,this.logger),E=g.audio?v[g.audio.id]:null,C=g.video?v[g.video.id]:null,I=pi(C,1/0),L=pi(E,1/0),R=pi(C,0,!0),_=pi(E,0,!0);let N,P=r,O=0;if(E&&(!C||!l&&L<I||l&&l.trackId===g.audio.id)?(m.trackId=g.audio.id,N=E,O=_-L):C&&(m.trackId=g.video.id,N=C,O=R-I),N){const W=N.timescale;P=N.start/W,m.timescale=W,l||(m.initPTS=N.start-r*W,this.initPTS=l={baseTime:m.initPTS,timescale:W,trackId:m.trackId})}(s||!l)&&(vf(l,P,r,O)||m.timescale!==l.timescale)&&(m.initPTS=P-r,l&&l.timescale===1&&this.logger.warn(`Adjusting initPTS @${r} from ${l.baseTime/l.timescale} to ${m.initPTS}`),this.initPTS=l={baseTime:m.initPTS,timescale:1});const U=e?P-l.baseTime/l.timescale:c;fu(g,h,l.baseTime/l.timescale);const D=U+O;O>0?this.lastEndTime=D:(this.logger.warn("Duration parsed from mp4 should be greater than zero"),this.resetNextTimestamp());const V=!!g.audio,Y=!!g.video;let se="";V&&(se+="audio"),Y&&(se+="video");const J={data1:h,startPTS:U,startDTS:U,endPTS:D,endDTS:D,type:se,hasAudio:V,hasVideo:Y,nb:1,dropped:0};u.audio=V&&!Y?J:void 0,u.video=Y?J:void 0;const ee=C==null?void 0:C.sampleCount;if(ee){const W=C.keyFrameIndex,ne=W!==-1;J.nb=ee,J.dropped=W===0||this.isVideoContiguous?0:ne?W:ee,J.independent=ne,J.firstKeyFrame=W,ne&&C.keyFrameStart&&(J.firstKeyFramePTS=C.keyFrameStart-l.baseTime/l.timescale),this.isVideoContiguous||(u.independent=ne),this.isVideoContiguous||(this.isVideoContiguous=ne),J.dropped&&this.logger.warn(`fmp4 does not start with IDR: firstIDR ${W}/${ee} dropped: ${J.dropped} pts: ${J.firstKeyFramePTS||"NA"}`)}return u.initSegment=m,u.id3=al(n,r,l,l),i.samples.length&&(u.text=ol(i,r,l)),u}}function pi(a,e,t=!1){return(a==null?void 0:a.start)!==void 0?(a.start+(t?a.duration:0))/a.timescale:e}function vf(a,e,t,n){if(a===null)return!0;const i=Math.max(n,1),r=e-a.baseTime/a.timescale;return Math.abs(r-t)>i}function Fa(a,e,t){const n=a==null?void 0:a.codec;return n&&n.length>4?n:e===Le.AUDIO?n==="ec-3"||n==="ac-3"||n==="alac"?n:n==="fLaC"||n==="Opus"?Ri(n,!1):(t.warn(`Unhandled audio codec "${n}" in mp4 MAP`),n||"mp4a"):(t.warn(`Unhandled video codec "${n}" in mp4 MAP`),n||"avc1")}let At;try{At=self.performance.now.bind(self.performance)}catch{At=Date.now}const Ti=[{demux:af,remux:Af},{demux:kt,remux:Si},{demux:tf,remux:Si},{demux:rf,remux:Si}];Ti.splice(2,0,{demux:nf,remux:Si});class Ma{constructor(e,t,n,i,r,s){this.asyncResult=!1,this.logger=void 0,this.observer=void 0,this.typeSupported=void 0,this.config=void 0,this.id=void 0,this.demuxer=void 0,this.remuxer=void 0,this.decrypter=void 0,this.probe=void 0,this.decryptionPromise=null,this.transmuxConfig=void 0,this.currentTransmuxState=void 0,this.observer=e,this.typeSupported=t,this.config=n,this.id=r,this.logger=s}configure(e){this.transmuxConfig=e,this.decrypter&&this.decrypter.reset()}push(e,t,n,i){const r=n.transmuxing;r.executeStart=At();let s=new Uint8Array(e);const{currentTransmuxState:o,transmuxConfig:d}=this;i&&(this.currentTransmuxState=i);const{contiguous:l,discontinuity:c,trackSwitch:u,accurateTimeOffset:h,timeOffset:m,initSegmentChange:g}=i||o,{audioCodec:v,videoCodec:E,defaultInitPts:C,duration:I,initSegmentData:L}=d,R=bf(s,t);if(R&&Jt(R.method)){const O=this.getDecrypter(),U=Zr(R.method);if(O.isSync()){let D=O.softwareDecrypt(s,R.key.buffer,R.iv.buffer,U);if(n.part>-1){const Y=O.flush();D=Y&&Y.buffer}if(!D)return r.executeEnd=At(),yr(n);s=new Uint8Array(D)}else return this.asyncResult=!0,this.decryptionPromise=O.webCryptoDecrypt(s,R.key.buffer,R.iv.buffer,U).then(D=>{const V=this.push(D,null,n);return this.decryptionPromise=null,V}),this.decryptionPromise}const _=this.needsProbing(c,u);if(_){const O=this.configureTransmuxer(s);if(O)return this.logger.warn(`[transmuxer] ${O.message}`),this.observer.emit(x.ERROR,x.ERROR,{type:oe.MEDIA_ERROR,details:F.FRAG_PARSING_ERROR,fatal:!1,error:O,reason:O.message}),r.executeEnd=At(),yr(n)}(c||u||g||_)&&this.resetInitSegment(L,v,E,I,t),(c||g||_)&&this.resetInitialTimestamp(C),l||this.resetContiguity();const N=this.transmux(s,R,m,h,n);this.asyncResult=Yn(N);const P=this.currentTransmuxState;return P.contiguous=!0,P.discontinuity=!1,P.trackSwitch=!1,r.executeEnd=At(),N}flush(e){const t=e.transmuxing;t.executeStart=At();const{decrypter:n,currentTransmuxState:i,decryptionPromise:r}=this;if(r)return this.asyncResult=!0,r.then(()=>this.flush(e));const s=[],{timeOffset:o}=i;if(n){const u=n.flush();u&&s.push(this.push(u.buffer,null,e))}const{demuxer:d,remuxer:l}=this;if(!d||!l){t.executeEnd=At();const u=[yr(e)];return this.asyncResult?Promise.resolve(u):u}const c=d.flush(o);return Yn(c)?(this.asyncResult=!0,c.then(u=>(this.flushRemux(s,u,e),s))):(this.flushRemux(s,c,e),this.asyncResult?Promise.resolve(s):s)}flushRemux(e,t,n){const{audioTrack:i,videoTrack:r,id3Track:s,textTrack:o}=t,{accurateTimeOffset:d,timeOffset:l}=this.currentTransmuxState;this.logger.log(`[transmuxer.ts]: Flushed ${this.id} sn: ${n.sn}${n.part>-1?" part: "+n.part:""} of ${this.id===re.MAIN?"level":"track"} ${n.level}`);const c=this.remuxer.remux(i,r,s,o,l,d,!0,this.id);e.push({remuxResult:c,chunkMeta:n}),n.transmuxing.executeEnd=At()}resetInitialTimestamp(e){const{demuxer:t,remuxer:n}=this;!t||!n||(t.resetTimeStamp(e),n.resetTimeStamp(e))}resetContiguity(){const{demuxer:e,remuxer:t}=this;!e||!t||(e.resetContiguity(),t.resetNextTimestamp())}resetInitSegment(e,t,n,i,r){const{demuxer:s,remuxer:o}=this;!s||!o||(s.resetInitSegment(e,t,n,i),o.resetInitSegment(e,t,n,r))}destroy(){this.demuxer&&(this.demuxer.destroy(),this.demuxer=void 0),this.remuxer&&(this.remuxer.destroy(),this.remuxer=void 0)}transmux(e,t,n,i,r){let s;return t&&t.method==="SAMPLE-AES"?s=this.transmuxSampleAes(e,t,n,i,r):s=this.transmuxUnencrypted(e,n,i,r),s}transmuxUnencrypted(e,t,n,i){const{audioTrack:r,videoTrack:s,id3Track:o,textTrack:d}=this.demuxer.demux(e,t,!1,!this.config.progressive);return{remuxResult:this.remuxer.remux(r,s,o,d,t,n,!1,this.id),chunkMeta:i}}transmuxSampleAes(e,t,n,i,r){return this.demuxer.demuxSampleAes(e,t,n).then(s=>({remuxResult:this.remuxer.remux(s.audioTrack,s.videoTrack,s.id3Track,s.textTrack,n,i,!1,this.id),chunkMeta:r}))}configureTransmuxer(e){const{config:t,observer:n,typeSupported:i}=this;let r;for(let u=0,h=Ti.length;u<h;u++){var s;if((s=Ti[u].demux)!=null&&s.probe(e,this.logger)){r=Ti[u];break}}if(!r)return new Error("Failed to find demuxer by probing fragment data");const o=this.demuxer,d=this.remuxer,l=r.remux,c=r.demux;(!d||!(d instanceof l))&&(this.remuxer=new l(n,t,i,this.logger)),(!o||!(o instanceof c))&&(this.demuxer=new c(n,t,i,this.logger),this.probe=c.probe)}needsProbing(e,t){return!this.demuxer||!this.remuxer||e||t}getDecrypter(){let e=this.decrypter;return e||(e=this.decrypter=new Qr(this.config)),e}}function bf(a,e){let t=null;return a.byteLength>0&&(e==null?void 0:e.key)!=null&&e.iv!==null&&e.method!=null&&(t=e),t}const yr=a=>({remuxResult:{},chunkMeta:a});function Yn(a){return"then"in a&&a.then instanceof Function}class Ef{constructor(e,t,n,i,r){this.audioCodec=void 0,this.videoCodec=void 0,this.initSegmentData=void 0,this.duration=void 0,this.defaultInitPts=void 0,this.audioCodec=e,this.videoCodec=t,this.initSegmentData=n,this.duration=i,this.defaultInitPts=r||null}}class xf{constructor(e,t,n,i,r,s){this.discontinuity=void 0,this.contiguous=void 0,this.accurateTimeOffset=void 0,this.trackSwitch=void 0,this.timeOffset=void 0,this.initSegmentChange=void 0,this.discontinuity=e,this.contiguous=t,this.accurateTimeOffset=n,this.trackSwitch=i,this.timeOffset=r,this.initSegmentChange=s}}let Na=0;class ll{constructor(e,t,n,i){this.error=null,this.hls=void 0,this.id=void 0,this.instanceNo=Na++,this.observer=void 0,this.frag=null,this.part=null,this.useWorker=void 0,this.workerContext=null,this.transmuxer=null,this.onTransmuxComplete=void 0,this.onFlush=void 0,this.onWorkerMessage=d=>{const l=d.data,c=this.hls;if(!(!c||!(l!=null&&l.event)||l.instanceNo!==this.instanceNo))switch(l.event){case"init":{var u;const h=(u=this.workerContext)==null?void 0:u.objectURL;h&&self.URL.revokeObjectURL(h);break}case"transmuxComplete":{this.handleTransmuxComplete(l.data);break}case"flush":{this.onFlush(l.data);break}case"workerLog":{c.logger[l.data.logType]&&c.logger[l.data.logType](l.data.message);break}default:{l.data=l.data||{},l.data.frag=this.frag,l.data.part=this.part,l.data.id=this.id,c.trigger(l.event,l.data);break}}},this.onWorkerError=d=>{if(!this.hls)return;const l=new Error(`${d.message}  (${d.filename}:${d.lineno})`);this.hls.config.enableWorker=!1,this.hls.logger.warn(`Error in "${this.id}" Web Worker, fallback to inline`),this.hls.trigger(x.ERROR,{type:oe.OTHER_ERROR,details:F.INTERNAL_EXCEPTION,fatal:!1,event:"demuxerWorker",error:l})};const r=e.config;this.hls=e,this.id=t,this.useWorker=!!r.enableWorker,this.onTransmuxComplete=n,this.onFlush=i;const s=(d,l)=>{l=l||{},l.frag=this.frag||void 0,d===x.ERROR&&(l=l,l.parent=this.id,l.part=this.part,this.error=l.error),this.hls.trigger(d,l)};this.observer=new ts,this.observer.on(x.FRAG_DECRYPTED,s),this.observer.on(x.ERROR,s);const o=ea(r.preferManagedMediaSource);if(this.useWorker&&typeof Worker<"u"){const d=this.hls.logger;if(r.workerPath||Ih()){try{r.workerPath?(d.log(`loading Web Worker ${r.workerPath} for "${t}"`),this.workerContext=wh(r.workerPath)):(d.log(`injecting Web Worker for "${t}"`),this.workerContext=kh());const{worker:c}=this.workerContext;c.addEventListener("message",this.onWorkerMessage),c.addEventListener("error",this.onWorkerError),c.postMessage({instanceNo:this.instanceNo,cmd:"init",typeSupported:o,id:t,config:Ie(r)})}catch(c){d.warn(`Error setting up "${t}" Web Worker, fallback to inline`,c),this.terminateWorker(),this.error=null,this.transmuxer=new Ma(this.observer,o,r,"",t,e.logger)}return}}this.transmuxer=new Ma(this.observer,o,r,"",t,e.logger)}reset(){if(this.frag=null,this.part=null,this.workerContext){const e=this.instanceNo;this.instanceNo=Na++;const t=this.hls.config,n=ea(t.preferManagedMediaSource);this.workerContext.worker.postMessage({instanceNo:this.instanceNo,cmd:"reset",resetNo:e,typeSupported:n,id:this.id,config:Ie(t)})}}terminateWorker(){if(this.workerContext){const{worker:e}=this.workerContext;this.workerContext=null,e.removeEventListener("message",this.onWorkerMessage),e.removeEventListener("error",this.onWorkerError),Rh(this.hls.config.workerPath)}}destroy(){if(this.workerContext)this.terminateWorker(),this.onWorkerMessage=this.onWorkerError=null;else{const t=this.transmuxer;t&&(t.destroy(),this.transmuxer=null)}const e=this.observer;e&&e.removeAllListeners(),this.frag=null,this.part=null,this.observer=null,this.hls=null}push(e,t,n,i,r,s,o,d,l,c){var u,h;l.transmuxing.start=self.performance.now();const{instanceNo:m,transmuxer:g}=this,v=s?s.start:r.start,E=r.decryptdata,C=this.frag,I=!(C&&r.cc===C.cc),L=!(C&&l.level===C.level),R=C?l.sn-C.sn:-1,_=this.part?l.part-this.part.index:-1,N=R===0&&l.id>1&&l.id===(C==null?void 0:C.stats.chunkCount),P=!L&&(R===1||R===0&&(_===1||N&&_<=0)),O=self.performance.now();(L||R||r.stats.parsing.start===0)&&(r.stats.parsing.start=O),s&&(_||!P)&&(s.stats.parsing.start=O);const U=!(C&&((u=r.initSegment)==null?void 0:u.url)===((h=C.initSegment)==null?void 0:h.url)),D=new xf(I,P,d,L,v,U);if(!P||I||U){this.hls.logger.log(`[transmuxer-interface]: Starting new transmux session for ${r.type} sn: ${l.sn}${l.part>-1?" part: "+l.part:""} ${this.id===re.MAIN?"level":"track"}: ${l.level} id: ${l.id}
        discontinuity: ${I}
        trackSwitch: ${L}
        contiguous: ${P}
        accurateTimeOffset: ${d}
        timeOffset: ${v}
        initSegmentChange: ${U}`);const V=new Ef(n,i,t,o,c);this.configureTransmuxer(V)}if(this.frag=r,this.part=s,this.workerContext)this.workerContext.worker.postMessage({instanceNo:m,cmd:"demux",data:e,decryptdata:E,chunkMeta:l,state:D},e instanceof ArrayBuffer?[e]:[]);else if(g){const V=g.push(e,E,l,D);Yn(V)?V.then(Y=>{this.handleTransmuxComplete(Y)}).catch(Y=>{this.transmuxerError(Y,l,"transmuxer-interface push error")}):this.handleTransmuxComplete(V)}}flush(e){e.transmuxing.start=self.performance.now();const{instanceNo:t,transmuxer:n}=this;if(this.workerContext)this.workerContext.worker.postMessage({instanceNo:t,cmd:"flush",chunkMeta:e});else if(n){const i=n.flush(e);Yn(i)?i.then(r=>{this.handleFlushResult(r,e)}).catch(r=>{this.transmuxerError(r,e,"transmuxer-interface flush error")}):this.handleFlushResult(i,e)}}transmuxerError(e,t,n){this.hls&&(this.error=e,this.hls.trigger(x.ERROR,{type:oe.MEDIA_ERROR,details:F.FRAG_PARSING_ERROR,chunkMeta:t,frag:this.frag||void 0,part:this.part||void 0,fatal:!1,error:e,err:e,reason:n}))}handleFlushResult(e,t){e.forEach(n=>{this.handleTransmuxComplete(n)}),this.onFlush(t)}configureTransmuxer(e){const{instanceNo:t,transmuxer:n}=this;this.workerContext?this.workerContext.worker.postMessage({instanceNo:t,cmd:"configure",config:e}):n&&n.configure(e)}handleTransmuxComplete(e){e.chunkMeta.transmuxing.end=self.performance.now(),this.onTransmuxComplete(e)}}const Ua=100;class Sf extends es{constructor(e,t,n){super(e,t,n,"audio-stream-controller",re.AUDIO),this.mainAnchor=null,this.mainFragLoading=null,this.audioOnly=!1,this.bufferedTrack=null,this.switchingTrack=null,this.trackId=-1,this.waitingData=null,this.mainDetails=null,this.flushing=!1,this.bufferFlushed=!1,this.cachedTrackLoadedData=null,this.registerListeners()}onHandlerDestroying(){this.unregisterListeners(),super.onHandlerDestroying(),this.resetItem()}resetItem(){this.mainDetails=this.mainAnchor=this.mainFragLoading=this.bufferedTrack=this.switchingTrack=this.waitingData=this.cachedTrackLoadedData=null}registerListeners(){super.registerListeners();const{hls:e}=this;e.on(x.LEVEL_LOADED,this.onLevelLoaded,this),e.on(x.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),e.on(x.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.on(x.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.on(x.BUFFER_RESET,this.onBufferReset,this),e.on(x.BUFFER_CREATED,this.onBufferCreated,this),e.on(x.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(x.BUFFER_FLUSHED,this.onBufferFlushed,this),e.on(x.INIT_PTS_FOUND,this.onInitPtsFound,this),e.on(x.FRAG_LOADING,this.onFragLoading,this),e.on(x.FRAG_BUFFERED,this.onFragBuffered,this)}unregisterListeners(){const{hls:e}=this;e&&(super.unregisterListeners(),e.off(x.LEVEL_LOADED,this.onLevelLoaded,this),e.off(x.AUDIO_TRACKS_UPDATED,this.onAudioTracksUpdated,this),e.off(x.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.off(x.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.off(x.BUFFER_RESET,this.onBufferReset,this),e.off(x.BUFFER_CREATED,this.onBufferCreated,this),e.off(x.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(x.BUFFER_FLUSHED,this.onBufferFlushed,this),e.off(x.INIT_PTS_FOUND,this.onInitPtsFound,this),e.off(x.FRAG_LOADING,this.onFragLoading,this),e.off(x.FRAG_BUFFERED,this.onFragBuffered,this))}onInitPtsFound(e,{frag:t,id:n,initPTS:i,timescale:r}){if(n===re.MAIN){const s=t.cc,o=this.fragCurrent;if(this.initPTS[s]={baseTime:i,timescale:r},this.log(`InitPTS for cc: ${s} found from main: ${i}/${r}`),this.mainAnchor=t,this.state===K.WAITING_INIT_PTS){const d=this.waitingData;(!d&&!this.loadingParts||d&&d.frag.cc!==s)&&this.syncWithAnchor(t,d==null?void 0:d.frag)}else!this.hls.hasEnoughToStart&&o&&o.cc!==s?(o.abortRequests(),this.syncWithAnchor(t,o)):this.state===K.IDLE&&this.tick()}}getLoadPosition(){return!this.startFragRequested&&this.nextLoadPosition>=0?this.nextLoadPosition:super.getLoadPosition()}syncWithAnchor(e,t){var n;const i=((n=this.mainFragLoading)==null?void 0:n.frag)||null;if(t&&(i==null?void 0:i.cc)===t.cc)return;const r=(i||e).cc,s=this.getLevelDetails(),o=this.getLoadPosition(),d=ko(s,r,o);d&&(this.log(`Waiting fragment cc (${t==null?void 0:t.cc}) cancelled because video is at cc ${e.cc}`),this.startFragRequested=!1,this.nextLoadPosition=d.start,this.resetLoadingState(),this.state===K.IDLE&&this.doTickIdle())}startLoad(e,t){if(!this.levels){this.startPosition=e,this.state=K.STOPPED;return}const n=this.lastCurrentTime;this.stopLoad(),this.setInterval(Ua),n>0&&e===-1?(this.log(`Override startPosition with lastCurrentTime @${n.toFixed(3)}`),e=n,this.state=K.IDLE):this.state=K.WAITING_TRACK,this.nextLoadPosition=this.lastCurrentTime=e+this.timelineOffset,this.startPosition=t?-1:e,this.tick()}doTick(){switch(this.state){case K.IDLE:this.doTickIdle();break;case K.WAITING_TRACK:{const{levels:t,trackId:n}=this,i=t==null?void 0:t[n],r=i==null?void 0:i.details;if(r&&!this.waitForLive(i)){if(this.waitForCdnTuneIn(r))break;this.state=K.WAITING_INIT_PTS}break}case K.FRAG_LOADING_WAITING_RETRY:{var e;const t=performance.now(),n=this.retryDate;if(!n||t>=n||(e=this.media)!=null&&e.seeking){const{levels:i,trackId:r}=this;this.log("RetryDate reached, switch back to IDLE state"),this.resetStartWhenNotLoaded((i==null?void 0:i[r])||null),this.state=K.IDLE}break}case K.WAITING_INIT_PTS:{const t=this.waitingData;if(t){const{frag:n,part:i,cache:r,complete:s}=t,o=this.mainAnchor;if(this.initPTS[n.cc]!==void 0){this.waitingData=null,this.state=K.FRAG_LOADING;const d=r.flush().buffer,l={frag:n,part:i,payload:d,networkDetails:null};this._handleFragmentLoadProgress(l),s&&super._handleFragmentLoadComplete(l)}else o&&o.cc!==t.frag.cc&&this.syncWithAnchor(o,t.frag)}else this.state=K.IDLE}}this.onTickEnd()}resetLoadingState(){const e=this.waitingData;e&&(this.fragmentTracker.removeFragment(e.frag),this.waitingData=null),super.resetLoadingState()}onTickEnd(){const{media:e}=this;e!=null&&e.readyState&&(this.lastCurrentTime=e.currentTime)}doTickIdle(){var e;const{hls:t,levels:n,media:i,trackId:r}=this,s=t.config;if(!this.buffering||!i&&!this.primaryPrefetch&&(this.startFragRequested||!s.startFragPrefetch)||!(n!=null&&n[r]))return;const o=n[r],d=o.details;if(!d||this.waitForLive(o)||this.waitForCdnTuneIn(d)){this.state=K.WAITING_TRACK,this.startFragRequested=!1;return}const l=this.mediaBuffer?this.mediaBuffer:this.media;this.bufferFlushed&&l&&(this.bufferFlushed=!1,this.afterBufferFlushed(l,Le.AUDIO,re.AUDIO));const c=this.getFwdBufferInfo(l,re.AUDIO);if(c===null)return;if(!this.switchingTrack&&this._streamEnded(c,d)){t.trigger(x.BUFFER_EOS,{type:"audio"}),this.state=K.ENDED;return}const u=c.len,h=t.maxBufferLength,m=d.fragments,g=m[0].start,v=this.getLoadPosition(),E=this.flushing?v:c.end;if(this.switchingTrack&&i){const L=v;d.PTSKnown&&L<g&&(c.end>g||c.nextStart)&&(this.log("Alt audio track ahead of main track, seek to start of alt audio track"),i.currentTime=g+.05)}if(u>=h&&!this.switchingTrack&&E<m[m.length-1].start)return;let C=this.getNextFragment(E,d);if(C&&this.isLoopLoading(C,E)&&(C=this.getNextFragmentLoopLoading(C,d,c,re.MAIN,h)),!C){this.bufferFlushed=!0;return}let I=((e=this.mainFragLoading)==null?void 0:e.frag)||null;if(!this.audioOnly&&this.startFragRequested&&I&&Ne(C)&&!C.endList&&(!d.live||!this.loadingParts&&E<this.hls.liveSyncPosition)&&(this.fragmentTracker.getState(I)===Oe.OK&&(this.mainFragLoading=I=null),I&&Ne(I))){if(C.start>I.end){const R=this.fragmentTracker.getFragAtPos(E,re.MAIN);R&&R.end>I.end&&(I=R,this.mainFragLoading={frag:R,targetBufferTime:null})}if(C.start>I.end)return}this.loadFragment(C,o,E)}onMediaDetaching(e,t){this.bufferFlushed=this.flushing=!1,super.onMediaDetaching(e,t)}onAudioTracksUpdated(e,{audioTracks:t}){this.resetTransmuxer(),this.levels=t.map(n=>new Gn(n))}onAudioTrackSwitching(e,t){const n=!!t.url;this.trackId=t.id;const{fragCurrent:i}=this;i&&(i.abortRequests(),this.removeUnbufferedFrags(i.start)),this.resetLoadingState(),n?(this.switchingTrack=t,this.flushAudioIfNeeded(t),this.state!==K.STOPPED&&(this.setInterval(Ua),this.state=K.IDLE,this.tick())):(this.resetTransmuxer(),this.switchingTrack=null,this.bufferedTrack=t,this.clearInterval())}onManifestLoading(){super.onManifestLoading(),this.bufferFlushed=this.flushing=this.audioOnly=!1,this.resetItem(),this.trackId=-1}onLevelLoaded(e,t){this.mainDetails=t.details;const n=this.cachedTrackLoadedData;n&&(this.cachedTrackLoadedData=null,this.onAudioTrackLoaded(x.AUDIO_TRACK_LOADED,n))}onAudioTrackLoaded(e,t){var n;const{levels:i}=this,{details:r,id:s,groupId:o,track:d}=t;if(!i){this.warn(`Audio tracks reset while loading track ${s} "${d.name}" of "${o}"`);return}const l=this.mainDetails;if(!l||r.endCC>l.endCC||l.expired){this.cachedTrackLoadedData=t,this.state!==K.STOPPED&&(this.state=K.WAITING_TRACK);return}this.cachedTrackLoadedData=null,this.log(`Audio track ${s} "${d.name}" of "${o}" loaded [${r.startSN},${r.endSN}]${r.lastPartSn?`[part-${r.lastPartSn}-${r.lastPartIndex}]`:""},duration:${r.totalduration}`);const c=i[s];let u=0;if(r.live||(n=c.details)!=null&&n.live){if(this.checkLiveUpdate(r),r.deltaUpdateFailed)return;if(c.details){var h;u=this.alignPlaylists(r,c.details,(h=this.levelLastLoaded)==null?void 0:h.details)}r.alignedSliding||(Ko(r,l),r.alignedSliding||Fi(r,l),u=r.fragmentStart)}c.details=r,this.levelLastLoaded=c,this.startFragRequested||this.setStartPosition(l,u),this.hls.trigger(x.AUDIO_TRACK_UPDATED,{details:r,id:s,groupId:t.groupId}),this.state===K.WAITING_TRACK&&!this.waitForCdnTuneIn(r)&&(this.state=K.IDLE),this.tick()}_handleFragmentLoadProgress(e){var t;const n=e.frag,{part:i,payload:r}=e,{config:s,trackId:o,levels:d}=this;if(!d){this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${n.sn} of level ${n.level} will not be buffered`);return}const l=d[o];if(!l){this.warn("Audio track is undefined on fragment load progress");return}const c=l.details;if(!c){this.warn("Audio track details undefined on fragment load progress"),this.removeUnbufferedFrags(n.start);return}const u=s.defaultAudioCodec||l.audioCodec||"mp4a.40.2";let h=this.transmuxer;h||(h=this.transmuxer=new ll(this.hls,re.AUDIO,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)));const m=this.initPTS[n.cc],g=(t=n.initSegment)==null?void 0:t.data;if(m!==void 0){const E=i?i.index:-1,C=E!==-1,I=new Xr(n.level,n.sn,n.stats.chunkCount,r.byteLength,E,C);h.push(r,g,u,"",n,i,c.totalduration,!1,I,m)}else{this.log(`Unknown video PTS for cc ${n.cc}, waiting for video PTS before demuxing audio frag ${n.sn} of [${c.startSN} ,${c.endSN}],track ${o}`);const{cache:v}=this.waitingData=this.waitingData||{frag:n,part:i,cache:new Ho,complete:!1};v.push(new Uint8Array(r)),this.state!==K.STOPPED&&(this.state=K.WAITING_INIT_PTS)}}_handleFragmentLoadComplete(e){if(this.waitingData){this.waitingData.complete=!0;return}super._handleFragmentLoadComplete(e)}onBufferReset(){this.mediaBuffer=null}onBufferCreated(e,t){this.bufferFlushed=this.flushing=!1;const n=t.tracks.audio;n&&(this.mediaBuffer=n.buffer||null)}onFragLoading(e,t){!this.audioOnly&&t.frag.type===re.MAIN&&Ne(t.frag)&&(this.mainFragLoading=t,this.state===K.IDLE&&this.tick())}onFragBuffered(e,t){const{frag:n,part:i}=t;if(n.type!==re.AUDIO){!this.audioOnly&&n.type===re.MAIN&&!n.elementaryStreams.video&&!n.elementaryStreams.audiovideo&&(this.audioOnly=!0,this.mainFragLoading=null);return}if(this.fragContextChanged(n)){this.warn(`Fragment ${n.sn}${i?" p: "+i.index:""} of level ${n.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack?this.switchingTrack.name:"false"}`);return}if(Ne(n)){this.fragPrevious=n;const r=this.switchingTrack;r&&(this.bufferedTrack=r,this.switchingTrack=null,this.hls.trigger(x.AUDIO_TRACK_SWITCHED,Ee({},r)))}this.fragBufferedComplete(n,i),this.media&&this.tick()}onError(e,t){var n;if(t.fatal){this.state=K.ERROR;return}switch(t.details){case F.FRAG_GAP:case F.FRAG_PARSING_ERROR:case F.FRAG_DECRYPT_ERROR:case F.FRAG_LOAD_ERROR:case F.FRAG_LOAD_TIMEOUT:case F.KEY_LOAD_ERROR:case F.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(re.AUDIO,t);break;case F.AUDIO_TRACK_LOAD_ERROR:case F.AUDIO_TRACK_LOAD_TIMEOUT:case F.LEVEL_PARSING_ERROR:!t.levelRetry&&this.state===K.WAITING_TRACK&&((n=t.context)==null?void 0:n.type)===me.AUDIO_TRACK&&(this.state=K.IDLE);break;case F.BUFFER_ADD_CODEC_ERROR:case F.BUFFER_APPEND_ERROR:if(t.parent!=="audio")return;this.resetLoadingState();break;case F.BUFFER_FULL_ERROR:if(t.parent!=="audio")return;this.reduceLengthAndFlushBuffer(t)&&(this.bufferedTrack=null,super.flushMainBuffer(0,Number.POSITIVE_INFINITY,"audio"));break;case F.INTERNAL_EXCEPTION:this.recoverWorkerError(t);break}}onBufferFlushing(e,{type:t}){t!==Le.VIDEO&&(this.flushing=!0)}onBufferFlushed(e,{type:t}){if(t!==Le.VIDEO){this.flushing=!1,this.bufferFlushed=!0,this.state===K.ENDED&&(this.state=K.IDLE);const n=this.mediaBuffer||this.media;n&&(this.afterBufferFlushed(n,t,re.AUDIO),this.tick())}}_handleTransmuxComplete(e){var t;const n="audio",{hls:i}=this,{remuxResult:r,chunkMeta:s}=e,o=this.getCurrentContext(s);if(!o){this.resetWhenMissingContext(s);return}const{frag:d,part:l,level:c}=o,{details:u}=c,{audio:h,text:m,id3:g,initSegment:v}=r;if(this.fragContextChanged(d)||!u){this.fragmentTracker.removeFragment(d);return}if(this.state=K.PARSING,this.switchingTrack&&h&&this.completeAudioSwitch(this.switchingTrack),v!=null&&v.tracks){const E=d.initSegment||d;this._bufferInitSegment(c,v.tracks,E,s),i.trigger(x.FRAG_PARSING_INIT_SEGMENT,{frag:E,id:n,tracks:v.tracks})}if(h){const{startPTS:E,endPTS:C,startDTS:I,endDTS:L}=h;l&&(l.elementaryStreams[Le.AUDIO]={startPTS:E,endPTS:C,startDTS:I,endDTS:L}),d.setElementaryStreamInfo(Le.AUDIO,E,C,I,L),this.bufferFragmentData(h,d,l,s)}if(g!=null&&(t=g.samples)!=null&&t.length){const E=Se({id:n,frag:d,details:u},g);i.trigger(x.FRAG_PARSING_METADATA,E)}if(m){const E=Se({id:n,frag:d,details:u},m);i.trigger(x.FRAG_PARSING_USERDATA,E)}}_bufferInitSegment(e,t,n,i){if(this.state!==K.PARSING||(t.video&&delete t.video,t.audiovideo&&delete t.audiovideo,!t.audio))return;const r=t.audio;r.id=re.AUDIO;const s=e.audioCodec;this.log(`Init audio buffer, container:${r.container}, codecs[level/parsed]=[${s}/${r.codec}]`),s&&s.split(",").length===1&&(r.levelCodec=s),this.hls.trigger(x.BUFFER_CODECS,t);const o=r.initSegment;if(o!=null&&o.byteLength){const d={type:"audio",frag:n,part:null,chunkMeta:i,parent:n.type,data:o};this.hls.trigger(x.BUFFER_APPENDING,d)}this.tickImmediate()}loadFragment(e,t,n){const i=this.fragmentTracker.getState(e);if(this.switchingTrack||i===Oe.NOT_LOADED||i===Oe.PARTIAL){var r;if(!Ne(e))this._loadInitSegment(e,t);else if((r=t.details)!=null&&r.live&&!this.initPTS[e.cc]){this.log(`Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`),this.state=K.WAITING_INIT_PTS;const s=this.mainDetails;s&&s.fragmentStart!==t.details.fragmentStart&&Fi(t.details,s)}else super.loadFragment(e,t,n)}else this.clearTrackerIfNeeded(e)}flushAudioIfNeeded(e){if(this.media&&this.bufferedTrack){const{name:t,lang:n,assocLang:i,characteristics:r,audioCodec:s,channels:o}=this.bufferedTrack;Mt({name:t,lang:n,assocLang:i,characteristics:r,audioCodec:s,channels:o},e,Ft)||(_i(e.url,this.hls)?(this.log("Switching audio track : flushing all audio"),super.flushMainBuffer(0,Number.POSITIVE_INFINITY,"audio"),this.bufferedTrack=null):this.bufferedTrack=e)}}completeAudioSwitch(e){const{hls:t}=this;this.flushAudioIfNeeded(e),this.bufferedTrack=e,this.switchingTrack=null,t.trigger(x.AUDIO_TRACK_SWITCHED,Ee({},e))}}class ls extends vt{constructor(e,t){super(t,e.logger),this.hls=void 0,this.canLoad=!1,this.timer=-1,this.hls=e}destroy(){this.clearTimer(),this.hls=this.log=this.warn=null}clearTimer(){this.timer!==-1&&(self.clearTimeout(this.timer),this.timer=-1)}startLoad(){this.canLoad=!0,this.loadPlaylist()}stopLoad(){this.canLoad=!1,this.clearTimer()}switchParams(e,t,n){const i=t==null?void 0:t.renditionReports;if(i){let r=-1;for(let s=0;s<i.length;s++){const o=i[s];let d;try{d=new self.URL(o.URI,t.url).href}catch(l){this.warn(`Could not construct new URL for Rendition Report: ${l}`),d=o.URI||""}if(d===e){r=s;break}else d===e.substring(0,d.length)&&(r=s)}if(r!==-1){const s=i[r],o=parseInt(s["LAST-MSN"])||(t==null?void 0:t.lastPartSn);let d=parseInt(s["LAST-PART"])||(t==null?void 0:t.lastPartIndex);if(this.hls.config.lowLatencyMode){const c=Math.min(t.age-t.partTarget,t.targetduration);d>=0&&c>t.partTarget&&(d+=1)}const l=n&&na(n);return new ia(o,d>=0?d:void 0,l)}}}loadPlaylist(e){this.clearTimer()}loadingPlaylist(e,t){this.clearTimer()}shouldLoadPlaylist(e){return this.canLoad&&!!e&&!!e.url&&(!e.details||e.details.live)}getUrlWithDirectives(e,t){if(t)try{return t.addDirectives(e)}catch(n){this.warn(`Could not construct new URL with HLS Delivery Directives: ${n}`)}return e}playlistLoaded(e,t,n){const{details:i,stats:r}=t,s=self.performance.now(),o=r.loading.first?Math.max(0,s-r.loading.first):0;i.advancedDateTime=Date.now()-o;const d=this.hls.config.timelineOffset;if(d!==i.appliedTimelineOffset){const c=Math.max(d||0,0);i.appliedTimelineOffset=c,i.fragments.forEach(u=>{u.start=u.playlistOffset+c})}if(i.live||n!=null&&n.live){const c="levelInfo"in t?t.levelInfo:t.track;if(i.reloaded(n),n&&i.fragments.length>0){yh(n,i);const I=i.playlistParsingError;if(I){this.warn(I);const L=this.hls;if(!L.config.ignorePlaylistParsingErrors){var l;const{networkDetails:R}=t;L.trigger(x.ERROR,{type:oe.NETWORK_ERROR,details:F.LEVEL_PARSING_ERROR,fatal:!1,url:i.url,error:I,reason:I.message,level:t.level||void 0,parent:(l=i.fragments[0])==null?void 0:l.type,networkDetails:R,stats:r});return}i.playlistParsingError=null}}i.requestScheduled===-1&&(i.requestScheduled=r.loading.start);const u=this.hls.mainForwardBufferInfo,h=u?u.end-u.len:0,m=(i.edge-h)*1e3,g=Mo(i,m);if(i.requestScheduled+g<s?i.requestScheduled=s:i.requestScheduled+=g,this.log(`live playlist ${e} ${i.advanced?"REFRESHED "+i.lastPartSn+"-"+i.lastPartIndex:i.updated?"UPDATED":"MISSED"}`),!this.canLoad||!i.live)return;let v,E,C;if(i.canBlockReload&&i.endSN&&i.advanced){const I=this.hls.config.lowLatencyMode,L=i.lastPartSn,R=i.endSN,_=i.lastPartIndex,N=_!==-1,P=L===R;N?P?(E=R+1,C=I?0:_):(E=L,C=I?_+1:i.maxPartIndex):E=R+1;const O=i.age,U=O+i.ageHeader;let D=Math.min(U-i.partTarget,i.targetduration*1.5);if(D>0){if(U>i.targetduration*3)this.log(`Playlist last advanced ${O.toFixed(2)}s ago. Omitting segment and part directives.`),E=void 0,C=void 0;else if(n!=null&&n.tuneInGoal&&U-i.partTarget>n.tuneInGoal)this.warn(`CDN Tune-in goal increased from: ${n.tuneInGoal} to: ${D} with playlist age: ${i.age}`),D=0;else{const V=Math.floor(D/i.targetduration);if(E+=V,C!==void 0){const Y=Math.round(D%i.targetduration/i.partTarget);C+=Y}this.log(`CDN Tune-in age: ${i.ageHeader}s last advanced ${O.toFixed(2)}s goal: ${D} skip sn ${V} to part ${C}`)}i.tuneInGoal=D}if(v=this.getDeliveryDirectives(i,t.deliveryDirectives,E,C),I||!P){i.requestScheduled=s,this.loadingPlaylist(c,v);return}}else(i.canBlockReload||i.canSkipUntil)&&(v=this.getDeliveryDirectives(i,t.deliveryDirectives,E,C));v&&E!==void 0&&i.canBlockReload&&(i.requestScheduled=r.loading.first+Math.max(g-o*2,g/2)),this.scheduleLoading(c,v,i)}else this.clearTimer()}scheduleLoading(e,t,n){const i=n||e.details;if(!i){this.loadingPlaylist(e,t);return}const r=self.performance.now(),s=i.requestScheduled;if(r>=s){this.loadingPlaylist(e,t);return}const o=s-r;this.log(`reload live playlist ${e.name||e.bitrate+"bps"} in ${Math.round(o)} ms`),this.clearTimer(),this.timer=self.setTimeout(()=>this.loadingPlaylist(e,t),o)}getDeliveryDirectives(e,t,n,i){let r=na(e);return t!=null&&t.skip&&e.deltaUpdateFailed&&(n=t.msn,i=t.part,r=Ei.No),new ia(n,i,r)}checkRetry(e){const t=e.details,n=Pi(e),i=e.errorAction,{action:r,retryCount:s=0,retryConfig:o}=i||{},d=!!i&&!!o&&(r===Ue.RetryRequest||!i.resolved&&r===Ue.SendAlternateToPenaltyBox);if(d){var l;if(s>=o.maxNumRetry)return!1;if(n&&(l=e.context)!=null&&l.deliveryDirectives)this.warn(`Retrying playlist loading ${s+1}/${o.maxNumRetry} after "${t}" without delivery-directives`),this.loadPlaylist();else{const c=zr(o,s);this.clearTimer(),this.timer=self.setTimeout(()=>this.loadPlaylist(),c),this.warn(`Retrying playlist loading ${s+1}/${o.maxNumRetry} after "${t}" in ${c}ms`)}e.levelRetry=!0,i.resolved=!0}return d}}function dl(a,e){if(a.length!==e.length)return!1;for(let t=0;t<a.length;t++)if(!jn(a[t].attrs,e[t].attrs))return!1;return!0}function jn(a,e,t){const n=a["STABLE-RENDITION-ID"];return n&&!t?n===e["STABLE-RENDITION-ID"]:!(t||["LANGUAGE","NAME","CHARACTERISTICS","AUTOSELECT","DEFAULT","FORCED","ASSOC-LANGUAGE"]).some(i=>a[i]!==e[i])}function Ur(a,e){return e.label.toLowerCase()===a.name.toLowerCase()&&(!e.language||e.language.toLowerCase()===(a.lang||"").toLowerCase())}class Tf extends ls{constructor(e){super(e,"audio-track-controller"),this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0,this.registerListeners()}registerListeners(){const{hls:e}=this;e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.MANIFEST_PARSED,this.onManifestParsed,this),e.on(x.LEVEL_LOADING,this.onLevelLoading,this),e.on(x.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(x.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.on(x.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.MANIFEST_PARSED,this.onManifestParsed,this),e.off(x.LEVEL_LOADING,this.onLevelLoading,this),e.off(x.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(x.AUDIO_TRACK_LOADED,this.onAudioTrackLoaded,this),e.off(x.ERROR,this.onError,this)}destroy(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.currentTrack=null,super.destroy()}onManifestLoading(){this.tracks=[],this.tracksInGroup=[],this.groupIds=null,this.currentTrack=null,this.trackId=-1,this.selectDefaultTrack=!0}onManifestParsed(e,t){this.tracks=t.audioTracks||[]}onAudioTrackLoaded(e,t){const{id:n,groupId:i,details:r}=t,s=this.tracksInGroup[n];if(!s||s.groupId!==i){this.warn(`Audio track with id:${n} and group:${i} not found in active group ${s==null?void 0:s.groupId}`);return}const o=s.details;s.details=t.details,this.log(`Audio track ${n} "${s.name}" lang:${s.lang} group:${i} loaded [${r.startSN}-${r.endSN}]`),n===this.trackId&&this.playlistLoaded(n,t,o)}onLevelLoading(e,t){this.switchLevel(t.level)}onLevelSwitching(e,t){this.switchLevel(t.level)}switchLevel(e){const t=this.hls.levels[e];if(!t)return;const n=t.audioGroups||null,i=this.groupIds;let r=this.currentTrack;if(!n||(i==null?void 0:i.length)!==(n==null?void 0:n.length)||n!=null&&n.some(o=>(i==null?void 0:i.indexOf(o))===-1)){this.groupIds=n,this.trackId=-1,this.currentTrack=null;const o=this.tracks.filter(h=>!n||n.indexOf(h.groupId)!==-1);if(o.length)this.selectDefaultTrack&&!o.some(h=>h.default)&&(this.selectDefaultTrack=!1),o.forEach((h,m)=>{h.id=m});else if(!r&&!this.tracksInGroup.length)return;this.tracksInGroup=o;const d=this.hls.config.audioPreference;if(!r&&d){const h=dt(d,o,Ft);if(h>-1)r=o[h];else{const m=dt(d,this.tracks);r=this.tracks[m]}}let l=this.findTrackId(r);l===-1&&r&&(l=this.findTrackId(null));const c={audioTracks:o};this.log(`Updating audio tracks, ${o.length} track(s) found in group(s): ${n==null?void 0:n.join(",")}`),this.hls.trigger(x.AUDIO_TRACKS_UPDATED,c);const u=this.trackId;if(l!==-1&&u===-1)this.setAudioTrack(l);else if(o.length&&u===-1){var s;const h=new Error(`No audio track selected for current audio group-ID(s): ${(s=this.groupIds)==null?void 0:s.join(",")} track count: ${o.length}`);this.warn(h.message),this.hls.trigger(x.ERROR,{type:oe.MEDIA_ERROR,details:F.AUDIO_TRACK_LOAD_ERROR,fatal:!0,error:h})}}}onError(e,t){t.fatal||!t.context||t.context.type===me.AUDIO_TRACK&&t.context.id===this.trackId&&(!this.groupIds||this.groupIds.indexOf(t.context.groupId)!==-1)&&this.checkRetry(t)}get allAudioTracks(){return this.tracks}get audioTracks(){return this.tracksInGroup}get audioTrack(){return this.trackId}set audioTrack(e){this.selectDefaultTrack=!1,this.setAudioTrack(e)}setAudioOption(e){const t=this.hls;if(t.config.audioPreference=e,e){const n=this.allAudioTracks;if(this.selectDefaultTrack=!1,n.length){const i=this.currentTrack;if(i&&Mt(e,i,Ft))return i;const r=dt(e,this.tracksInGroup,Ft);if(r>-1){const s=this.tracksInGroup[r];return this.setAudioTrack(r),s}else if(i){let s=t.loadLevel;s===-1&&(s=t.firstAutoLevel);const o=Mu(e,t.levels,n,s,Ft);if(o===-1)return null;t.nextLoadLevel=o}if(e.channels||e.audioCodec){const s=dt(e,n);if(s>-1)return n[s]}}}return null}setAudioTrack(e){const t=this.tracksInGroup;if(e<0||e>=t.length){this.warn(`Invalid audio track id: ${e}`);return}this.selectDefaultTrack=!1;const n=this.currentTrack,i=t[e],r=i.details&&!i.details.live;if(e===this.trackId&&i===n&&r||(this.log(`Switching to audio-track ${e} "${i.name}" lang:${i.lang} group:${i.groupId} channels:${i.channels}`),this.trackId=e,this.currentTrack=i,this.hls.trigger(x.AUDIO_TRACK_SWITCHING,Ee({},i)),r))return;const s=this.switchParams(i.url,n==null?void 0:n.details,i.details);this.loadPlaylist(s)}findTrackId(e){const t=this.tracksInGroup;for(let n=0;n<t.length;n++){const i=t[n];if(!(this.selectDefaultTrack&&!i.default)&&(!e||Mt(e,i,Ft)))return n}if(e){const{name:n,lang:i,assocLang:r,characteristics:s,audioCodec:o,channels:d}=e;for(let l=0;l<t.length;l++){const c=t[l];if(Mt({name:n,lang:i,assocLang:r,characteristics:s,audioCodec:o,channels:d},c,Ft))return l}for(let l=0;l<t.length;l++){const c=t[l];if(jn(e.attrs,c.attrs,["LANGUAGE","ASSOC-LANGUAGE","CHARACTERISTICS"]))return l}for(let l=0;l<t.length;l++){const c=t[l];if(jn(e.attrs,c.attrs,["LANGUAGE"]))return l}}return-1}loadPlaylist(e){super.loadPlaylist();const t=this.currentTrack;this.shouldLoadPlaylist(t)&&_i(t.url,this.hls)&&this.scheduleLoading(t,e)}loadingPlaylist(e,t){super.loadingPlaylist(e,t);const n=e.id,i=e.groupId,r=this.getUrlWithDirectives(e.url,t),s=e.details,o=s==null?void 0:s.age;this.log(`Loading audio-track ${n} "${e.name}" lang:${e.lang} group:${i}${(t==null?void 0:t.msn)!==void 0?" at sn "+t.msn+" part "+t.part:""}${o&&s.live?" age "+o.toFixed(1)+(s.type&&" "+s.type||""):""} ${r}`),this.hls.trigger(x.AUDIO_TRACK_LOADING,{url:r,id:n,groupId:i,deliveryDirectives:t||null,track:e})}}class Cf{constructor(e){this.tracks=void 0,this.queues={video:[],audio:[],audiovideo:[]},this.tracks=e}destroy(){this.tracks=this.queues=null}append(e,t,n){if(this.queues===null||this.tracks===null)return;const i=this.queues[t];i.push(e),i.length===1&&!n&&this.executeNext(t)}appendBlocker(e){return new Promise(t=>{const n={label:"async-blocker",execute:t,onStart:()=>{},onComplete:()=>{},onError:()=>{}};this.append(n,e)})}prependBlocker(e){return new Promise(t=>{if(this.queues){const n={label:"async-blocker-prepend",execute:t,onStart:()=>{},onComplete:()=>{},onError:()=>{}};this.queues[e].unshift(n)}})}removeBlockers(){this.queues!==null&&[this.queues.video,this.queues.audio,this.queues.audiovideo].forEach(e=>{var t;const n=(t=e[0])==null?void 0:t.label;(n==="async-blocker"||n==="async-blocker-prepend")&&(e[0].execute(),e.splice(0,1))})}unblockAudio(e){if(this.queues===null)return;this.queues.audio[0]===e&&this.shiftAndExecuteNext("audio")}executeNext(e){if(this.queues===null||this.tracks===null)return;const t=this.queues[e];if(t.length){const i=t[0];try{i.execute()}catch(r){var n;if(i.onError(r),this.queues===null||this.tracks===null)return;const s=(n=this.tracks[e])==null?void 0:n.buffer;s!=null&&s.updating||this.shiftAndExecuteNext(e)}}}shiftAndExecuteNext(e){this.queues!==null&&(this.queues[e].shift(),this.executeNext(e))}current(e){var t;return((t=this.queues)==null?void 0:t[e][0])||null}toString(){const{queues:e,tracks:t}=this;return e===null||t===null?"<destroyed>":`
${this.list("video")}
${this.list("audio")}
${this.list("audiovideo")}}`}list(e){var t,n;return(t=this.queues)!=null&&t[e]||(n=this.tracks)!=null&&n[e]?`${e}: (${this.listSbInfo(e)}) ${this.listOps(e)}`:""}listSbInfo(e){var t;const n=(t=this.tracks)==null?void 0:t[e],i=n==null?void 0:n.buffer;return i?`SourceBuffer${i.updating?" updating":""}${n.ended?" ended":""}${n.ending?" ending":""}`:"none"}listOps(e){var t;return((t=this.queues)==null?void 0:t[e].map(n=>n.label).join(", "))||""}}const $a=/(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/,cl="HlsJsTrackRemovedError";class Lf extends Error{constructor(e){super(e),this.name=cl}}class If extends vt{constructor(e,t){super("buffer-controller",e.logger),this.hls=void 0,this.fragmentTracker=void 0,this.details=null,this._objectUrl=null,this.operationQueue=null,this.bufferCodecEventsTotal=0,this.media=null,this.mediaSource=null,this.lastMpegAudioChunk=null,this.blockedAudioAppend=null,this.lastVideoAppendEnd=0,this.appendSource=void 0,this.transferData=void 0,this.overrides=void 0,this.appendErrors={audio:0,video:0,audiovideo:0},this.tracks={},this.sourceBuffers=[[null,null],[null,null]],this._onEndStreaming=n=>{var i;this.hls&&((i=this.mediaSource)==null?void 0:i.readyState)==="open"&&this.hls.pauseBuffering()},this._onStartStreaming=n=>{this.hls&&this.hls.resumeBuffering()},this._onMediaSourceOpen=n=>{const{media:i,mediaSource:r}=this;n&&this.log("Media source opened"),!(!i||!r)&&(r.removeEventListener("sourceopen",this._onMediaSourceOpen),i.removeEventListener("emptied",this._onMediaEmptied),this.updateDuration(),this.hls.trigger(x.MEDIA_ATTACHED,{media:i,mediaSource:r}),this.mediaSource!==null&&this.checkPendingTracks())},this._onMediaSourceClose=()=>{this.log("Media source closed")},this._onMediaSourceEnded=()=>{this.log("Media source ended")},this._onMediaEmptied=()=>{const{mediaSrc:n,_objectUrl:i}=this;n!==i&&this.error(`Media element src was set while attaching MediaSource (${i} > ${n})`)},this.hls=e,this.fragmentTracker=t,this.appendSource=tu(Rt(e.config.preferManagedMediaSource)),this.initTracks(),this.registerListeners()}hasSourceTypes(){return Object.keys(this.tracks).length>0}destroy(){this.unregisterListeners(),this.details=null,this.lastMpegAudioChunk=this.blockedAudioAppend=null,this.transferData=this.overrides=void 0,this.operationQueue&&(this.operationQueue.destroy(),this.operationQueue=null),this.hls=this.fragmentTracker=null,this._onMediaSourceOpen=this._onMediaSourceClose=null,this._onMediaSourceEnded=null,this._onStartStreaming=this._onEndStreaming=null}registerListeners(){const{hls:e}=this;e.on(x.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.MANIFEST_PARSED,this.onManifestParsed,this),e.on(x.BUFFER_RESET,this.onBufferReset,this),e.on(x.BUFFER_APPENDING,this.onBufferAppending,this),e.on(x.BUFFER_CODECS,this.onBufferCodecs,this),e.on(x.BUFFER_EOS,this.onBufferEos,this),e.on(x.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(x.LEVEL_UPDATED,this.onLevelUpdated,this),e.on(x.FRAG_PARSED,this.onFragParsed,this),e.on(x.FRAG_CHANGED,this.onFragChanged,this),e.on(x.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e.off(x.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.MANIFEST_PARSED,this.onManifestParsed,this),e.off(x.BUFFER_RESET,this.onBufferReset,this),e.off(x.BUFFER_APPENDING,this.onBufferAppending,this),e.off(x.BUFFER_CODECS,this.onBufferCodecs,this),e.off(x.BUFFER_EOS,this.onBufferEos,this),e.off(x.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(x.LEVEL_UPDATED,this.onLevelUpdated,this),e.off(x.FRAG_PARSED,this.onFragParsed,this),e.off(x.FRAG_CHANGED,this.onFragChanged,this),e.off(x.ERROR,this.onError,this)}transferMedia(){const{media:e,mediaSource:t}=this;if(!e)return null;const n={};if(this.operationQueue){const r=this.isUpdating();r||this.operationQueue.removeBlockers();const s=this.isQueued();(r||s)&&this.warn(`Transfering MediaSource with${s?" operations in queue":""}${r?" updating SourceBuffer(s)":""} ${this.operationQueue}`),this.operationQueue.destroy()}const i=this.transferData;return!this.sourceBufferCount&&i&&i.mediaSource===t?Se(n,i.tracks):this.sourceBuffers.forEach(r=>{const[s]=r;s&&(n[s]=Se({},this.tracks[s]),this.removeBuffer(s)),r[0]=r[1]=null}),{media:e,mediaSource:t,tracks:n}}initTracks(){const e={};this.sourceBuffers=[[null,null],[null,null]],this.tracks=e,this.resetQueue(),this.resetAppendErrors(),this.lastMpegAudioChunk=this.blockedAudioAppend=null,this.lastVideoAppendEnd=0}onManifestLoading(){this.bufferCodecEventsTotal=0,this.details=null}onManifestParsed(e,t){var n;let i=2;(t.audio&&!t.video||!t.altAudio)&&(i=1),this.bufferCodecEventsTotal=i,this.log(`${i} bufferCodec event(s) expected.`),(n=this.transferData)!=null&&n.mediaSource&&this.sourceBufferCount&&i&&this.bufferCreated()}onMediaAttaching(e,t){const n=this.media=t.media,i=Rt(this.appendSource);if(this.transferData=this.overrides=void 0,n&&i){const r=!!t.mediaSource;(r||t.overrides)&&(this.transferData=t,this.overrides=t.overrides);const s=this.mediaSource=t.mediaSource||new i;if(this.assignMediaSource(s),r)this._objectUrl=n.src,this.attachTransferred();else{const o=this._objectUrl=self.URL.createObjectURL(s);if(this.appendSource)try{n.removeAttribute("src");const d=self.ManagedMediaSource;n.disableRemotePlayback=n.disableRemotePlayback||d&&s instanceof d,Ga(n),kf(n,o),n.load()}catch{n.src=o}else n.src=o}n.addEventListener("emptied",this._onMediaEmptied)}}assignMediaSource(e){var t,n;this.log(`${((t=this.transferData)==null?void 0:t.mediaSource)===e?"transferred":"created"} media source: ${(n=e.constructor)==null?void 0:n.name}`),e.addEventListener("sourceopen",this._onMediaSourceOpen),e.addEventListener("sourceended",this._onMediaSourceEnded),e.addEventListener("sourceclose",this._onMediaSourceClose),this.appendSource&&(e.addEventListener("startstreaming",this._onStartStreaming),e.addEventListener("endstreaming",this._onEndStreaming))}attachTransferred(){const e=this.media,t=this.transferData;if(!t||!e)return;const n=this.tracks,i=t.tracks,r=i?Object.keys(i):null,s=r?r.length:0,o=()=>{this.media&&this.mediaSourceOpenOrEnded&&this._onMediaSourceOpen()};if(i&&r&&s){if(!this.tracksReady){this.hls.config.startFragPrefetch=!0,this.log("attachTransferred: waiting for SourceBuffer track info");return}if(this.log(`attachTransferred: (bufferCodecEventsTotal ${this.bufferCodecEventsTotal})
required tracks: ${Ie(n,(d,l)=>d==="initSegment"?void 0:l)};
transfer tracks: ${Ie(i,(d,l)=>d==="initSegment"?void 0:l)}}`),!co(i,n)){t.mediaSource=null,t.tracks=void 0;const d=e.currentTime,l=this.details,c=Math.max(d,(l==null?void 0:l.fragments[0].start)||0);if(c-d>1){this.log(`attachTransferred: waiting for playback to reach new tracks start time ${d} -> ${c}`);return}this.warn(`attachTransferred: resetting MediaSource for incompatible tracks ("${Object.keys(i)}"->"${Object.keys(n)}") start time: ${c} currentTime: ${d}`),this.onMediaDetaching(x.MEDIA_DETACHING,{}),this.onMediaAttaching(x.MEDIA_ATTACHING,t),e.currentTime=c;return}this.transferData=void 0,r.forEach(d=>{const l=d,c=i[l];if(c){const u=c.buffer;if(u){const h=this.fragmentTracker,m=c.id;if(h.hasFragments(m)||h.hasParts(m)){const E=he.getBuffered(u);h.detectEvictedFragments(l,E,m,null,!0)}const g=Ar(l),v=[l,u];this.sourceBuffers[g]=v,u.updating&&this.operationQueue&&this.operationQueue.prependBlocker(l),this.trackSourceBuffer(l,c)}}}),o(),this.bufferCreated()}else this.log("attachTransferred: MediaSource w/o SourceBuffers"),o()}get mediaSourceOpenOrEnded(){var e;const t=(e=this.mediaSource)==null?void 0:e.readyState;return t==="open"||t==="ended"}onMediaDetaching(e,t){const n=!!t.transferMedia;this.transferData=this.overrides=void 0;const{media:i,mediaSource:r,_objectUrl:s}=this;if(r){if(this.log(`media source ${n?"transferring":"detaching"}`),n)this.sourceBuffers.forEach(([o])=>{o&&this.removeBuffer(o)}),this.resetQueue();else{if(this.mediaSourceOpenOrEnded){const o=r.readyState==="open";try{const d=r.sourceBuffers;for(let l=d.length;l--;)o&&d[l].abort(),r.removeSourceBuffer(d[l]);o&&r.endOfStream()}catch(d){this.warn(`onMediaDetaching: ${d.message} while calling endOfStream`)}}this.sourceBufferCount&&this.onBufferReset()}r.removeEventListener("sourceopen",this._onMediaSourceOpen),r.removeEventListener("sourceended",this._onMediaSourceEnded),r.removeEventListener("sourceclose",this._onMediaSourceClose),this.appendSource&&(r.removeEventListener("startstreaming",this._onStartStreaming),r.removeEventListener("endstreaming",this._onEndStreaming)),this.mediaSource=null,this._objectUrl=null}i&&(i.removeEventListener("emptied",this._onMediaEmptied),n||(s&&self.URL.revokeObjectURL(s),this.mediaSrc===s?(i.removeAttribute("src"),this.appendSource&&Ga(i),i.load()):this.warn("media|source.src was changed by a third party - skip cleanup")),this.media=null),this.hls.trigger(x.MEDIA_DETACHED,t)}onBufferReset(){this.sourceBuffers.forEach(([e])=>{e&&this.resetBuffer(e)}),this.initTracks()}resetBuffer(e){var t;const n=(t=this.tracks[e])==null?void 0:t.buffer;if(this.removeBuffer(e),n)try{var i;(i=this.mediaSource)!=null&&i.sourceBuffers.length&&this.mediaSource.removeSourceBuffer(n)}catch(r){this.warn(`onBufferReset ${e}`,r)}delete this.tracks[e]}removeBuffer(e){this.removeBufferListeners(e),this.sourceBuffers[Ar(e)]=[null,null];const t=this.tracks[e];t&&(t.buffer=void 0)}resetQueue(){this.operationQueue&&this.operationQueue.destroy(),this.operationQueue=new Cf(this.tracks)}onBufferCodecs(e,t){const n=this.tracks,i=Object.keys(t);this.log(`BUFFER_CODECS: "${i}" (current SB count ${this.sourceBufferCount})`);const r="audiovideo"in t&&(n.audio||n.video)||n.audiovideo&&("audio"in t||"video"in t),s=!r&&this.sourceBufferCount&&this.media&&i.some(o=>!n[o]);if(r||s){this.warn(`Unsupported transition between "${Object.keys(n)}" and "${i}" SourceBuffers`);return}i.forEach(o=>{var d,l,c;const u=t[o],{id:h,codec:m,levelCodec:g,container:v,metadata:E,supplemental:C}=u;let I=n[o];const L=(d=this.transferData)==null||(l=d.tracks)==null?void 0:l[o],R=L!=null&&L.buffer?L:I,_=(R==null?void 0:R.pendingCodec)||(R==null?void 0:R.codec),N=R==null?void 0:R.levelCodec;I||(I=n[o]={buffer:void 0,listeners:[],codec:m,supplemental:C,container:v,levelCodec:g,metadata:E,id:h});const P=bi(_,N),O=P==null?void 0:P.replace($a,"$1");let U=bi(m,g);const D=(c=U)==null?void 0:c.replace($a,"$1");U&&P&&O!==D&&(o.slice(0,5)==="audio"&&(U=Ri(U,this.appendSource)),this.log(`switching codec ${_} to ${U}`),U!==(I.pendingCodec||I.codec)&&(I.pendingCodec=U),I.container=v,this.appendChangeType(o,v,U))}),(this.tracksReady||this.sourceBufferCount)&&(t.tracks=this.sourceBufferTracks),!this.sourceBufferCount&&this.mediaSourceOpenOrEnded&&this.checkPendingTracks()}get sourceBufferTracks(){return Object.keys(this.tracks).reduce((e,t)=>{const n=this.tracks[t];return e[t]={id:n.id,container:n.container,codec:n.codec,levelCodec:n.levelCodec},e},{})}appendChangeType(e,t,n){const i=`${t};codecs=${n}`,r={label:`change-type=${i}`,execute:()=>{const s=this.tracks[e];if(s){const o=s.buffer;o!=null&&o.changeType&&(this.log(`changing ${e} sourceBuffer type to ${i}`),o.changeType(i),s.codec=n,s.container=t)}this.shiftAndExecuteNext(e)},onStart:()=>{},onComplete:()=>{},onError:s=>{this.warn(`Failed to change ${e} SourceBuffer type`,s)}};this.append(r,e,this.isPending(this.tracks[e]))}blockAudio(e){var t;const n=e.start,i=n+e.duration*.05;if(((t=this.fragmentTracker.getAppendedFrag(n,re.MAIN))==null?void 0:t.gap)===!0)return;const s={label:"block-audio",execute:()=>{var o;const d=this.tracks.video;(this.lastVideoAppendEnd>i||d!=null&&d.buffer&&he.isBuffered(d.buffer,i)||((o=this.fragmentTracker.getAppendedFrag(i,re.MAIN))==null?void 0:o.gap)===!0)&&(this.blockedAudioAppend=null,this.shiftAndExecuteNext("audio"))},onStart:()=>{},onComplete:()=>{},onError:o=>{this.warn("Error executing block-audio operation",o)}};this.blockedAudioAppend={op:s,frag:e},this.append(s,"audio",!0)}unblockAudio(){const{blockedAudioAppend:e,operationQueue:t}=this;e&&t&&(this.blockedAudioAppend=null,t.unblockAudio(e.op))}onBufferAppending(e,t){const{tracks:n}=this,{data:i,type:r,parent:s,frag:o,part:d,chunkMeta:l}=t,c=l.buffering[r],u=o.sn,h=self.performance.now();c.start=h;const m=o.stats.buffering,g=d?d.stats.buffering:null;m.start===0&&(m.start=h),g&&g.start===0&&(g.start=h);const v=n.audio;let E=!1;r==="audio"&&(v==null?void 0:v.container)==="audio/mpeg"&&(E=!this.lastMpegAudioChunk||l.id===1||this.lastMpegAudioChunk.sn!==l.sn,this.lastMpegAudioChunk=l);const C=this.tracks.video,I=C==null?void 0:C.buffer;if(I&&u!=="initSegment"){const _=d||o,N=this.blockedAudioAppend;if(r==="audio"&&s!=="main"&&!this.blockedAudioAppend){const O=_.start+_.duration*.05,U=I.buffered,D=this.currentOp("video");!U.length&&!D?this.blockAudio(_):!D&&!he.isBuffered(I,O)&&this.lastVideoAppendEnd<O&&this.blockAudio(_)}else if(r==="video"){const P=_.end;if(N){const O=N.frag.start;(P>O||P<this.lastVideoAppendEnd||he.isBuffered(I,O))&&this.unblockAudio()}this.lastVideoAppendEnd=P}}const L=(d||o).start,R={label:`append-${r}`,execute:()=>{if(c.executeStart=self.performance.now(),E){const _=this.tracks[r];if(_){const N=_.buffer;if(N){const P=L-N.timestampOffset;Math.abs(P)>=.1&&(this.log(`Updating audio SourceBuffer timestampOffset to ${L} (delta: ${P}) sn: ${u})`),N.timestampOffset=L)}}}this.appendExecutor(i,r)},onStart:()=>{},onComplete:()=>{const _=self.performance.now();c.executeEnd=c.end=_,m.first===0&&(m.first=_),g&&g.first===0&&(g.first=_);const N={};this.sourceBuffers.forEach(([P,O])=>{P&&(N[P]=he.getBuffered(O))}),this.appendErrors[r]=0,r==="audio"||r==="video"?this.appendErrors.audiovideo=0:(this.appendErrors.audio=0,this.appendErrors.video=0),this.hls.trigger(x.BUFFER_APPENDED,{type:r,frag:o,part:d,chunkMeta:l,parent:o.type,timeRanges:N})},onError:_=>{var N;const P={type:oe.MEDIA_ERROR,parent:o.type,details:F.BUFFER_APPEND_ERROR,sourceBufferName:r,frag:o,part:d,chunkMeta:l,error:_,err:_,fatal:!1},O=(N=this.media)==null?void 0:N.error;if(_.code===DOMException.QUOTA_EXCEEDED_ERR)P.details=F.BUFFER_FULL_ERROR;else if(_.code===DOMException.INVALID_STATE_ERR&&this.mediaSourceOpenOrEnded&&!O)P.errorAction=Kn(!0);else if(_.name===cl&&this.sourceBufferCount===0)P.errorAction=Kn(!0);else{const U=++this.appendErrors[r];this.warn(`Failed ${U}/${this.hls.config.appendErrorMaxRetry} times to append segment in "${r}" sourceBuffer (${O||"no media error"})`),(U>=this.hls.config.appendErrorMaxRetry||O)&&(P.fatal=!0)}this.hls.trigger(x.ERROR,P)}};this.append(R,r,this.isPending(this.tracks[r]))}getFlushOp(e,t,n){return this.log(`queuing "${e}" remove ${t}-${n}`),{label:"remove",execute:()=>{this.removeExecutor(e,t,n)},onStart:()=>{},onComplete:()=>{this.hls.trigger(x.BUFFER_FLUSHED,{type:e})},onError:i=>{this.warn(`Failed to remove ${t}-${n} from "${e}" SourceBuffer`,i)}}}onBufferFlushing(e,t){const{type:n,startOffset:i,endOffset:r}=t;n?this.append(this.getFlushOp(n,i,r),n):this.sourceBuffers.forEach(([s])=>{s&&this.append(this.getFlushOp(s,i,r),s)})}onFragParsed(e,t){const{frag:n,part:i}=t,r=[],s=i?i.elementaryStreams:n.elementaryStreams;s[Le.AUDIOVIDEO]?r.push("audiovideo"):(s[Le.AUDIO]&&r.push("audio"),s[Le.VIDEO]&&r.push("video"));const o=()=>{const d=self.performance.now();n.stats.buffering.end=d,i&&(i.stats.buffering.end=d);const l=i?i.stats:n.stats;this.hls.trigger(x.FRAG_BUFFERED,{frag:n,part:i,stats:l,id:n.type})};r.length===0&&this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${n.type} level: ${n.level} sn: ${n.sn}`),this.blockBuffers(o,r).catch(d=>{this.warn(`Fragment buffered callback ${d}`),this.stepOperationQueue(this.sourceBufferTypes)})}onFragChanged(e,t){this.trimBuffers()}get bufferedToEnd(){return this.sourceBufferCount>0&&!this.sourceBuffers.some(([e])=>{var t,n;return e&&(!((t=this.tracks[e])!=null&&t.ended)||((n=this.tracks[e])==null?void 0:n.ending))})}onBufferEos(e,t){var n;this.sourceBuffers.forEach(([s])=>{if(s){const o=this.tracks[s];(!t.type||t.type===s)&&(o.ending=!0,o.ended||(o.ended=!0,this.log(`${s} buffer reached EOS`)))}});const i=((n=this.overrides)==null?void 0:n.endOfStream)!==!1;this.sourceBufferCount>0&&!this.sourceBuffers.some(([s])=>{var o;return s&&!((o=this.tracks[s])!=null&&o.ended)})&&(i?(this.log("Queueing EOS"),this.blockUntilOpen(()=>{this.tracksEnded();const{mediaSource:s}=this;if(!s||s.readyState!=="open"){s&&this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${s.readyState}`);return}this.log("Calling mediaSource.endOfStream()"),s.endOfStream(),this.hls.trigger(x.BUFFERED_TO_END,void 0)})):(this.tracksEnded(),this.hls.trigger(x.BUFFERED_TO_END,void 0)))}tracksEnded(){this.sourceBuffers.forEach(([e])=>{if(e!==null){const t=this.tracks[e];t&&(t.ending=!1)}})}onLevelUpdated(e,{details:t}){t.fragments.length&&(this.details=t,this.updateDuration())}updateDuration(){const e=this.getDurationAndRange();e&&this.blockUntilOpen(()=>this.updateMediaSource(e))}onError(e,t){if(t.details===F.BUFFER_APPEND_ERROR&&t.frag){var n;const i=(n=t.errorAction)==null?void 0:n.nextAutoLevel;Z(i)&&i!==t.frag.level&&this.resetAppendErrors()}}resetAppendErrors(){this.appendErrors={audio:0,video:0,audiovideo:0}}trimBuffers(){const{hls:e,details:t,media:n}=this;if(!n||t===null||!this.sourceBufferCount)return;const i=e.config,r=n.currentTime,s=t.levelTargetDuration,o=t.live&&i.liveBackBufferLength!==null?i.liveBackBufferLength:i.backBufferLength;if(Z(o)&&o>=0){const d=Math.max(o,s),l=Math.floor(r/s)*s-d;this.flushBackBuffer(r,s,l)}if(Z(i.frontBufferFlushThreshold)&&i.frontBufferFlushThreshold>0){const d=Math.max(i.maxBufferLength,i.frontBufferFlushThreshold),l=Math.max(d,s),c=Math.floor(r/s)*s+l;this.flushFrontBuffer(r,s,c)}}flushBackBuffer(e,t,n){this.sourceBuffers.forEach(([i,r])=>{if(r){const o=he.getBuffered(r);if(o.length>0&&n>o.start(0)){var s;this.hls.trigger(x.BACK_BUFFER_REACHED,{bufferEnd:n});const d=this.tracks[i];if((s=this.details)!=null&&s.live)this.hls.trigger(x.LIVE_BACK_BUFFER_REACHED,{bufferEnd:n});else if(d!=null&&d.ended){this.log(`Cannot flush ${i} back buffer while SourceBuffer is in ended state`);return}this.hls.trigger(x.BUFFER_FLUSHING,{startOffset:0,endOffset:n,type:i})}}})}flushFrontBuffer(e,t,n){this.sourceBuffers.forEach(([i,r])=>{if(r){const s=he.getBuffered(r),o=s.length;if(o<2)return;const d=s.start(o-1),l=s.end(o-1);if(n>d||e>=d&&e<=l)return;this.hls.trigger(x.BUFFER_FLUSHING,{startOffset:d,endOffset:1/0,type:i})}})}getDurationAndRange(){var e;const{details:t,mediaSource:n}=this;if(!t||!this.media||(n==null?void 0:n.readyState)!=="open")return null;const i=t.edge;if(t.live&&this.hls.config.liveDurationInfinity){if(t.fragments.length&&t.live&&n.setLiveSeekableRange){const l=Math.max(0,t.fragmentStart),c=Math.max(l,i);return{duration:1/0,start:l,end:c}}return{duration:1/0}}const r=(e=this.overrides)==null?void 0:e.duration;if(r)return Z(r)?{duration:r}:null;const s=this.media.duration,o=Z(n.duration)?n.duration:0;return i>o&&i>s||!Z(s)?{duration:i}:null}updateMediaSource({duration:e,start:t,end:n}){const i=this.mediaSource;!this.media||!i||i.readyState!=="open"||(i.duration!==e&&(Z(e)&&this.log(`Updating MediaSource duration to ${e.toFixed(3)}`),i.duration=e),t!==void 0&&n!==void 0&&(this.log(`MediaSource duration is set to ${i.duration}. Setting seekable range to ${t}-${n}.`),i.setLiveSeekableRange(t,n)))}get tracksReady(){const e=this.pendingTrackCount;return e>0&&(e>=this.bufferCodecEventsTotal||this.isPending(this.tracks.audiovideo))}checkPendingTracks(){const{bufferCodecEventsTotal:e,pendingTrackCount:t,tracks:n}=this;if(this.log(`checkPendingTracks (pending: ${t} codec events expected: ${e}) ${Ie(n)}`),this.tracksReady){var i;const r=(i=this.transferData)==null?void 0:i.tracks;r&&Object.keys(r).length?this.attachTransferred():this.createSourceBuffers()}}bufferCreated(){if(this.sourceBufferCount){const e={};this.sourceBuffers.forEach(([t,n])=>{if(t){const i=this.tracks[t];e[t]={buffer:n,container:i.container,codec:i.codec,supplemental:i.supplemental,levelCodec:i.levelCodec,id:i.id,metadata:i.metadata}}}),this.hls.trigger(x.BUFFER_CREATED,{tracks:e}),this.log(`SourceBuffers created. Running queue: ${this.operationQueue}`),this.sourceBuffers.forEach(([t])=>{this.executeNext(t)})}else{const e=new Error("could not create source buffer for media codec(s)");this.hls.trigger(x.ERROR,{type:oe.MEDIA_ERROR,details:F.BUFFER_INCOMPATIBLE_CODECS_ERROR,fatal:!0,error:e,reason:e.message})}}createSourceBuffers(){const{tracks:e,sourceBuffers:t,mediaSource:n}=this;if(!n)throw new Error("createSourceBuffers called when mediaSource was null");for(const r in e){const s=r,o=e[s];if(this.isPending(o)){const d=this.getTrackCodec(o,s),l=`${o.container};codecs=${d}`;o.codec=d,this.log(`creating sourceBuffer(${l})${this.currentOp(s)?" Queued":""} ${Ie(o)}`);try{const c=n.addSourceBuffer(l),u=Ar(s),h=[s,c];t[u]=h,o.buffer=c}catch(c){var i;this.error(`error while trying to add sourceBuffer: ${c.message}`),this.shiftAndExecuteNext(s),(i=this.operationQueue)==null||i.removeBlockers(),delete this.tracks[s],this.hls.trigger(x.ERROR,{type:oe.MEDIA_ERROR,details:F.BUFFER_ADD_CODEC_ERROR,fatal:!1,error:c,sourceBufferName:s,mimeType:l,parent:o.id});return}this.trackSourceBuffer(s,o)}}this.bufferCreated()}getTrackCodec(e,t){const n=e.supplemental;let i=e.codec;n&&(t==="video"||t==="audiovideo")&&Dr(n,"video")&&(i=Su(i,n));const r=bi(i,e.levelCodec);return r?t.slice(0,5)==="audio"?Ri(r,this.appendSource):r:""}trackSourceBuffer(e,t){const n=t.buffer;if(!n)return;const i=this.getTrackCodec(t,e);this.tracks[e]={buffer:n,codec:i,container:t.container,levelCodec:t.levelCodec,supplemental:t.supplemental,metadata:t.metadata,id:t.id,listeners:[]},this.removeBufferListeners(e),this.addBufferListener(e,"updatestart",this.onSBUpdateStart),this.addBufferListener(e,"updateend",this.onSBUpdateEnd),this.addBufferListener(e,"error",this.onSBUpdateError),this.appendSource&&this.addBufferListener(e,"bufferedchange",(r,s)=>{const o=s.removedRanges;o!=null&&o.length&&this.hls.trigger(x.BUFFER_FLUSHED,{type:r})})}get mediaSrc(){var e,t;const n=((e=this.media)==null||(t=e.querySelector)==null?void 0:t.call(e,"source"))||this.media;return n==null?void 0:n.src}onSBUpdateStart(e){const t=this.currentOp(e);t&&t.onStart()}onSBUpdateEnd(e){var t;if(((t=this.mediaSource)==null?void 0:t.readyState)==="closed"){this.resetBuffer(e);return}const n=this.currentOp(e);n&&(n.onComplete(),this.shiftAndExecuteNext(e))}onSBUpdateError(e,t){var n;const i=new Error(`${e} SourceBuffer error. MediaSource readyState: ${(n=this.mediaSource)==null?void 0:n.readyState}`);this.error(`${i}`,t),this.hls.trigger(x.ERROR,{type:oe.MEDIA_ERROR,details:F.BUFFER_APPENDING_ERROR,sourceBufferName:e,error:i,fatal:!1});const r=this.currentOp(e);r&&r.onError(i)}removeExecutor(e,t,n){const{media:i,mediaSource:r}=this,s=this.tracks[e],o=s==null?void 0:s.buffer;if(!i||!r||!o){this.warn(`Attempting to remove from the ${e} SourceBuffer, but it does not exist`),this.shiftAndExecuteNext(e);return}const d=Z(i.duration)?i.duration:1/0,l=Z(r.duration)?r.duration:1/0,c=Math.max(0,t),u=Math.min(n,d,l);u>c&&(!s.ending||s.ended)?(s.ended=!1,this.log(`Removing [${c},${u}] from the ${e} SourceBuffer`),o.remove(c,u)):this.shiftAndExecuteNext(e)}appendExecutor(e,t){const n=this.tracks[t],i=n==null?void 0:n.buffer;if(!i)throw new Lf(`Attempting to append to the ${t} SourceBuffer, but it does not exist`);n.ending=!1,n.ended=!1,i.appendBuffer(e)}blockUntilOpen(e){if(this.isUpdating()||this.isQueued())this.blockBuffers(e).catch(t=>{this.warn(`SourceBuffer blocked callback ${t}`),this.stepOperationQueue(this.sourceBufferTypes)});else try{e()}catch(t){this.warn(`Callback run without blocking ${this.operationQueue} ${t}`)}}isUpdating(){return this.sourceBuffers.some(([e,t])=>e&&t.updating)}isQueued(){return this.sourceBuffers.some(([e])=>e&&!!this.currentOp(e))}isPending(e){return!!e&&!e.buffer}blockBuffers(e,t=this.sourceBufferTypes){if(!t.length)return this.log("Blocking operation requested, but no SourceBuffers exist"),Promise.resolve().then(e);const{operationQueue:n}=this,i=t.map(s=>this.appendBlocker(s));return t.length>1&&!!this.blockedAudioAppend&&this.unblockAudio(),Promise.all(i).then(s=>{n===this.operationQueue&&(e(),this.stepOperationQueue(this.sourceBufferTypes))})}stepOperationQueue(e){e.forEach(t=>{var n;const i=(n=this.tracks[t])==null?void 0:n.buffer;!i||i.updating||this.shiftAndExecuteNext(t)})}append(e,t,n){this.operationQueue&&this.operationQueue.append(e,t,n)}appendBlocker(e){if(this.operationQueue)return this.operationQueue.appendBlocker(e)}currentOp(e){return this.operationQueue?this.operationQueue.current(e):null}executeNext(e){e&&this.operationQueue&&this.operationQueue.executeNext(e)}shiftAndExecuteNext(e){this.operationQueue&&this.operationQueue.shiftAndExecuteNext(e)}get pendingTrackCount(){return Object.keys(this.tracks).reduce((e,t)=>e+(this.isPending(this.tracks[t])?1:0),0)}get sourceBufferCount(){return this.sourceBuffers.reduce((e,[t])=>e+(t?1:0),0)}get sourceBufferTypes(){return this.sourceBuffers.map(([e])=>e).filter(e=>!!e)}addBufferListener(e,t,n){const i=this.tracks[e];if(!i)return;const r=i.buffer;if(!r)return;const s=n.bind(this,e);i.listeners.push({event:t,listener:s}),r.addEventListener(t,s)}removeBufferListeners(e){const t=this.tracks[e];if(!t)return;const n=t.buffer;n&&(t.listeners.forEach(i=>{n.removeEventListener(i.event,i.listener)}),t.listeners.length=0)}}function Ga(a){const e=a.querySelectorAll("source");[].slice.call(e).forEach(t=>{a.removeChild(t)})}function kf(a,e){const t=self.document.createElement("source");t.type="video/mp4",t.src=e,a.appendChild(t)}function Ar(a){return a==="audio"?1:0}class ds{constructor(e){this.hls=void 0,this.autoLevelCapping=void 0,this.firstLevel=void 0,this.media=void 0,this.restrictedLevels=void 0,this.timer=void 0,this.clientRect=void 0,this.streamController=void 0,this.hls=e,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.firstLevel=-1,this.media=null,this.restrictedLevels=[],this.timer=void 0,this.clientRect=null,this.registerListeners()}setStreamController(e){this.streamController=e}destroy(){this.hls&&this.unregisterListener(),this.timer&&this.stopCapping(),this.media=null,this.clientRect=null,this.hls=this.streamController=null}registerListeners(){const{hls:e}=this;e.on(x.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),e.on(x.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(x.MANIFEST_PARSED,this.onManifestParsed,this),e.on(x.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(x.BUFFER_CODECS,this.onBufferCodecs,this),e.on(x.MEDIA_DETACHING,this.onMediaDetaching,this)}unregisterListener(){const{hls:e}=this;e.off(x.FPS_DROP_LEVEL_CAPPING,this.onFpsDropLevelCapping,this),e.off(x.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(x.MANIFEST_PARSED,this.onManifestParsed,this),e.off(x.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(x.BUFFER_CODECS,this.onBufferCodecs,this),e.off(x.MEDIA_DETACHING,this.onMediaDetaching,this)}onFpsDropLevelCapping(e,t){const n=this.hls.levels[t.droppedLevel];this.isLevelAllowed(n)&&this.restrictedLevels.push({bitrate:n.bitrate,height:n.height,width:n.width})}onMediaAttaching(e,t){this.media=t.media instanceof HTMLVideoElement?t.media:null,this.clientRect=null,this.timer&&this.hls.levels.length&&this.detectPlayerSize()}onManifestParsed(e,t){const n=this.hls;this.restrictedLevels=[],this.firstLevel=t.firstLevel,n.config.capLevelToPlayerSize&&t.video&&this.startCapping()}onLevelsUpdated(e,t){this.timer&&Z(this.autoLevelCapping)&&this.detectPlayerSize()}onBufferCodecs(e,t){this.hls.config.capLevelToPlayerSize&&t.video&&this.startCapping()}onMediaDetaching(){this.stopCapping(),this.media=null}detectPlayerSize(){if(this.media){if(this.mediaHeight<=0||this.mediaWidth<=0){this.clientRect=null;return}const e=this.hls.levels;if(e.length){const t=this.hls,n=this.getMaxLevel(e.length-1);n!==this.autoLevelCapping&&t.logger.log(`Setting autoLevelCapping to ${n}: ${e[n].height}p@${e[n].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`),t.autoLevelCapping=n,t.autoLevelEnabled&&t.autoLevelCapping>this.autoLevelCapping&&this.streamController&&this.streamController.nextLevelSwitch(),this.autoLevelCapping=t.autoLevelCapping}}}getMaxLevel(e){const t=this.hls.levels;if(!t.length)return-1;const n=t.filter((i,r)=>this.isLevelAllowed(i)&&r<=e);return this.clientRect=null,ds.getMaxLevelByMediaSize(n,this.mediaWidth,this.mediaHeight)}startCapping(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,self.clearInterval(this.timer),this.timer=self.setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())}stopCapping(){this.restrictedLevels=[],this.firstLevel=-1,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(self.clearInterval(this.timer),this.timer=void 0)}getDimensions(){if(this.clientRect)return this.clientRect;const e=this.media,t={width:0,height:0};if(e){const n=e.getBoundingClientRect();t.width=n.width,t.height=n.height,!t.width&&!t.height&&(t.width=n.right-n.left||e.width||0,t.height=n.bottom-n.top||e.height||0)}return this.clientRect=t,t}get mediaWidth(){return this.getDimensions().width*this.contentScaleFactor}get mediaHeight(){return this.getDimensions().height*this.contentScaleFactor}get contentScaleFactor(){let e=1;if(!this.hls.config.ignoreDevicePixelRatio)try{e=self.devicePixelRatio}catch{}return Math.min(e,this.hls.config.maxDevicePixelRatio)}isLevelAllowed(e){return!this.restrictedLevels.some(n=>e.bitrate===n.bitrate&&e.width===n.width&&e.height===n.height)}static getMaxLevelByMediaSize(e,t,n){if(!(e!=null&&e.length))return-1;const i=(o,d)=>d?o.width!==d.width||o.height!==d.height:!0;let r=e.length-1;const s=Math.max(t,n);for(let o=0;o<e.length;o+=1){const d=e[o];if((d.width>=s||d.height>=s)&&i(d,e[o+1])){r=o;break}}return r}}const wf={MANIFEST:"m",AUDIO:"a",VIDEO:"v",MUXED:"av",INIT:"i",CAPTION:"c",TIMED_TEXT:"tt",KEY:"k",OTHER:"o"},Ke=wf,Rf={HLS:"h"},Df=Rf,_f="CMCD-Object",Pf="CMCD-Request",Bf="CMCD-Session",Of="CMCD-Status",Fn={OBJECT:_f,REQUEST:Pf,SESSION:Bf,STATUS:Of},Ff={[Fn.OBJECT]:["br","d","ot","tb"],[Fn.REQUEST]:["bl","dl","mtp","nor","nrr","su"],[Fn.SESSION]:["cid","pr","sf","sid","st","v"],[Fn.STATUS]:["bs","rtp"]};class sn{constructor(e,t){Array.isArray(e)&&(e=e.map(n=>n instanceof sn?n:new sn(n))),this.value=e,this.params=t}}const Mf="Dict";function Nf(a){return Array.isArray(a)?JSON.stringify(a):a instanceof Map?"Map{}":a instanceof Set?"Set{}":typeof a=="object"?JSON.stringify(a):String(a)}function Uf(a,e,t,n){return new Error(`failed to ${a} "${Nf(e)}" as ${t}`,{cause:n})}function ut(a,e,t){return Uf("serialize",a,e,t)}class ul{constructor(e){this.description=e}}const Ka="Bare Item",$f="Boolean";function Gf(a){if(typeof a!="boolean")throw ut(a,$f);return a?"?1":"?0"}function Kf(a){return btoa(String.fromCharCode(...a))}const Hf="Byte Sequence";function Vf(a){if(ArrayBuffer.isView(a)===!1)throw ut(a,Hf);return`:${Kf(a)}:`}const qf="Integer";function Yf(a){return a<-999999999999999||999999999999999<a}function hl(a){if(Yf(a))throw ut(a,qf);return a.toString()}function jf(a){return`@${hl(a.getTime()/1e3)}`}function fl(a,e){if(a<0)return-fl(-a,e);const t=Math.pow(10,e);if(Math.abs(a*t%1-.5)<Number.EPSILON){const i=Math.floor(a*t);return(i%2===0?i:i+1)/t}else return Math.round(a*t)/t}const Wf="Decimal";function zf(a){const e=fl(a,3);if(Math.floor(Math.abs(e)).toString().length>12)throw ut(a,Wf);const t=e.toString();return t.includes(".")?t:`${t}.0`}const Qf="String",Xf=/[\x00-\x1f\x7f]+/;function Zf(a){if(Xf.test(a))throw ut(a,Qf);return`"${a.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`}function Jf(a){return a.description||a.toString().slice(7,-1)}const ep="Token";function Ha(a){const e=Jf(a);if(/^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(e)===!1)throw ut(e,ep);return e}function $r(a){switch(typeof a){case"number":if(!Z(a))throw ut(a,Ka);return Number.isInteger(a)?hl(a):zf(a);case"string":return Zf(a);case"symbol":return Ha(a);case"boolean":return Gf(a);case"object":if(a instanceof Date)return jf(a);if(a instanceof Uint8Array)return Vf(a);if(a instanceof ul)return Ha(a);default:throw ut(a,Ka)}}const tp="Key";function Gr(a){if(/^[a-z*][a-z0-9\-_.*]*$/.test(a)===!1)throw ut(a,tp);return a}function cs(a){return a==null?"":Object.entries(a).map(([e,t])=>t===!0?`;${Gr(e)}`:`;${Gr(e)}=${$r(t)}`).join("")}function pl(a){return a instanceof sn?`${$r(a.value)}${cs(a.params)}`:$r(a)}function np(a){return`(${a.value.map(pl).join(" ")})${cs(a.params)}`}function ip(a,e={whitespace:!0}){if(typeof a!="object")throw ut(a,Mf);const t=a instanceof Map?a.entries():Object.entries(a),n=e!=null&&e.whitespace?" ":"";return Array.from(t).map(([i,r])=>{r instanceof sn||(r=new sn(r));let s=Gr(i);return r.value===!0?s+=cs(r.params):(s+="=",Array.isArray(r.value)?s+=np(r):s+=pl(r)),s}).join(`,${n}`)}function rp(a,e){return ip(a,e)}function sp(a){return a==="ot"||a==="sf"||a==="st"}function ap(a){return typeof a=="number"?Z(a):a!=null&&a!==""&&a!==!1}function op(a,e){const t=new URL(a),n=new URL(e);if(t.origin!==n.origin)return a;const i=t.pathname.split("/").slice(1),r=n.pathname.split("/").slice(1,-1);for(;i[0]===r[0];)i.shift(),r.shift();for(;r.length;)r.shift(),i.unshift("..");return i.join("/")}const Ci=a=>Math.round(a),lp=(a,e)=>(e!=null&&e.baseUrl&&(a=op(a,e.baseUrl)),encodeURIComponent(a)),mi=a=>Ci(a/100)*100,dp={br:Ci,d:Ci,bl:mi,dl:mi,mtp:mi,nor:lp,rtp:mi,tb:Ci};function cp(a,e){const t={};if(a==null||typeof a!="object")return t;const n=Object.keys(a).sort(),i=Se({},dp,e==null?void 0:e.formatters),r=e==null?void 0:e.filter;return n.forEach(s=>{if(r!=null&&r(s))return;let o=a[s];const d=i[s];d&&(o=d(o,e)),!(s==="v"&&o===1)&&(s=="pr"&&o===1||ap(o)&&(sp(s)&&typeof o=="string"&&(o=new ul(o)),t[s]=o))}),t}function ml(a,e={}){return a?rp(cp(a,e),Se({whitespace:!1},e)):""}function up(a,e={}){const t={};if(!a)return t;const n=Object.entries(a),i=Object.entries(Ff).concat(Object.entries((e==null?void 0:e.customHeaderMap)||{})),r=n.reduce((s,o)=>{var d,l;const[c,u]=o,h=((d=i.find(m=>m[1].includes(c)))===null||d===void 0?void 0:d[0])||Fn.REQUEST;return(l=s[h])!==null&&l!==void 0||(s[h]={}),s[h][c]=u,s},{});return Object.entries(r).reduce((s,[o,d])=>(s[o]=ml(d,e),s),t)}function hp(a,e,t){return Se(a,up(e,t))}const fp="CMCD";function pp(a,e={}){if(!a)return"";const t=ml(a,e);return`${fp}=${encodeURIComponent(t)}`}const Va=/CMCD=[^&#]+/;function mp(a,e,t){const n=pp(e,t);if(!n)return a;if(Va.test(a))return a.replace(Va,n);const i=a.includes("?")?"&":"?";return`${a}${i}${n}`}class gp{constructor(e){this.hls=void 0,this.config=void 0,this.media=void 0,this.sid=void 0,this.cid=void 0,this.useHeaders=!1,this.includeKeys=void 0,this.initialized=!1,this.starved=!1,this.buffering=!0,this.audioBuffer=void 0,this.videoBuffer=void 0,this.onWaiting=()=>{this.initialized&&(this.starved=!0),this.buffering=!0},this.onPlaying=()=>{this.initialized||(this.initialized=!0),this.buffering=!1},this.applyPlaylistData=i=>{try{this.apply(i,{ot:Ke.MANIFEST,su:!this.initialized})}catch(r){this.hls.logger.warn("Could not generate manifest CMCD data.",r)}},this.applyFragmentData=i=>{try{const{frag:r,part:s}=i,o=this.hls.levels[r.level],d=this.getObjectType(r),l={d:(s||r).duration*1e3,ot:d};(d===Ke.VIDEO||d===Ke.AUDIO||d==Ke.MUXED)&&(l.br=o.bitrate/1e3,l.tb=this.getTopBandwidth(d)/1e3,l.bl=this.getBufferLength(d));const c=s?this.getNextPart(s):this.getNextFrag(r);c!=null&&c.url&&c.url!==r.url&&(l.nor=c.url),this.apply(i,l)}catch(r){this.hls.logger.warn("Could not generate segment CMCD data.",r)}},this.hls=e;const t=this.config=e.config,{cmcd:n}=t;n!=null&&(t.pLoader=this.createPlaylistLoader(),t.fLoader=this.createFragmentLoader(),this.sid=n.sessionId||e.sessionId,this.cid=n.contentId,this.useHeaders=n.useHeaders===!0,this.includeKeys=n.includeKeys,this.registerListeners())}registerListeners(){const e=this.hls;e.on(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(x.MEDIA_DETACHED,this.onMediaDetached,this),e.on(x.BUFFER_CREATED,this.onBufferCreated,this)}unregisterListeners(){const e=this.hls;e.off(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(x.MEDIA_DETACHED,this.onMediaDetached,this),e.off(x.BUFFER_CREATED,this.onBufferCreated,this)}destroy(){this.unregisterListeners(),this.onMediaDetached(),this.hls=this.config=this.audioBuffer=this.videoBuffer=null,this.onWaiting=this.onPlaying=this.media=null}onMediaAttached(e,t){this.media=t.media,this.media.addEventListener("waiting",this.onWaiting),this.media.addEventListener("playing",this.onPlaying)}onMediaDetached(){this.media&&(this.media.removeEventListener("waiting",this.onWaiting),this.media.removeEventListener("playing",this.onPlaying),this.media=null)}onBufferCreated(e,t){var n,i;this.audioBuffer=(n=t.tracks.audio)==null?void 0:n.buffer,this.videoBuffer=(i=t.tracks.video)==null?void 0:i.buffer}createData(){var e;return{v:1,sf:Df.HLS,sid:this.sid,cid:this.cid,pr:(e=this.media)==null?void 0:e.playbackRate,mtp:this.hls.bandwidthEstimate/1e3}}apply(e,t={}){Se(t,this.createData());const n=t.ot===Ke.INIT||t.ot===Ke.VIDEO||t.ot===Ke.MUXED;this.starved&&n&&(t.bs=!0,t.su=!0,this.starved=!1),t.su==null&&(t.su=this.buffering);const{includeKeys:i}=this;i&&(t=Object.keys(t).reduce((s,o)=>(i.includes(o)&&(s[o]=t[o]),s),{}));const r={baseUrl:e.url};this.useHeaders?(e.headers||(e.headers={}),hp(e.headers,t,r)):e.url=mp(e.url,t,r)}getNextFrag(e){var t;const n=(t=this.hls.levels[e.level])==null?void 0:t.details;if(n){const i=e.sn-n.startSN;return n.fragments[i+1]}}getNextPart(e){var t,n;const{index:i,fragment:r}=e,s=(t=this.hls.levels[r.level])==null||(n=t.details)==null?void 0:n.partList;if(s){const{sn:o}=r;for(let d=s.length-1;d>=0;d--){const l=s[d];if(l.index===i&&l.fragment.sn===o)return s[d+1]}}}getObjectType(e){const{type:t}=e;if(t==="subtitle")return Ke.TIMED_TEXT;if(e.sn==="initSegment")return Ke.INIT;if(t==="audio")return Ke.AUDIO;if(t==="main")return this.hls.audioTracks.length?Ke.VIDEO:Ke.MUXED}getTopBandwidth(e){let t=0,n;const i=this.hls;if(e===Ke.AUDIO)n=i.audioTracks;else{const r=i.maxAutoLevel,s=r>-1?r+1:i.levels.length;n=i.levels.slice(0,s)}return n.forEach(r=>{r.bitrate>t&&(t=r.bitrate)}),t>0?t:NaN}getBufferLength(e){const t=this.media,n=e===Ke.AUDIO?this.audioBuffer:this.videoBuffer;return!n||!t?NaN:he.bufferInfo(n,t.currentTime,this.config.maxBufferHole).len*1e3}createPlaylistLoader(){const{pLoader:e}=this.config,t=this.applyPlaylistData,n=e||this.config.loader;return class{constructor(r){this.loader=void 0,this.loader=new n(r)}get stats(){return this.loader.stats}get context(){return this.loader.context}destroy(){this.loader.destroy()}abort(){this.loader.abort()}load(r,s,o){t(r),this.loader.load(r,s,o)}}}createFragmentLoader(){const{fLoader:e}=this.config,t=this.applyFragmentData,n=e||this.config.loader;return class{constructor(r){this.loader=void 0,this.loader=new n(r)}get stats(){return this.loader.stats}get context(){return this.loader.context}destroy(){this.loader.destroy()}abort(){this.loader.abort()}load(r,s,o){t(r),this.loader.load(r,s,o)}}}}const yp=3e5;class Ap extends vt{constructor(e){super("content-steering",e.logger),this.hls=void 0,this.loader=null,this.uri=null,this.pathwayId=".",this._pathwayPriority=null,this.timeToLoad=300,this.reloadTimer=-1,this.updated=0,this.started=!1,this.enabled=!0,this.levels=null,this.audioTracks=null,this.subtitleTracks=null,this.penalizedPathways={},this.hls=e,this.registerListeners()}registerListeners(){const e=this.hls;e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(x.MANIFEST_PARSED,this.onManifestParsed,this),e.on(x.ERROR,this.onError,this)}unregisterListeners(){const e=this.hls;e&&(e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(x.MANIFEST_PARSED,this.onManifestParsed,this),e.off(x.ERROR,this.onError,this))}pathways(){return(this.levels||[]).reduce((e,t)=>(e.indexOf(t.pathwayId)===-1&&e.push(t.pathwayId),e),[])}get pathwayPriority(){return this._pathwayPriority}set pathwayPriority(e){this.updatePathwayPriority(e)}startLoad(){if(this.started=!0,this.clearTimeout(),this.enabled&&this.uri){if(this.updated){const e=this.timeToLoad*1e3-(performance.now()-this.updated);if(e>0){this.scheduleRefresh(this.uri,e);return}}this.loadSteeringManifest(this.uri)}}stopLoad(){this.started=!1,this.loader&&(this.loader.destroy(),this.loader=null),this.clearTimeout()}clearTimeout(){this.reloadTimer!==-1&&(self.clearTimeout(this.reloadTimer),this.reloadTimer=-1)}destroy(){this.unregisterListeners(),this.stopLoad(),this.hls=null,this.levels=this.audioTracks=this.subtitleTracks=null}removeLevel(e){const t=this.levels;t&&(this.levels=t.filter(n=>n!==e))}onManifestLoading(){this.stopLoad(),this.enabled=!0,this.timeToLoad=300,this.updated=0,this.uri=null,this.pathwayId=".",this.levels=this.audioTracks=this.subtitleTracks=null}onManifestLoaded(e,t){const{contentSteering:n}=t;n!==null&&(this.pathwayId=n.pathwayId,this.uri=n.uri,this.started&&this.startLoad())}onManifestParsed(e,t){this.audioTracks=t.audioTracks,this.subtitleTracks=t.subtitleTracks}onError(e,t){const{errorAction:n}=t;if((n==null?void 0:n.action)===Ue.SendAlternateToPenaltyBox&&n.flags===nt.MoveAllAlternatesMatchingHost){const i=this.levels;let r=this._pathwayPriority,s=this.pathwayId;if(t.context){const{groupId:o,pathwayId:d,type:l}=t.context;o&&i?s=this.getPathwayForGroupId(o,l,s):d&&(s=d)}s in this.penalizedPathways||(this.penalizedPathways[s]=performance.now()),!r&&i&&(r=this.pathways()),r&&r.length>1&&(this.updatePathwayPriority(r),n.resolved=this.pathwayId!==s),n.resolved||this.warn(`Could not resolve ${t.details} ("${t.error.message}") with content-steering for Pathway: ${s} levels: ${i&&i.length} priorities: ${Ie(r)} penalized: ${Ie(this.penalizedPathways)}`)}}filterParsedLevels(e){this.levels=e;let t=this.getLevelsForPathway(this.pathwayId);if(t.length===0){const n=e[0].pathwayId;this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${n}"`),t=this.getLevelsForPathway(n),this.pathwayId=n}return t.length!==e.length&&this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`),t}getLevelsForPathway(e){return this.levels===null?[]:this.levels.filter(t=>e===t.pathwayId)}updatePathwayPriority(e){this._pathwayPriority=e;let t;const n=this.penalizedPathways,i=performance.now();Object.keys(n).forEach(r=>{i-n[r]>yp&&delete n[r]});for(let r=0;r<e.length;r++){const s=e[r];if(s in n)continue;if(s===this.pathwayId)return;const o=this.hls.nextLoadLevel,d=this.hls.levels[o];if(t=this.getLevelsForPathway(s),t.length>0){this.log(`Setting Pathway to "${s}"`),this.pathwayId=s,$o(t),this.hls.trigger(x.LEVELS_UPDATED,{levels:t});const l=this.hls.levels[o];d&&l&&this.levels&&(l.attrs["STABLE-VARIANT-ID"]!==d.attrs["STABLE-VARIANT-ID"]&&l.bitrate!==d.bitrate&&this.log(`Unstable Pathways change from bitrate ${d.bitrate} to ${l.bitrate}`),this.hls.nextLoadLevel=o);break}}}getPathwayForGroupId(e,t,n){const i=this.getLevelsForPathway(n).concat(this.levels||[]);for(let r=0;r<i.length;r++)if(t===me.AUDIO_TRACK&&i[r].hasAudioGroup(e)||t===me.SUBTITLE_TRACK&&i[r].hasSubtitleGroup(e))return i[r].pathwayId;return n}clonePathways(e){const t=this.levels;if(!t)return;const n={},i={};e.forEach(r=>{const{ID:s,"BASE-ID":o,"URI-REPLACEMENT":d}=r;if(t.some(c=>c.pathwayId===s))return;const l=this.getLevelsForPathway(o).map(c=>{const u=new ke(c.attrs);u["PATHWAY-ID"]=s;const h=u.AUDIO&&`${u.AUDIO}_clone_${s}`,m=u.SUBTITLES&&`${u.SUBTITLES}_clone_${s}`;h&&(n[u.AUDIO]=h,u.AUDIO=h),m&&(i[u.SUBTITLES]=m,u.SUBTITLES=m);const g=gl(c.uri,u["STABLE-VARIANT-ID"],"PER-VARIANT-URIS",d),v=new Gn({attrs:u,audioCodec:c.audioCodec,bitrate:c.bitrate,height:c.height,name:c.name,url:g,videoCodec:c.videoCodec,width:c.width});if(c.audioGroups)for(let E=1;E<c.audioGroups.length;E++)v.addGroupId("audio",`${c.audioGroups[E]}_clone_${s}`);if(c.subtitleGroups)for(let E=1;E<c.subtitleGroups.length;E++)v.addGroupId("text",`${c.subtitleGroups[E]}_clone_${s}`);return v});t.push(...l),qa(this.audioTracks,n,d,s),qa(this.subtitleTracks,i,d,s)})}loadSteeringManifest(e){const t=this.hls.config,n=t.loader;this.loader&&this.loader.destroy(),this.loader=new n(t);let i;try{i=new self.URL(e)}catch{this.enabled=!1,this.log(`Failed to parse Steering Manifest URI: ${e}`);return}if(i.protocol!=="data:"){const c=(this.hls.bandwidthEstimate||t.abrEwmaDefaultEstimate)|0;i.searchParams.set("_HLS_pathway",this.pathwayId),i.searchParams.set("_HLS_throughput",""+c)}const r={responseType:"json",url:i.href},s=t.steeringManifestLoadPolicy.default,o=s.errorRetry||s.timeoutRetry||{},d={loadPolicy:s,timeout:s.maxLoadTimeMs,maxRetry:o.maxNumRetry||0,retryDelay:o.retryDelayMs||0,maxRetryDelay:o.maxRetryDelayMs||0},l={onSuccess:(c,u,h,m)=>{this.log(`Loaded steering manifest: "${i}"`);const g=c.data;if((g==null?void 0:g.VERSION)!==1){this.log(`Steering VERSION ${g.VERSION} not supported!`);return}this.updated=performance.now(),this.timeToLoad=g.TTL;const{"RELOAD-URI":v,"PATHWAY-CLONES":E,"PATHWAY-PRIORITY":C}=g;if(v)try{this.uri=new self.URL(v,i).href}catch{this.enabled=!1,this.log(`Failed to parse Steering Manifest RELOAD-URI: ${v}`);return}this.scheduleRefresh(this.uri||h.url),E&&this.clonePathways(E);const I={steeringManifest:g,url:i.toString()};this.hls.trigger(x.STEERING_MANIFEST_LOADED,I),C&&this.updatePathwayPriority(C)},onError:(c,u,h,m)=>{if(this.log(`Error loading steering manifest: ${c.code} ${c.text} (${u.url})`),this.stopLoad(),c.code===410){this.enabled=!1,this.log(`Steering manifest ${u.url} no longer available`);return}let g=this.timeToLoad*1e3;if(c.code===429){const v=this.loader;if(typeof(v==null?void 0:v.getResponseHeader)=="function"){const E=v.getResponseHeader("Retry-After");E&&(g=parseFloat(E)*1e3)}this.log(`Steering manifest ${u.url} rate limited`);return}this.scheduleRefresh(this.uri||u.url,g)},onTimeout:(c,u,h)=>{this.log(`Timeout loading steering manifest (${u.url})`),this.scheduleRefresh(this.uri||u.url)}};this.log(`Requesting steering manifest: ${i}`),this.loader.load(r,d,l)}scheduleRefresh(e,t=this.timeToLoad*1e3){this.clearTimeout(),this.reloadTimer=self.setTimeout(()=>{var n;const i=(n=this.hls)==null?void 0:n.media;if(i&&!i.ended){this.loadSteeringManifest(e);return}this.scheduleRefresh(e,this.timeToLoad*1e3)},t)}}function qa(a,e,t,n){a&&Object.keys(e).forEach(i=>{const r=a.filter(s=>s.groupId===i).map(s=>{const o=Se({},s);return o.details=void 0,o.attrs=new ke(o.attrs),o.url=o.attrs.URI=gl(s.url,s.attrs["STABLE-RENDITION-ID"],"PER-RENDITION-URIS",t),o.groupId=o.attrs["GROUP-ID"]=e[i],o.attrs["PATHWAY-ID"]=n,o});a.push(...r)})}function gl(a,e,t,n){const{HOST:i,PARAMS:r,[t]:s}=n;let o;e&&(o=s==null?void 0:s[e],o&&(a=o));const d=new self.URL(a);return i&&!o&&(d.host=i),r&&Object.keys(r).sort().forEach(l=>{l&&d.searchParams.set(l,r[l])}),d.href}function je(a,e,t){Ze(a,e,t),a.addEventListener(e,t)}function Ze(a,e,t){a.removeEventListener(e,t)}class en extends vt{constructor(e){super("eme",e.logger),this.hls=void 0,this.config=void 0,this.media=null,this.keyFormatPromise=null,this.keySystemAccessPromises={},this._requestLicenseFailureCount=0,this.mediaKeySessions=[],this.keyIdToKeySessionPromise={},this.mediaKeys=null,this.setMediaKeysQueue=en.CDMCleanupPromise?[en.CDMCleanupPromise]:[],this.onMediaEncrypted=t=>{const{initDataType:n,initData:i}=t,r=`"${t.type}" event: init data type: "${n}"`;if(this.debug(r),i!==null){if(!this.keyFormatPromise){let s=Object.keys(this.keySystemAccessPromises);s.length||(s=On(this.config));const o=s.map(ci).filter(d=>!!d);this.keyFormatPromise=this.getKeyFormatPromise(o)}this.keyFormatPromise.then(s=>{const o=xi(s);let d,l;if(n==="sinf"){if(o!==xe.FAIRPLAY){this.warn(`Ignoring unexpected "${t.type}" event with init data type: "${n}" for selected key-system ${o}`);return}const g=Be(new Uint8Array(i));try{const v=Jr(JSON.parse(g).sinf),E=yo(v);if(!E)throw new Error("'schm' box missing or not cbcs/cenc with schi > tenc");d=new Uint8Array(E.subarray(8,24)),l=xe.FAIRPLAY}catch(v){this.warn(`${r} Failed to parse sinf: ${v}`);return}}else{if(o!==xe.WIDEVINE&&o!==xe.PLAYREADY){this.warn(`Ignoring unexpected "${t.type}" event with init data type: "${n}" for selected key-system ${o}`);return}const g=vu(i),v=g.filter(C=>!!C.systemId&&cr(C.systemId)===o);v.length>1&&this.warn(`${r} Using first of ${v.length} pssh found for selected key-system ${o}`);const E=v[0];if(!E){g.length===0||g.some(C=>!C.systemId)?this.warn(`${r} contains incomplete or invalid pssh data`):this.log(`ignoring ${r} for ${g.map(C=>cr(C.systemId)).join(",")} pssh data in favor of playlist keys`);return}if(l=cr(E.systemId),E.version===0&&E.data)if(l===xe.WIDEVINE){const C=E.data.length-22;d=new Uint8Array(E.data.subarray(C,C+16))}else l===xe.PLAYREADY&&(d=Po(E.data))}if(!l||!d)return;const c=ot.hexDump(d),{keyIdToKeySessionPromise:u,mediaKeySessions:h}=this;let m=u[c];for(let g=0;g<h.length;g++){const v=h[g],E=v.decryptdata;if(!E.keyId)continue;const C=ot.hexDump(E.keyId);if(c===C||E.uri.replace(/-/g,"").indexOf(c)!==-1){if(m=u[C],E.pssh)break;delete u[C],E.pssh=new Uint8Array(i),E.keyId=d,m=u[c]=m.then(()=>this.generateRequestWithPreferredKeySession(v,n,i,"encrypted-event-key-match")),m.catch(I=>this.handleError(I));break}}if(!m){if(l!==o){this.log(`Ignoring "${t.type}" event with ${l} init data for selected key-system ${o}`);return}m=u[c]=this.getKeySystemSelectionPromise([l]).then(({keySystem:g,mediaKeys:v})=>{var E;this.throwIfDestroyed();const C=new Hn("ISO-23001-7",c,(E=ci(g))!=null?E:"");return C.pssh=new Uint8Array(i),C.keyId=d,this.attemptSetMediaKeys(g,v).then(()=>{this.throwIfDestroyed();const I=this.createMediaKeySessionContext({decryptdata:C,keySystem:g,mediaKeys:v});return this.generateRequestWithPreferredKeySession(I,n,i,"encrypted-event-no-match")})}),m.catch(g=>this.handleError(g))}})}},this.onWaitingForKey=t=>{this.log(`"${t.type}" event`)},this.hls=e,this.config=e.config,this.registerListeners()}destroy(){this.onDestroying(),this.onMediaDetached();const e=this.config;e.requestMediaKeySystemAccessFunc=null,e.licenseXhrSetup=e.licenseResponseCallback=void 0,e.drmSystems=e.drmSystemOptions={},this.hls=this.config=this.keyIdToKeySessionPromise=null,this.onMediaEncrypted=this.onWaitingForKey=null}registerListeners(){this.hls.on(x.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.on(x.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.on(x.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.on(x.MANIFEST_LOADED,this.onManifestLoaded,this),this.hls.on(x.DESTROYING,this.onDestroying,this)}unregisterListeners(){this.hls.off(x.MEDIA_ATTACHED,this.onMediaAttached,this),this.hls.off(x.MEDIA_DETACHED,this.onMediaDetached,this),this.hls.off(x.MANIFEST_LOADING,this.onManifestLoading,this),this.hls.off(x.MANIFEST_LOADED,this.onManifestLoaded,this),this.hls.off(x.DESTROYING,this.onDestroying,this)}getLicenseServerUrl(e){const{drmSystems:t,widevineLicenseUrl:n}=this.config,i=t[e];if(i)return i.licenseUrl;if(e===xe.WIDEVINE&&n)return n}getLicenseServerUrlOrThrow(e){const t=this.getLicenseServerUrl(e);if(t===void 0)throw new Error(`no license server URL configured for key-system "${e}"`);return t}getServerCertificateUrl(e){const{drmSystems:t}=this.config,n=t[e];if(n)return n.serverCertificateUrl;this.log(`No Server Certificate in config.drmSystems["${e}"]`)}attemptKeySystemAccess(e){const t=this.hls.levels,n=(s,o,d)=>!!s&&d.indexOf(s)===o,i=t.map(s=>s.audioCodec).filter(n),r=t.map(s=>s.videoCodec).filter(n);return i.length+r.length===0&&r.push("avc1.42e01e"),new Promise((s,o)=>{const d=l=>{const c=l.shift();this.getMediaKeysPromise(c,i,r).then(u=>s({keySystem:c,mediaKeys:u})).catch(u=>{l.length?d(l):u instanceof Qe?o(u):o(new Qe({type:oe.KEY_SYSTEM_ERROR,details:F.KEY_SYSTEM_NO_ACCESS,error:u,fatal:!0},u.message))})};d(e)})}requestMediaKeySystemAccess(e,t){const{requestMediaKeySystemAccessFunc:n}=this.config;if(typeof n!="function"){let i=`Configured requestMediaKeySystemAccess is not a function ${n}`;return _o===null&&self.location.protocol==="http:"&&(i=`navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`),Promise.reject(new Error(i))}return n(e,t)}getMediaKeysPromise(e,t,n){const i=dh(e,t,n,this.config.drmSystemOptions),r=this.keySystemAccessPromises[e];let s=r==null?void 0:r.keySystemAccess;if(!s){this.log(`Requesting encrypted media "${e}" key-system access with config: ${Ie(i)}`),s=this.requestMediaKeySystemAccess(e,i);const o=this.keySystemAccessPromises[e]={keySystemAccess:s};return s.catch(d=>{this.log(`Failed to obtain access to key-system "${e}": ${d}`)}),s.then(d=>{this.log(`Access for key-system "${d.keySystem}" obtained`);const l=this.fetchServerCertificate(e);return this.log(`Create media-keys for "${e}"`),o.mediaKeys=d.createMediaKeys().then(c=>(this.log(`Media-keys created for "${e}"`),o.hasMediaKeys=!0,l.then(u=>u?this.setMediaKeysServerCertificate(c,e,u):c))),o.mediaKeys.catch(c=>{this.error(`Failed to create media-keys for "${e}"}: ${c}`)}),o.mediaKeys})}return s.then(()=>r.mediaKeys)}createMediaKeySessionContext({decryptdata:e,keySystem:t,mediaKeys:n}){this.log(`Creating key-system session "${t}" keyId: ${ot.hexDump(e.keyId||[])}`);const i=n.createSession(),r={decryptdata:e,keySystem:t,mediaKeys:n,mediaKeysSession:i,keyStatus:"status-pending"};return this.mediaKeySessions.push(r),r}renewKeySession(e){const t=e.decryptdata;if(t.pssh){const n=this.createMediaKeySessionContext(e),i=this.getKeyIdString(t),r="cenc";this.keyIdToKeySessionPromise[i]=this.generateRequestWithPreferredKeySession(n,r,t.pssh.buffer,"expired")}else this.warn("Could not renew expired session. Missing pssh initData.");this.removeSession(e)}getKeyIdString(e){if(!e)throw new Error("Could not read keyId of undefined decryptdata");if(e.keyId===null)throw new Error("keyId is null");return ot.hexDump(e.keyId)}updateKeySession(e,t){var n;const i=e.mediaKeysSession;return this.log(`Updating key-session "${i.sessionId}" for keyID ${ot.hexDump(((n=e.decryptdata)==null?void 0:n.keyId)||[])}
      } (data length: ${t&&t.byteLength})`),i.update(t)}getSelectedKeySystemFormats(){return Object.keys(this.keySystemAccessPromises).map(e=>({keySystem:e,hasMediaKeys:this.keySystemAccessPromises[e].hasMediaKeys})).filter(({hasMediaKeys:e})=>!!e).map(({keySystem:e})=>ci(e)).filter(e=>!!e)}getKeySystemAccess(e){return this.getKeySystemSelectionPromise(e).then(({keySystem:t,mediaKeys:n})=>this.attemptSetMediaKeys(t,n))}selectKeySystem(e){return new Promise((t,n)=>this.getKeySystemSelectionPromise(e).then(({keySystem:i})=>{const r=ci(i);r?t(r):n(new Error(`Unable to find format for key-system "${i}"`))}).catch(n))}selectKeySystemFormat(e){const t=Object.keys(e.levelkeys||{});return this.keyFormatPromise||(this.log(`Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`),this.keyFormatPromise=this.getKeyFormatPromise(t)),this.keyFormatPromise}getKeyFormatPromise(e){const t=On(this.config),n=e.map(xi).filter(i=>!!i&&t.indexOf(i)!==-1);return this.selectKeySystem(n)}loadKey(e){const t=e.keyInfo.decryptdata,n=this.getKeyIdString(t),i=`(keyId: ${n} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;this.log(`Starting session for key ${i}`);let r=this.keyIdToKeySessionPromise[n];return r||(r=this.getKeySystemForKeyPromise(t).then(({keySystem:o,mediaKeys:d})=>(this.throwIfDestroyed(),this.log(`Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${i}`),this.attemptSetMediaKeys(o,d).then(()=>(this.throwIfDestroyed(),this.createMediaKeySessionContext({keySystem:o,mediaKeys:d,decryptdata:t}))))),(this.keyIdToKeySessionPromise[n]=r.then(o=>{const d="cenc",l=t.pssh?t.pssh.buffer:null;return this.generateRequestWithPreferredKeySession(o,d,l,"playlist-key")})).catch(o=>this.handleError(o))),r}throwIfDestroyed(e="Invalid state"){if(!this.hls)throw new Error("invalid state")}handleError(e){this.hls&&(this.error(e.message),e instanceof Qe?this.hls.trigger(x.ERROR,e.data):this.hls.trigger(x.ERROR,{type:oe.KEY_SYSTEM_ERROR,details:F.KEY_SYSTEM_NO_KEYS,error:e,fatal:!0}))}getKeySystemForKeyPromise(e){const t=this.getKeyIdString(e),n=this.keyIdToKeySessionPromise[t];if(!n){const i=xi(e.keyFormat),r=i?[i]:On(this.config);return this.attemptKeySystemAccess(r)}return n}getKeySystemSelectionPromise(e){if(e.length||(e=On(this.config)),e.length===0)throw new Qe({type:oe.KEY_SYSTEM_ERROR,details:F.KEY_SYSTEM_NO_CONFIGURED_LICENSE,fatal:!0},`Missing key-system license configuration options ${Ie({drmSystems:this.config.drmSystems})}`);return this.attemptKeySystemAccess(e)}attemptSetMediaKeys(e,t){if(this.mediaKeys===t)return Promise.resolve();const n=this.setMediaKeysQueue.slice();this.log(`Setting media-keys for "${e}"`);const i=Promise.all(n).then(()=>{if(!this.media)throw this.mediaKeys=null,new Error("Attempted to set mediaKeys without media element attached");return this.media.setMediaKeys(t)});return this.mediaKeys=t,this.setMediaKeysQueue.push(i),i.then(()=>{this.log(`Media-keys set for "${e}"`),n.push(i),this.setMediaKeysQueue=this.setMediaKeysQueue.filter(r=>n.indexOf(r)===-1)})}generateRequestWithPreferredKeySession(e,t,n,i){var r,s;const o=(r=this.config.drmSystems)==null||(s=r[e.keySystem])==null?void 0:s.generateRequest;if(o)try{const g=o.call(this.hls,t,n,e);if(!g)throw new Error("Invalid response from configured generateRequest filter");t=g.initDataType,n=g.initData?g.initData:null,e.decryptdata.pssh=n?new Uint8Array(n):null}catch(g){var d;if(this.warn(g.message),(d=this.hls)!=null&&d.config.debug)throw g}if(n===null)return this.log(`Skipping key-session request for "${i}" (no initData)`),Promise.resolve(e);const l=this.getKeyIdString(e.decryptdata);this.log(`Generating key-session request for "${i}": ${l} (init data type: ${t} length: ${n?n.byteLength:null})`);const c=new ts,u=e._onmessage=g=>{const v=e.mediaKeysSession;if(!v){c.emit("error",new Error("invalid state"));return}const{messageType:E,message:C}=g;this.log(`"${E}" message event for session "${v.sessionId}" message size: ${C.byteLength}`),E==="license-request"||E==="license-renewal"?this.renewLicense(e,C).catch(I=>{c.eventNames().length?c.emit("error",I):this.handleError(I)}):E==="license-release"?e.keySystem===xe.FAIRPLAY&&(this.updateKeySession(e,Br("acknowledged")),this.removeSession(e)):this.warn(`unhandled media key message type "${E}"`)},h=e._onkeystatuseschange=g=>{if(!e.mediaKeysSession){c.emit("error",new Error("invalid state"));return}this.onKeyStatusChange(e);const E=e.keyStatus;c.emit("keyStatus",E),E==="expired"&&(this.warn(`${e.keySystem} expired for key ${l}`),this.renewKeySession(e))};je(e.mediaKeysSession,"message",u),je(e.mediaKeysSession,"keystatuseschange",h);const m=new Promise((g,v)=>{c.on("error",v),c.on("keyStatus",E=>{E.startsWith("usable")?g():E==="output-restricted"?v(new Qe({type:oe.KEY_SYSTEM_ERROR,details:F.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,fatal:!1},"HDCP level output restricted")):E==="internal-error"?v(new Qe({type:oe.KEY_SYSTEM_ERROR,details:F.KEY_SYSTEM_STATUS_INTERNAL_ERROR,fatal:!0},`key status changed to "${E}"`)):E==="expired"?v(new Error("key expired while generating request")):this.warn(`unhandled key status change "${E}"`)})});return e.mediaKeysSession.generateRequest(t,n).then(()=>{var g;this.log(`Request generated for key-session "${(g=e.mediaKeysSession)==null?void 0:g.sessionId}" keyId: ${l}`)}).catch(g=>{throw new Qe({type:oe.KEY_SYSTEM_ERROR,details:F.KEY_SYSTEM_NO_SESSION,error:g,fatal:!1},`Error generating key-session request: ${g}`)}).then(()=>m).catch(g=>{throw c.removeAllListeners(),this.removeSession(e),g}).then(()=>(c.removeAllListeners(),e))}onKeyStatusChange(e){e.mediaKeysSession.keyStatuses.forEach((t,n)=>{if(typeof n=="string"&&typeof t=="object"){const i=n;n=t,t=i}this.log(`key status change "${t}" for keyStatuses keyId: ${ot.hexDump("buffer"in n?new Uint8Array(n.buffer,n.byteOffset,n.byteLength):new Uint8Array(n))} session keyId: ${ot.hexDump(new Uint8Array(e.decryptdata.keyId||[]))} uri: ${e.decryptdata.uri}`),e.keyStatus=t})}fetchServerCertificate(e){const t=this.config,n=t.loader,i=new n(t),r=this.getServerCertificateUrl(e);return r?(this.log(`Fetching server certificate for "${e}"`),new Promise((s,o)=>{const d={responseType:"arraybuffer",url:r},l=t.certLoadPolicy.default,c={loadPolicy:l,timeout:l.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0},u={onSuccess:(h,m,g,v)=>{s(h.data)},onError:(h,m,g,v)=>{o(new Qe({type:oe.KEY_SYSTEM_ERROR,details:F.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,fatal:!0,networkDetails:g,response:Ee({url:d.url,data:void 0},h)},`"${e}" certificate request failed (${r}). Status: ${h.code} (${h.text})`))},onTimeout:(h,m,g)=>{o(new Qe({type:oe.KEY_SYSTEM_ERROR,details:F.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,fatal:!0,networkDetails:g,response:{url:d.url,data:void 0}},`"${e}" certificate request timed out (${r})`))},onAbort:(h,m,g)=>{o(new Error("aborted"))}};i.load(d,c,u)})):Promise.resolve()}setMediaKeysServerCertificate(e,t,n){return new Promise((i,r)=>{e.setServerCertificate(n).then(s=>{this.log(`setServerCertificate ${s?"success":"not supported by CDM"} (${n==null?void 0:n.byteLength}) on "${t}"`),i(e)}).catch(s=>{r(new Qe({type:oe.KEY_SYSTEM_ERROR,details:F.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,error:s,fatal:!0},s.message))})})}renewLicense(e,t){return this.requestLicense(e,new Uint8Array(t)).then(n=>this.updateKeySession(e,new Uint8Array(n)).catch(i=>{throw new Qe({type:oe.KEY_SYSTEM_ERROR,details:F.KEY_SYSTEM_SESSION_UPDATE_FAILED,error:i,fatal:!0},i.message)}))}unpackPlayReadyKeyMessage(e,t){const n=String.fromCharCode.apply(null,new Uint16Array(t.buffer));if(!n.includes("PlayReadyKeyMessage"))return e.setRequestHeader("Content-Type","text/xml; charset=utf-8"),t;const i=new DOMParser().parseFromString(n,"application/xml"),r=i.querySelectorAll("HttpHeader");if(r.length>0){let c;for(let u=0,h=r.length;u<h;u++){var s,o;c=r[u];const m=(s=c.querySelector("name"))==null?void 0:s.textContent,g=(o=c.querySelector("value"))==null?void 0:o.textContent;m&&g&&e.setRequestHeader(m,g)}}const d=i.querySelector("Challenge"),l=d==null?void 0:d.textContent;if(!l)throw new Error("Cannot find <Challenge> in key message");return Br(atob(l))}setupLicenseXHR(e,t,n,i){const r=this.config.licenseXhrSetup;return r?Promise.resolve().then(()=>{if(!n.decryptdata)throw new Error("Key removed");return r.call(this.hls,e,t,n,i)}).catch(s=>{if(!n.decryptdata)throw s;return e.open("POST",t,!0),r.call(this.hls,e,t,n,i)}).then(s=>(e.readyState||e.open("POST",t,!0),{xhr:e,licenseChallenge:s||i})):(e.open("POST",t,!0),Promise.resolve({xhr:e,licenseChallenge:i}))}requestLicense(e,t){const n=this.config.keyLoadPolicy.default;return new Promise((i,r)=>{const s=this.getLicenseServerUrlOrThrow(e.keySystem);this.log(`Sending license request to URL: ${s}`);const o=new XMLHttpRequest;o.responseType="arraybuffer",o.onreadystatechange=()=>{if(!this.hls||!e.mediaKeysSession)return r(new Error("invalid state"));if(o.readyState===4)if(o.status===200){this._requestLicenseFailureCount=0;let d=o.response;this.log(`License received ${d instanceof ArrayBuffer?d.byteLength:d}`);const l=this.config.licenseResponseCallback;if(l)try{d=l.call(this.hls,o,s,e)}catch(c){this.error(c)}i(d)}else{const d=n.errorRetry,l=d?d.maxNumRetry:0;if(this._requestLicenseFailureCount++,this._requestLicenseFailureCount>l||o.status>=400&&o.status<500)r(new Qe({type:oe.KEY_SYSTEM_ERROR,details:F.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0,networkDetails:o,response:{url:s,data:void 0,code:o.status,text:o.statusText}},`License Request XHR failed (${s}). Status: ${o.status} (${o.statusText})`));else{const c=l-this._requestLicenseFailureCount+1;this.warn(`Retrying license request, ${c} attempts left`),this.requestLicense(e,t).then(i,r)}}},e.licenseXhr&&e.licenseXhr.readyState!==XMLHttpRequest.DONE&&e.licenseXhr.abort(),e.licenseXhr=o,this.setupLicenseXHR(o,s,e,t).then(({xhr:d,licenseChallenge:l})=>{e.keySystem==xe.PLAYREADY&&(l=this.unpackPlayReadyKeyMessage(d,l)),d.send(l)})})}onDestroying(){this.unregisterListeners(),this._clear()}onMediaAttached(e,t){if(!this.config.emeEnabled)return;const n=t.media;this.media=n,je(n,"encrypted",this.onMediaEncrypted),je(n,"waitingforkey",this.onWaitingForKey)}onMediaDetached(){const e=this.media;e&&(Ze(e,"encrypted",this.onMediaEncrypted),Ze(e,"waitingforkey",this.onWaitingForKey),this.media=null,this.mediaKeys=null)}_clear(){var e;if(this._requestLicenseFailureCount=0,this.keyIdToKeySessionPromise={},!this.mediaKeys&&!this.mediaKeySessions.length)return;const t=this.media,n=this.mediaKeySessions.slice();this.mediaKeySessions=[],this.mediaKeys=null,Hn.clearKeyUriToKeyIdMap();const i=n.length;en.CDMCleanupPromise=Promise.all(n.map(r=>this.removeSession(r)).concat(t==null||(e=t.setMediaKeys(null))==null?void 0:e.catch(r=>{var s;this.log(`Could not clear media keys: ${r}`),(s=this.hls)==null||s.trigger(x.ERROR,{type:oe.OTHER_ERROR,details:F.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR,fatal:!1,error:new Error(`Could not clear media keys: ${r}`)})}))).catch(r=>{var s;this.log(`Could not close sessions and clear media keys: ${r}`),(s=this.hls)==null||s.trigger(x.ERROR,{type:oe.OTHER_ERROR,details:F.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR,fatal:!1,error:new Error(`Could not close sessions and clear media keys: ${r}`)})}).then(()=>{i&&this.log("finished closing key sessions and clearing media keys")})}onManifestLoading(){this.keyFormatPromise=null}onManifestLoaded(e,{sessionKeys:t}){if(!(!t||!this.config.emeEnabled)&&!this.keyFormatPromise){const n=t.reduce((i,r)=>(i.indexOf(r.keyFormat)===-1&&i.push(r.keyFormat),i),[]);this.log(`Selecting key-system from session-keys ${n.join(", ")}`),this.keyFormatPromise=this.getKeyFormatPromise(n)}}removeSession(e){const{mediaKeysSession:t,licenseXhr:n}=e;if(t){this.log(`Remove licenses and keys and close session ${t.sessionId}`),e._onmessage&&(t.removeEventListener("message",e._onmessage),e._onmessage=void 0),e._onkeystatuseschange&&(t.removeEventListener("keystatuseschange",e._onkeystatuseschange),e._onkeystatuseschange=void 0),n&&n.readyState!==XMLHttpRequest.DONE&&n.abort(),e.mediaKeysSession=e.decryptdata=e.licenseXhr=void 0;const i=this.mediaKeySessions.indexOf(e);i>-1&&this.mediaKeySessions.splice(i,1);const{drmSystemOptions:r}=this.config;return(uh(r)?new Promise((o,d)=>{self.setTimeout(()=>d(new Error("MediaKeySession.remove() timeout")),8e3),t.remove().then(o)}):Promise.resolve()).catch(o=>{var d;this.log(`Could not remove session: ${o}`),(d=this.hls)==null||d.trigger(x.ERROR,{type:oe.OTHER_ERROR,details:F.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR,fatal:!1,error:new Error(`Could not remove session: ${o}`)})}).then(()=>t.close()).catch(o=>{var d;this.log(`Could not close session: ${o}`),(d=this.hls)==null||d.trigger(x.ERROR,{type:oe.OTHER_ERROR,details:F.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR,fatal:!1,error:new Error(`Could not close session: ${o}`)})})}}}en.CDMCleanupPromise=void 0;class Qe extends Error{constructor(e,t){super(t),this.data=void 0,e.error||(e.error=new Error(t)),this.data=e,e.err=e.error}}class vp{constructor(e){this.hls=void 0,this.isVideoPlaybackQualityAvailable=!1,this.timer=void 0,this.media=null,this.lastTime=void 0,this.lastDroppedFrames=0,this.lastDecodedFrames=0,this.streamController=void 0,this.hls=e,this.registerListeners()}setStreamController(e){this.streamController=e}registerListeners(){this.hls.on(x.MEDIA_ATTACHING,this.onMediaAttaching,this),this.hls.on(x.MEDIA_DETACHING,this.onMediaDetaching,this)}unregisterListeners(){this.hls.off(x.MEDIA_ATTACHING,this.onMediaAttaching,this),this.hls.off(x.MEDIA_DETACHING,this.onMediaDetaching,this)}destroy(){this.timer&&clearInterval(this.timer),this.unregisterListeners(),this.isVideoPlaybackQualityAvailable=!1,this.media=null}onMediaAttaching(e,t){const n=this.hls.config;if(n.capLevelOnFPSDrop){const i=t.media instanceof self.HTMLVideoElement?t.media:null;this.media=i,i&&typeof i.getVideoPlaybackQuality=="function"&&(this.isVideoPlaybackQualityAvailable=!0),self.clearInterval(this.timer),this.timer=self.setInterval(this.checkFPSInterval.bind(this),n.fpsDroppedMonitoringPeriod)}}onMediaDetaching(){this.media=null}checkFPS(e,t,n){const i=performance.now();if(t){if(this.lastTime){const r=i-this.lastTime,s=n-this.lastDroppedFrames,o=t-this.lastDecodedFrames,d=1e3*s/r,l=this.hls;if(l.trigger(x.FPS_DROP,{currentDropped:s,currentDecoded:o,totalDroppedFrames:n}),d>0&&s>l.config.fpsDroppedMonitoringThreshold*o){let c=l.currentLevel;l.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: "+c),c>0&&(l.autoLevelCapping===-1||l.autoLevelCapping>=c)&&(c=c-1,l.trigger(x.FPS_DROP_LEVEL_CAPPING,{level:c,droppedLevel:l.currentLevel}),l.autoLevelCapping=c,this.streamController.nextLevelSwitch())}}this.lastTime=i,this.lastDroppedFrames=n,this.lastDecodedFrames=t}}checkFPSInterval(){const e=this.media;if(e)if(this.isVideoPlaybackQualityAvailable){const t=e.getVideoPlaybackQuality();this.checkFPS(e,t.totalVideoFrames,t.droppedVideoFrames)}else this.checkFPS(e,e.webkitDecodedFrameCount,e.webkitDroppedFrameCount)}}function yl(a,e){let t;try{t=new Event("addtrack")}catch{t=document.createEvent("Event"),t.initEvent("addtrack",!1,!1)}t.track=a,e.dispatchEvent(t)}function Al(a,e){const t=a.mode;if(t==="disabled"&&(a.mode="hidden"),a.cues&&!a.cues.getCueById(e.id))try{if(a.addCue(e),!a.cues.getCueById(e.id))throw new Error(`addCue is failed for: ${e}`)}catch(n){be.debug(`[texttrack-utils]: ${n}`);try{const i=new self.TextTrackCue(e.startTime,e.endTime,e.text);i.id=e.id,a.addCue(i)}catch(i){be.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${i}`)}}t==="disabled"&&(a.mode=t)}function Zt(a,e){const t=a.mode;if(t==="disabled"&&(a.mode="hidden"),a.cues)for(let n=a.cues.length;n--;)e&&a.cues[n].removeEventListener("enter",e),a.removeCue(a.cues[n]);t==="disabled"&&(a.mode=t)}function Kr(a,e,t,n){const i=a.mode;if(i==="disabled"&&(a.mode="hidden"),a.cues&&a.cues.length>0){const r=Ep(a.cues,e,t);for(let s=0;s<r.length;s++)(!n||n(r[s]))&&a.removeCue(r[s])}i==="disabled"&&(a.mode=i)}function bp(a,e){if(e<=a[0].startTime)return 0;const t=a.length-1;if(e>a[t].endTime)return-1;let n=0,i=t,r;for(;n<=i;)if(r=Math.floor((i+n)/2),e<a[r].startTime)i=r-1;else if(e>a[r].startTime&&n<t)n=r+1;else return r;return a[n].startTime-e<e-a[i].startTime?n:i}function Ep(a,e,t){const n=[],i=bp(a,e);if(i>-1)for(let r=i,s=a.length;r<s;r++){const o=a[r];if(o.startTime>=e&&o.endTime<=t)n.push(o);else if(o.startTime>t)return n}return n}function Li(a){const e=[];for(let t=0;t<a.length;t++){const n=a[t];(n.kind==="subtitles"||n.kind==="captions")&&n.label&&e.push(a[t])}return e}class xp extends ls{constructor(e){super(e,"subtitle-track-controller"),this.media=null,this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0,this.queuedDefaultTrack=-1,this.useTextTrackPolling=!1,this.subtitlePollingInterval=-1,this._subtitleDisplay=!0,this.asyncPollTrackChange=()=>this.pollTrackChange(0),this.onTextTracksChanged=()=>{if(this.useTextTrackPolling||self.clearInterval(this.subtitlePollingInterval),!this.media||!this.hls.config.renderTextTracksNatively)return;let t=null;const n=Li(this.media.textTracks);for(let r=0;r<n.length;r++)if(n[r].mode==="hidden")t=n[r];else if(n[r].mode==="showing"){t=n[r];break}const i=this.findTrackForTextTrack(t);this.subtitleTrack!==i&&this.setSubtitleTrack(i)},this.registerListeners()}destroy(){this.unregisterListeners(),this.tracks.length=0,this.tracksInGroup.length=0,this.currentTrack=null,this.onTextTracksChanged=this.asyncPollTrackChange=null,super.destroy()}get subtitleDisplay(){return this._subtitleDisplay}set subtitleDisplay(e){this._subtitleDisplay=e,this.trackId>-1&&this.toggleTrackModes()}registerListeners(){const{hls:e}=this;e.on(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.MANIFEST_PARSED,this.onManifestParsed,this),e.on(x.LEVEL_LOADING,this.onLevelLoading,this),e.on(x.LEVEL_SWITCHING,this.onLevelSwitching,this),e.on(x.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(x.ERROR,this.onError,this)}unregisterListeners(){const{hls:e}=this;e.off(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.MANIFEST_PARSED,this.onManifestParsed,this),e.off(x.LEVEL_LOADING,this.onLevelLoading,this),e.off(x.LEVEL_SWITCHING,this.onLevelSwitching,this),e.off(x.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(x.ERROR,this.onError,this)}onMediaAttached(e,t){this.media=t.media,this.media&&(this.queuedDefaultTrack>-1&&(this.subtitleTrack=this.queuedDefaultTrack,this.queuedDefaultTrack=-1),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.pollTrackChange(500):this.media.textTracks.addEventListener("change",this.asyncPollTrackChange))}pollTrackChange(e){self.clearInterval(this.subtitlePollingInterval),this.subtitlePollingInterval=self.setInterval(this.onTextTracksChanged,e)}onMediaDetaching(e,t){const n=this.media;if(!n)return;const i=!!t.transferMedia;if(self.clearInterval(this.subtitlePollingInterval),this.useTextTrackPolling||n.textTracks.removeEventListener("change",this.asyncPollTrackChange),this.trackId>-1&&(this.queuedDefaultTrack=this.trackId),this.subtitleTrack=-1,this.media=null,i)return;Li(n.textTracks).forEach(s=>{Zt(s)})}onManifestLoading(){this.tracks=[],this.groupIds=null,this.tracksInGroup=[],this.trackId=-1,this.currentTrack=null,this.selectDefaultTrack=!0}onManifestParsed(e,t){this.tracks=t.subtitleTracks}onSubtitleTrackLoaded(e,t){const{id:n,groupId:i,details:r}=t,s=this.tracksInGroup[n];if(!s||s.groupId!==i){this.warn(`Subtitle track with id:${n} and group:${i} not found in active group ${s==null?void 0:s.groupId}`);return}const o=s.details;s.details=t.details,this.log(`Subtitle track ${n} "${s.name}" lang:${s.lang} group:${i} loaded [${r.startSN}-${r.endSN}]`),n===this.trackId&&this.playlistLoaded(n,t,o)}onLevelLoading(e,t){this.switchLevel(t.level)}onLevelSwitching(e,t){this.switchLevel(t.level)}switchLevel(e){const t=this.hls.levels[e];if(!t)return;const n=t.subtitleGroups||null,i=this.groupIds;let r=this.currentTrack;if(!n||(i==null?void 0:i.length)!==(n==null?void 0:n.length)||n!=null&&n.some(s=>(i==null?void 0:i.indexOf(s))===-1)){this.groupIds=n,this.trackId=-1,this.currentTrack=null;const s=this.tracks.filter(c=>!n||n.indexOf(c.groupId)!==-1);if(s.length)this.selectDefaultTrack&&!s.some(c=>c.default)&&(this.selectDefaultTrack=!1),s.forEach((c,u)=>{c.id=u});else if(!r&&!this.tracksInGroup.length)return;this.tracksInGroup=s;const o=this.hls.config.subtitlePreference;if(!r&&o){this.selectDefaultTrack=!1;const c=dt(o,s);if(c>-1)r=s[c];else{const u=dt(o,this.tracks);r=this.tracks[u]}}let d=this.findTrackId(r);d===-1&&r&&(d=this.findTrackId(null));const l={subtitleTracks:s};this.log(`Updating subtitle tracks, ${s.length} track(s) found in "${n==null?void 0:n.join(",")}" group-id`),this.hls.trigger(x.SUBTITLE_TRACKS_UPDATED,l),d!==-1&&this.trackId===-1&&this.setSubtitleTrack(d)}}findTrackId(e){const t=this.tracksInGroup,n=this.selectDefaultTrack;for(let i=0;i<t.length;i++){const r=t[i];if(!(n&&!r.default||!n&&!e)&&(!e||Mt(r,e)))return i}if(e){for(let i=0;i<t.length;i++){const r=t[i];if(jn(e.attrs,r.attrs,["LANGUAGE","ASSOC-LANGUAGE","CHARACTERISTICS"]))return i}for(let i=0;i<t.length;i++){const r=t[i];if(jn(e.attrs,r.attrs,["LANGUAGE"]))return i}}return-1}findTrackForTextTrack(e){if(e){const t=this.tracksInGroup;for(let n=0;n<t.length;n++){const i=t[n];if(Ur(i,e))return n}}return-1}onError(e,t){t.fatal||!t.context||t.context.type===me.SUBTITLE_TRACK&&t.context.id===this.trackId&&(!this.groupIds||this.groupIds.indexOf(t.context.groupId)!==-1)&&this.checkRetry(t)}get allSubtitleTracks(){return this.tracks}get subtitleTracks(){return this.tracksInGroup}get subtitleTrack(){return this.trackId}set subtitleTrack(e){this.selectDefaultTrack=!1,this.setSubtitleTrack(e)}setSubtitleOption(e){if(this.hls.config.subtitlePreference=e,e){if(e.id===-1)return this.setSubtitleTrack(-1),null;const t=this.allSubtitleTracks;if(this.selectDefaultTrack=!1,t.length){const n=this.currentTrack;if(n&&Mt(e,n))return n;const i=dt(e,this.tracksInGroup);if(i>-1){const r=this.tracksInGroup[i];return this.setSubtitleTrack(i),r}else{if(n)return null;{const r=dt(e,t);if(r>-1)return t[r]}}}}return null}loadPlaylist(e){super.loadPlaylist(),this.shouldLoadPlaylist(this.currentTrack)&&this.scheduleLoading(this.currentTrack,e)}loadingPlaylist(e,t){super.loadingPlaylist(e,t);const n=e.id,i=e.groupId,r=this.getUrlWithDirectives(e.url,t),s=e.details,o=s==null?void 0:s.age;this.log(`Loading subtitle ${n} "${e.name}" lang:${e.lang} group:${i}${(t==null?void 0:t.msn)!==void 0?" at sn "+t.msn+" part "+t.part:""}${o&&s.live?" age "+o.toFixed(1)+(s.type&&" "+s.type||""):""} ${r}`),this.hls.trigger(x.SUBTITLE_TRACK_LOADING,{url:r,id:n,groupId:i,deliveryDirectives:t||null,track:e})}toggleTrackModes(){const{media:e}=this;if(!e)return;const t=Li(e.textTracks),n=this.currentTrack;let i;if(n&&(i=t.filter(r=>Ur(n,r))[0],i||this.warn(`Unable to find subtitle TextTrack with name "${n.name}" and language "${n.lang}"`)),[].slice.call(t).forEach(r=>{r.mode!=="disabled"&&r!==i&&(r.mode="disabled")}),i){const r=this.subtitleDisplay?"showing":"hidden";i.mode!==r&&(i.mode=r)}}setSubtitleTrack(e){const t=this.tracksInGroup;if(!this.media){this.queuedDefaultTrack=e;return}if(e<-1||e>=t.length||!Z(e)){this.warn(`Invalid subtitle track id: ${e}`);return}this.selectDefaultTrack=!1;const n=this.currentTrack,i=t[e]||null;if(this.trackId=e,this.currentTrack=i,this.toggleTrackModes(),!i){this.hls.trigger(x.SUBTITLE_TRACK_SWITCH,{id:e});return}const r=!!i.details&&!i.details.live;if(e===this.trackId&&i===n&&r)return;this.log(`Switching to subtitle-track ${e}`+(i?` "${i.name}" lang:${i.lang} group:${i.groupId}`:""));const{id:s,groupId:o="",name:d,type:l,url:c}=i;this.hls.trigger(x.SUBTITLE_TRACK_SWITCH,{id:s,groupId:o,name:d,type:l,url:c});const u=this.switchParams(i.url,n==null?void 0:n.details,i.details);this.loadPlaylist(u)}}function Sp(){try{return crypto.randomUUID()}catch{try{const e=URL.createObjectURL(new Blob),t=e.toString();return URL.revokeObjectURL(e),t.slice(t.lastIndexOf("/")+1)}catch{let t=new Date().getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,i=>{const r=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(i=="x"?r:r&3|8).toString(16)})}}}function Un(a){let e=5381,t=a.length;for(;t;)e=e*33^a.charCodeAt(--t);return(e>>>0).toString()}const tn=.025;let Ni=function(a){return a[a.Point=0]="Point",a[a.Range=1]="Range",a}({});function Tp(a,e,t){return`${a.identifier}-${t+1}-${Un(e)}`}class Cp{constructor(e,t){this.base=void 0,this._duration=null,this._timelineStart=null,this.appendInPlaceDisabled=void 0,this.appendInPlaceStarted=void 0,this.dateRange=void 0,this.hasPlayed=!1,this.cumulativeDuration=0,this.resumeOffset=NaN,this.playoutLimit=NaN,this.restrictions={skip:!1,jump:!1},this.snapOptions={out:!1,in:!1},this.assetList=[],this.assetListLoader=void 0,this.assetListResponse=null,this.resumeAnchor=void 0,this.error=void 0,this.resetOnResume=void 0,this.base=t,this.dateRange=e,this.setDateRange(e)}setDateRange(e){this.dateRange=e,this.resumeOffset=e.attr.optionalFloat("X-RESUME-OFFSET",this.resumeOffset),this.playoutLimit=e.attr.optionalFloat("X-PLAYOUT-LIMIT",this.playoutLimit),this.restrictions=e.attr.enumeratedStringList("X-RESTRICT",this.restrictions),this.snapOptions=e.attr.enumeratedStringList("X-SNAP",this.snapOptions)}reset(){var e;this.appendInPlaceStarted=!1,(e=this.assetListLoader)==null||e.destroy(),this.assetListLoader=void 0,this.supplementsPrimary||(this.assetListResponse=null,this.assetList=[],this._duration=null)}isAssetPastPlayoutLimit(e){var t;if(e>0&&e>=this.assetList.length)return!0;const n=this.playoutLimit;return e<=0||isNaN(n)?!1:n===0?!0:(((t=this.assetList[e])==null?void 0:t.startOffset)||0)>n}findAssetIndex(e){return this.assetList.indexOf(e)}get identifier(){return this.dateRange.id}get startDate(){return this.dateRange.startDate}get startTime(){const e=this.dateRange.startTime;if(this.snapOptions.out){const t=this.dateRange.tagAnchor;if(t)return vr(e,t)}return e}get startOffset(){return this.cue.pre?0:this.startTime}get startIsAligned(){if(this.startTime===0||this.snapOptions.out)return!0;const e=this.dateRange.tagAnchor;if(e){const t=this.dateRange.startTime,n=vr(t,e);return t-n<.1}return!1}get resumptionOffset(){const e=this.resumeOffset,t=Z(e)?e:this.duration;return this.cumulativeDuration+t}get resumeTime(){const e=this.startOffset+this.resumptionOffset;if(this.snapOptions.in){const t=this.resumeAnchor;if(t)return vr(e,t)}return e}get appendInPlace(){return this.appendInPlaceStarted?!0:this.appendInPlaceDisabled?!1:!!(!this.cue.once&&!this.cue.pre&&this.startIsAligned&&(isNaN(this.playoutLimit)&&isNaN(this.resumeOffset)||this.resumeOffset&&this.duration&&Math.abs(this.resumeOffset-this.duration)<tn))}set appendInPlace(e){if(this.appendInPlaceStarted){this.resetOnResume=!e;return}this.appendInPlaceDisabled=!e}get timelineStart(){return this._timelineStart!==null?this._timelineStart:this.startTime}set timelineStart(e){this._timelineStart=e}get duration(){const e=this.playoutLimit;let t;return this._duration!==null?t=this._duration:this.dateRange.duration?t=this.dateRange.duration:t=this.dateRange.plannedDuration||0,!isNaN(e)&&e<t&&(t=e),t}set duration(e){this._duration=e}get cue(){return this.dateRange.cue}get timelineOccupancy(){return this.dateRange.attr["X-TIMELINE-OCCUPIES"]==="RANGE"?Ni.Range:Ni.Point}get supplementsPrimary(){return this.dateRange.attr["X-TIMELINE-STYLE"]==="PRIMARY"}get contentMayVary(){return this.dateRange.attr["X-CONTENT-MAY-VARY"]!=="NO"}get assetUrl(){return this.dateRange.attr["X-ASSET-URI"]}get assetListUrl(){return this.dateRange.attr["X-ASSET-LIST"]}get baseUrl(){return this.base.url}get assetListLoaded(){return this.assetList.length>0||this.assetListResponse!==null}toString(){return Lp(this)}}function vr(a,e){return a-e.start<e.duration/2&&!(Math.abs(a-(e.start+e.duration))<tn)?e.start:e.start+e.duration}function vl(a,e,t){const n=new self.URL(a,t);return n.protocol!=="data:"&&n.searchParams.set("_HLS_primary_id",e),n}function br(a,e){for(;(t=a.assetList[++e])!=null&&t.error;)var t;return e}function Lp(a){return`["${a.identifier}" ${a.cue.pre?"<pre>":a.cue.post?"<post>":""}${a.timelineStart.toFixed(2)}-${a.resumeTime.toFixed(2)}]`}function Xt(a){const e=a.timelineStart,t=a.duration||0;return`["${a.identifier}" ${e.toFixed(2)}-${(e+t).toFixed(2)}]`}class Ip{constructor(e,t,n,i){this.hls=void 0,this.interstitial=void 0,this.assetItem=void 0,this.tracks=null,this.hasDetails=!1,this.mediaAttached=null,this._currentTime=void 0,this._bufferedEosTime=void 0,this.checkPlayout=()=>{this.reachedPlayout(this.currentTime)&&this.hls.trigger(x.PLAYOUT_LIMIT_REACHED,{})};const r=this.hls=new e(t);this.interstitial=n,this.assetItem=i;let s=i.uri;try{s=vl(s,t.primarySessionId).href}catch{}r.loadSource(s);const o=()=>{this.hasDetails=!0};r.once(x.LEVEL_LOADED,o),r.once(x.AUDIO_TRACK_LOADED,o),r.once(x.SUBTITLE_TRACK_LOADED,o),r.on(x.MEDIA_ATTACHING,(d,{media:l})=>{this.removeMediaListeners(),this.mediaAttached=l,this.interstitial.playoutLimit&&(l.addEventListener("timeupdate",this.checkPlayout),this.appendInPlace&&r.on(x.BUFFER_APPENDED,()=>{const u=this.bufferedEnd;this.reachedPlayout(u)&&(this._bufferedEosTime=u,r.trigger(x.BUFFERED_TO_END,void 0))}))})}get appendInPlace(){var e;return((e=this.interstitial)==null?void 0:e.appendInPlace)||!1}bufferedInPlaceToEnd(e){var t;if(!this.appendInPlace)return!1;if((t=this.hls)!=null&&t.bufferedToEnd)return!0;if(!e||!this._bufferedEosTime)return!1;const n=this.timelineOffset,i=he.bufferInfo(e,n,0);return this.getAssetTime(i.end)>=this._bufferedEosTime-.02}reachedPlayout(e){const n=this.interstitial.playoutLimit;return this.startOffset+e>=n}get destroyed(){var e;return!((e=this.hls)!=null&&e.userConfig)}get assetId(){return this.assetItem.identifier}get interstitialId(){return this.assetItem.parentIdentifier}get media(){var e;return((e=this.hls)==null?void 0:e.media)||null}get bufferedEnd(){const e=this.media||this.mediaAttached;if(!e)return this._bufferedEosTime?this._bufferedEosTime:this.currentTime;const t=he.bufferInfo(e,e.currentTime,.001);return this.getAssetTime(t.end)}get currentTime(){const e=this.media||this.mediaAttached;return e?this.getAssetTime(e.currentTime):this._currentTime||0}get duration(){const e=this.assetItem.duration;return e||0}get remaining(){const e=this.duration;return e?Math.max(0,e-this.currentTime):0}get startOffset(){return this.assetItem.startOffset}get timelineOffset(){var e;return((e=this.hls)==null?void 0:e.config.timelineOffset)||0}set timelineOffset(e){const t=this.timelineOffset;if(e!==t){const n=e-t;if(Math.abs(n)>1/9e4){if(this.hasDetails)throw new Error("Cannot set timelineOffset after playlists are loaded");this.hls.config.timelineOffset=e}}}getAssetTime(e){const t=this.timelineOffset,n=this.duration;return Math.min(Math.max(0,e-t),n)}removeMediaListeners(){const e=this.mediaAttached;e&&(this._currentTime=e.currentTime,this.bufferSnapShot(),e.removeEventListener("timeupdate",this.checkPlayout))}bufferSnapShot(){if(this.mediaAttached){var e;(e=this.hls)!=null&&e.bufferedToEnd&&(this._bufferedEosTime=this.bufferedEnd)}}destroy(){this.removeMediaListeners(),this.hls.destroy(),this.hls=this.interstitial=null,this.tracks=this.mediaAttached=this.checkPlayout=null}attachMedia(e){this.hls.attachMedia(e)}detachMedia(){this.removeMediaListeners(),this.mediaAttached=null,this.hls.detachMedia()}resumeBuffering(){this.hls.resumeBuffering()}pauseBuffering(){this.hls.pauseBuffering()}transferMedia(){return this.bufferSnapShot(),this.hls.transferMedia()}resetDetails(){const e=this.hls;if(this.hasDetails){e.stopLoad();const t=n=>delete n.details;e.levels.forEach(t),e.allAudioTracks.forEach(t),e.allSubtitleTracks.forEach(t),this.hasDetails=!1}}on(e,t,n){this.hls.on(e,t)}once(e,t,n){this.hls.once(e,t)}off(e,t,n){this.hls.off(e,t)}toString(){var e;return`HlsAssetPlayer: ${Xt(this.assetItem)} ${(e=this.hls)==null?void 0:e.sessionId} ${this.appendInPlace?"append-in-place":""}`}}const Ya=.033;class kp extends vt{constructor(e,t){super("interstitials-sched",t),this.onScheduleUpdate=void 0,this.eventMap={},this.events=null,this.items=null,this.durations={primary:0,playout:0,integrated:0},this.onScheduleUpdate=e}destroy(){this.reset(),this.onScheduleUpdate=null}reset(){this.eventMap={},this.setDurations(0,0,0),this.events&&this.events.forEach(e=>e.reset()),this.events=this.items=null}resetErrorsInRange(e,t){return this.events?this.events.reduce((n,i)=>e<=i.startOffset&&t>i.startOffset?(delete i.error,n+1):n,0):0}get duration(){const e=this.items;return e?e[e.length-1].end:0}get length(){return this.items?this.items.length:0}getEvent(e){return e&&this.eventMap[e]||null}hasEvent(e){return e in this.eventMap}findItemIndex(e,t){if(e.event)return this.findEventIndex(e.event.identifier);let n=-1;e.nextEvent?n=this.findEventIndex(e.nextEvent.identifier)-1:e.previousEvent&&(n=this.findEventIndex(e.previousEvent.identifier)+1);const i=this.items;if(i)for(i[n]||(t===void 0&&(t=e.start),n=this.findItemIndexAtTime(t));n>=0&&(r=i[n])!=null&&r.event;){var r;n--}return n}findItemIndexAtTime(e,t){const n=this.items;if(n)for(let i=0;i<n.length;i++){let r=n[i];if(t&&t!=="primary"&&(r=r[t]),e===r.start||e>r.start&&e<r.end)return i}return-1}findJumpRestrictedIndex(e,t){const n=this.items;if(n)for(let i=e;i<=t&&n[i];i++){const r=n[i].event;if(r!=null&&r.restrictions.jump&&!r.appendInPlace)return i}return-1}findEventIndex(e){const t=this.items;if(t)for(let i=t.length;i--;){var n;if(((n=t[i].event)==null?void 0:n.identifier)===e)return i}return-1}findAssetIndex(e,t){const n=e.assetList,i=n.length;if(i>1)for(let r=0;r<i;r++){const s=n[r];if(!s.error){const o=s.timelineStart;if(t===o||t>o&&t<o+(s.duration||0))return r}}return 0}get assetIdAtEnd(){var e,t;const n=(e=this.items)==null||(t=e[this.length-1])==null?void 0:t.event;if(n){const i=n.assetList,r=i[i.length-1];if(r)return r.identifier}return null}parseInterstitialDateRanges(e,t){const n=e.main.details,{dateRanges:i}=n,r=this.events,s=this.parseDateRanges(i,{url:n.url},t),o=Object.keys(i),d=r?r.filter(l=>!o.includes(l.identifier)):[];s.length&&s.sort((l,c)=>{const u=l.cue.pre,h=l.cue.post,m=c.cue.pre,g=c.cue.post;if(u&&!m)return-1;if(m&&!u||h&&!g)return 1;if(g&&!h)return-1;if(!u&&!m&&!h&&!g){const v=l.startTime,E=c.startTime;if(v!==E)return v-E}return l.dateRange.tagOrder-c.dateRange.tagOrder}),this.events=s,d.forEach(l=>{this.removeEvent(l)}),this.updateSchedule(e,d)}updateSchedule(e,t=[]){const n=this.events||[];if(n.length||t.length||this.length<2){const i=this.items,r=this.parseSchedule(n,e);(t.length||(i==null?void 0:i.length)!==r.length||r.some((o,d)=>Math.abs(o.playout.start-i[d].playout.start)>.005||Math.abs(o.playout.end-i[d].playout.end)>.005))&&(this.items=r,this.onScheduleUpdate(t,i))}}parseDateRanges(e,t,n){const i=[],r=Object.keys(e);for(let s=0;s<r.length;s++){const o=r[s],d=e[o];if(d.isInterstitial){let l=this.eventMap[o];l?l.setDateRange(d):(l=new Cp(d,t),this.eventMap[o]=l,n===!1&&(l.appendInPlace=n)),i.push(l)}}return i}parseSchedule(e,t){const n=[],i=t.main.details,r=i.live?1/0:i.edge;let s=0;if(e=e.filter(d=>!d.error&&!(d.cue.once&&d.hasPlayed)),e.length){this.resolveOffsets(e,t);let d=0,l=0;if(e.forEach((c,u)=>{const h=c.cue.pre,m=c.cue.post,g=e[u-1]||null,v=c.appendInPlace,E=m?r:c.startOffset,C=c.duration,I=c.timelineOccupancy===Ni.Range?C:0,L=c.resumptionOffset,R=(g==null?void 0:g.startTime)===E,_=E+c.cumulativeDuration;let N=v?_+C:E+L;if(h||!m&&E<=0){const O=l;l+=I,c.timelineStart=_;const U=s;s+=C,n.push({event:c,start:_,end:N,playout:{start:U,end:s},integrated:{start:O,end:l}})}else if(E<=r){if(!R){const D=E-d;if(D>Ya){const V=d,Y=l;l+=D;const se=s;s+=D;const J={previousEvent:e[u-1]||null,nextEvent:c,start:V,end:V+D,playout:{start:se,end:s},integrated:{start:Y,end:l}};n.push(J)}else D>0&&g&&(g.cumulativeDuration+=D,n[n.length-1].end=E)}m&&(N=_),c.timelineStart=_;const O=l;l+=I;const U=s;s+=C,n.push({event:c,start:_,end:N,playout:{start:U,end:s},integrated:{start:O,end:l}})}else return;const P=c.resumeTime;m||P>r?d=r:d=P}),d<r){var o;const c=d,u=l,h=r-d;l+=h;const m=s;s+=h,n.push({previousEvent:((o=n[n.length-1])==null?void 0:o.event)||null,nextEvent:null,start:d,end:c+h,playout:{start:m,end:s},integrated:{start:u,end:l}})}this.setDurations(r,s,l)}else n.push({previousEvent:null,nextEvent:null,start:0,end:r,playout:{start:0,end:r},integrated:{start:0,end:r}}),this.setDurations(r,r,r);return n}setDurations(e,t,n){this.durations={primary:e,playout:t,integrated:n}}resolveOffsets(e,t){const n=t.main.details,i=n.live?1/0:n.edge;let r=0,s=-1;e.forEach((o,d)=>{const l=o.cue.pre,c=o.cue.post,u=l?0:c?i:o.startTime;this.updateAssetDurations(o),s===u?o.cumulativeDuration=r:(r=0,s=u),!c&&o.snapOptions.in&&(o.resumeAnchor=Nt(null,n.fragments,o.startOffset+o.resumptionOffset,0,0)||void 0),o.appendInPlace&&!o.appendInPlaceStarted&&(this.primaryCanResumeInPlaceAt(o,t)||(o.appendInPlace=!1)),!o.appendInPlace&&d+1<e.length&&e[d+1].startTime-e[d].resumeTime<Ya&&(e[d+1].appendInPlace=!1,e[d+1].appendInPlace&&this.warn(`Could not change append strategy for abutting event ${o}`));const m=Z(o.resumeOffset)?o.resumeOffset:o.duration;r+=m})}primaryCanResumeInPlaceAt(e,t){const n=e.resumeTime,i=e.startTime+e.resumptionOffset;return Math.abs(n-i)>tn?(this.log(`"${e.identifier}" resumption ${n} not aligned with estimated timeline end ${i}`),!1):t?!Object.keys(t).some(s=>{const o=t[s].details,d=o.edge;if(n>=d)return this.log(`"${e.identifier}" resumption ${n} past ${s} playlist end ${d}`),!1;const l=Nt(null,o.fragments,n);if(!l)return this.log(`"${e.identifier}" resumption ${n} does not align with any fragments in ${s} playlist (${o.fragStart}-${o.fragmentEnd})`),!0;const c=s==="audio"?.175:0;return Math.abs(l.start-n)<tn+c||Math.abs(l.end-n)<tn+c?!1:(this.log(`"${e.identifier}" resumption ${n} not aligned with ${s} fragment bounds (${l.start}-${l.end} sn: ${l.sn} cc: ${l.cc})`),!0)}):(this.log(`"${e.identifier}" resumption ${n} can not be aligned with media (none selected)`),!1)}updateAssetDurations(e){if(!e.assetListLoaded)return;const t=e.timelineStart;let n=0,i=!1,r=!1;e.assetList.forEach((s,o)=>{const d=t+n;s.startOffset=n,s.timelineStart=d,i||(i=s.duration===null),r||(r=!!s.error);const l=s.error?0:s.duration||0;n+=l}),i&&!r?e.duration=Math.max(n,e.duration):e.duration=n}removeEvent(e){e.reset(),delete this.eventMap[e.identifier]}}function Lt(a){return`[${a.event?'"'+a.event.identifier+'"':"primary"}: ${a.start.toFixed(2)}-${a.end.toFixed(2)}]`}class wp{constructor(e){this.hls=void 0,this.hls=e}destroy(){this.hls=null}loadAssetList(e,t){const n=e.assetListUrl;let i;try{i=vl(n,this.hls.sessionId,e.baseUrl)}catch(h){const m=this.assignAssetListError(e,F.ASSET_LIST_LOAD_ERROR,h,n);this.hls.trigger(x.ERROR,m);return}t&&i.protocol!=="data:"&&i.searchParams.set("_HLS_start_offset",""+t);const r=this.hls.config,s=r.loader,o=new s(r),d={responseType:"json",url:i.href},l=r.interstitialAssetListLoadPolicy.default,c={loadPolicy:l,timeout:l.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0},u={onSuccess:(h,m,g,v)=>{const E=h.data,C=E==null?void 0:E.ASSETS;if(!Array.isArray(C)){const I=this.assignAssetListError(e,F.ASSET_LIST_PARSING_ERROR,new Error("Invalid interstitial asset list"),g.url,m,v);this.hls.trigger(x.ERROR,I);return}e.assetListResponse=E,this.hls.trigger(x.ASSET_LIST_LOADED,{event:e,assetListResponse:E,networkDetails:v})},onError:(h,m,g,v)=>{const E=this.assignAssetListError(e,F.ASSET_LIST_LOAD_ERROR,new Error(`Error loading X-ASSET-LIST: HTTP status ${h.code} ${h.text} (${m.url})`),m.url,v,g);this.hls.trigger(x.ERROR,E)},onTimeout:(h,m,g)=>{const v=this.assignAssetListError(e,F.ASSET_LIST_LOAD_TIMEOUT,new Error(`Timeout loading X-ASSET-LIST (${m.url})`),m.url,h,g);this.hls.trigger(x.ERROR,v)}};return o.load(d,c,u),this.hls.trigger(x.ASSET_LIST_LOADING,{event:e}),o}assignAssetListError(e,t,n,i,r,s){return e.error=n,{type:oe.NETWORK_ERROR,details:t,fatal:!1,interstitial:e,url:i,error:n,networkDetails:s,stats:r}}}function ja(a){a==null||a.play().catch(()=>{})}class Rp extends vt{constructor(e,t){super("interstitials",e.logger),this.HlsPlayerClass=void 0,this.hls=void 0,this.assetListLoader=void 0,this.mediaSelection=null,this.altSelection=null,this.media=null,this.detachedData=null,this.requiredTracks=null,this.manager=null,this.playerQueue=[],this.bufferedPos=-1,this.timelinePos=-1,this.schedule=void 0,this.playingItem=null,this.bufferingItem=null,this.waitingItem=null,this.endedItem=null,this.playingAsset=null,this.endedAsset=null,this.bufferingAsset=null,this.shouldPlay=!1,this.onPlay=()=>{this.shouldPlay=!0},this.onPause=()=>{this.shouldPlay=!1},this.onSeeking=()=>{const n=this.currentTime;if(n===void 0||this.playbackDisabled)return;const i=n-this.timelinePos;if(Math.abs(i)<1/7056e5)return;const s=i<=-.01;this.timelinePos=n,this.bufferedPos=n;const o=this.playingItem;if(!o){this.checkBuffer();return}if(s&&this.schedule.resetErrorsInRange(n,n-i)&&this.updateSchedule(),this.checkBuffer(),s&&n<o.start||n>=o.end){var d;const h=this.schedule.findItemIndexAtTime(this.timelinePos);if(!this.isInterstitial(o)&&(d=this.media)!=null&&d.paused&&(this.shouldPlay=!1),!s){const m=this.findItemIndex(o);if(h>m){const g=this.schedule.findJumpRestrictedIndex(m+1,h);if(g>m){this.setSchedulePosition(g);return}}}this.setSchedulePosition(h);return}const l=this.playingAsset;if(!l){if(this.playingLastItem&&this.isInterstitial(o)){const h=o.event.assetList[0];h&&(this.endedItem=this.playingItem,this.playingItem=null,this.setScheduleToAssetAtTime(n,h))}return}const c=l.timelineStart,u=l.duration||0;(s&&n<c||n>=c+u)&&this.setScheduleToAssetAtTime(n,l)},this.onTimeupdate=()=>{const n=this.currentTime;if(n===void 0||this.playbackDisabled)return;if(n>this.timelinePos)this.timelinePos=n,n>this.bufferedPos&&this.checkBuffer();else return;const i=this.playingItem;if(!i||this.playingLastItem)return;if(n>=i.end){this.timelinePos=i.end;const o=this.findItemIndex(i);this.setSchedulePosition(o+1)}const r=this.playingAsset;if(!r)return;const s=r.timelineStart+(r.duration||0);n>=s&&this.setScheduleToAssetAtTime(n,r)},this.onScheduleUpdate=(n,i)=>{const r=this.schedule,s=this.playingItem,o=r.events||[],d=r.items||[],l=r.durations,c=n.map(g=>g.identifier),u=!!(o.length||c.length);(u||i)&&this.log(`INTERSTITIALS_UPDATED (${o.length}): ${o}
Schedule: ${d.map(g=>Lt(g))} pos: ${this.timelinePos}`),c.length&&this.log(`Removed events ${c}`),this.playerQueue.forEach(g=>{if(g.interstitial.appendInPlace){const v=g.assetItem.timelineStart,E=g.timelineOffset-v;if(E)try{g.timelineOffset=v}catch(C){Math.abs(E)>tn&&this.warn(`${C} ("${g.assetId}" ${g.timelineOffset}->${v})`)}}});let h=null;if(s){const g=this.updateItem(s,this.timelinePos);this.itemsMatch(s,g)&&(this.playingItem=g,this.waitingItem=this.endedItem=null,h=()=>this.trimInPlace(g,s))}else this.waitingItem=this.updateItem(this.waitingItem),this.endedItem=this.updateItem(this.endedItem);const m=this.bufferingItem;if(m){const g=this.updateItem(m,this.bufferedPos);this.itemsMatch(m,g)?(this.bufferingItem=g,h||(h=()=>this.trimInPlace(g,m))):m.event&&(this.bufferingItem=this.playingItem,this.clearInterstitial(m.event,null))}if(n.forEach(g=>{g.assetList.forEach(v=>{this.clearAssetPlayer(v.identifier,null)})}),u||i){if(this.hls.trigger(x.INTERSTITIALS_UPDATED,{events:o.slice(0),schedule:d.slice(0),durations:l,removedIds:c}),this.isInterstitial(s)&&c.includes(s.event.identifier)){this.warn(`Interstitial "${s.event.identifier}" removed while playing`),this.primaryFallback(s.event);return}h&&h(),this.checkBuffer()}},this.hls=e,this.HlsPlayerClass=t,this.assetListLoader=new wp(e),this.schedule=new kp(this.onScheduleUpdate,e.logger),this.registerListeners()}registerListeners(){const e=this.hls;e.on(x.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.LEVEL_UPDATED,this.onLevelUpdated,this),e.on(x.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.on(x.AUDIO_TRACK_UPDATED,this.onAudioTrackUpdated,this),e.on(x.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.on(x.SUBTITLE_TRACK_UPDATED,this.onSubtitleTrackUpdated,this),e.on(x.EVENT_CUE_ENTER,this.onInterstitialCueEnter,this),e.on(x.ASSET_LIST_LOADED,this.onAssetListLoaded,this),e.on(x.BUFFER_APPENDED,this.onBufferAppended,this),e.on(x.BUFFER_FLUSHED,this.onBufferFlushed,this),e.on(x.BUFFERED_TO_END,this.onBufferedToEnd,this),e.on(x.MEDIA_ENDED,this.onMediaEnded,this),e.on(x.ERROR,this.onError,this),e.on(x.DESTROYING,this.onDestroying,this)}unregisterListeners(){const e=this.hls;e&&(e.off(x.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.LEVEL_UPDATED,this.onLevelUpdated,this),e.off(x.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.off(x.AUDIO_TRACK_UPDATED,this.onAudioTrackUpdated,this),e.off(x.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.off(x.SUBTITLE_TRACK_UPDATED,this.onSubtitleTrackUpdated,this),e.off(x.EVENT_CUE_ENTER,this.onInterstitialCueEnter,this),e.off(x.ASSET_LIST_LOADED,this.onAssetListLoaded,this),e.off(x.BUFFER_CODECS,this.onBufferCodecs,this),e.off(x.BUFFER_APPENDED,this.onBufferAppended,this),e.off(x.BUFFER_FLUSHED,this.onBufferFlushed,this),e.off(x.BUFFERED_TO_END,this.onBufferedToEnd,this),e.off(x.MEDIA_ENDED,this.onMediaEnded,this),e.off(x.ERROR,this.onError,this),e.off(x.DESTROYING,this.onDestroying,this))}startLoad(){this.resumeBuffering()}stopLoad(){this.pauseBuffering()}resumeBuffering(){var e;(e=this.getBufferingPlayer())==null||e.resumeBuffering()}pauseBuffering(){var e;(e=this.getBufferingPlayer())==null||e.pauseBuffering()}destroy(){this.unregisterListeners(),this.stopLoad(),this.assetListLoader&&this.assetListLoader.destroy(),this.emptyPlayerQueue(),this.clearScheduleState(),this.schedule&&this.schedule.destroy(),this.media=this.detachedData=this.mediaSelection=this.requiredTracks=this.altSelection=this.manager=null,this.hls=this.HlsPlayerClass=this.schedule=this.log=null,this.assetListLoader=null,this.onPlay=this.onPause=this.onSeeking=this.onTimeupdate=null,this.onScheduleUpdate=null}onDestroying(){const e=this.primaryMedia||this.media;e&&this.removeMediaListeners(e)}removeMediaListeners(e){Ze(e,"play",this.onPlay),Ze(e,"pause",this.onPause),Ze(e,"seeking",this.onSeeking),Ze(e,"timeupdate",this.onTimeupdate)}onMediaAttaching(e,t){const n=this.media=t.media;je(n,"seeking",this.onSeeking),je(n,"timeupdate",this.onTimeupdate),je(n,"play",this.onPlay),je(n,"pause",this.onPause)}onMediaAttached(e,t){const n=this.effectivePlayingItem,i=this.detachedData;if(this.detachedData=null,n===null)this.checkStart();else if(!i){this.clearScheduleState();const r=this.findItemIndex(n);this.setSchedulePosition(r)}}clearScheduleState(){this.playingItem=this.bufferingItem=this.waitingItem=this.endedItem=this.playingAsset=this.endedAsset=this.bufferingAsset=null}onMediaDetaching(e,t){const n=!!t.transferMedia,i=this.media;if(this.media=null,!n&&(i&&this.removeMediaListeners(i),this.detachedData)){const r=this.getBufferingPlayer();r&&(this.playingAsset=this.endedAsset=this.bufferingAsset=this.bufferingItem=this.waitingItem=this.detachedData=null,r.detachMedia()),this.shouldPlay=!1}}get interstitialsManager(){if(!this.manager){if(!this.hls)return null;const e=this,t=()=>e.bufferingItem||e.waitingItem,n=u=>u&&e.getAssetPlayer(u.identifier),i=(u,h,m,g,v)=>{if(u){let E=u[h].start;const C=u.event;if(C){if(h==="playout"||C.timelineOccupancy!==Ni.Point){const I=n(m);(I==null?void 0:I.interstitial)===C&&(E+=I.assetItem.startOffset+I[v])}}else{const I=g==="bufferedPos"?s():e[g];E+=I-u.start}return E}return 0},r=(u,h)=>{if(u!==0&&h!=="primary"&&e.schedule.length){var m;const g=e.schedule.findItemIndexAtTime(u),v=(m=e.schedule.items)==null?void 0:m[g];if(v){const E=v[h].start-v.start;return u+E}}return u},s=()=>{const u=e.bufferedPos;return u===Number.MAX_VALUE?o("primary"):Math.max(u,0)},o=u=>{var h;return(h=e.primaryDetails)!=null&&h.live?e.primaryDetails.edge:e.schedule.durations[u]},d=(u,h)=>{var m,g;const v=e.effectivePlayingItem;if(v!=null&&(m=v.event)!=null&&m.restrictions.skip)return;e.log(`seek to ${u} "${h}"`);const E=e.effectivePlayingItem,C=e.schedule.findItemIndexAtTime(u,h),I=(g=e.schedule.items)==null?void 0:g[C],L=e.getBufferingPlayer(),R=L==null?void 0:L.interstitial,_=R==null?void 0:R.appendInPlace,N=E&&e.itemsMatch(E,I);if(E&&(_||N)){const O=n(e.playingAsset),U=(O==null?void 0:O.media)||e.primaryMedia;if(U){const D=h==="primary"?U.currentTime:i(E,h,e.playingAsset,"timelinePos","currentTime"),V=u-D,Y=(_?D:U.currentTime)+V;if(Y>=0&&(!O||_||Y<=O.duration)){U.currentTime=Y;return}}}if(I){let O=u;if(h!=="primary"){const D=I[h].start,V=u-D;O=I.start+V}const U=!e.isInterstitial(I);if((!e.isInterstitial(E)||E.event.appendInPlace)&&(U||I.event.appendInPlace)){const D=e.media||(_?L==null?void 0:L.media:null);D&&(D.currentTime=O)}else if(E){const D=e.findItemIndex(E);if(C>D){const Y=e.schedule.findJumpRestrictedIndex(D+1,C);if(Y>D){e.setSchedulePosition(Y);return}}let V=0;if(U)e.timelinePos=O,e.checkBuffer();else{var P;const Y=I==null||(P=I.event)==null?void 0:P.assetList;if(Y){const se=u-(I[h]||I).start;for(let J=Y.length;J--;){const ee=Y[J];if(ee.duration&&se>=ee.startOffset&&se<ee.startOffset+ee.duration){V=J;break}}}}e.setSchedulePosition(C,V)}}},l=()=>{const u=e.effectivePlayingItem;if(e.isInterstitial(u))return u;const h=t();return e.isInterstitial(h)?h:null},c={get currentTime(){const u=l(),h=e.effectivePlayingItem;return h&&h===u?i(h,"playout",e.effectivePlayingAsset,"timelinePos","currentTime")-h.playout.start:0},set currentTime(u){const h=l(),m=e.effectivePlayingItem;m&&m===h&&d(u+m.playout.start,"playout")},get duration(){const u=l();return u?u.playout.end-u.playout.start:0},get assetPlayers(){var u;const h=(u=l())==null?void 0:u.event.assetList;return h?h.map(m=>e.getAssetPlayer(m.identifier)):[]},get playingIndex(){var u;const h=(u=l())==null?void 0:u.event;return h&&e.effectivePlayingAsset?h.findAssetIndex(e.effectivePlayingAsset):-1},get scheduleItem(){return l()}};this.manager={get events(){var u,h;return((u=e.schedule)==null||(h=u.events)==null?void 0:h.slice(0))||[]},get schedule(){var u,h;return((u=e.schedule)==null||(h=u.items)==null?void 0:h.slice(0))||[]},get interstitialPlayer(){return l()?c:null},get playerQueue(){return e.playerQueue.slice(0)},get bufferingAsset(){return e.bufferingAsset},get bufferingItem(){return t()},get bufferingIndex(){const u=t();return e.findItemIndex(u)},get playingAsset(){return e.effectivePlayingAsset},get playingItem(){return e.effectivePlayingItem},get playingIndex(){const u=e.effectivePlayingItem;return e.findItemIndex(u)},primary:{get bufferedEnd(){return s()},get currentTime(){const u=e.timelinePos;return u>0?u:0},set currentTime(u){d(u,"primary")},get duration(){return o("primary")},get seekableStart(){var u;return((u=e.primaryDetails)==null?void 0:u.fragmentStart)||0}},integrated:{get bufferedEnd(){return i(t(),"integrated",e.bufferingAsset,"bufferedPos","bufferedEnd")},get currentTime(){return i(e.effectivePlayingItem,"integrated",e.effectivePlayingAsset,"timelinePos","currentTime")},set currentTime(u){d(u,"integrated")},get duration(){return o("integrated")},get seekableStart(){var u;return r(((u=e.primaryDetails)==null?void 0:u.fragmentStart)||0,"integrated")}},skip:()=>{const u=e.effectivePlayingItem,h=u==null?void 0:u.event;if(h&&!h.restrictions.skip){const m=e.findItemIndex(u);if(h.appendInPlace){const g=u.playout.start+u.event.duration;d(g+.001,"playout")}else e.advanceAfterAssetEnded(h,m,1/0)}}}}return this.manager}get effectivePlayingItem(){return this.waitingItem||this.playingItem||this.endedItem}get effectivePlayingAsset(){return this.playingAsset||this.endedAsset}get playingLastItem(){var e;const t=this.playingItem,n=(e=this.schedule)==null?void 0:e.items;return!this.playbackStarted||!t||!n?!1:this.findItemIndex(t)===n.length-1}get playbackStarted(){return this.effectivePlayingItem!==null}get currentTime(){var e,t,n;if(this.mediaSelection===null)return;const i=this.waitingItem||this.playingItem;if(this.isInterstitial(i)&&!i.event.appendInPlace)return;let r=this.media;!r&&(e=this.bufferingItem)!=null&&(t=e.event)!=null&&t.appendInPlace&&(r=this.primaryMedia);const s=(n=r)==null?void 0:n.currentTime;if(!(s===void 0||!Z(s)))return s}get primaryMedia(){var e;return this.media||((e=this.detachedData)==null?void 0:e.media)||null}isInterstitial(e){return!!(e!=null&&e.event)}retreiveMediaSource(e,t){const n=this.getAssetPlayer(e);n&&this.transferMediaFromPlayer(n,t)}transferMediaFromPlayer(e,t){const n=e.interstitial.appendInPlace,i=e.media;if(n&&i===this.primaryMedia){if(this.bufferingAsset=null,(!t||this.isInterstitial(t)&&!t.event.appendInPlace)&&t&&i){this.detachedData={media:i};return}const r=e.transferMedia();this.log(`transfer MediaSource from ${e} ${Ie(r)}`),this.detachedData=r}else t&&i&&(this.shouldPlay||(this.shouldPlay=!i.paused))}transferMediaTo(e,t){var n,i;if(e.media===t)return;let r=null;const s=this.hls,o=e!==s,d=o&&e.interstitial.appendInPlace,l=(n=this.detachedData)==null?void 0:n.mediaSource;let c;if(s.media)d&&(r=s.transferMedia(),this.detachedData=r),c="Primary";else if(l){const m=this.getBufferingPlayer();m?(r=m.transferMedia(),c=`${m}`):c="detached MediaSource"}else c="detached media";if(!r){if(l)r=this.detachedData,this.log(`using detachedData: MediaSource ${Ie(r)}`);else if(!this.detachedData||s.media===t){const m=this.playerQueue;m.length>1&&m.forEach(g=>{if(o&&g.interstitial.appendInPlace!==d){const v=g.interstitial;this.clearInterstitial(g.interstitial,null),v.appendInPlace=!1,v.appendInPlace&&this.warn(`Could not change append strategy for queued assets ${v}`)}}),this.hls.detachMedia(),this.detachedData={media:t}}}const u=r&&"mediaSource"in r&&((i=r.mediaSource)==null?void 0:i.readyState)!=="closed",h=u&&r?r:t;if(this.log(`${u?"transfering MediaSource":"attaching media"} to ${o?e:"Primary"} from ${c}`),h===r){const m=o&&e.assetId===this.schedule.assetIdAtEnd;h.overrides={duration:this.schedule.duration,endOfStream:!o||m,cueRemoval:!o}}e.attachMedia(h)}onInterstitialCueEnter(){this.onTimeupdate()}checkStart(){const e=this.schedule,t=e.events;if(!t||this.playbackDisabled||!this.media)return;this.bufferedPos===-1&&(this.bufferedPos=0);const n=this.timelinePos,i=this.effectivePlayingItem;if(n===-1){const r=this.hls.startPosition;if(this.timelinePos=r,t.length&&t[0].cue.pre){const s=e.findEventIndex(t[0].identifier);this.setSchedulePosition(s)}else if(r>=0||!this.primaryLive){const s=this.timelinePos=r>0?r:0,o=e.findItemIndexAtTime(s);this.setSchedulePosition(o)}}else if(i&&!this.playingItem){const r=e.findItemIndex(i);this.setSchedulePosition(r)}}advanceAfterAssetEnded(e,t,n){const i=br(e,n);if(!e.isAssetPastPlayoutLimit(i))this.setSchedulePosition(t,i);else{const r=this.schedule.items;if(r){const s=t+1,o=r.length;if(s>=o){this.setSchedulePosition(-1);return}const d=e.resumeTime;this.timelinePos<d&&(this.timelinePos=d,this.checkBuffer()),this.setSchedulePosition(s)}}}setScheduleToAssetAtTime(e,t){const n=this.schedule,i=t.parentIdentifier,r=n.getEvent(i);if(r){const s=n.findEventIndex(i),o=n.findAssetIndex(r,e);this.advanceAfterAssetEnded(r,s,o-1)}}setSchedulePosition(e,t){const n=this.schedule.items;if(!n||this.playbackDisabled)return;this.log(`setSchedulePosition ${e}, ${t}`);const i=e>=0?n[e]:null,r=this.playingItem,s=this.playingLastItem;if(this.isInterstitial(r)){var o;const l=r.event,c=this.playingAsset,u=c==null?void 0:c.identifier,h=u?this.getAssetPlayer(u):null;if(h&&u&&(!this.eventItemsMatch(r,i)||t!==void 0&&u!==((o=l.assetList)==null?void 0:o[t].identifier))){var d;const m=l.findAssetIndex(c);this.log(`INTERSTITIAL_ASSET_ENDED ${m+1}/${l.assetList.length} ${Xt(c)}`),this.endedAsset=c,this.playingAsset=null,this.hls.trigger(x.INTERSTITIAL_ASSET_ENDED,{asset:c,assetListIndex:m,event:l,schedule:n.slice(0),scheduleIndex:e,player:h}),this.retreiveMediaSource(u,i),h.media&&!((d=this.detachedData)!=null&&d.mediaSource)&&h.detachMedia()}if(!this.eventItemsMatch(r,i)&&(this.endedItem=r,this.playingItem=null,this.log(`INTERSTITIAL_ENDED ${l} ${Lt(r)}`),l.hasPlayed=!0,this.hls.trigger(x.INTERSTITIAL_ENDED,{event:l,schedule:n.slice(0),scheduleIndex:e}),l.cue.once)){this.updateSchedule();const m=this.schedule.items;if(i&&m){const g=this.schedule.findItemIndex(i);this.advanceSchedule(g,m,t,r,s)}return}}this.advanceSchedule(e,n,t,r,s)}advanceSchedule(e,t,n,i,r){const s=e>=0?t[e]:null,o=this.primaryMedia,d=this.playerQueue;if(d.length&&d.forEach(l=>{const c=l.interstitial,u=this.schedule.findEventIndex(c.identifier);(u<e||u>e+1)&&this.clearInterstitial(c,s)}),this.isInterstitial(s)){this.timelinePos=Math.min(Math.max(this.timelinePos,s.start),s.end);const l=s.event;if(n===void 0){n=this.schedule.findAssetIndex(l,this.timelinePos);const m=br(l,n-1);if(l.isAssetPastPlayoutLimit(m)){this.advanceAfterAssetEnded(l,e,n);return}n=m}const c=this.waitingItem;this.assetsBuffered(s,o)||this.setBufferingItem(s);let u=this.preloadAssets(l,n);if(this.eventItemsMatch(s,c||i)||(this.waitingItem=s,this.log(`INTERSTITIAL_STARTED ${Lt(s)} ${l.appendInPlace?"append in place":""}`),this.hls.trigger(x.INTERSTITIAL_STARTED,{event:l,schedule:t.slice(0),scheduleIndex:e})),!l.assetListLoaded){this.log(`Waiting for ASSET-LIST to complete loading ${l}`);return}if(l.assetListLoader&&(l.assetListLoader.destroy(),l.assetListLoader=void 0),!o){this.log(`Waiting for attachMedia to start Interstitial ${l}`);return}this.waitingItem=this.endedItem=null,this.playingItem=s;const h=l.assetList[n];if(!h){const m=t[e+1],g=this.media;m&&g&&!this.isInterstitial(m)&&g.currentTime<m.start&&(g.currentTime=this.timelinePos=m.start),this.advanceAfterAssetEnded(l,e,n||0);return}if(u||(u=this.getAssetPlayer(h.identifier)),u===null||u.destroyed){const m=l.assetList.length;this.warn(`asset ${n+1}/${m} player destroyed ${l}`),u=this.createAssetPlayer(l,h,n)}if(!this.eventItemsMatch(s,this.bufferingItem)&&l.appendInPlace&&this.isAssetBuffered(h))return;this.startAssetPlayer(u,n,t,e,o),this.shouldPlay&&ja(u.media)}else s!==null?(this.resumePrimary(s,e,i),this.shouldPlay&&ja(this.hls.media)):r&&this.isInterstitial(i)&&(this.endedItem=null,this.playingItem=i,i.event.appendInPlace||this.attachPrimary(this.schedule.durations.primary,null))}get playbackDisabled(){return this.hls.config.enableInterstitialPlayback===!1}get primaryDetails(){var e,t;return(e=this.mediaSelection)==null||(t=e.main)==null?void 0:t.details}get primaryLive(){var e;return!!((e=this.primaryDetails)!=null&&e.live)}resumePrimary(e,t,n){var i;if(this.playingItem=e,this.playingAsset=this.endedAsset=null,this.waitingItem=this.endedItem=null,this.bufferedToItem(e),this.log(`resuming ${Lt(e)}`),!((i=this.detachedData)!=null&&i.mediaSource)){let s=this.timelinePos;(s<e.start||s>=e.end)&&(s=this.getPrimaryResumption(e,t),this.timelinePos=s),this.attachPrimary(s,e)}if(!n)return;const r=this.schedule.items;r&&(this.log(`INTERSTITIALS_PRIMARY_RESUMED ${Lt(e)}`),this.hls.trigger(x.INTERSTITIALS_PRIMARY_RESUMED,{schedule:r.slice(0),scheduleIndex:t}),this.checkBuffer())}getPrimaryResumption(e,t){const n=e.start;if(this.primaryLive){const i=this.primaryDetails;if(t===0)return this.hls.startPosition;if(i&&(n<i.fragmentStart||n>i.edge))return this.hls.liveSyncPosition||-1}return n}isAssetBuffered(e){const t=this.getAssetPlayer(e.identifier);return t!=null&&t.hls?t.hls.bufferedToEnd:he.bufferInfo(this.primaryMedia,this.timelinePos,0).end+1>=e.timelineStart+(e.duration||0)}attachPrimary(e,t,n){t?this.setBufferingItem(t):this.bufferingItem=this.playingItem,this.bufferingAsset=null;const i=this.primaryMedia;if(!i)return;const r=this.hls;r.media?this.checkBuffer():(this.transferMediaTo(r,i),n&&this.startLoadingPrimaryAt(e,n)),n||(this.timelinePos=e,this.startLoadingPrimaryAt(e,n))}startLoadingPrimaryAt(e,t){var n;const i=this.hls;!i.loadingEnabled||!i.media||Math.abs((((n=i.mainForwardBufferInfo)==null?void 0:n.start)||i.media.currentTime)-e)>.5?i.startLoad(e,t):i.bufferingEnabled||i.resumeBuffering()}onManifestLoading(){this.stopLoad(),this.schedule.reset(),this.emptyPlayerQueue(),this.clearScheduleState(),this.shouldPlay=!1,this.bufferedPos=this.timelinePos=-1,this.mediaSelection=this.altSelection=this.manager=this.requiredTracks=null,this.hls.off(x.BUFFER_CODECS,this.onBufferCodecs,this),this.hls.on(x.BUFFER_CODECS,this.onBufferCodecs,this)}onLevelUpdated(e,t){if(t.level===-1)return;const n=this.hls.levels[t.level],i=Ee(Ee({},this.mediaSelection||this.altSelection),{},{main:n});this.mediaSelection=i,this.schedule.parseInterstitialDateRanges(i,this.hls.config.interstitialAppendInPlace),!this.effectivePlayingItem&&this.schedule.items&&this.checkStart()}onAudioTrackUpdated(e,t){const n=this.hls.audioTracks[t.id],i=this.mediaSelection;if(!i){this.altSelection=Ee(Ee({},this.altSelection),{},{audio:n});return}const r=Ee(Ee({},i),{},{audio:n});this.mediaSelection=r}onSubtitleTrackUpdated(e,t){const n=this.hls.subtitleTracks[t.id],i=this.mediaSelection;if(!i){this.altSelection=Ee(Ee({},this.altSelection),{},{subtitles:n});return}const r=Ee(Ee({},i),{},{subtitles:n});this.mediaSelection=r}onAudioTrackSwitching(e,t){const n=sa(t);this.playerQueue.forEach(i=>i.hls.setAudioOption(t)||i.hls.setAudioOption(n))}onSubtitleTrackSwitch(e,t){const n=sa(t);this.playerQueue.forEach(i=>i.hls.setSubtitleOption(t)||t.id!==-1&&i.hls.setSubtitleOption(n))}onBufferCodecs(e,t){const n=t.tracks;n&&(this.requiredTracks=n)}onBufferAppended(e,t){this.checkBuffer()}onBufferFlushed(e,t){const n=this.playingItem;if(n&&!this.itemsMatch(n,this.bufferingItem)&&!this.isInterstitial(n)){const i=this.timelinePos;this.bufferedPos=i,this.checkBuffer()}}onBufferedToEnd(e){const t=this.schedule.events;if(this.bufferedPos<Number.MAX_VALUE&&t){for(let i=0;i<t.length;i++){const r=t[i];if(r.cue.post){var n;const s=this.schedule.findEventIndex(r.identifier),o=(n=this.schedule.items)==null?void 0:n[s];this.isInterstitial(o)&&this.eventItemsMatch(o,this.bufferingItem)&&this.bufferedToItem(o,0);break}}this.bufferedPos=Number.MAX_VALUE}}onMediaEnded(e){const t=this.playingItem;if(!this.playingLastItem&&t){const n=this.findItemIndex(t);this.setSchedulePosition(n+1)}else this.shouldPlay=!1}updateItem(e,t){const n=this.schedule.items;if(e&&n){const i=this.findItemIndex(e,t);return n[i]||null}return null}trimInPlace(e,t){if(this.isInterstitial(e)&&e.event.appendInPlace&&t.end-e.end>.25){e.event.assetList.forEach((r,s)=>{e.event.isAssetPastPlayoutLimit(s)&&this.clearAssetPlayer(r.identifier,null)});const n=e.end+.25,i=he.bufferInfo(this.primaryMedia,n,0);(i.end>n||(i.nextStart||0)>n)&&(this.attachPrimary(n,null),this.flushFrontBuffer(n))}}itemsMatch(e,t){return!!t&&(e===t||e.event&&t.event&&this.eventItemsMatch(e,t)||!e.event&&!t.event&&this.findItemIndex(e)===this.findItemIndex(t))}eventItemsMatch(e,t){var n;return!!t&&(e===t||e.event.identifier===((n=t.event)==null?void 0:n.identifier))}findItemIndex(e,t){return e?this.schedule.findItemIndex(e,t):-1}updateSchedule(){const e=this.mediaSelection;e&&this.schedule.updateSchedule(e,[])}checkBuffer(e){const t=this.schedule.items;if(!t)return;const n=he.bufferInfo(this.primaryMedia,this.timelinePos,0);e&&(this.bufferedPos=this.timelinePos),e||(e=n.len<1),this.updateBufferedPos(n.end,t,e)}updateBufferedPos(e,t,n){const i=this.schedule,r=this.bufferingItem;if(this.bufferedPos>e)return;if(t.length===1&&this.itemsMatch(t[0],r)){this.bufferedPos=e;return}const s=this.playingItem,o=this.findItemIndex(s);let d=i.findItemIndexAtTime(e);if(this.bufferedPos<e){var l,c;const u=this.findItemIndex(r),h=Math.min(u+1,t.length-1),m=t[h];if((d===-1&&r&&e>=r.end||(l=m.event)!=null&&l.appendInPlace&&e+.01>=m.start)&&(d=h),h-o>1&&(r==null||(c=r.event)==null?void 0:c.appendInPlace)===!1)return;if(this.bufferedPos=e,d>u&&d>o)this.bufferedToItem(m);else{const g=this.primaryDetails;this.primaryLive&&g&&e>g.edge-g.targetduration&&m.start<g.edge+this.hls.config.interstitialLiveLookAhead&&this.isInterstitial(m)&&this.preloadAssets(m.event,0)}}else n&&s&&!this.itemsMatch(s,r)&&(d===o?this.bufferedToItem(s):d===o+1&&this.bufferedToItem(t[d]))}assetsBuffered(e,t){return e.event.assetList.length===0?!1:!e.event.assetList.some(i=>{const r=this.getAssetPlayer(i.identifier);return!(r!=null&&r.bufferedInPlaceToEnd(t))})}setBufferingItem(e){const t=this.bufferingItem,n=this.schedule;if(this.itemsMatch(e,t))this.bufferingItem!==e&&(this.bufferingItem=e);else{const{items:i,events:r}=n;if(!i||!r)return t;const s=this.isInterstitial(e),o=this.getBufferingPlayer();this.bufferingItem=e,this.bufferedPos=Math.max(e.start,Math.min(e.end,this.timelinePos));const d=o?o.remaining:t?t.end-this.timelinePos:0;this.log(`INTERSTITIALS_BUFFERED_TO_BOUNDARY ${Lt(e)}`+(t?` (${d.toFixed(2)} remaining)`:"")),this.playbackDisabled||(s?e.event.assetList.forEach(l=>{const c=this.getAssetPlayer(l.identifier);c&&c.resumeBuffering()}):(this.hls.resumeBuffering(),this.playerQueue.forEach(l=>l.pauseBuffering()))),this.hls.trigger(x.INTERSTITIALS_BUFFERED_TO_BOUNDARY,{events:r.slice(0),schedule:i.slice(0),bufferingIndex:this.findItemIndex(e),playingIndex:this.findItemIndex(this.playingItem)})}return t}bufferedToItem(e,t=0){const n=this.setBufferingItem(e);if(!this.playbackDisabled){if(this.isInterstitial(e))this.bufferedToEvent(e,t);else if(n!==null){this.bufferingAsset=null;const i=this.detachedData;i?i.mediaSource?this.attachPrimary(e.start,e,!0):this.preloadPrimary(e):this.preloadPrimary(e)}}}preloadPrimary(e){const t=this.findItemIndex(e),n=this.getPrimaryResumption(e,t);this.startLoadingPrimaryAt(n)}bufferedToEvent(e,t){const n=e.event,i=n.assetList.length===0&&!n.assetListLoader,r=n.cue.once;if(i||!r){const s=this.preloadAssets(n,t);if(s!=null&&s.interstitial.appendInPlace){const o=n.assetList[t],d=this.primaryMedia;o&&d&&this.bufferAssetPlayer(s,d)}}}preloadAssets(e,t){const n=e.assetUrl,i=e.assetList.length,r=i===0&&!e.assetListLoader,s=e.cue.once;if(r){const d=e.timelineStart;if(e.appendInPlace){var o;const h=this.playingItem;!this.isInterstitial(h)&&(h==null||(o=h.nextEvent)==null?void 0:o.identifier)===e.identifier&&this.flushFrontBuffer(d+.25)}let l,c=0;if(!this.playingItem&&this.primaryLive&&(c=this.hls.startPosition,c===-1&&(c=this.hls.liveSyncPosition||0)),c&&!(e.cue.pre||e.cue.post)){const h=c-d;h>0&&(l=Math.round(h*1e3)/1e3)}if(this.log(`Load interstitial asset ${t+1}/${n?1:i} ${e}${l?` live-start: ${c} start-offset: ${l}`:""}`),n)return this.createAsset(e,0,0,d,e.duration,n);const u=this.assetListLoader.loadAssetList(e,l);u&&(e.assetListLoader=u)}else if(!s&&i){for(let d=t;d<i;d++){const l=e.assetList[d],c=this.getAssetPlayerQueueIndex(l.identifier);(c===-1||this.playerQueue[c].destroyed)&&!l.error&&this.createAssetPlayer(e,l,d)}return this.getAssetPlayer(e.assetList[t].identifier)}return null}flushFrontBuffer(e){const t=this.requiredTracks;if(!t)return;this.log(`Removing front buffer starting at ${e}`),Object.keys(t).forEach(i=>{this.hls.trigger(x.BUFFER_FLUSHING,{startOffset:e,endOffset:1/0,type:i})})}getAssetPlayerQueueIndex(e){const t=this.playerQueue;for(let n=0;n<t.length;n++)if(e===t[n].assetId)return n;return-1}getAssetPlayer(e){const t=this.getAssetPlayerQueueIndex(e);return this.playerQueue[t]||null}getBufferingPlayer(){const{playerQueue:e,primaryMedia:t}=this;if(t){for(let n=0;n<e.length;n++)if(e[n].media===t)return e[n]}return null}createAsset(e,t,n,i,r,s){const o={parentIdentifier:e.identifier,identifier:Tp(e,s,t),duration:r,startOffset:n,timelineStart:i,uri:s};return this.createAssetPlayer(e,o,t)}createAssetPlayer(e,t,n){const i=this.hls,r=i.userConfig;let s=r.videoPreference;const o=i.loadLevelObj||i.levels[i.currentLevel];(s||o)&&(s=Se({},s),o.videoCodec&&(s.videoCodec=o.videoCodec),o.videoRange&&(s.allowedVideoRanges=[o.videoRange]));const d=i.audioTracks[i.audioTrack],l=i.subtitleTracks[i.subtitleTrack];let c=0;if(this.primaryLive||e.appendInPlace){const L=this.timelinePos-t.timelineStart;if(L>1){const R=t.duration;R&&L<R&&(c=L)}}const u=t.identifier,h=Ee(Ee({},r),{},{autoStartLoad:!0,startFragPrefetch:!0,primarySessionId:i.sessionId,assetPlayerId:u,abrEwmaDefaultEstimate:i.bandwidthEstimate,interstitialsController:void 0,startPosition:c,liveDurationInfinity:!1,testBandwidth:!1,videoPreference:s,audioPreference:d||r.audioPreference,subtitlePreference:l||r.subtitlePreference});e.appendInPlace&&(e.appendInPlaceStarted=!0,t.timelineStart&&(h.timelineOffset=t.timelineStart));const m=h.cmcd;m!=null&&m.sessionId&&m.contentId&&(h.cmcd=Se({},m,{contentId:Un(t.uri)})),this.getAssetPlayer(u)&&this.warn(`Duplicate date range identifier ${e} and asset ${u}`);const g=new Ip(this.HlsPlayerClass,h,e,t);this.playerQueue.push(g),e.assetList[n]=t;const v=L=>{if(L.live){const N=new Error(`Interstitials MUST be VOD assets ${e}`),P={fatal:!0,type:oe.OTHER_ERROR,details:F.INTERSTITIAL_ASSET_ITEM_ERROR,error:N};this.handleAssetItemError(P,e,this.schedule.findEventIndex(e.identifier),n,N.message);return}const R=L.edge-L.fragmentStart,_=t.duration;(_===null||R>_)&&(this.log(`Interstitial asset "${u}" duration change ${_} > ${R}`),t.duration=R,this.updateSchedule())};g.on(x.LEVEL_UPDATED,(L,{details:R})=>v(R)),g.on(x.LEVEL_PTS_UPDATED,(L,{details:R})=>v(R));const E=(L,R)=>{const _=this.getAssetPlayer(u);if(_&&R.tracks){_.off(x.BUFFER_CODECS,E),_.tracks=R.tracks;const N=this.primaryMedia;this.bufferingAsset===_.assetItem&&N&&!_.media&&this.bufferAssetPlayer(_,N)}};g.on(x.BUFFER_CODECS,E);const C=()=>{var L;const R=this.getAssetPlayer(u);if(this.log(`buffered to end of asset ${R}`),!R)return;const _=this.schedule.findEventIndex(e.identifier),N=(L=this.schedule.items)==null?void 0:L[_];if(this.isInterstitial(N)){const O=e.findAssetIndex(t),U=br(e,O);if(!e.isAssetPastPlayoutLimit(U))this.bufferedToItem(N,U);else{var P;const D=(P=this.schedule.items)==null?void 0:P[_+1];D&&this.bufferedToItem(D)}}};g.on(x.BUFFERED_TO_END,C);const I=L=>()=>{if(!this.getAssetPlayer(u))return;this.shouldPlay=!0;const _=this.schedule.findEventIndex(e.identifier);this.advanceAfterAssetEnded(e,_,L)};return g.once(x.MEDIA_ENDED,I(n)),g.once(x.PLAYOUT_LIMIT_REACHED,I(1/0)),g.on(x.ERROR,(L,R)=>{const _=this.getAssetPlayer(u);if(R.details===F.BUFFER_STALLED_ERROR){if(_!=null&&_.media){const N=_.currentTime,P=_.duration-N;N&&e.appendInPlace&&P/_.media.playbackRate<.5?(this.log(`Advancing buffer past end of asset ${u} ${e} at ${_.media.currentTime}`),C()):(this.warn(`Stalled at ${N} of ${N+P} in asset ${u} ${e}`),this.onTimeupdate(),this.checkBuffer(!0))}return}this.handleAssetItemError(R,e,this.schedule.findEventIndex(e.identifier),n,`Asset player error ${R.error} ${e}`)}),g.on(x.DESTROYING,()=>{if(!this.getAssetPlayer(u))return;const R=new Error(`Asset player destroyed unexpectedly ${u}`),_={fatal:!0,type:oe.OTHER_ERROR,details:F.INTERSTITIAL_ASSET_ITEM_ERROR,error:R};this.handleAssetItemError(_,e,this.schedule.findEventIndex(e.identifier),n,R.message)}),this.log(`INTERSTITIAL_ASSET_PLAYER_CREATED ${Xt(t)}`),this.hls.trigger(x.INTERSTITIAL_ASSET_PLAYER_CREATED,{asset:t,assetListIndex:n,event:e,player:g}),g}clearInterstitial(e,t){e.assetList.forEach(n=>{this.clearAssetPlayer(n.identifier,t)}),e.reset()}resetAssetPlayer(e){const t=this.getAssetPlayerQueueIndex(e);if(t!==-1){this.log(`reset asset player "${e}" after error`);const n=this.playerQueue[t];this.transferMediaFromPlayer(n,null),n.resetDetails()}}clearAssetPlayer(e,t){const n=this.getAssetPlayerQueueIndex(e);if(n!==-1){this.log(`clear asset player "${e}" toSegment: ${t&&Lt(t)}`);const i=this.playerQueue[n];this.transferMediaFromPlayer(i,t),this.playerQueue.splice(n,1),i.destroy()}}emptyPlayerQueue(){let e;for(;e=this.playerQueue.pop();)e.destroy();this.playerQueue=[]}startAssetPlayer(e,t,n,i,r){const{interstitial:s,assetItem:o,assetId:d}=e,l=s.assetList.length,c=this.playingAsset;this.endedAsset=null,this.playingAsset=o,(!c||c.identifier!==d)&&(c&&(this.clearAssetPlayer(c.identifier,n[i]),delete c.error),this.log(`INTERSTITIAL_ASSET_STARTED ${t+1}/${l} ${Xt(o)}`),this.hls.trigger(x.INTERSTITIAL_ASSET_STARTED,{asset:o,assetListIndex:t,event:s,schedule:n.slice(0),scheduleIndex:i,player:e})),this.bufferAssetPlayer(e,r)}bufferAssetPlayer(e,t){var n,i;const{interstitial:r,assetItem:s}=e,o=this.schedule.findEventIndex(r.identifier),d=(n=this.schedule.items)==null?void 0:n[o];if(!d)return;this.setBufferingItem(d),this.bufferingAsset=s;const l=this.getBufferingPlayer();if(l===e)return;const c=r.appendInPlace;if(c&&(l==null?void 0:l.interstitial.appendInPlace)===!1)return;const u=(l==null?void 0:l.tracks)||((i=this.detachedData)==null?void 0:i.tracks)||this.requiredTracks;if(c&&s!==this.playingAsset){if(!e.tracks)return;if(u&&!co(u,e.tracks)){const h=new Error(`Asset ${Xt(s)} SourceBuffer tracks ('${Object.keys(e.tracks)}') are not compatible with primary content tracks ('${Object.keys(u)}')`),m={fatal:!0,type:oe.OTHER_ERROR,details:F.INTERSTITIAL_ASSET_ITEM_ERROR,error:h},g=r.findAssetIndex(s);this.handleAssetItemError(m,r,o,g,h.message);return}}this.transferMediaTo(e,t)}handleAssetItemError(e,t,n,i,r){if(e.details===F.BUFFER_STALLED_ERROR)return;const s=t.assetList[i];this.warn(`INTERSTITIAL_ASSET_ERROR ${s&&Xt(s)} ${e.error}`);const o=s==null?void 0:s.identifier,d=this.getAssetPlayerQueueIndex(o),l=this.playerQueue[d]||null,c=this.schedule.items,u=Se({},e,{fatal:!1,errorAction:Kn(!0),asset:s,assetListIndex:i,event:t,schedule:c,scheduleIndex:n,player:l});if(this.hls.trigger(x.INTERSTITIAL_ASSET_ERROR,u),!e.fatal)return;const h=this.playingAsset,m=new Error(r);if(s&&(this.clearAssetPlayer(o,null),s.error=m),!t.assetList.some(g=>!g.error))t.error=m;else if(t.appendInPlace){for(let g=i;g<t.assetList.length;g++)this.resetAssetPlayer(t.assetList[g].identifier);this.updateSchedule()}t.error?this.primaryFallback(t):h&&h.identifier===o&&this.advanceAfterAssetEnded(t,n,i)}primaryFallback(e){const t=e.timelineStart,n=this.effectivePlayingItem;if(this.updateSchedule(),n){this.log(`Fallback to primary from event "${e.identifier}" start: ${t} pos: ${this.timelinePos} playing: ${n?Lt(n):"<none>"} error: ${e.error}`);let i=this.timelinePos;i===-1&&(i=this.hls.startPosition);const r=this.updateItem(n,i);this.itemsMatch(n,r)&&this.clearInterstitial(e,null),e.appendInPlace&&(this.attachPrimary(t,null),this.flushFrontBuffer(t));const s=this.schedule.findItemIndexAtTime(i);this.setSchedulePosition(s)}else this.checkStart()}onAssetListLoaded(e,t){var n;const i=t.event,r=i.identifier,s=t.assetListResponse.ASSETS;if(!this.schedule.hasEvent(r))return;const o=i.timelineStart,d=i.duration;let l=0;s.forEach((g,v)=>{const E=parseFloat(g.DURATION);this.createAsset(i,v,l,o+l,E,g.URI),l+=E}),i.duration=l,this.log(`Loaded asset-list with duration: ${l} (was: ${d}) ${i}`);const c=this.waitingItem,u=(c==null?void 0:c.event.identifier)===r;this.updateSchedule();const h=(n=this.bufferingItem)==null?void 0:n.event;if(u){var m;const g=this.schedule.findEventIndex(r),v=(m=this.schedule.items)==null?void 0:m[g];if(v){if(!this.playingItem&&this.timelinePos>v.end&&this.schedule.findItemIndexAtTime(this.timelinePos)!==g){i.error=new Error(`Interstitial no longer within playback range ${this.timelinePos} ${i}`),this.primaryFallback(i);return}this.setBufferingItem(v)}this.setSchedulePosition(g)}else if((h==null?void 0:h.identifier)===r&&h.appendInPlace){const g=i.assetList[0],v=this.getAssetPlayer(g.identifier),E=this.primaryMedia;g&&v&&E&&this.bufferAssetPlayer(v,E)}}onError(e,t){switch(t.details){case F.ASSET_LIST_PARSING_ERROR:case F.ASSET_LIST_LOAD_ERROR:case F.ASSET_LIST_LOAD_TIMEOUT:{const n=t.interstitial;n&&this.primaryFallback(n);break}case F.BUFFER_STALLED_ERROR:{this.onTimeupdate(),this.checkBuffer(!0);break}}}}const Wa=500;class Dp extends es{constructor(e,t,n){super(e,t,n,"subtitle-stream-controller",re.SUBTITLE),this.currentTrackId=-1,this.tracksBuffered=[],this.mainDetails=null,this.registerListeners()}onHandlerDestroying(){this.unregisterListeners(),super.onHandlerDestroying(),this.mainDetails=null}registerListeners(){super.registerListeners();const{hls:e}=this;e.on(x.LEVEL_LOADED,this.onLevelLoaded,this),e.on(x.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.on(x.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.on(x.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.on(x.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.on(x.BUFFER_FLUSHING,this.onBufferFlushing,this)}unregisterListeners(){super.unregisterListeners();const{hls:e}=this;e.off(x.LEVEL_LOADED,this.onLevelLoaded,this),e.off(x.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.off(x.SUBTITLE_TRACK_SWITCH,this.onSubtitleTrackSwitch,this),e.off(x.SUBTITLE_TRACK_LOADED,this.onSubtitleTrackLoaded,this),e.off(x.SUBTITLE_FRAG_PROCESSED,this.onSubtitleFragProcessed,this),e.off(x.BUFFER_FLUSHING,this.onBufferFlushing,this)}startLoad(e,t){this.stopLoad(),this.state=K.IDLE,this.setInterval(Wa),this.nextLoadPosition=this.lastCurrentTime=e+this.timelineOffset,this.startPosition=t?-1:e,this.tick()}onManifestLoading(){super.onManifestLoading(),this.mainDetails=null}onMediaDetaching(e,t){this.tracksBuffered=[],super.onMediaDetaching(e,t)}onLevelLoaded(e,t){this.mainDetails=t.details}onSubtitleFragProcessed(e,t){const{frag:n,success:i}=t;if(Ne(n)&&(this.fragPrevious=n),this.state=K.IDLE,!i)return;const r=this.tracksBuffered[this.currentTrackId];if(!r)return;let s;const o=n.start;for(let l=0;l<r.length;l++)if(o>=r[l].start&&o<=r[l].end){s=r[l];break}const d=n.start+n.duration;s?s.end=d:(s={start:o,end:d},r.push(s)),this.fragmentTracker.fragBuffered(n),this.fragBufferedComplete(n,null),this.media&&this.tick()}onBufferFlushing(e,t){const{startOffset:n,endOffset:i}=t;if(n===0&&i!==Number.POSITIVE_INFINITY){const r=i-1;if(r<=0)return;t.endOffsetSubtitles=Math.max(0,r),this.tracksBuffered.forEach(s=>{for(let o=0;o<s.length;){if(s[o].end<=r){s.shift();continue}else if(s[o].start<r)s[o].start=r;else break;o++}}),this.fragmentTracker.removeFragmentsInRange(n,r,re.SUBTITLE)}}onError(e,t){const n=t.frag;(n==null?void 0:n.type)===re.SUBTITLE&&(t.details===F.FRAG_GAP&&this.fragmentTracker.fragBuffered(n,!0),this.fragCurrent&&this.fragCurrent.abortRequests(),this.state!==K.STOPPED&&(this.state=K.IDLE))}onSubtitleTracksUpdated(e,{subtitleTracks:t}){if(this.levels&&dl(this.levels,t)){this.levels=t.map(n=>new Gn(n));return}this.tracksBuffered=[],this.levels=t.map(n=>{const i=new Gn(n);return this.tracksBuffered[i.id]=[],i}),this.fragmentTracker.removeFragmentsInRange(0,Number.POSITIVE_INFINITY,re.SUBTITLE),this.fragPrevious=null,this.mediaBuffer=null}onSubtitleTrackSwitch(e,t){var n;if(this.currentTrackId=t.id,!((n=this.levels)!=null&&n.length)||this.currentTrackId===-1){this.clearInterval();return}const i=this.levels[this.currentTrackId];i!=null&&i.details?this.mediaBuffer=this.mediaBufferTimeRanges:this.mediaBuffer=null,i&&this.state!==K.STOPPED&&this.setInterval(Wa)}onSubtitleTrackLoaded(e,t){var n;const{currentTrackId:i,levels:r}=this,{details:s,id:o}=t;if(!r){this.warn(`Subtitle tracks were reset while loading level ${o}`);return}const d=r[o];if(o>=r.length||!d)return;this.log(`Subtitle track ${o} loaded [${s.startSN},${s.endSN}]${s.lastPartSn?`[part-${s.lastPartSn}-${s.lastPartIndex}]`:""},duration:${s.totalduration}`),this.mediaBuffer=this.mediaBufferTimeRanges;let l=0;if(s.live||(n=d.details)!=null&&n.live){const u=this.mainDetails;if(s.deltaUpdateFailed||!u)return;const h=u.fragments[0];if(!d.details)s.hasProgramDateTime&&u.hasProgramDateTime?(Fi(s,u),l=s.fragmentStart):h&&(l=h.start,Fr(s,l));else{var c;l=this.alignPlaylists(s,d.details,(c=this.levelLastLoaded)==null?void 0:c.details),l===0&&h&&(l=h.start,Fr(s,l))}}d.details=s,this.levelLastLoaded=d,o===i&&(this.hls.trigger(x.SUBTITLE_TRACK_UPDATED,{details:s,id:o,groupId:t.groupId}),this.tick(),s.live&&!this.fragCurrent&&this.media&&this.state===K.IDLE&&(Nt(null,s.fragments,this.media.currentTime,0)||(this.warn("Subtitle playlist not aligned with playback"),d.details=void 0)))}_handleFragmentLoadComplete(e){const{frag:t,payload:n}=e,i=t.decryptdata,r=this.hls;if(!this.fragContextChanged(t)&&n&&n.byteLength>0&&i!=null&&i.key&&i.iv&&Jt(i.method)){const s=performance.now();this.decrypter.decrypt(new Uint8Array(n),i.key.buffer,i.iv.buffer,Zr(i.method)).catch(o=>{throw r.trigger(x.ERROR,{type:oe.MEDIA_ERROR,details:F.FRAG_DECRYPT_ERROR,fatal:!1,error:o,reason:o.message,frag:t}),o}).then(o=>{const d=performance.now();r.trigger(x.FRAG_DECRYPTED,{frag:t,payload:o,stats:{tstart:s,tdecrypt:d}})}).catch(o=>{this.warn(`${o.name}: ${o.message}`),this.state=K.IDLE})}}doTick(){if(!this.media){this.state=K.IDLE;return}if(this.state===K.IDLE){const{currentTrackId:e,levels:t}=this,n=t==null?void 0:t[e];if(!n||!t.length||!n.details||this.waitForLive(n))return;const{config:i}=this,r=this.getLoadPosition(),s=he.bufferedInfo(this.tracksBuffered[this.currentTrackId]||[],r,i.maxBufferHole),{end:o,len:d}=s,l=n.details,c=this.hls.maxBufferLength+l.levelTargetDuration;if(d>c)return;const u=l.fragments,h=u.length,m=l.edge;let g=null;const v=this.fragPrevious;if(o<m){const I=i.maxFragLookUpTolerance,L=o>m-I?0:I;g=Nt(v,u,Math.max(u[0].start,o),L),!g&&v&&v.start<u[0].start&&(g=u[0])}else g=u[h-1];if(g=this.filterReplacedPrimary(g,n.details),!g)return;const E=g.sn-l.startSN,C=u[E-1];if(C&&C.cc===g.cc&&this.fragmentTracker.getState(C)===Oe.NOT_LOADED&&(g=C),this.fragmentTracker.getState(g)===Oe.NOT_LOADED){const I=this.mapToInitFragWhenRequired(g);I&&this.loadFragment(I,n,o)}}}loadFragment(e,t,n){Ne(e)?super.loadFragment(e,t,n):this._loadInitSegment(e,t)}get mediaBufferTimeRanges(){return new _p(this.tracksBuffered[this.currentTrackId]||[])}}class _p{constructor(e){this.buffered=void 0;const t=(n,i,r)=>{if(i=i>>>0,i>r-1)throw new DOMException(`Failed to execute '${n}' on 'TimeRanges': The index provided (${i}) is greater than the maximum bound (${r})`);return e[i][n]};this.buffered={get length(){return e.length},end(n){return t("end",n,e.length)},start(n){return t("start",n,e.length)}}}}const Pp={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},bl=a=>String.fromCharCode(Pp[a]||a),tt=15,gt=100,Bp={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},Op={17:2,18:4,21:6,22:8,23:10,19:13,20:15},Fp={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},Mp={25:2,26:4,29:6,30:8,31:10,27:13,28:15},Np=["white","green","blue","cyan","red","yellow","magenta","black","transparent"];class Up{constructor(){this.time=null,this.verboseLevel=0}log(e,t){if(this.verboseLevel>=e){const n=typeof t=="function"?t():t;be.log(`${this.time} [${e}] ${n}`)}}}const Ot=function(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].toString(16));return t};class El{constructor(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}reset(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1}setStyles(e){const t=["foreground","underline","italics","background","flash"];for(let n=0;n<t.length;n++){const i=t[n];e.hasOwnProperty(i)&&(this[i]=e[i])}}isDefault(){return this.foreground==="white"&&!this.underline&&!this.italics&&this.background==="black"&&!this.flash}equals(e){return this.foreground===e.foreground&&this.underline===e.underline&&this.italics===e.italics&&this.background===e.background&&this.flash===e.flash}copy(e){this.foreground=e.foreground,this.underline=e.underline,this.italics=e.italics,this.background=e.background,this.flash=e.flash}toString(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash}}class $p{constructor(){this.uchar=" ",this.penState=new El}reset(){this.uchar=" ",this.penState.reset()}setChar(e,t){this.uchar=e,this.penState.copy(t)}setPenState(e){this.penState.copy(e)}equals(e){return this.uchar===e.uchar&&this.penState.equals(e.penState)}copy(e){this.uchar=e.uchar,this.penState.copy(e.penState)}isEmpty(){return this.uchar===" "&&this.penState.isDefault()}}class Gp{constructor(e){this.chars=[],this.pos=0,this.currPenState=new El,this.cueStartTime=null,this.logger=void 0;for(let t=0;t<gt;t++)this.chars.push(new $p);this.logger=e}equals(e){for(let t=0;t<gt;t++)if(!this.chars[t].equals(e.chars[t]))return!1;return!0}copy(e){for(let t=0;t<gt;t++)this.chars[t].copy(e.chars[t])}isEmpty(){let e=!0;for(let t=0;t<gt;t++)if(!this.chars[t].isEmpty()){e=!1;break}return e}setCursor(e){this.pos!==e&&(this.pos=e),this.pos<0?(this.logger.log(3,"Negative cursor position "+this.pos),this.pos=0):this.pos>gt&&(this.logger.log(3,"Too large cursor position "+this.pos),this.pos=gt)}moveCursor(e){const t=this.pos+e;if(e>1)for(let n=this.pos+1;n<t+1;n++)this.chars[n].setPenState(this.currPenState);this.setCursor(t)}backSpace(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)}insertChar(e){e>=144&&this.backSpace();const t=bl(e);if(this.pos>=gt){this.logger.log(0,()=>"Cannot insert "+e.toString(16)+" ("+t+") at position "+this.pos+". Skipping it!");return}this.chars[this.pos].setChar(t,this.currPenState),this.moveCursor(1)}clearFromPos(e){let t;for(t=e;t<gt;t++)this.chars[t].reset()}clear(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()}clearToEndOfRow(){this.clearFromPos(this.pos)}getTextString(){const e=[];let t=!0;for(let n=0;n<gt;n++){const i=this.chars[n].uchar;i!==" "&&(t=!1),e.push(i)}return t?"":e.join("")}setPenStyles(e){this.currPenState.setStyles(e),this.chars[this.pos].setPenState(this.currPenState)}}class Er{constructor(e){this.rows=[],this.currRow=tt-1,this.nrRollUpRows=null,this.lastOutputScreen=null,this.logger=void 0;for(let t=0;t<tt;t++)this.rows.push(new Gp(e));this.logger=e}reset(){for(let e=0;e<tt;e++)this.rows[e].clear();this.currRow=tt-1}equals(e){let t=!0;for(let n=0;n<tt;n++)if(!this.rows[n].equals(e.rows[n])){t=!1;break}return t}copy(e){for(let t=0;t<tt;t++)this.rows[t].copy(e.rows[t])}isEmpty(){let e=!0;for(let t=0;t<tt;t++)if(!this.rows[t].isEmpty()){e=!1;break}return e}backSpace(){this.rows[this.currRow].backSpace()}clearToEndOfRow(){this.rows[this.currRow].clearToEndOfRow()}insertChar(e){this.rows[this.currRow].insertChar(e)}setPen(e){this.rows[this.currRow].setPenStyles(e)}moveCursor(e){this.rows[this.currRow].moveCursor(e)}setCursor(e){this.logger.log(2,"setCursor: "+e),this.rows[this.currRow].setCursor(e)}setPAC(e){this.logger.log(2,()=>"pacData = "+Ie(e));let t=e.row-1;if(this.nrRollUpRows&&t<this.nrRollUpRows-1&&(t=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==t){for(let o=0;o<tt;o++)this.rows[o].clear();const r=this.currRow+1-this.nrRollUpRows,s=this.lastOutputScreen;if(s){const o=s.rows[r].cueStartTime,d=this.logger.time;if(o!==null&&d!==null&&o<d)for(let l=0;l<this.nrRollUpRows;l++)this.rows[t-this.nrRollUpRows+l+1].copy(s.rows[r+l])}}this.currRow=t;const n=this.rows[this.currRow];if(e.indent!==null){const r=e.indent,s=Math.max(r-1,0);n.setCursor(e.indent),e.color=n.chars[s].penState.foreground}const i={foreground:e.color,underline:e.underline,italics:e.italics,background:"black",flash:!1};this.setPen(i)}setBkgData(e){this.logger.log(2,()=>"bkgData = "+Ie(e)),this.backSpace(),this.setPen(e),this.insertChar(32)}setRollUpRows(e){this.nrRollUpRows=e}rollUp(){if(this.nrRollUpRows===null){this.logger.log(3,"roll_up but nrRollUpRows not set yet");return}this.logger.log(1,()=>this.getDisplayText());const e=this.currRow+1-this.nrRollUpRows,t=this.rows.splice(e,1)[0];t.clear(),this.rows.splice(this.currRow,0,t),this.logger.log(2,"Rolling up")}getDisplayText(e){e=e||!1;const t=[];let n="",i=-1;for(let r=0;r<tt;r++){const s=this.rows[r].getTextString();s&&(i=r+1,e?t.push("Row "+i+": '"+s+"'"):t.push(s.trim()))}return t.length>0&&(e?n="["+t.join(" | ")+"]":n=t.join(`
`)),n}getTextAndFormat(){return this.rows}}class za{constructor(e,t,n){this.chNr=void 0,this.outputFilter=void 0,this.mode=void 0,this.verbose=void 0,this.displayedMemory=void 0,this.nonDisplayedMemory=void 0,this.lastOutputScreen=void 0,this.currRollUpRow=void 0,this.writeScreen=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chNr=e,this.outputFilter=t,this.mode=null,this.verbose=0,this.displayedMemory=new Er(n),this.nonDisplayedMemory=new Er(n),this.lastOutputScreen=new Er(n),this.currRollUpRow=this.displayedMemory.rows[tt-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.logger=n}reset(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.outputFilter.reset(),this.currRollUpRow=this.displayedMemory.rows[tt-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null}getHandler(){return this.outputFilter}setHandler(e){this.outputFilter=e}setPAC(e){this.writeScreen.setPAC(e)}setBkgData(e){this.writeScreen.setBkgData(e)}setMode(e){e!==this.mode&&(this.mode=e,this.logger.log(2,()=>"MODE="+e),this.mode==="MODE_POP-ON"?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),this.mode!=="MODE_ROLL-UP"&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=e)}insertChars(e){for(let n=0;n<e.length;n++)this.writeScreen.insertChar(e[n]);const t=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";this.logger.log(2,()=>t+": "+this.writeScreen.getDisplayText(!0)),(this.mode==="MODE_PAINT-ON"||this.mode==="MODE_ROLL-UP")&&(this.logger.log(1,()=>"DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())}ccRCL(){this.logger.log(2,"RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")}ccBS(){this.logger.log(2,"BS - BackSpace"),this.mode!=="MODE_TEXT"&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())}ccAOF(){}ccAON(){}ccDER(){this.logger.log(2,"DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()}ccRU(e){this.logger.log(2,"RU("+e+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(e)}ccFON(){this.logger.log(2,"FON - Flash On"),this.writeScreen.setPen({flash:!0})}ccRDC(){this.logger.log(2,"RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")}ccTR(){this.logger.log(2,"TR"),this.setMode("MODE_TEXT")}ccRTD(){this.logger.log(2,"RTD"),this.setMode("MODE_TEXT")}ccEDM(){this.logger.log(2,"EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate(!0)}ccCR(){this.logger.log(2,"CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate(!0)}ccENM(){this.logger.log(2,"ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()}ccEOC(){if(this.logger.log(2,"EOC - End Of Caption"),this.mode==="MODE_POP-ON"){const e=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=e,this.writeScreen=this.nonDisplayedMemory,this.logger.log(1,()=>"DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate(!0)}ccTO(e){this.logger.log(2,"TO("+e+") - Tab Offset"),this.writeScreen.moveCursor(e)}ccMIDROW(e){const t={flash:!1};if(t.underline=e%2===1,t.italics=e>=46,t.italics)t.foreground="white";else{const n=Math.floor(e/2)-16,i=["white","green","blue","cyan","red","yellow","magenta"];t.foreground=i[n]}this.logger.log(2,"MIDROW: "+Ie(t)),this.writeScreen.setPen(t)}outputDataUpdate(e=!1){const t=this.logger.time;t!==null&&this.outputFilter&&(this.cueStartTime===null&&!this.displayedMemory.isEmpty()?this.cueStartTime=t:this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue(this.cueStartTime,t,this.lastOutputScreen),e&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue(),this.cueStartTime=this.displayedMemory.isEmpty()?null:t),this.lastOutputScreen.copy(this.displayedMemory))}cueSplitAtTime(e){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,e,this.displayedMemory),this.cueStartTime=e))}}class Qa{constructor(e,t,n){this.channels=void 0,this.currentChannel=0,this.cmdHistory=Hp(),this.logger=void 0;const i=this.logger=new Up;this.channels=[null,new za(e,t,i),new za(e+1,n,i)]}getHandler(e){return this.channels[e].getHandler()}setHandler(e,t){this.channels[e].setHandler(t)}addData(e,t){this.logger.time=e;for(let n=0;n<t.length;n+=2){const i=t[n]&127,r=t[n+1]&127;let s=!1,o=null;if(i===0&&r===0)continue;this.logger.log(3,()=>"["+Ot([t[n],t[n+1]])+"] -> ("+Ot([i,r])+")");const d=this.cmdHistory;if(i>=16&&i<=31){if(Kp(i,r,d)){gi(null,null,d),this.logger.log(3,()=>"Repeated command ("+Ot([i,r])+") is dropped");continue}gi(i,r,this.cmdHistory),s=this.parseCmd(i,r),s||(s=this.parseMidrow(i,r)),s||(s=this.parsePAC(i,r)),s||(s=this.parseBackgroundAttributes(i,r))}else gi(null,null,d);if(!s&&(o=this.parseChars(i,r),o)){const c=this.currentChannel;c&&c>0?this.channels[c].insertChars(o):this.logger.log(2,"No channel found yet. TEXT-MODE?")}!s&&!o&&this.logger.log(2,()=>"Couldn't parse cleaned data "+Ot([i,r])+" orig: "+Ot([t[n],t[n+1]]))}}parseCmd(e,t){const n=(e===20||e===28||e===21||e===29)&&t>=32&&t<=47,i=(e===23||e===31)&&t>=33&&t<=35;if(!(n||i))return!1;const r=e===20||e===21||e===23?1:2,s=this.channels[r];return e===20||e===21||e===28||e===29?t===32?s.ccRCL():t===33?s.ccBS():t===34?s.ccAOF():t===35?s.ccAON():t===36?s.ccDER():t===37?s.ccRU(2):t===38?s.ccRU(3):t===39?s.ccRU(4):t===40?s.ccFON():t===41?s.ccRDC():t===42?s.ccTR():t===43?s.ccRTD():t===44?s.ccEDM():t===45?s.ccCR():t===46?s.ccENM():t===47&&s.ccEOC():s.ccTO(t-32),this.currentChannel=r,!0}parseMidrow(e,t){let n=0;if((e===17||e===25)&&t>=32&&t<=47){if(e===17?n=1:n=2,n!==this.currentChannel)return this.logger.log(0,"Mismatch channel in midrow parsing"),!1;const i=this.channels[n];return i?(i.ccMIDROW(t),this.logger.log(3,()=>"MIDROW ("+Ot([e,t])+")"),!0):!1}return!1}parsePAC(e,t){let n;const i=(e>=17&&e<=23||e>=25&&e<=31)&&t>=64&&t<=127,r=(e===16||e===24)&&t>=64&&t<=95;if(!(i||r))return!1;const s=e<=23?1:2;t>=64&&t<=95?n=s===1?Bp[e]:Fp[e]:n=s===1?Op[e]:Mp[e];const o=this.channels[s];return o?(o.setPAC(this.interpretPAC(n,t)),this.currentChannel=s,!0):!1}interpretPAC(e,t){let n;const i={color:null,italics:!1,indent:null,underline:!1,row:e};return t>95?n=t-96:n=t-64,i.underline=(n&1)===1,n<=13?i.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(n/2)]:n<=15?(i.italics=!0,i.color="white"):i.indent=Math.floor((n-16)/2)*4,i}parseChars(e,t){let n,i=null,r=null;if(e>=25?(n=2,r=e-8):(n=1,r=e),r>=17&&r<=19){let s;r===17?s=t+80:r===18?s=t+112:s=t+144,this.logger.log(2,()=>"Special char '"+bl(s)+"' in channel "+n),i=[s]}else e>=32&&e<=127&&(i=t===0?[e]:[e,t]);return i&&this.logger.log(3,()=>"Char codes =  "+Ot(i).join(",")),i}parseBackgroundAttributes(e,t){const n=(e===16||e===24)&&t>=32&&t<=47,i=(e===23||e===31)&&t>=45&&t<=47;if(!(n||i))return!1;let r;const s={};e===16||e===24?(r=Math.floor((t-32)/2),s.background=Np[r],t%2===1&&(s.background=s.background+"_semi")):t===45?s.background="transparent":(s.foreground="black",t===47&&(s.underline=!0));const o=e<=23?1:2;return this.channels[o].setBkgData(s),!0}reset(){for(let e=0;e<Object.keys(this.channels).length;e++){const t=this.channels[e];t&&t.reset()}gi(null,null,this.cmdHistory)}cueSplitAtTime(e){for(let t=0;t<this.channels.length;t++){const n=this.channels[t];n&&n.cueSplitAtTime(e)}}}function gi(a,e,t){t.a=a,t.b=e}function Kp(a,e,t){return t.a===a&&t.b===e}function Hp(){return{a:null,b:null}}var us=function(){if(Oi!=null&&Oi.VTTCue)return self.VTTCue;const a=["","lr","rl"],e=["start","middle","end","left","right"];function t(o,d){if(typeof d!="string"||!Array.isArray(o))return!1;const l=d.toLowerCase();return~o.indexOf(l)?l:!1}function n(o){return t(a,o)}function i(o){return t(e,o)}function r(o,...d){let l=1;for(;l<arguments.length;l++){const c=arguments[l];for(const u in c)o[u]=c[u]}return o}function s(o,d,l){const c=this,u={enumerable:!0};c.hasBeenReset=!1;let h="",m=!1,g=o,v=d,E=l,C=null,I="",L=!0,R="auto",_="start",N=50,P="middle",O=50,U="middle";Object.defineProperty(c,"id",r({},u,{get:function(){return h},set:function(D){h=""+D}})),Object.defineProperty(c,"pauseOnExit",r({},u,{get:function(){return m},set:function(D){m=!!D}})),Object.defineProperty(c,"startTime",r({},u,{get:function(){return g},set:function(D){if(typeof D!="number")throw new TypeError("Start time must be set to a number.");g=D,this.hasBeenReset=!0}})),Object.defineProperty(c,"endTime",r({},u,{get:function(){return v},set:function(D){if(typeof D!="number")throw new TypeError("End time must be set to a number.");v=D,this.hasBeenReset=!0}})),Object.defineProperty(c,"text",r({},u,{get:function(){return E},set:function(D){E=""+D,this.hasBeenReset=!0}})),Object.defineProperty(c,"region",r({},u,{get:function(){return C},set:function(D){C=D,this.hasBeenReset=!0}})),Object.defineProperty(c,"vertical",r({},u,{get:function(){return I},set:function(D){const V=n(D);if(V===!1)throw new SyntaxError("An invalid or illegal string was specified.");I=V,this.hasBeenReset=!0}})),Object.defineProperty(c,"snapToLines",r({},u,{get:function(){return L},set:function(D){L=!!D,this.hasBeenReset=!0}})),Object.defineProperty(c,"line",r({},u,{get:function(){return R},set:function(D){if(typeof D!="number"&&D!=="auto")throw new SyntaxError("An invalid number or illegal string was specified.");R=D,this.hasBeenReset=!0}})),Object.defineProperty(c,"lineAlign",r({},u,{get:function(){return _},set:function(D){const V=i(D);if(!V)throw new SyntaxError("An invalid or illegal string was specified.");_=V,this.hasBeenReset=!0}})),Object.defineProperty(c,"position",r({},u,{get:function(){return N},set:function(D){if(D<0||D>100)throw new Error("Position must be between 0 and 100.");N=D,this.hasBeenReset=!0}})),Object.defineProperty(c,"positionAlign",r({},u,{get:function(){return P},set:function(D){const V=i(D);if(!V)throw new SyntaxError("An invalid or illegal string was specified.");P=V,this.hasBeenReset=!0}})),Object.defineProperty(c,"size",r({},u,{get:function(){return O},set:function(D){if(D<0||D>100)throw new Error("Size must be between 0 and 100.");O=D,this.hasBeenReset=!0}})),Object.defineProperty(c,"align",r({},u,{get:function(){return U},set:function(D){const V=i(D);if(!V)throw new SyntaxError("An invalid or illegal string was specified.");U=V,this.hasBeenReset=!0}})),c.displayState=void 0}return s.prototype.getCueAsHTML=function(){return self.WebVTT.convertCueToDOMTree(self,this.text)},s}();class Vp{decode(e,t){if(!e)return"";if(typeof e!="string")throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}function xl(a){function e(n,i,r,s){return(n|0)*3600+(i|0)*60+(r|0)+parseFloat(s||0)}const t=a.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);return t?parseFloat(t[2])>59?e(t[2],t[3],0,t[4]):e(t[1],t[2],t[3],t[4]):null}class qp{constructor(){this.values=Object.create(null)}set(e,t){!this.get(e)&&t!==""&&(this.values[e]=t)}get(e,t,n){return n?this.has(e)?this.values[e]:t[n]:this.has(e)?this.values[e]:t}has(e){return e in this.values}alt(e,t,n){for(let i=0;i<n.length;++i)if(t===n[i]){this.set(e,t);break}}integer(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))}percent(e,t){if(/^([\d]{1,3})(\.[\d]*)?%$/.test(t)){const n=parseFloat(t);if(n>=0&&n<=100)return this.set(e,n),!0}return!1}}function Sl(a,e,t,n){const i=n?a.split(n):[a];for(const r in i){if(typeof i[r]!="string")continue;const s=i[r].split(t);if(s.length!==2)continue;const o=s[0],d=s[1];e(o,d)}}const Hr=new us(0,0,""),yi=Hr.align==="middle"?"middle":"center";function Yp(a,e,t){const n=a;function i(){const o=xl(a);if(o===null)throw new Error("Malformed timestamp: "+n);return a=a.replace(/^[^\sa-zA-Z-]+/,""),o}function r(o,d){const l=new qp;Sl(o,function(h,m){let g;switch(h){case"region":for(let v=t.length-1;v>=0;v--)if(t[v].id===m){l.set(h,t[v].region);break}break;case"vertical":l.alt(h,m,["rl","lr"]);break;case"line":g=m.split(","),l.integer(h,g[0]),l.percent(h,g[0])&&l.set("snapToLines",!1),l.alt(h,g[0],["auto"]),g.length===2&&l.alt("lineAlign",g[1],["start",yi,"end"]);break;case"position":g=m.split(","),l.percent(h,g[0]),g.length===2&&l.alt("positionAlign",g[1],["start",yi,"end","line-left","line-right","auto"]);break;case"size":l.percent(h,m);break;case"align":l.alt(h,m,["start",yi,"end","left","right"]);break}},/:/,/\s/),d.region=l.get("region",null),d.vertical=l.get("vertical","");let c=l.get("line","auto");c==="auto"&&Hr.line===-1&&(c=-1),d.line=c,d.lineAlign=l.get("lineAlign","start"),d.snapToLines=l.get("snapToLines",!0),d.size=l.get("size",100),d.align=l.get("align",yi);let u=l.get("position","auto");u==="auto"&&Hr.position===50&&(u=d.align==="start"||d.align==="left"?0:d.align==="end"||d.align==="right"?100:50),d.position=u}function s(){a=a.replace(/^\s+/,"")}if(s(),e.startTime=i(),s(),a.slice(0,3)!=="-->")throw new Error("Malformed time stamp (time stamps must be separated by '-->'): "+n);a=a.slice(3),s(),e.endTime=i(),s(),r(a,e)}function Tl(a){return a.replace(/<br(?: \/)?>/gi,`
`)}class jp{constructor(){this.state="INITIAL",this.buffer="",this.decoder=new Vp,this.regionList=[],this.cue=null,this.oncue=void 0,this.onparsingerror=void 0,this.onflush=void 0}parse(e){const t=this;e&&(t.buffer+=t.decoder.decode(e,{stream:!0}));function n(){let r=t.buffer,s=0;for(r=Tl(r);s<r.length&&r[s]!=="\r"&&r[s]!==`
`;)++s;const o=r.slice(0,s);return r[s]==="\r"&&++s,r[s]===`
`&&++s,t.buffer=r.slice(s),o}function i(r){Sl(r,function(s,o){},/:/)}try{let r="";if(t.state==="INITIAL"){if(!/\r\n|\n/.test(t.buffer))return this;r=n();const o=r.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);if(!(o!=null&&o[0]))throw new Error("Malformed WebVTT signature.");t.state="HEADER"}let s=!1;for(;t.buffer;){if(!/\r\n|\n/.test(t.buffer))return this;switch(s?s=!1:r=n(),t.state){case"HEADER":/:/.test(r)?i(r):r||(t.state="ID");continue;case"NOTE":r||(t.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(r)){t.state="NOTE";break}if(!r)continue;if(t.cue=new us(0,0,""),t.state="CUE",r.indexOf("-->")===-1){t.cue.id=r;continue}case"CUE":if(!t.cue){t.state="BADCUE";continue}try{Yp(r,t.cue,t.regionList)}catch{t.cue=null,t.state="BADCUE";continue}t.state="CUETEXT";continue;case"CUETEXT":{const o=r.indexOf("-->")!==-1;if(!r||o&&(s=!0)){t.oncue&&t.cue&&t.oncue(t.cue),t.cue=null,t.state="ID";continue}if(t.cue===null)continue;t.cue.text&&(t.cue.text+=`
`),t.cue.text+=r}continue;case"BADCUE":r||(t.state="ID")}}}catch{t.state==="CUETEXT"&&t.cue&&t.oncue&&t.oncue(t.cue),t.cue=null,t.state=t.state==="INITIAL"?"BADWEBVTT":"BADCUE"}return this}flush(){const e=this;try{if((e.cue||e.state==="HEADER")&&(e.buffer+=`

`,e.parse()),e.state==="INITIAL"||e.state==="BADWEBVTT")throw new Error("Malformed WebVTT signature.")}catch(t){e.onparsingerror&&e.onparsingerror(t)}return e.onflush&&e.onflush(),this}}const Wp=/\r\n|\n\r|\n|\r/g,xr=function(e,t,n=0){return e.slice(n,n+t.length)===t},zp=function(e){let t=parseInt(e.slice(-3));const n=parseInt(e.slice(-6,-4)),i=parseInt(e.slice(-9,-7)),r=e.length>9?parseInt(e.substring(0,e.indexOf(":"))):0;if(!Z(t)||!Z(n)||!Z(i)||!Z(r))throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);return t+=1e3*n,t+=60*1e3*i,t+=60*60*1e3*r,t};function hs(a,e,t){return Un(a.toString())+Un(e.toString())+Un(t)}const Qp=function(e,t,n){let i=e[t],r=e[i.prevCC];if(!r||!r.new&&i.new){e.ccOffset=e.presentationOffset=i.start,i.new=!1;return}for(;(s=r)!=null&&s.new;){var s;e.ccOffset+=i.start-r.start,i.new=!1,i=r,r=e[i.prevCC]}e.presentationOffset=n};function Xp(a,e,t,n,i,r,s){const o=new jp,d=We(new Uint8Array(a)).trim().replace(Wp,`
`).split(`
`),l=[],c=e?hf(e.baseTime,e.timescale):0;let u="00:00.000",h=0,m=0,g,v=!0;o.oncue=function(E){const C=t[n];let I=t.ccOffset;const L=(h-c)/9e4;if(C!=null&&C.new&&(m!==void 0?I=t.ccOffset=C.start:Qp(t,n,L)),L){if(!e){g=new Error("Missing initPTS for VTT MPEGTS");return}I=L-t.presentationOffset}const R=E.endTime-E.startTime,_=Xe((E.startTime+I-m)*9e4,i*9e4)/9e4;E.startTime=Math.max(_,0),E.endTime=Math.max(_+R,0);const N=E.text.trim();E.text=decodeURIComponent(encodeURIComponent(N)),E.id||(E.id=hs(E.startTime,E.endTime,N)),E.endTime>0&&l.push(E)},o.onparsingerror=function(E){g=E},o.onflush=function(){if(g){s(g);return}r(l)},d.forEach(E=>{if(v)if(xr(E,"X-TIMESTAMP-MAP=")){v=!1,E.slice(16).split(",").forEach(C=>{xr(C,"LOCAL:")?u=C.slice(6):xr(C,"MPEGTS:")&&(h=parseInt(C.slice(7)))});try{m=zp(u)/1e3}catch(C){g=C}return}else E===""&&(v=!1);o.parse(E+`
`)}),o.flush()}const Sr="stpp.ttml.im1t",Cl=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,Ll=/^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,Zp={left:"start",center:"center",right:"end",start:"start",end:"end"};function Xa(a,e,t,n){const i=pe(new Uint8Array(a),["mdat"]);if(i.length===0){n(new Error("Could not parse IMSC1 mdat"));return}const r=i.map(o=>We(o)),s=uf(e.baseTime,1,e.timescale);try{r.forEach(o=>t(Jp(o,s)))}catch(o){n(o)}}function Jp(a,e){const i=new DOMParser().parseFromString(a,"text/xml").getElementsByTagName("tt")[0];if(!i)throw new Error("Invalid ttml");const r={frameRate:30,subFrameRate:1,frameRateMultiplier:0,tickRate:0},s=Object.keys(r).reduce((u,h)=>(u[h]=i.getAttribute(`ttp:${h}`)||r[h],u),{}),o=i.getAttribute("xml:space")!=="preserve",d=Za(Tr(i,"styling","style")),l=Za(Tr(i,"layout","region")),c=Tr(i,"body","[begin]");return[].map.call(c,u=>{const h=Il(u,o);if(!h||!u.hasAttribute("begin"))return null;const m=Lr(u.getAttribute("begin"),s),g=Lr(u.getAttribute("dur"),s);let v=Lr(u.getAttribute("end"),s);if(m===null)throw Ja(u);if(v===null){if(g===null)throw Ja(u);v=m+g}const E=new us(m-e,v-e,h);E.id=hs(E.startTime,E.endTime,E.text);const C=l[u.getAttribute("region")],I=d[u.getAttribute("style")],L=em(C,I,d),{textAlign:R}=L;if(R){const _=Zp[R];_&&(E.lineAlign=_),E.align=R}return Se(E,L),E}).filter(u=>u!==null)}function Tr(a,e,t){const n=a.getElementsByTagName(e)[0];return n?[].slice.call(n.querySelectorAll(t)):[]}function Za(a){return a.reduce((e,t)=>{const n=t.getAttribute("xml:id");return n&&(e[n]=t),e},{})}function Il(a,e){return[].slice.call(a.childNodes).reduce((t,n,i)=>{var r;return n.nodeName==="br"&&i?t+`
`:(r=n.childNodes)!=null&&r.length?Il(n,e):e?t+n.textContent.trim().replace(/\s+/g," "):t+n.textContent},"")}function em(a,e,t){const n="http://www.w3.org/ns/ttml#styling";let i=null;const r=["displayAlign","textAlign","color","backgroundColor","fontSize","fontFamily"],s=a!=null&&a.hasAttribute("style")?a.getAttribute("style"):null;return s&&t.hasOwnProperty(s)&&(i=t[s]),r.reduce((o,d)=>{const l=Cr(e,n,d)||Cr(a,n,d)||Cr(i,n,d);return l&&(o[d]=l),o},{})}function Cr(a,e,t){return a&&a.hasAttributeNS(e,t)?a.getAttributeNS(e,t):null}function Ja(a){return new Error(`Could not parse ttml timestamp ${a}`)}function Lr(a,e){if(!a)return null;let t=xl(a);return t===null&&(Cl.test(a)?t=tm(a,e):Ll.test(a)&&(t=nm(a,e))),t}function tm(a,e){const t=Cl.exec(a),n=(t[4]|0)+(t[5]|0)/e.subFrameRate;return(t[1]|0)*3600+(t[2]|0)*60+(t[3]|0)+n/e.frameRate}function nm(a,e){const t=Ll.exec(a),n=Number(t[1]);switch(t[2]){case"h":return n*3600;case"m":return n*60;case"ms":return n*1e3;case"f":return n/e.frameRate;case"t":return n/e.tickRate}return n}class Ai{constructor(e,t){this.timelineController=void 0,this.cueRanges=[],this.trackName=void 0,this.startTime=null,this.endTime=null,this.screen=null,this.timelineController=e,this.trackName=t}dispatchCue(){this.startTime!==null&&(this.timelineController.addCues(this.trackName,this.startTime,this.endTime,this.screen,this.cueRanges),this.startTime=null)}newCue(e,t,n){(this.startTime===null||this.startTime>e)&&(this.startTime=e),this.endTime=t,this.screen=n,this.timelineController.createCaptionsTrack(this.trackName)}reset(){this.cueRanges=[],this.startTime=null}}class im{constructor(e){this.hls=void 0,this.media=null,this.config=void 0,this.enabled=!0,this.Cues=void 0,this.textTracks=[],this.tracks=[],this.initPTS=[],this.unparsedVttFrags=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.cea608Parser1=void 0,this.cea608Parser2=void 0,this.lastCc=-1,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=to(),this.captionsProperties=void 0,this.hls=e,this.config=e.config,this.Cues=e.config.cueHandler,this.captionsProperties={textTrack1:{label:this.config.captionsTextTrack1Label,languageCode:this.config.captionsTextTrack1LanguageCode},textTrack2:{label:this.config.captionsTextTrack2Label,languageCode:this.config.captionsTextTrack2LanguageCode},textTrack3:{label:this.config.captionsTextTrack3Label,languageCode:this.config.captionsTextTrack3LanguageCode},textTrack4:{label:this.config.captionsTextTrack4Label,languageCode:this.config.captionsTextTrack4LanguageCode}},e.on(x.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(x.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.on(x.FRAG_LOADING,this.onFragLoading,this),e.on(x.FRAG_LOADED,this.onFragLoaded,this),e.on(x.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),e.on(x.FRAG_DECRYPTED,this.onFragDecrypted,this),e.on(x.INIT_PTS_FOUND,this.onInitPtsFound,this),e.on(x.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),e.on(x.BUFFER_FLUSHING,this.onBufferFlushing,this)}destroy(){const{hls:e}=this;e.off(x.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(x.SUBTITLE_TRACKS_UPDATED,this.onSubtitleTracksUpdated,this),e.off(x.FRAG_LOADING,this.onFragLoading,this),e.off(x.FRAG_LOADED,this.onFragLoaded,this),e.off(x.FRAG_PARSING_USERDATA,this.onFragParsingUserdata,this),e.off(x.FRAG_DECRYPTED,this.onFragDecrypted,this),e.off(x.INIT_PTS_FOUND,this.onInitPtsFound,this),e.off(x.SUBTITLE_TRACKS_CLEARED,this.onSubtitleTracksCleared,this),e.off(x.BUFFER_FLUSHING,this.onBufferFlushing,this),this.hls=this.config=this.media=null,this.cea608Parser1=this.cea608Parser2=void 0}initCea608Parsers(){const e=new Ai(this,"textTrack1"),t=new Ai(this,"textTrack2"),n=new Ai(this,"textTrack3"),i=new Ai(this,"textTrack4");this.cea608Parser1=new Qa(1,e,t),this.cea608Parser2=new Qa(3,n,i)}addCues(e,t,n,i,r){let s=!1;for(let o=r.length;o--;){const d=r[o],l=rm(d[0],d[1],t,n);if(l>=0&&(d[0]=Math.min(d[0],t),d[1]=Math.max(d[1],n),s=!0,l/(n-t)>.5))return}if(s||r.push([t,n]),this.config.renderTextTracksNatively){const o=this.captionsTracks[e];this.Cues.newCue(o,t,n,i)}else{const o=this.Cues.newCue(null,t,n,i);this.hls.trigger(x.CUES_PARSED,{type:"captions",cues:o,track:e})}}onInitPtsFound(e,{frag:t,id:n,initPTS:i,timescale:r}){const{unparsedVttFrags:s}=this;n===re.MAIN&&(this.initPTS[t.cc]={baseTime:i,timescale:r}),s.length&&(this.unparsedVttFrags=[],s.forEach(o=>{this.onFragLoaded(x.FRAG_LOADED,o)}))}getExistingTrack(e,t){const{media:n}=this;if(n)for(let i=0;i<n.textTracks.length;i++){const r=n.textTracks[i];if(eo(r,{name:e,lang:t,characteristics:"transcribes-spoken-dialog,describes-music-and-sound"}))return r}return null}createCaptionsTrack(e){this.config.renderTextTracksNatively?this.createNativeTrack(e):this.createNonNativeTrack(e)}createNativeTrack(e){if(this.captionsTracks[e])return;const{captionsProperties:t,captionsTracks:n,media:i}=this,{label:r,languageCode:s}=t[e],o=this.getExistingTrack(r,s);if(o)n[e]=o,Zt(n[e]),yl(n[e],i);else{const d=this.createTextTrack("captions",r,s);d&&(d[e]=!0,n[e]=d)}}createNonNativeTrack(e){if(this.nonNativeCaptionsTracks[e])return;const t=this.captionsProperties[e];if(!t)return;const n=t.label,i={_id:e,label:n,kind:"captions",default:t.media?!!t.media.default:!1,closedCaptions:t.media};this.nonNativeCaptionsTracks[e]=i,this.hls.trigger(x.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:[i]})}createTextTrack(e,t,n){const i=this.media;if(i)return i.addTextTrack(e,t,n)}onMediaAttaching(e,t){this.media=t.media,t.mediaSource||this._cleanTracks()}onMediaDetaching(e,t){const n=!!t.transferMedia;if(this.media=null,n)return;const{captionsTracks:i}=this;Object.keys(i).forEach(r=>{Zt(i[r]),delete i[r]}),this.nonNativeCaptionsTracks={}}onManifestLoading(){this.lastCc=-1,this.lastSn=-1,this.lastPartIndex=-1,this.prevCC=-1,this.vttCCs=to(),this._cleanTracks(),this.tracks=[],this.captionsTracks={},this.nonNativeCaptionsTracks={},this.textTracks=[],this.unparsedVttFrags=[],this.initPTS=[],this.cea608Parser1&&this.cea608Parser2&&(this.cea608Parser1.reset(),this.cea608Parser2.reset())}_cleanTracks(){const{media:e}=this;if(!e)return;const t=e.textTracks;if(t)for(let n=0;n<t.length;n++)Zt(t[n])}onSubtitleTracksUpdated(e,t){const n=t.subtitleTracks||[],i=n.some(r=>r.textCodec===Sr);if(this.config.enableWebVTT||i&&this.config.enableIMSC1){if(dl(this.tracks,n)){this.tracks=n;return}if(this.textTracks=[],this.tracks=n,this.config.renderTextTracksNatively){const s=this.media,o=s?Li(s.textTracks):null;if(this.tracks.forEach((d,l)=>{let c;if(o){let u=null;for(let h=0;h<o.length;h++)if(o[h]&&eo(o[h],d)){u=o[h],o[h]=null;break}u&&(c=u)}if(c)Zt(c);else{const u=kl(d);c=this.createTextTrack(u,d.name,d.lang),c&&(c.mode="disabled")}c&&this.textTracks.push(c)}),o!=null&&o.length){const d=o.filter(l=>l!==null).map(l=>l.label);d.length&&this.hls.logger.warn(`Media element contains unused subtitle tracks: ${d.join(", ")}. Replace media element for each source to clear TextTracks and captions menu.`)}}else if(this.tracks.length){const s=this.tracks.map(o=>({label:o.name,kind:o.type.toLowerCase(),default:o.default,subtitleTrack:o}));this.hls.trigger(x.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:s})}}}onManifestLoaded(e,t){this.config.enableCEA708Captions&&t.captions&&t.captions.forEach(n=>{const i=/(?:CC|SERVICE)([1-4])/.exec(n.instreamId);if(!i)return;const r=`textTrack${i[1]}`,s=this.captionsProperties[r];s&&(s.label=n.name,n.lang&&(s.languageCode=n.lang),s.media=n)})}closedCaptionsForLevel(e){const t=this.hls.levels[e.level];return t==null?void 0:t.attrs["CLOSED-CAPTIONS"]}onFragLoading(e,t){if(this.enabled&&t.frag.type===re.MAIN){var n,i;const{cea608Parser1:r,cea608Parser2:s,lastSn:o}=this,{cc:d,sn:l}=t.frag,c=(n=(i=t.part)==null?void 0:i.index)!=null?n:-1;r&&s&&(l!==o+1||l===o&&c!==this.lastPartIndex+1||d!==this.lastCc)&&(r.reset(),s.reset()),this.lastCc=d,this.lastSn=l,this.lastPartIndex=c}}onFragLoaded(e,t){const{frag:n,payload:i}=t;if(n.type===re.SUBTITLE)if(i.byteLength){const r=n.decryptdata,s="stats"in t;if(r==null||!r.encrypted||s){const o=this.tracks[n.level],d=this.vttCCs;d[n.cc]||(d[n.cc]={start:n.start,prevCC:this.prevCC,new:!0},this.prevCC=n.cc),o&&o.textCodec===Sr?this._parseIMSC1(n,i):this._parseVTTs(t)}}else this.hls.trigger(x.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:n,error:new Error("Empty subtitle payload")})}_parseIMSC1(e,t){const n=this.hls;Xa(t,this.initPTS[e.cc],i=>{this._appendCues(i,e.level),n.trigger(x.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:e})},i=>{n.logger.log(`Failed to parse IMSC1: ${i}`),n.trigger(x.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:e,error:i})})}_parseVTTs(e){var t;const{frag:n,payload:i}=e,{initPTS:r,unparsedVttFrags:s}=this,o=r.length-1;if(!r[n.cc]&&o===-1){s.push(e);return}const d=this.hls,l=(t=n.initSegment)!=null&&t.data?Je(n.initSegment.data,new Uint8Array(i)).buffer:i;Xp(l,this.initPTS[n.cc],this.vttCCs,n.cc,n.start,c=>{this._appendCues(c,n.level),d.trigger(x.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:n})},c=>{const u=c.message==="Missing initPTS for VTT MPEGTS";u?s.push(e):this._fallbackToIMSC1(n,i),d.logger.log(`Failed to parse VTT cue: ${c}`),!(u&&o>n.cc)&&d.trigger(x.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:n,error:c})})}_fallbackToIMSC1(e,t){const n=this.tracks[e.level];n.textCodec||Xa(t,this.initPTS[e.cc],()=>{n.textCodec=Sr,this._parseIMSC1(e,t)},()=>{n.textCodec="wvtt"})}_appendCues(e,t){const n=this.hls;if(this.config.renderTextTracksNatively){const i=this.textTracks[t];if(!i||i.mode==="disabled")return;e.forEach(r=>Al(i,r))}else{const i=this.tracks[t];if(!i)return;const r=i.default?"default":"subtitles"+t;n.trigger(x.CUES_PARSED,{type:"subtitles",cues:e,track:r})}}onFragDecrypted(e,t){const{frag:n}=t;n.type===re.SUBTITLE&&this.onFragLoaded(x.FRAG_LOADED,t)}onSubtitleTracksCleared(){this.tracks=[],this.captionsTracks={}}onFragParsingUserdata(e,t){if(!this.enabled||!this.config.enableCEA708Captions)return;const{frag:n,samples:i}=t;if(!(n.type===re.MAIN&&this.closedCaptionsForLevel(n)==="NONE"))for(let r=0;r<i.length;r++){const s=i[r].bytes;if(s){this.cea608Parser1||this.initCea608Parsers();const o=this.extractCea608Data(s);this.cea608Parser1.addData(i[r].pts,o[0]),this.cea608Parser2.addData(i[r].pts,o[1])}}}onBufferFlushing(e,{startOffset:t,endOffset:n,endOffsetSubtitles:i,type:r}){const{media:s}=this;if(!(!s||s.currentTime<n)){if(!r||r==="video"){const{captionsTracks:o}=this;Object.keys(o).forEach(d=>Kr(o[d],t,n))}if(this.config.renderTextTracksNatively&&t===0&&i!==void 0){const{textTracks:o}=this;Object.keys(o).forEach(d=>Kr(o[d],t,i))}}}extractCea608Data(e){const t=[[],[]],n=e[0]&31;let i=2;for(let r=0;r<n;r++){const s=e[i++],o=127&e[i++],d=127&e[i++];if(o===0&&d===0)continue;if((4&s)!==0){const c=3&s;(c===0||c===1)&&(t[c].push(o),t[c].push(d))}}return t}}function kl(a){return a.characteristics&&/transcribes-spoken-dialog/gi.test(a.characteristics)&&/describes-music-and-sound/gi.test(a.characteristics)?"captions":"subtitles"}function eo(a,e){return!!a&&a.kind===kl(e)&&Ur(e,a)}function rm(a,e,t,n){return Math.min(e,n)-Math.max(a,t)}function to(){return{ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!0}}}const sm=/\s/,am={newCue(a,e,t,n){const i=[];let r,s,o,d,l;const c=self.VTTCue||self.TextTrackCue;for(let h=0;h<n.rows.length;h++)if(r=n.rows[h],o=!0,d=0,l="",!r.isEmpty()){var u;for(let v=0;v<r.chars.length;v++)sm.test(r.chars[v].uchar)&&o?d++:(l+=r.chars[v].uchar,o=!1);r.cueStartTime=e,e===t&&(t+=1e-4),d>=16?d--:d++;const m=Tl(l.trim()),g=hs(e,t,m);a!=null&&(u=a.cues)!=null&&u.getCueById(g)||(s=new c(e,t,m),s.id=g,s.line=h+1,s.align="left",s.position=10+Math.min(80,Math.floor(d*8/32)*10),i.push(s))}return a&&i.length&&(i.sort((h,m)=>h.line==="auto"||m.line==="auto"?0:h.line>8&&m.line>8?m.line-h.line:h.line-m.line),i.forEach(h=>Al(a,h))),i}};function om(){if(self.fetch&&self.AbortController&&self.ReadableStream&&self.Request)try{return new self.ReadableStream({}),!0}catch{}return!1}const lm=/(\d+)-(\d+)\/(\d+)/;class no{constructor(e){this.fetchSetup=void 0,this.requestTimeout=void 0,this.request=null,this.response=null,this.controller=void 0,this.context=null,this.config=null,this.callbacks=null,this.stats=void 0,this.loader=null,this.fetchSetup=e.fetchSetup||hm,this.controller=new self.AbortController,this.stats=new jr}destroy(){this.loader=this.callbacks=this.context=this.config=this.request=null,this.abortInternal(),this.response=null,this.fetchSetup=this.controller=this.stats=null}abortInternal(){this.controller&&!this.stats.loading.end&&(this.stats.aborted=!0,this.controller.abort())}abort(){var e;this.abortInternal(),(e=this.callbacks)!=null&&e.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.response)}load(e,t,n){const i=this.stats;if(i.loading.start)throw new Error("Loader can only be used once.");i.loading.start=self.performance.now();const r=dm(e,this.controller.signal),s=e.responseType==="arraybuffer",o=s?"byteLength":"length",{maxTimeToFirstByteMs:d,maxLoadTimeMs:l}=t.loadPolicy;this.context=e,this.config=t,this.callbacks=n,this.request=this.fetchSetup(e,r),self.clearTimeout(this.requestTimeout),t.timeout=d&&Z(d)?d:l,this.requestTimeout=self.setTimeout(()=>{this.callbacks&&(this.abortInternal(),this.callbacks.onTimeout(i,e,this.response))},t.timeout),(Yn(this.request)?this.request.then(self.fetch):self.fetch(this.request)).then(u=>{var h;this.response=this.loader=u;const m=Math.max(self.performance.now(),i.loading.start);if(self.clearTimeout(this.requestTimeout),t.timeout=l,this.requestTimeout=self.setTimeout(()=>{this.callbacks&&(this.abortInternal(),this.callbacks.onTimeout(i,e,this.response))},l-(m-i.loading.start)),!u.ok){const{status:v,statusText:E}=u;throw new fm(E||"fetch, bad network response",v,u)}i.loading.first=m,i.total=um(u.headers)||i.total;const g=(h=this.callbacks)==null?void 0:h.onProgress;return g&&Z(t.highWaterMark)?this.loadProgressively(u,i,e,t.highWaterMark,g):s?u.arrayBuffer():e.responseType==="json"?u.json():u.text()}).then(u=>{var h,m;const g=this.response;if(!g)throw new Error("loader destroyed");self.clearTimeout(this.requestTimeout),i.loading.end=Math.max(self.performance.now(),i.loading.first);const v=u[o];v&&(i.loaded=i.total=v);const E={url:g.url,data:u,code:g.status},C=(h=this.callbacks)==null?void 0:h.onProgress;C&&!Z(t.highWaterMark)&&C(i,e,u,g),(m=this.callbacks)==null||m.onSuccess(E,i,e,g)}).catch(u=>{var h;if(self.clearTimeout(this.requestTimeout),i.aborted)return;const m=u&&u.code||0,g=u?u.message:null;(h=this.callbacks)==null||h.onError({code:m,text:g},e,u?u.details:null,i)})}getCacheAge(){let e=null;if(this.response){const t=this.response.headers.get("age");e=t?parseFloat(t):null}return e}getResponseHeader(e){return this.response?this.response.headers.get(e):null}loadProgressively(e,t,n,i=0,r){const s=new Ho,o=e.body.getReader(),d=()=>o.read().then(l=>{if(l.done)return s.dataLength&&r(t,n,s.flush().buffer,e),Promise.resolve(new ArrayBuffer(0));const c=l.value,u=c.length;return t.loaded+=u,u<i||s.dataLength?(s.push(c),s.dataLength>=i&&r(t,n,s.flush().buffer,e)):r(t,n,c.buffer,e),d()}).catch(()=>Promise.reject());return d()}}function dm(a,e){const t={method:"GET",mode:"cors",credentials:"same-origin",signal:e,headers:new self.Headers(Se({},a.headers))};return a.rangeEnd&&t.headers.set("Range","bytes="+a.rangeStart+"-"+String(a.rangeEnd-1)),t}function cm(a){const e=lm.exec(a);if(e)return parseInt(e[2])-parseInt(e[1])+1}function um(a){const e=a.get("Content-Range");if(e){const n=cm(e);if(Z(n))return n}const t=a.get("Content-Length");if(t)return parseInt(t)}function hm(a,e){return new self.Request(a.url,e)}class fm extends Error{constructor(e,t,n){super(e),this.code=void 0,this.details=void 0,this.code=t,this.details=n}}const pm=/^age:\s*[\d.]+\s*$/im;class wl{constructor(e){this.xhrSetup=void 0,this.requestTimeout=void 0,this.retryTimeout=void 0,this.retryDelay=void 0,this.config=null,this.callbacks=null,this.context=null,this.loader=null,this.stats=void 0,this.xhrSetup=e&&e.xhrSetup||null,this.stats=new jr,this.retryDelay=0}destroy(){this.callbacks=null,this.abortInternal(),this.loader=null,this.config=null,this.context=null,this.xhrSetup=null}abortInternal(){const e=this.loader;self.clearTimeout(this.requestTimeout),self.clearTimeout(this.retryTimeout),e&&(e.onreadystatechange=null,e.onprogress=null,e.readyState!==4&&(this.stats.aborted=!0,e.abort()))}abort(){var e;this.abortInternal(),(e=this.callbacks)!=null&&e.onAbort&&this.callbacks.onAbort(this.stats,this.context,this.loader)}load(e,t,n){if(this.stats.loading.start)throw new Error("Loader can only be used once.");this.stats.loading.start=self.performance.now(),this.context=e,this.config=t,this.callbacks=n,this.loadInternal()}loadInternal(){const{config:e,context:t}=this;if(!e||!t)return;const n=this.loader=new self.XMLHttpRequest,i=this.stats;i.loading.first=0,i.loaded=0,i.aborted=!1;const r=this.xhrSetup;r?Promise.resolve().then(()=>{if(!(this.loader!==n||this.stats.aborted))return r(n,t.url)}).catch(s=>{if(!(this.loader!==n||this.stats.aborted))return n.open("GET",t.url,!0),r(n,t.url)}).then(()=>{this.loader!==n||this.stats.aborted||this.openAndSendXhr(n,t,e)}).catch(s=>{var o;(o=this.callbacks)==null||o.onError({code:n.status,text:s.message},t,n,i)}):this.openAndSendXhr(n,t,e)}openAndSendXhr(e,t,n){e.readyState||e.open("GET",t.url,!0);const i=t.headers,{maxTimeToFirstByteMs:r,maxLoadTimeMs:s}=n.loadPolicy;if(i)for(const o in i)e.setRequestHeader(o,i[o]);t.rangeEnd&&e.setRequestHeader("Range","bytes="+t.rangeStart+"-"+(t.rangeEnd-1)),e.onreadystatechange=this.readystatechange.bind(this),e.onprogress=this.loadprogress.bind(this),e.responseType=t.responseType,self.clearTimeout(this.requestTimeout),n.timeout=r&&Z(r)?r:s,this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),n.timeout),e.send()}readystatechange(){const{context:e,loader:t,stats:n}=this;if(!e||!t)return;const i=t.readyState,r=this.config;if(!n.aborted&&i>=2&&(n.loading.first===0&&(n.loading.first=Math.max(self.performance.now(),n.loading.start),r.timeout!==r.loadPolicy.maxLoadTimeMs&&(self.clearTimeout(this.requestTimeout),r.timeout=r.loadPolicy.maxLoadTimeMs,this.requestTimeout=self.setTimeout(this.loadtimeout.bind(this),r.loadPolicy.maxLoadTimeMs-(n.loading.first-n.loading.start)))),i===4)){self.clearTimeout(this.requestTimeout),t.onreadystatechange=null,t.onprogress=null;const l=t.status,c=t.responseType==="text"?t.responseText:null;if(l>=200&&l<300){const g=c??t.response;if(g!=null){var s,o;n.loading.end=Math.max(self.performance.now(),n.loading.first);const v=t.responseType==="arraybuffer"?g.byteLength:g.length;n.loaded=n.total=v,n.bwEstimate=n.total*8e3/(n.loading.end-n.loading.first);const E=(s=this.callbacks)==null?void 0:s.onProgress;E&&E(n,e,g,t);const C={url:t.responseURL,data:g,code:l};(o=this.callbacks)==null||o.onSuccess(C,n,e,t);return}}const u=r.loadPolicy.errorRetry,h=n.retry,m={url:e.url,data:void 0,code:l};if(Bi(u,h,!1,m))this.retry(u);else{var d;be.error(`${l} while loading ${e.url}`),(d=this.callbacks)==null||d.onError({code:l,text:t.statusText},e,t,n)}}}loadtimeout(){if(!this.config)return;const e=this.config.loadPolicy.timeoutRetry,t=this.stats.retry;if(Bi(e,t,!0))this.retry(e);else{var n;be.warn(`timeout while loading ${(n=this.context)==null?void 0:n.url}`);const i=this.callbacks;i&&(this.abortInternal(),i.onTimeout(this.stats,this.context,this.loader))}}retry(e){const{context:t,stats:n}=this;this.retryDelay=zr(e,n.retry),n.retry++,be.warn(`${status?"HTTP Status "+status:"Timeout"} while loading ${t==null?void 0:t.url}, retrying ${n.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`),this.abortInternal(),this.loader=null,self.clearTimeout(this.retryTimeout),this.retryTimeout=self.setTimeout(this.loadInternal.bind(this),this.retryDelay)}loadprogress(e){const t=this.stats;t.loaded=e.loaded,e.lengthComputable&&(t.total=e.total)}getCacheAge(){let e=null;if(this.loader&&pm.test(this.loader.getAllResponseHeaders())){const t=this.loader.getResponseHeader("age");e=t?parseFloat(t):null}return e}getResponseHeader(e){return this.loader&&new RegExp(`^${e}:\\s*[\\d.]+\\s*$`,"im").test(this.loader.getAllResponseHeaders())?this.loader.getResponseHeader(e):null}}const mm={maxTimeToFirstByteMs:8e3,maxLoadTimeMs:2e4,timeoutRetry:null,errorRetry:null},gm=Ee(Ee({autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,ignoreDevicePixelRatio:!1,maxDevicePixelRatio:Number.POSITIVE_INFINITY,preferManagedMediaSource:!0,initialLiveManifestSize:1,maxBufferLength:30,backBufferLength:1/0,frontBufferFlushThreshold:1/0,startOnSegmentBoundary:!1,maxBufferSize:60*1e3*1e3,maxFragLookUpTolerance:.25,maxBufferHole:.1,detectStallWithCurrentTimeMs:1250,highBufferWatchdogPeriod:2,nudgeOffset:.1,nudgeMaxRetry:3,nudgeOnVideoHole:!0,liveSyncMode:"edge",liveSyncDurationCount:3,liveSyncOnStallIncrease:1,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxLiveSyncPlaybackRate:1,liveDurationInfinity:!1,liveBackBufferLength:null,maxMaxBufferLength:600,enableWorker:!0,workerPath:null,enableSoftwareAES:!0,startLevel:void 0,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,ignorePlaylistParsingErrors:!1,loader:wl,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,licenseResponseCallback:void 0,abrController:Nu,bufferController:If,capLevelController:ds,errorController:Hu,fpsController:vp,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrEwmaDefaultEstimateMax:5e6,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,drmSystems:{},drmSystemOptions:{},requestMediaKeySystemAccessFunc:_o,requireKeySystemAccessOnStart:!1,testBandwidth:!0,progressive:!1,lowLatencyMode:!0,cmcd:void 0,enableDateRangeMetadataCues:!0,enableEmsgMetadataCues:!0,enableEmsgKLVMetadata:!1,enableID3MetadataCues:!0,enableInterstitialPlayback:!0,interstitialAppendInPlace:!0,interstitialLiveLookAhead:10,useMediaCapabilities:!0,preserveManualLevelOnError:!1,certLoadPolicy:{default:mm},keyLoadPolicy:{default:{maxTimeToFirstByteMs:8e3,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:2e4,backoff:"linear"},errorRetry:{maxNumRetry:8,retryDelayMs:1e3,maxRetryDelayMs:2e4,backoff:"linear"}}},manifestLoadPolicy:{default:{maxTimeToFirstByteMs:1/0,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},playlistLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:2,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},fragLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:12e4,timeoutRetry:{maxNumRetry:4,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:6,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},steeringManifestLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:2e4,timeoutRetry:{maxNumRetry:2,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:1,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},interstitialAssetListLoadPolicy:{default:{maxTimeToFirstByteMs:1e4,maxLoadTimeMs:3e4,timeoutRetry:{maxNumRetry:0,retryDelayMs:0,maxRetryDelayMs:0},errorRetry:{maxNumRetry:0,retryDelayMs:1e3,maxRetryDelayMs:8e3}}},manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3},ym()),{},{subtitleStreamController:Dp,subtitleTrackController:xp,timelineController:im,audioStreamController:Sf,audioTrackController:Tf,emeController:en,cmcdController:gp,contentSteeringController:Ap,interstitialsController:Rp});function ym(){return{cueHandler:am,enableWebVTT:!0,enableIMSC1:!0,enableCEA708Captions:!0,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",captionsTextTrack3Label:"Unknown CC",captionsTextTrack3LanguageCode:"",captionsTextTrack4Label:"Unknown CC",captionsTextTrack4LanguageCode:"",renderTextTracksNatively:!0}}function Am(a,e,t){if((e.liveSyncDurationCount||e.liveMaxLatencyDurationCount)&&(e.liveSyncDuration||e.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");if(e.liveMaxLatencyDurationCount!==void 0&&(e.liveSyncDurationCount===void 0||e.liveMaxLatencyDurationCount<=e.liveSyncDurationCount))throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');if(e.liveMaxLatencyDuration!==void 0&&(e.liveSyncDuration===void 0||e.liveMaxLatencyDuration<=e.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');const n=Vr(a),i=["manifest","level","frag"],r=["TimeOut","MaxRetry","RetryDelay","MaxRetryTimeout"];return i.forEach(s=>{const o=`${s==="level"?"playlist":s}LoadPolicy`,d=e[o]===void 0,l=[];r.forEach(c=>{const u=`${s}Loading${c}`,h=e[u];if(h!==void 0&&d){l.push(u);const m=n[o].default;switch(e[o]={default:m},c){case"TimeOut":m.maxLoadTimeMs=h,m.maxTimeToFirstByteMs=h;break;case"MaxRetry":m.errorRetry.maxNumRetry=h,m.timeoutRetry.maxNumRetry=h;break;case"RetryDelay":m.errorRetry.retryDelayMs=h,m.timeoutRetry.retryDelayMs=h;break;case"MaxRetryTimeout":m.errorRetry.maxRetryDelayMs=h,m.timeoutRetry.maxRetryDelayMs=h;break}}}),l.length&&t.warn(`hls.js config: "${l.join('", "')}" setting(s) are deprecated, use "${o}": ${Ie(e[o])}`)}),Ee(Ee({},n),e)}function Vr(a){return a&&typeof a=="object"?Array.isArray(a)?a.map(Vr):Object.keys(a).reduce((e,t)=>(e[t]=Vr(a[t]),e),{}):a}function vm(a,e){const t=a.loader;t!==no&&t!==wl?(e.log("[config]: Custom loader detected, cannot enable progressive streaming"),a.progressive=!1):om()&&(a.loader=no,a.progressive=!0,a.enableSoftwareAES=!0,e.log("[config]: Progressive streaming enabled, using FetchLoader"))}const Ii=2,bm=.1,Em=.05,xm=100;class Sm extends wo{constructor(e,t){super("gap-controller",e.logger),this.hls=null,this.fragmentTracker=null,this.media=null,this.mediaSource=void 0,this.nudgeRetry=0,this.stallReported=!1,this.stalled=null,this.moved=!1,this.seeking=!1,this.buffered={},this.lastCurrentTime=0,this.ended=0,this.waiting=0,this.onMediaPlaying=()=>{this.ended=0,this.waiting=0},this.onMediaWaiting=()=>{var n;(n=this.media)!=null&&n.seeking||(this.waiting=self.performance.now(),this.tick())},this.onMediaEnded=()=>{if(this.hls){var n;this.ended=((n=this.media)==null?void 0:n.currentTime)||1,this.hls.trigger(x.MEDIA_ENDED,{stalled:!1})}},this.hls=e,this.fragmentTracker=t,this.registerListeners()}registerListeners(){const{hls:e}=this;e&&(e.on(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(x.BUFFER_APPENDED,this.onBufferAppended,this))}unregisterListeners(){const{hls:e}=this;e&&(e.off(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(x.BUFFER_APPENDED,this.onBufferAppended,this))}destroy(){super.destroy(),this.unregisterListeners(),this.media=this.hls=this.fragmentTracker=null,this.mediaSource=void 0}onMediaAttached(e,t){this.setInterval(xm),this.mediaSource=t.mediaSource;const n=this.media=t.media;je(n,"playing",this.onMediaPlaying),je(n,"waiting",this.onMediaWaiting),je(n,"ended",this.onMediaEnded)}onMediaDetaching(e,t){this.clearInterval();const{media:n}=this;n&&(Ze(n,"playing",this.onMediaPlaying),Ze(n,"waiting",this.onMediaWaiting),Ze(n,"ended",this.onMediaEnded),this.media=null),this.mediaSource=void 0}onBufferAppended(e,t){this.buffered=t.timeRanges}get hasBuffered(){return Object.keys(this.buffered).length>0}tick(){var e;if(!((e=this.media)!=null&&e.readyState)||!this.hasBuffered)return;const t=this.media.currentTime;this.poll(t,this.lastCurrentTime),this.lastCurrentTime=t}poll(e,t){var n,i;const r=(n=this.hls)==null?void 0:n.config;if(!r)return;const s=this.media;if(!s)return;const{seeking:o}=s,d=this.seeking&&!o,l=!this.seeking&&o,c=s.paused&&!o||s.ended||s.playbackRate===0;if(this.seeking=o,e!==t){t&&(this.ended=0),this.moved=!0,o||(this.nudgeRetry=0,r.nudgeOnVideoHole&&!c&&e>t&&this.nudgeOnVideoHole(e,t)),this.waiting===0&&this.stallResolved(e);return}if(l||d){d&&this.stallResolved(e);return}if(c){this.nudgeRetry=0,this.stallResolved(e),!this.ended&&s.ended&&this.hls&&(this.ended=e||1,this.hls.trigger(x.MEDIA_ENDED,{stalled:!1}));return}if(!he.getBuffered(s).length){this.nudgeRetry=0;return}const u=he.bufferInfo(s,e,0),h=u.nextStart||0,m=this.fragmentTracker;if(o&&m&&this.hls){const N=io(this.hls.inFlightFragments,e),P=u.len>Ii,O=!h||N||h-e>Ii&&!m.getPartialFragment(e);if(P||O)return;this.moved=!1}const g=(i=this.hls)==null?void 0:i.latestLevelDetails;if(!this.moved&&this.stalled!==null&&m){if(!(u.len>0)&&!h)return;const P=Math.max(h,u.start||0)-e,U=!!(g!=null&&g.live)?g.targetduration*2:Ii,D=m.getPartialFragment(e);if(P>0&&(P<=U||D)){s.paused||this._trySkipBufferHole(D);return}}const v=r.detectStallWithCurrentTimeMs,E=self.performance.now(),C=this.waiting;let I=this.stalled;if(I===null)if(C>0&&E-C<v)I=this.stalled=C;else{this.stalled=E;return}const L=E-I;if(!o&&(L>=v||C)&&this.hls){var R;if(((R=this.mediaSource)==null?void 0:R.readyState)==="ended"&&!(g!=null&&g.live)&&Math.abs(e-((g==null?void 0:g.edge)||0))<1){if(this.ended)return;this.ended=e||1,this.hls.trigger(x.MEDIA_ENDED,{stalled:!0});return}if(this._reportStall(u),!this.media||!this.hls)return}const _=he.bufferInfo(s,e,r.maxBufferHole);this._tryFixBufferStall(_,L,e)}stallResolved(e){const t=this.stalled;if(t&&this.hls&&(this.stalled=null,this.stallReported)){const n=self.performance.now()-t;this.log(`playback not stuck anymore @${e}, after ${Math.round(n)}ms`),this.stallReported=!1,this.waiting=0,this.hls.trigger(x.STALL_RESOLVED,{})}}nudgeOnVideoHole(e,t){var n;const i=this.buffered.video;if(this.hls&&this.media&&this.fragmentTracker&&(n=this.buffered.audio)!=null&&n.length&&i&&i.length>1&&e>i.end(0)){const r=he.bufferedInfo(he.timeRangesToArray(this.buffered.audio),e,0);if(r.len>1&&t>=r.start){const s=he.timeRangesToArray(i),o=he.bufferedInfo(s,t,0).bufferedIndex;if(o>-1&&o<s.length-1){const d=he.bufferedInfo(s,e,0).bufferedIndex,l=s[o].end,c=s[o+1].start;if((d===-1||d>o)&&c-l<1&&e-l<2){const u=new Error(`nudging playhead to flush pipeline after video hole. currentTime: ${e} hole: ${l} -> ${c} buffered index: ${d}`);this.warn(u.message),this.media.currentTime+=1e-6;const h=this.fragmentTracker.getPartialFragment(e)||void 0,m=he.bufferInfo(this.media,e,0);this.hls.trigger(x.ERROR,{type:oe.MEDIA_ERROR,details:F.BUFFER_SEEK_OVER_HOLE,fatal:!1,error:u,reason:u.message,frag:h,buffer:m.len,bufferInfo:m})}}}}}_tryFixBufferStall(e,t,n){var i,r;const{fragmentTracker:s,media:o}=this,d=(i=this.hls)==null?void 0:i.config;if(!o||!s||!d)return;const l=(r=this.hls)==null?void 0:r.latestLevelDetails,c=s.getPartialFragment(n);if((c||l!=null&&l.live&&n<l.fragmentStart)&&(this._trySkipBufferHole(c)||!this.media))return;const u=e.buffered,h=this.adjacentTraversal(e,n);(u&&u.length>1&&e.len>d.maxBufferHole||e.nextStart&&(e.nextStart-n<d.maxBufferHole||h))&&(t>d.highBufferWatchdogPeriod*1e3||this.waiting)&&(this.warn("Trying to nudge playhead over buffer-hole"),this._tryNudgeBuffer(e))}adjacentTraversal(e,t){const n=this.fragmentTracker,i=e.nextStart;if(n&&i){const r=n.getFragAtPos(t,re.MAIN),s=n.getFragAtPos(i,re.MAIN);if(r&&s)return s.sn-r.sn<2}return!1}_reportStall(e){const{hls:t,media:n,stallReported:i,stalled:r}=this;if(!i&&r!==null&&n&&t){this.stallReported=!0;const s=new Error(`Playback stalling at @${n.currentTime} due to low buffer (${Ie(e)})`);this.warn(s.message),t.trigger(x.ERROR,{type:oe.MEDIA_ERROR,details:F.BUFFER_STALLED_ERROR,fatal:!1,error:s,buffer:e.len,bufferInfo:e,stalled:{start:r}})}}_trySkipBufferHole(e){var t;const{fragmentTracker:n,media:i}=this,r=(t=this.hls)==null?void 0:t.config;if(!i||!n||!r)return 0;const s=i.currentTime,o=he.bufferInfo(i,s,0),d=s<o.start?o.start:o.nextStart;if(d&&this.hls){const c=o.len<=r.maxBufferHole,u=o.len>0&&o.len<1&&i.readyState<3,h=d-s;if(h>0&&(c||u)){if(h>r.maxBufferHole){let g=!1;if(s===0){const v=n.getAppendedFrag(0,re.MAIN);v&&d<v.end&&(g=!0)}if(!g){const v=e||n.getAppendedFrag(s,re.MAIN);if(v){var l;if(!((l=this.hls.loadLevelObj)!=null&&l.details)||io(this.hls.inFlightFragments,d))return 0;let C=!1,I=v.end;for(;I<d;){const L=n.getPartialFragment(I);if(L)I+=L.duration;else{C=!0;break}}if(C)return 0}}}const m=Math.max(d+Em,s+bm);if(this.warn(`skipping hole, adjusting currentTime from ${s} to ${m}`),this.moved=!0,i.currentTime=m,!(e!=null&&e.gap)){const g=new Error(`fragment loaded with buffer holes, seeking from ${s} to ${m}`);this.hls.trigger(x.ERROR,{type:oe.MEDIA_ERROR,details:F.BUFFER_SEEK_OVER_HOLE,fatal:!1,error:g,reason:g.message,frag:e||void 0,buffer:o.len,bufferInfo:o})}return m}}return 0}_tryNudgeBuffer(e){const{hls:t,media:n,nudgeRetry:i}=this,r=t==null?void 0:t.config;if(!n||!r)return 0;const s=n.currentTime;if(this.nudgeRetry++,i<r.nudgeMaxRetry){const o=s+(i+1)*r.nudgeOffset,d=new Error(`Nudging 'currentTime' from ${s} to ${o}`);this.warn(d.message),n.currentTime=o,t.trigger(x.ERROR,{type:oe.MEDIA_ERROR,details:F.BUFFER_NUDGE_ON_STALL,error:d,fatal:!1,buffer:e.len,bufferInfo:e})}else{const o=new Error(`Playhead still not moving while enough data buffered @${s} after ${r.nudgeMaxRetry} nudges`);this.error(o.message),t.trigger(x.ERROR,{type:oe.MEDIA_ERROR,details:F.BUFFER_STALLED_ERROR,error:o,fatal:!0,buffer:e.len,bufferInfo:e})}}}function io(a,e){const t=ro(a.main);if(t&&t.start<=e)return t;const n=ro(a.audio);return n&&n.start<=e?n:null}function ro(a){if(!a)return null;switch(a.state){case K.IDLE:case K.STOPPED:case K.ENDED:case K.ERROR:return null}return a.frag}const Tm=.25;function qr(){if(!(typeof self>"u"))return self.VTTCue||self.TextTrackCue}function so(a,e,t,n,i){let r=new a(e,t,"");try{r.value=n,i&&(r.type=i)}catch{r=new a(e,t,Ie(i?Ee({type:i},n):n))}return r}const vi=(()=>{const a=qr();try{a&&new a(0,Number.POSITIVE_INFINITY,"")}catch{return Number.MAX_VALUE}return Number.POSITIVE_INFINITY})();function Cm(a){return Uint8Array.from(a.replace(/^0x/,"").replace(/([\da-fA-F]{2}) ?/g,"0x$1 ").replace(/ +$/,"").split(" ")).buffer}class Lm{constructor(e){this.hls=void 0,this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.removeCues=!0,this.onEventCueEnter=()=>{this.hls&&this.hls.trigger(x.EVENT_CUE_ENTER,{})},this.hls=e,this._registerListeners()}destroy(){this._unregisterListeners(),this.id3Track=null,this.media=null,this.dateRangeCuesAppended={},this.hls=this.onEventCueEnter=null}_registerListeners(){const{hls:e}=this;e.on(x.MEDIA_ATTACHING,this.onMediaAttaching,this),e.on(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),e.on(x.BUFFER_FLUSHING,this.onBufferFlushing,this),e.on(x.LEVEL_UPDATED,this.onLevelUpdated,this),e.on(x.LEVEL_PTS_UPDATED,this.onLevelPtsUpdated,this)}_unregisterListeners(){const{hls:e}=this;e.off(x.MEDIA_ATTACHING,this.onMediaAttaching,this),e.off(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.FRAG_PARSING_METADATA,this.onFragParsingMetadata,this),e.off(x.BUFFER_FLUSHING,this.onBufferFlushing,this),e.off(x.LEVEL_UPDATED,this.onLevelUpdated,this),e.off(x.LEVEL_PTS_UPDATED,this.onLevelPtsUpdated,this)}onMediaAttaching(e,t){var n;this.media=t.media,((n=t.overrides)==null?void 0:n.cueRemoval)===!1&&(this.removeCues=!1)}onMediaAttached(){const e=this.hls.latestLevelDetails;e&&this.updateDateRangeCues(e)}onMediaDetaching(e,t){this.media=null,!t.transferMedia&&(this.id3Track&&(this.removeCues&&Zt(this.id3Track,this.onEventCueEnter),this.id3Track=null),this.dateRangeCuesAppended={})}onManifestLoading(){this.dateRangeCuesAppended={}}createTrack(e){const t=this.getID3Track(e.textTracks);return t.mode="hidden",t}getID3Track(e){if(this.media){for(let t=0;t<e.length;t++){const n=e[t];if(n.kind==="metadata"&&n.label==="id3")return yl(n,this.media),n}return this.media.addTextTrack("metadata","id3")}}onFragParsingMetadata(e,t){if(!this.media)return;const{hls:{config:{enableEmsgMetadataCues:n,enableID3MetadataCues:i}}}=this;if(!n&&!i)return;const{samples:r}=t;this.id3Track||(this.id3Track=this.createTrack(this.media));const s=qr();if(s)for(let o=0;o<r.length;o++){const d=r[o].type;if(d===Ye.emsg&&!n||!i)continue;const l=Qo(r[o].data);if(l){const c=r[o].pts;let u=c+r[o].duration;u>vi&&(u=vi),u-c<=0&&(u=c+Tm);for(let m=0;m<l.length;m++){const g=l[m];if(!Xo(g)){this.updateId3CueEnds(c,d);const v=so(s,c,u,g,d);v&&this.id3Track.addCue(v)}}}}}updateId3CueEnds(e,t){var n;const i=(n=this.id3Track)==null?void 0:n.cues;if(i)for(let r=i.length;r--;){const s=i[r];s.type===t&&s.startTime<e&&s.endTime===vi&&(s.endTime=e)}}onBufferFlushing(e,{startOffset:t,endOffset:n,type:i}){const{id3Track:r,hls:s}=this;if(!s)return;const{config:{enableEmsgMetadataCues:o,enableID3MetadataCues:d}}=s;if(r&&(o||d)){let l;i==="audio"?l=c=>c.type===Ye.audioId3&&d:i==="video"?l=c=>c.type===Ye.emsg&&o:l=c=>c.type===Ye.audioId3&&d||c.type===Ye.emsg&&o,Kr(r,t,n,l)}}onLevelUpdated(e,{details:t}){this.updateDateRangeCues(t,!0)}onLevelPtsUpdated(e,t){Math.abs(t.drift)>.01&&this.updateDateRangeCues(t.details)}updateDateRangeCues(e,t){if(!this.media||!e.hasProgramDateTime||!this.hls.config.enableDateRangeMetadataCues)return;const{id3Track:n}=this,{dateRanges:i}=e,r=Object.keys(i);let s=this.dateRangeCuesAppended;if(n&&t){var o;if((o=n.cues)!=null&&o.length){const c=Object.keys(s).filter(u=>!r.includes(u));for(let u=c.length;u--;){const h=c[u],m=s[h].cues;delete s[h],Object.keys(m).forEach(g=>{try{const v=m[g];v.removeEventListener("enter",this.onEventCueEnter),n.removeCue(v)}catch{}})}}else s=this.dateRangeCuesAppended={}}const d=e.fragments[e.fragments.length-1];if(r.length===0||!Z(d==null?void 0:d.programDateTime))return;this.id3Track||(this.id3Track=this.createTrack(this.media));const l=qr();for(let c=0;c<r.length;c++){const u=r[c],h=i[u],m=h.startTime,g=s[u],v=(g==null?void 0:g.cues)||{};let E=(g==null?void 0:g.durationKnown)||!1,C=vi;const{duration:I,endDate:L}=h;if(L&&I!==null)C=m+I,E=!0;else if(h.endOnNext&&!E){const _=r.reduce((N,P)=>{if(P!==h.id){const O=i[P];if(O.class===h.class&&O.startDate>h.startDate&&(!N||h.startDate<N.startDate))return O}return N},null);_&&(C=_.startTime,E=!0)}const R=Object.keys(h.attr);for(let _=0;_<R.length;_++){const N=R[_];if(!nh(N))continue;const P=v[N];if(P)E&&!g.durationKnown?P.endTime=C:Math.abs(P.startTime-m)>.01&&(P.startTime=m,P.endTime=C);else if(l){let O=h.attr[N];ih(N)&&(O=Cm(O));const D=so(l,m,C,{key:N,data:O},Ye.dateRange);D&&(D.id=u,this.id3Track.addCue(D),v[N]=D,this.hls.config.interstitialsController&&(N==="X-ASSET-LIST"||N==="X-ASSET-URL")&&D.addEventListener("enter",this.onEventCueEnter))}}s[u]={cues:v,dateRange:h,durationKnown:E}}}}class Im{constructor(e){this.hls=void 0,this.config=void 0,this.media=null,this.currentTime=0,this.stallCount=0,this._latency=null,this._targetLatencyUpdated=!1,this.onTimeupdate=()=>{const{media:t}=this,n=this.levelDetails;if(!t||!n)return;this.currentTime=t.currentTime;const i=this.computeLatency();if(i===null)return;this._latency=i;const{lowLatencyMode:r,maxLiveSyncPlaybackRate:s}=this.config;if(!r||s===1||!n.live)return;const o=this.targetLatency;if(o===null)return;const d=i-o,l=Math.min(this.maxLatency,o+n.targetduration);if(d<l&&d>.05&&this.forwardBufferLength>1){const u=Math.min(2,Math.max(1,s)),h=Math.round(2/(1+Math.exp(-.75*d-this.edgeStalled))*20)/20,m=Math.min(u,Math.max(1,h));this.changeMediaPlaybackRate(t,m)}else t.playbackRate!==1&&t.playbackRate!==0&&this.changeMediaPlaybackRate(t,1)},this.hls=e,this.config=e.config,this.registerListeners()}get levelDetails(){var e;return((e=this.hls)==null?void 0:e.latestLevelDetails)||null}get latency(){return this._latency||0}get maxLatency(){const{config:e}=this;if(e.liveMaxLatencyDuration!==void 0)return e.liveMaxLatencyDuration;const t=this.levelDetails;return t?e.liveMaxLatencyDurationCount*t.targetduration:0}get targetLatency(){const e=this.levelDetails;if(e===null||this.hls===null)return null;const{holdBack:t,partHoldBack:n,targetduration:i}=e,{liveSyncDuration:r,liveSyncDurationCount:s,lowLatencyMode:o}=this.config,d=this.hls.userConfig;let l=o&&n||t;(this._targetLatencyUpdated||d.liveSyncDuration||d.liveSyncDurationCount||l===0)&&(l=r!==void 0?r:s*i);const c=i;return l+Math.min(this.stallCount*this.config.liveSyncOnStallIncrease,c)}set targetLatency(e){this.stallCount=0,this.config.liveSyncDuration=e,this._targetLatencyUpdated=!0}get liveSyncPosition(){const e=this.estimateLiveEdge(),t=this.targetLatency;if(e===null||t===null)return null;const n=this.levelDetails;if(n===null)return null;const i=n.edge,r=e-t-this.edgeStalled,s=i-n.totalduration,o=i-(this.config.lowLatencyMode&&n.partTarget||n.targetduration);return Math.min(Math.max(s,r),o)}get drift(){const e=this.levelDetails;return e===null?1:e.drift}get edgeStalled(){const e=this.levelDetails;if(e===null)return 0;const t=(this.config.lowLatencyMode&&e.partTarget||e.targetduration)*3;return Math.max(e.age-t,0)}get forwardBufferLength(){const{media:e}=this,t=this.levelDetails;if(!e||!t)return 0;const n=e.buffered.length;return(n?e.buffered.end(n-1):t.edge)-this.currentTime}destroy(){this.unregisterListeners(),this.onMediaDetaching(),this.hls=null}registerListeners(){const{hls:e}=this;e&&(e.on(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.on(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.LEVEL_UPDATED,this.onLevelUpdated,this),e.on(x.ERROR,this.onError,this))}unregisterListeners(){const{hls:e}=this;e&&(e.off(x.MEDIA_ATTACHED,this.onMediaAttached,this),e.off(x.MEDIA_DETACHING,this.onMediaDetaching,this),e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.LEVEL_UPDATED,this.onLevelUpdated,this),e.off(x.ERROR,this.onError,this))}onMediaAttached(e,t){this.media=t.media,this.media.addEventListener("timeupdate",this.onTimeupdate)}onMediaDetaching(){this.media&&(this.media.removeEventListener("timeupdate",this.onTimeupdate),this.media=null)}onManifestLoading(){this._latency=null,this.stallCount=0}onLevelUpdated(e,{details:t}){t.advanced&&this.onTimeupdate(),!t.live&&this.media&&this.media.removeEventListener("timeupdate",this.onTimeupdate)}onError(e,t){var n;t.details===F.BUFFER_STALLED_ERROR&&(this.stallCount++,this.hls&&(n=this.levelDetails)!=null&&n.live&&this.hls.logger.warn("[latency-controller]: Stall detected, adjusting target latency"))}changeMediaPlaybackRate(e,t){var n,i;e.playbackRate!==t&&((n=this.hls)==null||n.logger.debug(`[latency-controller]: latency=${this.latency.toFixed(3)}, targetLatency=${(i=this.targetLatency)==null?void 0:i.toFixed(3)}, forwardBufferLength=${this.forwardBufferLength.toFixed(3)}: adjusting playback rate from ${e.playbackRate} to ${t}`),e.playbackRate=t)}estimateLiveEdge(){const e=this.levelDetails;return e===null?null:e.edge+e.age}computeLatency(){const e=this.estimateLiveEdge();return e===null?null:e-this.currentTime}}class km extends ls{constructor(e,t){super(e,"level-controller"),this._levels=[],this._firstLevel=-1,this._maxAutoLevel=-1,this._startLevel=void 0,this.currentLevel=null,this.currentLevelIndex=-1,this.manualLevelIndex=-1,this.steering=void 0,this.onParsedComplete=void 0,this.steering=t,this._registerListeners()}_registerListeners(){const{hls:e}=this;e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.MANIFEST_LOADED,this.onManifestLoaded,this),e.on(x.LEVEL_LOADED,this.onLevelLoaded,this),e.on(x.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(x.FRAG_BUFFERED,this.onFragBuffered,this),e.on(x.ERROR,this.onError,this)}_unregisterListeners(){const{hls:e}=this;e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.MANIFEST_LOADED,this.onManifestLoaded,this),e.off(x.LEVEL_LOADED,this.onLevelLoaded,this),e.off(x.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(x.FRAG_BUFFERED,this.onFragBuffered,this),e.off(x.ERROR,this.onError,this)}destroy(){this._unregisterListeners(),this.steering=null,this.resetLevels(),super.destroy()}stopLoad(){this._levels.forEach(t=>{t.loadError=0,t.fragmentError=0}),super.stopLoad()}resetLevels(){this._startLevel=void 0,this.manualLevelIndex=-1,this.currentLevelIndex=-1,this.currentLevel=null,this._levels=[],this._maxAutoLevel=-1}onManifestLoading(e,t){this.resetLevels()}onManifestLoaded(e,t){const n=this.hls.config.preferManagedMediaSource,i=[],r={},s={};let o=!1,d=!1,l=!1;t.levels.forEach(c=>{const u=c.attrs;let{audioCodec:h,videoCodec:m}=c;h&&(c.audioCodec=h=Ri(h,n)||void 0),m&&(m=c.videoCodec=Tu(m));const{width:g,height:v,unknownCodecs:E}=c;let C=E?E.length:0;if(E)for(let D=C;D--;){const V=E[D];this.isAudioSupported(V)?(c.audioCodec=h=h?`${h},${V}`:V,C--,nn.audio[h.substring(0,4)]=2):this.isVideoSupported(V)&&(c.videoCodec=m=m?`${m},${V}`:V,C--,nn.video[m.substring(0,4)]=2)}if(o||(o=!!(g&&v)),d||(d=!!m),l||(l=!!h),C||h&&!this.isAudioSupported(h)||m&&!this.isVideoSupported(m)){this.log(`Some or all CODECS not supported "${u.CODECS}"`);return}const{CODECS:I,"FRAME-RATE":L,"HDCP-LEVEL":R,"PATHWAY-ID":_,RESOLUTION:N,"VIDEO-RANGE":P}=u,U=`${`${_||"."}-`}${c.bitrate}-${N}-${L}-${I}-${P}-${R}`;if(r[U])if(r[U].uri!==c.url&&!c.attrs["PATHWAY-ID"]){const D=s[U]+=1;c.attrs["PATHWAY-ID"]=new Array(D+1).join(".");const V=this.createLevel(c);r[U]=V,i.push(V)}else r[U].addGroupId("audio",u.AUDIO),r[U].addGroupId("text",u.SUBTITLES);else{const D=this.createLevel(c);r[U]=D,s[U]=1,i.push(D)}}),this.filterAndSortMediaOptions(i,t,o,d,l)}createLevel(e){const t=new Gn(e),n=e.supplemental;if(n!=null&&n.videoCodec&&!this.isVideoSupported(n.videoCodec)){const i=new Error(`SUPPLEMENTAL-CODECS not supported "${n.videoCodec}"`);this.log(i.message),t.supportedResult=To(i,[])}return t}isAudioSupported(e){return Dr(e,"audio",this.hls.config.preferManagedMediaSource)}isVideoSupported(e){return Dr(e,"video",this.hls.config.preferManagedMediaSource)}filterAndSortMediaOptions(e,t,n,i,r){let s=[],o=[],d=e;if((n||i)&&r&&(d=d.filter(({videoCodec:E,videoRange:C,width:I,height:L})=>(!!E||!!(I&&L))&&wu(C))),d.length===0){Promise.resolve().then(()=>{if(this.hls){let E="no level with compatible codecs found in manifest",C=E;t.levels.length&&(C=`one or more CODECS in variant not supported: ${Ie(t.levels.map(L=>L.attrs.CODECS).filter((L,R,_)=>_.indexOf(L)===R))}`,this.warn(C),E+=` (${C})`);const I=new Error(E);this.hls.trigger(x.ERROR,{type:oe.MEDIA_ERROR,details:F.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:t.url,error:I,reason:C})}});return}t.audioTracks&&(s=t.audioTracks.filter(E=>!E.audioCodec||this.isAudioSupported(E.audioCodec)),ao(s)),t.subtitles&&(o=t.subtitles,ao(o));const l=d.slice(0);d.sort((E,C)=>{if(E.attrs["HDCP-LEVEL"]!==C.attrs["HDCP-LEVEL"])return(E.attrs["HDCP-LEVEL"]||"")>(C.attrs["HDCP-LEVEL"]||"")?1:-1;if(n&&E.height!==C.height)return E.height-C.height;if(E.frameRate!==C.frameRate)return E.frameRate-C.frameRate;if(E.videoRange!==C.videoRange)return Di.indexOf(E.videoRange)-Di.indexOf(C.videoRange);if(E.videoCodec!==C.videoCodec){const I=Js(E.videoCodec),L=Js(C.videoCodec);if(I!==L)return L-I}if(E.uri===C.uri&&E.codecSet!==C.codecSet){const I=wi(E.codecSet),L=wi(C.codecSet);if(I!==L)return L-I}return E.averageBitrate!==C.averageBitrate?E.averageBitrate-C.averageBitrate:0});let c=l[0];if(this.steering&&(d=this.steering.filterParsedLevels(d),d.length!==l.length)){for(let E=0;E<l.length;E++)if(l[E].pathwayId===d[0].pathwayId){c=l[E];break}}this._levels=d;for(let E=0;E<d.length;E++)if(d[E]===c){var u;this._firstLevel=E;const C=c.bitrate,I=this.hls.bandwidthEstimate;if(this.log(`manifest loaded, ${d.length} level(s) found, first bitrate: ${C}`),((u=this.hls.userConfig)==null?void 0:u.abrEwmaDefaultEstimate)===void 0){const L=Math.min(C,this.hls.config.abrEwmaDefaultEstimateMax);L>I&&I===this.hls.abrEwmaDefaultEstimate&&(this.hls.bandwidthEstimate=L)}break}const h=r&&!i,m=this.hls.config,g=!!(m.audioStreamController&&m.audioTrackController),v={levels:d,audioTracks:s,subtitleTracks:o,sessionData:t.sessionData,sessionKeys:t.sessionKeys,firstLevel:this._firstLevel,stats:t.stats,audio:r,video:i,altAudio:g&&!h&&s.some(E=>!!E.url)};this.hls.trigger(x.MANIFEST_PARSED,v)}get levels(){return this._levels.length===0?null:this._levels}get loadLevelObj(){return this.currentLevel}get level(){return this.currentLevelIndex}set level(e){const t=this._levels;if(t.length===0)return;if(e<0||e>=t.length){const c=new Error("invalid level idx"),u=e<0;if(this.hls.trigger(x.ERROR,{type:oe.OTHER_ERROR,details:F.LEVEL_SWITCH_ERROR,level:e,fatal:u,error:c,reason:c.message}),u)return;e=Math.min(e,t.length-1)}const n=this.currentLevelIndex,i=this.currentLevel,r=i?i.attrs["PATHWAY-ID"]:void 0,s=t[e],o=s.attrs["PATHWAY-ID"];if(this.currentLevelIndex=e,this.currentLevel=s,n===e&&i&&r===o)return;this.log(`Switching to level ${e} (${s.height?s.height+"p ":""}${s.videoRange?s.videoRange+" ":""}${s.codecSet?s.codecSet+" ":""}@${s.bitrate})${o?" with Pathway "+o:""} from level ${n}${r?" with Pathway "+r:""}`);const d={level:e,attrs:s.attrs,details:s.details,bitrate:s.bitrate,averageBitrate:s.averageBitrate,maxBitrate:s.maxBitrate,realBitrate:s.realBitrate,width:s.width,height:s.height,codecSet:s.codecSet,audioCodec:s.audioCodec,videoCodec:s.videoCodec,audioGroups:s.audioGroups,subtitleGroups:s.subtitleGroups,loaded:s.loaded,loadError:s.loadError,fragmentError:s.fragmentError,name:s.name,id:s.id,uri:s.uri,url:s.url,urlId:0,audioGroupIds:s.audioGroupIds,textGroupIds:s.textGroupIds};this.hls.trigger(x.LEVEL_SWITCHING,d);const l=s.details;if(!l||l.live){const c=this.switchParams(s.uri,i==null?void 0:i.details,l);this.loadPlaylist(c)}}get manualLevel(){return this.manualLevelIndex}set manualLevel(e){this.manualLevelIndex=e,this._startLevel===void 0&&(this._startLevel=e),e!==-1&&(this.level=e)}get firstLevel(){return this._firstLevel}set firstLevel(e){this._firstLevel=e}get startLevel(){if(this._startLevel===void 0){const e=this.hls.config.startLevel;return e!==void 0?e:this.hls.firstAutoLevel}return this._startLevel}set startLevel(e){this._startLevel=e}get pathways(){return this.steering?this.steering.pathways():[]}get pathwayPriority(){return this.steering?this.steering.pathwayPriority:null}set pathwayPriority(e){if(this.steering){const t=this.steering.pathways(),n=e.filter(i=>t.indexOf(i)!==-1);if(e.length<1){this.warn(`pathwayPriority ${e} should contain at least one pathway from list: ${t}`);return}this.steering.pathwayPriority=n}}onError(e,t){t.fatal||!t.context||t.context.type===me.LEVEL&&t.context.level===this.level&&this.checkRetry(t)}onFragBuffered(e,{frag:t}){if(t!==void 0&&t.type===re.MAIN){const n=t.elementaryStreams;if(!Object.keys(n).some(r=>!!n[r]))return;const i=this._levels[t.level];i!=null&&i.loadError&&(this.log(`Resetting level error count of ${i.loadError} on frag buffered`),i.loadError=0)}}onLevelLoaded(e,t){var n;const{level:i,details:r}=t,s=t.levelInfo;if(!s){var o;this.warn(`Invalid level index ${i}`),(o=t.deliveryDirectives)!=null&&o.skip&&(r.deltaUpdateFailed=!0);return}if(s===this.currentLevel||t.withoutMultiVariant){s.fragmentError===0&&(s.loadError=0);let d=s.details;d===t.details&&d.advanced&&(d=void 0),this.playlistLoaded(i,t,d)}else(n=t.deliveryDirectives)!=null&&n.skip&&(r.deltaUpdateFailed=!0)}loadPlaylist(e){super.loadPlaylist(),this.shouldLoadPlaylist(this.currentLevel)&&this.scheduleLoading(this.currentLevel,e)}loadingPlaylist(e,t){super.loadingPlaylist(e,t);const n=this.getUrlWithDirectives(e.uri,t),i=this.currentLevelIndex,r=e.attrs["PATHWAY-ID"],s=e.details,o=s==null?void 0:s.age;this.log(`Loading level index ${i}${(t==null?void 0:t.msn)!==void 0?" at sn "+t.msn+" part "+t.part:""}${r?" Pathway "+r:""}${o&&s.live?" age "+o.toFixed(1)+(s.type&&" "+s.type||""):""} ${n}`),this.hls.trigger(x.LEVEL_LOADING,{url:n,level:i,levelInfo:e,pathwayId:e.attrs["PATHWAY-ID"],id:0,deliveryDirectives:t||null})}get nextLoadLevel(){return this.manualLevelIndex!==-1?this.manualLevelIndex:this.hls.nextAutoLevel}set nextLoadLevel(e){this.level=e,this.manualLevelIndex===-1&&(this.hls.nextAutoLevel=e)}removeLevel(e){var t;if(this._levels.length===1)return;const n=this._levels.filter((r,s)=>s!==e?!0:(this.steering&&this.steering.removeLevel(r),r===this.currentLevel&&(this.currentLevel=null,this.currentLevelIndex=-1,r.details&&r.details.fragments.forEach(o=>o.level=-1)),!1));$o(n),this._levels=n,this.currentLevelIndex>-1&&(t=this.currentLevel)!=null&&t.details&&(this.currentLevelIndex=this.currentLevel.details.fragments[0].level),this.manualLevelIndex>-1&&(this.manualLevelIndex=this.currentLevelIndex);const i=n.length-1;this._firstLevel=Math.min(this._firstLevel,i),this._startLevel&&(this._startLevel=Math.min(this._startLevel,i)),this.hls.trigger(x.LEVELS_UPDATED,{levels:n})}onLevelsUpdated(e,{levels:t}){this._levels=t}checkMaxAutoUpdated(){const{autoLevelCapping:e,maxAutoLevel:t,maxHdcpLevel:n}=this.hls;this._maxAutoLevel!==t&&(this._maxAutoLevel=t,this.hls.trigger(x.MAX_AUTO_LEVEL_UPDATED,{autoLevelCapping:e,levels:this.levels,maxAutoLevel:t,minAutoLevel:this.hls.minAutoLevel,maxHdcpLevel:n}))}}function ao(a){const e={};a.forEach(t=>{const n=t.groupId||"";t.id=e[n]=e[n]||0,e[n]++})}function Rl(){return self.SourceBuffer||self.WebKitSourceBuffer}function Dl(){if(!Rt())return!1;const e=Rl();return!e||e.prototype&&typeof e.prototype.appendBuffer=="function"&&typeof e.prototype.remove=="function"}function wm(){if(!Dl())return!1;const a=Rt();return typeof(a==null?void 0:a.isTypeSupported)=="function"&&(["avc1.42E01E,mp4a.40.2","av01.0.01M.08","vp09.00.50.08"].some(e=>a.isTypeSupported($n(e,"video")))||["mp4a.40.2","fLaC"].some(e=>a.isTypeSupported($n(e,"audio"))))}function Rm(){var a;const e=Rl();return typeof(e==null||(a=e.prototype)==null?void 0:a.changeType)=="function"}const Dm=100;class _m extends es{constructor(e,t,n){super(e,t,n,"stream-controller",re.MAIN),this.audioCodecSwap=!1,this.level=-1,this._forceStartLoad=!1,this._hasEnoughToStart=!1,this.altAudio=0,this.audioOnly=!1,this.fragPlaying=null,this.fragLastKbps=0,this.couldBacktrack=!1,this.backtrackFragment=null,this.audioCodecSwitch=!1,this.videoBuffer=null,this.onMediaPlaying=()=>{this.tick()},this.onMediaSeeked=()=>{const i=this.media,r=i?i.currentTime:null;if(r===null||!Z(r)||(this.log(`Media seeked to ${r.toFixed(3)}`),!this.getBufferedFrag(r)))return;const s=this.getFwdBufferInfoAtPos(i,r,re.MAIN,0);if(s===null||s.len===0){this.warn(`Main forward buffer length at ${r} on "seeked" event ${s?s.len:"empty"})`);return}this.tick()},this.registerListeners()}registerListeners(){super.registerListeners();const{hls:e}=this;e.on(x.MANIFEST_PARSED,this.onManifestParsed,this),e.on(x.LEVEL_LOADING,this.onLevelLoading,this),e.on(x.LEVEL_LOADED,this.onLevelLoaded,this),e.on(x.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),e.on(x.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.on(x.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),e.on(x.BUFFER_CREATED,this.onBufferCreated,this),e.on(x.BUFFER_FLUSHED,this.onBufferFlushed,this),e.on(x.LEVELS_UPDATED,this.onLevelsUpdated,this),e.on(x.FRAG_BUFFERED,this.onFragBuffered,this)}unregisterListeners(){super.unregisterListeners();const{hls:e}=this;e.off(x.MANIFEST_PARSED,this.onManifestParsed,this),e.off(x.LEVEL_LOADED,this.onLevelLoaded,this),e.off(x.FRAG_LOAD_EMERGENCY_ABORTED,this.onFragLoadEmergencyAborted,this),e.off(x.AUDIO_TRACK_SWITCHING,this.onAudioTrackSwitching,this),e.off(x.AUDIO_TRACK_SWITCHED,this.onAudioTrackSwitched,this),e.off(x.BUFFER_CREATED,this.onBufferCreated,this),e.off(x.BUFFER_FLUSHED,this.onBufferFlushed,this),e.off(x.LEVELS_UPDATED,this.onLevelsUpdated,this),e.off(x.FRAG_BUFFERED,this.onFragBuffered,this)}onHandlerDestroying(){this.onMediaPlaying=this.onMediaSeeked=null,this.unregisterListeners(),super.onHandlerDestroying()}startLoad(e,t){if(this.levels){const{lastCurrentTime:n,hls:i}=this;if(this.stopLoad(),this.setInterval(Dm),this.level=-1,!this.startFragRequested){let r=i.startLevel;r===-1&&(i.config.testBandwidth&&this.levels.length>1?(r=0,this.bitrateTest=!0):r=i.firstAutoLevel),i.nextLoadLevel=r,this.level=i.loadLevel,this._hasEnoughToStart=!!t}n>0&&e===-1&&!t&&(this.log(`Override startPosition with lastCurrentTime @${n.toFixed(3)}`),e=n),this.state=K.IDLE,this.nextLoadPosition=this.lastCurrentTime=e+this.timelineOffset,this.startPosition=t?-1:e,this.tick()}else this._forceStartLoad=!0,this.state=K.STOPPED}stopLoad(){this._forceStartLoad=!1,super.stopLoad()}doTick(){switch(this.state){case K.WAITING_LEVEL:{const{levels:t,level:n}=this,i=t==null?void 0:t[n],r=i==null?void 0:i.details;if(r&&(!r.live||this.levelLastLoaded===i&&!this.waitForLive(i))){if(this.waitForCdnTuneIn(r))break;this.state=K.IDLE;break}else if(this.hls.nextLoadLevel!==this.level){this.state=K.IDLE;break}break}case K.FRAG_LOADING_WAITING_RETRY:{var e;const t=self.performance.now(),n=this.retryDate;if(!n||t>=n||(e=this.media)!=null&&e.seeking){const{levels:i,level:r}=this,s=i==null?void 0:i[r];this.resetStartWhenNotLoaded(s||null),this.state=K.IDLE}}break}this.state===K.IDLE&&this.doTickIdle(),this.onTickEnd()}onTickEnd(){var e;super.onTickEnd(),(e=this.media)!=null&&e.readyState&&this.media.seeking===!1&&(this.lastCurrentTime=this.media.currentTime),this.checkFragmentChanged()}doTickIdle(){const{hls:e,levelLastLoaded:t,levels:n,media:i}=this;if(t===null||!i&&!this.primaryPrefetch&&(this.startFragRequested||!e.config.startFragPrefetch)||this.altAudio&&this.audioOnly)return;const r=this.buffering?e.nextLoadLevel:e.loadLevel;if(!(n!=null&&n[r]))return;const s=n[r],o=this.getMainFwdBufferInfo();if(o===null)return;const d=this.getLevelDetails();if(d&&this._streamEnded(o,d)){const v={};this.altAudio===2&&(v.type="video"),this.hls.trigger(x.BUFFER_EOS,v),this.state=K.ENDED;return}if(!this.buffering)return;e.loadLevel!==r&&e.manualLevel===-1&&this.log(`Adapting to level ${r} from level ${this.level}`),this.level=e.nextLoadLevel=r;const l=s.details;if(!l||this.state===K.WAITING_LEVEL||this.waitForLive(s)){this.level=r,this.state=K.WAITING_LEVEL,this.startFragRequested=!1;return}const c=o.len,u=this.getMaxBufferLength(s.maxBitrate);if(c>=u)return;this.backtrackFragment&&this.backtrackFragment.start>o.end&&(this.backtrackFragment=null);const h=this.backtrackFragment?this.backtrackFragment.start:o.end;let m=this.getNextFragment(h,l);if(this.couldBacktrack&&!this.fragPrevious&&m&&Ne(m)&&this.fragmentTracker.getState(m)!==Oe.OK){var g;const E=((g=this.backtrackFragment)!=null?g:m).sn-l.startSN,C=l.fragments[E-1];C&&m.cc===C.cc&&(m=C,this.fragmentTracker.removeFragment(C))}else this.backtrackFragment&&o.len&&(this.backtrackFragment=null);if(m&&this.isLoopLoading(m,h)){if(!m.gap){const E=this.audioOnly&&!this.altAudio?Le.AUDIO:Le.VIDEO,C=(E===Le.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;C&&this.afterBufferFlushed(C,E,re.MAIN)}m=this.getNextFragmentLoopLoading(m,l,o,re.MAIN,u)}m&&(m.initSegment&&!m.initSegment.data&&!this.bitrateTest&&(m=m.initSegment),this.loadFragment(m,s,h))}loadFragment(e,t,n){const i=this.fragmentTracker.getState(e);i===Oe.NOT_LOADED||i===Oe.PARTIAL?Ne(e)?this.bitrateTest?(this.log(`Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`),this._loadBitrateTestFrag(e,t)):super.loadFragment(e,t,n):this._loadInitSegment(e,t):this.clearTrackerIfNeeded(e)}getBufferedFrag(e){return this.fragmentTracker.getBufferedFrag(e,re.MAIN)}followingBufferedFrag(e){return e?this.getBufferedFrag(e.end+.5):null}immediateLevelSwitch(){this.abortCurrentFrag(),this.flushMainBuffer(0,Number.POSITIVE_INFINITY)}nextLevelSwitch(){const{levels:e,media:t}=this;if(t!=null&&t.readyState){let n;const i=this.getAppendedFrag(t.currentTime);i&&i.start>1&&this.flushMainBuffer(0,i.start-1);const r=this.getLevelDetails();if(r!=null&&r.live){const o=this.getMainFwdBufferInfo();if(!o||o.len<r.targetduration*2)return}if(!t.paused&&e){const o=this.hls.nextLoadLevel,d=e[o],l=this.fragLastKbps;l&&this.fragCurrent?n=this.fragCurrent.duration*d.maxBitrate/(1e3*l)+1:n=0}else n=0;const s=this.getBufferedFrag(t.currentTime+n);if(s){const o=this.followingBufferedFrag(s);if(o){this.abortCurrentFrag();const d=o.maxStartPTS?o.maxStartPTS:o.start,l=o.duration,c=Math.max(s.end,d+Math.min(Math.max(l-this.config.maxFragLookUpTolerance,l*(this.couldBacktrack?.5:.125)),l*(this.couldBacktrack?.75:.25)));this.flushMainBuffer(c,Number.POSITIVE_INFINITY)}}}}abortCurrentFrag(){const e=this.fragCurrent;switch(this.fragCurrent=null,this.backtrackFragment=null,e&&(e.abortRequests(),this.fragmentTracker.removeFragment(e)),this.state){case K.KEY_LOADING:case K.FRAG_LOADING:case K.FRAG_LOADING_WAITING_RETRY:case K.PARSING:case K.PARSED:this.state=K.IDLE;break}this.nextLoadPosition=this.getLoadPosition()}flushMainBuffer(e,t){super.flushMainBuffer(e,t,this.altAudio===2?"video":null)}onMediaAttached(e,t){super.onMediaAttached(e,t);const n=t.media;je(n,"playing",this.onMediaPlaying),je(n,"seeked",this.onMediaSeeked)}onMediaDetaching(e,t){const{media:n}=this;n&&(Ze(n,"playing",this.onMediaPlaying),Ze(n,"seeked",this.onMediaSeeked)),this.videoBuffer=null,this.fragPlaying=null,super.onMediaDetaching(e,t),!t.transferMedia&&(this._hasEnoughToStart=!1)}onManifestLoading(){super.onManifestLoading(),this.log("Trigger BUFFER_RESET"),this.hls.trigger(x.BUFFER_RESET,void 0),this.couldBacktrack=!1,this.fragLastKbps=0,this.fragPlaying=this.backtrackFragment=null,this.altAudio=0,this.audioOnly=!1}onManifestParsed(e,t){let n=!1,i=!1;t.levels.forEach(r=>{const s=r.audioCodec;s&&(n=n||s.indexOf("mp4a.40.2")!==-1,i=i||s.indexOf("mp4a.40.5")!==-1)}),this.audioCodecSwitch=n&&i&&!Rm(),this.audioCodecSwitch&&this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=t.levels,this.startFragRequested=!1}onLevelLoading(e,t){const{levels:n}=this;if(!n||this.state!==K.IDLE)return;const i=t.levelInfo;(!i.details||i.details.live&&(this.levelLastLoaded!==i||i.details.expired)||this.waitForCdnTuneIn(i.details))&&(this.state=K.WAITING_LEVEL)}onLevelLoaded(e,t){var n;const{levels:i,startFragRequested:r}=this,s=t.level,o=t.details,d=o.totalduration;if(!i){this.warn(`Levels were reset while loading level ${s}`);return}this.log(`Level ${s} loaded [${o.startSN},${o.endSN}]${o.lastPartSn?`[part-${o.lastPartSn}-${o.lastPartIndex}]`:""}, cc [${o.startCC}, ${o.endCC}] duration:${d}`);const l=t.levelInfo,c=this.fragCurrent;c&&(this.state===K.FRAG_LOADING||this.state===K.FRAG_LOADING_WAITING_RETRY)&&c.level!==t.level&&c.loader&&this.abortCurrentFrag();let u=0;if(o.live||(n=l.details)!=null&&n.live){var h;if(this.checkLiveUpdate(o),o.deltaUpdateFailed)return;u=this.alignPlaylists(o,l.details,(h=this.levelLastLoaded)==null?void 0:h.details)}if(l.details=o,this.levelLastLoaded=l,r||this.setStartPosition(o,u),this.hls.trigger(x.LEVEL_UPDATED,{details:o,level:s}),this.state===K.WAITING_LEVEL){if(this.waitForCdnTuneIn(o))return;this.state=K.IDLE}r&&o.live&&this.synchronizeToLiveEdge(o),this.tick()}synchronizeToLiveEdge(e){const{config:t,media:n}=this;if(!n)return;const i=this.hls.liveSyncPosition,r=this.getLoadPosition(),s=e.fragmentStart,o=e.edge,d=r>=s-t.maxFragLookUpTolerance&&r<=o;if(i!==null&&n.duration>i&&(r<i||!d)){const c=t.liveMaxLatencyDuration!==void 0?t.liveMaxLatencyDuration:t.liveMaxLatencyDurationCount*e.targetduration;if((!d&&n.readyState<4||r<o-c)&&(this._hasEnoughToStart||(this.nextLoadPosition=i),n.readyState))if(this.warn(`Playback: ${r.toFixed(3)} is located too far from the end of live sliding playlist: ${o}, reset currentTime to : ${i.toFixed(3)}`),this.config.liveSyncMode==="buffered"){var l;const u=he.bufferInfo(n,i,0);if(!(u!=null&&(l=u.buffered)!=null&&l.length)){n.currentTime=i;return}if(u.start<=r){n.currentTime=i;return}const{nextStart:m}=he.bufferedInfo(u.buffered,r,0);m&&(n.currentTime=m)}else n.currentTime=i}}_handleFragmentLoadProgress(e){var t;const n=e.frag,{part:i,payload:r}=e,{levels:s}=this;if(!s){this.warn(`Levels were reset while fragment load was in progress. Fragment ${n.sn} of level ${n.level} will not be buffered`);return}const o=s[n.level];if(!o){this.warn(`Level ${n.level} not found on progress`);return}const d=o.details;if(!d){this.warn(`Dropping fragment ${n.sn} of level ${n.level} after level details were reset`),this.fragmentTracker.removeFragment(n);return}const l=o.videoCodec,c=d.PTSKnown||!d.live,u=(t=n.initSegment)==null?void 0:t.data,h=this._getAudioCodec(o),m=this.transmuxer=this.transmuxer||new ll(this.hls,re.MAIN,this._handleTransmuxComplete.bind(this),this._handleTransmuxerFlush.bind(this)),g=i?i.index:-1,v=g!==-1,E=new Xr(n.level,n.sn,n.stats.chunkCount,r.byteLength,g,v),C=this.initPTS[n.cc];m.push(r,u,h,l,n,i,d.totalduration,c,E,C)}onAudioTrackSwitching(e,t){const n=this.hls,i=this.altAudio===2;if(_i(t.url,n))this.altAudio=1;else{if(this.mediaBuffer!==this.media){this.log("Switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;const s=this.fragCurrent;s&&(this.log("Switching to main audio track, cancel main fragment load"),s.abortRequests(),this.fragmentTracker.removeFragment(s)),this.resetTransmuxer(),this.resetLoadingState()}else this.audioOnly&&this.resetTransmuxer();if(i){this.fragmentTracker.removeAllFragments(),n.once(x.BUFFER_FLUSHED,()=>{var s;(s=this.hls)==null||s.trigger(x.AUDIO_TRACK_SWITCHED,t)}),n.trigger(x.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:null});return}n.trigger(x.AUDIO_TRACK_SWITCHED,t)}}onAudioTrackSwitched(e,t){const n=_i(t.url,this.hls);if(n){const i=this.videoBuffer;i&&this.mediaBuffer!==i&&(this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=i)}this.altAudio=n?2:0,this.tick()}onBufferCreated(e,t){const n=t.tracks;let i,r,s=!1;for(const o in n){const d=n[o];if(d.id==="main"){if(r=o,i=d,o==="video"){const l=n[o];l&&(this.videoBuffer=l.buffer)}}else s=!0}s&&i?(this.log(`Alternate track found, use ${r}.buffered to schedule main fragment loading`),this.mediaBuffer=i.buffer):this.mediaBuffer=this.media}onFragBuffered(e,t){const{frag:n,part:i}=t,r=n.type===re.MAIN;if(r){if(this.fragContextChanged(n)){this.warn(`Fragment ${n.sn}${i?" p: "+i.index:""} of level ${n.level} finished buffering, but was aborted. state: ${this.state}`),this.state===K.PARSED&&(this.state=K.IDLE);return}const o=i?i.stats:n.stats;this.fragLastKbps=Math.round(8*o.total/(o.buffering.end-o.loading.first)),Ne(n)&&(this.fragPrevious=n),this.fragBufferedComplete(n,i)}const s=this.media;s&&(!this._hasEnoughToStart&&he.getBuffered(s).length&&(this._hasEnoughToStart=!0,this.seekToStartPos()),r&&this.tick())}get hasEnoughToStart(){return this._hasEnoughToStart}onError(e,t){var n;if(t.fatal){this.state=K.ERROR;return}switch(t.details){case F.FRAG_GAP:case F.FRAG_PARSING_ERROR:case F.FRAG_DECRYPT_ERROR:case F.FRAG_LOAD_ERROR:case F.FRAG_LOAD_TIMEOUT:case F.KEY_LOAD_ERROR:case F.KEY_LOAD_TIMEOUT:this.onFragmentOrKeyLoadError(re.MAIN,t);break;case F.LEVEL_LOAD_ERROR:case F.LEVEL_LOAD_TIMEOUT:case F.LEVEL_PARSING_ERROR:!t.levelRetry&&this.state===K.WAITING_LEVEL&&((n=t.context)==null?void 0:n.type)===me.LEVEL&&(this.state=K.IDLE);break;case F.BUFFER_ADD_CODEC_ERROR:case F.BUFFER_APPEND_ERROR:if(t.parent!=="main")return;this.resetLoadingState();break;case F.BUFFER_FULL_ERROR:if(t.parent!=="main")return;this.reduceLengthAndFlushBuffer(t)&&this.flushMainBuffer(0,Number.POSITIVE_INFINITY);break;case F.INTERNAL_EXCEPTION:this.recoverWorkerError(t);break}}onFragLoadEmergencyAborted(){this.state=K.IDLE,this._hasEnoughToStart||(this.startFragRequested=!1,this.nextLoadPosition=this.lastCurrentTime),this.tickImmediate()}onBufferFlushed(e,{type:t}){if(t!==Le.AUDIO||!this.altAudio){const n=(t===Le.VIDEO?this.videoBuffer:this.mediaBuffer)||this.media;n&&(this.afterBufferFlushed(n,t,re.MAIN),this.tick())}}onLevelsUpdated(e,t){this.level>-1&&this.fragCurrent&&(this.level=this.fragCurrent.level,this.level===-1&&this.resetWhenMissingContext(this.fragCurrent)),this.levels=t.levels}swapAudioCodec(){this.audioCodecSwap=!this.audioCodecSwap}seekToStartPos(){const{media:e}=this;if(!e)return;const t=e.currentTime;let n=this.startPosition;if(n>=0&&t<n){if(e.seeking){this.log(`could not seek to ${n}, already seeking at ${t}`);return}const i=this.timelineOffset;i&&n&&(n+=i);const r=this.getLevelDetails(),s=he.getBuffered(e),o=s.length?s.start(0):0,d=o-n,l=Math.max(this.config.maxBufferHole,this.config.maxFragLookUpTolerance);(this.config.startOnSegmentBoundary||d>0&&(d<l||this.loadingParts&&d<2*((r==null?void 0:r.partTarget)||0)))&&(this.log(`adjusting start position by ${d} to match buffer start`),n+=d,this.startPosition=n),t<n&&(this.log(`seek to target start position ${n} from current time ${t} buffer start ${o}`),e.currentTime=n)}}_getAudioCodec(e){let t=this.config.defaultAudioCodec||e.audioCodec;return this.audioCodecSwap&&t&&(this.log("Swapping audio codec"),t.indexOf("mp4a.40.5")!==-1?t="mp4a.40.2":t="mp4a.40.5"),t}_loadBitrateTestFrag(e,t){e.bitrateTest=!0,this._doFragLoad(e,t).then(n=>{const{hls:i}=this,r=n==null?void 0:n.frag;if(!r||this.fragContextChanged(r))return;t.fragmentError=0,this.state=K.IDLE,this.startFragRequested=!1,this.bitrateTest=!1;const s=r.stats;s.parsing.start=s.parsing.end=s.buffering.start=s.buffering.end=self.performance.now(),i.trigger(x.FRAG_LOADED,n),r.bitrateTest=!1})}_handleTransmuxComplete(e){var t;const n=this.playlistType,{hls:i}=this,{remuxResult:r,chunkMeta:s}=e,o=this.getCurrentContext(s);if(!o){this.resetWhenMissingContext(s);return}const{frag:d,part:l,level:c}=o,{video:u,text:h,id3:m,initSegment:g}=r,{details:v}=c,E=this.altAudio?void 0:r.audio;if(this.fragContextChanged(d)){this.fragmentTracker.removeFragment(d);return}if(this.state=K.PARSING,g){if(g!=null&&g.tracks){const L=d.initSegment||d;this._bufferInitSegment(c,g.tracks,L,s),i.trigger(x.FRAG_PARSING_INIT_SEGMENT,{frag:L,id:n,tracks:g.tracks})}const C=g.initPTS,I=g.timescale;Z(C)&&(this.initPTS[d.cc]={baseTime:C,timescale:I},i.trigger(x.INIT_PTS_FOUND,{frag:d,id:n,initPTS:C,timescale:I}))}if(u&&v){E&&u.type==="audiovideo"&&this.logMuxedErr(d);const C=v.fragments[d.sn-1-v.startSN],I=d.sn===v.startSN,L=!C||d.cc>C.cc;if(r.independent!==!1){const{startPTS:R,endPTS:_,startDTS:N,endDTS:P}=u;if(l)l.elementaryStreams[u.type]={startPTS:R,endPTS:_,startDTS:N,endDTS:P};else if(u.firstKeyFrame&&u.independent&&s.id===1&&!L&&(this.couldBacktrack=!0),u.dropped&&u.independent){const O=this.getMainFwdBufferInfo(),U=(O?O.end:this.getLoadPosition())+this.config.maxBufferHole,D=u.firstKeyFramePTS?u.firstKeyFramePTS:R;if(!I&&U<D-this.config.maxBufferHole&&!L){this.backtrack(d);return}else L&&(d.gap=!0);d.setElementaryStreamInfo(u.type,d.start,_,d.start,P,!0)}else I&&R-(v.appliedTimelineOffset||0)>Ii&&(d.gap=!0);d.setElementaryStreamInfo(u.type,R,_,N,P),this.backtrackFragment&&(this.backtrackFragment=d),this.bufferFragmentData(u,d,l,s,I||L)}else if(I||L)d.gap=!0;else{this.backtrack(d);return}}if(E){const{startPTS:C,endPTS:I,startDTS:L,endDTS:R}=E;l&&(l.elementaryStreams[Le.AUDIO]={startPTS:C,endPTS:I,startDTS:L,endDTS:R}),d.setElementaryStreamInfo(Le.AUDIO,C,I,L,R),this.bufferFragmentData(E,d,l,s)}if(v&&m!=null&&(t=m.samples)!=null&&t.length){const C={id:n,frag:d,details:v,samples:m.samples};i.trigger(x.FRAG_PARSING_METADATA,C)}if(v&&h){const C={id:n,frag:d,details:v,samples:h.samples};i.trigger(x.FRAG_PARSING_USERDATA,C)}}logMuxedErr(e){this.warn(`${Ne(e)?"Media":"Init"} segment with muxed audiovideo where only video expected: ${e.url}`)}_bufferInitSegment(e,t,n,i){if(this.state!==K.PARSING)return;this.audioOnly=!!t.audio&&!t.video,this.altAudio&&!this.audioOnly&&(delete t.audio,t.audiovideo&&this.logMuxedErr(n));const{audio:r,video:s,audiovideo:o}=t;if(r){let l=bi(r.codec,e.audioCodec);l==="mp4a"&&(l="mp4a.40.5");const c=navigator.userAgent.toLowerCase();if(this.audioCodecSwitch){l&&(l.indexOf("mp4a.40.5")!==-1?l="mp4a.40.2":l="mp4a.40.5");const u=r.metadata;u&&"channelCount"in u&&(u.channelCount||1)!==1&&c.indexOf("firefox")===-1&&(l="mp4a.40.5")}l&&l.indexOf("mp4a.40.5")!==-1&&c.indexOf("android")!==-1&&r.container!=="audio/mpeg"&&(l="mp4a.40.2",this.log(`Android: force audio codec to ${l}`)),e.audioCodec&&e.audioCodec!==l&&this.log(`Swapping manifest audio codec "${e.audioCodec}" for "${l}"`),r.levelCodec=l,r.id=re.MAIN,this.log(`Init audio buffer, container:${r.container}, codecs[selected/level/parsed]=[${l||""}/${e.audioCodec||""}/${r.codec}]`),delete t.audiovideo}if(s){s.levelCodec=e.videoCodec,s.id=re.MAIN;const l=s.codec;if((l==null?void 0:l.length)===4)switch(l){case"hvc1":case"hev1":s.codec="hvc1.1.6.L120.90";break;case"av01":s.codec="av01.0.04M.08";break;case"avc1":s.codec="avc1.42e01e";break}this.log(`Init video buffer, container:${s.container}, codecs[level/parsed]=[${e.videoCodec||""}/${l}]${s.codec!==l?" parsed-corrected="+s.codec:""}${s.supplemental?" supplemental="+s.supplemental:""}`),delete t.audiovideo}o&&(this.log(`Init audiovideo buffer, container:${o.container}, codecs[level/parsed]=[${e.codecs}/${o.codec}]`),delete t.video,delete t.audio);const d=Object.keys(t);if(d.length){if(this.hls.trigger(x.BUFFER_CODECS,t),!this.hls)return;d.forEach(l=>{const u=t[l].initSegment;u!=null&&u.byteLength&&this.hls.trigger(x.BUFFER_APPENDING,{type:l,data:u,frag:n,part:null,chunkMeta:i,parent:n.type})})}this.tickImmediate()}getMainFwdBufferInfo(){const e=this.mediaBuffer&&this.altAudio===2?this.mediaBuffer:this.media;return this.getFwdBufferInfo(e,re.MAIN)}get maxBufferLength(){const{levels:e,level:t}=this,n=e==null?void 0:e[t];return n?this.getMaxBufferLength(n.maxBitrate):this.config.maxBufferLength}backtrack(e){this.couldBacktrack=!0,this.backtrackFragment=e,this.resetTransmuxer(),this.flushBufferGap(e),this.fragmentTracker.removeFragment(e),this.fragPrevious=null,this.nextLoadPosition=e.start,this.state=K.IDLE}checkFragmentChanged(){const e=this.media;let t=null;if(e&&e.readyState>1&&e.seeking===!1){const n=e.currentTime;if(he.isBuffered(e,n)?t=this.getAppendedFrag(n):he.isBuffered(e,n+.1)&&(t=this.getAppendedFrag(n+.1)),t){this.backtrackFragment=null;const i=this.fragPlaying,r=t.level;(!i||t.sn!==i.sn||i.level!==r)&&(this.fragPlaying=t,this.hls.trigger(x.FRAG_CHANGED,{frag:t}),(!i||i.level!==r)&&this.hls.trigger(x.LEVEL_SWITCHED,{level:r}))}}}get nextLevel(){const e=this.nextBufferedFrag;return e?e.level:-1}get currentFrag(){var e;if(this.fragPlaying)return this.fragPlaying;const t=((e=this.media)==null?void 0:e.currentTime)||this.lastCurrentTime;return Z(t)?this.getAppendedFrag(t):null}get currentProgramDateTime(){var e;const t=((e=this.media)==null?void 0:e.currentTime)||this.lastCurrentTime;if(Z(t)){const n=this.getLevelDetails(),i=this.currentFrag||(n?Nt(null,n.fragments,t):null);if(i){const r=i.programDateTime;if(r!==null){const s=r+(t-i.start)*1e3;return new Date(s)}}}return null}get currentLevel(){const e=this.currentFrag;return e?e.level:-1}get nextBufferedFrag(){const e=this.currentFrag;return e?this.followingBufferedFrag(e):null}get forceStartLoad(){return this._forceStartLoad}}class Pm{constructor(e){this.config=void 0,this.keyUriToKeyInfo={},this.emeController=null,this.config=e}abort(e){for(const n in this.keyUriToKeyInfo){const i=this.keyUriToKeyInfo[n].loader;if(i){var t;if(e&&e!==((t=i.context)==null?void 0:t.frag.type))return;i.abort()}}}detach(){for(const e in this.keyUriToKeyInfo){const t=this.keyUriToKeyInfo[e];(t.mediaKeySessionContext||t.decryptdata.isCommonEncryption)&&delete this.keyUriToKeyInfo[e]}}destroy(){this.detach();for(const e in this.keyUriToKeyInfo){const t=this.keyUriToKeyInfo[e].loader;t&&t.destroy()}this.keyUriToKeyInfo={}}createKeyLoadError(e,t=F.KEY_LOAD_ERROR,n,i,r){return new yt({type:oe.NETWORK_ERROR,details:t,fatal:!1,frag:e,response:r,error:n,networkDetails:i})}loadClear(e,t){if(this.emeController&&this.config.emeEnabled&&!this.emeController.getSelectedKeySystemFormats().length){if(t.length){const{sn:n,cc:i}=e;for(let r=0;r<t.length;r++){const s=t[r];if(i<=s.cc&&(n==="initSegment"||s.sn==="initSegment"||n<s.sn))return this.emeController.selectKeySystemFormat(s).then(o=>{if(s.setKeyFormat(o),this.emeController&&this.config.requireKeySystemAccessOnStart){const d=xi(o);if(d)return this.emeController.getKeySystemAccess([d])}})}}else if(this.config.requireKeySystemAccessOnStart){const n=On(this.config);if(n.length)return this.emeController.getKeySystemAccess(n)}}return null}load(e){return!e.decryptdata&&e.encrypted&&this.emeController&&this.config.emeEnabled?this.emeController.selectKeySystemFormat(e).then(t=>this.loadInternal(e,t)):this.loadInternal(e)}loadInternal(e,t){var n,i;t&&e.setKeyFormat(t);const r=e.decryptdata;if(!r){const l=new Error(t?`Expected frag.decryptdata to be defined after setting format ${t}`:"Missing decryption data on fragment in onKeyLoading");return Promise.reject(this.createKeyLoadError(e,F.KEY_LOAD_ERROR,l))}const s=r.uri;if(!s)return Promise.reject(this.createKeyLoadError(e,F.KEY_LOAD_ERROR,new Error(`Invalid key URI: "${s}"`)));let o=this.keyUriToKeyInfo[s];if((n=o)!=null&&n.decryptdata.key)return r.key=o.decryptdata.key,Promise.resolve({frag:e,keyInfo:o});if((i=o)!=null&&i.keyLoadPromise){var d;switch((d=o.mediaKeySessionContext)==null?void 0:d.keyStatus){case void 0:case"status-pending":case"usable":case"usable-in-future":return o.keyLoadPromise.then(l=>(r.key=l.keyInfo.decryptdata.key,{frag:e,keyInfo:o}))}}switch(o=this.keyUriToKeyInfo[s]={decryptdata:r,keyLoadPromise:null,loader:null,mediaKeySessionContext:null},r.method){case"ISO-23001-7":case"SAMPLE-AES":case"SAMPLE-AES-CENC":case"SAMPLE-AES-CTR":return r.keyFormat==="identity"?this.loadKeyHTTP(o,e):this.loadKeyEME(o,e);case"AES-128":case"AES-256":case"AES-256-CTR":return this.loadKeyHTTP(o,e);default:return Promise.reject(this.createKeyLoadError(e,F.KEY_LOAD_ERROR,new Error(`Key supplied with unsupported METHOD: "${r.method}"`)))}}loadKeyEME(e,t){const n={frag:t,keyInfo:e};if(this.emeController&&this.config.emeEnabled){const i=this.emeController.loadKey(n);if(i)return(e.keyLoadPromise=i.then(r=>(e.mediaKeySessionContext=r,n))).catch(r=>{throw e.keyLoadPromise=null,r})}return Promise.resolve(n)}loadKeyHTTP(e,t){const n=this.config,i=n.loader,r=new i(n);return t.keyLoader=e.loader=r,e.keyLoadPromise=new Promise((s,o)=>{const d={keyInfo:e,frag:t,responseType:"arraybuffer",url:e.decryptdata.uri},l=n.keyLoadPolicy.default,c={loadPolicy:l,timeout:l.maxLoadTimeMs,maxRetry:0,retryDelay:0,maxRetryDelay:0},u={onSuccess:(h,m,g,v)=>{const{frag:E,keyInfo:C,url:I}=g;if(!E.decryptdata||C!==this.keyUriToKeyInfo[I])return o(this.createKeyLoadError(E,F.KEY_LOAD_ERROR,new Error("after key load, decryptdata unset or changed"),v));C.decryptdata.key=E.decryptdata.key=new Uint8Array(h.data),E.keyLoader=null,C.loader=null,s({frag:E,keyInfo:C})},onError:(h,m,g,v)=>{this.resetLoader(m),o(this.createKeyLoadError(t,F.KEY_LOAD_ERROR,new Error(`HTTP Error ${h.code} loading key ${h.text}`),g,Ee({url:d.url,data:void 0},h)))},onTimeout:(h,m,g)=>{this.resetLoader(m),o(this.createKeyLoadError(t,F.KEY_LOAD_TIMEOUT,new Error("key loading timed out"),g))},onAbort:(h,m,g)=>{this.resetLoader(m),o(this.createKeyLoadError(t,F.INTERNAL_ABORTED,new Error("key loading aborted"),g))}};r.load(d,c,u)})}resetLoader(e){const{frag:t,keyInfo:n,url:i}=e,r=n.loader;t.keyLoader===r&&(t.keyLoader=null,n.loader=null),delete this.keyUriToKeyInfo[i],r&&r.destroy()}}function oo(a){const{type:e}=a;switch(e){case me.AUDIO_TRACK:return re.AUDIO;case me.SUBTITLE_TRACK:return re.SUBTITLE;default:return re.MAIN}}function Ir(a,e){let t=a.url;return(t===void 0||t.indexOf("data:")===0)&&(t=e.url),t}class Bm{constructor(e){this.hls=void 0,this.loaders=Object.create(null),this.variableList=null,this.onManifestLoaded=this.checkAutostartLoad,this.hls=e,this.registerListeners()}startLoad(e){}stopLoad(){this.destroyInternalLoaders()}registerListeners(){const{hls:e}=this;e.on(x.MANIFEST_LOADING,this.onManifestLoading,this),e.on(x.LEVEL_LOADING,this.onLevelLoading,this),e.on(x.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),e.on(x.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this),e.on(x.LEVELS_UPDATED,this.onLevelsUpdated,this)}unregisterListeners(){const{hls:e}=this;e.off(x.MANIFEST_LOADING,this.onManifestLoading,this),e.off(x.LEVEL_LOADING,this.onLevelLoading,this),e.off(x.AUDIO_TRACK_LOADING,this.onAudioTrackLoading,this),e.off(x.SUBTITLE_TRACK_LOADING,this.onSubtitleTrackLoading,this),e.off(x.LEVELS_UPDATED,this.onLevelsUpdated,this)}createInternalLoader(e){const t=this.hls.config,n=t.pLoader,i=t.loader,r=n||i,s=new r(t);return this.loaders[e.type]=s,s}getInternalLoader(e){return this.loaders[e.type]}resetInternalLoader(e){this.loaders[e]&&delete this.loaders[e]}destroyInternalLoaders(){for(const e in this.loaders){const t=this.loaders[e];t&&t.destroy(),this.resetInternalLoader(e)}}destroy(){this.variableList=null,this.unregisterListeners(),this.destroyInternalLoaders()}onManifestLoading(e,t){const{url:n}=t;this.variableList=null,this.load({id:null,level:0,responseType:"text",type:me.MANIFEST,url:n,deliveryDirectives:null,levelOrTrack:null})}onLevelLoading(e,t){const{id:n,level:i,pathwayId:r,url:s,deliveryDirectives:o,levelInfo:d}=t;this.load({id:n,level:i,pathwayId:r,responseType:"text",type:me.LEVEL,url:s,deliveryDirectives:o,levelOrTrack:d})}onAudioTrackLoading(e,t){const{id:n,groupId:i,url:r,deliveryDirectives:s,track:o}=t;this.load({id:n,groupId:i,level:null,responseType:"text",type:me.AUDIO_TRACK,url:r,deliveryDirectives:s,levelOrTrack:o})}onSubtitleTrackLoading(e,t){const{id:n,groupId:i,url:r,deliveryDirectives:s,track:o}=t;this.load({id:n,groupId:i,level:null,responseType:"text",type:me.SUBTITLE_TRACK,url:r,deliveryDirectives:s,levelOrTrack:o})}onLevelsUpdated(e,t){const n=this.loaders[me.LEVEL];if(n){const i=n.context;i&&!t.levels.some(r=>r===i.levelOrTrack)&&(n.abort(),delete this.loaders[me.LEVEL])}}load(e){var t;const n=this.hls.config;let i=this.getInternalLoader(e);if(i){const l=this.hls.logger,c=i.context;if(c&&c.levelOrTrack===e.levelOrTrack&&(c.url===e.url||c.deliveryDirectives&&!e.deliveryDirectives)){c.url===e.url?l.log(`[playlist-loader]: ignore ${e.url} ongoing request`):l.log(`[playlist-loader]: ignore ${e.url} in favor of ${c.url}`);return}l.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`),i.abort()}let r;if(e.type===me.MANIFEST?r=n.manifestLoadPolicy.default:r=Se({},n.playlistLoadPolicy.default,{timeoutRetry:null,errorRetry:null}),i=this.createInternalLoader(e),Z((t=e.deliveryDirectives)==null?void 0:t.part)){let l;if(e.type===me.LEVEL&&e.level!==null?l=this.hls.levels[e.level].details:e.type===me.AUDIO_TRACK&&e.id!==null?l=this.hls.audioTracks[e.id].details:e.type===me.SUBTITLE_TRACK&&e.id!==null&&(l=this.hls.subtitleTracks[e.id].details),l){const c=l.partTarget,u=l.targetduration;if(c&&u){const h=Math.max(c*3,u*.8)*1e3;r=Se({},r,{maxTimeToFirstByteMs:Math.min(h,r.maxTimeToFirstByteMs),maxLoadTimeMs:Math.min(h,r.maxTimeToFirstByteMs)})}}}const s=r.errorRetry||r.timeoutRetry||{},o={loadPolicy:r,timeout:r.maxLoadTimeMs,maxRetry:s.maxNumRetry||0,retryDelay:s.retryDelayMs||0,maxRetryDelay:s.maxRetryDelayMs||0},d={onSuccess:(l,c,u,h)=>{const m=this.getInternalLoader(u);this.resetInternalLoader(u.type);const g=l.data;if(g.indexOf("#EXTM3U")!==0){this.handleManifestParsingError(l,u,new Error("no EXTM3U delimiter"),h||null,c);return}c.parsing.start=performance.now(),ct.isMediaPlaylist(g)||u.type!==me.MANIFEST?this.handleTrackOrLevelPlaylist(l,c,u,h||null,m):this.handleMasterPlaylist(l,c,u,h)},onError:(l,c,u,h)=>{this.handleNetworkError(c,u,!1,l,h)},onTimeout:(l,c,u)=>{this.handleNetworkError(c,u,!0,void 0,l)}};i.load(e,o,d)}checkAutostartLoad(){if(!this.hls)return;const{config:{autoStartLoad:e,startPosition:t},forceStartLoad:n}=this.hls;(e||n)&&(this.hls.logger.log(`${e?"auto":"force"} startLoad with configured startPosition ${t}`),this.hls.startLoad(t))}handleMasterPlaylist(e,t,n,i){const r=this.hls,s=e.data,o=Ir(e,n),d=ct.parseMasterPlaylist(s,o);if(d.playlistParsingError){this.handleManifestParsingError(e,n,d.playlistParsingError,i,t);return}const{contentSteering:l,levels:c,sessionData:u,sessionKeys:h,startTimeOffset:m,variableList:g}=d;this.variableList=g;const{AUDIO:v=[],SUBTITLES:E,"CLOSED-CAPTIONS":C}=ct.parseMasterPlaylistMedia(s,o,d);v.length&&!v.some(L=>!L.url)&&c[0].audioCodec&&!c[0].attrs.AUDIO&&(this.hls.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"),v.unshift({type:"main",name:"main",groupId:"main",default:!1,autoselect:!1,forced:!1,id:-1,attrs:new ke({}),bitrate:0,url:""})),r.trigger(x.MANIFEST_LOADED,{levels:c,audioTracks:v,subtitles:E,captions:C,contentSteering:l,url:o,stats:t,networkDetails:i,sessionData:u,sessionKeys:h,startTimeOffset:m,variableList:g})}handleTrackOrLevelPlaylist(e,t,n,i,r){const s=this.hls,{id:o,level:d,type:l}=n,c=Ir(e,n),u=Z(d)?d:Z(o)?o:0,h=oo(n),m=ct.parseLevelPlaylist(e.data,c,u,h,0,this.variableList);if(l===me.MANIFEST){const g={attrs:new ke({}),bitrate:0,details:m,name:"",url:c};m.requestScheduled=t.loading.start+Mo(m,0),s.trigger(x.MANIFEST_LOADED,{levels:[g],audioTracks:[],url:c,stats:t,networkDetails:i,sessionData:null,sessionKeys:null,contentSteering:null,startTimeOffset:null,variableList:null})}t.parsing.end=performance.now(),n.levelDetails=m,this.handlePlaylistLoaded(m,e,t,n,i,r)}handleManifestParsingError(e,t,n,i,r){this.hls.trigger(x.ERROR,{type:oe.NETWORK_ERROR,details:F.MANIFEST_PARSING_ERROR,fatal:t.type===me.MANIFEST,url:e.url,err:n,error:n,reason:n.message,response:e,context:t,networkDetails:i,stats:r})}handleNetworkError(e,t,n=!1,i,r){let s=`A network ${n?"timeout":"error"+(i?" (status "+i.code+")":"")} occurred while loading ${e.type}`;e.type===me.LEVEL?s+=`: ${e.level} id: ${e.id}`:(e.type===me.AUDIO_TRACK||e.type===me.SUBTITLE_TRACK)&&(s+=` id: ${e.id} group-id: "${e.groupId}"`);const o=new Error(s);this.hls.logger.warn(`[playlist-loader]: ${s}`);let d=F.UNKNOWN,l=!1;const c=this.getInternalLoader(e);switch(e.type){case me.MANIFEST:d=n?F.MANIFEST_LOAD_TIMEOUT:F.MANIFEST_LOAD_ERROR,l=!0;break;case me.LEVEL:d=n?F.LEVEL_LOAD_TIMEOUT:F.LEVEL_LOAD_ERROR,l=!1;break;case me.AUDIO_TRACK:d=n?F.AUDIO_TRACK_LOAD_TIMEOUT:F.AUDIO_TRACK_LOAD_ERROR,l=!1;break;case me.SUBTITLE_TRACK:d=n?F.SUBTITLE_TRACK_LOAD_TIMEOUT:F.SUBTITLE_LOAD_ERROR,l=!1;break}c&&this.resetInternalLoader(e.type);const u={type:oe.NETWORK_ERROR,details:d,fatal:l,url:e.url,loader:c,context:e,error:o,networkDetails:t,stats:r};if(i){const h=(t==null?void 0:t.url)||e.url;u.response=Ee({url:h,data:void 0},i)}this.hls.trigger(x.ERROR,u)}handlePlaylistLoaded(e,t,n,i,r,s){const o=this.hls,{type:d,level:l,id:c,groupId:u,deliveryDirectives:h}=i,m=Ir(t,i),g=oo(i),v=typeof i.level=="number"&&g===re.MAIN?l:void 0;if(!e.fragments.length){const C=e.playlistParsingError=new Error("No Segments found in Playlist");o.trigger(x.ERROR,{type:oe.NETWORK_ERROR,details:F.LEVEL_EMPTY_ERROR,fatal:!1,url:m,error:C,reason:C.message,response:t,context:i,level:v,parent:g,networkDetails:r,stats:n});return}e.targetduration||(e.playlistParsingError=new Error("Missing Target Duration"));const E=e.playlistParsingError;if(E){if(this.hls.logger.warn(E),!o.config.ignorePlaylistParsingErrors){o.trigger(x.ERROR,{type:oe.NETWORK_ERROR,details:F.LEVEL_PARSING_ERROR,fatal:!1,url:m,error:E,reason:E.message,response:t,context:i,level:v,parent:g,networkDetails:r,stats:n});return}e.playlistParsingError=null}switch(e.live&&s&&(s.getCacheAge&&(e.ageHeader=s.getCacheAge()||0),(!s.getCacheAge||isNaN(e.ageHeader))&&(e.ageHeader=0)),d){case me.MANIFEST:case me.LEVEL:o.trigger(x.LEVEL_LOADED,{details:e,levelInfo:i.levelOrTrack||o.levels[0],level:v||0,id:c||0,stats:n,networkDetails:r,deliveryDirectives:h,withoutMultiVariant:d===me.MANIFEST});break;case me.AUDIO_TRACK:o.trigger(x.AUDIO_TRACK_LOADED,{details:e,track:i.levelOrTrack,id:c||0,groupId:u||"",stats:n,networkDetails:r,deliveryDirectives:h});break;case me.SUBTITLE_TRACK:o.trigger(x.SUBTITLE_TRACK_LOADED,{details:e,track:i.levelOrTrack,id:c||0,groupId:u||"",stats:n,networkDetails:r,deliveryDirectives:h});break}}}class wt{static get version(){return Vn}static isMSESupported(){return Dl()}static isSupported(){return wm()}static getMediaSource(){return Rt()}static get Events(){return x}static get MetadataSchema(){return Ye}static get ErrorTypes(){return oe}static get ErrorDetails(){return F}static get DefaultConfig(){return wt.defaultConfig?wt.defaultConfig:gm}static set DefaultConfig(e){wt.defaultConfig=e}constructor(e={}){this.config=void 0,this.userConfig=void 0,this.logger=void 0,this.coreComponents=void 0,this.networkControllers=void 0,this._emitter=new ts,this._autoLevelCapping=-1,this._maxHdcpLevel=null,this.abrController=void 0,this.bufferController=void 0,this.capLevelController=void 0,this.latencyController=void 0,this.levelController=void 0,this.streamController=void 0,this.audioStreamController=void 0,this.subtititleStreamController=void 0,this.audioTrackController=void 0,this.subtitleTrackController=void 0,this.interstitialsController=void 0,this.gapController=void 0,this.emeController=void 0,this.cmcdController=void 0,this._media=null,this._url=null,this._sessionId=void 0,this.triggeringException=void 0,this.started=!1;const t=this.logger=eu(e.debug||!1,"Hls instance",e.assetPlayerId),n=this.config=Am(wt.DefaultConfig,e,t);this.userConfig=e,n.progressive&&vm(n,t);const{abrController:i,bufferController:r,capLevelController:s,errorController:o,fpsController:d}=n,l=new o(this),c=this.abrController=new i(this),u=new Vu(this),h=n.interstitialsController,m=h?this.interstitialsController=new h(this,wt):null,g=this.bufferController=new r(this,u),v=this.capLevelController=new s(this),E=new d(this),C=new Bm(this),I=n.contentSteeringController,L=I?new I(this):null,R=this.levelController=new km(this,L),_=new Lm(this),N=new Pm(this.config),P=this.streamController=new _m(this,u,N),O=this.gapController=new Sm(this,u);v.setStreamController(P),E.setStreamController(P);const U=[C,R,P];m&&U.splice(1,0,m),L&&U.splice(1,0,L),this.networkControllers=U;const D=[c,g,O,v,E,_,u];this.audioTrackController=this.createController(n.audioTrackController,U);const V=n.audioStreamController;V&&U.push(this.audioStreamController=new V(this,u,N)),this.subtitleTrackController=this.createController(n.subtitleTrackController,U);const Y=n.subtitleStreamController;Y&&U.push(this.subtititleStreamController=new Y(this,u,N)),this.createController(n.timelineController,D),N.emeController=this.emeController=this.createController(n.emeController,D),this.cmcdController=this.createController(n.cmcdController,D),this.latencyController=this.createController(Im,D),this.coreComponents=D,U.push(l);const se=l.onErrorOut;typeof se=="function"&&this.on(x.ERROR,se,l),this.on(x.MANIFEST_LOADED,C.onManifestLoaded,C)}createController(e,t){if(e){const n=new e(this);return t&&t.push(n),n}return null}on(e,t,n=this){this._emitter.on(e,t,n)}once(e,t,n=this){this._emitter.once(e,t,n)}removeAllListeners(e){this._emitter.removeAllListeners(e)}off(e,t,n=this,i){this._emitter.off(e,t,n,i)}listeners(e){return this._emitter.listeners(e)}emit(e,t,n){return this._emitter.emit(e,t,n)}trigger(e,t){if(this.config.debug)return this.emit(e,e,t);try{return this.emit(e,e,t)}catch(n){if(this.logger.error("An internal error happened while handling event "+e+'. Error message: "'+n.message+'". Here is a stacktrace:',n),!this.triggeringException){this.triggeringException=!0;const i=e===x.ERROR;this.trigger(x.ERROR,{type:oe.OTHER_ERROR,details:F.INTERNAL_EXCEPTION,fatal:i,event:e,error:n}),this.triggeringException=!1}}return!1}listenerCount(e){return this._emitter.listenerCount(e)}destroy(){this.logger.log("destroy"),this.trigger(x.DESTROYING,void 0),this.detachMedia(),this.removeAllListeners(),this._autoLevelCapping=-1,this._url=null,this.networkControllers.forEach(t=>t.destroy()),this.networkControllers.length=0,this.coreComponents.forEach(t=>t.destroy()),this.coreComponents.length=0;const e=this.config;e.xhrSetup=e.fetchSetup=void 0,this.userConfig=null}attachMedia(e){if(!e||"media"in e&&!e.media){const r=new Error(`attachMedia failed: invalid argument (${e})`);this.trigger(x.ERROR,{type:oe.OTHER_ERROR,details:F.ATTACH_MEDIA_ERROR,fatal:!0,error:r});return}this.logger.log("attachMedia"),this._media&&(this.logger.warn("media must be detached before attaching"),this.detachMedia());const t="media"in e,n=t?e.media:e,i=t?e:{media:n};this._media=n,this.trigger(x.MEDIA_ATTACHING,i)}detachMedia(){this.logger.log("detachMedia"),this.trigger(x.MEDIA_DETACHING,{}),this._media=null}transferMedia(){this._media=null;const e=this.bufferController.transferMedia();return this.trigger(x.MEDIA_DETACHING,{transferMedia:e}),e}loadSource(e){this.stopLoad();const t=this.media,n=this._url,i=this._url=Yr.buildAbsoluteURL(self.location.href,e,{alwaysNormalize:!0});this._autoLevelCapping=-1,this._maxHdcpLevel=null,this.logger.log(`loadSource:${i}`),t&&n&&(n!==i||this.bufferController.hasSourceTypes())&&(this.detachMedia(),this.attachMedia(t)),this.trigger(x.MANIFEST_LOADING,{url:e})}get url(){return this._url}get hasEnoughToStart(){return this.streamController.hasEnoughToStart}get startPosition(){return this.streamController.startPositionValue}startLoad(e=-1,t){this.logger.log(`startLoad(${e+(t?", <skip seek to start>":"")})`),this.started=!0,this.resumeBuffering();for(let n=0;n<this.networkControllers.length&&(this.networkControllers[n].startLoad(e,t),!(!this.started||!this.networkControllers));n++);}stopLoad(){this.logger.log("stopLoad"),this.started=!1;for(let e=0;e<this.networkControllers.length&&(this.networkControllers[e].stopLoad(),!(this.started||!this.networkControllers));e++);}get loadingEnabled(){return this.started}get bufferingEnabled(){return this.streamController.bufferingEnabled}resumeBuffering(){this.bufferingEnabled||(this.logger.log("resume buffering"),this.networkControllers.forEach(e=>{e.resumeBuffering&&e.resumeBuffering()}))}pauseBuffering(){this.bufferingEnabled&&(this.logger.log("pause buffering"),this.networkControllers.forEach(e=>{e.pauseBuffering&&e.pauseBuffering()}))}get inFlightFragments(){const e={[re.MAIN]:this.streamController.inFlightFrag};return this.audioStreamController&&(e[re.AUDIO]=this.audioStreamController.inFlightFrag),this.subtititleStreamController&&(e[re.SUBTITLE]=this.subtititleStreamController.inFlightFrag),e}swapAudioCodec(){this.logger.log("swapAudioCodec"),this.streamController.swapAudioCodec()}recoverMediaError(){this.logger.log("recoverMediaError");const e=this._media,t=e==null?void 0:e.currentTime;this.detachMedia(),e&&(this.attachMedia(e),t&&this.startLoad(t))}removeLevel(e){this.levelController.removeLevel(e)}get sessionId(){let e=this._sessionId;return e||(e=this._sessionId=Sp()),e}get levels(){const e=this.levelController.levels;return e||[]}get latestLevelDetails(){return this.streamController.getLevelDetails()||null}get loadLevelObj(){return this.levelController.loadLevelObj}get currentLevel(){return this.streamController.currentLevel}set currentLevel(e){this.logger.log(`set currentLevel:${e}`),this.levelController.manualLevel=e,this.streamController.immediateLevelSwitch()}get nextLevel(){return this.streamController.nextLevel}set nextLevel(e){this.logger.log(`set nextLevel:${e}`),this.levelController.manualLevel=e,this.streamController.nextLevelSwitch()}get loadLevel(){return this.levelController.level}set loadLevel(e){this.logger.log(`set loadLevel:${e}`),this.levelController.manualLevel=e}get nextLoadLevel(){return this.levelController.nextLoadLevel}set nextLoadLevel(e){this.levelController.nextLoadLevel=e}get firstLevel(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)}set firstLevel(e){this.logger.log(`set firstLevel:${e}`),this.levelController.firstLevel=e}get startLevel(){const e=this.levelController.startLevel;return e===-1&&this.abrController.forcedAutoLevel>-1?this.abrController.forcedAutoLevel:e}set startLevel(e){this.logger.log(`set startLevel:${e}`),e!==-1&&(e=Math.max(e,this.minAutoLevel)),this.levelController.startLevel=e}get capLevelToPlayerSize(){return this.config.capLevelToPlayerSize}set capLevelToPlayerSize(e){const t=!!e;t!==this.config.capLevelToPlayerSize&&(t?this.capLevelController.startCapping():(this.capLevelController.stopCapping(),this.autoLevelCapping=-1,this.streamController.nextLevelSwitch()),this.config.capLevelToPlayerSize=t)}get autoLevelCapping(){return this._autoLevelCapping}get bandwidthEstimate(){const{bwEstimator:e}=this.abrController;return e?e.getEstimate():NaN}set bandwidthEstimate(e){this.abrController.resetEstimator(e)}get abrEwmaDefaultEstimate(){const{bwEstimator:e}=this.abrController;return e?e.defaultEstimate:NaN}get ttfbEstimate(){const{bwEstimator:e}=this.abrController;return e?e.getEstimateTTFB():NaN}set autoLevelCapping(e){this._autoLevelCapping!==e&&(this.logger.log(`set autoLevelCapping:${e}`),this._autoLevelCapping=e,this.levelController.checkMaxAutoUpdated())}get maxHdcpLevel(){return this._maxHdcpLevel}set maxHdcpLevel(e){ku(e)&&this._maxHdcpLevel!==e&&(this._maxHdcpLevel=e,this.levelController.checkMaxAutoUpdated())}get autoLevelEnabled(){return this.levelController.manualLevel===-1}get manualLevel(){return this.levelController.manualLevel}get minAutoLevel(){const{levels:e,config:{minAutoBitrate:t}}=this;if(!e)return 0;const n=e.length;for(let i=0;i<n;i++)if(e[i].maxBitrate>=t)return i;return 0}get maxAutoLevel(){const{levels:e,autoLevelCapping:t,maxHdcpLevel:n}=this;let i;if(t===-1&&e!=null&&e.length?i=e.length-1:i=t,n)for(let r=i;r--;){const s=e[r].attrs["HDCP-LEVEL"];if(s&&s<=n)return r}return i}get firstAutoLevel(){return this.abrController.firstAutoLevel}get nextAutoLevel(){return this.abrController.nextAutoLevel}set nextAutoLevel(e){this.abrController.nextAutoLevel=e}get playingDate(){return this.streamController.currentProgramDateTime}get mainForwardBufferInfo(){return this.streamController.getMainFwdBufferInfo()}get maxBufferLength(){return this.streamController.maxBufferLength}setAudioOption(e){var t;return((t=this.audioTrackController)==null?void 0:t.setAudioOption(e))||null}setSubtitleOption(e){var t;return((t=this.subtitleTrackController)==null?void 0:t.setSubtitleOption(e))||null}get allAudioTracks(){const e=this.audioTrackController;return e?e.allAudioTracks:[]}get audioTracks(){const e=this.audioTrackController;return e?e.audioTracks:[]}get audioTrack(){const e=this.audioTrackController;return e?e.audioTrack:-1}set audioTrack(e){const t=this.audioTrackController;t&&(t.audioTrack=e)}get allSubtitleTracks(){const e=this.subtitleTrackController;return e?e.allSubtitleTracks:[]}get subtitleTracks(){const e=this.subtitleTrackController;return e?e.subtitleTracks:[]}get subtitleTrack(){const e=this.subtitleTrackController;return e?e.subtitleTrack:-1}get media(){return this._media}set subtitleTrack(e){const t=this.subtitleTrackController;t&&(t.subtitleTrack=e)}get subtitleDisplay(){const e=this.subtitleTrackController;return e?e.subtitleDisplay:!1}set subtitleDisplay(e){const t=this.subtitleTrackController;t&&(t.subtitleDisplay=e)}get lowLatencyMode(){return this.config.lowLatencyMode}set lowLatencyMode(e){this.config.lowLatencyMode=e}get liveSyncPosition(){return this.latencyController.liveSyncPosition}get latency(){return this.latencyController.latency}get maxLatency(){return this.latencyController.maxLatency}get targetLatency(){return this.latencyController.targetLatency}set targetLatency(e){this.latencyController.targetLatency=e}get drift(){return this.latencyController.drift}get forceStartLoad(){return this.streamController.forceStartLoad}get pathways(){return this.levelController.pathways}get pathwayPriority(){return this.levelController.pathwayPriority}set pathwayPriority(e){this.levelController.pathwayPriority=e}get bufferedToEnd(){var e;return!!((e=this.bufferController)!=null&&e.bufferedToEnd)}get interstitialsManager(){var e;return((e=this.interstitialsController)==null?void 0:e.interstitialsManager)||null}getMediaDecodingInfo(e,t=this.allAudioTracks){const n=Lo(t);return Co(e,n,navigator.mediaCapabilities)}}wt.defaultConfig=void 0;var Om=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fm(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var kr={exports:{}},lo;function Mm(){return lo||(lo=1,function(a,e){(function(t,n){a.exports=n()})(self,()=>(()=>{var t={916:(s,o,d)=>{var l=d(471);s.exports=function(c){var u,h="",m=(c=c||{}).video,g=c.options,v=l.$escape,E=c.tran,C=c.icons,I=c.index,L=l.$each;return c.$value,c.$index,h+=`<div class="dplayer-mask"></div>
<div class="dplayer-video-wrap">
    `,u=d(568)(m),h+=u,h+=`
    `,g.logo&&(h+=`
    <div class="dplayer-logo">
        <img src="`,h+=v(g.logo),h+=`">
    </div>
    `),h+=`
    <div class="dplayer-danmaku"`,g.danmaku&&g.danmaku.bottom&&(h+=' style="margin-bottom:',h+=v(g.danmaku.bottom),h+='"'),h+=`>
        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>
    </div>
    <div class="dplayer-subtitle"></div>
    <div class="dplayer-bezel">
        <span class="dplayer-bezel-icon"></span>
        `,g.danmaku&&(h+=`
        <span class="dplayer-danloading">`,h+=v(E("danmaku-loading")),h+=`</span>
        `),h+=`
        <span class="diplayer-loading-icon">`,h+=C.loading,h+=`</span>
    </div>
</div>
<div class="dplayer-controller-mask"></div>
<div class="dplayer-controller">
    <div class="dplayer-icons dplayer-comment-box">
        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="`,h+=v(E("setting")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=C.pallette,h+=`</span>
        </button>
        <div class="dplayer-comment-setting-box">
            <div class="dplayer-comment-setting-color">
                <div class="dplayer-comment-setting-title">`,h+=v(E("set-danmaku-color")),h+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(I),h+=`" value="#fff" checked>
                    <span style="background: #fff;"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(I),h+=`" value="#e54256">
                    <span style="background: #e54256"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(I),h+=`" value="#ffe133">
                    <span style="background: #ffe133"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(I),h+=`" value="#64DD17">
                    <span style="background: #64DD17"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(I),h+=`" value="#39ccff">
                    <span style="background: #39ccff"></span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-color-`,h+=v(I),h+=`" value="#D500F9">
                    <span style="background: #D500F9"></span>
                </label>
            </div>
            <div class="dplayer-comment-setting-type">
                <div class="dplayer-comment-setting-title">`,h+=v(E("set-danmaku-type")),h+=`</div>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,h+=v(I),h+=`" value="1">
                    <span>`,h+=v(E("top")),h+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,h+=v(I),h+=`" value="0" checked>
                    <span>`,h+=v(E("rolling")),h+=`</span>
                </label>
                <label>
                    <input type="radio" name="dplayer-danmaku-type-`,h+=v(I),h+=`" value="2">
                    <span>`,h+=v(E("bottom")),h+=`</span>
                </label>
            </div>
        </div>
        <input class="dplayer-comment-input" type="text" placeholder="`,h+=v(E("input-danmaku-enter")),h+=`" maxlength="30">
        <button class="dplayer-icon dplayer-send-icon" data-balloon="`,h+=v(E("send")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=C.send,h+=`</span>
        </button>
    </div>
    <div class="dplayer-icons dplayer-icons-left">
        <button class="dplayer-icon dplayer-play-icon">
            <span class="dplayer-icon-content">`,h+=C.play,h+=`</span>
        </button>
        <div class="dplayer-volume">
            <button class="dplayer-icon dplayer-volume-icon">
                <span class="dplayer-icon-content">`,h+=C.volumeDown,h+=`</span>
            </button>
            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">
                <div class="dplayer-volume-bar">
                    <div class="dplayer-volume-bar-inner" style="background: `,h+=v(g.theme),h+=`;">
                        <span class="dplayer-thumb" style="background: `,h+=v(g.theme),h+=`"></span>
                    </div>
                </div>
            </div>
        </div>
        <span class="dplayer-time">
            <span class="dplayer-ptime">0:00</span> /
            <span class="dplayer-dtime">0:00</span>
        </span>
        `,g.live&&(h+=`
        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: `,h+=v(g.theme),h+=';"></span>',h+=v(E("live")),h+=`</span>
        `),h+=`
    </div>
    <div class="dplayer-icons dplayer-icons-right">
        `,g.video.quality&&(h+=`
        <div class="dplayer-quality">
            <button class="dplayer-icon dplayer-quality-icon">`,h+=v(g.video.quality[g.video.defaultQuality].name),h+=`</button>
            <div class="dplayer-quality-mask">
                <div class="dplayer-quality-list">
                `,L(g.video.quality,function(R,_){h+=`
                    <div class="dplayer-quality-item" data-index="`,h+=v(_),h+='">',h+=v(R.name),h+=`</div>
                `}),h+=`
                </div>
            </div>
        </div>
        `),h+=`
        `,g.screenshot&&(h+=`
        <div class="dplayer-icon dplayer-camera-icon" data-balloon="`,h+=v(E("screenshot")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=C.camera,h+=`</span>
        </div>
        `),h+=`
        `,g.airplay&&(h+=`
        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="`,h+=v(E("airplay")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=C.airplay,h+=`</span>
        </div>
        `),h+=`
        `,g.chromecast&&(h+=`
        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="`,h+=v(E("chromecast")),h+=`" data-balloon-pos="up">
            <span class="dplayer-icon-content">`,h+=C.chromecast,h+=`</span>
        </div>
        `),h+=`
        <div class="dplayer-comment">
            <button class="dplayer-icon dplayer-comment-icon" data-balloon="`,h+=v(E("send-danmaku")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=C.comment,h+=`</span>
            </button>
        </div>
        `,g.subtitle&&(h+=`
        `,typeof g.subtitle.url=="string"?(h+=`
        <div class="dplayer-subtitle-btn">
            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="`,h+=v(E("hide-subs")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=C.subtitle,h+=`</span>
            </button>
        </div>
        `):(h+=`
        <div class="dplayer-subtitles">
            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="`,h+=v(E("subtitle")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=C.subtitle,h+=`</span>
            </button>
            <div class="dplayer-subtitles-box">
                <div class="dplayer-subtitles-panel">
                    `,L(g.subtitle.url,function(R,_){h+=`
                        <div class="dplayer-subtitles-item" data-subtitle="`,h+=v(R.url),h+=`">
                            <!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. -->
                            <span class="dplayer-label">`,h+=v(R.lang?R.name?R.name+" ("+E(R.lang)+")":E(R.lang):R.name),h+=`</span>
                        </div>
                    `}),h+=`
                </div>
            </div>
        </div>
        `),h+=`
        `),h+=`
        <div class="dplayer-setting">
            <button class="dplayer-icon dplayer-setting-icon" data-balloon="`,h+=v(E("setting")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=C.setting,h+=`</span>
            </button>
            <div class="dplayer-setting-box">
                <div class="dplayer-setting-origin-panel">
                    <div class="dplayer-setting-item dplayer-setting-speed">
                        <span class="dplayer-label">`,h+=v(E("speed")),h+=`</span>
                        <div class="dplayer-toggle">`,h+=C.right,h+=`</div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-loop">
                        <span class="dplayer-label">`,h+=v(E("loop")),h+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">
                            <label for="dplayer-toggle"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-showdan">
                        <span class="dplayer-label">`,h+=v(E("show-danmaku")),h+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">
                            <label for="dplayer-toggle-dan"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danunlimit">
                        <span class="dplayer-label">`,h+=v(E("unlimited-danmaku")),h+=`</span>
                        <div class="dplayer-toggle">
                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">
                            <label for="dplayer-toggle-danunlimit"></label>
                        </div>
                    </div>
                    <div class="dplayer-setting-item dplayer-setting-danmaku">
                        <span class="dplayer-label">`,h+=v(E("opacity-danmaku")),h+=`</span>
                        <div class="dplayer-danmaku-bar-wrap">
                            <div class="dplayer-danmaku-bar">
                                <div class="dplayer-danmaku-bar-inner">
                                    <span class="dplayer-thumb"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dplayer-setting-speed-panel">
                    `,L(g.playbackSpeed,function(R,_){h+=`
                        <div class="dplayer-setting-speed-item" data-speed="`,h+=v(R),h+=`">
                            <span class="dplayer-label">`,h+=v(R===1?E("normal"):R),h+=`</span>
                        </div>
                    `}),h+=`
                </div>
            </div>
        </div>
        <div class="dplayer-full">
            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="`,h+=v(E("web-fullscreen")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=C.fullWeb,h+=`</span>
            </button>
            <button class="dplayer-icon dplayer-full-icon" data-balloon="`,h+=v(E("fullscreen")),h+=`" data-balloon-pos="up">
                <span class="dplayer-icon-content">`,h+=C.full,h+=`</span>
            </button>
        </div>
    </div>
    <div class="dplayer-bar-wrap">
        <div class="dplayer-bar-time hidden">00:00</div>
        <div class="dplayer-bar-preview"></div>
        <div class="dplayer-bar">
            <div class="dplayer-loaded" style="width: 0;"></div>
            <div class="dplayer-played" style="width: 0; background: `,h+=v(g.theme),h+=`">
                <span class="dplayer-thumb" style="background: `,h+=v(g.theme),h+=`"></span>
            </div>
        </div>
    </div>
</div>
<div class="dplayer-info-panel dplayer-info-panel-hide">
    <div class="dplayer-info-panel-close">[x]</div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">
        <span class="dplayer-info-panel-item-title">Player version</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">
        <span class="dplayer-info-panel-item-title">Player FPS</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">
        <span class="dplayer-info-panel-item-title">Video type</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">
        <span class="dplayer-info-panel-item-title">Video url</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">
        <span class="dplayer-info-panel-item-title">Video resolution</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">
        <span class="dplayer-info-panel-item-title">Video duration</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `,g.danmaku&&(h+=`
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">
        <span class="dplayer-info-panel-item-title">Danmaku id</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">
        <span class="dplayer-info-panel-item-title">Danmaku api</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">
        <span class="dplayer-info-panel-item-title">Danmaku amount</span>
        <span class="dplayer-info-panel-item-data"></span>
    </div>
    `),h+=`
</div>
<div class="dplayer-menu">
    `,L(g.contextmenu,function(R,_){h+=`
        <div class="dplayer-menu-item">
            <a`,R.link&&(h+=' target="_blank"'),h+=' href="',h+=v(R.link||"javascript:void(0);"),h+='">',R.key&&(h+=" ",h+=v(E(R.key))),R.text&&(h+=" ",h+=v(R.text)),h+=`</a>
        </div>
    `}),h+=`
</div>
<div class="dplayer-notice-list"></div>
<button class="dplayer-mobile-play">
    `,h+=C.play,h+=`
</button>`}},568:(s,o,d)=>{var l=d(471);s.exports=function(c){var u="",h=(c=c||{}).enableSubtitle,m=c.subtitle,g=c.current,v=c.airplay,E=c.pic,C=l.$escape,I=c.screenshot,L=c.preload,R=c.url;return h=m&&m.type==="webvtt",u+=`
<video
    class="dplayer-video `,g&&(u+="dplayer-video-current"),u+=`"
    webkit-playsinline
    `,v&&(u+=' x-webkit-airplay="allow" '),u+=`
    playsinline
    `,E&&(u+='poster="',u+=C(E),u+='"'),u+=`
    `,(I||h)&&(u+='crossorigin="anonymous"'),u+=`
    `,L&&(u+='preload="',u+=C(L),u+='"'),u+=`
    `,v?u+=`
    nosrc
    `:R&&(u+=`
    src="`,u+=C(R),u+=`"
    `),u+=`
    >
    `,v&&(u+=`
    <source src="`,u+=C(R),u+=`">
    `),u+=`
    `,h&&(u+=`
    <track class="dplayer-subtrack" kind="metadata" default src="`,u+=C(typeof m.url=="string"?m.url:m.url[m.index].url),u+=`"></track>
    `),u+`
</video>`}},49:(s,o,d)=>{d.d(o,{Z:()=>m});var l=d(415),c=d.n(l),u=d(352),h=d.n(u)()(c());h.push([s.id,`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: 12px;
    font-size: var(--balloon-font-size);
    background: rgba(16, 16, 16, 0.95);
    background: var(--balloon-color);
    border-radius: 2px;
    color: #fff;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: rgba(16, 16, 16, 0.95);
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, 4px);
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, 4px);
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(4px * -1));
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: rgba(16, 16, 16, 0.95);
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(4px * -1));
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(4px, -50%);
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: rgba(16, 16, 16, 0.95);
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(4px * -1), -50%);
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: rgba(16, 16, 16, 0.95);
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`,"",{version:3,sources:["webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE",sourcesContent:[`:root {
  --balloon-border-radius: 2px;
  --balloon-color: rgba(16, 16, 16, 0.95);
  --balloon-text-color: #fff;
  --balloon-font-size: 12px;
  --balloon-move: 4px; }

button[aria-label][data-balloon-pos] {
  overflow: visible; }

[aria-label][data-balloon-pos] {
  position: relative;
  cursor: pointer; }
  [aria-label][data-balloon-pos]:after {
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    text-indent: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    font-style: normal;
    text-shadow: none;
    font-size: var(--balloon-font-size);
    background: var(--balloon-color);
    border-radius: 2px;
    color: var(--balloon-text-color);
    border-radius: var(--balloon-border-radius);
    content: attr(aria-label);
    padding: .5em 1em;
    position: absolute;
    white-space: nowrap;
    z-index: 10; }
  [aria-label][data-balloon-pos]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top-color: var(--balloon-color);
    opacity: 0;
    pointer-events: none;
    transition: all 0.18s ease-out 0.18s;
    content: "";
    position: absolute;
    z-index: 10; }
  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {
    opacity: 1;
    pointer-events: none; }
  [aria-label][data-balloon-pos].font-awesome:after {
    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
  [aria-label][data-balloon-pos][data-balloon-break]:after {
    white-space: pre; }
  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {
    white-space: pre-line;
    word-break: break-word; }
  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {
    transition: none; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {
    transform: translate(-50%, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {
    left: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {
    left: 5px; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {
    right: 0; }
  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {
    right: 5px; }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {
    transform: translate(0, 0); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    bottom: 100%;
    transform-origin: top;
    transform: translate(0, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {
    margin-bottom: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {
    left: 50%;
    transform: translate(-50%, var(--balloon-move)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    top: 100%;
    transform: translate(0, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {
    margin-top: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {
    left: 50%;
    transform: translate(-50%, calc(var(--balloon-move) * -1)); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {
    transform: translate(0, -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    right: 100%;
    top: 50%;
    transform: translate(var(--balloon-move), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {
    margin-right: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    left: 100%;
    top: 50%;
    transform: translate(calc(var(--balloon-move) * -1), -50%); }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {
    margin-left: 10px; }
  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-right-color: var(--balloon-color); }
  [aria-label][data-balloon-pos][data-balloon-length]:after {
    white-space: normal; }
  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {
    width: 80px; }
  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {
    width: 150px; }
  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {
    width: 260px; }
  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
    width: 380px; }
    @media screen and (max-width: 768px) {
      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {
        width: 90vw; } }
  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {
    width: 100%; }
`],sourceRoot:""}]);const m=h},685:(s,o,d)=>{d.d(o,{Z:()=>L});var l=d(415),c=d.n(l),u=d(352),h=d.n(u),m=d(49),g=d(80),v=d.n(g),E=new URL(d(831),d.b),C=h()(c());C.i(m.Z);var I=v()(E);C.push([s.id,`@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(`+I+`) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,"",{version:3,sources:["webpack://./src/css/global.less","webpack://./src/css/index.less","webpack://./src/css/player.less","webpack://./src/css/balloon.less","webpack://./src/css/bezel.less","webpack://./src/css/notice.less","webpack://./src/css/controller.less","webpack://./src/css/danmaku.less","webpack://./src/css/logo.less","webpack://./src/css/menu.less","webpack://./src/css/subtitle.less","webpack://./src/css/video.less","webpack://./src/css/info-panel.less"],names:[],mappings:"AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,qBAAA;AHkTpB;AIlXC;EDgEmB,qBAAA;AHqTpB;AIrXC;EDgEmB,qBAAA;AHwTpB;AIxXC;EDgEmB,qBAAA;AH2TpB;AI3XC;EDgEmB,qBAAA;AH8TpB;AI9XC;EDgEmB,qBAAA;AHiUpB;AIjYC;EDgEmB,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,yBAAA;EACA,iCAAA;EACA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,gCAAA;EACA,iCAAA;EACA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;AIjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;AJmqCJ;AItqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,0CAAA;AJmqCR;AIhrCA;EAiBQ,4CAAA;AJkqCR;AI9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;EJgqCN;EI9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJgqCN;AACF;AI7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;EJ+pCN;EI7pCE;IACI,eAAA;EJ+pCN;EI7pCE;IACI,YAAA;IACA,iBAAA;EJ+pCN;EI7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;EJ+pCN;AACF;ASltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;ATotCJ;ASntCI;EACI,aAAA;ATqtCR;AU/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AViuCJ;AUhuCI;EACI,cAAA;AVkuCR;AU9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AVguCJ;AUruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AViuCR;AU1uCA;EAYQ,cAAA;AViuCR;AU7uCA;EAeQ,aAAA;AViuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR",sourcesContent:[`@keyframes my-face {
    2% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    4% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    6% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    8% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    10% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    12% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    14% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    16% {
        transform: translate(0, -0.5px) rotate(-1.5deg);
    }
    18% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    20% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    22% {
        transform: translate(0, 0.5px) rotate(-1.5deg);
    }
    24% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    26% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    28% {
        transform: translate(0, 0.5px) rotate(1.5deg);
    }
    30% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    32% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    34% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    36% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    38% {
        transform: translate(0, 1.5px) rotate(-1.5deg);
    }
    40% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    42% {
        transform: translate(0, 2.5px) rotate(-1.5deg);
    }
    44% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    46% {
        transform: translate(0, -1.5px) rotate(2.5deg);
    }
    48% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    50% {
        transform: translate(0, 0.5px) rotate(0.5deg);
    }
    52% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    54% {
        transform: translate(0, -1.5px) rotate(1.5deg);
    }
    56% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    58% {
        transform: translate(0, 0.5px) rotate(2.5deg);
    }
    60% {
        transform: translate(0, 2.5px) rotate(2.5deg);
    }
    62% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    64% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    66% {
        transform: translate(0, 1.5px) rotate(-0.5deg);
    }
    68% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    70% {
        transform: translate(0, 1.5px) rotate(0.5deg);
    }
    72% {
        transform: translate(0, 2.5px) rotate(1.5deg);
    }
    74% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    76% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    78% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    80% {
        transform: translate(0, 1.5px) rotate(1.5deg);
    }
    82% {
        transform: translate(0, -0.5px) rotate(0.5deg);
    }
    84% {
        transform: translate(0, 1.5px) rotate(2.5deg);
    }
    86% {
        transform: translate(0, -1.5px) rotate(-1.5deg);
    }
    88% {
        transform: translate(0, -0.5px) rotate(2.5deg);
    }
    90% {
        transform: translate(0, 2.5px) rotate(-0.5deg);
    }
    92% {
        transform: translate(0, 0.5px) rotate(-0.5deg);
    }
    94% {
        transform: translate(0, 2.5px) rotate(0.5deg);
    }
    96% {
        transform: translate(0, -0.5px) rotate(1.5deg);
    }
    98% {
        transform: translate(0, -1.5px) rotate(-0.5deg);
    }
    0%,
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}`,`@import '../../node_modules/balloon-css/balloon.css';
@keyframes my-face {
  2% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  4% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  6% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  8% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  10% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  12% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  14% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  16% {
    transform: translate(0, -0.5px) rotate(-1.5deg);
  }
  18% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  20% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  22% {
    transform: translate(0, 0.5px) rotate(-1.5deg);
  }
  24% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  26% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  28% {
    transform: translate(0, 0.5px) rotate(1.5deg);
  }
  30% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  32% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  34% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  36% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  38% {
    transform: translate(0, 1.5px) rotate(-1.5deg);
  }
  40% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  42% {
    transform: translate(0, 2.5px) rotate(-1.5deg);
  }
  44% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  46% {
    transform: translate(0, -1.5px) rotate(2.5deg);
  }
  48% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  50% {
    transform: translate(0, 0.5px) rotate(0.5deg);
  }
  52% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  54% {
    transform: translate(0, -1.5px) rotate(1.5deg);
  }
  56% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  58% {
    transform: translate(0, 0.5px) rotate(2.5deg);
  }
  60% {
    transform: translate(0, 2.5px) rotate(2.5deg);
  }
  62% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  64% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  66% {
    transform: translate(0, 1.5px) rotate(-0.5deg);
  }
  68% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  70% {
    transform: translate(0, 1.5px) rotate(0.5deg);
  }
  72% {
    transform: translate(0, 2.5px) rotate(1.5deg);
  }
  74% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  76% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  78% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  80% {
    transform: translate(0, 1.5px) rotate(1.5deg);
  }
  82% {
    transform: translate(0, -0.5px) rotate(0.5deg);
  }
  84% {
    transform: translate(0, 1.5px) rotate(2.5deg);
  }
  86% {
    transform: translate(0, -1.5px) rotate(-1.5deg);
  }
  88% {
    transform: translate(0, -0.5px) rotate(2.5deg);
  }
  90% {
    transform: translate(0, 2.5px) rotate(-0.5deg);
  }
  92% {
    transform: translate(0, 0.5px) rotate(-0.5deg);
  }
  94% {
    transform: translate(0, 2.5px) rotate(0.5deg);
  }
  96% {
    transform: translate(0, -0.5px) rotate(1.5deg);
  }
  98% {
    transform: translate(0, -1.5px) rotate(-0.5deg);
  }
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
.dplayer {
  position: relative;
  overflow: hidden;
  user-select: none;
  line-height: 1;
}
.dplayer * {
  box-sizing: content-box;
}
.dplayer svg {
  width: 100%;
  height: 100%;
}
.dplayer svg path,
.dplayer svg circle {
  fill: #fff;
}
.dplayer:-webkit-full-screen {
  width: 100%;
  height: 100%;
  background: #000;
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  transform: translate(0, 0);
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {
  display: none;
}
.dplayer.dplayer-no-danmaku .dplayer-danmaku {
  display: none;
}
.dplayer.dplayer-live .dplayer-time {
  display: none;
}
.dplayer.dplayer-live .dplayer-bar-wrap {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-speed {
  display: none;
}
.dplayer.dplayer-live .dplayer-setting-loop {
  display: none;
}
.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {
  display: none;
}
.dplayer.dplayer-arrow .dplayer-danmaku {
  font-size: 18px;
}
.dplayer.dplayer-arrow .dplayer-icon {
  margin: 0 -3px;
}
.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {
  animation-play-state: running;
}
@media (min-width: 900px) {
  .dplayer.dplayer-playing .dplayer-controller-mask {
    opacity: 0;
  }
  .dplayer.dplayer-playing .dplayer-controller {
    opacity: 0;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller-mask {
    opacity: 1;
  }
  .dplayer.dplayer-playing:hover .dplayer-controller {
    opacity: 1;
  }
}
.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {
  display: block;
}
.dplayer.dplayer-loading .dplayer-danmaku,
.dplayer.dplayer-paused .dplayer-danmaku,
.dplayer.dplayer-loading .dplayer-danmaku-move,
.dplayer.dplayer-paused .dplayer-danmaku-move {
  animation-play-state: paused;
}
.dplayer.dplayer-hide-controller {
  cursor: none;
}
.dplayer.dplayer-hide-controller .dplayer-controller-mask {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-hide-controller .dplayer-controller {
  opacity: 0;
  transform: translateY(100%);
}
.dplayer.dplayer-show-controller .dplayer-controller-mask {
  opacity: 1;
}
.dplayer.dplayer-show-controller .dplayer-controller {
  opacity: 1;
}
.dplayer.dplayer-fulled {
  position: fixed;
  z-index: 100000;
  left: 0;
  top: 0;
  width: 100% !important;
  height: 100% !important;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: static;
  display: inline-block;
}
.dplayer.dplayer-mobile .dplayer-bar-time {
  display: none;
}
.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {
  display: none;
}
.dplayer.dplayer-mobile .dplayer-mobile-play {
  display: block;
}
.dplayer-web-fullscreen-fix {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}
[data-balloon]:before {
  display: none;
}
[data-balloon]:after {
  padding: 0.3em 0.7em;
  background: rgba(17, 17, 17, 0.7);
}
[data-balloon][data-balloon-pos="up"]:after {
  margin-bottom: 0;
}
.dplayer-bezel {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -26px 0 0 -26px;
  height: 52px;
  width: 52px;
  padding: 12px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {
  animation: bezel-hide 0.5s linear;
}
@keyframes bezel-hide {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(2);
  }
}
.dplayer-bezel .dplayer-danloading {
  position: absolute;
  top: 50%;
  margin-top: -7px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-bezel .diplayer-loading-icon {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -18px 0 0 -18px;
  height: 36px;
  width: 36px;
  pointer-events: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {
  display: none;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {
  animation: diplayer-loading-dot-fade 0.8s ease infinite;
  opacity: 0;
  transform-origin: 4px 4px;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {
  animation-delay: 0.1s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {
  animation-delay: 0.2s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {
  animation-delay: 0.3s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {
  animation-delay: 0.4s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {
  animation-delay: 0.5s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {
  animation-delay: 0.6s;
}
.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {
  animation-delay: 0.7s;
}
@keyframes diplayer-loading-dot-fade {
  0% {
    opacity: 0.7;
    transform: scale(1.2, 1.2);
  }
  50% {
    opacity: 0.25;
    transform: scale(0.9, 0.9);
  }
  to {
    opacity: 0.25;
    transform: scale(0.85, 0.85);
  }
}
.dplayer-controller-mask {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
  height: 98px;
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: all 0.3s ease;
}
.dplayer-controller {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 41px;
  padding: 0 20px;
  user-select: none;
  transition: all 0.3s ease;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons {
  display: none;
}
.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap {
  padding: 5px 0;
  cursor: pointer;
  position: absolute;
  bottom: 33px;
  width: calc(100% - 40px);
  height: 3px;
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {
  display: block;
  width: 8px;
  transform: translateX(-4px);
  top: 4px;
  height: 40%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {
  z-index: 12;
  position: absolute;
  top: 5px;
  width: 6px;
  height: 20%;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
  transform: translateX(-3px);
  transition: all 0.2s ease-in-out;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {
  display: block;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {
  display: none;
  position: absolute;
  left: 50%;
  top: -24px;
  padding: 5px 8px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  transform: translateX(-50%);
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {
  position: absolute;
  background: #fff;
  pointer-events: none;
  display: none;
  background-size: 16000px 100%;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {
  position: absolute;
  left: 0px;
  top: -20px;
  border-radius: 4px;
  padding: 5px 7px;
  background-color: rgba(0, 0, 0, 0.62);
  color: #fff;
  font-size: 12px;
  text-align: center;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  word-wrap: normal;
  word-break: normal;
  z-index: 2;
  pointer-events: none;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {
  opacity: 0;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar {
  position: relative;
  height: 3px;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.4);
  height: 3px;
  transition: all 0.5s ease;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 3px;
  will-change: width;
}
.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons {
  height: 38px;
  position: absolute;
  bottom: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box {
  display: none;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 2;
  height: 38px;
  bottom: 0;
  left: 20px;
  right: 20px;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {
  position: absolute;
  background: rgba(28, 28, 28, 0.9);
  bottom: 41px;
  left: 0;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 10px 10px 16px;
  font-size: 14px;
  width: 204px;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {
  font-size: 13px;
  color: #fff;
  line-height: 30px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {
  margin-bottom: 6px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {
  border-radius: 4px 0 0 4px;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {
  border-radius: 0 4px 4px 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {
  width: 33%;
  padding: 4px 6px;
  line-height: 16px;
  display: inline-block;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  margin-right: -1px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {
  background: #E4E4E6;
  color: #1c1c1c;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {
  font-size: 0;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {
  font-size: 0;
  padding: 6px;
  display: inline-block;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {
  width: 22px;
  height: 22px;
  display: inline-block;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {
  animation: my-face 5s infinite ease-in-out;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {
  outline: none;
  border: none;
  padding: 8px 31px;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  border-radius: 4px;
  background: none;
  margin: 0;
  height: 100%;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {
  color: #fff;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {
  display: none;
}
.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {
  padding: 7px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right {
  right: 20px;
}
.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {
  padding: 8px;
}
.dplayer-controller .dplayer-icons .dplayer-time,
.dplayer-controller .dplayer-icons .dplayer-live-badge {
  line-height: 38px;
  color: #eee;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  vertical-align: middle;
  font-size: 13px;
  cursor: default;
}
.dplayer-controller .dplayer-icons .dplayer-live-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  vertical-align: 4%;
  margin-right: 5px;
  content: '';
  border-radius: 6px;
}
.dplayer-controller .dplayer-icons .dplayer-icon {
  width: 40px;
  height: 100%;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {
  transition: all 0.2s ease-in-out;
  opacity: 0.8;
}
.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {
  opacity: 1;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {
  color: #fff;
  width: auto;
  line-height: 22px;
  font-size: 14px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {
  padding: 10px 9px 9px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {
  padding-top: 8.5px;
}
.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {
  width: 43px;
}
.dplayer-controller .dplayer-icons .dplayer-volume {
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {
  width: 45px;
}
.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {
  display: inline-block;
  margin: 0 10px 0 -5px;
  vertical-align: middle;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {
  position: relative;
  top: 17px;
  width: 0;
  height: 3px;
  background: #aaa;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  transform: scale(0);
}
.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: fit-content;
  max-width: 240px;
  min-width: 120px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: auto;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
  position: absolute;
  right: 0;
  bottom: 50px;
  transform: scale(0);
  width: 150px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 7px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {
  transform: scale(1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {
  width: 70px;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {
  padding: 5px 0;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {
  padding: 0 10px;
  display: inline;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {
  display: inline-block;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {
  padding: 0 10px;
  box-sizing: border-box;
  display: none;
  vertical-align: middle;
  height: 100%;
  width: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {
  position: relative;
  top: 8.5px;
  width: 100%;
  height: 3px;
  background: #fff;
  transition: all 0.3s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  transition: all 0.1s ease;
  background: #aaa;
  will-change: width;
}
.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {
  position: absolute;
  top: 0;
  right: 5px;
  margin-top: -4px;
  margin-right: -10px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background: #aaa;
}
.dplayer-controller .dplayer-icons .dplayer-full {
  display: inline-block;
  height: 100%;
  position: relative;
}
.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {
  position: absolute;
  top: -30px;
  z-index: 1;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-quality {
  position: relative;
  display: inline-block;
  height: 100%;
  z-index: 2;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {
  display: block;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {
  display: none;
  position: absolute;
  bottom: 38px;
  left: -18px;
  width: 80px;
  padding-bottom: 12px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {
  display: none;
  font-size: 12px;
  width: 80px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  text-align: center;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {
  height: 25px;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 25px;
}
.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-controller .dplayer-icons .dplayer-comment {
  display: inline-block;
  height: 100%;
}
.dplayer-controller .dplayer-icons .dplayer-label {
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
}
.dplayer-controller .dplayer-icons .dplayer-toggle {
  width: 32px;
  height: 20px;
  text-align: center;
  font-size: 0;
  vertical-align: middle;
  position: absolute;
  top: 5px;
  right: 10px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input {
  max-height: 0;
  max-width: 0;
  display: none;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label {
  display: inline-block;
  position: relative;
  box-shadow: #dfdfdf 0 0 0 0 inset;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 32px;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  top: 0;
  left: 0;
  border-radius: 15px;
  transition: 0.2s ease-in-out;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  border-radius: 15px;
  background: #fff;
  transition: 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 18px;
  width: 18px;
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {
  border-color: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {
  width: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {
  left: 12px;
}
.dplayer-mobile-play {
  display: none;
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  bottom: 0;
  opacity: 0.8;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.dplayer-danmaku {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 22px;
  color: #fff;
}
.dplayer-danmaku .dplayer-danmaku-item {
  display: inline-block;
  pointer-events: none;
  user-select: none;
  cursor: default;
  white-space: nowrap;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
}
.dplayer-danmaku .dplayer-danmaku-item--demo {
  position: absolute;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-right {
  position: absolute;
  right: 0;
  transform: translateX(100%);
}
.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {
  will-change: transform;
  animation-name: 'danmaku';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku {
  from {
    transform: translateX(100%);
  }
}
.dplayer-danmaku .dplayer-danmaku-top,
.dplayer-danmaku .dplayer-danmaku-bottom {
  position: absolute;
  width: 100%;
  text-align: center;
  visibility: hidden;
}
.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,
.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {
  will-change: visibility;
  animation-name: 'danmaku-center';
  animation-timing-function: linear;
  animation-play-state: paused;
}
@keyframes danmaku-center {
  from {
    visibility: visible;
  }
  to {
    visibility: visible;
  }
}
.dplayer-logo {
  pointer-events: none;
  position: absolute;
  left: 20px;
  top: 20px;
  max-width: 50px;
  max-height: 50px;
}
.dplayer-logo img {
  max-width: 100%;
  max-height: 100%;
  background: none;
}
.dplayer-menu {
  position: absolute;
  width: 170px;
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.85);
  padding: 5px 0;
  overflow: hidden;
  z-index: 3;
  display: none;
}
.dplayer-menu.dplayer-menu-show {
  display: block;
}
.dplayer-menu .dplayer-menu-item {
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
}
.dplayer-menu .dplayer-menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.dplayer-menu .dplayer-menu-item a {
  padding: 0 10px;
  line-height: 30px;
  color: #eee;
  font-size: 13px;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-menu .dplayer-menu-item a:hover {
  text-decoration: none;
}
.dplayer-notice-list {
  position: absolute;
  bottom: 60px;
  left: 20px;
}
.dplayer-notice-list .dplayer-notice {
  border-radius: 2px;
  background: rgba(28, 28, 28, 0.9);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: table;
  pointer-events: none;
  animation: showNotice 0.3s ease 1 forwards;
}
.dplayer-notice-list .remove-notice {
  animation: removeNotice 0.3s ease 1 forwards;
}
@keyframes showNotice {
  from {
    padding: 0;
    font-size: 0;
    margin-top: 0;
  }
  to {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
}
@keyframes removeNotice {
  0% {
    padding: 7px 20px;
    font-size: 14px;
    margin-top: 5px;
  }
  20% {
    font-size: 12px;
  }
  21% {
    font-size: 0;
    padding: 7px 10px;
  }
  100% {
    padding: 0;
    margin-top: 0;
    font-size: 0;
  }
}
.dplayer-subtitle {
  position: absolute;
  bottom: 40px;
  width: 90%;
  left: 5%;
  text-align: center;
  color: #fff;
  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
  font-size: 20px;
}
.dplayer-subtitle.dplayer-subtitle-hide {
  display: none;
}
.dplayer-mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: none;
}
.dplayer-mask.dplayer-mask-show {
  display: block;
}
.dplayer-video-wrap {
  position: relative;
  background: #000;
  font-size: 0;
  width: 100%;
  height: 100%;
}
.dplayer-video-wrap .dplayer-video {
  width: 100%;
  height: 100%;
  display: none;
}
.dplayer-video-wrap .dplayer-video-current {
  display: block;
}
.dplayer-video-wrap .dplayer-video-prepare {
  display: none;
}
.dplayer-info-panel {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 400px;
  background: rgba(28, 28, 28, 0.8);
  padding: 10px;
  color: #fff;
  font-size: 12px;
  border-radius: 2px;
}
.dplayer-info-panel-hide {
  display: none;
}
.dplayer-info-panel .dplayer-info-panel-close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item > span {
  display: inline-block;
  vertical-align: middle;
  line-height: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dplayer-info-panel .dplayer-info-panel-item-title {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.dplayer-info-panel .dplayer-info-panel-item-data {
  width: 260px;
}
`,`.dplayer {
    position: relative;
    overflow: hidden;
    user-select: none;
    line-height: 1;

    * {
        box-sizing: content-box;
    }

    svg {
        width: 100%;
        height: 100%;

        path,
        circle {
            fill: #fff;
        }
    }

    &:-webkit-full-screen {
        width: 100%;
        height: 100%;
        background: #000;
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        margin: 0;
        padding: 0;
        transform: translate(0, 0);
        
    }

    &.dplayer-no-danmaku {
        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {
            .dplayer-setting-showdan,
            .dplayer-setting-danmaku,
            .dplayer-setting-danunlimit {
                display: none;
            }
        }

        .dplayer-controller .dplayer-icons .dplayer-comment {
            display: none;
        }

        .dplayer-danmaku {
            display: none;
        }
    }

    &.dplayer-live {
        .dplayer-time {
            display: none;
        }
        .dplayer-bar-wrap {
            display: none;
        }
        .dplayer-setting-speed {
            display: none;
        }
        .dplayer-setting-loop {
            display: none;
        }

        &.dplayer-no-danmaku {
            .dplayer-setting {
                display: none;
            }
        }
    }

    &.dplayer-arrow {
        .dplayer-danmaku {
            font-size: 18px;
        }
        .dplayer-icon {
            margin: 0 -3px;
        }
    }

    &.dplayer-playing {
        .dplayer-danmaku .dplayer-danmaku-move {
            animation-play-state: running;
        }

        @media (min-width: 900px) {
            .dplayer-controller-mask {
                opacity: 0;
            }
            .dplayer-controller {
                opacity: 0;
            }

            &:hover {
                .dplayer-controller-mask {
                    opacity: 1;
                }
                .dplayer-controller {
                    opacity: 1;
                }
            }
        }
    }

    &.dplayer-loading {
        .dplayer-bezel .diplayer-loading-icon {
            display: block;
        }
    }

    &.dplayer-loading,
    &.dplayer-paused {
        .dplayer-danmaku,
        .dplayer-danmaku-move {
            animation-play-state: paused;
        }
    }

    &.dplayer-hide-controller {
        cursor: none;

        .dplayer-controller-mask {
            opacity: 0;
            transform: translateY(100%);
        }
        .dplayer-controller {
            opacity: 0;
            transform: translateY(100%);
        }
    }
    &.dplayer-show-controller {
        .dplayer-controller-mask {
            opacity: 1;
        }
        .dplayer-controller {
            opacity: 1;
        }
    }
    &.dplayer-fulled {
        position: fixed;
        z-index: 100000;
        left: 0;
        top: 0;
        width: 100% !important;
        height: 100% !important;
    }
    &.dplayer-mobile {
        .dplayer-controller .dplayer-icons {
            .dplayer-volume,
            .dplayer-camera-icon,
            .dplayer-airplay-icon,
            .dplayer-chromecast-icon,
            .dplayer-play-icon {
                display: none;
            }
            .dplayer-full .dplayer-full-in-icon {
                position: static;
                display: inline-block;
            }
        }

        .dplayer-bar-time {
            display: none;
        }

        &.dplayer-hide-controller {
            .dplayer-mobile-play {
                display: none;
            }
        }

        .dplayer-mobile-play {
            display: block;
        }
    }
}

// To hide scroll bar, apply this class to <body>
.dplayer-web-fullscreen-fix {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
}
`,`@import '../../node_modules/balloon-css/balloon.css';

[data-balloon]:before {
    display: none;
}

[data-balloon]:after {
    padding: 0.3em 0.7em;
    background: rgba(17, 17, 17, 0.7);
}

[data-balloon][data-balloon-pos="up"]:after {
    margin-bottom: 0;
}`,`.dplayer-bezel {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    pointer-events: none;
    .dplayer-bezel-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -26px 0 0 -26px;
        height: 52px;
        width: 52px;
        padding: 12px;
        box-sizing: border-box;
        background: rgba(0, 0, 0, .5);
        border-radius: 50%;
        opacity: 0;
        pointer-events: none;
        &.dplayer-bezel-transition {
            animation: bezel-hide .5s linear;
        }
        @keyframes bezel-hide {
            from {
                opacity: 1;
                transform: scale(1);
            }
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
    }
    .dplayer-danloading {
        position: absolute;
        top: 50%;
        margin-top: -7px;
        width: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        animation: my-face 5s infinite ease-in-out;
    }
    .diplayer-loading-icon {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -18px 0 0 -18px;
        height: 36px;
        width: 36px;
        pointer-events: none;
        .diplayer-loading-hide {
            display: none;
        }
        .diplayer-loading-dot {
            animation: diplayer-loading-dot-fade .8s ease infinite;
            opacity: 0;
            transform-origin: 4px 4px;
            each(range(7), {
                &.diplayer-loading-dot-@{value} {
                    animation-delay: (@value * 0.1s);
                }
            });
        }
        @keyframes diplayer-loading-dot-fade {
            0% {
                opacity: .7;
                transform: scale(1.2, 1.2)
            }
            50% {
                opacity: .25;
                transform: scale(.9, .9)
            }
            to {
                opacity: .25;
                transform: scale(.85, .85)
            }
        }
    }
}`,`.dplayer-notice-list{
    position: absolute;
    bottom: 60px;
    left: 20px;

    .dplayer-notice {
        border-radius: 2px;
        background: rgba(28, 28, 28, 0.9);
        transition: all .3s ease-in-out;
        overflow: hidden;
        color: #fff;
        display: table;
        pointer-events: none;
        animation: showNotice .3s ease 1 forwards;
    }

    .remove-notice{
        animation: removeNotice .3s ease 1 forwards;
    }
}

@keyframes showNotice {
    from {
        padding: 0;
        font-size: 0;
        margin-top: 0;
    }
    to {
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
}

@keyframes removeNotice {
    0%{
        padding: 7px 20px;
        font-size: 14px;
        margin-top: 5px;
    }
    20%{
        font-size: 12px;
    }
    21%{
        font-size: 0;
        padding: 7px 10px;
    }
    100%{
        padding: 0;
        margin-top: 0;
        font-size: 0;
    }
}
`,`.dplayer-controller-mask {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;
    height: 98px;
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: all 0.3s ease;
}

.dplayer-controller {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 41px;
    padding: 0 20px;
    user-select: none;
    transition: all 0.3s ease;
    &.dplayer-controller-comment {
        .dplayer-icons {
            display: none;
        }
        .dplayer-icons.dplayer-comment-box {
            display: block;
        }
    }
    .dplayer-bar-wrap {
        padding: 5px 0;
        cursor: pointer;
        position: absolute;
        bottom: 33px;
        width: calc(100% - 40px);
        height: 3px;
        &:hover {
            .dplayer-bar .dplayer-played .dplayer-thumb {
                transform: scale(1);
            }
            .dplayer-highlight {
                display: block;
                width: 8px;
                transform: translateX(-4px);
                top: 4px;
                height: 40%;
            }
        }
        .dplayer-highlight {
            z-index: 12;
            position: absolute;
            top: 5px;
            width: 6px;
            height: 20%;
            border-radius: 6px;
            background-color: #fff;
            text-align: center;
            transform: translateX(-3px);
            transition: all .2s ease-in-out;
            &:hover {
                .dplayer-highlight-text {
                    display: block;
                }
                &~.dplayer-bar-preview {
                    opacity: 0;
                }
                &~.dplayer-bar-time {
                    opacity: 0;
                }
            }
            .dplayer-highlight-text {
                display: none;
                position: absolute;
                left: 50%;
                top: -24px;
                padding: 5px 8px;
                background-color: rgba(0, 0, 0, .62);
                color: #fff;
                border-radius: 4px;
                font-size: 12px;
                white-space: nowrap;
                transform: translateX(-50%);
            }
        }
        .dplayer-bar-preview {
            position: absolute;
            background: #fff;
            pointer-events: none;
            display: none;
            background-size: 16000px 100%;
        }
        .dplayer-bar-preview-canvas {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
        }
        .dplayer-bar-time {
            &.hidden {
                opacity: 0;
            }
            position: absolute;
            left: 0px;
            top: -20px;
            border-radius: 4px;
            padding: 5px 7px;
            background-color: rgba(0, 0, 0, 0.62);
            color: #fff;
            font-size: 12px;
            text-align: center;
            opacity: 1;
            transition: opacity .1s ease-in-out;
            word-wrap: normal;
            word-break: normal;
            z-index: 2;
            pointer-events: none;
        }
        .dplayer-bar {
            position: relative;
            height: 3px;
            width: 100%;
            background: rgba(255, 255, 255, .2);
            cursor: pointer;
            .dplayer-loaded {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                background: rgba(255, 255, 255, .4);
                height: 3px;
                transition: all 0.5s ease;
                will-change: width;
            }
            .dplayer-played {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                height: 3px;
                will-change: width;
                .dplayer-thumb {
                    position: absolute;
                    top: 0;
                    right: 5px;
                    margin-top: -4px;
                    margin-right: -10px;
                    height: 11px;
                    width: 11px;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all .3s ease-in-out;
                    transform: scale(0);
                }
            }
        }
    }
    .dplayer-icons {
        height: 38px;
        position: absolute;
        bottom: 0;
        &.dplayer-comment-box {
            display: none;
            position: absolute;
            transition: all .3s ease-in-out;
            z-index: 2;
            height: 38px;
            bottom: 0;
            left: 20px;
            right: 20px;
            color: #fff;
            .dplayer-icon {
                padding: 7px;
            }
            .dplayer-comment-setting-icon {
                position: absolute;
                left: 0;
                top: 0;
            }
            .dplayer-send-icon {
                position: absolute;
                right: 0;
                top: 0;
            }
            .dplayer-comment-setting-box {
                position: absolute;
                background: rgba(28, 28, 28, 0.9);
                bottom: 41px;
                left: 0;
                box-shadow: 0 0 25px rgba(0, 0, 0, .3);
                border-radius: 4px;
                padding: 10px 10px 16px;
                font-size: 14px;
                width: 204px;
                transition: all .3s ease-in-out;
                transform: scale(0);
                &.dplayer-comment-setting-open {
                    transform: scale(1);
                }
                input[type=radio] {
                    display: none;
                }
                label {
                    cursor: pointer;
                }
                .dplayer-comment-setting-title {
                    font-size: 13px;
                    color: #fff;
                    line-height: 30px;
                }
                .dplayer-comment-setting-type {
                    font-size: 0;
                    .dplayer-comment-setting-title {
                        margin-bottom: 6px;
                    }
                    label {
                        &:nth-child(2) {
                            span {
                                border-radius: 4px 0 0 4px;
                            }
                        }
                        &:nth-child(4) {
                            span {
                                border-radius: 0 4px 4px 0;
                            }
                        }
                    }
                    span {
                        width: 33%;
                        padding: 4px 6px;
                        line-height: 16px;
                        display: inline-block;
                        font-size: 12px;
                        color: #fff;
                        border: 1px solid #fff;
                        margin-right: -1px;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;
                    }
                    input:checked+span {
                        background: #E4E4E6;
                        color: #1c1c1c;
                    }
                }
                .dplayer-comment-setting-color {
                    font-size: 0;
                    label {
                        font-size: 0;
                        padding: 6px;
                        display: inline-block;
                    }
                    span {
                        width: 22px;
                        height: 22px;
                        display: inline-block;
                        border-radius: 50%;
                        box-sizing: border-box;
                        cursor: pointer;
                        &:hover {
                            animation: my-face 5s infinite ease-in-out;
                        }
                    }
                }
            }
            .dplayer-comment-input {
                outline: none;
                border: none;
                padding: 8px 31px;
                font-size: 14px;
                line-height: 18px;
                text-align: center;
                border-radius: 4px;
                background: none;
                margin: 0;
                height: 100%;
                box-sizing: border-box;
                width: 100%;
                color: #fff;
                &::placeholder {
                    color: #fff;
                    opacity: 0.8;
                }
                &::-ms-clear {
                    display: none;
                }
            }
        }
        &.dplayer-icons-left {
            .dplayer-icon {
                padding: 7px;
            }
        }
        &.dplayer-icons-right {
            right: 20px;
            .dplayer-icon {
                padding: 8px;
            }
        }
        .dplayer-time,
        .dplayer-live-badge {
            line-height: 38px;
            color: #eee;
            text-shadow: 0 0 2px rgba(0, 0, 0, .5);
            vertical-align: middle;
            font-size: 13px;
            cursor: default;
        }
        .dplayer-live-dot {
            display: inline-block;
            width: 6px;
            height: 6px;
            vertical-align: 4%;
            margin-right: 5px;
            content: '';
            border-radius: 6px;
        }
        .dplayer-icon {
            width: 40px;
            height: 100%;
            border: none;
            background-color: transparent;
            outline: none;
            cursor: pointer;
            vertical-align: middle;
            box-sizing: border-box;
            display: inline-block;
            .dplayer-icon-content {
                transition: all .2s ease-in-out;
                opacity: .8;
            }
            &:hover {
                .dplayer-icon-content {
                    opacity: 1;
                }
            }
            &.dplayer-quality-icon {
                color: #fff;
                width: auto;
                line-height: 22px;
                font-size: 14px;
            }
            &.dplayer-comment-icon {
                padding: 10px 9px 9px;
            }
            &.dplayer-setting-icon {
                padding-top: 8.5px;
            }
            &.dplayer-volume-icon {
                width: 43px;
            }
        }
        .dplayer-volume {
            position: relative;
            display: inline-block;
            cursor: pointer;
            height: 100%;
            &:hover {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            &.dplayer-volume-active {
                .dplayer-volume-bar-wrap .dplayer-volume-bar {
                    width: 45px;
                }
                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {
                    transform: scale(1);
                }
            }
            .dplayer-volume-bar-wrap {
                display: inline-block;
                margin: 0 10px 0 -5px;
                vertical-align: middle;
                height: 100%;
                .dplayer-volume-bar {
                    position: relative;
                    top: 17px;
                    width: 0;
                    height: 3px;
                    background: #aaa;
                    transition: all 0.3s ease-in-out;
                    .dplayer-volume-bar-inner {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 100%;
                        transition: all 0.1s ease;
                        will-change: width;
                        .dplayer-thumb {
                            position: absolute;
                            top: 0;
                            right: 5px;
                            margin-top: -4px;
                            margin-right: -10px;
                            height: 11px;
                            width: 11px;
                            border-radius: 50%;
                            cursor: pointer;
                            transition: all .3s ease-in-out;
                            transform: scale(0);
                        }
                    }
                }
            }
        }
        .dplayer-subtitle-btn {
            display: inline-block;
            height: 100%;
        }
        .dplayer-subtitles {
            display: inline-block;
            height: 100%;
            .dplayer-subtitles-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: fit-content;
                max-width: 240px;
                min-width: 120px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: auto;
                z-index: 2;
                &.dplayer-subtitles-panel {
                    display: block;
                }
                &.dplayer-subtitles-box-open {
                    transform: scale(1);
                }
            }
            .dplayer-subtitles-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-setting {
            display: inline-block;
            height: 100%;
            .dplayer-setting-box {
                position: absolute;
                right: 0;
                bottom: 50px;
                transform: scale(0);
                width: 150px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 7px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                z-index: 2;
                &>div {
                    display: none;
                    &.dplayer-setting-origin-panel {
                        display: block;
                    }
                }
                &.dplayer-setting-box-open {
                    transform: scale(1);
                }
                &.dplayer-setting-box-narrow {
                    width: 70px;
                    text-align: center;
                }
                &.dplayer-setting-box-speed {
                    .dplayer-setting-origin-panel {
                        display: none;
                    }
                    .dplayer-setting-speed-panel {
                        display: block;
                    }
                }
            }
            .dplayer-setting-item,
            .dplayer-setting-speed-item {
                height: 30px;
                padding: 5px 10px;
                box-sizing: border-box;
                cursor: pointer;
                position: relative;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
            .dplayer-setting-danmaku {
                padding: 5px 0;
                .dplayer-label {
                    padding: 0 10px;
                    display: inline;
                }
                &:hover {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                &.dplayer-setting-danmaku-active {
                    .dplayer-label {
                        display: none;
                    }
                    .dplayer-danmaku-bar-wrap {
                        display: inline-block;
                    }
                }
                .dplayer-danmaku-bar-wrap {
                    padding: 0 10px;
                    box-sizing: border-box;
                    display: none;
                    vertical-align: middle;
                    height: 100%;
                    width: 100%;
                    .dplayer-danmaku-bar {
                        position: relative;
                        top: 8.5px;
                        width: 100%;
                        height: 3px;
                        background: #fff;
                        transition: all 0.3s ease-in-out;
                        .dplayer-danmaku-bar-inner {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            height: 100%;
                            transition: all 0.1s ease;
                            background: #aaa;
                            will-change: width;
                            .dplayer-thumb {
                                position: absolute;
                                top: 0;
                                right: 5px;
                                margin-top: -4px;
                                margin-right: -10px;
                                height: 11px;
                                width: 11px;
                                border-radius: 50%;
                                cursor: pointer;
                                transition: all .3s ease-in-out;
                                background: #aaa;
                            }
                        }
                    }
                }
            }
        }
        .dplayer-full {
            display: inline-block;
            height: 100%;
            position: relative;
            &:hover {
                .dplayer-full-in-icon {
                    display: block;
                }
            }
            .dplayer-full-in-icon {
                position: absolute;
                top: -30px;
                z-index: 1;
                display: none;
            }
        }
        .dplayer-quality {
            position: relative;
            display: inline-block;
            height: 100%;
            z-index: 2;
            &:hover {
                .dplayer-quality-list {
                    display: block;
                }
                .dplayer-quality-mask {
                    display: block;
                }
            }
            .dplayer-quality-mask {
                display: none;
                position: absolute;
                bottom: 38px;
                left: -18px;
                width: 80px;
                padding-bottom: 12px;
            }
            .dplayer-quality-list {
                display: none;
                font-size: 12px;
                width: 80px;
                border-radius: 2px;
                background: rgba(28, 28, 28, 0.9);
                padding: 5px 0;
                transition: all .3s ease-in-out;
                overflow: hidden;
                color: #fff;
                text-align: center;
            }
            .dplayer-quality-item {
                height: 25px;
                box-sizing: border-box;
                cursor: pointer;
                line-height: 25px;
                &:hover {
                    background-color: rgba(255, 255, 255, .1);
                }
            }
        }
        .dplayer-comment {
            display: inline-block;
            height: 100%;
        }
        .dplayer-label {
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            white-space: nowrap;
        }
        .dplayer-toggle {
            width: 32px;
            height: 20px;
            text-align: center;
            font-size: 0;
            vertical-align: middle;
            position: absolute;
            top: 5px;
            right: 10px;
            input {
                max-height: 0;
                max-width: 0;
                display: none;
            }
            input+label {
                display: inline-block;
                position: relative;
                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
                border: 1px solid rgb(223, 223, 223);
                height: 20px;
                width: 32px;
                border-radius: 10px;
                box-sizing: border-box;
                cursor: pointer;
                transition: .2s ease-in-out;
            }
            input+label:before {
                content: "";
                position: absolute;
                display: block;
                height: 18px;
                width: 18px;
                top: 0;
                left: 0;
                border-radius: 15px;
                transition: .2s ease-in-out;
            }
            input+label:after {
                content: "";
                position: absolute;
                display: block;
                left: 0;
                top: 0;
                border-radius: 15px;
                background: #fff;
                transition: .2s ease-in-out;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                height: 18px;
                width: 18px;
            }
            input:checked+label {
                border-color: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:before {
                width: 30px;
                background: rgba(255, 255, 255, 0.5);
            }
            input:checked+label:after {
                left: 12px;
            }
        }
    }
}

.dplayer-mobile-play {
    display: none;
    width: 50px;
    height: 50px;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    opacity: 0.8;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}`,`.dplayer-danmaku {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 22px;
    color: #fff;
    .dplayer-danmaku-item {
        display: inline-block;
        pointer-events: none;
        user-select: none;
        cursor: default;
        white-space: nowrap;
        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);
        &--demo {
            position: absolute;
            visibility: hidden;
        }
    }
    .dplayer-danmaku-right {
        position: absolute;
        right: 0;
        transform: translateX(100%);
        &.dplayer-danmaku-move {
            will-change: transform;
            animation-name: 'danmaku';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku {
        from {
            transform: translateX(100%);
        }
    }
    .dplayer-danmaku-top,
    .dplayer-danmaku-bottom {
        position: absolute;
        width: 100%;
        text-align: center;
        visibility: hidden;
        &.dplayer-danmaku-move {
            will-change: visibility;
            animation-name: 'danmaku-center';
            animation-timing-function: linear;
            animation-play-state: paused;
        }
    }
    @keyframes danmaku-center {
        from {
            visibility: visible;
        }
        to {
            visibility: visible;
        }
    }
}`,`.dplayer-logo {
    pointer-events: none;
    position: absolute;
    left: 20px;
    top: 20px;
    max-width: 50px;
    max-height: 50px;
    img {
        max-width: 100%;
        max-height: 100%;
        background: none;
    }
}`,`.dplayer-menu {
    position: absolute;
    width: 170px;
    border-radius: 2px;
    background: rgba(28, 28, 28, 0.85);
    padding: 5px 0;
    overflow: hidden;
    z-index: 3;
    display: none;
    &.dplayer-menu-show {
        display: block;
    }
    .dplayer-menu-item {
        height: 30px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
            background-color: rgba(255, 255, 255, .1);
        }
        a {
            display: inline-block;
            padding: 0 10px;
            line-height: 30px;
            color: #eee;
            font-size: 13px;
            display: inline-block;
            vertical-align: middle;
            width: 100%;
            box-sizing: border-box;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            &:hover {
                text-decoration: none;
            }
        }
    }
}`,`.dplayer-subtitle {
    position: absolute;
    bottom: 40px;
    width: 90%;
    left: 5%;
    text-align: center;
    color: #fff;
    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    &.dplayer-subtitle-hide {
        display: none;
    }
}`,`.dplayer-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: none;
    &.dplayer-mask-show {
        display: block;
    }
}

.dplayer-video-wrap {
    position: relative;
    background: #000;
    font-size: 0;
    width: 100%;
    height: 100%;
    .dplayer-video {
        width: 100%;
        height: 100%;
        display: none;
    }
    .dplayer-video-current {
        display: block;
    }
    .dplayer-video-prepare {
        display: none;
    }
}`,`.dplayer-info-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 400px;
    background: rgba(28, 28, 28, 0.8);
    padding: 10px;
    color: #fff;
    font-size: 12px;
    border-radius: 2px;

    &-hide {
        display: none;
    }

    .dplayer-info-panel-close {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .dplayer-info-panel-item {
        & > span {
            display: inline-block;
            vertical-align: middle;
            line-height: 15px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }

    .dplayer-info-panel-item-title {
        width: 100px;
        text-align: right;
        margin-right: 10px;
    }
    
    .dplayer-info-panel-item-data {
        width: 260px;
    }
}`],sourceRoot:""}]);const L=C},856:s=>{var o=[];function d(u){for(var h=-1,m=0;m<o.length;m++)if(o[m].identifier===u){h=m;break}return h}function l(u,h){for(var m={},g=[],v=0;v<u.length;v++){var E=u[v],C=h.base?E[0]+h.base:E[0],I=m[C]||0,L="".concat(C," ").concat(I);m[C]=I+1;var R=d(L),_={css:E[1],media:E[2],sourceMap:E[3],supports:E[4],layer:E[5]};if(R!==-1)o[R].references++,o[R].updater(_);else{var N=c(_,h);h.byIndex=v,o.splice(v,0,{identifier:L,updater:N,references:1})}g.push(L)}return g}function c(u,h){var m=h.domAPI(h);return m.update(u),function(g){if(g){if(g.css===u.css&&g.media===u.media&&g.sourceMap===u.sourceMap&&g.supports===u.supports&&g.layer===u.layer)return;m.update(u=g)}else m.remove()}}s.exports=function(u,h){var m=l(u=u||[],h=h||{});return function(g){g=g||[];for(var v=0;v<m.length;v++){var E=d(m[v]);o[E].references--}for(var C=l(g,h),I=0;I<m.length;I++){var L=d(m[I]);o[L].references===0&&(o[L].updater(),o.splice(L,1))}m=C}}},370:s=>{var o={};s.exports=function(d,l){var c=function(u){if(o[u]===void 0){var h=document.querySelector(u);if(window.HTMLIFrameElement&&h instanceof window.HTMLIFrameElement)try{h=h.contentDocument.head}catch{h=null}o[u]=h}return o[u]}(d);if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(l)}},278:s=>{s.exports=function(o){var d=document.createElement("style");return o.setAttributes(d,o.attributes),o.insert(d,o.options),d}},458:(s,o,d)=>{s.exports=function(l){var c=d.nc;c&&l.setAttribute("nonce",c)}},470:s=>{s.exports=function(o){var d=o.insertStyleElement(o);return{update:function(l){(function(c,u,h){var m="";h.supports&&(m+="@supports (".concat(h.supports,") {")),h.media&&(m+="@media ".concat(h.media," {"));var g=h.layer!==void 0;g&&(m+="@layer".concat(h.layer.length>0?" ".concat(h.layer):""," {")),m+=h.css,g&&(m+="}"),h.media&&(m+="}"),h.supports&&(m+="}");var v=h.sourceMap;v&&typeof btoa<"u"&&(m+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(v))))," */")),u.styleTagTransform(m,c,u.options)})(d,o,l)},remove:function(){(function(l){if(l.parentNode===null)return!1;l.parentNode.removeChild(l)})(d)}}}},488:s=>{s.exports=function(o,d){if(d.styleSheet)d.styleSheet.cssText=o;else{for(;d.firstChild;)d.removeChild(d.firstChild);d.appendChild(document.createTextNode(o))}}},251:s=>{s.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},113:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},193:s=>{s.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},807:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},300:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},574:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},182:s=>{s.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},965:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},74:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},428:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},254:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},934:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},410:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},644:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},324:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},437:s=>{s.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},897:(s,o,d)=>{var l=typeof self<"u"?self:typeof window<"u"?window:d.g!==void 0?d.g:{},c=Object.create(l),u=/["&'<>]/;function h(m){return typeof m!="string"&&(m=m==null?"":typeof m=="function"?h(m.call(m)):JSON.stringify(m)),m}c.$escape=function(m){return function(g){var v=""+g,E=u.exec(v);if(!E)return g;var C="",I=void 0,L=void 0,R=void 0;for(I=E.index,L=0;I<v.length;I++){switch(v.charCodeAt(I)){case 34:R="&#34;";break;case 38:R="&#38;";break;case 39:R="&#39;";break;case 60:R="&#60;";break;case 62:R="&#62;";break;default:continue}L!==I&&(C+=v.substring(L,I)),L=I+1,C+=R}return L!==I?C+v.substring(L,I):C}(h(m))},c.$each=function(m,g){if(Array.isArray(m))for(var v=0,E=m.length;v<E;v++)g(m[v],v);else for(var C in m)g(m[C],C)},s.exports=c},471:(s,o,d)=>{s.exports=d(897)},352:s=>{s.exports=function(o){var d=[];return d.toString=function(){return this.map(function(l){var c="",u=l[5]!==void 0;return l[4]&&(c+="@supports (".concat(l[4],") {")),l[2]&&(c+="@media ".concat(l[2]," {")),u&&(c+="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {")),c+=o(l),u&&(c+="}"),l[2]&&(c+="}"),l[4]&&(c+="}"),c}).join("")},d.i=function(l,c,u,h,m){typeof l=="string"&&(l=[[null,l,void 0]]);var g={};if(u)for(var v=0;v<this.length;v++){var E=this[v][0];E!=null&&(g[E]=!0)}for(var C=0;C<l.length;C++){var I=[].concat(l[C]);u&&g[I[0]]||(m!==void 0&&(I[5]===void 0||(I[1]="@layer".concat(I[5].length>0?" ".concat(I[5]):""," {").concat(I[1],"}")),I[5]=m),c&&(I[2]&&(I[1]="@media ".concat(I[2]," {").concat(I[1],"}")),I[2]=c),h&&(I[4]?(I[1]="@supports (".concat(I[4],") {").concat(I[1],"}"),I[4]=h):I[4]="".concat(h)),d.push(I))}},d}},80:s=>{s.exports=function(o,d){return d||(d={}),o&&(o=String(o.__esModule?o.default:o),/^['"].*['"]$/.test(o)&&(o=o.slice(1,-1)),d.hash&&(o+=d.hash),/["'() \t\n]|(%20)/.test(o)||d.needQuotes?'"'.concat(o.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):o)}},415:s=>{s.exports=function(o){var d=o[1],l=o[3];if(!l)return d;if(typeof btoa=="function"){var c=btoa(unescape(encodeURIComponent(JSON.stringify(l)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),h="/*# ".concat(u," */");return[d].concat([h]).join(`
`)}return[d].join(`
`)}},937:s=>{function o(d){return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},o(d)}s.exports=(typeof self>"u"?"undefined":o(self))=="object"?self.FormData:window.FormData},831:s=>{s.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},n={};function i(s){var o=n[s];if(o!==void 0)return o.exports;var d=n[s]={id:s,exports:{}};return t[s](d,d.exports,i),d.exports}i.m=t,i.n=s=>{var o=s&&s.__esModule?()=>s.default:()=>s;return i.d(o,{a:o}),o},i.d=(s,o)=>{for(var d in o)i.o(o,d)&&!i.o(s,d)&&Object.defineProperty(s,d,{enumerable:!0,get:o[d]})},i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),i.o=(s,o)=>Object.prototype.hasOwnProperty.call(s,o),i.b=document.baseURI||self.location.href,i.nc=void 0;var r={};return(()=>{i.d(r,{default:()=>Pc});var s=i(856),o=i.n(s),d=i(470),l=i.n(d),c=i(370),u=i.n(c),h=i(458),m=i.n(h),g=i(278),v=i.n(g),E=i(488),C=i.n(E),I=i(685),L={};L.styleTagTransform=C(),L.setAttributes=m(),L.insert=u().bind(null,"head"),L.domAPI=l(),L.insertStyleElement=v(),o()(I.Z,L),I.Z&&I.Z.locals&&I.Z.locals;function R(p){return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},R(p)}function _(p,y){this.name="AggregateError",this.errors=p,this.message=y||""}_.prototype=Error.prototype;function N(p){return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},N(p)}var P=setTimeout;function O(p){return!!(p&&p.length!==void 0)}function U(){}function D(p){if(!(this instanceof D))throw new TypeError("Promises must be constructed via new");if(typeof p!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],W(p,this)}function V(p,y){for(;p._state===3;)p=p._value;p._state!==0?(p._handled=!0,D._immediateFn(function(){var S=p._state===1?y.onFulfilled:y.onRejected;if(S!==null){var f;try{f=S(p._value)}catch(A){return void se(y.promise,A)}Y(y.promise,f)}else(p._state===1?Y:se)(y.promise,p._value)})):p._deferreds.push(y)}function Y(p,y){try{if(y===p)throw new TypeError("A promise cannot be resolved with itself.");if(y&&(N(y)==="object"||typeof y=="function")){var S=y.then;if(y instanceof D)return p._state=3,p._value=y,void J(p);if(typeof S=="function")return void W((f=S,A=y,function(){f.apply(A,arguments)}),p)}p._state=1,p._value=y,J(p)}catch(b){se(p,b)}var f,A}function se(p,y){p._state=2,p._value=y,J(p)}function J(p){p._state===2&&p._deferreds.length===0&&D._immediateFn(function(){p._handled||D._unhandledRejectionFn(p._value)});for(var y=0,S=p._deferreds.length;y<S;y++)V(p,p._deferreds[y]);p._deferreds=null}function ee(p,y,S){this.onFulfilled=typeof p=="function"?p:null,this.onRejected=typeof y=="function"?y:null,this.promise=S}function W(p,y){var S=!1;try{p(function(f){S||(S=!0,Y(y,f))},function(f){S||(S=!0,se(y,f))})}catch(f){if(S)return;S=!0,se(y,f)}}D.prototype.catch=function(p){return this.then(null,p)},D.prototype.then=function(p,y){var S=new this.constructor(U);return V(this,new ee(p,y,S)),S},D.prototype.finally=function(p){var y=this.constructor;return this.then(function(S){return y.resolve(p()).then(function(){return S})},function(S){return y.resolve(p()).then(function(){return y.reject(S)})})},D.all=function(p){return new D(function(y,S){if(!O(p))return S(new TypeError("Promise.all accepts an array"));var f=Array.prototype.slice.call(p);if(f.length===0)return y([]);var A=f.length;function b(k,w){try{if(w&&(N(w)==="object"||typeof w=="function")){var M=w.then;if(typeof M=="function")return void M.call(w,function(G){b(k,G)},S)}f[k]=w,--A==0&&y(f)}catch(G){S(G)}}for(var T=0;T<f.length;T++)b(T,f[T])})},D.any=function(p){var y=this;return new y(function(S,f){if(!p||p.length===void 0)return f(new TypeError("Promise.any accepts an array"));var A=Array.prototype.slice.call(p);if(A.length===0)return f();for(var b=[],T=0;T<A.length;T++)try{y.resolve(A[T]).then(S).catch(function(k){b.push(k),b.length===A.length&&f(new _(b,"All promises were rejected"))})}catch(k){f(k)}})},D.allSettled=function(p){return new this(function(y,S){if(!p||p.length===void 0)return S(new TypeError(R(p)+" "+p+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var f=Array.prototype.slice.call(p);if(f.length===0)return y([]);var A=f.length;function b(k,w){if(w&&(R(w)==="object"||typeof w=="function")){var M=w.then;if(typeof M=="function")return void M.call(w,function(G){b(k,G)},function(G){f[k]={status:"rejected",reason:G},--A==0&&y(f)})}f[k]={status:"fulfilled",value:w},--A==0&&y(f)}for(var T=0;T<f.length;T++)b(T,f[T])})},D.resolve=function(p){return p&&N(p)==="object"&&p.constructor===D?p:new D(function(y){y(p)})},D.reject=function(p){return new D(function(y,S){S(p)})},D.race=function(p){return new D(function(y,S){if(!O(p))return S(new TypeError("Promise.race accepts an array"));for(var f=0,A=p.length;f<A;f++)D.resolve(p[f]).then(y,S)})},D._immediateFn=typeof setImmediate=="function"&&function(p){setImmediate(p)}||function(p){P(p,0)},D._unhandledRejectionFn=function(p){typeof console<"u"&&console&&console.warn("Possible Unhandled Promise Rejection:",p)};const ne=D;var ie=/mobile/i.test(window.navigator.userAgent);const $={secondToTime:function(p){if((p=p||0)===0||p===1/0||p.toString()==="NaN")return"00:00";var y=Math.floor(p/3600),S=Math.floor((p-3600*y)/60),f=Math.floor(p-3600*y-60*S);return(y>0?[y,S,f]:[S,f]).map(function(A){return A<10?"0"+A:""+A}).join(":")},getElementViewLeft:function(p){var y=p.offsetLeft,S=p.offsetParent,f=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;S!==null&&S!==p;)y+=S.offsetLeft,S=S.offsetParent;else for(;S!==null;)y+=S.offsetLeft,S=S.offsetParent;return y-f},getBoundingClientRectViewLeft:function(p){var y=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(p.getBoundingClientRect){if(typeof this.getBoundingClientRectViewLeft.offset!="number"){var S=document.createElement("div");S.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(S),this.getBoundingClientRectViewLeft.offset=-S.getBoundingClientRect().top-y,document.body.removeChild(S),S=null}var f=p.getBoundingClientRect(),A=this.getBoundingClientRectViewLeft.offset;return f.left+A}return this.getElementViewLeft(p)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(p){var y=p.left,S=y===void 0?0:y,f=p.top,A=f===void 0?0:f;this.isFirefox?(document.documentElement.scrollLeft=S,document.documentElement.scrollTop=A):window.scrollTo(S,A)},isMobile:ie,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(p,y){localStorage.setItem(p,y)},get:function(p){return localStorage.getItem(p)}},nameMap:{dragStart:ie?"touchstart":"mousedown",dragMove:ie?"touchmove":"mousemove",dragEnd:ie?"touchend":"mouseup"},color2Number:function(p){return p[0]==="#"&&(p=p.substr(1)),p.length===3&&(p="".concat(p[0]).concat(p[0]).concat(p[1]).concat(p[1]).concat(p[2]).concat(p[2])),parseInt(p,16)+0&16777215},number2Color:function(p){return"#"+("00000"+p.toString(16)).slice(-6)},number2Type:function(p){switch(p){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};function q(p,y){return function(){return p.apply(y,arguments)}}function de(p){return de=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},de(p)}var le,fe=Object.prototype.toString,ge=Object.getPrototypeOf,Ae=(le=Object.create(null),function(p){var y=fe.call(p);return le[y]||(le[y]=y.slice(8,-1).toLowerCase())}),ye=function(p){return p=p.toLowerCase(),function(y){return Ae(y)===p}},De=function(p){return function(y){return de(y)===p}},we=Array.isArray,$e=De("undefined"),an=ye("ArrayBuffer"),Gi=De("string"),ht=De("function"),Ut=De("number"),_t=function(p){return p!==null&&de(p)==="object"},on=function(p){if(Ae(p)!=="object")return!1;var y=ge(p);return!(y!==null&&y!==Object.prototype&&Object.getPrototypeOf(y)!==null||Symbol.toStringTag in p||Symbol.iterator in p)},ve=ye("Date"),Fe=ye("File"),Ge=ye("Blob"),ft=ye("FileList"),Ve=ye("URLSearchParams");function ze(p,y){var S,f,A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},b=A.allOwnKeys,T=b!==void 0&&b;if(p!=null)if(de(p)!=="object"&&(p=[p]),we(p))for(S=0,f=p.length;S<f;S++)y.call(null,p[S],S,p);else{var k,w=T?Object.getOwnPropertyNames(p):Object.keys(p),M=w.length;for(S=0;S<M;S++)k=w[S],y.call(null,p[k],k,p)}}function it(p,y){y=y.toLowerCase();for(var S,f=Object.keys(p),A=f.length;A-- >0;)if(y===(S=f[A]).toLowerCase())return S;return null}var $t,Pt,ln=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:Om,bt=function(p){return!$e(p)&&p!==ln},Wn=($t=typeof Uint8Array<"u"&&ge(Uint8Array),function(p){return $t&&p instanceof $t}),Ki=ye("HTMLFormElement"),dn=(Pt=Object.prototype.hasOwnProperty,function(p,y){return Pt.call(p,y)}),zn=ye("RegExp"),Et=function(p,y){var S=Object.getOwnPropertyDescriptors(p),f={};ze(S,function(A,b){y(A,b,p)!==!1&&(f[b]=A)}),Object.defineProperties(p,f)};const H={isArray:we,isArrayBuffer:an,isBuffer:function(p){return p!==null&&!$e(p)&&p.constructor!==null&&!$e(p.constructor)&&ht(p.constructor.isBuffer)&&p.constructor.isBuffer(p)},isFormData:function(p){var y="[object FormData]";return p&&(typeof FormData=="function"&&p instanceof FormData||fe.call(p)===y||ht(p.toString)&&p.toString()===y)},isArrayBufferView:function(p){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(p):p&&p.buffer&&an(p.buffer)},isString:Gi,isNumber:Ut,isBoolean:function(p){return p===!0||p===!1},isObject:_t,isPlainObject:on,isUndefined:$e,isDate:ve,isFile:Fe,isBlob:Ge,isRegExp:zn,isFunction:ht,isStream:function(p){return _t(p)&&ht(p.pipe)},isURLSearchParams:Ve,isTypedArray:Wn,isFileList:ft,forEach:ze,merge:function p(){for(var y=bt(this)&&this||{},S=y.caseless,f={},A=function(k,w){var M=S&&it(f,w)||w;on(f[M])&&on(k)?f[M]=p(f[M],k):on(k)?f[M]=p({},k):we(k)?f[M]=k.slice():f[M]=k},b=0,T=arguments.length;b<T;b++)arguments[b]&&ze(arguments[b],A);return f},extend:function(p,y,S){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},A=f.allOwnKeys;return ze(y,function(b,T){S&&ht(b)?p[T]=q(b,S):p[T]=b},{allOwnKeys:A}),p},trim:function(p){return p.trim?p.trim():p.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(p){return p.charCodeAt(0)===65279&&(p=p.slice(1)),p},inherits:function(p,y,S,f){p.prototype=Object.create(y.prototype,f),p.prototype.constructor=p,Object.defineProperty(p,"super",{value:y.prototype}),S&&Object.assign(p.prototype,S)},toFlatObject:function(p,y,S,f){var A,b,T,k={};if(y=y||{},p==null)return y;do{for(b=(A=Object.getOwnPropertyNames(p)).length;b-- >0;)T=A[b],f&&!f(T,p,y)||k[T]||(y[T]=p[T],k[T]=!0);p=S!==!1&&ge(p)}while(p&&(!S||S(p,y))&&p!==Object.prototype);return y},kindOf:Ae,kindOfTest:ye,endsWith:function(p,y,S){p=String(p),(S===void 0||S>p.length)&&(S=p.length),S-=y.length;var f=p.indexOf(y,S);return f!==-1&&f===S},toArray:function(p){if(!p)return null;if(we(p))return p;var y=p.length;if(!Ut(y))return null;for(var S=new Array(y);y-- >0;)S[y]=p[y];return S},forEachEntry:function(p,y){for(var S,f=(p&&p[Symbol.iterator]).call(p);(S=f.next())&&!S.done;){var A=S.value;y.call(p,A[0],A[1])}},matchAll:function(p,y){for(var S,f=[];(S=p.exec(y))!==null;)f.push(S);return f},isHTMLForm:Ki,hasOwnProperty:dn,hasOwnProp:dn,reduceDescriptors:Et,freezeMethods:function(p){Et(p,function(y,S){if(ht(p)&&["arguments","caller","callee"].indexOf(S)!==-1)return!1;var f=p[S];ht(f)&&(y.enumerable=!1,"writable"in y?y.writable=!1:y.set||(y.set=function(){throw Error("Can not rewrite read-only method '"+S+"'")}))})},toObjectSet:function(p,y){var S={},f=function(A){A.forEach(function(b){S[b]=!0})};return we(p)?f(p):f(String(p).split(y)),S},toCamelCase:function(p){return p.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(y,S,f){return S.toUpperCase()+f})},noop:function(){},toFiniteNumber:function(p,y){return p=+p,Number.isFinite(p)?p:y},findKey:it,global:ln,isContextDefined:bt,toJSONObject:function(p){var y=new Array(10);return function S(f,A){if(_t(f)){if(y.indexOf(f)>=0)return;if(!("toJSON"in f)){y[A]=f;var b=we(f)?[]:{};return ze(f,function(T,k){var w=S(T,A+1);!$e(w)&&(b[k]=w)}),y[A]=void 0,b}}return f}(p,0)}};function Gt(p,y,S,f,A){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=p,this.name="AxiosError",y&&(this.code=y),S&&(this.config=S),f&&(this.request=f),A&&(this.response=A)}H.inherits(Gt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:H.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var fs=Gt.prototype,ps={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(p){ps[p]={value:p}}),Object.defineProperties(Gt,ps),Object.defineProperty(fs,"isAxiosError",{value:!0}),Gt.from=function(p,y,S,f,A,b){var T=Object.create(fs);return H.toFlatObject(p,T,function(k){return k!==Error.prototype},function(k){return k!=="isAxiosError"}),Gt.call(T,p.message,y,S,f,A),T.cause=p,T.name=p.name,b&&Object.assign(T,b),T};const Te=Gt,_l=i(937);function Hi(p){return Hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},Hi(p)}function Vi(p){return H.isPlainObject(p)||H.isArray(p)}function ms(p){return H.endsWith(p,"[]")?p.slice(0,-2):p}function gs(p,y,S){return p?p.concat(y).map(function(f,A){return f=ms(f),!S&&A?"["+f+"]":f}).join(S?".":""):y}var Pl=H.toFlatObject(H,{},null,function(p){return/^is[A-Z]/.test(p)});const Qn=function(p,y,S){if(!H.isObject(p))throw new TypeError("target must be an object");y=y||new(_l||FormData);var f,A=(S=H.toFlatObject(S,{metaTokens:!0,dots:!1,indexes:!1},!1,function(te,X){return!H.isUndefined(X[te])})).metaTokens,b=S.visitor||G,T=S.dots,k=S.indexes,w=(S.Blob||typeof Blob<"u"&&Blob)&&(f=y)&&H.isFunction(f.append)&&f[Symbol.toStringTag]==="FormData"&&f[Symbol.iterator];if(!H.isFunction(b))throw new TypeError("visitor must be a function");function M(te){if(te===null)return"";if(H.isDate(te))return te.toISOString();if(!w&&H.isBlob(te))throw new Te("Blob is not supported. Use a Buffer instead.");return H.isArrayBuffer(te)||H.isTypedArray(te)?w&&typeof Blob=="function"?new Blob([te]):Buffer.from(te):te}function G(te,X,z){var ae=te;if(te&&!z&&Hi(te)==="object"){if(H.endsWith(X,"{}"))X=A?X:X.slice(0,-2),te=JSON.stringify(te);else if(H.isArray(te)&&function(ue){return H.isArray(ue)&&!ue.some(Vi)}(te)||H.isFileList(te)||H.endsWith(X,"[]")&&(ae=H.toArray(te)))return X=ms(X),ae.forEach(function(ue,Pe){!H.isUndefined(ue)&&ue!==null&&y.append(k===!0?gs([X],Pe,T):k===null?X:X+"[]",M(ue))}),!1}return!!Vi(te)||(y.append(gs(z,X,T),M(te)),!1)}var j=[],Q=Object.assign(Pl,{defaultVisitor:G,convertValue:M,isVisitable:Vi});if(!H.isObject(p))throw new TypeError("data must be an object");return function te(X,z){if(!H.isUndefined(X)){if(j.indexOf(X)!==-1)throw Error("Circular reference detected in "+z.join("."));j.push(X),H.forEach(X,function(ae,ue){(!(H.isUndefined(ae)||ae===null)&&b.call(y,ae,H.isString(ue)?ue.trim():ue,z,Q))===!0&&te(ae,z?z.concat(ue):[ue])}),j.pop()}}(p),y};function ys(p){var y={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(p).replace(/[!'()~]|%20|%00/g,function(S){return y[S]})}function As(p,y){this._pairs=[],p&&Qn(p,this,y)}var vs=As.prototype;vs.append=function(p,y){this._pairs.push([p,y])},vs.toString=function(p){var y=p?function(S){return p.call(this,S,ys)}:ys;return this._pairs.map(function(S){return y(S[0])+"="+y(S[1])},"").join("&")};const bs=As;function Bl(p){return encodeURIComponent(p).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Es(p,y,S){if(!y)return p;var f,A=S&&S.encode||Bl,b=S&&S.serialize;if(f=b?b(y,S):H.isURLSearchParams(y)?y.toString():new bs(y,S).toString(A)){var T=p.indexOf("#");T!==-1&&(p=p.slice(0,T)),p+=(p.indexOf("?")===-1?"?":"&")+f}return p}function cn(p){return cn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},cn(p)}function Ol(p,y){for(var S=0;S<y.length;S++){var f=y[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(b,T){if(cn(b)!=="object"||b===null)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var w=k.call(b,"string");if(cn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),cn(A)==="symbol"?A:String(A)),f)}var A}var Fl=function(){function p(){(function(f,A){if(!(f instanceof A))throw new TypeError("Cannot call a class as a function")})(this,p),this.handlers=[]}var y,S;return y=p,S=[{key:"use",value:function(f,A,b){return this.handlers.push({fulfilled:f,rejected:A,synchronous:!!b&&b.synchronous,runWhen:b?b.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(f){this.handlers[f]&&(this.handlers[f]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(f){H.forEach(this.handlers,function(A){A!==null&&f(A)})}}],S&&Ol(y.prototype,S),Object.defineProperty(y,"prototype",{writable:!1}),p}();const xs=Fl,Ss={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ml=typeof URLSearchParams<"u"?URLSearchParams:bs,Nl=FormData;var qi,Ul=(typeof navigator>"u"||(qi=navigator.product)!=="ReactNative"&&qi!=="NativeScript"&&qi!=="NS")&&typeof window<"u"&&typeof document<"u",$l=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function";const rt={classes:{URLSearchParams:Ml,FormData:Nl,Blob},isStandardBrowserEnv:Ul,isStandardBrowserWebWorkerEnv:$l,protocols:["http","https","file","blob","url","data"]},Ts=function(p){function y(f,A,b,T){var k=f[T++],w=Number.isFinite(+k),M=T>=f.length;return k=!k&&H.isArray(b)?b.length:k,M?(H.hasOwnProp(b,k)?b[k]=[b[k],A]:b[k]=A,!w):(b[k]&&H.isObject(b[k])||(b[k]=[]),y(f,A,b[k],T)&&H.isArray(b[k])&&(b[k]=function(G){var j,Q,te={},X=Object.keys(G),z=X.length;for(j=0;j<z;j++)te[Q=X[j]]=G[Q];return te}(b[k])),!w)}if(H.isFormData(p)&&H.isFunction(p.entries)){var S={};return H.forEachEntry(p,function(f,A){y(function(b){return H.matchAll(/\w+|\[(\w*)]/g,b).map(function(T){return T[0]==="[]"?"":T[1]||T[0]})}(f),A,S,0)}),S}return null};var Gl={"Content-Type":void 0},Xn={transitional:Ss,adapter:["xhr","http"],transformRequest:[function(p,y){var S,f=y.getContentType()||"",A=f.indexOf("application/json")>-1,b=H.isObject(p);if(b&&H.isHTMLForm(p)&&(p=new FormData(p)),H.isFormData(p))return A&&A?JSON.stringify(Ts(p)):p;if(H.isArrayBuffer(p)||H.isBuffer(p)||H.isStream(p)||H.isFile(p)||H.isBlob(p))return p;if(H.isArrayBufferView(p))return p.buffer;if(H.isURLSearchParams(p))return y.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),p.toString();if(b){if(f.indexOf("application/x-www-form-urlencoded")>-1)return function(k,w){return Qn(k,new rt.classes.URLSearchParams,Object.assign({visitor:function(M,G,j,Q){return rt.isNode&&H.isBuffer(M)?(this.append(G,M.toString("base64")),!1):Q.defaultVisitor.apply(this,arguments)}},w))}(p,this.formSerializer).toString();if((S=H.isFileList(p))||f.indexOf("multipart/form-data")>-1){var T=this.env&&this.env.FormData;return Qn(S?{"files[]":p}:p,T&&new T,this.formSerializer)}}return b||A?(y.setContentType("application/json",!1),function(k,w,M){if(H.isString(k))try{return(0,JSON.parse)(k),H.trim(k)}catch(G){if(G.name!=="SyntaxError")throw G}return(0,JSON.stringify)(k)}(p)):p}],transformResponse:[function(p){var y=this.transitional||Xn.transitional,S=y&&y.forcedJSONParsing,f=this.responseType==="json";if(p&&H.isString(p)&&(S&&!this.responseType||f)){var A=!(y&&y.silentJSONParsing)&&f;try{return JSON.parse(p)}catch(b){if(A)throw b.name==="SyntaxError"?Te.from(b,Te.ERR_BAD_RESPONSE,this,null,this.response):b}}return p}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:rt.classes.FormData,Blob:rt.classes.Blob},validateStatus:function(p){return p>=200&&p<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};H.forEach(["delete","get","head"],function(p){Xn.headers[p]={}}),H.forEach(["post","put","patch"],function(p){Xn.headers[p]=H.merge(Gl)});const Yi=Xn;var Kl=H.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);function un(p){return un=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},un(p)}function Cs(p,y){(y==null||y>p.length)&&(y=p.length);for(var S=0,f=new Array(y);S<y;S++)f[S]=p[S];return f}function Ls(p,y){for(var S=0;S<y.length;S++){var f=y[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(b,T){if(un(b)!=="object"||b===null)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var w=k.call(b,"string");if(un(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),un(A)==="symbol"?A:String(A)),f)}var A}var Is=Symbol("internals");function hn(p){return p&&String(p).trim().toLowerCase()}function Zn(p){return p===!1||p==null?p:H.isArray(p)?p.map(Zn):String(p)}function ks(p,y,S,f){return H.isFunction(f)?f.call(this,y,S):H.isString(y)?H.isString(f)?y.indexOf(f)!==-1:H.isRegExp(f)?f.test(y):void 0:void 0}var Jn=function(p,y){function S(T){(function(k,w){if(!(k instanceof w))throw new TypeError("Cannot call a class as a function")})(this,S),T&&this.set(T)}var f,A,b;return f=S,A=[{key:"set",value:function(T,k,w){var M=this;function G(ue,Pe,Re){var Ce=hn(Pe);if(!Ce)throw new Error("header name must be a non-empty string");var Tt=H.findKey(M,Ce);(!Tt||M[Tt]===void 0||Re===!0||Re===void 0&&M[Tt]!==!1)&&(M[Tt||Pe]=Zn(ue))}var j,Q,te,X,z,ae=function(ue,Pe){return H.forEach(ue,function(Re,Ce){return G(Re,Ce,Pe)})};return H.isPlainObject(T)||T instanceof this.constructor?ae(T,k):H.isString(T)&&(T=T.trim())&&!/^[-_a-zA-Z]+$/.test(T.trim())?ae((z={},(j=T)&&j.split(`
`).forEach(function(ue){X=ue.indexOf(":"),Q=ue.substring(0,X).trim().toLowerCase(),te=ue.substring(X+1).trim(),!Q||z[Q]&&Kl[Q]||(Q==="set-cookie"?z[Q]?z[Q].push(te):z[Q]=[te]:z[Q]=z[Q]?z[Q]+", "+te:te)}),z),k):T!=null&&G(k,T,w),this}},{key:"get",value:function(T,k){if(T=hn(T)){var w=H.findKey(this,T);if(w){var M=this[w];if(!k)return M;if(k===!0)return function(G){for(var j,Q=Object.create(null),te=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;j=te.exec(G);)Q[j[1]]=j[2];return Q}(M);if(H.isFunction(k))return k.call(this,M,w);if(H.isRegExp(k))return k.exec(M);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(T,k){if(T=hn(T)){var w=H.findKey(this,T);return!(!w||k&&!ks(0,this[w],w,k))}return!1}},{key:"delete",value:function(T,k){var w=this,M=!1;function G(j){if(j=hn(j)){var Q=H.findKey(w,j);!Q||k&&!ks(0,w[Q],Q,k)||(delete w[Q],M=!0)}}return H.isArray(T)?T.forEach(G):G(T),M}},{key:"clear",value:function(){return Object.keys(this).forEach(this.delete.bind(this))}},{key:"normalize",value:function(T){var k=this,w={};return H.forEach(this,function(M,G){var j=H.findKey(w,G);if(j)return k[j]=Zn(M),void delete k[G];var Q=T?function(te){return te.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(X,z,ae){return z.toUpperCase()+ae})}(G):String(G).trim();Q!==G&&delete k[G],k[Q]=Zn(M),w[Q]=!0}),this}},{key:"concat",value:function(){for(var T,k=arguments.length,w=new Array(k),M=0;M<k;M++)w[M]=arguments[M];return(T=this.constructor).concat.apply(T,[this].concat(w))}},{key:"toJSON",value:function(T){var k=Object.create(null);return H.forEach(this,function(w,M){w!=null&&w!==!1&&(k[M]=T&&H.isArray(w)?w.join(", "):w)}),k}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(T){var k,w,M=(w=2,function(G){if(Array.isArray(G))return G}(k=T)||function(G,j){var Q=G==null?null:typeof Symbol<"u"&&G[Symbol.iterator]||G["@@iterator"];if(Q!=null){var te,X,z,ae,ue=[],Pe=!0,Re=!1;try{if(z=(Q=Q.call(G)).next,j===0){if(Object(Q)!==Q)return;Pe=!1}else for(;!(Pe=(te=z.call(Q)).done)&&(ue.push(te.value),ue.length!==j);Pe=!0);}catch(Ce){Re=!0,X=Ce}finally{try{if(!Pe&&Q.return!=null&&(ae=Q.return(),Object(ae)!==ae))return}finally{if(Re)throw X}}return ue}}(k,w)||function(G,j){if(G){if(typeof G=="string")return Cs(G,j);var Q=Object.prototype.toString.call(G).slice(8,-1);return Q==="Object"&&G.constructor&&(Q=G.constructor.name),Q==="Map"||Q==="Set"?Array.from(G):Q==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Q)?Cs(G,j):void 0}}(k,w)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}());return M[0]+": "+M[1]}).join(`
`)}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],b=[{key:"from",value:function(T){return T instanceof this?T:new this(T)}},{key:"concat",value:function(T){for(var k=new this(T),w=arguments.length,M=new Array(w>1?w-1:0),G=1;G<w;G++)M[G-1]=arguments[G];return M.forEach(function(j){return k.set(j)}),k}},{key:"accessor",value:function(T){var k=(this[Is]=this[Is]={accessors:{}}).accessors,w=this.prototype;function M(G){var j=hn(G);k[j]||(function(Q,te){var X=H.toCamelCase(" "+te);["get","set","has"].forEach(function(z){Object.defineProperty(Q,z+X,{value:function(ae,ue,Pe){return this[z].call(this,te,ae,ue,Pe)},configurable:!0})})}(w,G),k[j]=!0)}return H.isArray(T)?T.forEach(M):M(T),this}}],A&&Ls(f.prototype,A),b&&Ls(f,b),Object.defineProperty(f,"prototype",{writable:!1}),S}();Jn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),H.freezeMethods(Jn.prototype),H.freezeMethods(Jn);const pt=Jn;function ji(p,y){var S=this||Yi,f=y||S,A=pt.from(f.headers),b=f.data;return H.forEach(p,function(T){b=T.call(S,b,A.normalize(),y?y.status:void 0)}),A.normalize(),b}function ws(p){return!(!p||!p.__CANCEL__)}function Rs(p,y,S){Te.call(this,p??"canceled",Te.ERR_CANCELED,y,S),this.name="CanceledError"}H.inherits(Rs,Te,{__CANCEL__:!0});const ei=Rs,Hl=rt.isStandardBrowserEnv?{write:function(p,y,S,f,A,b){var T=[];T.push(p+"="+encodeURIComponent(y)),H.isNumber(S)&&T.push("expires="+new Date(S).toGMTString()),H.isString(f)&&T.push("path="+f),H.isString(A)&&T.push("domain="+A),b===!0&&T.push("secure"),document.cookie=T.join("; ")},read:function(p){var y=document.cookie.match(new RegExp("(^|;\\s*)("+p+")=([^;]*)"));return y?decodeURIComponent(y[3]):null},remove:function(p){this.write(p,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Ds(p,y){return p&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(y)?function(S,f){return f?S.replace(/\/+$/,"")+"/"+f.replace(/^\/+/,""):S}(p,y):y}const Vl=rt.isStandardBrowserEnv?function(){var p,y=/(msie|trident)/i.test(navigator.userAgent),S=document.createElement("a");function f(A){var b=A;return y&&(S.setAttribute("href",b),b=S.href),S.setAttribute("href",b),{href:S.href,protocol:S.protocol?S.protocol.replace(/:$/,""):"",host:S.host,search:S.search?S.search.replace(/^\?/,""):"",hash:S.hash?S.hash.replace(/^#/,""):"",hostname:S.hostname,port:S.port,pathname:S.pathname.charAt(0)==="/"?S.pathname:"/"+S.pathname}}return p=f(window.location.href),function(A){var b=H.isString(A)?f(A):A;return b.protocol===p.protocol&&b.host===p.host}}():function(){return!0};function _s(p,y){var S=0,f=function(A,b){A=A||10;var T,k=new Array(A),w=new Array(A),M=0,G=0;return b=b!==void 0?b:1e3,function(j){var Q=Date.now(),te=w[G];T||(T=Q),k[M]=j,w[M]=Q;for(var X=G,z=0;X!==M;)z+=k[X++],X%=A;if((M=(M+1)%A)===G&&(G=(G+1)%A),!(Q-T<b)){var ae=te&&Q-te;return ae?Math.round(1e3*z/ae):void 0}}}(50,250);return function(A){var b=A.loaded,T=A.lengthComputable?A.total:void 0,k=b-S,w=f(k);S=b;var M={loaded:b,total:T,progress:T?b/T:void 0,bytes:k,rate:w||void 0,estimated:w&&T&&b<=T?(T-b)/w:void 0,event:A};M[y?"download":"upload"]=!0,p(M)}}var Wi={http:null,xhr:typeof XMLHttpRequest<"u"&&function(p){return new Promise(function(y,S){var f,A=p.data,b=pt.from(p.headers).normalize(),T=p.responseType;function k(){p.cancelToken&&p.cancelToken.unsubscribe(f),p.signal&&p.signal.removeEventListener("abort",f)}H.isFormData(A)&&(rt.isStandardBrowserEnv||rt.isStandardBrowserWebWorkerEnv)&&b.setContentType(!1);var w=new XMLHttpRequest;if(p.auth){var M=p.auth.username||"",G=p.auth.password?unescape(encodeURIComponent(p.auth.password)):"";b.set("Authorization","Basic "+btoa(M+":"+G))}var j=Ds(p.baseURL,p.url);function Q(){if(w){var ae=pt.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders());(function(ue,Pe,Re){var Ce=Re.config.validateStatus;Re.status&&Ce&&!Ce(Re.status)?Pe(new Te("Request failed with status code "+Re.status,[Te.ERR_BAD_REQUEST,Te.ERR_BAD_RESPONSE][Math.floor(Re.status/100)-4],Re.config,Re.request,Re)):ue(Re)})(function(ue){y(ue),k()},function(ue){S(ue),k()},{data:T&&T!=="text"&&T!=="json"?w.response:w.responseText,status:w.status,statusText:w.statusText,headers:ae,config:p,request:w}),w=null}}if(w.open(p.method.toUpperCase(),Es(j,p.params,p.paramsSerializer),!0),w.timeout=p.timeout,"onloadend"in w?w.onloadend=Q:w.onreadystatechange=function(){w&&w.readyState===4&&(w.status!==0||w.responseURL&&w.responseURL.indexOf("file:")===0)&&setTimeout(Q)},w.onabort=function(){w&&(S(new Te("Request aborted",Te.ECONNABORTED,p,w)),w=null)},w.onerror=function(){S(new Te("Network Error",Te.ERR_NETWORK,p,w)),w=null},w.ontimeout=function(){var ae=p.timeout?"timeout of "+p.timeout+"ms exceeded":"timeout exceeded",ue=p.transitional||Ss;p.timeoutErrorMessage&&(ae=p.timeoutErrorMessage),S(new Te(ae,ue.clarifyTimeoutError?Te.ETIMEDOUT:Te.ECONNABORTED,p,w)),w=null},rt.isStandardBrowserEnv){var te=(p.withCredentials||Vl(j))&&p.xsrfCookieName&&Hl.read(p.xsrfCookieName);te&&b.set(p.xsrfHeaderName,te)}A===void 0&&b.setContentType(null),"setRequestHeader"in w&&H.forEach(b.toJSON(),function(ae,ue){w.setRequestHeader(ue,ae)}),H.isUndefined(p.withCredentials)||(w.withCredentials=!!p.withCredentials),T&&T!=="json"&&(w.responseType=p.responseType),typeof p.onDownloadProgress=="function"&&w.addEventListener("progress",_s(p.onDownloadProgress,!0)),typeof p.onUploadProgress=="function"&&w.upload&&w.upload.addEventListener("progress",_s(p.onUploadProgress)),(p.cancelToken||p.signal)&&(f=function(ae){w&&(S(!ae||ae.type?new ei(null,p,w):ae),w.abort(),w=null)},p.cancelToken&&p.cancelToken.subscribe(f),p.signal&&(p.signal.aborted?f():p.signal.addEventListener("abort",f)));var X,z=(X=/^([-+\w]{1,25})(:?\/\/|:)/.exec(j))&&X[1]||"";z&&rt.protocols.indexOf(z)===-1?S(new Te("Unsupported protocol "+z+":",Te.ERR_BAD_REQUEST,p)):w.send(A||null)})}};H.forEach(Wi,function(p,y){if(p){try{Object.defineProperty(p,"name",{value:y})}catch{}Object.defineProperty(p,"adapterName",{value:y})}});function zi(p){if(p.cancelToken&&p.cancelToken.throwIfRequested(),p.signal&&p.signal.aborted)throw new ei(null,p)}function Ps(p){return zi(p),p.headers=pt.from(p.headers),p.data=ji.call(p,p.transformRequest),["post","put","patch"].indexOf(p.method)!==-1&&p.headers.setContentType("application/x-www-form-urlencoded",!1),function(y){for(var S,f,A=(y=H.isArray(y)?y:[y]).length,b=0;b<A&&(S=y[b],!(f=H.isString(S)?Wi[S.toLowerCase()]:S));b++);if(!f)throw f===!1?new Te("Adapter ".concat(S," is not supported by the environment"),"ERR_NOT_SUPPORT"):new Error(H.hasOwnProp(Wi,S)?"Adapter '".concat(S,"' is not available in the build"):"Unknown adapter '".concat(S,"'"));if(!H.isFunction(f))throw new TypeError("adapter is not a function");return f}(p.adapter||Yi.adapter)(p).then(function(y){return zi(p),y.data=ji.call(p,p.transformResponse,y),y.headers=pt.from(y.headers),y},function(y){return ws(y)||(zi(p),y&&y.response&&(y.response.data=ji.call(p,p.transformResponse,y.response),y.response.headers=pt.from(y.response.headers))),Promise.reject(y)})}var Bs=function(p){return p instanceof pt?p.toJSON():p};function Kt(p,y){y=y||{};var S={};function f(M,G,j){return H.isPlainObject(M)&&H.isPlainObject(G)?H.merge.call({caseless:j},M,G):H.isPlainObject(G)?H.merge({},G):H.isArray(G)?G.slice():G}function A(M,G,j){return H.isUndefined(G)?H.isUndefined(M)?void 0:f(void 0,M,j):f(M,G,j)}function b(M,G){if(!H.isUndefined(G))return f(void 0,G)}function T(M,G){return H.isUndefined(G)?H.isUndefined(M)?void 0:f(void 0,M):f(void 0,G)}function k(M,G,j){return j in y?f(M,G):j in p?f(void 0,M):void 0}var w={url:b,method:b,data:b,baseURL:T,transformRequest:T,transformResponse:T,paramsSerializer:T,timeout:T,timeoutMessage:T,withCredentials:T,adapter:T,responseType:T,xsrfCookieName:T,xsrfHeaderName:T,onUploadProgress:T,onDownloadProgress:T,decompress:T,maxContentLength:T,maxBodyLength:T,beforeRedirect:T,transport:T,httpAgent:T,httpsAgent:T,cancelToken:T,socketPath:T,responseEncoding:T,validateStatus:k,headers:function(M,G){return A(Bs(M),Bs(G),!0)}};return H.forEach(Object.keys(p).concat(Object.keys(y)),function(M){var G=w[M]||A,j=G(p[M],y[M],M);H.isUndefined(j)&&G!==k||(S[M]=j)}),S}function ti(p){return ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},ti(p)}var Qi={};["object","boolean","number","function","string","symbol"].forEach(function(p,y){Qi[p]=function(S){return ti(S)===p||"a"+(y<1?"n ":" ")+p}});var Os={};Qi.transitional=function(p,y,S){function f(A,b){return"[Axios v1.2.3] Transitional option '"+A+"'"+b+(S?". "+S:"")}return function(A,b,T){if(p===!1)throw new Te(f(b," has been removed"+(y?" in "+y:"")),Te.ERR_DEPRECATED);return y&&!Os[b]&&(Os[b]=!0,console.warn(f(b," has been deprecated since v"+y+" and will be removed in the near future"))),!p||p(A,b,T)}};const Xi={assertOptions:function(p,y,S){if(ti(p)!=="object")throw new Te("options must be an object",Te.ERR_BAD_OPTION_VALUE);for(var f=Object.keys(p),A=f.length;A-- >0;){var b=f[A],T=y[b];if(T){var k=p[b],w=k===void 0||T(k,b,p);if(w!==!0)throw new Te("option "+b+" must be "+w,Te.ERR_BAD_OPTION_VALUE)}else if(S!==!0)throw new Te("Unknown option "+b,Te.ERR_BAD_OPTION)}},validators:Qi};function fn(p){return fn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},fn(p)}function ql(p,y){for(var S=0;S<y.length;S++){var f=y[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(b,T){if(fn(b)!=="object"||b===null)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var w=k.call(b,"string");if(fn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),fn(A)==="symbol"?A:String(A)),f)}var A}var xt=Xi.validators,ni=function(){function p(f){(function(A,b){if(!(A instanceof b))throw new TypeError("Cannot call a class as a function")})(this,p),this.defaults=f,this.interceptors={request:new xs,response:new xs}}var y,S;return y=p,(S=[{key:"request",value:function(f,A){typeof f=="string"?(A=A||{}).url=f:A=f||{};var b,T=A=Kt(this.defaults,A),k=T.transitional,w=T.paramsSerializer,M=T.headers;k!==void 0&&Xi.assertOptions(k,{silentJSONParsing:xt.transitional(xt.boolean),forcedJSONParsing:xt.transitional(xt.boolean),clarifyTimeoutError:xt.transitional(xt.boolean)},!1),w!==void 0&&Xi.assertOptions(w,{encode:xt.function,serialize:xt.function},!0),A.method=(A.method||this.defaults.method||"get").toLowerCase(),(b=M&&H.merge(M.common,M[A.method]))&&H.forEach(["delete","get","head","post","put","patch","common"],function(Ce){delete M[Ce]}),A.headers=pt.concat(b,M);var G=[],j=!0;this.interceptors.request.forEach(function(Ce){typeof Ce.runWhen=="function"&&Ce.runWhen(A)===!1||(j=j&&Ce.synchronous,G.unshift(Ce.fulfilled,Ce.rejected))});var Q,te=[];this.interceptors.response.forEach(function(Ce){te.push(Ce.fulfilled,Ce.rejected)});var X,z=0;if(!j){var ae=[Ps.bind(this),void 0];for(ae.unshift.apply(ae,G),ae.push.apply(ae,te),X=ae.length,Q=Promise.resolve(A);z<X;)Q=Q.then(ae[z++],ae[z++]);return Q}X=G.length;var ue=A;for(z=0;z<X;){var Pe=G[z++],Re=G[z++];try{ue=Pe(ue)}catch(Ce){Re.call(this,Ce);break}}try{Q=Ps.call(this,ue)}catch(Ce){return Promise.reject(Ce)}for(z=0,X=te.length;z<X;)Q=Q.then(te[z++],te[z++]);return Q}},{key:"getUri",value:function(f){return Es(Ds((f=Kt(this.defaults,f)).baseURL,f.url),f.params,f.paramsSerializer)}}])&&ql(y.prototype,S),Object.defineProperty(y,"prototype",{writable:!1}),p}();H.forEach(["delete","get","head","options"],function(p){ni.prototype[p]=function(y,S){return this.request(Kt(S||{},{method:p,url:y,data:(S||{}).data}))}}),H.forEach(["post","put","patch"],function(p){function y(S){return function(f,A,b){return this.request(Kt(b||{},{method:p,headers:S?{"Content-Type":"multipart/form-data"}:{},url:f,data:A}))}}ni.prototype[p]=y(),ni.prototype[p+"Form"]=y(!0)});const ii=ni;function pn(p){return pn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},pn(p)}function Fs(p,y){for(var S=0;S<y.length;S++){var f=y[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(b,T){if(pn(b)!=="object"||b===null)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var w=k.call(b,"string");if(pn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),pn(A)==="symbol"?A:String(A)),f)}var A}var Yl=function(){function p(A){if(function(k,w){if(!(k instanceof w))throw new TypeError("Cannot call a class as a function")}(this,p),typeof A!="function")throw new TypeError("executor must be a function.");var b;this.promise=new Promise(function(k){b=k});var T=this;this.promise.then(function(k){if(T._listeners){for(var w=T._listeners.length;w-- >0;)T._listeners[w](k);T._listeners=null}}),this.promise.then=function(k){var w,M=new Promise(function(G){T.subscribe(G),w=G}).then(k);return M.cancel=function(){T.unsubscribe(w)},M},A(function(k,w,M){T.reason||(T.reason=new ei(k,w,M),b(T.reason))})}var y,S,f;return y=p,S=[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(A){this.reason?A(this.reason):this._listeners?this._listeners.push(A):this._listeners=[A]}},{key:"unsubscribe",value:function(A){if(this._listeners){var b=this._listeners.indexOf(A);b!==-1&&this._listeners.splice(b,1)}}}],f=[{key:"source",value:function(){var A;return{token:new p(function(b){A=b}),cancel:A}}}],S&&Fs(y.prototype,S),f&&Fs(y,f),Object.defineProperty(y,"prototype",{writable:!1}),p}();const jl=Yl;function Ms(p,y){(y==null||y>p.length)&&(y=p.length);for(var S=0,f=new Array(y);S<y;S++)f[S]=p[S];return f}var Zi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Zi).forEach(function(p){var y,S,f=(S=2,function(T){if(Array.isArray(T))return T}(y=p)||function(T,k){var w=T==null?null:typeof Symbol<"u"&&T[Symbol.iterator]||T["@@iterator"];if(w!=null){var M,G,j,Q,te=[],X=!0,z=!1;try{if(j=(w=w.call(T)).next,k===0){if(Object(w)!==w)return;X=!1}else for(;!(X=(M=j.call(w)).done)&&(te.push(M.value),te.length!==k);X=!0);}catch(ae){z=!0,G=ae}finally{try{if(!X&&w.return!=null&&(Q=w.return(),Object(Q)!==Q))return}finally{if(z)throw G}}return te}}(y,S)||function(T,k){if(T){if(typeof T=="string")return Ms(T,k);var w=Object.prototype.toString.call(T).slice(8,-1);return w==="Object"&&T.constructor&&(w=T.constructor.name),w==="Map"||w==="Set"?Array.from(T):w==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(w)?Ms(T,k):void 0}}(y,S)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),A=f[0],b=f[1];Zi[b]=A});const Wl=Zi;var _e=function p(y){var S=new ii(y),f=q(ii.prototype.request,S);return H.extend(f,ii.prototype,S,{allOwnKeys:!0}),H.extend(f,S,null,{allOwnKeys:!0}),f.create=function(A){return p(Kt(y,A))},f}(Yi);_e.Axios=ii,_e.CanceledError=ei,_e.CancelToken=jl,_e.isCancel=ws,_e.VERSION="1.2.3",_e.toFormData=Qn,_e.AxiosError=Te,_e.Cancel=_e.CanceledError,_e.all=function(p){return Promise.all(p)},_e.spread=function(p){return function(y){return p.apply(null,y)}},_e.isAxiosError=function(p){return H.isObject(p)&&p.isAxiosError===!0},_e.mergeConfig=Kt,_e.AxiosHeaders=pt,_e.formToJSON=function(p){return Ts(H.isHTMLForm(p)?new FormData(p):p)},_e.HttpStatusCode=Wl,_e.default=_e;const Ns=_e,zl={send:function(p){Ns.post(p.url,p.data).then(function(y){var S=y.data;S&&S.code===0?p.success&&p.success(S):p.error&&p.error(S&&S.msg)}).catch(function(y){console.error(y),p.error&&p.error()})},read:function(p){Ns.get(p.url).then(function(y){var S=y.data;S&&S.code===0?p.success&&p.success(S.data.map(function(f){return{time:f[0],type:f[1],color:f[2],author:f[3],text:f[4]}})):p.error&&p.error(S&&S.msg)}).catch(function(y){console.error(y),p.error&&p.error()})}};function Ji(p){return Ji=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},Ji(p)}function Ql(p){var y=this;this.lang=p,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(S){return S=S.toLowerCase(),Ht[y.lang]&&Ht[y.lang][S]?Ht[y.lang][S]:Ht[y.fallbackLang]&&Ht[y.fallbackLang][S]?Ht[y.fallbackLang][S]:er[S]?er[S]:S}}var er={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},Ht={en:er,"zh-cn":{"danmaku-loading":"弹幕加载中",top:"顶部",bottom:"底部",rolling:"滚动","input-danmaku-enter":"输入弹幕，回车发送","about-author":"关于作者","dplayer-feedback":"播放器意见反馈","about-dplayer":"关于 DPlayer 播放器",loop:"洗脑循环",speed:"速度","opacity-danmaku":"弹幕透明度",normal:"正常","please-input-danmaku":"要输入弹幕内容啊喂！","set-danmaku-color":"设置弹幕颜色","set-danmaku-type":"设置弹幕类型","show-danmaku":"显示弹幕","video-failed":"视频加载失败","danmaku-failed":"弹幕加载失败","danmaku-send-failed":"弹幕发送失败","switching-quality":"正在切换至 %q 画质","switched-quality":"已经切换至 %q 画质",ff:"快进 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"海量弹幕","send-danmaku":"发送弹幕",setting:"设置",fullscreen:"全屏","web-fullscreen":"页面全屏",send:"发送",screenshot:"截图",airplay:"无线投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"关闭","show-subs":"显示字幕","hide-subs":"隐藏字幕",volume:"音量",live:"直播","video-info":"视频统计信息"},"zh-tw":{"danmaku-loading":"彈幕載入中",top:"頂部",bottom:"底部",rolling:"滾動","input-danmaku-enter":"輸入彈幕，Enter 發送","about-author":"關於作者","dplayer-feedback":"播放器意見回饋","about-dplayer":"關於 DPlayer 播放器",loop:"循環播放",speed:"速度","opacity-danmaku":"彈幕透明度",normal:"正常","please-input-danmaku":"請輸入彈幕內容啊！","set-danmaku-color":"設定彈幕顏色","set-danmaku-type":"設定彈幕類型","show-danmaku":"顯示彈幕","video-failed":"影片載入失敗","danmaku-failed":"彈幕載入失敗","danmaku-send-failed":"彈幕發送失敗","switching-quality":"正在切換至 %q 畫質","switched-quality":"已經切換至 %q 畫質",ff:"快進 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"巨量彈幕","send-danmaku":"發送彈幕",setting:"設定",fullscreen:"全螢幕","web-fullscreen":"頁面全螢幕",send:"發送",screenshot:"截圖",airplay:"無線投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"關閉","show-subs":"顯示字幕","hide-subs":"隱藏字幕",volume:"音量",live:"直播","video-info":"影片統計訊息"},"ko-kr":{"danmaku-loading":"Danmaku를 불러오는 중입니다.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku를 입력하고 Enter를 누르세요.","about-author":"만든이","dplayer-feedback":"피드백 보내기","about-dplayer":"DPlayer 정보",loop:"반복",speed:"배속","opacity-danmaku":"Danmaku 불투명도",normal:"표준","please-input-danmaku":"Danmaku를 입력하세요!","set-danmaku-color":"Danmaku 색상","set-danmaku-type":"Danmaku 설정","show-danmaku":"Danmaku 표시","video-failed":"비디오를 불러오지 못했습니다.","danmaku-failed":"Danmaku를 불러오지 못했습니다.","danmaku-send-failed":"Danmaku 전송에 실패했습니다.","Switching to":"","Switched to":"","switching-quality":"전환 %q 화질","switched-quality":"전환 됨 %q 화질",ff:"앞으로 %s 초",rew:"뒤로 %s 초","unlimited-danmaku":"끝없는 Danmaku","send-danmaku":"Danmaku 보내기",setting:"설정",fullscreen:"전체 화면","web-fullscreen":"웹 내 전체화면",send:"보내기",screenshot:"화면 캡쳐",airplay:"에어플레이",chromecast:"ChromeCast",subtitle:"부제",off:"끄다","show-subs":"자막 보이기","hide-subs":"자막 숨기기",Volume:"볼륨",live:"생방송","video-info":"비디오 정보"},de:{"danmaku-loading":"Danmaku lädt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Drücke Enter nach dem Einfügen vom Danmaku","about-author":"Über den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"Über DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz für Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualität","switched-quality":"Zur %q Qualität gewechselt",ff:"%s s Vorwärts",rew:"%s s Zurück","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schließung","hide-subs":"Verstecke Untertitel",volume:"Lautstärke",live:"Live","video-info":"Video Info"}},Xl=i(730),Zl=i.n(Xl),Jl=i(74),ed=i.n(Jl),td=i(437),nd=i.n(td),id=i(644),rd=i.n(id),sd=i(324),ad=i.n(sd),od=i(574),ld=i.n(od),dd=i(300),cd=i.n(dd),ud=i(934),hd=i.n(ud),fd=i(428),pd=i.n(fd),md=i(807),gd=i.n(md),yd=i(338),Ad=i.n(yd),vd=i(254),bd=i.n(vd),Ed=i(965),xd=i.n(Ed),Sd=i(113),Td=i.n(Sd),Cd=i(251),Ld=i.n(Cd),Id=i(410),kd=i.n(Id),wd=i(182),Rd=i.n(wd),Dd=i(193),_d=i.n(Dd);const et={play:Zl(),pause:ed(),volumeUp:nd(),volumeDown:rd(),volumeOff:ad(),full:ld(),fullWeb:cd(),setting:hd(),right:pd(),comment:gd(),commentOff:Ad(),send:bd(),pallette:xd(),camera:Td(),subtitle:kd(),loading:Rd(),airplay:Ld(),chromecast:_d()};var Pd=i(916),Bd=i.n(Pd);function mn(p){return mn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},mn(p)}function Us(p,y){for(var S=0;S<y.length;S++){var f=y[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(b,T){if(mn(b)!=="object"||b===null)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var w=k.call(b,"string");if(mn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),mn(A)==="symbol"?A:String(A)),f)}var A}var Od=function(){function p(A){(function(b,T){if(!(b instanceof T))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=A.container,this.options=A.options,this.index=A.index,this.tran=A.tran,this.init()}var y,S,f;return y=p,f=[{key:"NewNotice",value:function(A,b,T){var k=document.createElement("div");return k.classList.add("dplayer-notice"),k.style.opacity=b,k.innerText=A,T&&(k.id="dplayer-notice-".concat(T)),k}}],(S=[{key:"init",value:function(){this.container.innerHTML=Bd()({options:this.options,index:this.index,tran:this.tran,icons:et,mobile:$.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!$.isSafari||$.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&Us(y.prototype,S),f&&Us(y,f),Object.defineProperty(y,"prototype",{writable:!1}),p}();const $s=Od;function Vt(p){return Vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},Vt(p)}function Fd(p,y){for(var S=0;S<y.length;S++){var f=y[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(b,T){if(Vt(b)!=="object"||b===null)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var w=k.call(b,"string");if(Vt(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),Vt(A)==="symbol"?A:String(A)),f)}var A}var Md=function(){function p(f){(function(A,b){if(!(A instanceof b))throw new TypeError("Cannot call a class as a function")})(this,p),this.options=f,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var y,S;return y=p,S=[{key:"load",value:function(){var f,A=this;f=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var b=(this.options.api.addition||[]).slice(0);b.push(f),this.events&&this.events.trigger("danmaku_load_start",b),this._readAllEndpoints(b,function(T){A.dan=[].concat.apply([],T).sort(function(k,w){return k.time-w.time}),window.requestAnimationFrame(function(){A.frame()}),A.options.callback(),A.events&&A.events.trigger("danmaku_load_end")})}},{key:"reload",value:function(f){this.options.api=f,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(f,A){for(var b=this,T=[],k=0,w=function(G){b.options.apiBackend.read({url:f[G],success:function(j){T[G]=j,++k===f.length&&A(T)},error:function(j){b.options.error(j||b.options.tran("danmaku-failed")),T[G]=[],++k===f.length&&A(T)}})},M=0;M<f.length;++M)w(M)}},{key:"send",value:function(f,A){var b=this,T={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:f.text,color:f.color,type:f.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:T,success:A,error:function(w){b.options.error(w||b.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,T),this.danIndex++;var k={text:this.htmlEncode(T.text),color:T.color,type:T.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(k),this.events&&this.events.trigger("danmaku_send",T)}},{key:"frame",value:function(){var f=this;if(this.dan.length&&!this.paused&&this.showing){for(var A=this.dan[this.danIndex],b=[];A&&this.options.time()>parseFloat(A.time);)b.push(A),A=this.dan[++this.danIndex];this.draw(b)}window.requestAnimationFrame(function(){f.frame()})}},{key:"opacity",value:function(f){if(f!==void 0){for(var A=this.container.getElementsByClassName("dplayer-danmaku-item"),b=0;b<A.length;b++)A[b].style.opacity=f;this._opacity=f,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(f){var A=this;if(this.showing){var b=this.options.height,T=this.container.offsetWidth,k=this.container.offsetHeight,w=parseInt(k/b),M=function(z){var ae=z.offsetWidth||parseInt(z.style.width),ue=z.getBoundingClientRect().right||A.container.getBoundingClientRect().right+ae;return A.container.getBoundingClientRect().right-ue},G=function(z){return(T+z)/5},j=function(z,ae,ue){for(var Pe=T/G(ue),Re=function(Bt){var Yt=A.danTunnel[ae][Bt+""];if(!Yt||!Yt.length)return A.danTunnel[ae][Bt+""]=[z],z.addEventListener("animationend",function(){A.danTunnel[ae][Bt+""].splice(0,1)}),{v:Bt%w};if(ae!=="right")return"continue";for(var _n=0;_n<Yt.length;_n++){var Ys=M(Yt[_n])-10;if(Ys<=T-Pe*G(parseInt(Yt[_n].style.width))||Ys<=0)break;if(_n===Yt.length-1)return A.danTunnel[ae][Bt+""].push(z),z.addEventListener("animationend",function(){A.danTunnel[ae][Bt+""].splice(0,1)}),{v:Bt%w}}},Ce=0;A.unlimited||Ce<w;Ce++){var Tt=Re(Ce);if(Tt!=="continue"&&Vt(Tt)==="object")return Tt.v}return-1};Object.prototype.toString.call(f)!=="[object Array]"&&(f=[f]);for(var Q=document.createDocumentFragment(),te=function(){f[X].type=$.number2Type(f[X].type),f[X].color||(f[X].color=16777215);var z=document.createElement("div");z.classList.add("dplayer-danmaku-item"),z.classList.add("dplayer-danmaku-".concat(f[X].type)),f[X].border?z.innerHTML='<span style="border:'.concat(f[X].border,'">').concat(f[X].text,"</span>"):z.innerHTML=f[X].text,z.style.opacity=A._opacity,z.style.color=$.number2Color(f[X].color),z.addEventListener("animationend",function(){A.container.removeChild(z)});var ae,ue=A._measure(f[X].text);switch(f[X].type){case"right":(ae=j(z,f[X].type,ue))>=0&&(z.style.width=ue+1+"px",z.style.top=b*ae+"px",z.style.transform="translateX(-".concat(T,"px)"));break;case"top":(ae=j(z,f[X].type))>=0&&(z.style.top=b*ae+"px");break;case"bottom":(ae=j(z,f[X].type))>=0&&(z.style.bottom=b*ae+"px");break;default:console.error("Can't handled danmaku type: ".concat(f[X].type))}ae>=0&&(z.classList.add("dplayer-danmaku-move"),z.style.animationDuration=A._danAnimation(f[X].type),Q.appendChild(z))},X=0;X<f.length;X++)te();return this.container.appendChild(Q),Q}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(f){if(!this.context){var A=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=A.getPropertyValue("font")}return this.context.measureText(f).width}},{key:"seek",value:function(){this.clear();for(var f=0;f<this.dan.length;f++){if(this.dan[f].time>=this.options.time()){this.danIndex=f;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(f){return f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var f=this.container.offsetWidth,A=this.container.getElementsByClassName("dplayer-danmaku-item"),b=0;b<A.length;b++)A[b].style.transform="translateX(-".concat(f,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(f){this.unlimited=f}},{key:"speed",value:function(f){this.options.api.speedRate=f}},{key:"_danAnimation",value:function(f){var A=this.options.api.speedRate||1,b=!!this.player.fullScreen.isFullScreen();return{top:"".concat((b?6:4)/A,"s"),right:"".concat((b?8:5)/A,"s"),bottom:"".concat((b?6:4)/A,"s")}[f]}}],S&&Fd(y.prototype,S),Object.defineProperty(y,"prototype",{writable:!1}),p}();const Nd=Md;function gn(p){return gn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},gn(p)}function Ud(p,y){for(var S=0;S<y.length;S++){var f=y[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(b,T){if(gn(b)!=="object"||b===null)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var w=k.call(b,"string");if(gn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),gn(A)==="symbol"?A:String(A)),f)}var A}const $d=function(){function p(){(function(f,A){if(!(f instanceof A))throw new TypeError("Cannot call a class as a function")})(this,p),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var y,S;return y=p,(S=[{key:"on",value:function(f,A){this.type(f)&&typeof A=="function"&&(this.events[f]||(this.events[f]=[]),this.events[f].push(A))}},{key:"trigger",value:function(f,A){if(this.events[f]&&this.events[f].length)for(var b=0;b<this.events[f].length;b++)this.events[f][b](A)}},{key:"type",value:function(f){return this.playerEvents.indexOf(f)!==-1?"player":this.videoEvents.indexOf(f)!==-1?"video":(console.error("Unknown event name: ".concat(f)),null)}}])&&Ud(y.prototype,S),Object.defineProperty(y,"prototype",{writable:!1}),p}();function yn(p){return yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},yn(p)}function Gd(p,y){for(var S=0;S<y.length;S++){var f=y[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(b,T){if(yn(b)!=="object"||b===null)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var w=k.call(b,"string");if(yn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),yn(A)==="symbol"?A:String(A)),f)}var A}var Kd=function(){function p(f){var A=this;(function(b,T){if(!(b instanceof T))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",function(){A.player.resize()}),this.player.events.on("webfullscreen_cancel",function(){A.player.resize(),$.setScrollPosition(A.lastScrollPosition)}),this.fullscreenchange=function(){A.player.resize(),A.isFullScreen("browser")?A.player.events.trigger("fullscreen"):($.setScrollPosition(A.lastScrollPosition),A.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var b=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;b&&b!==A.player.container||(A.player.resize(),b?A.player.events.trigger("fullscreen"):($.setScrollPosition(A.lastScrollPosition),A.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var y,S;return y=p,S=[{key:"isFullScreen",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(f){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser",A=f==="browser"?"web":"browser",b=this.isFullScreen(A);switch(b||(this.lastScrollPosition=$.getScrollPosition()),f){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}b&&this.cancel(A)}},{key:"cancel",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";switch(f){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"browser";this.isFullScreen(f)?this.cancel(f):this.request(f)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],S&&Gd(y.prototype,S),Object.defineProperty(y,"prototype",{writable:!1}),p}();const Hd=Kd;function An(p){return An=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},An(p)}function Vd(p,y){for(var S=0;S<y.length;S++){var f=y[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(b,T){if(An(b)!=="object"||b===null)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var w=k.call(b,"string");if(An(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),An(A)==="symbol"?A:String(A)),f)}var A}var qd=function(){function p(f){(function(A,b){if(!(A instanceof b))throw new TypeError("Cannot call a class as a function")})(this,p),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:f.options.hasOwnProperty("volume")?f.options.volume:.7,unlimited:(f.options.danmaku&&f.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var y,S;return y=p,(S=[{key:"init",value:function(){for(var f in this.storageName){var A=this.storageName[f];this.data[f]=parseFloat($.storage.get(A)||this.default[f])}}},{key:"get",value:function(f){return this.data[f]}},{key:"set",value:function(f,A){this.data[f]=A,$.storage.set(this.storageName[f],A)}}])&&Vd(y.prototype,S),Object.defineProperty(y,"prototype",{writable:!1}),p}();const Yd=qd;function vn(p){return vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},vn(p)}function jd(p,y){for(var S=0;S<y.length;S++){var f=y[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(b,T){if(vn(b)!=="object"||b===null)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var w=k.call(b,"string");if(vn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),vn(A)==="symbol"?A:String(A)),f)}var A}var Wd=function(){function p(f,A,b,T){(function(k,w){if(!(k instanceof w))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f,this.video=A,this.options=b,this.events=T,this.init()}var y,S;return y=p,S=[{key:"init",value:function(){var f=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var A=this.video.textTracks[0];A.oncuechange=function(){var b=A.activeCues[A.activeCues.length-1];if(f.container.innerHTML="",b){var T=document.createElement("div");T.appendChild(b.getCueAsHTML());var k=T.innerHTML.split(/\r?\n/).map(function(w){return"<p>".concat(w,"</p>")}).join("");f.container.innerHTML=k}f.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],S&&jd(y.prototype,S),Object.defineProperty(y,"prototype",{writable:!1}),p}();const zd=Wd;function bn(p){return bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},bn(p)}function Qd(p,y){for(var S=0;S<y.length;S++){var f=y[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(b,T){if(bn(b)!=="object"||b===null)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var w=k.call(b,"string");if(bn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),bn(A)==="symbol"?A:String(A)),f)}var A}var Xd=function(){function p(f){var A=this;(function(w,M){if(!(w instanceof M))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.player.template.mask.addEventListener("click",function(){A.hide()}),this.player.template.subtitlesButton.addEventListener("click",function(){A.adaptiveHeight(),A.show()});for(var b=this.player.template.subtitlesItem.length-1,T=function(w){A.player.template.subtitlesItem[w].addEventListener("click",function(){A.hide(),A.player.options.subtitle.index!==w&&(A.player.template.subtitle.innerHTML="<p></p>",A.player.template.subtrack.src=A.player.template.subtitlesItem[w].dataset.subtitle,A.player.options.subtitle.index=w,A.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&A.subContainerShow())})},k=0;k<b;k++)T(k);this.player.template.subtitlesItem[b].addEventListener("click",function(){A.hide(),A.player.options.subtitle.index!==b&&(A.player.template.subtitle.innerHTML="<p></p>",A.player.template.subtrack.src="",A.player.options.subtitle.index=b,A.subContainerHide())})}var y,S;return y=p,(S=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var f=30*this.player.template.subtitlesItem.length+14,A=.8*this.player.template.videoWrap.offsetHeight;f>=A-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=A-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=A-50+"px")}}])&&Qd(y.prototype,S),Object.defineProperty(y,"prototype",{writable:!1}),p}();const Zd=Xd;function En(p){return En=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},En(p)}function Jd(p,y){for(var S=0;S<y.length;S++){var f=y[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(b,T){if(En(b)!=="object"||b===null)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var w=k.call(b,"string");if(En(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),En(A)==="symbol"?A:String(A)),f)}var A}var ec=function(){function p(f){(function(A,b){if(!(A instanceof b))throw new TypeError("Cannot call a class as a function")})(this,p),this.elements={},this.elements.volume=f.volumeBar,this.elements.played=f.playedBar,this.elements.loaded=f.loadedBar,this.elements.danmaku=f.danmakuOpacityBar}var y,S;return y=p,(S=[{key:"set",value:function(f,A,b){A=Math.max(A,0),A=Math.min(A,1),this.elements[f].style[b]=100*A+"%"}},{key:"get",value:function(f){return parseFloat(this.elements[f].style.width)/100}}])&&Jd(y.prototype,S),Object.defineProperty(y,"prototype",{writable:!1}),p}();const tc=ec;function xn(p){return xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},xn(p)}function nc(p,y){for(var S=0;S<y.length;S++){var f=y[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(b,T){if(xn(b)!=="object"||b===null)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var w=k.call(b,"string");if(xn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),xn(A)==="symbol"?A:String(A)),f)}var A}var ic=function(){function p(f){(function(A,b){if(!(A instanceof b))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(A){window.setTimeout(A,1e3/60)},this.types=["loading","info","fps"],this.init()}var y,S;return y=p,(S=[{key:"init",value:function(){var f=this;this.types.map(function(A){return A!=="fps"&&f["init".concat(A,"Checker")](),A})}},{key:"initloadingChecker",value:function(){var f=this,A=0,b=0,T=!1;this.loadingChecker=setInterval(function(){f.enableloadingChecker&&(b=f.player.video.currentTime,T||b!==A||f.player.video.paused||(f.player.container.classList.add("dplayer-loading"),T=!0),T&&b>A&&!f.player.video.paused&&(f.player.container.classList.remove("dplayer-loading"),T=!1),A=b)},100)}},{key:"initfpsChecker",value:function(){var f=this;window.requestAnimationFrame(function(){if(f.enablefpsChecker)if(f.initfpsChecker(),f.fpsStart){f.fpsIndex++;var A=new Date;A-f.fpsStart>1e3&&(f.player.infoPanel.fps(f.fpsIndex/(A-f.fpsStart)*1e3),f.fpsStart=new Date,f.fpsIndex=0)}else f.fpsStart=new Date,f.fpsIndex=0;else f.fpsStart=0,f.fpsIndex=0})}},{key:"initinfoChecker",value:function(){var f=this;this.infoChecker=setInterval(function(){f.enableinfoChecker&&f.player.infoPanel.update()},1e3)}},{key:"enable",value:function(f){this["enable".concat(f,"Checker")]=!0,f==="fps"&&this.initfpsChecker()}},{key:"disable",value:function(f){this["enable".concat(f,"Checker")]=!1}},{key:"destroy",value:function(){var f=this;this.types.map(function(A){return f["enable".concat(A,"Checker")]=!1,f["".concat(A,"Checker")]&&clearInterval(f["".concat(A,"Checker")]),A})}}])&&nc(y.prototype,S),Object.defineProperty(y,"prototype",{writable:!1}),p}();const rc=ic;function Sn(p){return Sn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},Sn(p)}function sc(p,y){for(var S=0;S<y.length;S++){var f=y[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(b,T){if(Sn(b)!=="object"||b===null)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var w=k.call(b,"string");if(Sn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),Sn(A)==="symbol"?A:String(A)),f)}var A}const ac=function(){function p(f){var A=this;(function(b,T){if(!(b instanceof T))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f,this.container.addEventListener("animationend",function(){A.container.classList.remove("dplayer-bezel-transition")})}var y,S;return y=p,(S=[{key:"switch",value:function(f){this.container.innerHTML=f,this.container.classList.add("dplayer-bezel-transition")}}])&&sc(y.prototype,S),Object.defineProperty(y,"prototype",{writable:!1}),p}();function Tn(p){return Tn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},Tn(p)}function oc(p,y){for(var S=0;S<y.length;S++){var f=y[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(b,T){if(Tn(b)!=="object"||b===null)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var w=k.call(b,"string");if(Tn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),Tn(A)==="symbol"?A:String(A)),f)}var A}var lc=function(){function p(f){(function(A,b){if(!(A instanceof b))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f.container,this.barWidth=f.barWidth,this.container.style.backgroundImage="url('".concat(f.url,"')"),this.events=f.events}var y,S;return y=p,(S=[{key:"resize",value:function(f,A,b){this.container.style.width="".concat(f,"px"),this.container.style.height="".concat(A,"px"),this.container.style.top="".concat(2-A,"px"),this.barWidth=b}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(f){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(f/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(f-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&oc(y.prototype,S),Object.defineProperty(y,"prototype",{writable:!1}),p}();const dc=lc;function Cn(p){return Cn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},Cn(p)}function cc(p,y){for(var S=0;S<y.length;S++){var f=y[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(b,T){if(Cn(b)!=="object"||b===null)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var w=k.call(b,"string");if(Cn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),Cn(A)==="symbol"?A:String(A)),f)}var A}var St,Gs=!0,tr=!1,uc=function(){function p(f){(function(A,b){if(!(A instanceof b))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.autoHideTimer=0,$.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&typeof this.player.options.subtitle.url=="string"&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),$.isMobile||this.initVolumeButton()}var y,S;return y=p,(S=[{key:"initPlayButton",value:function(){var f=this;this.player.template.playButton.addEventListener("click",function(){f.player.toggle()}),this.player.template.mobilePlayButton.addEventListener("click",function(){f.player.toggle()}),$.isMobile?(this.player.template.videoWrap.addEventListener("click",function(){f.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){f.toggle()})):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",function(){f.player.toggle()}),this.player.template.controllerMask.addEventListener("click",function(){f.player.toggle()}))}},{key:"initHighlights",value:function(){var f=this;this.player.on("durationchange",function(){if(f.player.video.duration!==1&&f.player.video.duration!==1/0&&f.player.options.highlight){var A=f.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(A,0).forEach(function(k){f.player.template.playedBarWrap.removeChild(k)});for(var b=0;b<f.player.options.highlight.length;b++)if(f.player.options.highlight[b].text&&f.player.options.highlight[b].time){var T=document.createElement("div");T.classList.add("dplayer-highlight"),T.style.left=f.player.options.highlight[b].time/f.player.video.duration*100+"%",T.innerHTML='<span class="dplayer-highlight-text">'+f.player.options.highlight[b].text+"</span>",f.player.template.playedBarWrap.insertBefore(T,f.player.template.playedBarTime)}}})}},{key:"initThumbnails",value:function(){var f=this;this.player.options.video.thumbnails&&(this.thumbnails=new dc({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",function(){f.thumbnails.resize(160,f.player.video.videoHeight/f.player.video.videoWidth*160,f.player.template.barWrap.offsetWidth)}))}},{key:"initPlayedBar",value:function(){var f=this,A=function(T){var k=((T.clientX||T.changedTouches[0].clientX)-$.getBoundingClientRectViewLeft(f.player.template.playedBarWrap))/f.player.template.playedBarWrap.clientWidth;k=Math.max(k,0),k=Math.min(k,1),f.player.bar.set("played",k,"width"),f.player.template.ptime.innerHTML=$.secondToTime(k*f.player.video.duration)},b=function T(k){document.removeEventListener($.nameMap.dragEnd,T),document.removeEventListener($.nameMap.dragMove,A);var w=((k.clientX||k.changedTouches[0].clientX)-$.getBoundingClientRectViewLeft(f.player.template.playedBarWrap))/f.player.template.playedBarWrap.clientWidth;w=Math.max(w,0),w=Math.min(w,1),f.player.bar.set("played",w,"width"),f.player.seek(f.player.bar.get("played")*f.player.video.duration),f.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener($.nameMap.dragStart,function(){f.player.timer.disable("progress"),document.addEventListener($.nameMap.dragMove,A),document.addEventListener($.nameMap.dragEnd,b)}),this.player.template.playedBarWrap.addEventListener($.nameMap.dragMove,function(T){if(f.player.video.duration){var k=f.player.template.playedBarWrap.getBoundingClientRect().left,w=(T.clientX||T.changedTouches[0].clientX)-k;if(w<0||w>f.player.template.playedBarWrap.offsetWidth)return;var M=f.player.video.duration*(w/f.player.template.playedBarWrap.offsetWidth);$.isMobile&&f.thumbnails&&f.thumbnails.show(),f.thumbnails&&f.thumbnails.move(w),f.player.template.playedBarTime.style.left="".concat(w-(M>=3600?25:20),"px"),f.player.template.playedBarTime.innerText=$.secondToTime(M),f.player.template.playedBarTime.classList.remove("hidden")}}),this.player.template.playedBarWrap.addEventListener($.nameMap.dragEnd,function(){$.isMobile&&f.thumbnails&&f.thumbnails.hide()}),$.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",function(){f.player.video.duration&&(f.thumbnails&&f.thumbnails.show(),f.player.template.playedBarTime.classList.remove("hidden"))}),this.player.template.playedBarWrap.addEventListener("mouseleave",function(){f.player.video.duration&&(f.thumbnails&&f.thumbnails.hide(),f.player.template.playedBarTime.classList.add("hidden"))}))}},{key:"initFullButton",value:function(){var f=this;this.player.template.browserFullButton.addEventListener("click",function(){f.player.fullScreen.toggle("browser")}),this.player.template.webFullButton.addEventListener("click",function(){f.player.fullScreen.toggle("web")})}},{key:"initVolumeButton",value:function(){var f=this,A=function(T){var k=T||window.event,w=((k.clientX||k.changedTouches[0].clientX)-$.getBoundingClientRectViewLeft(f.player.template.volumeBarWrap)-5.5)/35;f.player.volume(w)},b=function T(){document.removeEventListener($.nameMap.dragEnd,T),document.removeEventListener($.nameMap.dragMove,A),f.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",function(T){var k=T||window.event,w=((k.clientX||k.changedTouches[0].clientX)-$.getBoundingClientRectViewLeft(f.player.template.volumeBarWrap)-5.5)/35;f.player.volume(w)}),this.player.template.volumeBarWrapWrap.addEventListener($.nameMap.dragStart,function(){document.addEventListener($.nameMap.dragMove,A),document.addEventListener($.nameMap.dragEnd,b),f.player.template.volumeButton.classList.add("dplayer-volume-active")}),this.player.template.volumeButtonIcon.addEventListener("click",function(){f.player.video.muted?(f.player.video.muted=!1,f.player.switchVolumeIcon(),f.player.bar.set("volume",f.player.volume(),"width")):(f.player.video.muted=!0,f.player.template.volumeIcon.innerHTML=et.volumeOff,f.player.bar.set("volume",0,"width"))})}},{key:"initQualityButton",value:function(){var f=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",function(A){A.target.classList.contains("dplayer-quality-item")&&f.player.switchQuality(A.target.dataset.index)})}},{key:"initScreenshotButton",value:function(){var f=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",function(){var A,b=document.createElement("canvas");b.width=f.player.video.videoWidth,b.height=f.player.video.videoHeight,b.getContext("2d").drawImage(f.player.video,0,0,b.width,b.height),b.toBlob(function(T){A=URL.createObjectURL(T);var k=document.createElement("a");k.href=A,k.download="DPlayer.png",k.style.display="none",document.body.appendChild(k),k.click(),document.body.removeChild(k),URL.revokeObjectURL(A),f.player.events.trigger("screenshot",A)})})}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",(function(f){f.availability==="available"?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",(function(){this.video.webkitShowPlaybackTargetPicker()}).bind(this))}).bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var f=window.document.createElement("script");f.setAttribute("type","text/javascript"),f.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(f),window.__onGCastApiAvailable=function(A){if(A){var b=new(St=window.chrome.cast).SessionRequest(St.media.DEFAULT_MEDIA_RECEIVER_APP_ID),T=new St.ApiConfig(b,function(){},function(k){k===St.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",k)});St.initialize(T,function(){})}}}},{key:"initChromecastButton",value:function(){var f=this;if(this.player.options.chromecast){Gs&&(Gs=!1,this.initChromecast());var A=function(T,k){f.currentMedia=k},b=function(T){console.error("Error launching media",T)};this.player.template.chromecastButton.addEventListener("click",function(){tr?(tr=!1,f.currentMedia.stop(),f.session.stop(),f.initChromecast()):(tr=!0,St.requestSession(function(T){var k,w,M;f.session=T,k=f.player.options.video.url,w=new St.media.MediaInfo(k),M=new St.media.LoadRequest(w),f.session?f.session.loadMedia(M,A.bind(f,"loadMedia"),b).play():window.open(k)},function(T){T.code==="cancel"?f.session=void 0:console.error("Error selecting a cast device",T)}))})}}},{key:"initSubtitleButton",value:function(){var f=this;this.player.events.on("subtitle_show",function(){f.player.template.subtitleButton.dataset.balloon=f.player.tran("hide-subs"),f.player.template.subtitleButtonInner.style.opacity="",f.player.user.set("subtitle",1)}),this.player.events.on("subtitle_hide",function(){f.player.template.subtitleButton.dataset.balloon=f.player.tran("show-subs"),f.player.template.subtitleButtonInner.style.opacity="0.4",f.player.user.set("subtitle",0)}),this.player.template.subtitleButton.addEventListener("click",function(){f.player.subtitle.toggle()})}},{key:"setAutoHide",value:function(){var f=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout(function(){!f.player.video.played.length||f.player.paused||f.disableAutoHide||f.hide()},3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){$.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&cc(y.prototype,S),Object.defineProperty(y,"prototype",{writable:!1}),p}();const hc=uc;function Ln(p){return Ln=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},Ln(p)}function fc(p,y){for(var S=0;S<y.length;S++){var f=y[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(b,T){if(Ln(b)!=="object"||b===null)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var w=k.call(b,"string");if(Ln(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),Ln(A)==="symbol"?A:String(A)),f)}var A}var pc=function(){function p(f){var A=this;(function(M,G){if(!(M instanceof G))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.player.template.mask.addEventListener("click",function(){A.hide()}),this.player.template.settingButton.addEventListener("click",function(){A.show()}),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",function(){A.player.template.loopToggle.checked=!A.player.template.loopToggle.checked,A.player.template.loopToggle.checked?A.loop=!0:A.loop=!1,A.hide()}),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",function(){A.player.template.showDanmakuToggle.checked=!A.player.template.showDanmakuToggle.checked,A.player.template.showDanmakuToggle.checked?(A.showDanmaku=!0,A.player.danmaku.show()):(A.showDanmaku=!1,A.player.danmaku.hide()),A.player.user.set("danmaku",A.showDanmaku?1:0),A.hide()}),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",function(){A.player.template.unlimitDanmakuToggle.checked=!A.player.template.unlimitDanmakuToggle.checked,A.player.template.unlimitDanmakuToggle.checked?(A.unlimitDanmaku=!0,A.player.danmaku.unlimit(!0)):(A.unlimitDanmaku=!1,A.player.danmaku.unlimit(!1)),A.player.user.set("unlimited",A.unlimitDanmaku?1:0),A.hide()}),this.player.template.speed.addEventListener("click",function(){A.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),A.player.template.settingBox.classList.add("dplayer-setting-box-speed")});for(var b=function(M){A.player.template.speedItem[M].addEventListener("click",function(){A.player.speed(A.player.template.speedItem[M].dataset.speed),A.hide()})},T=0;T<this.player.template.speedItem.length;T++)b(T);if(this.player.danmaku){this.player.on("danmaku_opacity",function(M){A.player.bar.set("danmaku",M,"width"),A.player.user.set("opacity",M)}),this.player.danmaku.opacity(this.player.user.get("opacity"));var k=function(M){var G=M||window.event,j=((G.clientX||G.changedTouches[0].clientX)-$.getBoundingClientRectViewLeft(A.player.template.danmakuOpacityBarWrap))/130;j=Math.max(j,0),j=Math.min(j,1),A.player.danmaku.opacity(j)},w=function M(){document.removeEventListener($.nameMap.dragEnd,M),document.removeEventListener($.nameMap.dragMove,k),A.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",function(M){var G=M||window.event,j=((G.clientX||G.changedTouches[0].clientX)-$.getBoundingClientRectViewLeft(A.player.template.danmakuOpacityBarWrap))/130;j=Math.max(j,0),j=Math.min(j,1),A.player.danmaku.opacity(j)}),this.player.template.danmakuOpacityBarWrapWrap.addEventListener($.nameMap.dragStart,function(){document.addEventListener($.nameMap.dragMove,k),document.addEventListener($.nameMap.dragEnd,w),A.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")})}}var y,S;return y=p,(S=[{key:"hide",value:function(){var f=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout(function(){f.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),f.player.template.settingBox.classList.remove("dplayer-setting-box-speed")},300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&fc(y.prototype,S),Object.defineProperty(y,"prototype",{writable:!1}),p}();const mc=pc;function In(p){return In=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},In(p)}function gc(p,y){for(var S=0;S<y.length;S++){var f=y[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(b,T){if(In(b)!=="object"||b===null)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var w=k.call(b,"string");if(In(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),In(A)==="symbol"?A:String(A)),f)}var A}var yc=function(){function p(f){var A=this;(function(b,T){if(!(b instanceof T))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.player.template.mask.addEventListener("click",function(){A.hide()}),this.player.template.commentButton.addEventListener("click",function(){A.show()}),this.player.template.commentSettingButton.addEventListener("click",function(){A.toggleSetting()}),this.player.template.commentColorSettingBox.addEventListener("click",function(){if(A.player.template.commentColorSettingBox.querySelector("input:checked+span")){var b=A.player.template.commentColorSettingBox.querySelector("input:checked").value;A.player.template.commentSettingFill.style.fill=b,A.player.template.commentInput.style.color=b,A.player.template.commentSendFill.style.fill=b}}),this.player.template.commentInput.addEventListener("click",function(){A.hideSetting()}),this.player.template.commentInput.addEventListener("keydown",function(b){(b||window.event).keyCode===13&&A.send()}),this.player.template.commentSendButton.addEventListener("click",function(){A.send()})}var y,S;return y=p,(S=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var f=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:$.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},function(){f.player.template.commentInput.value="",f.hide()}):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&gc(y.prototype,S),Object.defineProperty(y,"prototype",{writable:!1}),p}();const Ac=yc;function kn(p){return kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},kn(p)}function vc(p,y){for(var S=0;S<y.length;S++){var f=y[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(b,T){if(kn(b)!=="object"||b===null)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var w=k.call(b,"string");if(kn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),kn(A)==="symbol"?A:String(A)),f)}var A}var bc=function(){function p(f){(function(A,b){if(!(A instanceof b))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var y,S;return y=p,(S=[{key:"doHotKey",value:function(f){if(this.player.focus){var A=document.activeElement.tagName.toUpperCase(),b=document.activeElement.getAttribute("contenteditable");if(A!=="INPUT"&&A!=="TEXTAREA"&&b!==""&&b!=="true"){var T,k=f||window.event;switch(k.keyCode){case 32:k.preventDefault(),this.player.toggle();break;case 37:if(k.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(k.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:k.preventDefault(),T=this.player.volume()+.1,this.player.volume(T);break;case 40:k.preventDefault(),T=this.player.volume()-.1,this.player.volume(T)}}}}},{key:"cancelFullScreen",value:function(f){(f||window.event).keyCode===27&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&vc(y.prototype,S),Object.defineProperty(y,"prototype",{writable:!1}),p}();const Ec=bc;function wn(p){return wn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},wn(p)}function xc(p,y){for(var S=0;S<y.length;S++){var f=y[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(b,T){if(wn(b)!=="object"||b===null)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var w=k.call(b,"string");if(wn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),wn(A)==="symbol"?A:String(A)),f)}var A}var Sc=function(){function p(f){var A=this;(function(b,T){if(!(b instanceof T))throw new TypeError("Cannot call a class as a function")})(this,p),this.player=f,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach(function(b,T){A.player.options.contextmenu[T].click&&b.addEventListener("click",function(){A.player.options.contextmenu[T].click(A.player),A.hide()})}),this.contextmenuHandler=function(b){if(A.shown)A.hide();else{var T=b||window.event;T.preventDefault();var k=A.player.container.getBoundingClientRect();A.show(T.clientX-k.left,T.clientY-k.top),A.player.template.mask.addEventListener("click",function(){A.hide()})}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var y,S;return y=p,(S=[{key:"show",value:function(f,A){this.player.template.menu.classList.add("dplayer-menu-show");var b=this.player.container.getBoundingClientRect();f+this.player.template.menu.offsetWidth>=b.width?(this.player.template.menu.style.right=b.width-f+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=f+"px",this.player.template.menu.style.right="initial"),A+this.player.template.menu.offsetHeight>=b.height?(this.player.template.menu.style.bottom=b.height-A+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=A+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&xc(y.prototype,S),Object.defineProperty(y,"prototype",{writable:!1}),p}();const Tc=Sc;function Rn(p){return Rn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},Rn(p)}function Cc(p,y){for(var S=0;S<y.length;S++){var f=y[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,(A=function(b,T){if(Rn(b)!=="object"||b===null)return b;var k=b[Symbol.toPrimitive];if(k!==void 0){var w=k.call(b,"string");if(Rn(w)!=="object")return w;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(b)}(f.key),Rn(A)==="symbol"?A:String(A)),f)}var A}var Lc=function(){function p(f){var A=this;(function(b,T){if(!(b instanceof T))throw new TypeError("Cannot call a class as a function")})(this,p),this.container=f.template.infoPanel,this.template=f.template,this.video=f.video,this.player=f,this.template.infoPanelClose.addEventListener("click",function(){A.hide()})}var y,S;return y=p,(S=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.1"," ").concat("v1.27.0-12-g4f61091"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(f){this.template.infoFPS.innerHTML="".concat(f.toFixed(1))}}])&&Cc(y.prototype,S),Object.defineProperty(y,"prototype",{writable:!1}),p}();const Ic=Lc;var kc=i(568),wc=i.n(kc);function Dn(p){return Dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},Dn(p)}function Ks(p,y){var S=Object.keys(p);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(p);y&&(f=f.filter(function(A){return Object.getOwnPropertyDescriptor(p,A).enumerable})),S.push.apply(S,f)}return S}function Rc(p,y,S){return(y=Vs(y))in p?Object.defineProperty(p,y,{value:S,enumerable:!0,configurable:!0,writable:!0}):p[y]=S,p}function Hs(p,y){for(var S=0;S<y.length;S++){var f=y[S];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(p,Vs(f.key),f)}}function Vs(p){var y=function(S,f){if(Dn(S)!=="object"||S===null)return S;var A=S[Symbol.toPrimitive];if(A!==void 0){var b=A.call(S,"string");if(Dn(b)!=="object")return b;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(S)}(p);return Dn(y)==="symbol"?y:String(y)}var qs=0,qt=[],Dc=function(){function p(A){var b=this;(function(T,k){if(!(T instanceof k))throw new TypeError("Cannot call a class as a function")})(this,p),this.options=function(T){var k={container:T.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:zl,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var w in k)k.hasOwnProperty(w)&&!T.hasOwnProperty(w)&&(T[w]=k[w]);return T.video&&!T.video.type&&(T.video.type="auto"),Ji(T.danmaku)==="object"&&T.danmaku&&!T.danmaku.user&&(T.danmaku.user="DIYgod"),T.subtitle&&(!T.subtitle.type&&(T.subtitle.type="webvtt"),!T.subtitle.fontSize&&(T.subtitle.fontSize="20px"),!T.subtitle.bottom&&(T.subtitle.bottom="40px"),!T.subtitle.color&&(T.subtitle.color="#fff")),T.video.quality&&(T.video.url=T.video.quality[T.video.defaultQuality].url),T.lang&&(T.lang=T.lang.toLowerCase()),T.contextmenu=T.contextmenu.concat([{key:"video-info",click:function(M){M.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.1"),link:"https://github.com/MoePlayer/DPlayer"}]),T}(function(T){for(var k=1;k<arguments.length;k++){var w=arguments[k]!=null?arguments[k]:{};k%2?Ks(Object(w),!0).forEach(function(M){Rc(T,M,w[M])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(w)):Ks(Object(w)).forEach(function(M){Object.defineProperty(T,M,Object.getOwnPropertyDescriptor(w,M))})}return T}({preload:A.video.type==="webtorrent"?"none":"metadata"},A)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new Ql(this.options.lang).tran,this.events=new $d,this.user=new Yd(this),this.container=this.options.container,this.noticeList={},this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),$.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&(typeof this.options.subtitle.defaultSubtitle=="string"?this.options.subtitle.index=this.options.subtitle.url.findIndex(function(T){return T.lang===b.options.subtitle.defaultSubtitle||T.name===b.options.subtitle.defaultSubtitle}):typeof this.options.subtitle.defaultSubtitle=="number"&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(this.options.subtitle.index===-1||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex(function(T){return T.lang===b.options.lang})),this.options.subtitle.index===-1&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new $s({container:this.container,options:this.options,index:qs,tran:this.tran}),this.video=this.template.video,this.bar=new tc(this.template),this.bezel=new ac(this.template.bezel),this.fullScreen=new Hd(this),this.controller=new hc(this),this.options.danmaku&&(this.danmaku=new Nd({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout(function(){b.template.danmakuLoading.style.display="none",b.options.autoplay&&b.play()},0)},error:function(T){b.notice(T)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return b.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(T){return b.tran(T)}}),this.comment=new Ac(this)),this.setting=new mc(this),this.plugins={},this.docClickFun=function(){b.focus=!1},this.containerClickFun=function(){b.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new rc(this),this.hotkey=new Ec(this),this.contextmenu=new Tc(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new Ic(this),!this.danmaku&&this.options.autoplay&&this.play(),qs++,qt.push(this)}var y,S,f;return y=p,S=[{key:"seek",value:function(A){A=Math.max(A,0),this.video.duration&&(A=Math.min(A,this.video.duration)),this.video.currentTime<A?this.notice("".concat(this.tran("ff").replace("%s",(A-this.video.currentTime).toFixed(0)))):this.video.currentTime>A&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-A).toFixed(0)))),this.video.currentTime=A,this.danmaku&&this.danmaku.seek(),this.bar.set("played",A/this.video.duration,"width"),this.template.ptime.innerHTML=$.secondToTime(A)}},{key:"play",value:function(A){var b=this;if(this.paused=!1,this.video.paused&&!$.isMobile&&this.bezel.switch(et.play),this.template.playButton.innerHTML=et.pause,this.template.mobilePlayButton.innerHTML=et.pause,A||ne.resolve(this.video.play()).catch(function(){b.pause()}).then(function(){}),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var T=0;T<qt.length;T++)this!==qt[T]&&qt[T].pause()}},{key:"pause",value:function(A){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||$.isMobile||this.bezel.switch(et.pause),this.template.playButton.innerHTML=et.play,this.template.mobilePlayButton.innerHTML=et.play,A||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=et.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=et.volumeDown:this.template.volumeIcon.innerHTML=et.volumeOff}},{key:"volume",value:function(A,b,T){if(A=parseFloat(A),!isNaN(A)){A=Math.max(A,0),A=Math.min(A,1),this.bar.set("volume",A,"width");var k="".concat((100*A).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=k,b||this.user.set("volume",A),T||this.notice("".concat(this.tran("volume")," ").concat((100*A).toFixed(0),"%"),void 0,void 0,"volume"),this.video.volume=A,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(A,b){this.events.on(A,b)}},{key:"switchVideo",value:function(A,b){this.pause(),this.video.poster=A.pic?A.pic:"",this.video.src=A.url,this.initMSE(this.video,A.type||"auto"),b&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:b.id,address:b.api,token:b.token,maximum:b.maximum,addition:b.addition,user:b.user}))}},{key:"initMSE",value:function(A,b){var T=this;if(this.type=b,this.options.video.customType&&this.options.video.customType[b])Object.prototype.toString.call(this.options.video.customType[b])==="[object Function]"?this.options.video.customType[b](this.video,this):console.error("Illegal customType: ".concat(b));else switch(this.type==="auto"&&(/m3u8(#|\?|$)/i.exec(A.src)?this.type="hls":/.flv(#|\?|$)/i.exec(A.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(A.src)?this.type="dash":this.type="normal"),this.type==="hls"&&(A.canPlayType("application/x-mpegURL")||A.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var k=this.options.pluginOptions.hls,w=new window.Hls(k);this.plugins.hls=w,w.loadSource(A.src),w.attachMedia(A),this.events.on("destroy",function(){w.destroy(),delete T.plugins.hls})}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var M=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:A.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=M,M.attachMediaElement(A),M.load(),this.events.on("destroy",function(){M.unload(),M.detachMediaElement(),M.destroy(),delete T.plugins.flvjs})}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var G=window.dashjs.MediaPlayer().create().initialize(A,A.src,!1),j=this.options.pluginOptions.dash;G.updateSettings(j),this.plugins.dash=G,this.events.on("destroy",function(){window.dashjs.MediaPlayer().reset(),delete T.plugins.dash})}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var Q=this.options.pluginOptions.webtorrent,te=new window.WebTorrent(Q);this.plugins.webtorrent=te;var X=A.src;A.src="",A.preload="metadata",A.addEventListener("durationchange",function(){return T.container.classList.remove("dplayer-loading")},{once:!0}),te.add(X,function(z){z.files.find(function(ae){return ae.name.endsWith(".mp4")}).renderTo(T.video,{autoplay:T.options.autoplay,controls:!1})}),this.events.on("destroy",function(){te.remove(X),te.destroy(),delete T.plugins.webtorrent})}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(A,b){var T=this;this.initMSE(A,b),this.on("durationchange",function(){A.duration!==1&&A.duration!==1/0&&(T.template.dtime.innerHTML=$.secondToTime(A.duration))}),this.on("progress",function(){var M=A.buffered.length?A.buffered.end(A.buffered.length-1)/A.duration:0;T.bar.set("loaded",M,"width")}),this.on("error",function(){T.video.error&&T.tran&&T.notice&&T.type!=="webtorrent"&&T.notice(T.tran("video-failed"))}),this.on("ended",function(){T.bar.set("played",1,"width"),T.setting.loop?(T.seek(0),T.play()):T.pause(),T.danmaku&&(T.danmaku.danIndex=0)}),this.on("play",function(){T.paused&&T.play(!0)}),this.on("pause",function(){T.paused||T.pause(!0)}),this.on("timeupdate",function(){T.bar.set("played",T.video.currentTime/T.video.duration,"width");var M=$.secondToTime(T.video.currentTime);T.template.ptime.innerHTML!==M&&(T.template.ptime.innerHTML=M)});for(var k=function(M){A.addEventListener(T.events.videoEvents[M],function(G){T.events.trigger(T.events.videoEvents[M],G)})},w=0;w<this.events.videoEvents.length;w++)k(w);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new zd(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new Zd(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(A){var b=this;if(A=typeof A=="string"?parseInt(A):A,this.qualityIndex!==A&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=A,this.switchingQuality=!0,this.quality=this.options.video.quality[A],this.template.qualityButton.innerHTML=this.quality.name;var T=this.video.paused;this.video.pause();var k=wc()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),w=new DOMParser().parseFromString(k,"text/html").body.firstChild;this.template.videoWrap.insertBefore(w,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=w,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1,void 0,"switch-quality"),this.events.trigger("quality_start",this.quality),this.on("canplay",function(){if(b.prevVideo){if(b.video.currentTime!==b.prevVideo.currentTime)return void b.seek(b.prevVideo.currentTime);b.template.videoWrap.removeChild(b.prevVideo),b.video.classList.add("dplayer-video-current"),T||b.video.play(),b.prevVideo=null,b.notice("".concat(b.tran("switched-quality").replace("%q",b.quality.name)),void 0,void 0,"switch-quality"),b.switchingQuality=!1,b.events.trigger("quality_end")}}),this.on("error",function(){b.video.error&&b.prevVideo&&(b.template.videoWrap.removeChild(b.video),b.video=b.prevVideo,T||b.video.play(),b.qualityIndex=b.prevIndex,b.quality=b.options.video.quality[b.qualityIndex],b.noticeTime=setTimeout(function(){b.template.notice.style.opacity=0,b.events.trigger("notice_hide")},3e3),b.prevVideo=null,b.switchingQuality=!1)})}}},{key:"notice",value:function(A){var b,T,k,w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2e3,M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:.8,G=arguments.length>3?arguments[3]:void 0;if(G&&((b=document.getElementById("dplayer-notice-".concat(G)))&&(b.innerHTML=A),this.noticeList[G]&&(clearTimeout(this.noticeList[G]),this.noticeList[G]=null)),!b){var j=$s.NewNotice(A,M,G);this.template.noticeList.appendChild(j),b=j}this.events.trigger("notice_show",b),w>0&&(this.noticeList[G]=setTimeout((T=b,k=this,function(){T.addEventListener("animationend",function(){k.template.noticeList.removeChild(T)}),T.classList.add("remove-notice"),k.events.trigger("notice_hide"),k.noticeList[G]=null}),w))}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(A){this.video.playbackRate=A}},{key:"destroy",value:function(){qt.splice(qt.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],f=[{key:"version",get:function(){return"1.27.1"}}],S&&Hs(y.prototype,S),f&&Hs(y,f),Object.defineProperty(y,"prototype",{writable:!1}),p}();const _c=Dc;console.log(`
`.concat(" %c DPlayer v","1.27.1"," ").concat("v1.27.0-12-g4f61091"," %c https://dplayer.diygod.dev ",`
`,`
`),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const Pc=_c})(),r.default})())}(kr)),kr.exports}var Nm=Mm();const Um=Fm(Nm);function $m(a){return Fc({url:"/videos/getVideos",method:"get",params:{path:a}})}const Gm={style:{"max-width":"1350px",margin:"0 auto"}},Km={class:"video-container"},Hm={class:"player-section"},Vm={class:"video-title"},qm={class:"video-list-section"},Ym={class:"video-list"},jm=["onClick"],Wm={class:"video-thumbnail"},zm=["src","alt"],Qm={class:"duration-badge"},Xm={class:"video-info"},Zm={class:"video-name"},Jm={__name:"Player",setup(a){const e=Uc(),t=Vc();let n=ri(null);const i=ri("");let r=ri([{text:"ROOT",to:"/files"}]);const s=ri([]);Nc(()=>{d(),l(),o()});function o(){r.value=[{text:"ROOT",to:"/files"}];for(let u=0;u<e.params.paths.length;u++){let h=e.params.paths[u],m=e.params.paths.slice(0,u+1),g={text:h};u!==e.params.paths.length-1&&(g.to="/files"+Pn(m)),r.value.push(g)}}function d(){i.value=e.params.paths[e.params.paths.length-1],new Um({container:n.value,video:{url:"http://192.168.10.33:8080/api/videos/convertToHLS?path="+Pn(e.params.paths),pic:"http://192.168.10.33:8080/api/videos/getPreview?path="+Pn(e.params.paths),type:"customHls",customType:{customHls:function(u,h){const m=new wt({manifestLoadingMaxRetry:20,manifestLoadingRetryDelay:2e3,lowLatencyMode:!0});m.loadSource(u.src),m.attachMedia(u)}}}})}function l(){s.value=[];let u=Pn(e.params.paths.slice(0,-1)),h=Pn(e.params.paths);$m(u).then(m=>{if(m.length!==0){for(let g of m)g.title=g.fileName,g.duration=g.formatDuration,g.selected=h===g.filePath,g.preview="http://192.168.10.33:8080/api/videos/getPreview?path="+g.filePath;s.value=m}})}function c(u){console.log(u),t.push({name:"Player",params:{paths:Oc(u.filePath)}})}return $c(()=>e.params.paths,(u,h)=>{u.length===h.length&&u.every((m,g)=>m===h[g])||(d(),l(),o())}),(u,h)=>(rr(),nr(js,null,[qe("div",Gm,[Gc(Bc,{"static-items":Kc(r),separator:"/"},null,8,["static-items"])]),qe("div",Km,[qe("div",Hm,[qe("h1",Vm,ir(i.value),1),qe("div",{id:"player",ref_key:"playerRef",ref:n,class:"video-player"},null,512)]),qe("div",qm,[h[0]||(h[0]=qe("h2",{class:"list-title"},"视频列表",-1)),qe("ul",Ym,[(rr(!0),nr(js,null,Hc(s.value,m=>(rr(),nr("li",{key:m.fileName,class:qc(["video-item",{active:m.selected}]),onClick:g=>c(m)},[qe("div",Wm,[qe("img",{src:m.preview,alt:m.title},null,8,zm),qe("span",Qm,ir(m.duration),1)]),qe("div",Xm,[qe("span",Zm,ir(m.title),1)])],10,jm))),128))])])])],64))}},s0=Mc(Jm,[["__scopeId","data-v-165c7b26"]]);export{s0 as default};
