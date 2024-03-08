// src/bindings.tsx
import {
  ResourceContext,
  matchResourceFromRoute
} from "@refinedev/core";
import { useParams, useLocation, useNavigate, Link } from "@remix-run/react";
import { parse, stringify } from "qs";
import React, { useCallback, useContext } from "react";

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
    const { search: existingSearch, hash: existingHash } = useLocation();
    const navigate = useNavigate();
    const fn = useCallback(
      ({
        to,
        type,
        query,
        hash,
        options: { keepQuery, keepHash } = {}
      }) => {
        const urlQuery = {
          ...keepQuery && existingSearch && parse(existingSearch, { ignoreQueryPrefix: true }),
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
        const fullPath = `${urlTo}${hasUrlQuery ? stringify(urlQuery, stringifyConfig) : ""}${hasUrlHash ? urlHash : ""}`;
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
    const navigate = useNavigate();
    return () => {
      navigate(-1);
    };
  },
  parse: () => {
    const params = useParams();
    const { pathname, search } = useLocation();
    const { resources } = useContext(ResourceContext);
    const { resource, action, matchedRoute } = React.useMemo(() => {
      return matchResourceFromRoute(pathname, resources);
    }, [resources, pathname]);
    const inferredParams = matchedRoute && pathname ? paramsFromCurrentPath(pathname, matchedRoute) : {};
    const inferredId = inferredParams.id;
    const fn = useCallback(() => {
      const parsedSearch = parse(search, { ignoreQueryPrefix: true });
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
  Link: React.forwardRef(function RefineLink(props, ref) {
    return /* @__PURE__ */ React.createElement(Link, { ...props, ref });
  })
};

// src/refine-routes.tsx
import React2 from "react";
import { useLocation as useLocation2 } from "@remix-run/react";
import { useResource } from "@refinedev/core";
var RefineRoutes = ({ children }) => {
  const { resource, action } = useResource();
  const { pathname } = useLocation2();
  const resourceAction = resource && action ? resource[action] : void 0;
  const ResourceActionComponent = typeof resourceAction === "function" ? resourceAction : typeof resourceAction === "object" ? resourceAction.component : void 0;
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, children ? children(
    ResourceActionComponent ? /* @__PURE__ */ React2.createElement(ResourceActionComponent, null) : void 0,
    pathname ?? void 0
  ) : ResourceActionComponent ? /* @__PURE__ */ React2.createElement(ResourceActionComponent, null) : void 0);
};

// src/unsaved-changes-notifier.tsx
import React3 from "react";
import { useTranslate, useWarnAboutChange } from "@refinedev/core";
import { useBlocker } from "@remix-run/react";
var UnsavedChangesNotifier = ({
  translationKey = "warnWhenUnsavedChanges",
  message = "Are you sure you want to leave? You have unsaved changes."
}) => {
  const translate = useTranslate();
  const { warnWhen, setWarnWhen } = useWarnAboutChange();
  const warnMessage = React3.useMemo(() => {
    return translate(translationKey, message);
  }, [translationKey, message, translate]);
  const warnWhenListener = React3.useCallback(
    (e) => {
      e.preventDefault();
      e.returnValue = warnMessage;
      return e.returnValue;
    },
    [warnMessage]
  );
  React3.useEffect(() => {
    if (warnWhen) {
      window.addEventListener("beforeunload", warnWhenListener);
    }
    return window.removeEventListener("beforeunload", warnWhenListener);
  }, [warnWhen, warnWhenListener]);
  const blocker = React3.useCallback(() => {
    if (warnWhen) {
      if (window.confirm(warnMessage)) {
        setWarnWhen == null ? void 0 : setWarnWhen(false);
        return false;
      }
      return true;
    }
    return false;
  }, [warnWhen, warnMessage, setWarnWhen]);
  useBlocker(blocker);
  return null;
};

// src/navigate-to-resource.ts
import { useResource as useResource2, useGetToPath } from "@refinedev/core";
import React4 from "react";
import { useNavigate as useNavigate2 } from "@remix-run/react";
var NavigateToResource = ({
  resource: resourceProp,
  meta
}) => {
  const ran = React4.useRef(false);
  const navigate = useNavigate2();
  const getToPath = useGetToPath();
  const { resource, resources } = useResource2(resourceProp);
  const toResource = resource || resources.find((r) => r.list);
  React4.useEffect(() => {
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
import { parse as parse2 } from "qs";
var parseTableParams = (search) => {
  const parsed = parse2(search, { ignoreQueryPrefix: true });
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
export {
  NavigateToResource,
  RefineRoutes,
  UnsavedChangesNotifier,
  routerBindings as default,
  paramsFromCurrentPath,
  parseTableParams,
  stringifyConfig
};
//# sourceMappingURL=index.mjs.map