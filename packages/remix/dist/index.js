var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  NavigateToResource: () => NavigateToResource,
  RefineRoutes: () => RefineRoutes,
  UnsavedChangesNotifier: () => UnsavedChangesNotifier,
  default: () => routerBindings,
  paramsFromCurrentPath: () => paramsFromCurrentPath,
  parseTableParams: () => parseTableParams,
  stringifyConfig: () => stringifyConfig
});
module.exports = __toCommonJS(src_exports);

// src/bindings.tsx
var import_core = require("@refinedev/core");
var import_react = require("@remix-run/react");
var import_qs = require("qs");
var import_react2 = __toESM(require("react"));

// src/params-from-current-path/index.ts
var paramsFromCurrentPath = (pathname, matchingRoute) => {
  const params = {};
  const sanitizedMatchingRoute = matchingRoute.replace(/^\/|\/$/g, "");
  const sanitizedPathname = pathname.replace(/^\/|\/$/g, "");
  const matchingRouteParts = sanitizedMatchingRoute.split("/");
  const pathnameParts = sanitizedPathname.split("/");
  matchingRouteParts.forEach((part, index) => {
    var _a;
    if (part.startsWith(":")) {
      if (((_a = pathnameParts[index]) == null ? void 0 : _a.length) > 0) {
        params[part.replace(":", "")] = pathnameParts[index];
      }
    }
  });
  return params;
};

// src/convert-to-number-if-possible.ts
var convertToNumberIfPossible = (value) => {
  if (typeof value === "undefined") {
    return value;
  }
  const num = Number(value);
  if (`${num}` === value) {
    return num;
  }
  return value;
};

// src/bindings.tsx
var stringifyConfig = {
  addQueryPrefix: true,
  skipNulls: true,
  arrayFormat: "indices",
  encode: false,
  encodeValuesOnly: true
};
var routerBindings = {
  go: () => {
    const { search: existingSearch, hash: existingHash } = (0, import_react.useLocation)();
    const navigate = (0, import_react.useNavigate)();
    const fn = (0, import_react2.useCallback)(
      ({
        to,
        type,
        query,
        hash,
        options: { keepQuery, keepHash } = {}
      }) => {
        const urlQuery = {
          ...keepQuery && existingSearch && (0, import_qs.parse)(existingSearch, { ignoreQueryPrefix: true }),
          ...query
        };
        if (urlQuery.to) {
          urlQuery.to = encodeURIComponent(`${urlQuery.to}`);
        }
        const hasUrlQuery = Object.keys(urlQuery).length > 0;
        const urlHash = `#${(hash || keepHash && existingHash || "").replace(
          /^#/,
          ""
        )}`;
        const hasUrlHash = urlHash.length > 1;
        const urlTo = to || "";
        const fullPath = `${urlTo}${hasUrlQuery ? (0, import_qs.stringify)(urlQuery, stringifyConfig) : ""}${hasUrlHash ? urlHash : ""}`;
        if (type === "path") {
          return fullPath;
        }
        return navigate(fullPath, {
          replace: type === "replace"
        });
      },
      [existingHash, existingSearch, navigate]
    );
    return fn;
  },
  back: () => {
    const navigate = (0, import_react.useNavigate)();
    return () => {
      navigate(-1);
    };
  },
  parse: () => {
    const params = (0, import_react.useParams)();
    const { pathname, search } = (0, import_react.useLocation)();
    const { resources } = (0, import_react2.useContext)(import_core.ResourceContext);
    const { resource, action, matchedRoute } = import_react2.default.useMemo(() => {
      return (0, import_core.matchResourceFromRoute)(pathname, resources);
    }, [resources, pathname]);
    const inferredParams = matchedRoute && pathname ? paramsFromCurrentPath(pathname, matchedRoute) : {};
    const inferredId = inferredParams.id;
    const fn = (0, import_react2.useCallback)(() => {
      const parsedSearch = (0, import_qs.parse)(search, { ignoreQueryPrefix: true });
      const combinedParams = {
        ...inferredParams,
        ...params,
        ...parsedSearch
      };
      const response = {
        ...resource && { resource },
        ...action && { action },
        ...inferredId && { id: decodeURIComponent(inferredId) },
        ...(params == null ? void 0 : params.id) && { id: decodeURIComponent(params.id) },
        // ...(params?.action && { action: params.action }), // lets see if there is a need for this
        pathname,
        params: {
          ...combinedParams,
          current: convertToNumberIfPossible(
            combinedParams.current
          ),
          pageSize: convertToNumberIfPossible(
            combinedParams.pageSize
          ),
          to: combinedParams.to ? decodeURIComponent(combinedParams.to) : void 0
        }
      };
      return response;
    }, [
      pathname,
      search,
      params,
      resource,
      action,
      inferredParams,
      inferredId
    ]);
    return fn;
  },
  Link: import_react2.default.forwardRef(function RefineLink(props, ref) {
    return /* @__PURE__ */ import_react2.default.createElement(import_react.Link, { ...props, ref });
  })
};

// src/refine-routes.tsx
var import_react3 = __toESM(require("react"));
var import_react4 = require("@remix-run/react");
var import_core2 = require("@refinedev/core");
var RefineRoutes = ({ children }) => {
  const { resource, action } = (0, import_core2.useResource)();
  const { pathname } = (0, import_react4.useLocation)();
  const resourceAction = resource && action ? resource[action] : void 0;
  const ResourceActionComponent = typeof resourceAction === "function" ? resourceAction : typeof resourceAction === "object" ? resourceAction.component : void 0;
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, children ? children(
    ResourceActionComponent ? /* @__PURE__ */ import_react3.default.createElement(ResourceActionComponent, null) : void 0,
    pathname ?? void 0
  ) : ResourceActionComponent ? /* @__PURE__ */ import_react3.default.createElement(ResourceActionComponent, null) : void 0);
};

// src/unsaved-changes-notifier.tsx
var import_react5 = __toESM(require("react"));
var import_core3 = require("@refinedev/core");
var import_react6 = require("@remix-run/react");
var UnsavedChangesNotifier = ({
  translationKey = "warnWhenUnsavedChanges",
  message = "Are you sure you want to leave? You have unsaved changes."
}) => {
  const translate = (0, import_core3.useTranslate)();
  const { warnWhen, setWarnWhen } = (0, import_core3.useWarnAboutChange)();
  const warnMessage = import_react5.default.useMemo(() => {
    return translate(translationKey, message);
  }, [translationKey, message, translate]);
  const warnWhenListener = import_react5.default.useCallback(
    (e) => {
      e.preventDefault();
      e.returnValue = warnMessage;
      return e.returnValue;
    },
    [warnMessage]
  );
  import_react5.default.useEffect(() => {
    if (warnWhen) {
      window.addEventListener("beforeunload", warnWhenListener);
    }
    return window.removeEventListener("beforeunload", warnWhenListener);
  }, [warnWhen, warnWhenListener]);
  const blocker = import_react5.default.useCallback(() => {
    if (warnWhen) {
      if (window.confirm(warnMessage)) {
        setWarnWhen == null ? void 0 : setWarnWhen(false);
        return false;
      }
      return true;
    }
    return false;
  }, [warnWhen, warnMessage, setWarnWhen]);
  (0, import_react6.useBlocker)(blocker);
  return null;
};

// src/navigate-to-resource.ts
var import_core4 = require("@refinedev/core");
var import_react7 = __toESM(require("react"));
var import_react8 = require("@remix-run/react");
var NavigateToResource = ({
  resource: resourceProp,
  meta
}) => {
  const ran = import_react7.default.useRef(false);
  const navigate = (0, import_react8.useNavigate)();
  const getToPath = (0, import_core4.useGetToPath)();
  const { resource, resources } = (0, import_core4.useResource)(resourceProp);
  const toResource = resource || resources.find((r) => r.list);
  import_react7.default.useEffect(() => {
    if (toResource) {
      if (!ran.current) {
        const path = getToPath({
          resource: toResource,
          action: "list",
          meta
        });
        if (path) {
          navigate(path, { replace: true });
        }
        ran.current = true;
      }
    }
  }, [toResource, meta, navigate, getToPath]);
  return null;
};

// src/parse-table-params.ts
var import_qs2 = require("qs");
var parseTableParams = (search) => {
  const parsed = (0, import_qs2.parse)(search, { ignoreQueryPrefix: true });
  const tableReady = {
    ...parsed,
    pagination: {
      current: parsed.current,
      pageSize: parsed.pageSize
    }
  };
  delete tableReady.current;
  delete tableReady.pageSize;
  return tableReady;
};
//# sourceMappingURL=index.js.map