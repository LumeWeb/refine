"use client"
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/components/pages/error/index.tsx
import React35, { useEffect as useEffect8, useState as useState9 } from "react";

// src/hooks/auth/usePermissions/index.ts
import { getXRay } from "@refinedev/devtools-internal";
import {
  useQuery
} from "@tanstack/react-query";

// src/contexts/auth/index.tsx
import React from "react";
var LegacyAuthContext = React.createContext({});
var LegacyAuthContextProvider = /* @__PURE__ */ __name(({ children, isProvided, ...authOperations }) => {
  const { replace } = useNavigation();
  const loginFunc = /* @__PURE__ */ __name(async (params) => {
    var _a;
    try {
      const result = await ((_a = authOperations.login) == null ? void 0 : _a.call(authOperations, params));
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }, "loginFunc");
  const registerFunc = /* @__PURE__ */ __name(async (params) => {
    var _a;
    try {
      const result = await ((_a = authOperations.register) == null ? void 0 : _a.call(authOperations, params));
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  }, "registerFunc");
  const logoutFunc = /* @__PURE__ */ __name(async (params) => {
    var _a;
    try {
      const redirectPath = await ((_a = authOperations.logout) == null ? void 0 : _a.call(authOperations, params));
      return redirectPath;
    } catch (error) {
      return Promise.reject(error);
    }
  }, "logoutFunc");
  const checkAuthFunc = /* @__PURE__ */ __name(async (params) => {
    var _a;
    try {
      await ((_a = authOperations.checkAuth) == null ? void 0 : _a.call(authOperations, params));
      return Promise.resolve();
    } catch (error) {
      if (error == null ? void 0 : error.redirectPath) {
        replace(error.redirectPath);
      }
      return Promise.reject(error);
    }
  }, "checkAuthFunc");
  return /* @__PURE__ */ React.createElement(
    LegacyAuthContext.Provider,
    {
      value: {
        ...authOperations,
        login: loginFunc,
        logout: logoutFunc,
        checkAuth: checkAuthFunc,
        register: registerFunc,
        isProvided
      }
    },
    children
  );
}, "LegacyAuthContextProvider");
var AuthBindingsContext = React.createContext(
  {}
);
var AuthBindingsContextProvider = /* @__PURE__ */ __name(({ children, isProvided, ...authBindings }) => {
  const handleLogin = /* @__PURE__ */ __name(async (params) => {
    var _a;
    try {
      const result = await ((_a = authBindings.login) == null ? void 0 : _a.call(authBindings, params));
      return result;
    } catch (error) {
      console.warn(
        "Unhandled Error in login: refine always expects a resolved promise.",
        error
      );
      return Promise.reject(error);
    }
  }, "handleLogin");
  const handleRegister = /* @__PURE__ */ __name(async (params) => {
    var _a;
    try {
      const result = await ((_a = authBindings.register) == null ? void 0 : _a.call(authBindings, params));
      return result;
    } catch (error) {
      console.warn(
        "Unhandled Error in register: refine always expects a resolved promise.",
        error
      );
      return Promise.reject(error);
    }
  }, "handleRegister");
  const handleLogout = /* @__PURE__ */ __name(async (params) => {
    var _a;
    try {
      const result = await ((_a = authBindings.logout) == null ? void 0 : _a.call(authBindings, params));
      return result;
    } catch (error) {
      console.warn(
        "Unhandled Error in logout: refine always expects a resolved promise.",
        error
      );
      return Promise.reject(error);
    }
  }, "handleLogout");
  const handleCheck = /* @__PURE__ */ __name(async (params) => {
    var _a;
    try {
      const result = await ((_a = authBindings.check) == null ? void 0 : _a.call(authBindings, params));
      return Promise.resolve(result);
    } catch (error) {
      console.warn(
        "Unhandled Error in check: refine always expects a resolved promise.",
        error
      );
      return Promise.reject(error);
    }
  }, "handleCheck");
  const handleForgotPassword = /* @__PURE__ */ __name(async (params) => {
    var _a;
    try {
      const result = await ((_a = authBindings.forgotPassword) == null ? void 0 : _a.call(authBindings, params));
      return Promise.resolve(result);
    } catch (error) {
      console.warn(
        "Unhandled Error in forgotPassword: refine always expects a resolved promise.",
        error
      );
      return Promise.reject(error);
    }
  }, "handleForgotPassword");
  const handleUpdatePassword = /* @__PURE__ */ __name(async (params) => {
    var _a;
    try {
      const result = await ((_a = authBindings.updatePassword) == null ? void 0 : _a.call(authBindings, params));
      return Promise.resolve(result);
    } catch (error) {
      console.warn(
        "Unhandled Error in updatePassword: refine always expects a resolved promise.",
        error
      );
      return Promise.reject(error);
    }
  }, "handleUpdatePassword");
  return /* @__PURE__ */ React.createElement(
    AuthBindingsContext.Provider,
    {
      value: {
        ...authBindings,
        login: handleLogin,
        logout: handleLogout,
        check: handleCheck,
        register: handleRegister,
        forgotPassword: handleForgotPassword,
        updatePassword: handleUpdatePassword,
        isProvided
      }
    },
    children
  );
}, "AuthBindingsContextProvider");
var useLegacyAuthContext = /* @__PURE__ */ __name(() => {
  const context = React.useContext(LegacyAuthContext);
  return context;
}, "useLegacyAuthContext");
var useAuthBindingsContext = /* @__PURE__ */ __name(() => {
  const context = React.useContext(AuthBindingsContext);
  return context;
}, "useAuthBindingsContext");

// src/definitions/table/index.ts
import differenceWith from "lodash-es/differenceWith.js";
import unionWith from "lodash-es/unionWith.js";
import qs from "qs";
import warnOnce from "warn-once";

// src/definitions/helpers/userFriendlySeconds/index.ts
var userFriendlySecond = /* @__PURE__ */ __name((miliseconds) => {
  return miliseconds / 1e3;
}, "userFriendlySecond");

// src/definitions/helpers/importCSVMapper/index.ts
import fromPairs from "lodash-es/fromPairs.js";
import zip from "lodash-es/zip.js";
var importCSVMapper = /* @__PURE__ */ __name((data, mapData = (item) => item) => {
  const [headers, ...body] = data;
  return body.map((entry) => fromPairs(zip(headers, entry))).map(
    (item, index, array) => mapData.call(void 0, item, index, array)
  );
}, "importCSVMapper");

// src/definitions/helpers/userFriendlyResourceName/index.ts
import pluralize from "pluralize";
var userFriendlyResourceName = /* @__PURE__ */ __name((resource = "", type) => {
  const humanizeResource = humanizeString(resource);
  if (type === "singular") {
    return pluralize.singular(humanizeResource);
  }
  return pluralize.plural(humanizeResource);
}, "userFriendlyResourceName");

// src/definitions/helpers/handleUseParams/index.tsx
var handleUseParams = /* @__PURE__ */ __name((params = {}) => {
  if (params == null ? void 0 : params.id) {
    return {
      ...params,
      id: decodeURIComponent(params.id)
    };
  }
  return params;
}, "handleUseParams");

// src/definitions/helpers/keys/index.ts
function arrayFindIndex(array, slice) {
  return array.findIndex(
    (item, index) => index <= array.length - slice.length && slice.every(
      (sliceItem, sliceIndex) => array[index + sliceIndex] === sliceItem
    )
  );
}
__name(arrayFindIndex, "arrayFindIndex");
function convertToLegacy(segments) {
  if (segments[0] === "data") {
    const newSegments = segments.slice(1);
    if (newSegments[2] === "many") {
      newSegments[2] = "getMany";
    } else if (newSegments[2] === "infinite") {
      newSegments[2] = "list";
    } else if (newSegments[2] === "one") {
      newSegments[2] = "detail";
    } else if (newSegments[1] === "custom") {
      const newParams = {
        ...newSegments[2]
      };
      delete newParams.method;
      delete newParams.url;
      return [
        newSegments[0],
        newSegments[1],
        newSegments[2].method,
        newSegments[2].url,
        newParams
      ];
    }
    return newSegments;
  }
  if (segments[0] === "audit") {
    if (segments[2] === "list") {
      return ["logList", segments[1], segments[3]];
    }
  }
  if (segments[0] === "access") {
    if (segments.length === 4) {
      return [
        "useCan",
        {
          resource: segments[1],
          action: segments[2],
          ...segments[3]
          // params: { params, enabled }
        }
      ];
    }
  }
  if (segments[0] === "auth") {
    if (arrayFindIndex(segments, ["auth", "login"]) !== -1) {
      return ["useLogin"];
    }
    if (arrayFindIndex(segments, ["auth", "logout"]) !== -1) {
      return ["useLogout"];
    }
    if (arrayFindIndex(segments, ["auth", "identity"]) !== -1) {
      return ["getUserIdentity"];
    }
    if (arrayFindIndex(segments, ["auth", "register"]) !== -1) {
      return ["useRegister"];
    }
    if (arrayFindIndex(segments, ["auth", "forgotPassword"]) !== -1) {
      return ["useForgotPassword"];
    }
    if (arrayFindIndex(segments, ["auth", "check"]) !== -1) {
      return ["useAuthenticated", segments[2]];
    }
    if (arrayFindIndex(segments, ["auth", "onError"]) !== -1) {
      return ["useCheckError"];
    }
    if (arrayFindIndex(segments, ["auth", "permissions"]) !== -1) {
      return ["usePermissions"];
    }
    if (arrayFindIndex(segments, ["auth", "updatePassword"]) !== -1) {
      return ["useUpdatePassword"];
    }
  }
  return segments;
}
__name(convertToLegacy, "convertToLegacy");
var BaseKeyBuilder = class {
  constructor(segments = []) {
    this.segments = [];
    this.segments = segments;
  }
  key() {
    return this.segments;
  }
  legacy() {
    return convertToLegacy(this.segments);
  }
  get(legacy) {
    return legacy ? this.legacy() : this.segments;
  }
};
__name(BaseKeyBuilder, "BaseKeyBuilder");
var ParamsKeyBuilder = class extends BaseKeyBuilder {
  params(paramsValue) {
    return new BaseKeyBuilder([...this.segments, paramsValue]);
  }
};
__name(ParamsKeyBuilder, "ParamsKeyBuilder");
var DataIdRequiringKeyBuilder = class extends BaseKeyBuilder {
  id(idValue) {
    return new ParamsKeyBuilder([
      ...this.segments,
      idValue ? String(idValue) : void 0
    ]);
  }
};
__name(DataIdRequiringKeyBuilder, "DataIdRequiringKeyBuilder");
var DataIdsRequiringKeyBuilder = class extends BaseKeyBuilder {
  ids(...idsValue) {
    return new ParamsKeyBuilder([
      ...this.segments,
      ...idsValue.length ? [idsValue.map((el) => String(el))] : []
    ]);
  }
};
__name(DataIdsRequiringKeyBuilder, "DataIdsRequiringKeyBuilder");
var DataResourceKeyBuilder = class extends BaseKeyBuilder {
  action(actionType) {
    if (actionType === "one") {
      return new DataIdRequiringKeyBuilder([...this.segments, actionType]);
    }
    if (actionType === "many") {
      return new DataIdsRequiringKeyBuilder([...this.segments, actionType]);
    }
    if (["list", "infinite"].includes(actionType)) {
      return new ParamsKeyBuilder([...this.segments, actionType]);
    }
    throw new Error("Invalid action type");
  }
};
__name(DataResourceKeyBuilder, "DataResourceKeyBuilder");
var DataKeyBuilder = class extends BaseKeyBuilder {
  resource(resourceName) {
    return new DataResourceKeyBuilder([...this.segments, resourceName]);
  }
  mutation(mutationName) {
    return new ParamsKeyBuilder([
      ...mutationName === "custom" ? this.segments : [this.segments[0]],
      mutationName
    ]);
  }
};
__name(DataKeyBuilder, "DataKeyBuilder");
var AuthKeyBuilder = class extends BaseKeyBuilder {
  action(actionType) {
    return new ParamsKeyBuilder([...this.segments, actionType]);
  }
};
__name(AuthKeyBuilder, "AuthKeyBuilder");
var AccessResourceKeyBuilder = class extends BaseKeyBuilder {
  action(resourceName) {
    return new ParamsKeyBuilder([...this.segments, resourceName]);
  }
};
__name(AccessResourceKeyBuilder, "AccessResourceKeyBuilder");
var AccessKeyBuilder = class extends BaseKeyBuilder {
  resource(resourceName) {
    return new AccessResourceKeyBuilder([...this.segments, resourceName]);
  }
};
__name(AccessKeyBuilder, "AccessKeyBuilder");
var AuditActionKeyBuilder = class extends BaseKeyBuilder {
  action(actionType) {
    return new ParamsKeyBuilder([...this.segments, actionType]);
  }
};
__name(AuditActionKeyBuilder, "AuditActionKeyBuilder");
var AuditKeyBuilder = class extends BaseKeyBuilder {
  resource(resourceName) {
    return new AuditActionKeyBuilder([...this.segments, resourceName]);
  }
  action(actionType) {
    return new ParamsKeyBuilder([...this.segments, actionType]);
  }
};
__name(AuditKeyBuilder, "AuditKeyBuilder");
var KeyBuilder = class extends BaseKeyBuilder {
  data(name) {
    return new DataKeyBuilder(["data", name || "default"]);
  }
  auth() {
    return new AuthKeyBuilder(["auth"]);
  }
  access() {
    return new AccessKeyBuilder(["access"]);
  }
  audit() {
    return new AuditKeyBuilder(["audit"]);
  }
};
__name(KeyBuilder, "KeyBuilder");
var keys = /* @__PURE__ */ __name(() => new KeyBuilder([]), "keys");

// src/definitions/helpers/pickNotDeprecated/index.ts
var pickNotDeprecated = /* @__PURE__ */ __name((...args) => {
  return args.find((arg) => typeof arg !== "undefined");
}, "pickNotDeprecated");

// src/definitions/helpers/queryKeys/index.ts
var queryKeys = /* @__PURE__ */ __name((resource, dataProviderName, meta, metaData) => {
  const providerName = dataProviderName || "default";
  const keys2 = {
    all: [providerName],
    resourceAll: [providerName, resource || ""],
    list: (config) => [
      ...keys2.resourceAll,
      "list",
      {
        ...config,
        ...pickNotDeprecated(meta, metaData) || {}
      }
    ],
    many: (ids) => [
      ...keys2.resourceAll,
      "getMany",
      ids == null ? void 0 : ids.map(String),
      { ...pickNotDeprecated(meta, metaData) || {} }
    ].filter((item) => item !== void 0),
    detail: (id) => [
      ...keys2.resourceAll,
      "detail",
      id == null ? void 0 : id.toString(),
      { ...pickNotDeprecated(meta, metaData) || {} }
    ],
    logList: (meta2) => ["logList", resource, meta2, metaData].filter(
      (item) => item !== void 0
    )
  };
  return keys2;
}, "queryKeys");
var queryKeysReplacement = /* @__PURE__ */ __name((preferLegacyKeys) => {
  return (resource, dataProviderName, meta, metaData) => {
    const providerName = dataProviderName || "default";
    const keys2 = {
      all: keys().data(providerName).get(preferLegacyKeys),
      resourceAll: keys().data(dataProviderName).resource(resource ?? "").get(preferLegacyKeys),
      list: (config) => keys().data(dataProviderName).resource(resource ?? "").action("list").params({
        ...config,
        ...pickNotDeprecated(meta, metaData) || {}
      }).get(preferLegacyKeys),
      many: (ids) => keys().data(dataProviderName).resource(resource ?? "").action("many").ids(...ids ?? []).params({
        ...pickNotDeprecated(meta, metaData) || {}
      }).get(preferLegacyKeys),
      detail: (id) => keys().data(dataProviderName).resource(resource ?? "").action("one").id(id ?? "").params({
        ...pickNotDeprecated(meta, metaData) || {}
      }).get(preferLegacyKeys),
      logList: (meta2) => [
        ...keys().audit().resource(resource).action("list").params(meta2).get(preferLegacyKeys),
        metaData
      ].filter((item) => item !== void 0)
    };
    return keys2;
  };
}, "queryKeysReplacement");

// src/definitions/helpers/hasPermission/index.ts
var hasPermission = /* @__PURE__ */ __name((permissions, action) => {
  if (!permissions || !action) {
    return false;
  }
  return !!permissions.find((i) => i === action);
}, "hasPermission");

// src/definitions/helpers/router/is-parameter.ts
var isParameter = /* @__PURE__ */ __name((segment) => {
  return segment.startsWith(":");
}, "isParameter");

// src/definitions/helpers/router/split-to-segments.ts
var splitToSegments = /* @__PURE__ */ __name((path) => {
  const segments = path.split("/").filter((segment) => segment !== "");
  return segments;
}, "splitToSegments");

// src/definitions/helpers/router/is-segment-counts-same.ts
var isSegmentCountsSame = /* @__PURE__ */ __name((route, resourceRoute) => {
  const routeSegments = splitToSegments(route);
  const resourceRouteSegments = splitToSegments(resourceRoute);
  return routeSegments.length === resourceRouteSegments.length;
}, "isSegmentCountsSame");

// src/definitions/helpers/router/remove-leading-trailing-slashes.ts
var removeLeadingTrailingSlashes = /* @__PURE__ */ __name((route) => {
  return route.replace(/^\/|\/$/g, "");
}, "removeLeadingTrailingSlashes");

// src/definitions/helpers/router/check-by-segments.ts
var checkBySegments = /* @__PURE__ */ __name((route, resourceRoute) => {
  const stdRoute = removeLeadingTrailingSlashes(route);
  const stdResourceRoute = removeLeadingTrailingSlashes(resourceRoute);
  if (!isSegmentCountsSame(stdRoute, stdResourceRoute)) {
    return false;
  }
  const routeSegments = splitToSegments(stdRoute);
  const resourceRouteSegments = splitToSegments(stdResourceRoute);
  return resourceRouteSegments.every((segment, index) => {
    return isParameter(segment) || segment === routeSegments[index];
  });
}, "checkBySegments");

// src/definitions/helpers/router/get-default-action-path.ts
var getDefaultActionPath = /* @__PURE__ */ __name((resourceName, action, parentPrefix) => {
  const cleanParentPrefix = removeLeadingTrailingSlashes(parentPrefix || "");
  let path = `${cleanParentPrefix}${cleanParentPrefix ? "/" : ""}${resourceName}`;
  if (action === "list") {
    path = `${path}`;
  } else if (action === "create") {
    path = `${path}/create`;
  } else if (action === "edit") {
    path = `${path}/edit/:id`;
  } else if (action === "show") {
    path = `${path}/show/:id`;
  } else if (action === "clone") {
    path = `${path}/clone/:id`;
  }
  return `/${path.replace(/^\//, "")}`;
}, "getDefaultActionPath");

// src/definitions/helpers/router/get-parent-resource.ts
var getParentResource = /* @__PURE__ */ __name((resource, resources) => {
  var _a, _b;
  const parentName = pickNotDeprecated(
    (_a = resource.meta) == null ? void 0 : _a.parent,
    (_b = resource.options) == null ? void 0 : _b.parent,
    resource.parentName
  );
  if (!parentName) {
    return void 0;
  }
  const parentResource = resources.find(
    (resource2) => (resource2.identifier ?? resource2.name) === parentName
  );
  return parentResource ?? { name: parentName };
}, "getParentResource");

// src/definitions/helpers/router/get-parent-prefix-for-resource.ts
var getParentPrefixForResource = /* @__PURE__ */ __name((resource, resources, legacy) => {
  const parents = [];
  let parent = getParentResource(resource, resources);
  while (parent) {
    parents.push(parent);
    parent = getParentResource(parent, resources);
  }
  if (parents.length === 0) {
    return void 0;
  }
  return `/${parents.reverse().map((parent2) => {
    var _a;
    const v = legacy ? ((_a = parent2.options) == null ? void 0 : _a.route) ?? parent2.name : parent2.name;
    return removeLeadingTrailingSlashes(v);
  }).join("/")}`;
}, "getParentPrefixForResource");

// src/definitions/helpers/router/get-action-routes-from-resource.ts
var getActionRoutesFromResource = /* @__PURE__ */ __name((resource, resources, legacy) => {
  const actions = [];
  const actionList = ["list", "show", "edit", "create", "clone"];
  const parentPrefix = getParentPrefixForResource(resource, resources, legacy);
  actionList.forEach((action) => {
    var _a, _b;
    const item = legacy && action === "clone" ? resource.create : resource[action];
    let route = void 0;
    if (typeof item === "function" || legacy) {
      route = getDefaultActionPath(
        legacy ? ((_a = resource.meta) == null ? void 0 : _a.route) ?? ((_b = resource.options) == null ? void 0 : _b.route) ?? resource.name : resource.name,
        action,
        legacy ? parentPrefix : void 0
      );
    } else if (typeof item === "string") {
      route = item;
    } else if (typeof item === "object") {
      route = item.path;
    }
    if (route) {
      actions.push({
        action,
        resource,
        route: `/${route.replace(/^\//, "")}`
      });
    }
  });
  return actions;
}, "getActionRoutesFromResource");

// src/definitions/helpers/router/pick-matched-route.ts
var pickMatchedRoute = /* @__PURE__ */ __name((routes) => {
  var _a;
  if (routes.length === 0) {
    return void 0;
  }
  if (routes.length === 1) {
    return routes[0];
  }
  const sanitizedRoutes = routes.map((route) => ({
    ...route,
    splitted: splitToSegments(removeLeadingTrailingSlashes(route.route))
  }));
  const segmentsCount = ((_a = sanitizedRoutes[0]) == null ? void 0 : _a.splitted.length) ?? 0;
  let eligibleRoutes = [
    ...sanitizedRoutes
  ];
  for (let i = 0; i < segmentsCount; i++) {
    const nonParametrizedRoutes = eligibleRoutes.filter(
      (route) => !isParameter(route.splitted[i])
    );
    if (nonParametrizedRoutes.length === 0) {
      continue;
    }
    if (nonParametrizedRoutes.length === 1) {
      eligibleRoutes = nonParametrizedRoutes;
      break;
    }
    eligibleRoutes = nonParametrizedRoutes;
  }
  return eligibleRoutes[0];
}, "pickMatchedRoute");

// src/definitions/helpers/router/match-resource-from-route.ts
var matchResourceFromRoute = /* @__PURE__ */ __name((route, resources) => {
  const allActionRoutes = resources.flatMap((resource) => {
    return getActionRoutesFromResource(resource, resources);
  });
  const allFound = allActionRoutes.filter((actionRoute) => {
    return checkBySegments(route, actionRoute.route);
  });
  const mostEligible = pickMatchedRoute(allFound);
  return {
    found: !!mostEligible,
    resource: mostEligible == null ? void 0 : mostEligible.resource,
    action: mostEligible == null ? void 0 : mostEligible.action,
    matchedRoute: mostEligible == null ? void 0 : mostEligible.route
  };
}, "matchResourceFromRoute");

// src/definitions/helpers/routeGenerator/index.ts
var routeGenerator = /* @__PURE__ */ __name((item, resourcesFromProps) => {
  var _a;
  let route;
  const parentPrefix = getParentPrefixForResource(
    item,
    resourcesFromProps,
    true
  );
  if (parentPrefix) {
    const meta = pickNotDeprecated(item.meta, item.options);
    route = `${parentPrefix}/${(meta == null ? void 0 : meta.route) ?? item.name}`;
  } else {
    route = ((_a = item.options) == null ? void 0 : _a.route) ?? item.name;
  }
  return `/${route.replace(/^\//, "")}`;
}, "routeGenerator");

// src/definitions/helpers/treeView/createTreeView/index.ts
var createTreeView = /* @__PURE__ */ __name((resources) => {
  var _a;
  const tree = [];
  const resourcesRouteObject = {};
  const resourcesNameObject = {};
  let parent;
  let child;
  for (let i = 0; i < resources.length; i++) {
    parent = resources[i];
    const route = parent.route ?? ((_a = pickNotDeprecated(parent == null ? void 0 : parent.meta, parent.options)) == null ? void 0 : _a.route) ?? "";
    resourcesRouteObject[route] = parent;
    resourcesRouteObject[route]["children"] = [];
    resourcesNameObject[parent.name] = parent;
    resourcesNameObject[parent.name]["children"] = [];
  }
  for (const name in resourcesRouteObject) {
    if (Object.hasOwn(resourcesRouteObject, name)) {
      child = resourcesRouteObject[name];
      if (child.parentName && resourcesNameObject[child.parentName]) {
        resourcesNameObject[child.parentName]["children"].push(child);
      } else {
        tree.push(child);
      }
    }
  }
  return tree;
}, "createTreeView");

// src/definitions/helpers/humanizeString/index.ts
var humanizeString = /* @__PURE__ */ __name((text2) => {
  text2 = text2.replace(/([a-z]{1})([A-Z]{1})/g, "$1-$2");
  text2 = text2.replace(/([A-Z]{1})([A-Z]{1})([a-z]{1})/g, "$1-$2$3");
  text2 = text2.toLowerCase().replace(/[_-]+/g, " ").replace(/\s{2,}/g, " ").trim();
  text2 = text2.charAt(0).toUpperCase() + text2.slice(1);
  return text2;
}, "humanizeString");

// src/contexts/refine/index.tsx
import React3 from "react";
import pluralize2 from "pluralize";

// src/components/layoutWrapper/defaultLayout/index.tsx
import React2 from "react";
var DefaultLayout = /* @__PURE__ */ __name(({ children }) => {
  return /* @__PURE__ */ React2.createElement("div", null, children);
}, "DefaultLayout");

// src/contexts/refine/index.tsx
var defaultTitle = {
  icon: /* @__PURE__ */ React3.createElement(
    "svg",
    {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "data-testid": "refine-logo",
      id: "refine-default-logo"
    },
    /* @__PURE__ */ React3.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M13.7889 0.422291C12.6627 -0.140764 11.3373 -0.140764 10.2111 0.422291L2.21115 4.42229C0.85601 5.09986 0 6.48491 0 8V16C0 17.5151 0.85601 18.9001 2.21115 19.5777L10.2111 23.5777C11.3373 24.1408 12.6627 24.1408 13.7889 23.5777L21.7889 19.5777C23.144 18.9001 24 17.5151 24 16V8C24 6.48491 23.144 5.09986 21.7889 4.42229L13.7889 0.422291ZM8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16V8Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ React3.createElement(
      "path",
      {
        d: "M14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z",
        fill: "currentColor"
      }
    )
  ),
  text: "Refine Project"
};
var defaultRefineOptions = {
  mutationMode: "pessimistic",
  syncWithLocation: false,
  undoableTimeout: 5e3,
  warnWhenUnsavedChanges: false,
  liveMode: "off",
  redirect: {
    afterCreate: "list",
    afterClone: "list",
    afterEdit: "list"
  },
  overtime: {
    enabled: true,
    interval: 1e3
  },
  textTransformers: {
    humanize: humanizeString,
    plural: pluralize2.plural,
    singular: pluralize2.singular
  },
  disableServerSideValidation: false,
  title: defaultTitle
};
var RefineContext = React3.createContext({
  hasDashboard: false,
  mutationMode: "pessimistic",
  warnWhenUnsavedChanges: false,
  syncWithLocation: false,
  undoableTimeout: 5e3,
  Title: void 0,
  Sider: void 0,
  Header: void 0,
  Footer: void 0,
  Layout: DefaultLayout,
  OffLayoutArea: void 0,
  liveMode: "off",
  onLiveEvent: void 0,
  options: defaultRefineOptions
});
var RefineContextProvider = /* @__PURE__ */ __name(({
  hasDashboard,
  mutationMode,
  warnWhenUnsavedChanges,
  syncWithLocation,
  undoableTimeout,
  children,
  DashboardPage,
  Title,
  Layout = DefaultLayout,
  Header,
  Sider,
  Footer,
  OffLayoutArea,
  LoginPage: LoginPage3 = LoginPage,
  catchAll,
  liveMode = "off",
  onLiveEvent,
  options
}) => {
  return /* @__PURE__ */ React3.createElement(
    RefineContext.Provider,
    {
      value: {
        __initialized: true,
        hasDashboard,
        mutationMode,
        warnWhenUnsavedChanges,
        syncWithLocation,
        Title,
        undoableTimeout,
        Layout,
        Header,
        Sider,
        Footer,
        OffLayoutArea,
        DashboardPage,
        LoginPage: LoginPage3,
        catchAll,
        liveMode,
        onLiveEvent,
        options
      }
    },
    children
  );
}, "RefineContextProvider");

// src/definitions/helpers/handleRefineOptions/index.ts
var handleRefineOptions = /* @__PURE__ */ __name(({
  options,
  disableTelemetry,
  liveMode,
  mutationMode,
  reactQueryClientConfig,
  reactQueryDevtoolConfig,
  syncWithLocation,
  undoableTimeout,
  warnWhenUnsavedChanges
} = {}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const optionsWithDefaults = {
    breadcrumb: options == null ? void 0 : options.breadcrumb,
    mutationMode: (options == null ? void 0 : options.mutationMode) ?? mutationMode ?? defaultRefineOptions.mutationMode,
    undoableTimeout: (options == null ? void 0 : options.undoableTimeout) ?? undoableTimeout ?? defaultRefineOptions.undoableTimeout,
    syncWithLocation: (options == null ? void 0 : options.syncWithLocation) ?? syncWithLocation ?? defaultRefineOptions.syncWithLocation,
    warnWhenUnsavedChanges: (options == null ? void 0 : options.warnWhenUnsavedChanges) ?? warnWhenUnsavedChanges ?? defaultRefineOptions.warnWhenUnsavedChanges,
    liveMode: (options == null ? void 0 : options.liveMode) ?? liveMode ?? defaultRefineOptions.liveMode,
    redirect: {
      afterCreate: ((_a = options == null ? void 0 : options.redirect) == null ? void 0 : _a.afterCreate) ?? defaultRefineOptions.redirect.afterCreate,
      afterClone: ((_b = options == null ? void 0 : options.redirect) == null ? void 0 : _b.afterClone) ?? defaultRefineOptions.redirect.afterClone,
      afterEdit: ((_c = options == null ? void 0 : options.redirect) == null ? void 0 : _c.afterEdit) ?? defaultRefineOptions.redirect.afterEdit
    },
    overtime: (options == null ? void 0 : options.overtime) ?? defaultRefineOptions.overtime,
    textTransformers: {
      humanize: ((_d = options == null ? void 0 : options.textTransformers) == null ? void 0 : _d.humanize) ?? defaultRefineOptions.textTransformers.humanize,
      plural: ((_e = options == null ? void 0 : options.textTransformers) == null ? void 0 : _e.plural) ?? defaultRefineOptions.textTransformers.plural,
      singular: ((_f = options == null ? void 0 : options.textTransformers) == null ? void 0 : _f.singular) ?? defaultRefineOptions.textTransformers.singular
    },
    disableServerSideValidation: (options == null ? void 0 : options.disableServerSideValidation) ?? defaultRefineOptions.disableServerSideValidation,
    projectId: options == null ? void 0 : options.projectId,
    useNewQueryKeys: options == null ? void 0 : options.useNewQueryKeys,
    title: {
      icon: typeof ((_g = options == null ? void 0 : options.title) == null ? void 0 : _g.icon) === "undefined" ? defaultRefineOptions.title.icon : (_h = options == null ? void 0 : options.title) == null ? void 0 : _h.icon,
      text: typeof ((_i = options == null ? void 0 : options.title) == null ? void 0 : _i.text) === "undefined" ? defaultRefineOptions.title.text : (_j = options == null ? void 0 : options.title) == null ? void 0 : _j.text
    }
  };
  const disableTelemetryWithDefault = (options == null ? void 0 : options.disableTelemetry) ?? disableTelemetry ?? false;
  const reactQueryWithDefaults = {
    clientConfig: ((_k = options == null ? void 0 : options.reactQuery) == null ? void 0 : _k.clientConfig) ?? reactQueryClientConfig ?? {},
    devtoolConfig: ((_l = options == null ? void 0 : options.reactQuery) == null ? void 0 : _l.devtoolConfig) ?? reactQueryDevtoolConfig ?? {}
  };
  return {
    optionsWithDefaults,
    disableTelemetryWithDefault,
    reactQueryWithDefaults
  };
}, "handleRefineOptions");

// src/definitions/helpers/redirectPage/index.ts
var redirectPage = /* @__PURE__ */ __name(({
  redirectFromProps,
  action,
  redirectOptions
}) => {
  if (redirectFromProps || redirectFromProps === false) {
    return redirectFromProps;
  }
  switch (action) {
    case "clone":
      return redirectOptions.afterClone;
    case "create":
      return redirectOptions.afterCreate;
    case "edit":
      return redirectOptions.afterEdit;
    default:
      return false;
  }
}, "redirectPage");

// src/definitions/helpers/sequentialPromises/index.ts
var sequentialPromises = /* @__PURE__ */ __name(async (promises, onEachResolve, onEachReject) => {
  const results = [];
  for (const [index, promise] of promises.entries()) {
    try {
      const result = await promise();
      results.push(onEachResolve(result, index));
    } catch (error) {
      results.push(onEachReject(error, index));
    }
  }
  return results;
}, "sequentialPromises");

// src/definitions/helpers/pick-resource/index.ts
var pickResource = /* @__PURE__ */ __name((identifier, resources = [], legacy = false) => {
  if (!identifier) {
    return void 0;
  }
  if (legacy) {
    const resourceByRoute = resources.find(
      (r) => removeLeadingTrailingSlashes(r.route ?? "") === removeLeadingTrailingSlashes(identifier)
    );
    const resource2 = resourceByRoute ? resourceByRoute : resources.find((r) => r.name === identifier);
    return resource2;
  }
  let resource = resources.find((r) => r.identifier === identifier);
  if (!resource) {
    resource = resources.find((r) => r.name === identifier);
  }
  return resource;
}, "pickResource");

// src/definitions/helpers/pickDataProvider/index.ts
var pickDataProvider = /* @__PURE__ */ __name((resourceName, dataProviderName, resources) => {
  if (dataProviderName) {
    return dataProviderName;
  }
  const resource = pickResource(resourceName, resources);
  const meta = pickNotDeprecated(resource == null ? void 0 : resource.meta, resource == null ? void 0 : resource.options);
  if (meta == null ? void 0 : meta.dataProviderName) {
    return meta.dataProviderName;
  }
  return "default";
}, "pickDataProvider");

// src/definitions/helpers/handleMultiple/index.ts
var handleMultiple = /* @__PURE__ */ __name(async (promises) => {
  return {
    data: (await Promise.all(promises)).map((res) => res.data)
  };
}, "handleMultiple");

// src/definitions/helpers/useInfinitePagination/index.ts
var getNextPageParam = /* @__PURE__ */ __name((lastPage) => {
  const { pagination, cursor } = lastPage;
  if (cursor == null ? void 0 : cursor.next) {
    return cursor.next;
  }
  const current = (pagination == null ? void 0 : pagination.current) || 1;
  const pageSize = (pagination == null ? void 0 : pagination.pageSize) || 10;
  const totalPages = Math.ceil((lastPage.total || 0) / pageSize);
  return current < totalPages ? Number(current) + 1 : void 0;
}, "getNextPageParam");
var getPreviousPageParam = /* @__PURE__ */ __name((lastPage) => {
  const { pagination, cursor } = lastPage;
  if (cursor == null ? void 0 : cursor.prev) {
    return cursor.prev;
  }
  const current = (pagination == null ? void 0 : pagination.current) || 1;
  return current === 1 ? void 0 : current - 1;
}, "getPreviousPageParam");

// src/definitions/helpers/legacy-resource-transform/index.ts
var legacyResourceTransform = /* @__PURE__ */ __name((resources) => {
  const _resources = [];
  resources.forEach((resource) => {
    var _a, _b;
    _resources.push({
      ...resource,
      label: ((_a = resource.meta) == null ? void 0 : _a.label) ?? ((_b = resource.options) == null ? void 0 : _b.label),
      route: routeGenerator(resource, resources),
      canCreate: !!resource.create,
      canEdit: !!resource.edit,
      canShow: !!resource.show,
      canDelete: resource.canDelete
    });
  });
  return _resources;
}, "legacyResourceTransform");

// src/definitions/helpers/router/pick-route-params.ts
var pickRouteParams = /* @__PURE__ */ __name((route) => {
  const segments = splitToSegments(removeLeadingTrailingSlashes(route));
  return segments.flatMap((s) => {
    if (isParameter(s)) {
      return [s.slice(1)];
    }
    return [];
  });
}, "pickRouteParams");

// src/definitions/helpers/router/prepare-route-params.ts
var prepareRouteParams = /* @__PURE__ */ __name((routeParams, meta = {}) => {
  return routeParams.reduce(
    (acc, key) => {
      const value = meta[key];
      if (typeof value !== "undefined") {
        acc[key] = value;
      }
      return acc;
    },
    {}
  );
}, "prepareRouteParams");

// src/definitions/helpers/router/compose-route.ts
var composeRoute = /* @__PURE__ */ __name((designatedRoute, resourceMeta = {}, parsed = {}, meta = {}) => {
  const routeParams = pickRouteParams(designatedRoute);
  const preparedRouteParams = prepareRouteParams(routeParams, {
    ...resourceMeta,
    ...typeof (parsed == null ? void 0 : parsed.id) !== "undefined" ? { id: parsed.id } : {},
    ...typeof (parsed == null ? void 0 : parsed.action) !== "undefined" ? { action: parsed.action } : {},
    ...typeof (parsed == null ? void 0 : parsed.resource) !== "undefined" ? { resource: parsed.resource } : {},
    ...parsed == null ? void 0 : parsed.params,
    ...meta
  });
  return designatedRoute.replace(/:([^\/]+)/g, (match, key) => {
    const fromParams = preparedRouteParams[key];
    if (typeof fromParams !== "undefined") {
      return `${fromParams}`;
    }
    return match;
  });
}, "composeRoute");

// src/definitions/helpers/useActiveAuthProvider/index.ts
var useActiveAuthProvider = /* @__PURE__ */ __name(() => {
  const legacyAuthProvider = useLegacyAuthContext();
  const authProvider = useAuthBindingsContext();
  if (authProvider.isProvided) {
    return { isLegacy: false, ...authProvider };
  }
  if (legacyAuthProvider.isProvided) {
    return {
      isLegacy: true,
      ...legacyAuthProvider,
      check: legacyAuthProvider.checkAuth,
      onError: legacyAuthProvider.checkError,
      getIdentity: legacyAuthProvider.getUserIdentity
    };
  }
  return null;
}, "useActiveAuthProvider");

// src/definitions/helpers/handlePaginationParams/index.ts
var handlePaginationParams = /* @__PURE__ */ __name(({
  hasPagination,
  pagination,
  configPagination
} = {}) => {
  const hasPaginationString = hasPagination === false ? "off" : "server";
  const mode = (pagination == null ? void 0 : pagination.mode) ?? hasPaginationString;
  const current = pickNotDeprecated(pagination == null ? void 0 : pagination.current, configPagination == null ? void 0 : configPagination.current) ?? 1;
  const pageSize = pickNotDeprecated(pagination == null ? void 0 : pagination.pageSize, configPagination == null ? void 0 : configPagination.pageSize) ?? 10;
  return {
    current,
    pageSize,
    mode
  };
}, "handlePaginationParams");

// src/definitions/helpers/useMediaQuery/index.ts
import { useState, useEffect } from "react";
var useMediaQuery = /* @__PURE__ */ __name((query) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = /* @__PURE__ */ __name(() => setMatches(media.matches), "listener");
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
}, "useMediaQuery");

// src/definitions/helpers/safe-translate/index.ts
var safeTranslate = /* @__PURE__ */ __name((translate, key, defaultMessage, options) => {
  const translated = options ? translate(key, options, defaultMessage) : translate(key, defaultMessage);
  const fallback = defaultMessage ?? key;
  if (translated === key || typeof translated === "undefined") {
    return fallback;
  }
  return translated;
}, "safeTranslate");

// src/definitions/helpers/generateDocumentTitle/index.ts
function generateDefaultDocumentTitle(translate, resource, action, id, resourceName) {
  var _a;
  const actionPrefixMatcher = {
    create: "Create new ",
    clone: `#${id ?? ""} Clone `,
    edit: `#${id ?? ""} Edit `,
    show: `#${id ?? ""} Show `,
    list: ""
  };
  const identifier = (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name);
  const resourceNameFallback = (resource == null ? void 0 : resource.label) ?? ((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.label) ?? userFriendlyResourceName(
    identifier,
    action === "list" ? "plural" : "singular"
  );
  const resourceNameWithFallback = resourceName ?? resourceNameFallback;
  const defaultTitle2 = safeTranslate(
    translate,
    "documentTitle.default",
    "Refine"
  );
  const suffix = safeTranslate(translate, "documentTitle.suffix", " | Refine");
  let autoGeneratedTitle = defaultTitle2;
  if (action && identifier) {
    autoGeneratedTitle = safeTranslate(
      translate,
      `documentTitle.${identifier}.${action}`,
      `${actionPrefixMatcher[action] ?? ""}${resourceNameWithFallback}${suffix}`,
      { id }
    );
  }
  return autoGeneratedTitle;
}
__name(generateDefaultDocumentTitle, "generateDefaultDocumentTitle");

// src/hooks/refine/useMutationMode.ts
import { useContext } from "react";
var useMutationMode = /* @__PURE__ */ __name((preferredMutationMode, preferredUndoableTimeout) => {
  const { mutationMode, undoableTimeout } = useContext(RefineContext);
  return {
    mutationMode: preferredMutationMode ?? mutationMode,
    undoableTimeout: preferredUndoableTimeout ?? undoableTimeout
  };
}, "useMutationMode");

// src/hooks/refine/useWarnAboutChange/index.ts
import { useContext as useContext2 } from "react";

// src/contexts/unsavedWarn/index.tsx
import React4, { useState as useState2 } from "react";
var UnsavedWarnContext = React4.createContext({});
var UnsavedWarnContextProvider = /* @__PURE__ */ __name(({
  children
}) => {
  const [warnWhen, setWarnWhen] = useState2(false);
  return /* @__PURE__ */ React4.createElement(UnsavedWarnContext.Provider, { value: { warnWhen, setWarnWhen } }, children);
}, "UnsavedWarnContextProvider");

// src/hooks/refine/useWarnAboutChange/index.ts
var useWarnAboutChange = /* @__PURE__ */ __name(() => {
  const { warnWhenUnsavedChanges } = useContext2(RefineContext);
  const { warnWhen, setWarnWhen } = useContext2(UnsavedWarnContext);
  return {
    warnWhenUnsavedChanges,
    warnWhen: Boolean(warnWhen),
    setWarnWhen: setWarnWhen ?? (() => void 0)
  };
}, "useWarnAboutChange");

// src/hooks/refine/useSyncWithLocation.ts
import { useContext as useContext3 } from "react";
var useSyncWithLocation = /* @__PURE__ */ __name(() => {
  const { syncWithLocation } = useContext3(RefineContext);
  return { syncWithLocation };
}, "useSyncWithLocation");

// src/hooks/refine/useTitle.tsx
import { useContext as useContext4 } from "react";
var useTitle = /* @__PURE__ */ __name(() => {
  const { Title } = useContext4(RefineContext);
  return Title;
}, "useTitle");

// src/hooks/refine/useRefineContext.ts
import { useContext as useContext5 } from "react";
var useRefineContext = /* @__PURE__ */ __name(() => {
  const {
    Footer,
    Header,
    Layout,
    OffLayoutArea,
    Sider,
    Title,
    hasDashboard,
    mutationMode,
    syncWithLocation,
    undoableTimeout,
    warnWhenUnsavedChanges,
    DashboardPage,
    LoginPage: LoginPage3,
    catchAll,
    options,
    __initialized
  } = useContext5(RefineContext);
  return {
    __initialized,
    Footer,
    Header,
    Layout,
    OffLayoutArea,
    Sider,
    Title,
    hasDashboard,
    mutationMode,
    syncWithLocation,
    undoableTimeout,
    warnWhenUnsavedChanges,
    DashboardPage,
    LoginPage: LoginPage3,
    catchAll,
    options
  };
}, "useRefineContext");

// src/definitions/helpers/useUserFriendlyName/index.ts
var useUserFriendlyName = /* @__PURE__ */ __name(() => {
  const {
    options: { textTransformers }
  } = useRefineContext();
  const getFriendlyName = /* @__PURE__ */ __name((name = "", type) => {
    const humanizeName = textTransformers.humanize(name);
    if (type === "singular") {
      return textTransformers.singular(humanizeName);
    }
    return textTransformers.plural(humanizeName);
  }, "getFriendlyName");
  return getFriendlyName;
}, "useUserFriendlyName");

// src/definitions/helpers/flatten-object-keys/index.ts
var isNested = /* @__PURE__ */ __name((obj) => typeof obj === "object" && obj !== null, "isNested");
var isArray = /* @__PURE__ */ __name((obj) => Array.isArray(obj), "isArray");
var flattenObjectKeys = /* @__PURE__ */ __name((obj, prefix = "") => {
  if (!isNested(obj)) {
    return {
      [prefix]: obj
    };
  }
  return Object.keys(obj).reduce(
    (acc, key) => {
      const currentPrefix = prefix.length ? `${prefix}.` : "";
      if (isNested(obj[key]) && Object.keys(obj[key]).length) {
        if (isArray(obj[key]) && obj[key].length) {
          obj[key].forEach((item, index) => {
            Object.assign(
              acc,
              flattenObjectKeys(item, `${currentPrefix + key}.${index}`)
            );
          });
        } else {
          Object.assign(acc, flattenObjectKeys(obj[key], currentPrefix + key));
        }
        acc[currentPrefix + key] = obj[key];
      } else {
        acc[currentPrefix + key] = obj[key];
      }
      return acc;
    },
    {}
  );
}, "flattenObjectKeys");

// src/definitions/helpers/property-path-to-array/index.ts
var propertyPathToArray = /* @__PURE__ */ __name((propertyPath) => {
  return propertyPath.split(".").map((item) => !Number.isNaN(Number(item)) ? Number(item) : item);
}, "propertyPathToArray");

// src/definitions/helpers/downloadInBrowser/index.ts
var downloadInBrowser = /* @__PURE__ */ __name((filename, content, type) => {
  if (typeof window === "undefined") {
    return;
  }
  const blob = new Blob([content], { type });
  const link = document.createElement("a");
  link.setAttribute("visibility", "hidden");
  link.download = filename;
  const blobUrl = URL.createObjectURL(blob);
  link.href = blobUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => {
    URL.revokeObjectURL(blobUrl);
  });
}, "downloadInBrowser");

// src/definitions/helpers/defer-execution/index.ts
var deferExecution = /* @__PURE__ */ __name((fn) => {
  setTimeout(fn, 0);
}, "deferExecution");

// src/definitions/helpers/async-debounce/index.ts
import debounce from "lodash-es/debounce.js";
var asyncDebounce = /* @__PURE__ */ __name((func, wait = 1e3, cancelReason) => {
  let callbacks = [];
  const cancelPrevious = /* @__PURE__ */ __name(() => {
    callbacks.forEach((cb) => {
      var _a;
      return (_a = cb.reject) == null ? void 0 : _a.call(cb, cancelReason);
    });
    callbacks = [];
  }, "cancelPrevious");
  const debouncedFunc = debounce((...args) => {
    const { resolve, reject } = callbacks.pop() || {};
    Promise.resolve(func(...args)).then(resolve).catch(reject);
  }, wait);
  const runner = /* @__PURE__ */ __name((...args) => {
    return new Promise((resolve, reject) => {
      cancelPrevious();
      callbacks.push({
        resolve,
        reject
      });
      debouncedFunc(...args);
    });
  }, "runner");
  runner.flush = () => debouncedFunc.flush();
  runner.cancel = () => {
    debouncedFunc.cancel();
    cancelPrevious();
  };
  return runner;
}, "asyncDebounce");

// src/definitions/helpers/prepare-query-context/index.ts
var prepareQueryContext = /* @__PURE__ */ __name((context) => {
  const queryContext = {
    queryKey: context.queryKey,
    pageParam: context.pageParam
  };
  Object.defineProperty(queryContext, "signal", {
    enumerable: true,
    get: () => {
      return context.signal;
    }
  });
  return queryContext;
}, "prepareQueryContext");

// src/definitions/table/index.ts
var parseTableParams = /* @__PURE__ */ __name((url) => {
  const { current, pageSize, sorter, sorters, filters } = qs.parse(
    url.substring(1)
    // remove first ? character
  );
  return {
    parsedCurrent: current && Number(current),
    parsedPageSize: pageSize && Number(pageSize),
    parsedSorter: pickNotDeprecated(sorters, sorter) ?? [],
    parsedFilters: filters ?? []
  };
}, "parseTableParams");
var parseTableParamsFromQuery = /* @__PURE__ */ __name((params) => {
  const url = qs.stringify(params);
  return parseTableParams(`/${url}`);
}, "parseTableParamsFromQuery");
var stringifyTableParams = /* @__PURE__ */ __name((params) => {
  const options = {
    skipNulls: true,
    arrayFormat: "indices",
    encode: false
  };
  const { pagination, sorter, sorters, filters, ...rest } = params;
  const queryString = qs.stringify(
    {
      ...rest,
      ...pagination ? pagination : {},
      sorters: pickNotDeprecated(sorters, sorter),
      filters
    },
    options
  );
  return queryString;
}, "stringifyTableParams");
var compareFilters = /* @__PURE__ */ __name((left, right) => {
  if (left.operator !== "and" && left.operator !== "or" && right.operator !== "and" && right.operator !== "or") {
    return ("field" in left ? left.field : void 0) === ("field" in right ? right.field : void 0) && left.operator === right.operator;
  }
  return ("key" in left ? left.key : void 0) === ("key" in right ? right.key : void 0) && left.operator === right.operator;
}, "compareFilters");
var compareSorters = /* @__PURE__ */ __name((left, right) => left.field === right.field, "compareSorters");
var unionFilters = /* @__PURE__ */ __name((permanentFilter, newFilters, prevFilters = []) => {
  const isKeyRequired = newFilters.filter(
    (f) => (f.operator === "or" || f.operator === "and") && !f.key
  );
  if (isKeyRequired.length > 1) {
    warnOnce(
      true,
      "[conditionalFilters]: You have created multiple Conditional Filters at the top level, this requires the key parameter. \nFor more information, see https://refine.dev/docs/advanced-tutorials/data-provider/handling-filters/#top-level-multiple-conditional-filters-usage"
    );
  }
  return unionWith(
    permanentFilter,
    newFilters,
    prevFilters,
    compareFilters
  ).filter(
    (crudFilter) => crudFilter.value !== void 0 && crudFilter.value !== null && (crudFilter.operator !== "or" || crudFilter.operator === "or" && crudFilter.value.length !== 0) && (crudFilter.operator !== "and" || crudFilter.operator === "and" && crudFilter.value.length !== 0)
  );
}, "unionFilters");
var unionSorters = /* @__PURE__ */ __name((permanentSorter, newSorters) => unionWith(permanentSorter, newSorters, compareSorters).filter(
  (crudSorter) => crudSorter.order !== void 0 && crudSorter.order !== null
), "unionSorters");
var setInitialFilters = /* @__PURE__ */ __name((permanentFilter, defaultFilter) => [
  ...differenceWith(defaultFilter, permanentFilter, compareFilters),
  ...permanentFilter
], "setInitialFilters");
var setInitialSorters = /* @__PURE__ */ __name((permanentSorter, defaultSorter) => [
  ...differenceWith(defaultSorter, permanentSorter, compareSorters),
  ...permanentSorter
], "setInitialSorters");
var getDefaultSortOrder = /* @__PURE__ */ __name((columnName, sorter) => {
  if (!sorter) {
    return void 0;
  }
  const sortItem = sorter.find((item) => item.field === columnName);
  if (sortItem) {
    return sortItem.order;
  }
  return void 0;
}, "getDefaultSortOrder");
var getDefaultFilter = /* @__PURE__ */ __name((columnName, filters, operatorType = "eq") => {
  const filter = filters == null ? void 0 : filters.find((filter2) => {
    if (filter2.operator !== "or" && filter2.operator !== "and" && "field" in filter2) {
      const { operator, field } = filter2;
      return field === columnName && operator === operatorType;
    }
    return void 0;
  });
  if (filter) {
    return filter.value || [];
  }
  return void 0;
}, "getDefaultFilter");

// src/definitions/upload/file2Base64/index.ts
var file2Base64 = /* @__PURE__ */ __name((file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    const resultHandler = /* @__PURE__ */ __name(() => {
      if (reader.result) {
        reader.removeEventListener("load", resultHandler, false);
        resolve(reader.result);
      }
    }, "resultHandler");
    reader.addEventListener("load", resultHandler, false);
    reader.readAsDataURL(file.originFileObj);
    reader.onerror = (error) => {
      reader.removeEventListener("load", resultHandler, false);
      return reject(error);
    };
  });
}, "file2Base64");

// src/hooks/useKeys/index.tsx
var useKeys = /* @__PURE__ */ __name(() => {
  const {
    options: { useNewQueryKeys }
  } = useRefineContext();
  return {
    keys,
    preferLegacyKeys: !useNewQueryKeys
  };
}, "useKeys");

// src/hooks/auth/usePermissions/index.ts
function usePermissions({
  v3LegacyAuthProviderCompatible = false,
  options,
  params
} = {}) {
  const { getPermissions: legacyGetPermission } = useLegacyAuthContext();
  const { getPermissions } = useAuthBindingsContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const queryResponse = useQuery({
    queryKey: keys2().auth().action("permissions").get(preferLegacyKeys),
    // Enabled check for `getPermissions` is enough to be sure that it's defined in the query function but TS is not smart enough to know that.
    queryFn: getPermissions ? () => getPermissions(params) : () => Promise.resolve(void 0),
    enabled: !v3LegacyAuthProviderCompatible && !!getPermissions,
    ...v3LegacyAuthProviderCompatible ? {} : options,
    meta: {
      ...v3LegacyAuthProviderCompatible ? {} : options == null ? void 0 : options.meta,
      ...getXRay("usePermissions", preferLegacyKeys)
    }
  });
  const legacyQueryResponse = useQuery({
    queryKey: [
      ...keys2().auth().action("permissions").get(preferLegacyKeys),
      "v3LegacyAuthProviderCompatible"
    ],
    // Enabled check for `getPermissions` is enough to be sure that it's defined in the query function but TS is not smart enough to know that.
    queryFn: legacyGetPermission ? () => legacyGetPermission(params) : () => Promise.resolve(void 0),
    enabled: v3LegacyAuthProviderCompatible && !!legacyGetPermission,
    ...v3LegacyAuthProviderCompatible ? options : {},
    meta: {
      ...v3LegacyAuthProviderCompatible ? options == null ? void 0 : options.meta : {},
      ...getXRay("usePermissions", preferLegacyKeys)
    }
  });
  return v3LegacyAuthProviderCompatible ? legacyQueryResponse : queryResponse;
}
__name(usePermissions, "usePermissions");

// src/hooks/auth/useGetIdentity/index.ts
import { getXRay as getXRay2 } from "@refinedev/devtools-internal";
import {
  useQuery as useQuery2
} from "@tanstack/react-query";
function useGetIdentity({
  v3LegacyAuthProviderCompatible = false,
  queryOptions
} = {}) {
  const { getUserIdentity: legacyGetUserIdentity } = useLegacyAuthContext();
  const { getIdentity } = useAuthBindingsContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const queryResponse = useQuery2({
    queryKey: keys2().auth().action("identity").get(preferLegacyKeys),
    // Enabled check for `getIdentity` is enough to be sure that it's defined in the query function but TS is not smart enough to know that.
    queryFn: getIdentity ?? (() => Promise.resolve({})),
    enabled: !v3LegacyAuthProviderCompatible && !!getIdentity,
    retry: false,
    ...v3LegacyAuthProviderCompatible === true ? {} : queryOptions,
    meta: {
      ...v3LegacyAuthProviderCompatible === true ? {} : queryOptions == null ? void 0 : queryOptions.meta,
      ...getXRay2("useGetIdentity", preferLegacyKeys)
    }
  });
  const legacyQueryResponse = useQuery2({
    queryKey: [
      ...keys2().auth().action("identity").get(preferLegacyKeys),
      "v3LegacyAuthProviderCompatible"
    ],
    // Enabled check for `getUserIdentity` is enough to be sure that it's defined in the query function but TS is not smart enough to know that.
    queryFn: legacyGetUserIdentity ?? (() => Promise.resolve({})),
    enabled: v3LegacyAuthProviderCompatible && !!legacyGetUserIdentity,
    retry: false,
    ...v3LegacyAuthProviderCompatible ? queryOptions : {},
    meta: {
      ...v3LegacyAuthProviderCompatible ? queryOptions == null ? void 0 : queryOptions.meta : {},
      ...getXRay2("useGetIdentity", preferLegacyKeys)
    }
  });
  return v3LegacyAuthProviderCompatible ? legacyQueryResponse : queryResponse;
}
__name(useGetIdentity, "useGetIdentity");

// src/hooks/auth/useLogout/index.ts
import { getXRay as getXRay3 } from "@refinedev/devtools-internal";
import {
  useMutation
} from "@tanstack/react-query";

// src/hooks/auth/useInvalidateAuthStore/index.ts
import { useQueryClient } from "@tanstack/react-query";
var useInvalidateAuthStore = /* @__PURE__ */ __name(() => {
  const queryClient = useQueryClient();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const invalidate = /* @__PURE__ */ __name(async () => {
    await Promise.all(
      ["check", "identity", "permissions"].map(
        (action) => queryClient.invalidateQueries(
          keys2().auth().action(action).get(preferLegacyKeys)
        )
      )
    );
  }, "invalidate");
  return invalidate;
}, "useInvalidateAuthStore");

// src/hooks/auth/useLogout/index.ts
function useLogout({
  v3LegacyAuthProviderCompatible,
  mutationOptions
} = {}) {
  const invalidateAuthStore = useInvalidateAuthStore();
  const routerType = useRouterType();
  const go = useGo();
  const { push } = useNavigation();
  const { open, close } = useNotification();
  const { logout: legacyLogoutFromContext } = useLegacyAuthContext();
  const { logout: logoutFromContext } = useAuthBindingsContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const mutation = useMutation({
    mutationKey: keys2().auth().action("logout").get(preferLegacyKeys),
    mutationFn: logoutFromContext,
    onSuccess: async (data, variables) => {
      const { success, error, redirectTo, successNotification } = data;
      const { redirectPath } = variables ?? {};
      const redirect = redirectPath ?? redirectTo;
      if (success) {
        close == null ? void 0 : close("useLogout-error");
        if (successNotification) {
          open == null ? void 0 : open(buildSuccessNotification(successNotification));
        }
      }
      if (error || !success) {
        open == null ? void 0 : open(buildNotification(error));
      }
      if (redirect !== false) {
        if (routerType === "legacy") {
          push(redirect ?? "/login");
        } else {
          if (redirect) {
            go({ to: redirect });
          }
        }
      }
      await invalidateAuthStore();
    },
    onError: (error) => {
      open == null ? void 0 : open(buildNotification(error));
    },
    ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions,
    meta: {
      ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions == null ? void 0 : mutationOptions.meta,
      ...getXRay3("useLogout", preferLegacyKeys)
    }
  });
  const v3LegacyAuthProviderCompatibleMutation = useMutation({
    mutationKey: [
      ...keys2().auth().action("logout").get(preferLegacyKeys),
      "v3LegacyAuthProviderCompatible"
    ],
    mutationFn: legacyLogoutFromContext,
    onSuccess: async (data, variables) => {
      const redirectPath = (variables == null ? void 0 : variables.redirectPath) ?? data;
      if (redirectPath === false) {
        return;
      }
      if (redirectPath) {
        if (routerType === "legacy") {
          push(redirectPath);
        } else {
          go({ to: redirectPath });
        }
        return;
      }
      if (routerType === "legacy") {
        push("/login");
      } else {
        go({ to: "/login" });
      }
      await invalidateAuthStore();
    },
    onError: (error) => {
      open == null ? void 0 : open(buildNotification(error));
    },
    ...v3LegacyAuthProviderCompatible ? mutationOptions : {},
    meta: {
      ...v3LegacyAuthProviderCompatible ? mutationOptions == null ? void 0 : mutationOptions.meta : {},
      ...getXRay3("useLogout", preferLegacyKeys)
    }
  });
  return v3LegacyAuthProviderCompatible ? v3LegacyAuthProviderCompatibleMutation : mutation;
}
__name(useLogout, "useLogout");
var buildNotification = /* @__PURE__ */ __name((error) => {
  return {
    key: "useLogout-error",
    type: "error",
    message: (error == null ? void 0 : error.name) || "Logout Error",
    description: (error == null ? void 0 : error.message) || "Something went wrong during logout"
  };
}, "buildNotification");
var buildSuccessNotification = /* @__PURE__ */ __name((successNotification) => {
  return {
    message: successNotification.message,
    description: successNotification.description,
    key: "logout-success",
    type: "success"
  };
}, "buildSuccessNotification");

// src/hooks/auth/useLogin/index.ts
import React5 from "react";
import { getXRay as getXRay4 } from "@refinedev/devtools-internal";
import {
  useMutation as useMutation2
} from "@tanstack/react-query";
import qs2 from "qs";
function useLogin({
  v3LegacyAuthProviderCompatible,
  mutationOptions
} = {}) {
  const invalidateAuthStore = useInvalidateAuthStore();
  const routerType = useRouterType();
  const go = useGo();
  const { replace } = useNavigation();
  const parsed = useParsed();
  const { useLocation } = useRouterContext();
  const { search } = useLocation();
  const { close, open } = useNotification();
  const { login: legacyLoginFromContext } = useLegacyAuthContext();
  const { login: loginFromContext } = useAuthBindingsContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const to = React5.useMemo(() => {
    var _a;
    if (routerType === "legacy") {
      const legacySearch = qs2.parse(search, {
        ignoreQueryPrefix: true
      });
      return legacySearch.to;
    }
    return (_a = parsed.params) == null ? void 0 : _a.to;
  }, [routerType, parsed.params, search]);
  const mutation = useMutation2({
    mutationKey: keys2().auth().action("login").get(preferLegacyKeys),
    mutationFn: loginFromContext,
    onSuccess: async ({ success, redirectTo, error, successNotification }) => {
      if (success) {
        close == null ? void 0 : close("login-error");
        if (successNotification) {
          open == null ? void 0 : open(buildSuccessNotification2(successNotification));
        }
      }
      if (error || !success) {
        open == null ? void 0 : open(buildNotification2(error));
      }
      if (to && success) {
        if (routerType === "legacy") {
          replace(to);
        } else {
          go({ to, type: "replace" });
        }
      } else if (redirectTo) {
        if (routerType === "legacy") {
          replace(redirectTo);
        } else {
          go({ to: redirectTo, type: "replace" });
        }
      } else {
        if (routerType === "legacy") {
          replace("/");
        }
      }
      setTimeout(() => {
        invalidateAuthStore();
      }, 32);
    },
    onError: (error) => {
      open == null ? void 0 : open(buildNotification2(error));
    },
    ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions,
    meta: {
      ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions == null ? void 0 : mutationOptions.meta,
      ...getXRay4("useLogin", preferLegacyKeys)
    }
  });
  const v3LegacyAuthProviderCompatibleMutation = useMutation2({
    mutationKey: [
      ...keys2().auth().action("login").get(preferLegacyKeys),
      "v3LegacyAuthProviderCompatible"
    ],
    mutationFn: legacyLoginFromContext,
    onSuccess: async (redirectPathFromAuth) => {
      if (to) {
        replace(to);
      }
      if (redirectPathFromAuth !== false && !to) {
        if (typeof redirectPathFromAuth === "string") {
          if (routerType === "legacy") {
            replace(redirectPathFromAuth);
          } else {
            go({ to: redirectPathFromAuth, type: "replace" });
          }
        } else {
          if (routerType === "legacy") {
            replace("/");
          } else {
            go({ to: "/", type: "replace" });
          }
        }
      }
      setTimeout(() => {
        invalidateAuthStore();
      }, 32);
      close == null ? void 0 : close("login-error");
    },
    onError: (error) => {
      open == null ? void 0 : open(buildNotification2(error));
    },
    ...v3LegacyAuthProviderCompatible ? mutationOptions : {},
    meta: {
      ...v3LegacyAuthProviderCompatible ? mutationOptions == null ? void 0 : mutationOptions.meta : {},
      ...getXRay4("useLogin", preferLegacyKeys)
    }
  });
  return v3LegacyAuthProviderCompatible ? v3LegacyAuthProviderCompatibleMutation : mutation;
}
__name(useLogin, "useLogin");
var buildNotification2 = /* @__PURE__ */ __name((error) => {
  return {
    message: (error == null ? void 0 : error.name) || "Login Error",
    description: (error == null ? void 0 : error.message) || "Invalid credentials",
    key: "login-error",
    type: "error"
  };
}, "buildNotification");
var buildSuccessNotification2 = /* @__PURE__ */ __name((successNotification) => {
  return {
    message: successNotification.message,
    description: successNotification.description,
    key: "login-success",
    type: "success"
  };
}, "buildSuccessNotification");

// src/hooks/auth/useRegister/index.ts
import { getXRay as getXRay5 } from "@refinedev/devtools-internal";
import {
  useMutation as useMutation3
} from "@tanstack/react-query";
function useRegister({
  v3LegacyAuthProviderCompatible,
  mutationOptions
} = {}) {
  const invalidateAuthStore = useInvalidateAuthStore();
  const routerType = useRouterType();
  const go = useGo();
  const { replace } = useNavigation();
  const { register: legacyRegisterFromContext } = useLegacyAuthContext();
  const { register: registerFromContext } = useAuthBindingsContext();
  const { close, open } = useNotification();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const mutation = useMutation3({
    mutationKey: keys2().auth().action("register").get(preferLegacyKeys),
    mutationFn: registerFromContext,
    onSuccess: async ({ success, redirectTo, error, successNotification }) => {
      if (success) {
        close == null ? void 0 : close("register-error");
        if (successNotification) {
          open == null ? void 0 : open(buildSuccessNotification3(successNotification));
        }
        await invalidateAuthStore();
      }
      if (error || !success) {
        open == null ? void 0 : open(buildNotification3(error));
      }
      if (redirectTo) {
        if (routerType === "legacy") {
          replace(redirectTo);
        } else {
          go({ to: redirectTo, type: "replace" });
        }
      } else {
        if (routerType === "legacy") {
          replace("/");
        }
      }
    },
    onError: (error) => {
      open == null ? void 0 : open(buildNotification3(error));
    },
    ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions,
    meta: {
      ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions == null ? void 0 : mutationOptions.meta,
      ...getXRay5("useRegister", preferLegacyKeys)
    }
  });
  const v3LegacyAuthProviderCompatibleMutation = useMutation3({
    mutationKey: [
      ...keys2().auth().action("register").get(preferLegacyKeys),
      "v3LegacyAuthProviderCompatible"
    ],
    mutationFn: legacyRegisterFromContext,
    onSuccess: async (redirectPathFromAuth) => {
      if (redirectPathFromAuth !== false) {
        if (redirectPathFromAuth) {
          if (routerType === "legacy") {
            replace(redirectPathFromAuth);
          } else {
            go({ to: redirectPathFromAuth, type: "replace" });
          }
        } else {
          if (routerType === "legacy") {
            replace("/");
          } else {
            go({ to: "/", type: "replace" });
          }
        }
        await invalidateAuthStore();
        close == null ? void 0 : close("register-error");
      }
    },
    onError: (error) => {
      open == null ? void 0 : open(buildNotification3(error));
    },
    ...v3LegacyAuthProviderCompatible ? mutationOptions : {},
    meta: {
      ...v3LegacyAuthProviderCompatible ? mutationOptions == null ? void 0 : mutationOptions.meta : {},
      ...getXRay5("useRegister", preferLegacyKeys)
    }
  });
  return v3LegacyAuthProviderCompatible ? v3LegacyAuthProviderCompatibleMutation : mutation;
}
__name(useRegister, "useRegister");
var buildNotification3 = /* @__PURE__ */ __name((error) => {
  return {
    message: (error == null ? void 0 : error.name) || "Register Error",
    description: (error == null ? void 0 : error.message) || "Error while registering",
    key: "register-error",
    type: "error"
  };
}, "buildNotification");
var buildSuccessNotification3 = /* @__PURE__ */ __name((successNotification) => {
  return {
    message: successNotification.message,
    description: successNotification.description,
    key: "register-success",
    type: "success"
  };
}, "buildSuccessNotification");

// src/hooks/auth/useForgotPassword/index.ts
import { getXRay as getXRay6 } from "@refinedev/devtools-internal";
import {
  useMutation as useMutation4
} from "@tanstack/react-query";
function useForgotPassword({
  v3LegacyAuthProviderCompatible,
  mutationOptions
} = {}) {
  const routerType = useRouterType();
  const go = useGo();
  const { replace } = useNavigation();
  const {
    forgotPassword: v3LegacyAuthProviderCompatibleForgotPasswordFromContext
  } = useLegacyAuthContext();
  const { forgotPassword: forgotPasswordFromContext } = useAuthBindingsContext();
  const { close, open } = useNotification();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const mutation = useMutation4({
    mutationKey: keys2().auth().action("forgotPassword").get(preferLegacyKeys),
    mutationFn: forgotPasswordFromContext,
    onSuccess: ({ success, redirectTo, error, successNotification }) => {
      if (success) {
        close == null ? void 0 : close("forgot-password-error");
        if (successNotification) {
          open == null ? void 0 : open(buildSuccessNotification4(successNotification));
        }
      }
      if (error || !success) {
        open == null ? void 0 : open(buildNotification4(error));
      }
      if (redirectTo) {
        if (routerType === "legacy") {
          replace(redirectTo);
        } else {
          go({ to: redirectTo, type: "replace" });
        }
      }
    },
    onError: (error) => {
      open == null ? void 0 : open(buildNotification4(error));
    },
    ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions,
    meta: {
      ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions == null ? void 0 : mutationOptions.meta,
      ...getXRay6("useForgotPassword", preferLegacyKeys)
    }
  });
  const v3LegacyAuthProviderCompatibleMutation = useMutation4({
    mutationKey: [
      ...keys2().auth().action("forgotPassword").get(preferLegacyKeys),
      "v3LegacyAuthProviderCompatible"
    ],
    mutationFn: v3LegacyAuthProviderCompatibleForgotPasswordFromContext,
    onSuccess: (redirectPathFromAuth) => {
      if (redirectPathFromAuth !== false) {
        if (redirectPathFromAuth) {
          if (routerType === "legacy") {
            replace(redirectPathFromAuth);
          } else {
            go({ to: redirectPathFromAuth, type: "replace" });
          }
        }
      }
      close == null ? void 0 : close("forgot-password-error");
    },
    onError: (error) => {
      open == null ? void 0 : open(buildNotification4(error));
    },
    ...v3LegacyAuthProviderCompatible ? mutationOptions : {},
    meta: {
      ...v3LegacyAuthProviderCompatible ? mutationOptions == null ? void 0 : mutationOptions.meta : {},
      ...getXRay6("useForgotPassword", preferLegacyKeys)
    }
  });
  return v3LegacyAuthProviderCompatible ? v3LegacyAuthProviderCompatibleMutation : mutation;
}
__name(useForgotPassword, "useForgotPassword");
var buildNotification4 = /* @__PURE__ */ __name((error) => {
  return {
    message: (error == null ? void 0 : error.name) || "Forgot Password Error",
    description: (error == null ? void 0 : error.message) || "Error while resetting password",
    key: "forgot-password-error",
    type: "error"
  };
}, "buildNotification");
var buildSuccessNotification4 = /* @__PURE__ */ __name((successNotification) => {
  return {
    message: successNotification.message,
    description: successNotification.description,
    key: "forgot-password-success",
    type: "success"
  };
}, "buildSuccessNotification");

// src/hooks/auth/useUpdatePassword/index.ts
import React6 from "react";
import { getXRay as getXRay7 } from "@refinedev/devtools-internal";
import {
  useMutation as useMutation5
} from "@tanstack/react-query";
import qs3 from "qs";
function useUpdatePassword({
  v3LegacyAuthProviderCompatible,
  mutationOptions
} = {}) {
  const routerType = useRouterType();
  const go = useGo();
  const { replace } = useNavigation();
  const { updatePassword: legacyUpdatePasswordFromContext } = useLegacyAuthContext();
  const { updatePassword: updatePasswordFromContext } = useAuthBindingsContext();
  const { close, open } = useNotification();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const parsed = useParsed();
  const { useLocation } = useRouterContext();
  const { search } = useLocation();
  const params = React6.useMemo(() => {
    if (routerType === "legacy") {
      const queryStrings = qs3.parse(search, {
        ignoreQueryPrefix: true
      });
      return queryStrings ?? {};
    }
    return parsed.params ?? {};
  }, [search, parsed, routerType]);
  const mutation = useMutation5({
    mutationKey: keys2().auth().action("updatePassword").get(preferLegacyKeys),
    mutationFn: async (variables) => {
      return updatePasswordFromContext == null ? void 0 : updatePasswordFromContext({
        ...params,
        ...variables
      });
    },
    onSuccess: ({ success, redirectTo, error, successNotification }) => {
      if (success) {
        close == null ? void 0 : close("update-password-error");
        if (successNotification) {
          open == null ? void 0 : open(buildSuccessNotification5(successNotification));
        }
      }
      if (error || !success) {
        open == null ? void 0 : open(buildNotification5(error));
      }
      if (redirectTo) {
        if (routerType === "legacy") {
          replace(redirectTo);
        } else {
          go({ to: redirectTo, type: "replace" });
        }
      }
    },
    onError: (error) => {
      open == null ? void 0 : open(buildNotification5(error));
    },
    ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions,
    meta: {
      ...v3LegacyAuthProviderCompatible === true ? {} : mutationOptions == null ? void 0 : mutationOptions.meta,
      ...getXRay7("useUpdatePassword", preferLegacyKeys)
    }
  });
  const v3LegacyAuthProviderCompatibleMutation = useMutation5({
    mutationKey: [
      ...keys2().auth().action("updatePassword").get(preferLegacyKeys),
      "v3LegacyAuthProviderCompatible"
    ],
    mutationFn: async (variables) => {
      return legacyUpdatePasswordFromContext == null ? void 0 : legacyUpdatePasswordFromContext({
        ...params,
        ...variables
      });
    },
    onSuccess: (redirectPathFromAuth) => {
      if (redirectPathFromAuth !== false) {
        if (redirectPathFromAuth) {
          if (routerType === "legacy") {
            replace(redirectPathFromAuth);
          } else {
            go({ to: redirectPathFromAuth, type: "replace" });
          }
        }
      }
      close == null ? void 0 : close("update-password-error");
    },
    onError: (error) => {
      open == null ? void 0 : open(buildNotification5(error));
    },
    ...v3LegacyAuthProviderCompatible ? mutationOptions : {},
    meta: {
      ...v3LegacyAuthProviderCompatible ? mutationOptions == null ? void 0 : mutationOptions.meta : {},
      ...getXRay7("useUpdatePassword", preferLegacyKeys)
    }
  });
  return v3LegacyAuthProviderCompatible ? v3LegacyAuthProviderCompatibleMutation : mutation;
}
__name(useUpdatePassword, "useUpdatePassword");
var buildNotification5 = /* @__PURE__ */ __name((error) => {
  return {
    message: (error == null ? void 0 : error.name) || "Update Password Error",
    description: (error == null ? void 0 : error.message) || "Error while updating password",
    key: "update-password-error",
    type: "error"
  };
}, "buildNotification");
var buildSuccessNotification5 = /* @__PURE__ */ __name((successNotification) => {
  return {
    message: successNotification.message,
    description: successNotification.description,
    key: "update-password-success",
    type: "success"
  };
}, "buildSuccessNotification");

// src/hooks/auth/useIsAuthenticated/index.ts
import { getXRay as getXRay8 } from "@refinedev/devtools-internal";
import { useQuery as useQuery3 } from "@tanstack/react-query";
function useIsAuthenticated({
  v3LegacyAuthProviderCompatible = false,
  params
} = {}) {
  const { checkAuth } = useLegacyAuthContext();
  const { check } = useAuthBindingsContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const queryResponse = useQuery3({
    queryKey: keys2().auth().action("check").params(params).get(preferLegacyKeys),
    queryFn: async () => await (check == null ? void 0 : check(params)) ?? {},
    retry: false,
    enabled: !v3LegacyAuthProviderCompatible,
    meta: {
      ...getXRay8("useIsAuthenticated", preferLegacyKeys)
    }
  });
  const legacyQueryResponse = useQuery3({
    queryKey: [
      ...keys2().auth().action("check").params(params).get(preferLegacyKeys),
      "v3LegacyAuthProviderCompatible"
    ],
    queryFn: async () => await (checkAuth == null ? void 0 : checkAuth(params)) ?? {},
    retry: false,
    enabled: v3LegacyAuthProviderCompatible,
    meta: {
      ...getXRay8("useIsAuthenticated", preferLegacyKeys)
    }
  });
  return v3LegacyAuthProviderCompatible ? legacyQueryResponse : queryResponse;
}
__name(useIsAuthenticated, "useIsAuthenticated");
var useAuthenticated = useIsAuthenticated;

// src/hooks/auth/useOnError/index.ts
import { getXRay as getXRay9 } from "@refinedev/devtools-internal";
import { useMutation as useMutation6 } from "@tanstack/react-query";
function useOnError({
  v3LegacyAuthProviderCompatible = false
} = {}) {
  const routerType = useRouterType();
  const go = useGo();
  const { replace } = useNavigation();
  const { checkError: legacyCheckErrorFromContext } = useLegacyAuthContext();
  const { onError: onErrorFromContext } = useAuthBindingsContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const { mutate: legacyLogout } = useLogout({
    v3LegacyAuthProviderCompatible: Boolean(v3LegacyAuthProviderCompatible)
  });
  const { mutate: logout } = useLogout({
    v3LegacyAuthProviderCompatible: Boolean(v3LegacyAuthProviderCompatible)
  });
  const mutation = useMutation6({
    mutationKey: keys2().auth().action("onError").get(preferLegacyKeys),
    ...onErrorFromContext ? {
      mutationFn: onErrorFromContext,
      onSuccess: ({ logout: shouldLogout, redirectTo }) => {
        if (shouldLogout) {
          logout({ redirectPath: redirectTo });
          return;
        }
        if (redirectTo) {
          if (routerType === "legacy") {
            replace(redirectTo);
          } else {
            go({ to: redirectTo, type: "replace" });
          }
          return;
        }
      }
    } : {
      mutationFn: () => ({})
    },
    meta: {
      ...getXRay9("useOnError", preferLegacyKeys)
    }
  });
  const v3LegacyAuthProviderCompatibleMutation = useMutation6({
    mutationKey: [
      ...keys2().auth().action("onError").get(preferLegacyKeys),
      "v3LegacyAuthProviderCompatible"
    ],
    mutationFn: legacyCheckErrorFromContext,
    onError: (redirectPath) => {
      legacyLogout({ redirectPath });
    },
    meta: {
      ...getXRay9("useOnError", preferLegacyKeys)
    }
  });
  return v3LegacyAuthProviderCompatible ? v3LegacyAuthProviderCompatibleMutation : mutation;
}
__name(useOnError, "useOnError");
var useCheckError = useOnError;

// src/hooks/auth/useIsExistAuthentication/index.ts
var useIsExistAuthentication = /* @__PURE__ */ __name(() => {
  const { isProvided: legacyIsProvided } = useLegacyAuthContext();
  const { isProvided } = useAuthBindingsContext();
  return Boolean(isProvided || legacyIsProvided);
}, "useIsExistAuthentication");

// src/hooks/data/useList.ts
import { getXRay as getXRay10 } from "@refinedev/devtools-internal";
import {
  useQuery as useQuery4
} from "@tanstack/react-query";

// src/hooks/useLoadingOvertime/index.ts
import { useEffect as useEffect2, useState as useState3 } from "react";
var useLoadingOvertime = /* @__PURE__ */ __name(({
  enabled: enabledProp,
  isLoading,
  interval: intervalProp,
  onInterval: onIntervalProp
}) => {
  const [elapsedTime, setElapsedTime] = useState3(void 0);
  const { options } = useRefineContext();
  const { overtime } = options;
  const interval = intervalProp ?? overtime.interval;
  const onInterval = onIntervalProp ?? (overtime == null ? void 0 : overtime.onInterval);
  const enabled = typeof enabledProp !== "undefined" ? enabledProp : typeof overtime.enabled !== "undefined" ? overtime.enabled : true;
  useEffect2(() => {
    let intervalFn;
    if (enabled && isLoading) {
      intervalFn = setInterval(() => {
        setElapsedTime((prevElapsedTime) => {
          if (prevElapsedTime === void 0) {
            return interval;
          }
          return prevElapsedTime + interval;
        });
      }, interval);
    }
    return () => {
      if (typeof intervalFn !== "undefined") {
        clearInterval(intervalFn);
      }
      setElapsedTime(void 0);
    };
  }, [isLoading, interval, enabled]);
  useEffect2(() => {
    if (onInterval && elapsedTime) {
      onInterval(elapsedTime);
    }
  }, [elapsedTime]);
  return {
    elapsedTime
  };
}, "useLoadingOvertime");

// src/hooks/data/useList.ts
var useList = /* @__PURE__ */ __name(({
  resource: resourceFromProp,
  config,
  filters,
  hasPagination,
  pagination,
  sorters,
  queryOptions,
  successNotification,
  errorNotification,
  meta,
  metaData,
  liveMode,
  onLiveEvent,
  liveParams,
  dataProviderName,
  overtimeOptions
} = {}) => {
  const { resources, resource, identifier } = useResource(resourceFromProp);
  const dataProvider = useDataProvider();
  const translate = useTranslate();
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const handleNotification = useHandleNotification();
  const getMeta = useMeta();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const pickedDataProvider = pickDataProvider(
    identifier,
    dataProviderName,
    resources
  );
  const preferredMeta = pickNotDeprecated(meta, metaData);
  const prefferedFilters = pickNotDeprecated(filters, config == null ? void 0 : config.filters);
  const prefferedSorters = pickNotDeprecated(sorters, config == null ? void 0 : config.sort);
  const prefferedHasPagination = pickNotDeprecated(
    hasPagination,
    config == null ? void 0 : config.hasPagination
  );
  const prefferedPagination = handlePaginationParams({
    pagination,
    configPagination: config == null ? void 0 : config.pagination,
    hasPagination: prefferedHasPagination
  });
  const isServerPagination = prefferedPagination.mode === "server";
  const combinedMeta = getMeta({ resource, meta: preferredMeta });
  const notificationValues = {
    meta: combinedMeta,
    metaData: combinedMeta,
    filters: prefferedFilters,
    hasPagination: isServerPagination,
    pagination: prefferedPagination,
    sorters: prefferedSorters,
    config: {
      ...config,
      sort: prefferedSorters
    }
  };
  const isEnabled = (queryOptions == null ? void 0 : queryOptions.enabled) === void 0 || (queryOptions == null ? void 0 : queryOptions.enabled) === true;
  const { getList } = dataProvider(pickedDataProvider);
  useResourceSubscription({
    resource: identifier,
    types: ["*"],
    params: {
      meta: combinedMeta,
      metaData: combinedMeta,
      pagination: prefferedPagination,
      hasPagination: isServerPagination,
      sort: prefferedSorters,
      sorters: prefferedSorters,
      filters: prefferedFilters,
      subscriptionType: "useList",
      ...liveParams
    },
    channel: `resources/${resource == null ? void 0 : resource.name}`,
    enabled: isEnabled,
    liveMode,
    onLiveEvent,
    dataProviderName: pickedDataProvider,
    meta: {
      ...meta,
      dataProviderName
    }
  });
  const queryResponse = useQuery4({
    queryKey: keys2().data(pickedDataProvider).resource(identifier ?? "").action("list").params({
      ...preferredMeta || {},
      filters: prefferedFilters,
      hasPagination: isServerPagination,
      ...isServerPagination && {
        pagination: prefferedPagination
      },
      ...sorters && {
        sorters
      },
      ...(config == null ? void 0 : config.sort) && {
        sort: config == null ? void 0 : config.sort
      }
    }).get(preferLegacyKeys),
    queryFn: (context) => {
      const meta2 = {
        ...combinedMeta,
        queryContext: prepareQueryContext(context)
      };
      return getList({
        resource: (resource == null ? void 0 : resource.name) ?? "",
        pagination: prefferedPagination,
        hasPagination: isServerPagination,
        filters: prefferedFilters,
        sort: prefferedSorters,
        sorters: prefferedSorters,
        meta: meta2,
        metaData: meta2
      });
    },
    ...queryOptions,
    enabled: typeof (queryOptions == null ? void 0 : queryOptions.enabled) !== "undefined" ? queryOptions == null ? void 0 : queryOptions.enabled : !!(resource == null ? void 0 : resource.name),
    select: (rawData) => {
      var _a;
      let data = rawData;
      const { current, mode, pageSize } = prefferedPagination;
      if (mode === "client") {
        data = {
          ...data,
          data: data.data.slice((current - 1) * pageSize, current * pageSize),
          total: data.total
        };
      }
      if (queryOptions == null ? void 0 : queryOptions.select) {
        return (_a = queryOptions == null ? void 0 : queryOptions.select) == null ? void 0 : _a.call(queryOptions, data);
      }
      return data;
    },
    onSuccess: (data) => {
      var _a;
      (_a = queryOptions == null ? void 0 : queryOptions.onSuccess) == null ? void 0 : _a.call(queryOptions, data);
      const notificationConfig = typeof successNotification === "function" ? successNotification(data, notificationValues, identifier) : successNotification;
      handleNotification(notificationConfig);
    },
    onError: (err) => {
      var _a;
      checkError(err);
      (_a = queryOptions == null ? void 0 : queryOptions.onError) == null ? void 0 : _a.call(queryOptions, err);
      const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, notificationValues, identifier) : errorNotification;
      handleNotification(notificationConfig, {
        key: `${identifier}-useList-notification`,
        message: translate(
          "notifications.error",
          { statusCode: err.statusCode },
          `Error (status code: ${err.statusCode})`
        ),
        description: err.message,
        type: "error"
      });
    },
    meta: {
      ...queryOptions == null ? void 0 : queryOptions.meta,
      ...getXRay10("useList", preferLegacyKeys, resource == null ? void 0 : resource.name)
    }
  });
  const { elapsedTime } = useLoadingOvertime({
    ...overtimeOptions,
    isLoading: queryResponse.isFetching
  });
  return { ...queryResponse, overtime: { elapsedTime } };
}, "useList");

// src/hooks/data/useOne.ts
import { getXRay as getXRay11 } from "@refinedev/devtools-internal";
import {
  useQuery as useQuery5
} from "@tanstack/react-query";
var useOne = /* @__PURE__ */ __name(({
  resource: resourceFromProp,
  id,
  queryOptions,
  successNotification,
  errorNotification,
  meta,
  metaData,
  liveMode,
  onLiveEvent,
  liveParams,
  dataProviderName,
  overtimeOptions
}) => {
  const { resources, resource, identifier } = useResource(resourceFromProp);
  const dataProvider = useDataProvider();
  const translate = useTranslate();
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const handleNotification = useHandleNotification();
  const getMeta = useMeta();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const preferredMeta = pickNotDeprecated(meta, metaData);
  const pickedDataProvider = pickDataProvider(
    identifier,
    dataProviderName,
    resources
  );
  const { getOne } = dataProvider(pickedDataProvider);
  const combinedMeta = getMeta({ resource, meta: preferredMeta });
  useResourceSubscription({
    resource: identifier,
    types: ["*"],
    channel: `resources/${resource == null ? void 0 : resource.name}`,
    params: {
      ids: id ? [id] : [],
      id,
      meta: combinedMeta,
      metaData: combinedMeta,
      subscriptionType: "useOne",
      ...liveParams
    },
    enabled: typeof (queryOptions == null ? void 0 : queryOptions.enabled) !== "undefined" ? queryOptions == null ? void 0 : queryOptions.enabled : typeof (resource == null ? void 0 : resource.name) !== "undefined" && typeof id !== "undefined",
    liveMode,
    onLiveEvent,
    dataProviderName: pickedDataProvider,
    meta: {
      ...meta,
      dataProviderName
    }
  });
  const queryResponse = useQuery5({
    queryKey: keys2().data(pickedDataProvider).resource(identifier ?? "").action("one").id(id ?? "").params({
      ...preferredMeta || {}
    }).get(preferLegacyKeys),
    queryFn: (context) => getOne({
      resource: (resource == null ? void 0 : resource.name) ?? "",
      id,
      meta: {
        ...combinedMeta,
        queryContext: prepareQueryContext(context)
      },
      metaData: {
        ...combinedMeta,
        queryContext: prepareQueryContext(context)
      }
    }),
    ...queryOptions,
    enabled: typeof (queryOptions == null ? void 0 : queryOptions.enabled) !== "undefined" ? queryOptions == null ? void 0 : queryOptions.enabled : typeof id !== "undefined",
    onSuccess: (data) => {
      var _a;
      (_a = queryOptions == null ? void 0 : queryOptions.onSuccess) == null ? void 0 : _a.call(queryOptions, data);
      const notificationConfig = typeof successNotification === "function" ? successNotification(
        data,
        {
          id,
          ...combinedMeta
        },
        identifier
      ) : successNotification;
      handleNotification(notificationConfig);
    },
    onError: (err) => {
      var _a;
      checkError(err);
      (_a = queryOptions == null ? void 0 : queryOptions.onError) == null ? void 0 : _a.call(queryOptions, err);
      const notificationConfig = typeof errorNotification === "function" ? errorNotification(
        err,
        {
          id,
          ...combinedMeta
        },
        identifier
      ) : errorNotification;
      handleNotification(notificationConfig, {
        key: `${id}-${identifier}-getOne-notification`,
        message: translate(
          "notifications.error",
          { statusCode: err.statusCode },
          `Error (status code: ${err.statusCode})`
        ),
        description: err.message,
        type: "error"
      });
    },
    meta: {
      ...queryOptions == null ? void 0 : queryOptions.meta,
      ...getXRay11("useOne", preferLegacyKeys, resource == null ? void 0 : resource.name)
    }
  });
  const { elapsedTime } = useLoadingOvertime({
    ...overtimeOptions,
    isLoading: queryResponse.isFetching
  });
  return { ...queryResponse, overtime: { elapsedTime } };
}, "useOne");

// src/hooks/data/useMany.ts
import { getXRay as getXRay12 } from "@refinedev/devtools-internal";
import {
  useQuery as useQuery6
} from "@tanstack/react-query";
import warnOnce2 from "warn-once";
var useMany = /* @__PURE__ */ __name(({
  resource: resourceFromProp,
  ids,
  queryOptions,
  successNotification,
  errorNotification,
  meta,
  metaData,
  liveMode,
  onLiveEvent,
  liveParams,
  dataProviderName,
  overtimeOptions
}) => {
  const { resources, resource, identifier } = useResource(resourceFromProp);
  const dataProvider = useDataProvider();
  const translate = useTranslate();
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const handleNotification = useHandleNotification();
  const getMeta = useMeta();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const preferredMeta = pickNotDeprecated(meta, metaData);
  const pickedDataProvider = pickDataProvider(
    identifier,
    dataProviderName,
    resources
  );
  const isEnabled = (queryOptions == null ? void 0 : queryOptions.enabled) === void 0 || (queryOptions == null ? void 0 : queryOptions.enabled) === true;
  const { getMany, getOne } = dataProvider(pickedDataProvider);
  const combinedMeta = getMeta({ resource, meta: preferredMeta });
  const hasIds = Array.isArray(ids);
  const hasResource = Boolean(resource == null ? void 0 : resource.name);
  const manuallyEnabled = (queryOptions == null ? void 0 : queryOptions.enabled) === true;
  warnOnce2(!hasIds && !manuallyEnabled, idsWarningMessage(ids, resource == null ? void 0 : resource.name));
  warnOnce2(!hasResource && !manuallyEnabled, resourceWarningMessage());
  useResourceSubscription({
    resource: identifier,
    types: ["*"],
    params: {
      ids: ids ?? [],
      meta: combinedMeta,
      metaData: combinedMeta,
      subscriptionType: "useMany",
      ...liveParams
    },
    channel: `resources/${(resource == null ? void 0 : resource.name) ?? ""}`,
    enabled: isEnabled,
    liveMode,
    onLiveEvent,
    dataProviderName: pickedDataProvider,
    meta: {
      ...meta,
      dataProviderName
    }
  });
  const queryResponse = useQuery6({
    queryKey: keys2().data(pickedDataProvider).resource(identifier).action("many").ids(...ids ?? []).params({
      ...preferredMeta || {}
    }).get(preferLegacyKeys),
    queryFn: (context) => {
      const meta2 = {
        ...combinedMeta,
        queryContext: prepareQueryContext(context)
      };
      if (getMany) {
        return getMany({
          resource: resource == null ? void 0 : resource.name,
          ids,
          meta: meta2,
          metaData: meta2
        });
      }
      return handleMultiple(
        ids.map(
          (id) => getOne({
            resource: resource == null ? void 0 : resource.name,
            id,
            meta: meta2,
            metaData: meta2
          })
        )
      );
    },
    enabled: hasIds && hasResource,
    ...queryOptions,
    onSuccess: (data) => {
      var _a;
      (_a = queryOptions == null ? void 0 : queryOptions.onSuccess) == null ? void 0 : _a.call(queryOptions, data);
      const notificationConfig = typeof successNotification === "function" ? successNotification(data, ids, identifier) : successNotification;
      handleNotification(notificationConfig);
    },
    onError: (err) => {
      var _a;
      checkError(err);
      (_a = queryOptions == null ? void 0 : queryOptions.onError) == null ? void 0 : _a.call(queryOptions, err);
      const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, ids, identifier) : errorNotification;
      handleNotification(notificationConfig, {
        key: `${ids[0]}-${identifier}-getMany-notification`,
        message: translate(
          "notifications.error",
          { statusCode: err.statusCode },
          `Error (status code: ${err.statusCode})`
        ),
        description: err.message,
        type: "error"
      });
    },
    meta: {
      ...queryOptions == null ? void 0 : queryOptions.meta,
      ...getXRay12("useMany", preferLegacyKeys, resource == null ? void 0 : resource.name)
    }
  });
  const { elapsedTime } = useLoadingOvertime({
    ...overtimeOptions,
    isLoading: queryResponse.isFetching
  });
  return { ...queryResponse, overtime: { elapsedTime } };
}, "useMany");
var idsWarningMessage = /* @__PURE__ */ __name((ids, resource) => `[useMany]: Missing "ids" prop. Expected an array of ids, but got "${typeof ids}". Resource: "${resource}"

See https://refine.dev/docs/data/hooks/use-many/#ids-`, "idsWarningMessage");
var resourceWarningMessage = /* @__PURE__ */ __name(() => `[useMany]: Missing "resource" prop. Expected a string, but got undefined.

See https://refine.dev/docs/data/hooks/use-many/#resource-`, "resourceWarningMessage");

// src/hooks/data/useUpdate.ts
import { getXRay as getXRay13 } from "@refinedev/devtools-internal";
import {
  useMutation as useMutation7,
  useQueryClient as useQueryClient2
} from "@tanstack/react-query";

// src/contexts/undoableQueue/types.ts
var ActionTypes = /* @__PURE__ */ ((ActionTypes2) => {
  ActionTypes2["ADD"] = "ADD";
  ActionTypes2["REMOVE"] = "REMOVE";
  ActionTypes2["DECREASE_NOTIFICATION_SECOND"] = "DECREASE_NOTIFICATION_SECOND";
  return ActionTypes2;
})(ActionTypes || {});

// src/hooks/data/useUpdate.ts
var useUpdate = /* @__PURE__ */ __name(({
  id: idFromProps,
  resource: resourceFromProps,
  values: valuesFromProps,
  dataProviderName: dataProviderNameFromProps,
  successNotification: successNotificationFromProps,
  errorNotification: errorNotificationFromProps,
  meta: metaFromProps,
  metaData: metaDataFromProps,
  mutationMode: mutationModeFromProps,
  undoableTimeout: undoableTimeoutFromProps,
  onCancel: onCancelFromProps,
  optimisticUpdateMap: optimisticUpdateMapFromProps,
  invalidates: invalidatesFromProps,
  mutationOptions,
  overtimeOptions
} = {}) => {
  const { resources, select } = useResource();
  const queryClient = useQueryClient2();
  const dataProvider = useDataProvider();
  const {
    mutationMode: mutationModeContext,
    undoableTimeout: undoableTimeoutContext
  } = useMutationMode();
  const translate = useTranslate();
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const publish = usePublish();
  const { log } = useLog();
  const { notificationDispatch } = useCancelNotification();
  const handleNotification = useHandleNotification();
  const invalidateStore = useInvalidate();
  const getMeta = useMeta();
  const {
    options: { textTransformers }
  } = useRefineContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const mutationResult = useMutation7({
    mutationFn: ({
      id = idFromProps,
      values = valuesFromProps,
      resource: resourceName = resourceFromProps,
      mutationMode = mutationModeFromProps,
      undoableTimeout = undoableTimeoutFromProps,
      onCancel = onCancelFromProps,
      meta = metaFromProps,
      metaData = metaDataFromProps,
      dataProviderName = dataProviderNameFromProps
    }) => {
      if (typeof id === "undefined")
        throw missingIdError;
      if (!values)
        throw missingValuesError;
      if (!resourceName)
        throw missingResourceError;
      const { resource, identifier } = select(resourceName);
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      const mutationModePropOrContext = mutationMode ?? mutationModeContext;
      const undoableTimeoutPropOrContext = undoableTimeout ?? undoableTimeoutContext;
      if (!(mutationModePropOrContext === "undoable")) {
        return dataProvider(
          pickDataProvider(identifier, dataProviderName, resources)
        ).update({
          resource: resource.name,
          id,
          variables: values,
          meta: combinedMeta,
          metaData: combinedMeta
        });
      }
      const updatePromise = new Promise(
        (resolve, reject) => {
          const doMutation = /* @__PURE__ */ __name(() => {
            dataProvider(
              pickDataProvider(identifier, dataProviderName, resources)
            ).update({
              resource: resource.name,
              id,
              variables: values,
              meta: combinedMeta,
              metaData: combinedMeta
            }).then((result) => resolve(result)).catch((err) => reject(err));
          }, "doMutation");
          const cancelMutation = /* @__PURE__ */ __name(() => {
            reject({ message: "mutationCancelled" });
          }, "cancelMutation");
          if (onCancel) {
            onCancel(cancelMutation);
          }
          notificationDispatch({
            type: "ADD" /* ADD */,
            payload: {
              id,
              resource: identifier,
              cancelMutation,
              doMutation,
              seconds: undoableTimeoutPropOrContext,
              isSilent: !!onCancel
            }
          });
        }
      );
      return updatePromise;
    },
    onMutate: async ({
      resource: resourceName = resourceFromProps,
      id = idFromProps,
      mutationMode = mutationModeFromProps,
      values = valuesFromProps,
      dataProviderName = dataProviderNameFromProps,
      meta = metaFromProps,
      metaData = metaDataFromProps,
      optimisticUpdateMap = optimisticUpdateMapFromProps ?? {
        list: true,
        many: true,
        detail: true
      }
    }) => {
      if (typeof id === "undefined")
        throw missingIdError;
      if (!values)
        throw missingValuesError;
      if (!resourceName)
        throw missingResourceError;
      const { identifier } = select(resourceName);
      const {
        gqlMutation: _,
        gqlQuery: __,
        ...preferredMeta
      } = pickNotDeprecated(meta, metaData) ?? {};
      const queryKey = queryKeysReplacement(preferLegacyKeys)(
        identifier,
        pickDataProvider(identifier, dataProviderName, resources),
        preferredMeta
      );
      const resourceKeys = keys2().data(pickDataProvider(identifier, dataProviderName, resources)).resource(identifier);
      const previousQueries = queryClient.getQueriesData(resourceKeys.get(preferLegacyKeys));
      const mutationModePropOrContext = mutationMode ?? mutationModeContext;
      await queryClient.cancelQueries(
        resourceKeys.get(preferLegacyKeys),
        void 0,
        {
          silent: true
        }
      );
      if (mutationModePropOrContext !== "pessimistic") {
        if (optimisticUpdateMap.list) {
          queryClient.setQueriesData(
            resourceKeys.action("list").params(preferredMeta ?? {}).get(preferLegacyKeys),
            (previous) => {
              if (typeof optimisticUpdateMap.list === "function") {
                return optimisticUpdateMap.list(previous, values, id);
              }
              if (!previous) {
                return null;
              }
              const data = previous.data.map((record) => {
                var _a;
                if (((_a = record.id) == null ? void 0 : _a.toString()) === (id == null ? void 0 : id.toString())) {
                  return {
                    id,
                    ...record,
                    ...values
                  };
                }
                return record;
              });
              return {
                ...previous,
                data
              };
            }
          );
        }
        if (optimisticUpdateMap.many) {
          queryClient.setQueriesData(
            resourceKeys.action("many").get(preferLegacyKeys),
            (previous) => {
              if (typeof optimisticUpdateMap.many === "function") {
                return optimisticUpdateMap.many(previous, values, id);
              }
              if (!previous) {
                return null;
              }
              const data = previous.data.map((record) => {
                var _a;
                if (((_a = record.id) == null ? void 0 : _a.toString()) === (id == null ? void 0 : id.toString())) {
                  record = {
                    id,
                    ...record,
                    ...values
                  };
                }
                return record;
              });
              return {
                ...previous,
                data
              };
            }
          );
        }
        if (optimisticUpdateMap.detail) {
          queryClient.setQueriesData(
            resourceKeys.action("one").id(id).params(preferredMeta ?? {}).get(preferLegacyKeys),
            (previous) => {
              if (typeof optimisticUpdateMap.detail === "function") {
                return optimisticUpdateMap.detail(previous, values, id);
              }
              if (!previous) {
                return null;
              }
              return {
                ...previous,
                data: {
                  ...previous.data,
                  ...values
                }
              };
            }
          );
        }
      }
      return {
        previousQueries,
        queryKey
      };
    },
    onSettled: (data, error, variables, context) => {
      var _a;
      const {
        id = idFromProps,
        resource: resourceName = resourceFromProps,
        dataProviderName = dataProviderNameFromProps,
        invalidates = invalidatesFromProps ?? ["list", "many", "detail"]
      } = variables;
      if (typeof id === "undefined")
        throw missingIdError;
      if (!resourceName)
        throw missingResourceError;
      const { identifier } = select(resourceName);
      invalidateStore({
        resource: identifier,
        dataProviderName: pickDataProvider(
          identifier,
          dataProviderName,
          resources
        ),
        invalidates,
        id
      });
      notificationDispatch({
        type: "REMOVE" /* REMOVE */,
        payload: { id, resource: identifier }
      });
      (_a = mutationOptions == null ? void 0 : mutationOptions.onSettled) == null ? void 0 : _a.call(mutationOptions, data, error, variables, context);
    },
    onSuccess: (data, variables, context) => {
      var _a, _b;
      const {
        id = idFromProps,
        resource: resourceName = resourceFromProps,
        successNotification = successNotificationFromProps,
        dataProviderName: dataProviderNameFromProp = dataProviderNameFromProps,
        values = valuesFromProps,
        meta = metaFromProps,
        metaData = metaDataFromProps
      } = variables;
      if (typeof id === "undefined")
        throw missingIdError;
      if (!values)
        throw missingValuesError;
      if (!resourceName)
        throw missingResourceError;
      const { resource, identifier } = select(resourceName);
      const resourceSingular = textTransformers.singular(identifier);
      const dataProviderName = pickDataProvider(
        identifier,
        dataProviderNameFromProp,
        resources
      );
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      const notificationConfig = typeof successNotification === "function" ? successNotification(data, { id, values }, identifier) : successNotification;
      handleNotification(notificationConfig, {
        key: `${id}-${identifier}-notification`,
        description: translate("notifications.success", "Successful"),
        message: translate(
          "notifications.editSuccess",
          {
            resource: translate(
              `${identifier}.${identifier}`,
              resourceSingular
            )
          },
          `Successfully updated ${resourceSingular}`
        ),
        type: "success"
      });
      publish == null ? void 0 : publish({
        channel: `resources/${resource.name}`,
        type: "updated",
        payload: {
          ids: ((_a = data.data) == null ? void 0 : _a.id) ? [data.data.id] : void 0
        },
        date: /* @__PURE__ */ new Date(),
        meta: {
          ...combinedMeta,
          dataProviderName
        }
      });
      let previousData;
      if (context) {
        const queryData = queryClient.getQueryData(
          context.queryKey.detail(id)
        );
        previousData = Object.keys(values || {}).reduce((acc, item) => {
          var _a2;
          acc[item] = (_a2 = queryData == null ? void 0 : queryData.data) == null ? void 0 : _a2[item];
          return acc;
        }, {});
      }
      const {
        fields: _fields,
        operation: _operation,
        variables: _variables,
        ...rest
      } = combinedMeta || {};
      log == null ? void 0 : log.mutate({
        action: "update",
        resource: resource.name,
        data: values,
        previousData,
        meta: {
          id,
          dataProviderName,
          ...rest
        }
      });
      (_b = mutationOptions == null ? void 0 : mutationOptions.onSuccess) == null ? void 0 : _b.call(mutationOptions, data, variables, context);
    },
    onError: (err, variables, context) => {
      var _a;
      const {
        id = idFromProps,
        resource: resourceName = resourceFromProps,
        errorNotification = errorNotificationFromProps,
        values = valuesFromProps
      } = variables;
      if (typeof id === "undefined")
        throw missingIdError;
      if (!values)
        throw missingValuesError;
      if (!resourceName)
        throw missingResourceError;
      const { identifier } = select(resourceName);
      if (context) {
        for (const query of context.previousQueries) {
          queryClient.setQueryData(query[0], query[1]);
        }
      }
      if (err.message !== "mutationCancelled") {
        checkError == null ? void 0 : checkError(err);
        const resourceSingular = textTransformers.singular(identifier);
        const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, { id, values }, identifier) : errorNotification;
        handleNotification(notificationConfig, {
          key: `${id}-${identifier}-notification`,
          message: translate(
            "notifications.editError",
            {
              resource: translate(
                `${identifier}.${identifier}`,
                resourceSingular
              ),
              statusCode: err.statusCode
            },
            `Error when updating ${resourceSingular} (status code: ${err.statusCode})`
          ),
          description: err.message,
          type: "error"
        });
      }
      (_a = mutationOptions == null ? void 0 : mutationOptions.onError) == null ? void 0 : _a.call(mutationOptions, err, variables, context);
    },
    mutationKey: keys2().data().mutation("update").get(preferLegacyKeys),
    ...mutationOptions,
    meta: {
      ...mutationOptions == null ? void 0 : mutationOptions.meta,
      ...getXRay13("useUpdate", preferLegacyKeys)
    }
  });
  const { mutate, mutateAsync, ...mutation } = mutationResult;
  const { elapsedTime } = useLoadingOvertime({
    ...overtimeOptions,
    isLoading: mutation.isLoading
  });
  const handleMutation = /* @__PURE__ */ __name((variables, options) => {
    return mutate(variables || {}, options);
  }, "handleMutation");
  const handleMutateAsync = /* @__PURE__ */ __name((variables, options) => {
    return mutateAsync(variables || {}, options);
  }, "handleMutateAsync");
  return {
    ...mutation,
    mutate: handleMutation,
    mutateAsync: handleMutateAsync,
    overtime: { elapsedTime }
  };
}, "useUpdate");
var missingResourceError = new Error(
  "[useUpdate]: `resource` is not defined or not matched but is required"
);
var missingIdError = new Error(
  "[useUpdate]: `id` is not defined but is required in edit and clone actions"
);
var missingValuesError = new Error(
  "[useUpdate]: `values` is not provided but is required"
);

// src/hooks/data/useCreate.ts
import { getXRay as getXRay14 } from "@refinedev/devtools-internal";
import {
  useMutation as useMutation8
} from "@tanstack/react-query";
var useCreate = /* @__PURE__ */ __name(({
  resource: resourceFromProps,
  values: valuesFromProps,
  dataProviderName: dataProviderNameFromProps,
  successNotification: successNotificationFromProps,
  errorNotification: errorNotificationFromProps,
  invalidates: invalidatesFromProps,
  meta: metaFromProps,
  metaData: metaDataFromProps,
  mutationOptions,
  overtimeOptions
} = {}) => {
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const dataProvider = useDataProvider();
  const invalidateStore = useInvalidate();
  const { resources, select } = useResource();
  const translate = useTranslate();
  const publish = usePublish();
  const { log } = useLog();
  const handleNotification = useHandleNotification();
  const getMeta = useMeta();
  const {
    options: { textTransformers }
  } = useRefineContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const mutationResult = useMutation8({
    mutationFn: ({
      resource: resourceName = resourceFromProps,
      values = valuesFromProps,
      meta = metaFromProps,
      metaData = metaDataFromProps,
      dataProviderName = dataProviderNameFromProps
    }) => {
      if (!values)
        throw missingValuesError2;
      if (!resourceName)
        throw missingResourceError2;
      const { resource, identifier } = select(resourceName);
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      return dataProvider(
        pickDataProvider(identifier, dataProviderName, resources)
      ).create({
        resource: resource.name,
        variables: values,
        meta: combinedMeta,
        metaData: combinedMeta
      });
    },
    onSuccess: (data, variables, context) => {
      var _a, _b, _c;
      const {
        resource: resourceName = resourceFromProps,
        successNotification: successNotificationFromProp = successNotificationFromProps,
        dataProviderName: dataProviderNameFromProp = dataProviderNameFromProps,
        invalidates = invalidatesFromProps ?? ["list", "many"],
        values = valuesFromProps,
        meta = metaFromProps,
        metaData = metaDataFromProps
      } = variables;
      if (!values)
        throw missingValuesError2;
      if (!resourceName)
        throw missingResourceError2;
      const { resource, identifier } = select(resourceName);
      const resourceSingular = textTransformers.singular(identifier);
      const dataProviderName = pickDataProvider(
        identifier,
        dataProviderNameFromProp,
        resources
      );
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      const notificationConfig = typeof successNotificationFromProp === "function" ? successNotificationFromProp(data, values, identifier) : successNotificationFromProp;
      handleNotification(notificationConfig, {
        key: `create-${identifier}-notification`,
        message: translate(
          "notifications.createSuccess",
          {
            resource: translate(
              `${identifier}.${identifier}`,
              resourceSingular
            )
          },
          `Successfully created ${resourceSingular}`
        ),
        description: translate("notifications.success", "Success"),
        type: "success"
      });
      invalidateStore({
        resource: identifier,
        dataProviderName,
        invalidates
      });
      publish == null ? void 0 : publish({
        channel: `resources/${resource.name}`,
        type: "created",
        payload: {
          ids: ((_a = data == null ? void 0 : data.data) == null ? void 0 : _a.id) ? [data.data.id] : void 0
        },
        date: /* @__PURE__ */ new Date(),
        meta: {
          ...combinedMeta,
          dataProviderName
        }
      });
      const {
        fields: _fields,
        operation: _operation,
        variables: _variables,
        ...rest
      } = combinedMeta || {};
      log == null ? void 0 : log.mutate({
        action: "create",
        resource: resource.name,
        data: values,
        meta: {
          dataProviderName,
          id: ((_b = data == null ? void 0 : data.data) == null ? void 0 : _b.id) ?? void 0,
          ...rest
        }
      });
      (_c = mutationOptions == null ? void 0 : mutationOptions.onSuccess) == null ? void 0 : _c.call(mutationOptions, data, variables, context);
    },
    onError: (err, variables, context) => {
      var _a;
      const {
        resource: resourceName = resourceFromProps,
        errorNotification: errorNotificationFromProp = errorNotificationFromProps,
        values = valuesFromProps
      } = variables;
      if (!values)
        throw missingValuesError2;
      if (!resourceName)
        throw missingResourceError2;
      checkError(err);
      const { identifier } = select(resourceName);
      const resourceSingular = textTransformers.singular(identifier);
      const notificationConfig = typeof errorNotificationFromProp === "function" ? errorNotificationFromProp(err, values, identifier) : errorNotificationFromProp;
      handleNotification(notificationConfig, {
        key: `create-${identifier}-notification`,
        description: err.message,
        message: translate(
          "notifications.createError",
          {
            resource: translate(
              `${identifier}.${identifier}`,
              resourceSingular
            ),
            statusCode: err.statusCode
          },
          `There was an error creating ${resourceSingular} (status code: ${err.statusCode})`
        ),
        type: "error"
      });
      (_a = mutationOptions == null ? void 0 : mutationOptions.onError) == null ? void 0 : _a.call(mutationOptions, err, variables, context);
    },
    mutationKey: keys2().data().mutation("create").get(preferLegacyKeys),
    ...mutationOptions,
    meta: {
      ...mutationOptions == null ? void 0 : mutationOptions.meta,
      ...getXRay14("useCreate", preferLegacyKeys)
    }
  });
  const { mutate, mutateAsync, ...mutation } = mutationResult;
  const { elapsedTime } = useLoadingOvertime({
    ...overtimeOptions,
    isLoading: mutation.isLoading
  });
  const handleMutation = /* @__PURE__ */ __name((variables, options) => {
    return mutate(variables || {}, options);
  }, "handleMutation");
  const handleMutateAsync = /* @__PURE__ */ __name((variables, options) => {
    return mutateAsync(variables || {}, options);
  }, "handleMutateAsync");
  return {
    ...mutation,
    mutate: handleMutation,
    mutateAsync: handleMutateAsync,
    overtime: { elapsedTime }
  };
}, "useCreate");
var missingResourceError2 = new Error(
  "[useCreate]: `resource` is not defined or not matched but is required"
);
var missingValuesError2 = new Error(
  "[useCreate]: `values` is not provided but is required"
);

// src/hooks/data/useDelete.ts
import { getXRay as getXRay15 } from "@refinedev/devtools-internal";
import {
  useMutation as useMutation9,
  useQueryClient as useQueryClient3
} from "@tanstack/react-query";
var useDelete = /* @__PURE__ */ __name(({
  mutationOptions,
  overtimeOptions
} = {}) => {
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const dataProvider = useDataProvider();
  const { resources, select } = useResource();
  const queryClient = useQueryClient3();
  const {
    mutationMode: mutationModeContext,
    undoableTimeout: undoableTimeoutContext
  } = useMutationMode();
  const { notificationDispatch } = useCancelNotification();
  const translate = useTranslate();
  const publish = usePublish();
  const { log } = useLog();
  const handleNotification = useHandleNotification();
  const invalidateStore = useInvalidate();
  const getMeta = useMeta();
  const {
    options: { textTransformers }
  } = useRefineContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const mutation = useMutation9({
    mutationFn: ({
      id,
      mutationMode,
      undoableTimeout,
      resource: resourceName,
      onCancel,
      meta,
      metaData,
      dataProviderName,
      values
    }) => {
      const { resource, identifier } = select(resourceName);
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      const mutationModePropOrContext = mutationMode ?? mutationModeContext;
      const undoableTimeoutPropOrContext = undoableTimeout ?? undoableTimeoutContext;
      if (!(mutationModePropOrContext === "undoable")) {
        return dataProvider(
          pickDataProvider(identifier, dataProviderName, resources)
        ).deleteOne({
          resource: resource.name,
          id,
          meta: combinedMeta,
          metaData: combinedMeta,
          variables: values
        });
      }
      const deletePromise = new Promise(
        (resolve, reject) => {
          const doMutation = /* @__PURE__ */ __name(() => {
            dataProvider(
              pickDataProvider(identifier, dataProviderName, resources)
            ).deleteOne({
              resource: resource.name,
              id,
              meta: combinedMeta,
              metaData: combinedMeta,
              variables: values
            }).then((result) => resolve(result)).catch((err) => reject(err));
          }, "doMutation");
          const cancelMutation = /* @__PURE__ */ __name(() => {
            reject({ message: "mutationCancelled" });
          }, "cancelMutation");
          if (onCancel) {
            onCancel(cancelMutation);
          }
          notificationDispatch({
            type: "ADD" /* ADD */,
            payload: {
              id,
              resource: identifier,
              cancelMutation,
              doMutation,
              seconds: undoableTimeoutPropOrContext,
              isSilent: !!onCancel
            }
          });
        }
      );
      return deletePromise;
    },
    onMutate: async ({
      id,
      resource: resourceName,
      mutationMode,
      dataProviderName,
      meta,
      metaData
    }) => {
      const { identifier } = select(resourceName);
      const {
        gqlMutation: _,
        gqlQuery: __,
        ...preferredMeta
      } = pickNotDeprecated(meta, metaData) ?? {};
      const queryKey = queryKeysReplacement(preferLegacyKeys)(
        identifier,
        pickDataProvider(identifier, dataProviderName, resources),
        preferredMeta
      );
      const resourceKeys = keys2().data(pickDataProvider(identifier, dataProviderName, resources)).resource(identifier);
      const mutationModePropOrContext = mutationMode ?? mutationModeContext;
      await queryClient.cancelQueries(
        resourceKeys.get(preferLegacyKeys),
        void 0,
        {
          silent: true
        }
      );
      const previousQueries = queryClient.getQueriesData(resourceKeys.get(preferLegacyKeys));
      if (mutationModePropOrContext !== "pessimistic") {
        queryClient.setQueriesData(
          resourceKeys.action("list").params(preferredMeta ?? {}).get(preferLegacyKeys),
          (previous) => {
            if (!previous) {
              return null;
            }
            const data = previous.data.filter(
              (record) => {
                var _a;
                return ((_a = record.id) == null ? void 0 : _a.toString()) !== id.toString();
              }
            );
            return {
              data,
              total: previous.total - 1
            };
          }
        );
        queryClient.setQueriesData(
          resourceKeys.action("many").get(preferLegacyKeys),
          (previous) => {
            if (!previous) {
              return null;
            }
            const data = previous.data.filter((record) => {
              var _a;
              return ((_a = record.id) == null ? void 0 : _a.toString()) !== (id == null ? void 0 : id.toString());
            });
            return {
              ...previous,
              data
            };
          }
        );
      }
      return {
        previousQueries,
        queryKey
      };
    },
    onSettled: (_data, _error, {
      id,
      resource: resourceName,
      dataProviderName,
      invalidates = ["list", "many"]
    }) => {
      const { identifier } = select(resourceName);
      invalidateStore({
        resource: identifier,
        dataProviderName: pickDataProvider(
          identifier,
          dataProviderName,
          resources
        ),
        invalidates
      });
      notificationDispatch({
        type: "REMOVE" /* REMOVE */,
        payload: { id, resource: identifier }
      });
    },
    onSuccess: (_data, {
      id,
      resource: resourceName,
      successNotification,
      dataProviderName: dataProviderNameFromProp,
      meta,
      metaData
    }, context) => {
      const { resource, identifier } = select(resourceName);
      const resourceSingular = textTransformers.singular(identifier);
      const dataProviderName = pickDataProvider(
        identifier,
        dataProviderNameFromProp,
        resources
      );
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      queryClient.removeQueries(context == null ? void 0 : context.queryKey.detail(id));
      const notificationConfig = typeof successNotification === "function" ? successNotification(_data, id, identifier) : successNotification;
      handleNotification(notificationConfig, {
        key: `${id}-${identifier}-notification`,
        description: translate("notifications.success", "Success"),
        message: translate(
          "notifications.deleteSuccess",
          {
            resource: translate(
              `${identifier}.${identifier}`,
              resourceSingular
            )
          },
          `Successfully deleted a ${resourceSingular}`
        ),
        type: "success"
      });
      publish == null ? void 0 : publish({
        channel: `resources/${resource.name}`,
        type: "deleted",
        payload: {
          ids: [id]
        },
        date: /* @__PURE__ */ new Date(),
        meta: {
          ...combinedMeta,
          dataProviderName
        }
      });
      const {
        fields: _fields,
        operation: _operation,
        variables: _variables,
        ...rest
      } = combinedMeta || {};
      log == null ? void 0 : log.mutate({
        action: "delete",
        resource: resource.name,
        meta: {
          id,
          dataProviderName,
          ...rest
        }
      });
      queryClient.removeQueries(context == null ? void 0 : context.queryKey.detail(id));
    },
    onError: (err, { id, resource: resourceName, errorNotification }, context) => {
      const { identifier } = select(resourceName);
      if (context) {
        for (const query of context.previousQueries) {
          queryClient.setQueryData(query[0], query[1]);
        }
      }
      if (err.message !== "mutationCancelled") {
        checkError(err);
        const resourceSingular = textTransformers.singular(identifier);
        const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, id, identifier) : errorNotification;
        handleNotification(notificationConfig, {
          key: `${id}-${identifier}-notification`,
          message: translate(
            "notifications.deleteError",
            {
              resource: resourceSingular,
              statusCode: err.statusCode
            },
            `Error (status code: ${err.statusCode})`
          ),
          description: err.message,
          type: "error"
        });
      }
    },
    mutationKey: keys2().data().mutation("delete").get(preferLegacyKeys),
    ...mutationOptions,
    meta: {
      ...mutationOptions == null ? void 0 : mutationOptions.meta,
      ...getXRay15("useDelete", preferLegacyKeys)
    }
  });
  const { elapsedTime } = useLoadingOvertime({
    ...overtimeOptions,
    isLoading: mutation.isLoading
  });
  return { ...mutation, overtime: { elapsedTime } };
}, "useDelete");

// src/hooks/data/useCreateMany.ts
import { getXRay as getXRay16 } from "@refinedev/devtools-internal";
import {
  useMutation as useMutation10
} from "@tanstack/react-query";
var useCreateMany = /* @__PURE__ */ __name(({
  resource: resourceFromProps,
  values: valuesFromProps,
  dataProviderName: dataProviderNameFromProps,
  successNotification: successNotificationFromProps,
  errorNotification: errorNotificationFromProps,
  meta: metaFromProps,
  metaData: metaDataFromProps,
  invalidates: invalidatesFromProps,
  mutationOptions,
  overtimeOptions
} = {}) => {
  const dataProvider = useDataProvider();
  const { resources, select } = useResource();
  const translate = useTranslate();
  const publish = usePublish();
  const handleNotification = useHandleNotification();
  const invalidateStore = useInvalidate();
  const { log } = useLog();
  const getMeta = useMeta();
  const {
    options: { textTransformers }
  } = useRefineContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const mutationResult = useMutation10({
    mutationFn: ({
      resource: resourceName = resourceFromProps,
      values = valuesFromProps,
      meta = metaFromProps,
      metaData = metaDataFromProps,
      dataProviderName = dataProviderNameFromProps
    }) => {
      if (!values)
        throw missingValuesError3;
      if (!resourceName)
        throw missingResourceError3;
      const { resource, identifier } = select(resourceName);
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      const selectedDataProvider = dataProvider(
        pickDataProvider(identifier, dataProviderName, resources)
      );
      if (selectedDataProvider.createMany) {
        return selectedDataProvider.createMany({
          resource: resource.name,
          variables: values,
          meta: combinedMeta,
          metaData: combinedMeta
        });
      }
      return handleMultiple(
        values.map(
          (val) => selectedDataProvider.create({
            resource: resource.name,
            variables: val,
            meta: combinedMeta,
            metaData: combinedMeta
          })
        )
      );
    },
    onSuccess: (response, variables, context) => {
      var _a;
      const {
        resource: resourceName = resourceFromProps,
        successNotification = successNotificationFromProps,
        dataProviderName: dataProviderNameFromProp = dataProviderNameFromProps,
        invalidates = invalidatesFromProps ?? ["list", "many"],
        values = valuesFromProps,
        meta = metaFromProps,
        metaData = metaDataFromProps
      } = variables;
      if (!values)
        throw missingValuesError3;
      if (!resourceName)
        throw missingResourceError3;
      const { resource, identifier } = select(resourceName);
      const resourcePlural = textTransformers.plural(identifier);
      const dataProviderName = pickDataProvider(
        identifier,
        dataProviderNameFromProp,
        resources
      );
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      const notificationConfig = typeof successNotification === "function" ? successNotification(response, values, identifier) : successNotification;
      handleNotification(notificationConfig, {
        key: `createMany-${identifier}-notification`,
        message: translate(
          "notifications.createSuccess",
          {
            resource: translate(`${identifier}.${identifier}`, identifier)
          },
          `Successfully created ${resourcePlural}`
        ),
        description: translate("notifications.success", "Success"),
        type: "success"
      });
      invalidateStore({
        resource: identifier,
        dataProviderName,
        invalidates
      });
      const ids = response == null ? void 0 : response.data.filter((item) => (item == null ? void 0 : item.id) !== void 0).map((item) => item.id);
      publish == null ? void 0 : publish({
        channel: `resources/${resource.name}`,
        type: "created",
        payload: {
          ids
        },
        date: /* @__PURE__ */ new Date(),
        meta: {
          ...combinedMeta,
          dataProviderName
        }
      });
      const {
        fields: _fields,
        operation: _operation,
        variables: _variables,
        ...rest
      } = combinedMeta || {};
      log == null ? void 0 : log.mutate({
        action: "createMany",
        resource: resource.name,
        data: values,
        meta: {
          dataProviderName,
          ids,
          ...rest
        }
      });
      (_a = mutationOptions == null ? void 0 : mutationOptions.onSuccess) == null ? void 0 : _a.call(mutationOptions, response, variables, context);
    },
    onError: (err, variables, context) => {
      var _a;
      const {
        resource: resourceName = resourceFromProps,
        errorNotification = errorNotificationFromProps,
        values = valuesFromProps
      } = variables;
      if (!values)
        throw missingValuesError3;
      if (!resourceName)
        throw missingResourceError3;
      const { identifier } = select(resourceName);
      const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, values, identifier) : errorNotification;
      handleNotification(notificationConfig, {
        key: `createMany-${identifier}-notification`,
        description: err.message,
        message: translate(
          "notifications.createError",
          {
            resource: translate(`${identifier}.${identifier}`, identifier),
            statusCode: err.statusCode
          },
          `There was an error creating ${identifier} (status code: ${err.statusCode}`
        ),
        type: "error"
      });
      (_a = mutationOptions == null ? void 0 : mutationOptions.onError) == null ? void 0 : _a.call(mutationOptions, err, variables, context);
    },
    mutationKey: keys2().data().mutation("createMany").get(preferLegacyKeys),
    ...mutationOptions,
    meta: {
      ...mutationOptions == null ? void 0 : mutationOptions.meta,
      ...getXRay16("useCreateMany", preferLegacyKeys)
    }
  });
  const { mutate, mutateAsync, ...mutation } = mutationResult;
  const { elapsedTime } = useLoadingOvertime({
    ...overtimeOptions,
    isLoading: mutation.isLoading
  });
  const handleMutation = /* @__PURE__ */ __name((variables, options) => {
    return mutate(variables || {}, options);
  }, "handleMutation");
  const handleMutateAsync = /* @__PURE__ */ __name((variables, options) => {
    return mutateAsync(variables || {}, options);
  }, "handleMutateAsync");
  return {
    ...mutation,
    mutate: handleMutation,
    mutateAsync: handleMutateAsync,
    overtime: { elapsedTime }
  };
}, "useCreateMany");
var missingResourceError3 = new Error(
  "[useCreateMany]: `resource` is not defined or not matched but is required"
);
var missingValuesError3 = new Error(
  "[useCreateMany]: `values` is not provided but is required"
);

// src/hooks/data/useUpdateMany.ts
import { getXRay as getXRay17 } from "@refinedev/devtools-internal";
import {
  useMutation as useMutation11,
  useQueryClient as useQueryClient4
} from "@tanstack/react-query";
var useUpdateMany = /* @__PURE__ */ __name(({
  ids: idsFromProps,
  resource: resourceFromProps,
  values: valuesFromProps,
  dataProviderName: dataProviderNameFromProps,
  successNotification: successNotificationFromProps,
  errorNotification: errorNotificationFromProps,
  meta: metaFromProps,
  metaData: metaDataFromProps,
  mutationMode: mutationModeFromProps,
  undoableTimeout: undoableTimeoutFromProps,
  onCancel: onCancelFromProps,
  optimisticUpdateMap: optimisticUpdateMapFromProps,
  invalidates: invalidatesFromProps,
  mutationOptions,
  overtimeOptions
} = {}) => {
  const { resources, select } = useResource();
  const queryClient = useQueryClient4();
  const dataProvider = useDataProvider();
  const translate = useTranslate();
  const {
    mutationMode: mutationModeContext,
    undoableTimeout: undoableTimeoutContext
  } = useMutationMode();
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const { notificationDispatch } = useCancelNotification();
  const publish = usePublish();
  const handleNotification = useHandleNotification();
  const invalidateStore = useInvalidate();
  const { log } = useLog();
  const getMeta = useMeta();
  const {
    options: { textTransformers }
  } = useRefineContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const mutationResult = useMutation11({
    mutationFn: ({
      ids = idsFromProps,
      values = valuesFromProps,
      resource: resourceName = resourceFromProps,
      onCancel = onCancelFromProps,
      mutationMode = mutationModeFromProps,
      undoableTimeout = undoableTimeoutFromProps,
      meta = metaFromProps,
      metaData = metaDataFromProps,
      dataProviderName = dataProviderNameFromProps
    }) => {
      if (!ids)
        throw missingIdError2;
      if (!values)
        throw missingValuesError4;
      if (!resourceName)
        throw missingResourceError4;
      const { resource, identifier } = select(resourceName);
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      const mutationModePropOrContext = mutationMode ?? mutationModeContext;
      const undoableTimeoutPropOrContext = undoableTimeout ?? undoableTimeoutContext;
      const selectedDataProvider = dataProvider(
        pickDataProvider(identifier, dataProviderName, resources)
      );
      const mutationFn = /* @__PURE__ */ __name(() => {
        if (selectedDataProvider.updateMany) {
          return selectedDataProvider.updateMany({
            resource: resource.name,
            ids,
            variables: values,
            meta: combinedMeta,
            metaData: combinedMeta
          });
        }
        return handleMultiple(
          ids.map(
            (id) => selectedDataProvider.update({
              resource: resource.name,
              id,
              variables: values,
              meta: combinedMeta,
              metaData: combinedMeta
            })
          )
        );
      }, "mutationFn");
      if (!(mutationModePropOrContext === "undoable")) {
        return mutationFn();
      }
      const updatePromise = new Promise(
        (resolve, reject) => {
          const doMutation = /* @__PURE__ */ __name(() => {
            mutationFn().then((result) => resolve(result)).catch((err) => reject(err));
          }, "doMutation");
          const cancelMutation = /* @__PURE__ */ __name(() => {
            reject({ message: "mutationCancelled" });
          }, "cancelMutation");
          if (onCancel) {
            onCancel(cancelMutation);
          }
          notificationDispatch({
            type: "ADD" /* ADD */,
            payload: {
              id: ids,
              resource: identifier,
              cancelMutation,
              doMutation,
              seconds: undoableTimeoutPropOrContext,
              isSilent: !!onCancel
            }
          });
        }
      );
      return updatePromise;
    },
    onMutate: async ({
      resource: resourceName = resourceFromProps,
      ids = idsFromProps,
      values = valuesFromProps,
      mutationMode = mutationModeFromProps,
      dataProviderName = dataProviderNameFromProps,
      meta = metaFromProps,
      metaData = metaDataFromProps,
      optimisticUpdateMap = optimisticUpdateMapFromProps ?? {
        list: true,
        many: true,
        detail: true
      }
    }) => {
      if (!ids)
        throw missingIdError2;
      if (!values)
        throw missingValuesError4;
      if (!resourceName)
        throw missingResourceError4;
      const { identifier } = select(resourceName);
      const {
        gqlMutation: _,
        gqlQuery: __,
        ...preferredMeta
      } = pickNotDeprecated(meta, metaData) ?? {};
      const queryKey = queryKeysReplacement(preferLegacyKeys)(
        identifier,
        pickDataProvider(identifier, dataProviderName, resources),
        preferredMeta
      );
      const resourceKeys = keys2().data(pickDataProvider(identifier, dataProviderName, resources)).resource(identifier);
      const mutationModePropOrContext = mutationMode ?? mutationModeContext;
      await queryClient.cancelQueries(
        resourceKeys.get(preferLegacyKeys),
        void 0,
        {
          silent: true
        }
      );
      const previousQueries = queryClient.getQueriesData(
        resourceKeys.get(preferLegacyKeys)
      );
      if (mutationModePropOrContext !== "pessimistic") {
        if (optimisticUpdateMap.list) {
          queryClient.setQueriesData(
            resourceKeys.action("list").params(preferredMeta ?? {}).get(preferLegacyKeys),
            (previous) => {
              if (typeof optimisticUpdateMap.list === "function") {
                return optimisticUpdateMap.list(previous, values, ids);
              }
              if (!previous) {
                return null;
              }
              const data = previous.data.map((record) => {
                if (record.id !== void 0 && ids.filter((id) => id !== void 0).map(String).includes(record.id.toString())) {
                  return {
                    ...record,
                    ...values
                  };
                }
                return record;
              });
              return {
                ...previous,
                data
              };
            }
          );
        }
        if (optimisticUpdateMap.many) {
          queryClient.setQueriesData(
            resourceKeys.action("many").get(preferLegacyKeys),
            (previous) => {
              if (typeof optimisticUpdateMap.many === "function") {
                return optimisticUpdateMap.many(previous, values, ids);
              }
              if (!previous) {
                return null;
              }
              const data = previous.data.map((record) => {
                if (record.id !== void 0 && ids.filter((id) => id !== void 0).map(String).includes(record.id.toString())) {
                  return {
                    ...record,
                    ...values
                  };
                }
                return record;
              });
              return {
                ...previous,
                data
              };
            }
          );
        }
        if (optimisticUpdateMap.detail) {
          for (const id of ids) {
            queryClient.setQueriesData(
              resourceKeys.action("one").id(id).params(preferredMeta ?? {}).get(preferLegacyKeys),
              (previous) => {
                if (typeof optimisticUpdateMap.detail === "function") {
                  return optimisticUpdateMap.detail(previous, values, id);
                }
                if (!previous) {
                  return null;
                }
                const data = {
                  ...previous.data,
                  ...values
                };
                return {
                  ...previous,
                  data
                };
              }
            );
          }
        }
      }
      return {
        previousQueries,
        queryKey
      };
    },
    onSettled: (data, error, variables, context) => {
      var _a;
      const {
        ids = idsFromProps,
        resource: resourceName = resourceFromProps,
        dataProviderName = dataProviderNameFromProps,
        invalidates = invalidatesFromProps
      } = variables;
      if (!ids)
        throw missingIdError2;
      if (!resourceName)
        throw missingResourceError4;
      const { identifier } = select(resourceName);
      invalidateStore({
        resource: identifier,
        invalidates: invalidates ?? ["list", "many"],
        dataProviderName: pickDataProvider(
          identifier,
          dataProviderName,
          resources
        )
      });
      ids.forEach(
        (id) => invalidateStore({
          resource: identifier,
          invalidates: invalidates ?? ["detail"],
          dataProviderName: pickDataProvider(
            identifier,
            dataProviderName,
            resources
          ),
          id
        })
      );
      notificationDispatch({
        type: "REMOVE" /* REMOVE */,
        payload: { id: ids, resource: identifier }
      });
      (_a = mutationOptions == null ? void 0 : mutationOptions.onSettled) == null ? void 0 : _a.call(mutationOptions, data, error, variables, context);
    },
    onSuccess: (data, variables, context) => {
      var _a;
      const {
        ids = idsFromProps,
        resource: resourceName = resourceFromProps,
        values = valuesFromProps,
        meta = metaFromProps,
        metaData = metaDataFromProps,
        dataProviderName: dataProviderNameFromProp = dataProviderNameFromProps,
        successNotification = successNotificationFromProps
      } = variables;
      if (!ids)
        throw missingIdError2;
      if (!values)
        throw missingValuesError4;
      if (!resourceName)
        throw missingResourceError4;
      const { resource, identifier } = select(resourceName);
      const resourceSingular = textTransformers.singular(identifier);
      const dataProviderName = pickDataProvider(
        identifier,
        dataProviderNameFromProp,
        resources
      );
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      const notificationConfig = typeof successNotification === "function" ? successNotification(data, { ids, values }, identifier) : successNotification;
      handleNotification(notificationConfig, {
        key: `${ids}-${identifier}-notification`,
        description: translate("notifications.success", "Successful"),
        message: translate(
          "notifications.editSuccess",
          {
            resource: translate(`${identifier}.${identifier}`, identifier)
          },
          `Successfully updated ${resourceSingular}`
        ),
        type: "success"
      });
      publish == null ? void 0 : publish({
        channel: `resources/${resource.name}`,
        type: "updated",
        payload: {
          ids: ids.map(String)
        },
        date: /* @__PURE__ */ new Date(),
        meta: {
          ...combinedMeta,
          dataProviderName
        }
      });
      const previousData = [];
      if (context) {
        ids.forEach((id) => {
          const queryData = queryClient.getQueryData(
            context.queryKey.detail(id)
          );
          previousData.push(
            Object.keys(values || {}).reduce((acc, item) => {
              var _a2;
              acc[item] = (_a2 = queryData == null ? void 0 : queryData.data) == null ? void 0 : _a2[item];
              return acc;
            }, {})
          );
        });
      }
      const {
        fields: _fields,
        operation: _operation,
        variables: _variables,
        ...rest
      } = combinedMeta || {};
      log == null ? void 0 : log.mutate({
        action: "updateMany",
        resource: resource.name,
        data: values,
        previousData,
        meta: {
          ids,
          dataProviderName,
          ...rest
        }
      });
      (_a = mutationOptions == null ? void 0 : mutationOptions.onSuccess) == null ? void 0 : _a.call(mutationOptions, data, variables, context);
    },
    onError: (err, variables, context) => {
      var _a;
      const {
        ids = idsFromProps,
        resource: resourceName = resourceFromProps,
        errorNotification = errorNotificationFromProps,
        values = valuesFromProps
      } = variables;
      if (!ids)
        throw missingIdError2;
      if (!values)
        throw missingValuesError4;
      if (!resourceName)
        throw missingResourceError4;
      const { identifier } = select(resourceName);
      if (context) {
        for (const query of context.previousQueries) {
          queryClient.setQueryData(query[0], query[1]);
        }
      }
      if (err.message !== "mutationCancelled") {
        checkError == null ? void 0 : checkError(err);
        const resourceSingular = textTransformers.singular(identifier);
        const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, { ids, values }, identifier) : errorNotification;
        handleNotification(notificationConfig, {
          key: `${ids}-${identifier}-updateMany-error-notification`,
          message: translate(
            "notifications.editError",
            {
              resource: resourceSingular,
              statusCode: err.statusCode
            },
            `Error when updating ${resourceSingular} (status code: ${err.statusCode})`
          ),
          description: err.message,
          type: "error"
        });
      }
      (_a = mutationOptions == null ? void 0 : mutationOptions.onError) == null ? void 0 : _a.call(mutationOptions, err, variables, context);
    },
    mutationKey: keys2().data().mutation("updateMany").get(preferLegacyKeys),
    ...mutationOptions,
    meta: {
      ...mutationOptions == null ? void 0 : mutationOptions.meta,
      ...getXRay17("useUpdateMany", preferLegacyKeys)
    }
  });
  const { mutate, mutateAsync, ...mutation } = mutationResult;
  const { elapsedTime } = useLoadingOvertime({
    ...overtimeOptions,
    isLoading: mutation.isLoading
  });
  const handleMutation = /* @__PURE__ */ __name((variables, options) => {
    return mutate(variables || {}, options);
  }, "handleMutation");
  const handleMutateAsync = /* @__PURE__ */ __name((variables, options) => {
    return mutateAsync(variables || {}, options);
  }, "handleMutateAsync");
  return {
    ...mutation,
    mutate: handleMutation,
    mutateAsync: handleMutateAsync,
    overtime: { elapsedTime }
  };
}, "useUpdateMany");
var missingResourceError4 = new Error(
  "[useUpdateMany]: `resource` is not defined or not matched but is required"
);
var missingIdError2 = new Error(
  "[useUpdateMany]: `id` is not defined but is required in edit and clone actions"
);
var missingValuesError4 = new Error(
  "[useUpdateMany]: `values` is not provided but is required"
);

// src/hooks/data/useDeleteMany.ts
import { getXRay as getXRay18 } from "@refinedev/devtools-internal";
import {
  useMutation as useMutation12,
  useQueryClient as useQueryClient5
} from "@tanstack/react-query";
var useDeleteMany = /* @__PURE__ */ __name(({
  mutationOptions,
  overtimeOptions
} = {}) => {
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const {
    mutationMode: mutationModeContext,
    undoableTimeout: undoableTimeoutContext
  } = useMutationMode();
  const dataProvider = useDataProvider();
  const { notificationDispatch } = useCancelNotification();
  const translate = useTranslate();
  const publish = usePublish();
  const handleNotification = useHandleNotification();
  const invalidateStore = useInvalidate();
  const { log } = useLog();
  const { resources, select } = useResource();
  const queryClient = useQueryClient5();
  const getMeta = useMeta();
  const {
    options: { textTransformers }
  } = useRefineContext();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const mutation = useMutation12({
    mutationFn: ({
      resource: resourceName,
      ids,
      mutationMode,
      undoableTimeout,
      onCancel,
      meta,
      metaData,
      dataProviderName,
      values
    }) => {
      const { resource, identifier } = select(resourceName);
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      const mutationModePropOrContext = mutationMode ?? mutationModeContext;
      const undoableTimeoutPropOrContext = undoableTimeout ?? undoableTimeoutContext;
      const selectedDataProvider = dataProvider(
        pickDataProvider(identifier, dataProviderName, resources)
      );
      const mutationFn = /* @__PURE__ */ __name(() => {
        if (selectedDataProvider.deleteMany) {
          return selectedDataProvider.deleteMany({
            resource: resource.name,
            ids,
            meta: combinedMeta,
            metaData: combinedMeta,
            variables: values
          });
        }
        return handleMultiple(
          ids.map(
            (id) => selectedDataProvider.deleteOne({
              resource: resource.name,
              id,
              meta: combinedMeta,
              metaData: combinedMeta,
              variables: values
            })
          )
        );
      }, "mutationFn");
      if (!(mutationModePropOrContext === "undoable")) {
        return mutationFn();
      }
      const updatePromise = new Promise(
        (resolve, reject) => {
          const doMutation = /* @__PURE__ */ __name(() => {
            mutationFn().then((result) => resolve(result)).catch((err) => reject(err));
          }, "doMutation");
          const cancelMutation = /* @__PURE__ */ __name(() => {
            reject({ message: "mutationCancelled" });
          }, "cancelMutation");
          if (onCancel) {
            onCancel(cancelMutation);
          }
          notificationDispatch({
            type: "ADD" /* ADD */,
            payload: {
              id: ids,
              resource: identifier,
              cancelMutation,
              doMutation,
              seconds: undoableTimeoutPropOrContext,
              isSilent: !!onCancel
            }
          });
        }
      );
      return updatePromise;
    },
    onMutate: async ({
      ids,
      resource: resourceName,
      mutationMode,
      dataProviderName,
      meta,
      metaData
    }) => {
      const { identifier } = select(resourceName);
      const {
        gqlMutation: _,
        gqlQuery: __,
        ...preferredMeta
      } = pickNotDeprecated(meta, metaData) ?? {};
      const queryKey = queryKeysReplacement(preferLegacyKeys)(
        identifier,
        pickDataProvider(identifier, dataProviderName, resources),
        preferredMeta
      );
      const resourceKeys = keys2().data(pickDataProvider(identifier, dataProviderName, resources)).resource(identifier);
      const mutationModePropOrContext = mutationMode ?? mutationModeContext;
      await queryClient.cancelQueries(
        resourceKeys.get(preferLegacyKeys),
        void 0,
        {
          silent: true
        }
      );
      const previousQueries = queryClient.getQueriesData(resourceKeys.get(preferLegacyKeys));
      if (mutationModePropOrContext !== "pessimistic") {
        queryClient.setQueriesData(
          resourceKeys.action("list").params(preferredMeta ?? {}).get(preferLegacyKeys),
          (previous) => {
            if (!previous) {
              return null;
            }
            const data = previous.data.filter(
              (item) => item.id && !ids.map(String).includes(item.id.toString())
            );
            return {
              data,
              total: previous.total - 1
            };
          }
        );
        queryClient.setQueriesData(
          resourceKeys.action("many").get(preferLegacyKeys),
          (previous) => {
            if (!previous) {
              return null;
            }
            const data = previous.data.filter((record) => {
              if (record.id) {
                return !ids.map(String).includes(record.id.toString());
              }
              return false;
            });
            return {
              ...previous,
              data
            };
          }
        );
        for (const id of ids) {
          queryClient.setQueriesData(
            resourceKeys.action("one").id(id).params(preferredMeta).get(preferLegacyKeys),
            (previous) => {
              if (!previous || previous.data.id === id) {
                return null;
              }
              return {
                ...previous
              };
            }
          );
        }
      }
      return {
        previousQueries,
        queryKey
      };
    },
    // Always refetch after error or success:
    onSettled: (_data, _error, {
      resource: resourceName,
      ids,
      dataProviderName,
      invalidates = ["list", "many"]
    }) => {
      const { identifier } = select(resourceName);
      invalidateStore({
        resource: identifier,
        dataProviderName: pickDataProvider(
          identifier,
          dataProviderName,
          resources
        ),
        invalidates
      });
      notificationDispatch({
        type: "REMOVE" /* REMOVE */,
        payload: { id: ids, resource: identifier }
      });
    },
    onSuccess: (_data, {
      ids,
      resource: resourceName,
      meta,
      metaData,
      dataProviderName: dataProviderNameFromProp,
      successNotification
    }, context) => {
      const { resource, identifier } = select(resourceName);
      const dataProviderName = pickDataProvider(
        identifier,
        dataProviderNameFromProp,
        resources
      );
      const combinedMeta = getMeta({
        resource,
        meta: pickNotDeprecated(meta, metaData)
      });
      ids.forEach(
        (id) => queryClient.removeQueries(context == null ? void 0 : context.queryKey.detail(id))
      );
      const notificationConfig = typeof successNotification === "function" ? successNotification(_data, ids, identifier) : successNotification;
      handleNotification(notificationConfig, {
        key: `${ids}-${identifier}-notification`,
        description: translate("notifications.success", "Success"),
        message: translate(
          "notifications.deleteSuccess",
          {
            resource: translate(`${identifier}.${identifier}`, identifier)
          },
          `Successfully deleted ${identifier}`
        ),
        type: "success"
      });
      publish == null ? void 0 : publish({
        channel: `resources/${resource.name}`,
        type: "deleted",
        payload: { ids },
        date: /* @__PURE__ */ new Date(),
        meta: {
          ...combinedMeta,
          dataProviderName
        }
      });
      const {
        fields: _fields,
        operation: _operation,
        variables: _variables,
        ...rest
      } = combinedMeta || {};
      log == null ? void 0 : log.mutate({
        action: "deleteMany",
        resource: resource.name,
        meta: {
          ids,
          dataProviderName,
          ...rest
        }
      });
      ids.forEach(
        (id) => queryClient.removeQueries(context == null ? void 0 : context.queryKey.detail(id))
      );
    },
    onError: (err, { ids, resource: resourceName, errorNotification }, context) => {
      const { identifier } = select(resourceName);
      if (context) {
        for (const query of context.previousQueries) {
          queryClient.setQueryData(query[0], query[1]);
        }
      }
      if (err.message !== "mutationCancelled") {
        checkError(err);
        const resourceSingular = textTransformers.singular(identifier);
        const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, ids, identifier) : errorNotification;
        handleNotification(notificationConfig, {
          key: `${ids}-${identifier}-notification`,
          message: translate(
            "notifications.deleteError",
            {
              resource: resourceSingular,
              statusCode: err.statusCode
            },
            `Error (status code: ${err.statusCode})`
          ),
          description: err.message,
          type: "error"
        });
      }
    },
    mutationKey: keys2().data().mutation("deleteMany").get(preferLegacyKeys),
    ...mutationOptions,
    meta: {
      ...mutationOptions == null ? void 0 : mutationOptions.meta,
      ...getXRay18("useDeleteMany", preferLegacyKeys)
    }
  });
  const { elapsedTime } = useLoadingOvertime({
    ...overtimeOptions,
    isLoading: mutation.isLoading
  });
  return { ...mutation, overtime: { elapsedTime } };
}, "useDeleteMany");

// src/hooks/data/useApiUrl.ts
var useApiUrl = /* @__PURE__ */ __name((dataProviderName) => {
  var _a;
  const dataProvider = useDataProvider();
  const { resource } = useResource();
  const { getApiUrl } = dataProvider(
    dataProviderName ?? ((_a = pickNotDeprecated(resource == null ? void 0 : resource.meta, resource == null ? void 0 : resource.options)) == null ? void 0 : _a.dataProviderName)
  );
  return getApiUrl();
}, "useApiUrl");

// src/hooks/data/useCustom.ts
import { getXRay as getXRay19 } from "@refinedev/devtools-internal";
import {
  useQuery as useQuery7
} from "@tanstack/react-query";
var useCustom = /* @__PURE__ */ __name(({
  url,
  method,
  config,
  queryOptions,
  successNotification,
  errorNotification,
  meta,
  metaData,
  dataProviderName,
  overtimeOptions
}) => {
  const dataProvider = useDataProvider();
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const translate = useTranslate();
  const handleNotification = useHandleNotification();
  const getMeta = useMeta();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const preferredMeta = pickNotDeprecated(meta, metaData);
  const { custom } = dataProvider(dataProviderName);
  const combinedMeta = getMeta({ meta: preferredMeta });
  if (custom) {
    const queryResponse = useQuery7({
      queryKey: keys2().data(dataProviderName).mutation("custom").params({
        method,
        url,
        ...config,
        ...preferredMeta || {}
      }).get(preferLegacyKeys),
      queryFn: (context) => custom({
        url,
        method,
        ...config,
        meta: {
          ...combinedMeta,
          queryContext: prepareQueryContext(context)
        },
        metaData: {
          ...combinedMeta,
          queryContext: prepareQueryContext(context)
        }
      }),
      ...queryOptions,
      onSuccess: (data) => {
        var _a;
        (_a = queryOptions == null ? void 0 : queryOptions.onSuccess) == null ? void 0 : _a.call(queryOptions, data);
        const notificationConfig = typeof successNotification === "function" ? successNotification(data, {
          ...config,
          ...combinedMeta
        }) : successNotification;
        handleNotification(notificationConfig);
      },
      onError: (err) => {
        var _a;
        checkError(err);
        (_a = queryOptions == null ? void 0 : queryOptions.onError) == null ? void 0 : _a.call(queryOptions, err);
        const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, {
          ...config,
          ...combinedMeta
        }) : errorNotification;
        handleNotification(notificationConfig, {
          key: `${method}-notification`,
          message: translate(
            "notifications.error",
            { statusCode: err.statusCode },
            `Error (status code: ${err.statusCode})`
          ),
          description: err.message,
          type: "error"
        });
      },
      meta: {
        ...queryOptions == null ? void 0 : queryOptions.meta,
        ...getXRay19("useCustom", preferLegacyKeys)
      }
    });
    const { elapsedTime } = useLoadingOvertime({
      ...overtimeOptions,
      isLoading: queryResponse.isFetching
    });
    return { ...queryResponse, overtime: { elapsedTime } };
  }
  throw Error("Not implemented custom on data provider.");
}, "useCustom");

// src/hooks/data/useCustomMutation.ts
import { getXRay as getXRay20 } from "@refinedev/devtools-internal";
import {
  useMutation as useMutation13
} from "@tanstack/react-query";
var useCustomMutation = /* @__PURE__ */ __name(({
  mutationOptions,
  overtimeOptions
} = {}) => {
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const handleNotification = useHandleNotification();
  const dataProvider = useDataProvider();
  const translate = useTranslate();
  const getMeta = useMeta();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const mutation = useMutation13(
    ({
      url,
      method,
      values,
      meta,
      metaData,
      dataProviderName,
      config
    }) => {
      const combinedMeta = getMeta({
        meta: pickNotDeprecated(meta, metaData)
      });
      const { custom } = dataProvider(dataProviderName);
      if (custom) {
        return custom({
          url,
          method,
          payload: values,
          meta: combinedMeta,
          metaData: combinedMeta,
          headers: { ...config == null ? void 0 : config.headers }
        });
      }
      throw Error("Not implemented custom on data provider.");
    },
    {
      onSuccess: (data, {
        successNotification: successNotificationFromProp,
        config,
        meta,
        metaData
      }) => {
        const notificationConfig = typeof successNotificationFromProp === "function" ? successNotificationFromProp(data, {
          ...config,
          ...pickNotDeprecated(meta, metaData) || {}
        }) : successNotificationFromProp;
        handleNotification(notificationConfig);
      },
      onError: (err, {
        errorNotification: errorNotificationFromProp,
        method,
        config,
        meta,
        metaData
      }) => {
        checkError(err);
        const notificationConfig = typeof errorNotificationFromProp === "function" ? errorNotificationFromProp(err, {
          ...config,
          ...pickNotDeprecated(meta, metaData) || {}
        }) : errorNotificationFromProp;
        handleNotification(notificationConfig, {
          key: `${method}-notification`,
          message: translate(
            "notifications.error",
            { statusCode: err.statusCode },
            `Error (status code: ${err.statusCode})`
          ),
          description: err.message,
          type: "error"
        });
      },
      mutationKey: keys2().data().mutation("customMutation").get(preferLegacyKeys),
      ...mutationOptions,
      meta: {
        ...mutationOptions == null ? void 0 : mutationOptions.meta,
        ...getXRay20("useCustomMutation", preferLegacyKeys)
      }
    }
  );
  const { elapsedTime } = useLoadingOvertime({
    ...overtimeOptions,
    isLoading: mutation.isLoading
  });
  return { ...mutation, overtime: { elapsedTime } };
}, "useCustomMutation");

// src/hooks/data/useDataProvider.tsx
import { useCallback, useContext as useContext6 } from "react";

// src/contexts/data/index.tsx
import React7 from "react";
var defaultDataProvider = {
  default: {}
};
var DataContext = React7.createContext(defaultDataProvider);
var DataContextProvider = /* @__PURE__ */ __name(({
  children,
  dataProvider
}) => {
  let providerValue = defaultDataProvider;
  if (dataProvider) {
    if (!("default" in dataProvider) && ("getList" in dataProvider || "getOne" in dataProvider)) {
      providerValue = {
        default: dataProvider
      };
    } else {
      providerValue = dataProvider;
    }
  }
  return /* @__PURE__ */ React7.createElement(DataContext.Provider, { value: providerValue }, children);
}, "DataContextProvider");

// src/hooks/data/useDataProvider.tsx
var useDataProvider = /* @__PURE__ */ __name(() => {
  const context = useContext6(DataContext);
  const handleDataProvider = useCallback(
    (dataProviderName) => {
      if (dataProviderName) {
        const dataProvider = context == null ? void 0 : context[dataProviderName];
        if (!dataProvider) {
          throw new Error(`"${dataProviderName}" Data provider not found`);
        }
        if (dataProvider && !(context == null ? void 0 : context.default)) {
          throw new Error(
            "If you have multiple data providers, you must provide default data provider property"
          );
        }
        return context[dataProviderName];
      }
      if (context.default) {
        return context.default;
      }
      throw new Error(
        `There is no "default" data provider. Please pass dataProviderName.`
      );
    },
    [context]
  );
  return handleDataProvider;
}, "useDataProvider");

// src/hooks/data/useInfiniteList.ts
import { getXRay as getXRay21 } from "@refinedev/devtools-internal";
import {
  useInfiniteQuery
} from "@tanstack/react-query";
var useInfiniteList = /* @__PURE__ */ __name(({
  resource: resourceFromProp,
  config,
  filters,
  hasPagination,
  pagination,
  sorters,
  queryOptions,
  successNotification,
  errorNotification,
  meta,
  metaData,
  liveMode,
  onLiveEvent,
  liveParams,
  dataProviderName,
  overtimeOptions
}) => {
  const { resources, resource, identifier } = useResource(resourceFromProp);
  const dataProvider = useDataProvider();
  const translate = useTranslate();
  const authProvider = useActiveAuthProvider();
  const { mutate: checkError } = useOnError({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const handleNotification = useHandleNotification();
  const getMeta = useMeta();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const pickedDataProvider = pickDataProvider(
    identifier,
    dataProviderName,
    resources
  );
  const preferredMeta = pickNotDeprecated(meta, metaData);
  const prefferedFilters = pickNotDeprecated(filters, config == null ? void 0 : config.filters);
  const prefferedSorters = pickNotDeprecated(sorters, config == null ? void 0 : config.sort);
  const prefferedHasPagination = pickNotDeprecated(
    hasPagination,
    config == null ? void 0 : config.hasPagination
  );
  const prefferedPagination = handlePaginationParams({
    pagination,
    configPagination: config == null ? void 0 : config.pagination,
    hasPagination: prefferedHasPagination
  });
  const isServerPagination = prefferedPagination.mode === "server";
  const notificationValues = {
    meta: preferredMeta,
    metaData: preferredMeta,
    filters: prefferedFilters,
    hasPagination: isServerPagination,
    pagination: prefferedPagination,
    sorters: prefferedSorters,
    config: {
      ...config,
      sort: prefferedSorters
    }
  };
  const isEnabled = (queryOptions == null ? void 0 : queryOptions.enabled) === void 0 || (queryOptions == null ? void 0 : queryOptions.enabled) === true;
  const combinedMeta = getMeta({ resource, meta: preferredMeta });
  const { getList } = dataProvider(pickedDataProvider);
  useResourceSubscription({
    resource: identifier,
    types: ["*"],
    params: {
      meta: combinedMeta,
      metaData: combinedMeta,
      pagination: prefferedPagination,
      hasPagination: isServerPagination,
      sort: prefferedSorters,
      sorters: prefferedSorters,
      filters: prefferedFilters,
      subscriptionType: "useList",
      ...liveParams
    },
    channel: `resources/${resource.name}`,
    enabled: isEnabled,
    liveMode,
    onLiveEvent,
    dataProviderName: pickedDataProvider,
    meta: {
      ...combinedMeta,
      dataProviderName
    }
  });
  const queryResponse = useInfiniteQuery({
    queryKey: keys2().data(pickedDataProvider).resource(identifier).action("infinite").params({
      ...preferredMeta || {},
      filters: prefferedFilters,
      hasPagination: isServerPagination,
      ...isServerPagination && {
        pagination: prefferedPagination
      },
      ...sorters && {
        sorters
      },
      ...(config == null ? void 0 : config.sort) && {
        sort: config == null ? void 0 : config.sort
      }
    }).get(preferLegacyKeys),
    queryFn: (context) => {
      const paginationProperties = {
        ...prefferedPagination,
        current: context.pageParam
      };
      const meta2 = {
        ...combinedMeta,
        queryContext: prepareQueryContext(context)
      };
      return getList({
        resource: resource.name,
        pagination: paginationProperties,
        hasPagination: isServerPagination,
        filters: prefferedFilters,
        sort: prefferedSorters,
        sorters: prefferedSorters,
        meta: meta2,
        metaData: meta2
      }).then(({ data, total, ...rest }) => {
        return {
          data,
          total,
          pagination: paginationProperties,
          ...rest
        };
      });
    },
    getNextPageParam: (lastPage) => getNextPageParam(lastPage),
    getPreviousPageParam: (lastPage) => getPreviousPageParam(lastPage),
    ...queryOptions,
    onSuccess: (data) => {
      var _a;
      (_a = queryOptions == null ? void 0 : queryOptions.onSuccess) == null ? void 0 : _a.call(queryOptions, data);
      const notificationConfig = typeof successNotification === "function" ? successNotification(data, notificationValues, identifier) : successNotification;
      handleNotification(notificationConfig);
    },
    onError: (err) => {
      var _a;
      checkError(err);
      (_a = queryOptions == null ? void 0 : queryOptions.onError) == null ? void 0 : _a.call(queryOptions, err);
      const notificationConfig = typeof errorNotification === "function" ? errorNotification(err, notificationValues, identifier) : errorNotification;
      handleNotification(notificationConfig, {
        key: `${identifier}-useInfiniteList-notification`,
        message: translate(
          "notifications.error",
          { statusCode: err.statusCode },
          `Error (status code: ${err.statusCode})`
        ),
        description: err.message,
        type: "error"
      });
    },
    meta: {
      ...queryOptions == null ? void 0 : queryOptions.meta,
      ...getXRay21("useInfiniteList", preferLegacyKeys, resource == null ? void 0 : resource.name)
    }
  });
  const { elapsedTime } = useLoadingOvertime({
    ...overtimeOptions,
    isLoading: queryResponse.isFetching
  });
  return { ...queryResponse, overtime: { elapsedTime } };
}, "useInfiniteList");

// src/hooks/live/useResourceSubscription/index.ts
import { useContext as useContext10, useEffect as useEffect3 } from "react";

// src/contexts/live/index.tsx
import React8 from "react";
var LiveContext = React8.createContext({});
var LiveContextProvider = /* @__PURE__ */ __name(({
  liveProvider,
  children
}) => {
  return /* @__PURE__ */ React8.createElement(LiveContext.Provider, { value: { liveProvider } }, children);
}, "LiveContextProvider");

// src/hooks/invalidate/index.tsx
import { useCallback as useCallback2 } from "react";
import {
  useQueryClient as useQueryClient6
} from "@tanstack/react-query";
var useInvalidate = /* @__PURE__ */ __name(() => {
  const { resources } = useResource();
  const queryClient = useQueryClient6();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const invalidate = useCallback2(
    async ({
      resource,
      dataProviderName,
      invalidates,
      id,
      invalidationFilters = { type: "all", refetchType: "active" },
      invalidationOptions = { cancelRefetch: false }
    }) => {
      if (invalidates === false) {
        return;
      }
      const dp = pickDataProvider(resource, dataProviderName, resources);
      const queryKey = keys2().data(dp).resource(resource ?? "");
      await Promise.all(
        invalidates.map((key) => {
          switch (key) {
            case "all":
              return queryClient.invalidateQueries(
                keys2().data(dp).get(preferLegacyKeys),
                invalidationFilters,
                invalidationOptions
              );
            case "list":
              return queryClient.invalidateQueries(
                queryKey.action("list").get(preferLegacyKeys),
                invalidationFilters,
                invalidationOptions
              );
            case "many":
              return queryClient.invalidateQueries(
                queryKey.action("many").get(preferLegacyKeys),
                invalidationFilters,
                invalidationOptions
              );
            case "resourceAll":
              return queryClient.invalidateQueries(
                queryKey.get(preferLegacyKeys),
                invalidationFilters,
                invalidationOptions
              );
            case "detail":
              return queryClient.invalidateQueries(
                queryKey.action("one").id(id || "").get(preferLegacyKeys),
                invalidationFilters,
                invalidationOptions
              );
            default:
              return;
          }
        })
      );
      return;
    },
    []
  );
  return invalidate;
}, "useInvalidate");

// src/hooks/resource/useResource/index.ts
import { useContext as useContext8 } from "react";

// src/contexts/resource/index.tsx
import React10 from "react";

// src/hooks/deepMemo/index.tsx
import { useMemo } from "react";

// src/hooks/memoized/index.tsx
import { useRef } from "react";
import isEqual from "lodash-es/isEqual.js";
var useMemoized = /* @__PURE__ */ __name((value) => {
  const ref = useRef(value);
  if (!isEqual(ref.current, value)) {
    ref.current = value;
  }
  return ref.current;
}, "useMemoized");

// src/hooks/deepMemo/index.tsx
var useDeepMemo = /* @__PURE__ */ __name((fn, dependencies) => {
  const memoizedDependencies = useMemoized(dependencies);
  const value = useMemo(fn, memoizedDependencies);
  return value;
}, "useDeepMemo");

// src/contexts/resource/index.tsx
var ResourceContext = React10.createContext({
  resources: []
});
var ResourceContextProvider = /* @__PURE__ */ __name(({ resources: providedResources, children }) => {
  const resources = useDeepMemo(() => {
    return legacyResourceTransform(providedResources ?? []);
  }, [providedResources]);
  return /* @__PURE__ */ React10.createElement(ResourceContext.Provider, { value: { resources } }, children);
}, "ResourceContextProvider");

// src/contexts/router/picker/index.tsx
import React11 from "react";
var RouterPickerContext = React11.createContext("new");
var RouterPickerProvider = RouterPickerContext.Provider;
var useRouterType = /* @__PURE__ */ __name(() => {
  const value = React11.useContext(RouterPickerContext);
  return value;
}, "useRouterType");

// src/hooks/router/use-parsed/index.tsx
import React14 from "react";

// src/contexts/router/index.tsx
import React12, { createContext } from "react";
var defaultRouterProvider = {};
var RouterContext = createContext(
  defaultRouterProvider
);
var RouterContextProvider = /* @__PURE__ */ __name(({ children, router }) => {
  return /* @__PURE__ */ React12.createElement(RouterContext.Provider, { value: router ?? defaultRouterProvider }, children);
}, "RouterContextProvider");

// src/hooks/router/use-parse/index.tsx
import React13, { useContext as useContext7 } from "react";
var useParse = /* @__PURE__ */ __name(() => {
  const routerContext = useContext7(RouterContext);
  const useParse2 = React13.useMemo(
    () => (routerContext == null ? void 0 : routerContext.parse) ?? (() => () => {
      return {};
    }),
    [routerContext == null ? void 0 : routerContext.parse]
  );
  const parse = useParse2();
  return parse;
}, "useParse");

// src/hooks/router/use-parsed/index.tsx
var useParsed = /* @__PURE__ */ __name(() => {
  const parse = useParse();
  const parsed = React14.useMemo(() => parse(), [parse]);
  return parsed;
}, "useParsed");

// src/hooks/resource/useResource/index.ts
function useResource(args) {
  const { resources } = useContext8(ResourceContext);
  const routerType = useRouterType();
  const params = useParsed();
  const oldProps = {
    resourceName: args && typeof args !== "string" ? args.resourceName : args,
    resourceNameOrRouteName: args && typeof args !== "string" ? args.resourceNameOrRouteName : args,
    recordItemId: args && typeof args !== "string" ? args.recordItemId : void 0
  };
  const select = /* @__PURE__ */ __name((resourceName, force = true) => {
    const isLegacy = routerType === "legacy";
    const pickedResource = pickResource(resourceName, resources, isLegacy);
    if (pickedResource) {
      return {
        resource: pickedResource,
        identifier: pickedResource.identifier ?? pickedResource.name
      };
    }
    if (force) {
      const resource2 = {
        name: resourceName,
        identifier: resourceName
      };
      const identifier2 = resource2.identifier ?? resource2.name;
      return {
        resource: resource2,
        identifier: identifier2
      };
    }
    return void 0;
  }, "select");
  const resourceWithRoute = useResourceWithRoute();
  const { useParams } = useRouterContext();
  const legacyParams = useParams();
  if (routerType === "legacy") {
    const resourceKeyToCheck = oldProps.resourceNameOrRouteName ? oldProps.resourceNameOrRouteName : legacyParams.resource;
    const legacyResource = resourceKeyToCheck ? resourceWithRoute(resourceKeyToCheck) : void 0;
    const legacyId = (oldProps == null ? void 0 : oldProps.recordItemId) ?? legacyParams.id;
    const legacyAction = legacyParams.action;
    const legacyResourceName = (oldProps == null ? void 0 : oldProps.resourceName) ?? (legacyResource == null ? void 0 : legacyResource.name);
    const legacyIdentifier = (legacyResource == null ? void 0 : legacyResource.identifier) ?? (legacyResource == null ? void 0 : legacyResource.name);
    return {
      resources,
      resource: legacyResource,
      resourceName: legacyResourceName,
      id: legacyId,
      action: legacyAction,
      select,
      identifier: legacyIdentifier
    };
  }
  let resource = void 0;
  const identifier = typeof args === "string" ? args : oldProps == null ? void 0 : oldProps.resourceNameOrRouteName;
  if (identifier) {
    const pickedFromProps = pickResource(identifier, resources);
    if (pickedFromProps) {
      resource = pickedFromProps;
    } else {
      resource = {
        name: identifier
      };
    }
  } else if (params == null ? void 0 : params.resource) {
    resource = params.resource;
  }
  return {
    resources,
    resource,
    resourceName: resource == null ? void 0 : resource.name,
    id: params.id,
    action: params.action,
    select,
    identifier: (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name)
  };
}
__name(useResource, "useResource");

// src/hooks/resource/useResourceWithRoute/index.ts
import { useCallback as useCallback3, useContext as useContext9 } from "react";
var useResourceWithRoute = /* @__PURE__ */ __name(() => {
  const { resources } = useContext9(ResourceContext);
  const resourceWithRoute = useCallback3(
    (route) => {
      const picked = pickResource(route, resources, true);
      if (picked) {
        return picked;
      }
      return { name: route, route };
    },
    [resources]
  );
  return resourceWithRoute;
}, "useResourceWithRoute");

// src/hooks/live/useResourceSubscription/index.ts
var useResourceSubscription = /* @__PURE__ */ __name(({
  resource: resourceFromProp,
  params,
  channel,
  types,
  enabled = true,
  liveMode: liveModeFromProp,
  onLiveEvent,
  dataProviderName: dataProviderNameFromProps,
  meta
}) => {
  var _a;
  const { resource, identifier } = useResource(resourceFromProp);
  const { liveProvider } = useContext10(LiveContext);
  const {
    liveMode: liveModeFromContext,
    onLiveEvent: onLiveEventContextCallback
  } = useContext10(RefineContext);
  const liveMode = liveModeFromProp ?? liveModeFromContext;
  const invalidate = useInvalidate();
  const dataProviderName = dataProviderNameFromProps ?? (meta == null ? void 0 : meta.dataProviderName) ?? ((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.dataProviderName);
  useEffect3(() => {
    let subscription;
    const callback = /* @__PURE__ */ __name((event) => {
      if (liveMode === "auto") {
        invalidate({
          resource: identifier,
          dataProviderName,
          invalidates: ["resourceAll"],
          invalidationFilters: {
            type: "active",
            refetchType: "active"
          },
          invalidationOptions: { cancelRefetch: false }
        });
      }
      onLiveEvent == null ? void 0 : onLiveEvent(event);
      onLiveEventContextCallback == null ? void 0 : onLiveEventContextCallback(event);
    }, "callback");
    if (liveMode && liveMode !== "off" && enabled) {
      subscription = liveProvider == null ? void 0 : liveProvider.subscribe({
        channel,
        params: {
          resource: resource == null ? void 0 : resource.name,
          ...params
        },
        types,
        callback,
        dataProviderName,
        meta: {
          ...meta,
          dataProviderName
        }
      });
    }
    return () => {
      if (subscription) {
        liveProvider == null ? void 0 : liveProvider.unsubscribe(subscription);
      }
    };
  }, [enabled]);
}, "useResourceSubscription");

// src/hooks/live/useLiveMode/index.ts
import { useContext as useContext11 } from "react";
var useLiveMode = /* @__PURE__ */ __name((liveMode) => {
  const { liveMode: liveModeFromContext } = useContext11(RefineContext);
  return liveMode ?? liveModeFromContext;
}, "useLiveMode");

// src/hooks/live/useSubscription/index.ts
import { useContext as useContext12, useEffect as useEffect4 } from "react";
var useSubscription = /* @__PURE__ */ __name(({
  params,
  channel,
  types = ["*"],
  enabled = true,
  onLiveEvent,
  dataProviderName = "default",
  meta
}) => {
  const { liveProvider } = useContext12(LiveContext);
  useEffect4(() => {
    let subscription;
    if (enabled) {
      subscription = liveProvider == null ? void 0 : liveProvider.subscribe({
        channel,
        params,
        types,
        callback: onLiveEvent,
        dataProviderName,
        meta: {
          ...meta,
          dataProviderName
        }
      });
    }
    return () => {
      if (subscription) {
        liveProvider == null ? void 0 : liveProvider.unsubscribe(subscription);
      }
    };
  }, [enabled]);
}, "useSubscription");

// src/hooks/live/usePublish/index.ts
import { useContext as useContext13 } from "react";
var usePublish = /* @__PURE__ */ __name(() => {
  const { liveProvider } = useContext13(LiveContext);
  return liveProvider == null ? void 0 : liveProvider.publish;
}, "usePublish");

// src/hooks/notification/useCancelNotification/index.tsx
import { useContext as useContext14 } from "react";

// src/contexts/undoableQueue/index.tsx
import React15, {
  createContext as createContext2,
  useReducer
} from "react";
import isEqual2 from "lodash-es/isEqual.js";
var UndoableQueueContext = createContext2({
  notifications: [],
  notificationDispatch: () => false
});
var initialState = [];
var undoableQueueReducer = /* @__PURE__ */ __name((state, action) => {
  switch (action.type) {
    case "ADD" /* ADD */: {
      const newState = state.filter((notificationItem) => {
        return !(isEqual2(notificationItem.id, action.payload.id) && notificationItem.resource === action.payload.resource);
      });
      return [
        ...newState,
        {
          ...action.payload,
          isRunning: true
        }
      ];
    }
    case "REMOVE" /* REMOVE */:
      return state.filter(
        (notificationItem) => !(isEqual2(notificationItem.id, action.payload.id) && notificationItem.resource === action.payload.resource)
      );
    case "DECREASE_NOTIFICATION_SECOND" /* DECREASE_NOTIFICATION_SECOND */:
      return state.map((notificationItem) => {
        if (isEqual2(notificationItem.id, action.payload.id) && notificationItem.resource === action.payload.resource) {
          return {
            ...notificationItem,
            seconds: action.payload.seconds - 1e3
          };
        }
        return notificationItem;
      });
    default:
      return state;
  }
}, "undoableQueueReducer");
var UndoableQueueContextProvider = /* @__PURE__ */ __name(({
  children
}) => {
  const [notifications, notificationDispatch] = useReducer(
    undoableQueueReducer,
    initialState
  );
  const notificationData = { notifications, notificationDispatch };
  return /* @__PURE__ */ React15.createElement(UndoableQueueContext.Provider, { value: notificationData }, children, typeof window !== "undefined" ? notifications.map((notification) => /* @__PURE__ */ React15.createElement(
    UndoableQueue,
    {
      key: `${notification.id}-${notification.resource}-queue`,
      notification
    }
  )) : null);
}, "UndoableQueueContextProvider");

// src/hooks/notification/useCancelNotification/index.tsx
var useCancelNotification = /* @__PURE__ */ __name(() => {
  const { notifications, notificationDispatch } = useContext14(UndoableQueueContext);
  return { notifications, notificationDispatch };
}, "useCancelNotification");

// src/hooks/notification/useNotification/index.ts
import { useContext as useContext15 } from "react";

// src/contexts/notification/index.tsx
import React16, { createContext as createContext3 } from "react";
var NotificationContext = createContext3({});
var NotificationContextProvider = /* @__PURE__ */ __name(({ open, close, children }) => {
  return /* @__PURE__ */ React16.createElement(NotificationContext.Provider, { value: { open, close } }, children);
}, "NotificationContextProvider");

// src/hooks/notification/useNotification/index.ts
var useNotification = /* @__PURE__ */ __name(() => {
  const { open, close } = useContext15(NotificationContext);
  return { open, close };
}, "useNotification");

// src/hooks/notification/useHandleNotification/index.ts
import { useCallback as useCallback4 } from "react";
var useHandleNotification = /* @__PURE__ */ __name(() => {
  const { open } = useNotification();
  const handleNotification = useCallback4(
    (notification, fallbackNotification) => {
      if (notification !== false) {
        if (notification) {
          open == null ? void 0 : open(notification);
        } else if (fallbackNotification) {
          open == null ? void 0 : open(fallbackNotification);
        }
      }
    },
    []
  );
  return handleNotification;
}, "useHandleNotification");

// src/hooks/i18n/useSetLocale.ts
import { useCallback as useCallback5, useContext as useContext16 } from "react";

// src/contexts/i18n/index.tsx
import React17 from "react";
var I18nContext = React17.createContext({});
var I18nContextProvider = /* @__PURE__ */ __name(({
  children,
  i18nProvider
}) => {
  return /* @__PURE__ */ React17.createElement(
    I18nContext.Provider,
    {
      value: {
        i18nProvider
      }
    },
    children
  );
}, "I18nContextProvider");

// src/hooks/i18n/useSetLocale.ts
var useSetLocale = /* @__PURE__ */ __name(() => {
  const { i18nProvider } = useContext16(I18nContext);
  return useCallback5((lang) => i18nProvider == null ? void 0 : i18nProvider.changeLocale(lang), []);
}, "useSetLocale");

// src/hooks/i18n/useTranslate.ts
import { useContext as useContext17, useMemo as useMemo2 } from "react";
var useTranslate = /* @__PURE__ */ __name(() => {
  const { i18nProvider } = useContext17(I18nContext);
  const fn = useMemo2(() => {
    function translate(key, options, defaultMessage) {
      return (i18nProvider == null ? void 0 : i18nProvider.translate(key, options, defaultMessage)) ?? defaultMessage ?? (typeof options === "string" && typeof defaultMessage === "undefined" ? options : key);
    }
    __name(translate, "translate");
    return translate;
  }, [i18nProvider]);
  return fn;
}, "useTranslate");

// src/hooks/i18n/useGetLocale.ts
import { useCallback as useCallback6, useContext as useContext18 } from "react";
var useGetLocale = /* @__PURE__ */ __name(() => {
  const { i18nProvider } = useContext18(I18nContext);
  return useCallback6(() => i18nProvider == null ? void 0 : i18nProvider.getLocale(), []);
}, "useGetLocale");

// src/hooks/i18n/useTranslation.tsx
var useTranslation = /* @__PURE__ */ __name(() => {
  const translate = useTranslate();
  const changeLocale = useSetLocale();
  const getLocale = useGetLocale();
  return {
    translate,
    changeLocale,
    getLocale
  };
}, "useTranslation");

// src/hooks/export/index.ts
import { useState as useState4 } from "react";
import papaparse from "papaparse";
import warnOnce3 from "warn-once";
var useExport = /* @__PURE__ */ __name(({
  resourceName,
  resource: resourceFromProps,
  sorter,
  sorters,
  filters,
  maxItemCount,
  pageSize = 20,
  mapData = /* @__PURE__ */ __name((item) => item, "mapData"),
  exportOptions,
  unparseConfig,
  meta,
  metaData,
  dataProviderName,
  onError,
  download
} = {}) => {
  const [isLoading, setIsLoading] = useState4(false);
  const dataProvider = useDataProvider();
  const getMeta = useMeta();
  const { resource, resources, identifier } = useResource(
    pickNotDeprecated(resourceFromProps, resourceName)
  );
  const getFriendlyName = useUserFriendlyName();
  const filename = `${getFriendlyName(
    identifier,
    "plural"
  )}-${(/* @__PURE__ */ new Date()).toLocaleString()}`;
  const { getList } = dataProvider(
    pickDataProvider(identifier, dataProviderName, resources)
  );
  const combinedMeta = getMeta({
    resource,
    meta: pickNotDeprecated(meta, metaData)
  });
  const triggerExport = /* @__PURE__ */ __name(async () => {
    setIsLoading(true);
    let rawData = [];
    let current = 1;
    let preparingData = true;
    while (preparingData) {
      try {
        const { data, total } = await getList({
          resource: (resource == null ? void 0 : resource.name) ?? "",
          filters,
          sort: pickNotDeprecated(sorters, sorter),
          sorters: pickNotDeprecated(sorters, sorter),
          pagination: {
            current,
            pageSize,
            mode: "server"
          },
          meta: combinedMeta,
          metaData: combinedMeta
        });
        current++;
        rawData.push(...data);
        if (maxItemCount && rawData.length >= maxItemCount) {
          rawData = rawData.slice(0, maxItemCount);
          preparingData = false;
        }
        if (total === rawData.length) {
          preparingData = false;
        }
      } catch (error) {
        setIsLoading(false);
        preparingData = false;
        onError == null ? void 0 : onError(error);
        return;
      }
    }
    const hasUnparseConfig = typeof unparseConfig !== "undefined" && unparseConfig !== null;
    warnOnce3(
      hasUnparseConfig && typeof exportOptions !== "undefined" && exportOptions !== null,
      `[useExport]: resource: "${identifier}" 

Both \`unparseConfig\` and \`exportOptions\` are set, \`unparseConfig\` will take precedence`
    );
    const options = {
      filename,
      useKeysAsHeaders: true,
      useBom: true,
      // original default
      title: "My Generated Report",
      // original default
      quoteStrings: '"',
      // original default
      ...exportOptions
    };
    warnOnce3(
      (exportOptions == null ? void 0 : exportOptions.decimalSeparator) !== void 0,
      `[useExport]: resource: "${identifier}" 

Use of \`decimalSeparator\` no longer supported, please use \`mapData\` instead.

See https://refine.dev/docs/api-reference/core/hooks/import-export/useExport/`
    );
    if (!hasUnparseConfig) {
      unparseConfig = {
        // useKeysAsHeaders takes priority over options.headers
        columns: options.useKeysAsHeaders ? void 0 : options.headers,
        delimiter: options.fieldSeparator,
        header: options.showLabels || options.useKeysAsHeaders,
        quoteChar: options.quoteStrings,
        quotes: true
      };
    } else {
      unparseConfig = {
        // Set to force quote for better compatibility
        quotes: true,
        ...unparseConfig
      };
    }
    let csv = papaparse.unparse(rawData.map(mapData), unparseConfig);
    if (options.showTitle) {
      csv = `${options.title}\r

${csv}`;
    }
    if (typeof window !== "undefined" && csv.length > 0 && (download ?? true)) {
      const fileExtension = options.useTextFile ? ".txt" : ".csv";
      const fileType = `text/${options.useTextFile ? "plain" : "csv"};charset=utf8;`;
      const downloadFilename = `${(options.filename ?? "download").replace(
        / /g,
        "_"
      )}${fileExtension}`;
      downloadInBrowser(
        downloadFilename,
        `${(options == null ? void 0 : options.useBom) ? "\uFEFF" : ""}${csv}`,
        fileType
      );
    }
    setIsLoading(false);
    return csv;
  }, "triggerExport");
  return {
    isLoading,
    triggerExport
  };
}, "useExport");

// src/hooks/form/index.ts
import React18 from "react";
import warnOnce4 from "warn-once";
var useForm = /* @__PURE__ */ __name((props = {}) => {
  var _a, _b, _c;
  const getMeta = useMeta();
  const invalidate = useInvalidate();
  const { redirect: defaultRedirect } = useRefineOptions();
  const { mutationMode: defaultMutationMode } = useMutationMode();
  const { setWarnWhen } = useWarnAboutChange();
  const handleSubmitWithRedirect = useRedirectionAfterSubmission();
  const pickedMeta = pickNotDeprecated(props.meta, props.metaData);
  const mutationMode = props.mutationMode ?? defaultMutationMode;
  const {
    id,
    setId,
    resource,
    identifier,
    formAction: action
  } = useResourceParams({
    resource: props.resource,
    id: props.id,
    action: props.action
  });
  const [autosaved, setAutosaved] = React18.useState(false);
  const isEdit = action === "edit";
  const isClone = action === "clone";
  const isCreate = action === "create";
  const combinedMeta = getMeta({
    resource,
    meta: pickedMeta
  });
  const isIdRequired = (isEdit || isClone) && Boolean(props.resource);
  const isIdDefined = typeof props.id !== "undefined";
  const isQueryDisabled = ((_a = props.queryOptions) == null ? void 0 : _a.enabled) === false;
  warnOnce4(
    isIdRequired && !isIdDefined && !isQueryDisabled,
    idWarningMessage(action, identifier, id)
  );
  const redirectAction = redirectPage({
    redirectFromProps: props.redirect,
    action,
    redirectOptions: defaultRedirect
  });
  const redirect = /* @__PURE__ */ __name((redirect2 = isEdit ? "list" : "edit", redirectId = id, routeParams = {}) => {
    handleSubmitWithRedirect({
      redirect: redirect2,
      resource,
      id: redirectId,
      meta: { ...pickedMeta, ...routeParams }
    });
  }, "redirect");
  const queryResult = useOne({
    resource: identifier,
    id,
    queryOptions: {
      // Only enable the query if it's not a create action and the `id` is defined
      enabled: !isCreate && id !== void 0,
      ...props.queryOptions
    },
    liveMode: props.liveMode,
    onLiveEvent: props.onLiveEvent,
    liveParams: props.liveParams,
    meta: { ...combinedMeta, ...props.queryMeta },
    dataProviderName: props.dataProviderName,
    overtimeOptions: { enabled: false }
  });
  const createMutation = useCreate({
    mutationOptions: props.createMutationOptions,
    overtimeOptions: { enabled: false }
  });
  const updateMutation = useUpdate({
    mutationOptions: props.updateMutationOptions,
    overtimeOptions: { enabled: false }
  });
  const mutationResult = isEdit ? updateMutation : createMutation;
  const isMutationLoading = mutationResult.isLoading;
  const formLoading = isMutationLoading || queryResult.isFetching;
  const { elapsedTime } = useLoadingOvertime({
    ...props.overtimeOptions,
    isLoading: formLoading
  });
  React18.useEffect(() => {
    return () => {
      var _a2;
      if (((_a2 = props.autoSave) == null ? void 0 : _a2.invalidateOnUnmount) && autosaved && identifier && typeof id !== "undefined") {
        invalidate({
          id,
          invalidates: props.invalidates || ["list", "many", "detail"],
          dataProviderName: props.dataProviderName,
          resource: identifier
        });
      }
    };
  }, [(_b = props.autoSave) == null ? void 0 : _b.invalidateOnUnmount, autosaved]);
  const onFinish = /* @__PURE__ */ __name(async (values, { isAutosave = false } = {}) => {
    const isPessimistic = mutationMode === "pessimistic";
    setWarnWhen(false);
    const onSuccessRedirect = /* @__PURE__ */ __name((id2) => redirect(redirectAction, id2), "onSuccessRedirect");
    const submissionPromise = new Promise((resolve, reject) => {
      if (!resource)
        return reject(missingResourceError5);
      if (isClone && !id)
        return reject(missingIdError3);
      if (!values)
        return reject(missingValuesError5);
      if (isAutosave && !isEdit)
        return reject(autosaveOnNonEditError);
      if (!isPessimistic && !isAutosave) {
        deferExecution(() => onSuccessRedirect());
        resolve();
      }
      const variables = {
        values,
        resource: identifier ?? resource.name,
        meta: { ...combinedMeta, ...props.mutationMeta },
        metaData: { ...combinedMeta, ...props.mutationMeta },
        dataProviderName: props.dataProviderName,
        invalidates: isAutosave ? [] : props.invalidates,
        successNotification: isAutosave ? false : props.successNotification,
        errorNotification: isAutosave ? false : props.errorNotification,
        // Update specific variables
        ...isEdit ? {
          id: id ?? "",
          mutationMode,
          undoableTimeout: props.undoableTimeout,
          optimisticUpdateMap: props.optimisticUpdateMap
        } : {}
      };
      const { mutateAsync } = isEdit ? updateMutation : createMutation;
      mutateAsync(variables, {
        // Call user-defined `onMutationSuccess` and `onMutationError` callbacks if provided
        // These callbacks will not have an effect on the submission promise
        onSuccess: props.onMutationSuccess ? (data, _, context) => {
          var _a2;
          (_a2 = props.onMutationSuccess) == null ? void 0 : _a2.call(props, data, values, context, isAutosave);
        } : void 0,
        onError: props.onMutationError ? (error, _, context) => {
          var _a2;
          (_a2 = props.onMutationError) == null ? void 0 : _a2.call(props, error, values, context, isAutosave);
        } : void 0
      }).then((data) => {
        if (isPessimistic && !isAutosave) {
          deferExecution(() => {
            var _a2;
            return onSuccessRedirect((_a2 = data == null ? void 0 : data.data) == null ? void 0 : _a2.id);
          });
        }
        if (isAutosave) {
          setAutosaved(true);
        }
        resolve(data);
      }).catch(reject);
    });
    return submissionPromise;
  }, "onFinish");
  const onFinishAutoSave = asyncDebounce(
    (values) => onFinish(values, { isAutosave: true }),
    ((_c = props.autoSave) == null ? void 0 : _c.debounce) || 1e3,
    "Cancelled by debounce"
  );
  const overtime = {
    elapsedTime
  };
  const autoSaveProps = {
    status: updateMutation.status,
    data: updateMutation.data,
    error: updateMutation.error
  };
  return {
    onFinish,
    onFinishAutoSave,
    formLoading,
    mutationResult,
    mutation: mutationResult,
    queryResult,
    query: queryResult,
    autoSaveProps,
    id,
    setId,
    redirect,
    overtime
  };
}, "useForm");
var missingResourceError5 = new Error(
  "[useForm]: `resource` is not defined or not matched but is required"
);
var missingIdError3 = new Error(
  "[useForm]: `id` is not defined but is required in edit and clone actions"
);
var missingValuesError5 = new Error(
  "[useForm]: `values` is not provided but is required"
);
var autosaveOnNonEditError = new Error(
  "[useForm]: `autoSave` is only allowed in edit action"
);
var idWarningMessage = /* @__PURE__ */ __name((action, identifier, id) => `[useForm]: action: "${action}", resource: "${identifier}", id: ${id}

If you don't use the \`setId\` method to set the \`id\`, you should pass the \`id\` prop to \`useForm\`. Otherwise, \`useForm\` will not be able to infer the \`id\` from the current URL with custom resource provided.

See https://refine.dev/docs/data/hooks/use-form/#id-`, "idWarningMessage");

// src/hooks/redirection/index.ts
import { useCallback as useCallback7 } from "react";
var useRedirectionAfterSubmission = /* @__PURE__ */ __name(() => {
  const { show, edit, list, create } = useNavigation();
  const handleSubmitWithRedirect = useCallback7(
    ({
      redirect,
      resource,
      id,
      meta = {}
    }) => {
      if (redirect && resource) {
        if (!!resource.show && redirect === "show" && id) {
          return show(resource, id, void 0, meta);
        }
        if (!!resource.edit && redirect === "edit" && id) {
          return edit(resource, id, void 0, meta);
        }
        if (!!resource.create && redirect === "create") {
          return create(resource, void 0, meta);
        }
        return list(resource, "push", meta);
      }
      return;
    },
    []
  );
  return handleSubmitWithRedirect;
}, "useRedirectionAfterSubmission");

// src/hooks/router/use-back/index.tsx
import React19, { useContext as useContext19 } from "react";
var useBack = /* @__PURE__ */ __name(() => {
  const routerContext = useContext19(RouterContext);
  const useBack2 = React19.useMemo(
    () => (routerContext == null ? void 0 : routerContext.back) ?? (() => () => void 0),
    [routerContext == null ? void 0 : routerContext.back]
  );
  const back = useBack2();
  return back;
}, "useBack");

// src/hooks/router/use-go/index.tsx
import React21, { useCallback as useCallback8, useContext as useContext20 } from "react";

// src/hooks/router/use-get-to-path/index.ts
import React20 from "react";
var useGetToPath = /* @__PURE__ */ __name(() => {
  const routerType = useRouterType();
  const { resource: resourceFromRoute, resources } = useResource();
  const parsed = useParsed();
  const fn = React20.useCallback(
    ({ resource, action, meta }) => {
      var _a;
      const selectedResource = resource || resourceFromRoute;
      if (!selectedResource) {
        return void 0;
      }
      const actionRoutes = getActionRoutesFromResource(
        selectedResource,
        resources,
        routerType === "legacy"
      );
      const actionRoute = (_a = actionRoutes.find(
        (item) => item.action === action
      )) == null ? void 0 : _a.route;
      if (!actionRoute) {
        return void 0;
      }
      const composed = composeRoute(
        actionRoute,
        selectedResource == null ? void 0 : selectedResource.meta,
        parsed,
        meta
      );
      return composed;
    },
    [resources, resourceFromRoute, parsed]
  );
  return fn;
}, "useGetToPath");

// src/hooks/router/use-go/index.tsx
var useGo = /* @__PURE__ */ __name(() => {
  const routerContext = useContext20(RouterContext);
  const { select: resourceSelect } = useResource();
  const getToPath = useGetToPath();
  const useGo2 = React21.useMemo(
    () => (routerContext == null ? void 0 : routerContext.go) ?? (() => () => void 0),
    [routerContext == null ? void 0 : routerContext.go]
  );
  const goFromRouter = useGo2();
  const go = useCallback8(
    (config) => {
      if (typeof config.to !== "object") {
        return goFromRouter({ ...config, to: config.to });
      }
      const { resource } = resourceSelect(config.to.resource);
      handleResourceErrors(config.to, resource);
      const newTo = getToPath({
        resource,
        action: config.to.action,
        meta: {
          id: config.to.id,
          ...config.to.meta
        }
      });
      return goFromRouter({
        ...config,
        to: newTo
      });
    },
    [resourceSelect, goFromRouter]
  );
  return go;
}, "useGo");
var handleResourceErrors = /* @__PURE__ */ __name((to, resource) => {
  if (!(to == null ? void 0 : to.action) || !(to == null ? void 0 : to.resource)) {
    throw new Error(`[useGo]: "action" or "resource" is required.`);
  }
  if (["edit", "show", "clone"].includes(to == null ? void 0 : to.action) && !to.id) {
    throw new Error(
      `[useGo]: [action: ${to.action}] requires an "id" for resource [resource: ${to.resource}]`
    );
  }
  const actionUrl = resource[to.action];
  if (!actionUrl) {
    throw new Error(
      `[useGo]: [action: ${to.action}] is not defined for [resource: ${to.resource}]`
    );
  }
}, "handleResourceErrors");

// src/hooks/navigation/index.ts
var useNavigation = /* @__PURE__ */ __name(() => {
  const { resources } = useResource();
  const routerType = useRouterType();
  const { useHistory } = useRouterContext();
  const history = useHistory();
  const parsed = useParsed();
  const go = useGo();
  const back = useBack();
  const handleUrl = /* @__PURE__ */ __name((url, type = "push") => {
    if (routerType === "legacy") {
      history[type](url);
    } else {
      go({ to: url, type });
    }
  }, "handleUrl");
  const createUrl = /* @__PURE__ */ __name((resource, meta = {}) => {
    var _a;
    if (routerType === "legacy") {
      const resourceItem2 = typeof resource === "string" ? pickResource(resource, resources, true) ?? {
        name: resource,
        route: resource
      } : resource;
      const createActionRoute2 = getActionRoutesFromResource(
        resourceItem2,
        resources,
        true
      ).find((r) => r.action === "create");
      if (!createActionRoute2) {
        return "";
      }
      return composeRoute(
        createActionRoute2.route,
        resourceItem2 == null ? void 0 : resourceItem2.meta,
        parsed,
        meta
      );
    }
    const resourceItem = typeof resource === "string" ? pickResource(resource, resources) ?? { name: resource } : resource;
    const createActionRoute = (_a = getActionRoutesFromResource(
      resourceItem,
      resources
    ).find((r) => r.action === "create")) == null ? void 0 : _a.route;
    if (!createActionRoute) {
      return "";
    }
    return go({
      to: composeRoute(createActionRoute, resourceItem == null ? void 0 : resourceItem.meta, parsed, meta),
      type: "path",
      query: meta.query
    });
  }, "createUrl");
  const editUrl = /* @__PURE__ */ __name((resource, id, meta = {}) => {
    var _a;
    const encodedId = encodeURIComponent(id);
    if (routerType === "legacy") {
      const resourceItem2 = typeof resource === "string" ? pickResource(resource, resources, true) ?? {
        name: resource,
        route: resource
      } : resource;
      const editActionRoute2 = getActionRoutesFromResource(
        resourceItem2,
        resources,
        true
      ).find((r) => r.action === "edit");
      if (!editActionRoute2) {
        return "";
      }
      return composeRoute(editActionRoute2.route, resourceItem2 == null ? void 0 : resourceItem2.meta, parsed, {
        ...meta,
        id: encodedId
      });
    }
    const resourceItem = typeof resource === "string" ? pickResource(resource, resources) ?? { name: resource } : resource;
    const editActionRoute = (_a = getActionRoutesFromResource(
      resourceItem,
      resources
    ).find((r) => r.action === "edit")) == null ? void 0 : _a.route;
    if (!editActionRoute) {
      return "";
    }
    return go({
      to: composeRoute(editActionRoute, resourceItem == null ? void 0 : resourceItem.meta, parsed, {
        ...meta,
        id: encodedId
      }),
      type: "path",
      query: meta.query
    });
  }, "editUrl");
  const cloneUrl = /* @__PURE__ */ __name((resource, id, meta = {}) => {
    var _a;
    const encodedId = encodeURIComponent(id);
    if (routerType === "legacy") {
      const resourceItem2 = typeof resource === "string" ? pickResource(resource, resources, true) ?? {
        name: resource,
        route: resource
      } : resource;
      const cloneActionRoute2 = getActionRoutesFromResource(
        resourceItem2,
        resources,
        true
      ).find((r) => r.action === "clone");
      if (!cloneActionRoute2) {
        return "";
      }
      return composeRoute(cloneActionRoute2.route, resourceItem2 == null ? void 0 : resourceItem2.meta, parsed, {
        ...meta,
        id: encodedId
      });
    }
    const resourceItem = typeof resource === "string" ? pickResource(resource, resources) ?? { name: resource } : resource;
    const cloneActionRoute = (_a = getActionRoutesFromResource(
      resourceItem,
      resources
    ).find((r) => r.action === "clone")) == null ? void 0 : _a.route;
    if (!cloneActionRoute) {
      return "";
    }
    return go({
      to: composeRoute(cloneActionRoute, resourceItem == null ? void 0 : resourceItem.meta, parsed, {
        ...meta,
        id: encodedId
      }),
      type: "path",
      query: meta.query
    });
  }, "cloneUrl");
  const showUrl = /* @__PURE__ */ __name((resource, id, meta = {}) => {
    var _a;
    const encodedId = encodeURIComponent(id);
    if (routerType === "legacy") {
      const resourceItem2 = typeof resource === "string" ? pickResource(resource, resources, true) ?? {
        name: resource,
        route: resource
      } : resource;
      const showActionRoute2 = getActionRoutesFromResource(
        resourceItem2,
        resources,
        true
      ).find((r) => r.action === "show");
      if (!showActionRoute2) {
        return "";
      }
      return composeRoute(showActionRoute2.route, resourceItem2 == null ? void 0 : resourceItem2.meta, parsed, {
        ...meta,
        id: encodedId
      });
    }
    const resourceItem = typeof resource === "string" ? pickResource(resource, resources) ?? { name: resource } : resource;
    const showActionRoute = (_a = getActionRoutesFromResource(
      resourceItem,
      resources
    ).find((r) => r.action === "show")) == null ? void 0 : _a.route;
    if (!showActionRoute) {
      return "";
    }
    return go({
      to: composeRoute(showActionRoute, resourceItem == null ? void 0 : resourceItem.meta, parsed, {
        ...meta,
        id: encodedId
      }),
      type: "path",
      query: meta.query
    });
  }, "showUrl");
  const listUrl = /* @__PURE__ */ __name((resource, meta = {}) => {
    var _a;
    if (routerType === "legacy") {
      const resourceItem2 = typeof resource === "string" ? pickResource(resource, resources, true) ?? {
        name: resource,
        route: resource
      } : resource;
      const listActionRoute2 = getActionRoutesFromResource(
        resourceItem2,
        resources,
        true
      ).find((r) => r.action === "list");
      if (!listActionRoute2) {
        return "";
      }
      return composeRoute(
        listActionRoute2.route,
        resourceItem2 == null ? void 0 : resourceItem2.meta,
        parsed,
        meta
      );
    }
    const resourceItem = typeof resource === "string" ? pickResource(resource, resources) ?? { name: resource } : resource;
    const listActionRoute = (_a = getActionRoutesFromResource(
      resourceItem,
      resources
    ).find((r) => r.action === "list")) == null ? void 0 : _a.route;
    if (!listActionRoute) {
      return "";
    }
    return go({
      to: composeRoute(listActionRoute, resourceItem == null ? void 0 : resourceItem.meta, parsed, meta),
      type: "path",
      query: meta.query
    });
  }, "listUrl");
  const create = /* @__PURE__ */ __name((resource, type = "push", meta = {}) => {
    handleUrl(createUrl(resource, meta), type);
  }, "create");
  const edit = /* @__PURE__ */ __name((resource, id, type = "push", meta = {}) => {
    handleUrl(editUrl(resource, id, meta), type);
  }, "edit");
  const clone = /* @__PURE__ */ __name((resource, id, type = "push", meta = {}) => {
    handleUrl(cloneUrl(resource, id, meta), type);
  }, "clone");
  const show = /* @__PURE__ */ __name((resource, id, type = "push", meta = {}) => {
    handleUrl(showUrl(resource, id, meta), type);
  }, "show");
  const list = /* @__PURE__ */ __name((resource, type = "push", meta = {}) => {
    handleUrl(listUrl(resource, meta), type);
  }, "list");
  const push = /* @__PURE__ */ __name((path, ...rest) => {
    if (routerType === "legacy") {
      history.push(path, ...rest);
    } else {
      go({ to: path, type: "push" });
    }
  }, "push");
  const replace = /* @__PURE__ */ __name((path, ...rest) => {
    if (routerType === "legacy") {
      history.replace(path, ...rest);
    } else {
      go({ to: path, type: "replace" });
    }
  }, "replace");
  const goBack = /* @__PURE__ */ __name(() => {
    if (routerType === "legacy") {
      history.goBack();
    } else {
      back();
    }
  }, "goBack");
  return {
    create,
    createUrl,
    edit,
    editUrl,
    clone,
    cloneUrl,
    show,
    showUrl,
    list,
    listUrl,
    push,
    replace,
    goBack
  };
}, "useNavigation");

// src/hooks/show/index.ts
import warnOnce5 from "warn-once";
var useShow = /* @__PURE__ */ __name(({
  resource: resourceFromProp,
  id,
  meta,
  metaData,
  queryOptions,
  overtimeOptions,
  ...useOneProps
} = {}) => {
  const {
    resource,
    identifier,
    id: showId,
    setId: setShowId
  } = useResourceParams({
    id,
    resource: resourceFromProp
  });
  const getMeta = useMeta();
  const combinedMeta = getMeta({
    resource,
    meta: pickNotDeprecated(meta, metaData)
  });
  warnOnce5(
    Boolean(resourceFromProp) && !showId,
    idWarningMessage2(identifier, showId)
  );
  const queryResult = useOne({
    resource: identifier,
    id: showId ?? "",
    queryOptions: {
      enabled: showId !== void 0,
      ...queryOptions
    },
    meta: combinedMeta,
    metaData: combinedMeta,
    overtimeOptions,
    ...useOneProps
  });
  return {
    queryResult,
    query: queryResult,
    showId,
    setShowId,
    overtime: queryResult.overtime
  };
}, "useShow");
var idWarningMessage2 = /* @__PURE__ */ __name((identifier, id) => `[useShow]: resource: "${identifier}", id: ${id} 

If you don't use the \`setShowId\` method to set the \`showId\`, you should pass the \`id\` prop to \`useShow\`. Otherwise, \`useShow\` will not be able to infer the \`id\` from the current URL. 

See https://refine.dev/docs/data/hooks/use-show/#resource`, "idWarningMessage");

// src/hooks/import/index.tsx
import { useEffect as useEffect5, useState as useState5 } from "react";
import chunk from "lodash-es/chunk.js";
import papaparse2 from "papaparse";
var useImport = /* @__PURE__ */ __name(({
  resourceName,
  resource: resourceFromProps,
  mapData = /* @__PURE__ */ __name((item) => item, "mapData"),
  paparseOptions,
  batchSize = Number.MAX_SAFE_INTEGER,
  onFinish,
  meta,
  metaData,
  onProgress,
  dataProviderName
} = {}) => {
  const [processedAmount, setProcessedAmount] = useState5(0);
  const [totalAmount, setTotalAmount] = useState5(0);
  const [isLoading, setIsLoading] = useState5(false);
  const { resource, identifier } = useResource(
    resourceFromProps ?? resourceName
  );
  const getMeta = useMeta();
  const createMany = useCreateMany();
  const create = useCreate();
  const combinedMeta = getMeta({
    resource,
    meta: pickNotDeprecated(meta, metaData)
  });
  let mutationResult;
  if (batchSize === 1) {
    mutationResult = create;
  } else {
    mutationResult = createMany;
  }
  const handleCleanup = /* @__PURE__ */ __name(() => {
    setTotalAmount(0);
    setProcessedAmount(0);
    setIsLoading(false);
  }, "handleCleanup");
  const handleFinish = /* @__PURE__ */ __name((createdValues) => {
    const result = {
      succeeded: createdValues.filter(
        (item) => item.type === "success"
      ),
      errored: createdValues.filter(
        (item) => item.type === "error"
      )
    };
    onFinish == null ? void 0 : onFinish(result);
    setIsLoading(false);
  }, "handleFinish");
  useEffect5(() => {
    onProgress == null ? void 0 : onProgress({ totalAmount, processedAmount });
  }, [totalAmount, processedAmount]);
  const handleChange = /* @__PURE__ */ __name(({ file }) => {
    handleCleanup();
    return new Promise((resolve) => {
      setIsLoading(true);
      papaparse2.parse(file, {
        complete: async ({ data }) => {
          const values = importCSVMapper(data, mapData);
          setTotalAmount(values.length);
          if (batchSize === 1) {
            const valueFns = values.map((value) => {
              const fn = /* @__PURE__ */ __name(async () => {
                const response = await create.mutateAsync({
                  resource: identifier ?? "",
                  values: value,
                  successNotification: false,
                  errorNotification: false,
                  dataProviderName,
                  meta: combinedMeta,
                  metaData: combinedMeta
                });
                return { response, value };
              }, "fn");
              return fn;
            });
            const createdValues = await sequentialPromises(
              valueFns,
              ({ response, value }) => {
                setProcessedAmount((currentAmount) => {
                  return currentAmount + 1;
                });
                return {
                  response: [response.data],
                  type: "success",
                  request: [value]
                };
              },
              (error, index) => {
                return {
                  response: [error],
                  type: "error",
                  request: [values[index]]
                };
              }
            );
            resolve(createdValues);
          } else {
            const chunks = chunk(values, batchSize);
            const chunkedFns = chunks.map((chunkedValues) => {
              const fn = /* @__PURE__ */ __name(async () => {
                const response = await createMany.mutateAsync({
                  resource: identifier ?? "",
                  values: chunkedValues,
                  successNotification: false,
                  errorNotification: false,
                  dataProviderName,
                  meta: combinedMeta,
                  metaData: combinedMeta
                });
                return {
                  response,
                  value: chunkedValues,
                  currentBatchLength: chunkedValues.length
                };
              }, "fn");
              return fn;
            });
            const createdValues = await sequentialPromises(
              chunkedFns,
              ({ response, currentBatchLength, value }) => {
                setProcessedAmount((currentAmount) => {
                  return currentAmount + currentBatchLength;
                });
                return {
                  response: response.data,
                  type: "success",
                  request: value
                };
              },
              (error, index) => {
                return {
                  response: [error],
                  type: "error",
                  request: chunks[index]
                };
              }
            );
            resolve(createdValues);
          }
        },
        ...paparseOptions
      });
    }).then((createdValues) => {
      handleFinish(createdValues);
      return createdValues;
    });
  }, "handleChange");
  return {
    inputProps: {
      type: "file",
      accept: ".csv",
      onChange: (event) => {
        if (event.target.files && event.target.files.length > 0) {
          handleChange({ file: event.target.files[0] });
        }
      }
    },
    mutationResult,
    isLoading,
    handleChange
  };
}, "useImport");

// src/hooks/modal/useModal/index.tsx
import { useCallback as useCallback9, useState as useState6 } from "react";
var useModal = /* @__PURE__ */ __name(({
  defaultVisible = false
} = {}) => {
  const [visible, setVisible] = useState6(defaultVisible);
  const show = useCallback9(() => setVisible(true), [visible]);
  const close = useCallback9(() => setVisible(false), [visible]);
  return {
    visible,
    show,
    close
  };
}, "useModal");

// src/hooks/router/use-to-path/index.ts
var useToPath = /* @__PURE__ */ __name(({
  resource,
  action,
  meta,
  legacy
}) => {
  const getToPath = useGetToPath();
  return getToPath({ resource, action, meta, legacy });
}, "useToPath");

// src/components/link/index.tsx
import React22, { forwardRef, useContext as useContext21 } from "react";
import warnOnce6 from "warn-once";
var LinkComponent = /* @__PURE__ */ __name((props, ref) => {
  const routerContext = useContext21(RouterContext);
  const LinkFromContext = routerContext == null ? void 0 : routerContext.Link;
  const goFunction = useGo();
  let resolvedTo = "";
  if ("go" in props) {
    if (!(routerContext == null ? void 0 : routerContext.go)) {
      warnOnce6(
        true,
        "[Link]: `routerProvider` is not found. To use `go`, Please make sure that you have provided the `routerProvider` for `<Refine />` https://refine.dev/docs/routing/router-provider/ \n"
      );
    }
    resolvedTo = goFunction({ ...props.go, type: "path" });
  }
  if ("to" in props) {
    resolvedTo = props.to;
  }
  if (LinkFromContext) {
    return /* @__PURE__ */ React22.createElement(
      LinkFromContext,
      {
        ref,
        ...props,
        to: resolvedTo,
        go: void 0
      }
    );
  }
  return /* @__PURE__ */ React22.createElement(
    "a",
    {
      ref,
      href: resolvedTo,
      ...props,
      to: void 0,
      go: void 0
    }
  );
}, "LinkComponent");
var Link = forwardRef(LinkComponent);

// src/hooks/router/use-link/index.tsx
var useLink = /* @__PURE__ */ __name(() => {
  return Link;
}, "useLink");

// src/hooks/legacy-router/useRouterContext.ts
import { useContext as useContext22 } from "react";

// src/contexts/router/legacy/index.tsx
import React23 from "react";
var defaultProvider = {
  useHistory: () => false,
  useLocation: () => false,
  useParams: () => ({}),
  Prompt: () => null,
  Link: () => null
};
var LegacyRouterContext = React23.createContext(defaultProvider);
var LegacyRouterContextProvider = /* @__PURE__ */ __name(({
  children,
  useHistory,
  useLocation,
  useParams,
  Prompt,
  Link: Link2,
  routes
}) => {
  return /* @__PURE__ */ React23.createElement(
    LegacyRouterContext.Provider,
    {
      value: {
        useHistory: useHistory ?? defaultProvider.useHistory,
        useLocation: useLocation ?? defaultProvider.useLocation,
        useParams: useParams ?? defaultProvider.useParams,
        Prompt: Prompt ?? defaultProvider.Prompt,
        Link: Link2 ?? defaultProvider.Link,
        routes: routes ?? defaultProvider.routes
      }
    },
    children
  );
}, "LegacyRouterContextProvider");

// src/hooks/legacy-router/useRouterContext.ts
var useRouterContext = /* @__PURE__ */ __name(() => {
  const routerContextValues = useContext22(LegacyRouterContext);
  const { useHistory, useLocation, useParams, Prompt, Link: Link2, routes } = routerContextValues ?? defaultProvider;
  return {
    useHistory,
    useLocation,
    useParams,
    Prompt,
    Link: Link2,
    routes
  };
}, "useRouterContext");

// src/hooks/accessControl/useCan/index.ts
import { useContext as useContext23 } from "react";
import { getXRay as getXRay22 } from "@refinedev/devtools-internal";
import {
  useQuery as useQuery8
} from "@tanstack/react-query";

// src/contexts/accessControl/index.tsx
import React24 from "react";
var AccessControlContext = React24.createContext({
  options: {
    buttons: { enableAccessControl: true, hideIfUnauthorized: false }
  }
});
var AccessControlContextProvider = /* @__PURE__ */ __name(({ can, children, options }) => {
  return /* @__PURE__ */ React24.createElement(
    AccessControlContext.Provider,
    {
      value: {
        can,
        options: options ? {
          ...options,
          buttons: {
            enableAccessControl: true,
            hideIfUnauthorized: false,
            ...options.buttons
          }
        } : {
          buttons: {
            enableAccessControl: true,
            hideIfUnauthorized: false
          },
          queryOptions: void 0
        }
      }
    },
    children
  );
}, "AccessControlContextProvider");

// src/definitions/helpers/sanitize-resource/index.ts
var sanitizeResource = /* @__PURE__ */ __name((resource) => {
  if (!resource) {
    return void 0;
  }
  const {
    icon,
    list,
    edit,
    create,
    show,
    clone,
    children,
    meta,
    options,
    ...restResource
  } = resource;
  const { icon: _metaIcon, ...restMeta } = meta ?? {};
  const { icon: _optionsIcon, ...restOptions } = options ?? {};
  return {
    ...restResource,
    ...meta ? { meta: restMeta } : {},
    ...options ? { options: restOptions } : {}
  };
}, "sanitizeResource");

// src/hooks/accessControl/useCan/index.ts
var useCan = /* @__PURE__ */ __name(({
  action,
  resource,
  params,
  queryOptions: hookQueryOptions
}) => {
  const { can, options: globalOptions } = useContext23(AccessControlContext);
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const { queryOptions: globalQueryOptions } = globalOptions || {};
  const mergedQueryOptions = {
    ...globalQueryOptions,
    ...hookQueryOptions
  };
  const { resource: _resource, ...paramsRest } = params ?? {};
  const sanitizedResource = sanitizeResource(_resource);
  const queryResponse = useQuery8({
    queryKey: keys2().access().resource(resource).action(action).params({
      params: { ...paramsRest, resource: sanitizedResource },
      enabled: mergedQueryOptions == null ? void 0 : mergedQueryOptions.enabled
    }).get(preferLegacyKeys),
    // Enabled check for `can` is enough to be sure that it's defined in the query function but TS is not smart enough to know that.
    queryFn: () => (can == null ? void 0 : can({
      action,
      resource,
      params: { ...paramsRest, resource: sanitizedResource }
    })) ?? Promise.resolve({ can: true }),
    enabled: typeof can !== "undefined",
    ...mergedQueryOptions,
    meta: {
      ...mergedQueryOptions == null ? void 0 : mergedQueryOptions.meta,
      ...getXRay22("useCan", preferLegacyKeys, resource, [
        "useButtonCanAccess",
        "useNavigationButton"
      ])
    },
    retry: false
  });
  return typeof can === "undefined" ? { data: { can: true } } : queryResponse;
}, "useCan");

// src/hooks/accessControl/useCanWithoutCache.ts
import React25 from "react";
var useCanWithoutCache = /* @__PURE__ */ __name(() => {
  const { can: canFromContext } = React25.useContext(AccessControlContext);
  const can = React25.useMemo(() => {
    if (!canFromContext) {
      return void 0;
    }
    const canWithSanitizedResource = /* @__PURE__ */ __name(async ({ params, ...rest }) => {
      const sanitizedResource = (params == null ? void 0 : params.resource) ? sanitizeResource(params.resource) : void 0;
      return canFromContext({
        ...rest,
        ...params ? {
          params: {
            ...params,
            resource: sanitizedResource
          }
        } : {}
      });
    }, "canWithSanitizedResource");
    return canWithSanitizedResource;
  }, [canFromContext]);
  return { can };
}, "useCanWithoutCache");

// src/hooks/useSelect/index.ts
import { useCallback as useCallback10, useEffect as useEffect6, useMemo as useMemo3, useRef as useRef2, useState as useState7 } from "react";
import debounce2 from "lodash-es/debounce.js";
import get from "lodash-es/get.js";
import uniqBy from "lodash-es/uniqBy.js";
var useSelect = /* @__PURE__ */ __name((props) => {
  const [search, setSearch] = useState7([]);
  const [options, setOptions] = useState7([]);
  const [selectedOptions, setSelectedOptions] = useState7([]);
  const {
    resource: resourceFromProps,
    sort,
    sorters,
    filters = [],
    optionLabel = "title",
    optionValue = "id",
    searchField = typeof optionLabel === "string" ? optionLabel : "title",
    debounce: debounceValue = 300,
    successNotification,
    errorNotification,
    defaultValueQueryOptions: defaultValueQueryOptionsFromProps,
    queryOptions,
    fetchSize,
    pagination,
    hasPagination = false,
    liveMode,
    defaultValue = [],
    selectedOptionsOrder = "in-place",
    onLiveEvent,
    onSearch: onSearchFromProp,
    liveParams,
    meta,
    metaData,
    dataProviderName,
    overtimeOptions
  } = props;
  const getOptionLabel = useCallback10(
    (item) => {
      if (typeof optionLabel === "string") {
        return get(item, optionLabel);
      }
      return optionLabel(item);
    },
    [optionLabel]
  );
  const getOptionValue = useCallback10(
    (item) => {
      if (typeof optionValue === "string") {
        return get(item, optionValue);
      }
      return optionValue(item);
    },
    [optionValue]
  );
  const { resource, identifier } = useResource(resourceFromProps);
  const getMeta = useMeta();
  const combinedMeta = getMeta({
    resource,
    meta: pickNotDeprecated(meta, metaData)
  });
  const defaultValues = Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  const defaultValueQueryOnSuccess = useCallback10(
    (data) => {
      setSelectedOptions(
        data.data.map(
          (item) => ({
            label: getOptionLabel(item),
            value: getOptionValue(item)
          })
        )
      );
    },
    [optionLabel, optionValue]
  );
  const defaultValueQueryOptions = defaultValueQueryOptionsFromProps ?? queryOptions;
  const defaultValueQueryResult = useMany({
    resource: identifier,
    ids: defaultValues,
    queryOptions: {
      ...defaultValueQueryOptions,
      enabled: defaultValues.length > 0 && ((defaultValueQueryOptions == null ? void 0 : defaultValueQueryOptions.enabled) ?? true),
      onSuccess: (data) => {
        var _a;
        defaultValueQueryOnSuccess(data);
        (_a = defaultValueQueryOptions == null ? void 0 : defaultValueQueryOptions.onSuccess) == null ? void 0 : _a.call(defaultValueQueryOptions, data);
      }
    },
    overtimeOptions: { enabled: false },
    meta: combinedMeta,
    metaData: combinedMeta,
    liveMode: "off",
    dataProviderName
  });
  const defaultQueryOnSuccess = useCallback10(
    (data) => {
      setOptions(
        data.data.map(
          (item) => ({
            label: getOptionLabel(item),
            value: getOptionValue(item)
          })
        )
      );
    },
    [optionLabel, optionValue]
  );
  const queryResult = useList({
    resource: identifier,
    sorters: pickNotDeprecated(sorters, sort),
    filters: filters.concat(search),
    pagination: {
      current: pagination == null ? void 0 : pagination.current,
      pageSize: (pagination == null ? void 0 : pagination.pageSize) ?? fetchSize,
      mode: pagination == null ? void 0 : pagination.mode
    },
    hasPagination,
    queryOptions: {
      ...queryOptions,
      onSuccess: (data) => {
        var _a;
        defaultQueryOnSuccess(data);
        (_a = queryOptions == null ? void 0 : queryOptions.onSuccess) == null ? void 0 : _a.call(queryOptions, data);
      }
    },
    overtimeOptions: { enabled: false },
    successNotification,
    errorNotification,
    meta: combinedMeta,
    metaData: combinedMeta,
    liveMode,
    liveParams,
    onLiveEvent,
    dataProviderName
  });
  const { elapsedTime } = useLoadingOvertime({
    ...overtimeOptions,
    isLoading: queryResult.isFetching || defaultValueQueryResult.isFetching
  });
  const combinedOptions = useMemo3(
    () => uniqBy(
      selectedOptionsOrder === "in-place" ? [...options, ...selectedOptions] : [...selectedOptions, ...options],
      "value"
    ),
    [options, selectedOptions]
  );
  const onSearchFromPropRef = useRef2(onSearchFromProp);
  const onSearch = useMemo3(() => {
    return debounce2((value) => {
      if (onSearchFromPropRef.current) {
        setSearch(onSearchFromPropRef.current(value));
        return;
      }
      if (!value) {
        setSearch([]);
        return;
      }
      setSearch([
        {
          field: searchField,
          operator: "contains",
          value
        }
      ]);
    }, debounceValue);
  }, [searchField, debounceValue]);
  useEffect6(() => {
    onSearchFromPropRef.current = onSearchFromProp;
  }, [onSearchFromProp]);
  return {
    queryResult,
    defaultValueQueryResult,
    query: queryResult,
    defaultValueQuery: defaultValueQueryResult,
    options: combinedOptions,
    onSearch,
    overtime: { elapsedTime }
  };
}, "useSelect");

// src/hooks/useTable/index.ts
import React26, { useState as useState8, useEffect as useEffect7, useCallback as useCallback11 } from "react";
import differenceWith2 from "lodash-es/differenceWith.js";
import isEqual3 from "lodash-es/isEqual.js";
import qs4 from "qs";
import warnOnce7 from "warn-once";
var defaultPermanentFilter = [];
var defaultPermanentSorter = [];
function useTable({
  initialCurrent,
  initialPageSize,
  hasPagination = true,
  pagination,
  initialSorter,
  permanentSorter = defaultPermanentSorter,
  defaultSetFilterBehavior,
  initialFilter,
  permanentFilter = defaultPermanentFilter,
  filters: filtersFromProp,
  sorters: sortersFromProp,
  syncWithLocation: syncWithLocationProp,
  resource: resourceFromProp,
  successNotification,
  errorNotification,
  queryOptions,
  liveMode: liveModeFromProp,
  onLiveEvent,
  liveParams,
  meta,
  metaData,
  dataProviderName,
  overtimeOptions
} = {}) {
  var _a, _b, _c, _d, _e;
  const { syncWithLocation: syncWithLocationContext } = useSyncWithLocation();
  const syncWithLocation = syncWithLocationProp ?? syncWithLocationContext;
  const liveMode = useLiveMode(liveModeFromProp);
  const routerType = useRouterType();
  const { useLocation } = useRouterContext();
  const { search, pathname } = useLocation();
  const getMeta = useMeta();
  const parsedParams = useParsed();
  const isServerSideFilteringEnabled = ((filtersFromProp == null ? void 0 : filtersFromProp.mode) || "server") === "server";
  const isServerSideSortingEnabled = ((sortersFromProp == null ? void 0 : sortersFromProp.mode) || "server") === "server";
  const hasPaginationString = hasPagination === false ? "off" : "server";
  const isPaginationEnabled = ((pagination == null ? void 0 : pagination.mode) ?? hasPaginationString) !== "off";
  const prefferedCurrent = pickNotDeprecated(
    pagination == null ? void 0 : pagination.current,
    initialCurrent
  );
  const prefferedPageSize = pickNotDeprecated(
    pagination == null ? void 0 : pagination.pageSize,
    initialPageSize
  );
  const preferredMeta = pickNotDeprecated(meta, metaData);
  const { parsedCurrent, parsedPageSize, parsedSorter, parsedFilters } = parseTableParams(search ?? "?");
  const preferredInitialFilters = pickNotDeprecated(
    filtersFromProp == null ? void 0 : filtersFromProp.initial,
    initialFilter
  );
  const preferredPermanentFilters = pickNotDeprecated(filtersFromProp == null ? void 0 : filtersFromProp.permanent, permanentFilter) ?? defaultPermanentFilter;
  const preferredInitialSorters = pickNotDeprecated(
    sortersFromProp == null ? void 0 : sortersFromProp.initial,
    initialSorter
  );
  const preferredPermanentSorters = pickNotDeprecated(sortersFromProp == null ? void 0 : sortersFromProp.permanent, permanentSorter) ?? defaultPermanentSorter;
  const prefferedFilterBehavior = pickNotDeprecated(
    filtersFromProp == null ? void 0 : filtersFromProp.defaultBehavior,
    defaultSetFilterBehavior
  ) ?? "merge";
  let defaultCurrent;
  let defaultPageSize;
  let defaultSorter;
  let defaultFilter;
  if (syncWithLocation) {
    defaultCurrent = ((_a = parsedParams == null ? void 0 : parsedParams.params) == null ? void 0 : _a.current) || parsedCurrent || prefferedCurrent || 1;
    defaultPageSize = ((_b = parsedParams == null ? void 0 : parsedParams.params) == null ? void 0 : _b.pageSize) || parsedPageSize || prefferedPageSize || 10;
    defaultSorter = ((_c = parsedParams == null ? void 0 : parsedParams.params) == null ? void 0 : _c.sorters) || (parsedSorter.length ? parsedSorter : preferredInitialSorters);
    defaultFilter = ((_d = parsedParams == null ? void 0 : parsedParams.params) == null ? void 0 : _d.filters) || (parsedFilters.length ? parsedFilters : preferredInitialFilters);
  } else {
    defaultCurrent = prefferedCurrent || 1;
    defaultPageSize = prefferedPageSize || 10;
    defaultSorter = preferredInitialSorters;
    defaultFilter = preferredInitialFilters;
  }
  const { replace } = useNavigation();
  const go = useGo();
  const { resource, identifier } = useResource(resourceFromProp);
  const combinedMeta = getMeta({
    resource,
    meta: preferredMeta
  });
  React26.useEffect(() => {
    warnOnce7(
      typeof identifier === "undefined",
      "useTable: `resource` is not defined."
    );
  }, [identifier]);
  const [sorters, setSorters] = useState8(
    setInitialSorters(preferredPermanentSorters, defaultSorter ?? [])
  );
  const [filters, setFilters] = useState8(
    setInitialFilters(preferredPermanentFilters, defaultFilter ?? [])
  );
  const [current, setCurrent] = useState8(defaultCurrent);
  const [pageSize, setPageSize] = useState8(defaultPageSize);
  const getCurrentQueryParams = /* @__PURE__ */ __name(() => {
    if (routerType === "new") {
      const { sorters: sorters2, filters: filters3, pageSize: pageSize3, current: current3, ...rest2 } = (parsedParams == null ? void 0 : parsedParams.params) ?? {};
      return rest2;
    }
    const { sorter, filters: filters2, pageSize: pageSize2, current: current2, ...rest } = qs4.parse(search, {
      ignoreQueryPrefix: true
    });
    return rest;
  }, "getCurrentQueryParams");
  const createLinkForSyncWithLocation = /* @__PURE__ */ __name(({
    pagination: { current: current2, pageSize: pageSize2 },
    sorter,
    filters: filters2
  }) => {
    if (routerType === "new") {
      return go({
        type: "path",
        options: {
          keepHash: true,
          keepQuery: true
        },
        query: {
          ...isPaginationEnabled ? { current: current2, pageSize: pageSize2 } : {},
          sorters: sorter,
          filters: filters2,
          ...getCurrentQueryParams()
        }
      }) ?? "";
    }
    const currentQueryParams = qs4.parse(search == null ? void 0 : search.substring(1));
    const stringifyParams = stringifyTableParams({
      pagination: {
        pageSize: pageSize2,
        current: current2
      },
      sorters: sorters ?? sorter,
      filters: filters2,
      ...currentQueryParams
    });
    return `${pathname ?? ""}?${stringifyParams ?? ""}`;
  }, "createLinkForSyncWithLocation");
  useEffect7(() => {
    if (search === "") {
      setCurrent(defaultCurrent);
      setPageSize(defaultPageSize);
      setSorters(
        setInitialSorters(preferredPermanentSorters, defaultSorter ?? [])
      );
      setFilters(
        setInitialFilters(preferredPermanentFilters, defaultFilter ?? [])
      );
    }
  }, [search]);
  useEffect7(() => {
    if (syncWithLocation) {
      const queryParams = getCurrentQueryParams();
      if (routerType === "new") {
        go({
          type: "replace",
          options: {
            keepQuery: true
          },
          query: {
            ...isPaginationEnabled ? { pageSize, current } : {},
            sorters: differenceWith2(
              sorters,
              preferredPermanentSorters,
              isEqual3
            ),
            filters: differenceWith2(
              filters,
              preferredPermanentFilters,
              isEqual3
            )
            // ...queryParams,
          }
        });
      } else {
        const stringifyParams = stringifyTableParams({
          ...isPaginationEnabled ? {
            pagination: {
              pageSize,
              current
            }
          } : {},
          sorters: differenceWith2(sorters, preferredPermanentSorters, isEqual3),
          filters: differenceWith2(filters, preferredPermanentFilters, isEqual3),
          ...queryParams
        });
        return replace == null ? void 0 : replace(`${pathname}?${stringifyParams}`, void 0, {
          shallow: true
        });
      }
    }
  }, [syncWithLocation, current, pageSize, sorters, filters]);
  const queryResult = useList({
    resource: identifier,
    hasPagination,
    pagination: { current, pageSize, mode: pagination == null ? void 0 : pagination.mode },
    filters: isServerSideFilteringEnabled ? unionFilters(preferredPermanentFilters, filters) : void 0,
    sorters: isServerSideSortingEnabled ? unionSorters(preferredPermanentSorters, sorters) : void 0,
    queryOptions,
    overtimeOptions,
    successNotification,
    errorNotification,
    meta: combinedMeta,
    metaData: combinedMeta,
    liveMode,
    liveParams,
    onLiveEvent,
    dataProviderName
  });
  const setFiltersAsMerge = useCallback11(
    (newFilters) => {
      setFilters(
        (prevFilters) => unionFilters(preferredPermanentFilters, newFilters, prevFilters)
      );
    },
    [preferredPermanentFilters]
  );
  const setFiltersAsReplace = useCallback11(
    (newFilters) => {
      setFilters(unionFilters(preferredPermanentFilters, newFilters));
    },
    [preferredPermanentFilters]
  );
  const setFiltersWithSetter = useCallback11(
    (setter) => {
      setFilters(
        (prev) => unionFilters(preferredPermanentFilters, setter(prev))
      );
    },
    [preferredPermanentFilters]
  );
  const setFiltersFn = useCallback11(
    (setterOrFilters, behavior = prefferedFilterBehavior) => {
      if (typeof setterOrFilters === "function") {
        setFiltersWithSetter(setterOrFilters);
      } else {
        if (behavior === "replace") {
          setFiltersAsReplace(setterOrFilters);
        } else {
          setFiltersAsMerge(setterOrFilters);
        }
      }
    },
    [setFiltersWithSetter, setFiltersAsReplace, setFiltersAsMerge]
  );
  const setSortWithUnion = useCallback11(
    (newSorter) => {
      setSorters(() => unionSorters(preferredPermanentSorters, newSorter));
    },
    [preferredPermanentSorters]
  );
  return {
    tableQueryResult: queryResult,
    tableQuery: queryResult,
    sorters,
    setSorters: setSortWithUnion,
    sorter: sorters,
    setSorter: setSortWithUnion,
    filters,
    setFilters: setFiltersFn,
    current,
    setCurrent,
    pageSize,
    setPageSize,
    pageCount: pageSize ? Math.ceil((((_e = queryResult.data) == null ? void 0 : _e.total) ?? 0) / pageSize) : 1,
    createLinkForSyncWithLocation,
    overtime: queryResult.overtime
  };
}
__name(useTable, "useTable");

// src/hooks/auditLog/useLog/index.ts
import { useContext as useContext24 } from "react";
import { getXRay as getXRay23 } from "@refinedev/devtools-internal";
import {
  useMutation as useMutation14,
  useQueryClient as useQueryClient7
} from "@tanstack/react-query";

// src/contexts/auditLog/index.tsx
import React27 from "react";
var AuditLogContext = React27.createContext({});
var AuditLogContextProvider = /* @__PURE__ */ __name(({ create, get: get2, update, children }) => {
  return /* @__PURE__ */ React27.createElement(AuditLogContext.Provider, { value: { create, get: get2, update } }, children);
}, "AuditLogContextProvider");

// src/hooks/auditLog/useLog/index.ts
var useLog = /* @__PURE__ */ __name(({
  logMutationOptions,
  renameMutationOptions
} = {}) => {
  const queryClient = useQueryClient7();
  const auditLogContext = useContext24(AuditLogContext);
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const authProvider = useActiveAuthProvider();
  const { resources } = useContext24(ResourceContext);
  const {
    data: identityData,
    refetch,
    isLoading
  } = useGetIdentity({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy),
    queryOptions: {
      enabled: !!(auditLogContext == null ? void 0 : auditLogContext.create)
    }
  });
  const log = useMutation14(
    async (params) => {
      var _a, _b, _c, _d, _e;
      const resource = pickResource(params.resource, resources);
      const logPermissions = pickNotDeprecated(
        (_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.audit,
        (_b = resource == null ? void 0 : resource.options) == null ? void 0 : _b.audit,
        (_d = (_c = resource == null ? void 0 : resource.options) == null ? void 0 : _c.auditLog) == null ? void 0 : _d.permissions
      );
      if (logPermissions) {
        if (!hasPermission(logPermissions, params.action)) {
          return;
        }
      }
      let authorData;
      if (isLoading && !!(auditLogContext == null ? void 0 : auditLogContext.create)) {
        authorData = await refetch();
      }
      return await ((_e = auditLogContext.create) == null ? void 0 : _e.call(auditLogContext, {
        ...params,
        author: identityData ?? (authorData == null ? void 0 : authorData.data)
      }));
    },
    {
      mutationKey: keys2().audit().action("log").get(),
      ...logMutationOptions,
      meta: {
        ...logMutationOptions == null ? void 0 : logMutationOptions.meta,
        ...getXRay23("useLog", preferLegacyKeys)
      }
    }
  );
  const rename = useMutation14(
    async (params) => {
      var _a;
      return await ((_a = auditLogContext.update) == null ? void 0 : _a.call(auditLogContext, params));
    },
    {
      onSuccess: (data) => {
        if (data == null ? void 0 : data.resource) {
          queryClient.invalidateQueries(
            keys2().audit().resource((data == null ? void 0 : data.resource) ?? "").action("list").get(preferLegacyKeys)
          );
        }
      },
      mutationKey: keys2().audit().action("rename").get(),
      ...renameMutationOptions,
      meta: {
        ...renameMutationOptions == null ? void 0 : renameMutationOptions.meta,
        ...getXRay23("useLog", preferLegacyKeys)
      }
    }
  );
  return { log, rename };
}, "useLog");

// src/hooks/auditLog/useLogList/index.ts
import { useContext as useContext25 } from "react";
import { getXRay as getXRay24 } from "@refinedev/devtools-internal";
import {
  useQuery as useQuery9
} from "@tanstack/react-query";
var useLogList = /* @__PURE__ */ __name(({
  resource,
  action,
  meta,
  author,
  metaData,
  queryOptions
}) => {
  const { get: get2 } = useContext25(AuditLogContext);
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const queryResponse = useQuery9({
    queryKey: keys2().audit().resource(resource).action("list").params(meta).get(preferLegacyKeys),
    queryFn: () => (get2 == null ? void 0 : get2({
      resource,
      action,
      author,
      meta,
      metaData
    })) ?? Promise.resolve([]),
    enabled: typeof get2 !== "undefined",
    ...queryOptions,
    retry: false,
    meta: {
      ...queryOptions == null ? void 0 : queryOptions.meta,
      ...getXRay24("useLogList", preferLegacyKeys, resource)
    }
  });
  return queryResponse;
}, "useLogList");

// src/hooks/breadcrumb/index.ts
import { useContext as useContext26 } from "react";
import warnOnce8 from "warn-once";
var useBreadcrumb = /* @__PURE__ */ __name(({
  meta: metaFromProps = {}
} = {}) => {
  const routerType = useRouterType();
  const { i18nProvider } = useContext26(I18nContext);
  const parsed = useParsed();
  const translate = useTranslate();
  const { resources, resource, action } = useResource();
  const {
    options: { textTransformers }
  } = useRefineContext();
  const breadcrumbs = [];
  if (!(resource == null ? void 0 : resource.name)) {
    return { breadcrumbs };
  }
  const addBreadcrumb = /* @__PURE__ */ __name((parentName) => {
    var _a, _b, _c, _d, _e, _f;
    const parentResource = typeof parentName === "string" ? pickResource(parentName, resources, routerType === "legacy") ?? {
      name: parentName
    } : parentName;
    if (parentResource) {
      const grandParentName = pickNotDeprecated(
        (_a = parentResource == null ? void 0 : parentResource.meta) == null ? void 0 : _a.parent,
        parentResource == null ? void 0 : parentResource.parentName
      );
      if (grandParentName) {
        addBreadcrumb(grandParentName);
      }
      const listActionOfResource = getActionRoutesFromResource(
        parentResource,
        resources,
        routerType === "legacy"
      ).find((r) => r.action === "list");
      const hrefRaw = ((_b = listActionOfResource == null ? void 0 : listActionOfResource.resource) == null ? void 0 : _b.list) ? listActionOfResource == null ? void 0 : listActionOfResource.route : void 0;
      const href = hrefRaw ? routerType === "legacy" ? hrefRaw : composeRoute(hrefRaw, parentResource == null ? void 0 : parentResource.meta, parsed, metaFromProps) : void 0;
      breadcrumbs.push({
        label: pickNotDeprecated(
          (_c = parentResource.meta) == null ? void 0 : _c.label,
          (_d = parentResource.options) == null ? void 0 : _d.label
        ) ?? translate(
          `${parentResource.name}.${parentResource.name}`,
          textTransformers.humanize(parentResource.name)
        ),
        href,
        icon: pickNotDeprecated(
          (_e = parentResource.meta) == null ? void 0 : _e.icon,
          (_f = parentResource.options) == null ? void 0 : _f.icon,
          parentResource.icon
        )
      });
    }
  }, "addBreadcrumb");
  addBreadcrumb(resource);
  if (action && action !== "list") {
    const key = `actions.${action}`;
    const actionLabel = translate(key);
    if (typeof i18nProvider !== "undefined" && actionLabel === key) {
      warnOnce8(
        true,
        `[useBreadcrumb]: Breadcrumb missing translate key for the "${action}" action. Please add "actions.${action}" key to your translation file.
For more information, see https://refine.dev/docs/api-reference/core/hooks/useBreadcrumb/#i18n-support`
      );
      breadcrumbs.push({
        label: translate(
          `buttons.${action}`,
          textTransformers.humanize(action)
        )
      });
    } else {
      breadcrumbs.push({
        label: translate(key, textTransformers.humanize(action))
      });
    }
  }
  return {
    breadcrumbs
  };
}, "useBreadcrumb");

// src/hooks/menu/useMenu.tsx
import React29 from "react";

// src/definitions/helpers/menu/create-resource-key.ts
var createResourceKey = /* @__PURE__ */ __name((resource, resources, legacy = false) => {
  const parents = [];
  let currentParentResource = getParentResource(resource, resources);
  while (currentParentResource) {
    parents.push(currentParentResource);
    currentParentResource = getParentResource(currentParentResource, resources);
  }
  parents.reverse();
  const key = [...parents, resource].map(
    (r) => removeLeadingTrailingSlashes(
      (legacy ? r.route : void 0) ?? r.identifier ?? r.name
    )
  ).join("/");
  return `/${key.replace(/^\//, "")}`;
}, "createResourceKey");

// src/definitions/helpers/menu/create-tree.ts
var createTree = /* @__PURE__ */ __name((resources, legacy = false) => {
  const root = {
    item: {
      name: "__root__"
    },
    children: {}
  };
  resources.forEach((resource) => {
    const parents = [];
    let currentParent = getParentResource(resource, resources);
    while (currentParent) {
      parents.push(currentParent);
      currentParent = getParentResource(currentParent, resources);
    }
    parents.reverse();
    let currentTree = root;
    parents.forEach((parent) => {
      const key2 = (legacy ? parent.route : void 0) ?? parent.identifier ?? parent.name;
      if (!currentTree.children[key2]) {
        currentTree.children[key2] = {
          item: parent,
          children: {}
        };
      }
      currentTree = currentTree.children[key2];
    });
    const key = (legacy ? resource.route : void 0) ?? resource.identifier ?? resource.name;
    if (!currentTree.children[key]) {
      currentTree.children[key] = {
        item: resource,
        children: {}
      };
    }
  });
  const flatten = /* @__PURE__ */ __name((tree) => {
    const items = [];
    Object.keys(tree.children).forEach((key) => {
      const itemKey = createResourceKey(
        tree.children[key].item,
        resources,
        legacy
      );
      const item = {
        ...tree.children[key].item,
        key: itemKey,
        children: flatten(tree.children[key])
      };
      items.push(item);
    });
    return items;
  }, "flatten");
  return flatten(root);
}, "createTree");

// src/hooks/menu/useMenu.tsx
var getCleanPath = /* @__PURE__ */ __name((pathname) => {
  return pathname.split("?")[0].split("#")[0].replace(/(.+)(\/$)/, "$1");
}, "getCleanPath");
var useMenu = /* @__PURE__ */ __name(({ meta, hideOnMissingParameter = true } = {
  hideOnMissingParameter: true
}) => {
  const translate = useTranslate();
  const getToPath = useGetToPath();
  const routerType = useRouterType();
  const { resource, resources } = useResource();
  const { pathname } = useParsed();
  const { useLocation } = useRouterContext();
  const { pathname: legacyPath } = useLocation();
  const getFriendlyName = useUserFriendlyName();
  const cleanPathname = routerType === "legacy" ? getCleanPath(legacyPath) : pathname ? getCleanPath(pathname) : void 0;
  const cleanRoute = `/${(cleanPathname ?? "").replace(/^\//, "")}`;
  const selectedKey = resource ? createResourceKey(resource, resources, routerType === "legacy") : cleanRoute ?? "";
  const defaultOpenKeys = React29.useMemo(() => {
    if (!resource)
      return [];
    let parent = getParentResource(resource, resources);
    const keys2 = [createResourceKey(resource, resources)];
    while (parent) {
      keys2.push(createResourceKey(parent, resources));
      parent = getParentResource(parent, resources);
    }
    return keys2;
  }, []);
  const prepareItem = React29.useCallback(
    (item) => {
      var _a, _b, _c, _d, _e, _f;
      if (pickNotDeprecated((_a = item == null ? void 0 : item.meta) == null ? void 0 : _a.hide, (_b = item == null ? void 0 : item.options) == null ? void 0 : _b.hide)) {
        return void 0;
      }
      if (!(item == null ? void 0 : item.list) && item.children.length === 0)
        return void 0;
      const composed = item.list ? getToPath({
        resource: item,
        action: "list",
        legacy: routerType === "legacy",
        meta
      }) : void 0;
      if (hideOnMissingParameter && composed && composed.match(/(\/|^):(.+?)(\/|$){1}/))
        return void 0;
      return {
        ...item,
        route: composed,
        icon: pickNotDeprecated((_c = item.meta) == null ? void 0 : _c.icon, (_d = item.options) == null ? void 0 : _d.icon, item.icon),
        label: pickNotDeprecated((_e = item == null ? void 0 : item.meta) == null ? void 0 : _e.label, (_f = item == null ? void 0 : item.options) == null ? void 0 : _f.label) ?? translate(
          `${item.name}.${item.name}`,
          getFriendlyName(item.name, "plural")
        )
      };
    },
    [routerType, meta, getToPath, translate, hideOnMissingParameter]
  );
  const treeItems = React29.useMemo(() => {
    const treeMenuItems = createTree(resources, routerType === "legacy");
    const prepare = /* @__PURE__ */ __name((items) => {
      return items.flatMap((item) => {
        const preparedNodes = prepare(item.children);
        const newItem = prepareItem({
          ...item,
          children: preparedNodes
        });
        if (!newItem)
          return [];
        return [newItem];
      });
    }, "prepare");
    return prepare(treeMenuItems);
  }, [resources, routerType, prepareItem]);
  return {
    defaultOpenKeys,
    selectedKey,
    menuItems: treeItems
  };
}, "useMenu");

// src/contexts/metaContext/index.tsx
import React30, {
  createContext as createContext4,
  useContext as useContext27,
  useMemo as useMemo4
} from "react";
var MetaContext = createContext4({});
var MetaContextProvider = /* @__PURE__ */ __name(({
  children,
  value
}) => {
  const currentValue = useMetaContext();
  const metaContext = useMemo4(() => {
    return {
      ...currentValue,
      ...value
    };
  }, [currentValue, value]);
  return /* @__PURE__ */ React30.createElement(MetaContext.Provider, { value: metaContext }, children);
}, "MetaContextProvider");
var useMetaContext = /* @__PURE__ */ __name(() => {
  const context = useContext27(MetaContext);
  if (!context) {
    throw new Error("useMetaContext must be used within a MetaContextProvider");
  }
  return useContext27(MetaContext);
}, "useMetaContext");

// src/hooks/useMeta/index.ts
var useMeta = /* @__PURE__ */ __name(() => {
  const { params } = useParsed();
  const metaContext = useMetaContext();
  const getMetaFn = /* @__PURE__ */ __name(({
    resource,
    meta: metaFromProp
  } = {}) => {
    const { meta } = sanitizeResource(resource) ?? { meta: {} };
    const {
      filters: _filters,
      sorters: _sorters,
      current: _current,
      pageSize: _pageSize,
      ...additionalParams
    } = params ?? {};
    const result = {
      ...meta,
      ...additionalParams,
      ...metaFromProp
    };
    if (metaContext == null ? void 0 : metaContext.tenantId) {
      result["tenantId"] = metaContext.tenantId;
    }
    return result;
  }, "getMetaFn");
  return getMetaFn;
}, "useMeta");

// src/hooks/use-refine-options/index.tsx
import React31 from "react";
var useRefineOptions = /* @__PURE__ */ __name(() => {
  const { options } = React31.useContext(RefineContext);
  return options;
}, "useRefineOptions");

// src/hooks/use-resource-params/index.ts
import React32 from "react";

// src/hooks/use-resource-params/use-id/index.tsx
var useId = /* @__PURE__ */ __name((id) => {
  const routerType = useRouterType();
  const { useParams } = useRouterContext();
  const parsed = useParsed();
  const legacyParams = useParams();
  const inferredId = routerType === "legacy" ? legacyParams.id : parsed.id;
  return id ?? inferredId;
}, "useId");

// src/hooks/use-resource-params/use-action/index.tsx
var useAction = /* @__PURE__ */ __name((action) => {
  const routerType = useRouterType();
  const { useParams } = useRouterContext();
  const parsed = useParsed();
  const legacyParams = useParams();
  const inferredAction = routerType === "legacy" ? legacyParams.action : parsed.action;
  return action ?? inferredAction;
}, "useAction");

// src/hooks/use-resource-params/index.ts
function useResourceParams(props) {
  const { select, identifier: inferredIdentifier } = useResource();
  const resourceToCheck = (props == null ? void 0 : props.resource) ?? inferredIdentifier;
  const { identifier = void 0, resource = void 0 } = resourceToCheck ? select(resourceToCheck, true) : {};
  const isSameResource = inferredIdentifier === identifier;
  const inferredId = useId();
  const action = useAction(props == null ? void 0 : props.action);
  const defaultId = React32.useMemo(() => {
    if (!isSameResource)
      return props == null ? void 0 : props.id;
    return (props == null ? void 0 : props.id) ?? inferredId;
  }, [isSameResource, props == null ? void 0 : props.id, inferredId]);
  const [id, setId] = React32.useState(defaultId);
  React32.useMemo(() => setId(defaultId), [defaultId]);
  const formAction = React32.useMemo(() => {
    if (!isSameResource && !(props == null ? void 0 : props.action)) {
      return "create";
    }
    if (action === "edit" || action === "clone") {
      return action;
    }
    return "create";
  }, [action, isSameResource, props == null ? void 0 : props.action]);
  return {
    id,
    setId,
    resource,
    action,
    identifier,
    formAction
  };
}
__name(useResourceParams, "useResourceParams");

// src/hooks/button/actionable-button/index.tsx
function useActionableButton({
  type
}) {
  const translate = useTranslate();
  const {
    textTransformers: { humanize }
  } = useRefineOptions();
  const key = `buttons.${type}`;
  const fallback = humanize(type);
  const label = translate(key, fallback);
  return { label };
}
__name(useActionableButton, "useActionableButton");

// src/hooks/button/navigation-button/index.tsx
import React34 from "react";

// src/hooks/button/button-can-access/index.tsx
import React33 from "react";
var useButtonCanAccess = /* @__PURE__ */ __name((props) => {
  var _a, _b, _c;
  const translate = useTranslate();
  const accessControlContext = React33.useContext(AccessControlContext);
  const accessControlEnabled = ((_a = props.accessControl) == null ? void 0 : _a.enabled) ?? accessControlContext.options.buttons.enableAccessControl;
  const hideIfUnauthorized = ((_b = props.accessControl) == null ? void 0 : _b.hideIfUnauthorized) ?? accessControlContext.options.buttons.hideIfUnauthorized;
  const { data: canAccess } = useCan({
    resource: (_c = props.resource) == null ? void 0 : _c.name,
    action: props.action === "clone" ? "create" : props.action,
    params: { id: props.id, resource: props.resource },
    queryOptions: {
      enabled: accessControlEnabled
    }
  });
  const title = React33.useMemo(() => {
    if (canAccess == null ? void 0 : canAccess.can)
      return "";
    if (canAccess == null ? void 0 : canAccess.reason)
      return canAccess.reason;
    return translate(
      "buttons.notAccessTitle",
      "You don't have permission to access"
    );
  }, [canAccess == null ? void 0 : canAccess.can, canAccess == null ? void 0 : canAccess.reason, translate]);
  const hidden = accessControlEnabled && hideIfUnauthorized && !(canAccess == null ? void 0 : canAccess.can);
  const disabled = (canAccess == null ? void 0 : canAccess.can) === false;
  return {
    title,
    hidden,
    disabled,
    canAccess
  };
}, "useButtonCanAccess");

// src/hooks/button/navigation-button/index.tsx
function useNavigationButton(props) {
  var _a;
  const navigation = useNavigation();
  const routerType = useRouterType();
  const Link2 = useLink();
  const { Link: LegacyLink } = useRouterContext();
  const translate = useTranslate();
  const getUserFriendlyName = useUserFriendlyName();
  const {
    textTransformers: { humanize }
  } = useRefineOptions();
  const { id, resource, identifier } = useResourceParams({
    resource: props.resource,
    id: props.action === "create" ? void 0 : props.id
  });
  const { canAccess, title, hidden, disabled } = useButtonCanAccess({
    action: props.action,
    accessControl: props.accessControl,
    id,
    resource
  });
  const LinkComponent2 = routerType === "legacy" ? LegacyLink : Link2;
  const to = React34.useMemo(() => {
    if (!resource)
      return "";
    switch (props.action) {
      case "create":
      case "list":
        return navigation[`${props.action}Url`](resource, props.meta);
      default:
        if (!id)
          return "";
        return navigation[`${props.action}Url`](resource, id, props.meta);
    }
  }, [resource, id, props.meta, navigation[`${props.action}Url`]]);
  const label = props.action === "list" ? translate(
    `${identifier ?? props.resource}.titles.list`,
    getUserFriendlyName(
      ((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.label) ?? (resource == null ? void 0 : resource.label) ?? identifier ?? props.resource,
      "plural"
    )
  ) : translate(`buttons.${props.action}`, humanize(props.action));
  return {
    to,
    label,
    title,
    disabled,
    hidden,
    canAccess,
    LinkComponent: LinkComponent2
  };
}
__name(useNavigationButton, "useNavigationButton");

// src/hooks/button/delete-button/index.tsx
function useDeleteButton(props) {
  const translate = useTranslate();
  const { mutate, isLoading, variables } = useDelete();
  const { setWarnWhen } = useWarnAboutChange();
  const { mutationMode } = useMutationMode(props.mutationMode);
  const { id, resource, identifier } = useResourceParams({
    resource: props.resource,
    id: props.id
  });
  const { title, disabled, hidden, canAccess } = useButtonCanAccess({
    action: "delete",
    accessControl: props.accessControl,
    id,
    resource
  });
  const label = translate("buttons.delete", "Delete");
  const confirmOkLabel = translate("buttons.delete", "Delete");
  const confirmTitle = translate("buttons.confirm", "Are you sure?");
  const cancelLabel = translate("buttons.cancel", "Cancel");
  const loading = id === (variables == null ? void 0 : variables.id) && isLoading;
  const onConfirm = /* @__PURE__ */ __name(() => {
    if (id && identifier) {
      setWarnWhen(false);
      mutate(
        {
          id,
          resource: identifier,
          mutationMode,
          successNotification: props.successNotification,
          errorNotification: props.errorNotification,
          meta: props.meta,
          metaData: props.meta,
          dataProviderName: props.dataProviderName,
          invalidates: props.invalidates
        },
        {
          onSuccess: props.onSuccess
        }
      );
    }
  }, "onConfirm");
  return {
    label,
    title,
    hidden,
    disabled,
    canAccess,
    loading,
    confirmOkLabel,
    cancelLabel,
    confirmTitle,
    onConfirm
  };
}
__name(useDeleteButton, "useDeleteButton");

// src/hooks/button/refresh-button/index.tsx
import { useQueryClient as useQueryClient8 } from "@tanstack/react-query";
function useRefreshButton(props) {
  const translate = useTranslate();
  const { keys: keys2, preferLegacyKeys } = useKeys();
  const queryClient = useQueryClient8();
  const invalidates = useInvalidate();
  const { identifier, id } = useResourceParams({
    resource: props.resource,
    id: props.id
  });
  const { resources } = useResource();
  const loading = !!queryClient.isFetching({
    queryKey: keys2().data(pickDataProvider(identifier, props.dataProviderName, resources)).resource(identifier).action("one").get(preferLegacyKeys)
  });
  const onClick = /* @__PURE__ */ __name(() => {
    invalidates({
      id,
      invalidates: ["detail"],
      dataProviderName: props.dataProviderName,
      resource: identifier
    });
  }, "onClick");
  const label = translate("buttons.refresh", "Refresh");
  return {
    onClick,
    label,
    loading
  };
}
__name(useRefreshButton, "useRefreshButton");

// src/hooks/button/index.tsx
var useShowButton = /* @__PURE__ */ __name((props) => useNavigationButton({ ...props, action: "show" }), "useShowButton");
var useEditButton = /* @__PURE__ */ __name((props) => useNavigationButton({ ...props, action: "edit" }), "useEditButton");
var useCloneButton = /* @__PURE__ */ __name((props) => useNavigationButton({ ...props, action: "clone" }), "useCloneButton");
var useCreateButton = /* @__PURE__ */ __name((props) => useNavigationButton({ ...props, action: "create" }), "useCreateButton");
var useListButton = /* @__PURE__ */ __name((props) => useNavigationButton({ ...props, action: "list" }), "useListButton");
var useSaveButton = /* @__PURE__ */ __name(() => useActionableButton({ type: "save" }), "useSaveButton");
var useExportButton = /* @__PURE__ */ __name(() => useActionableButton({ type: "export" }), "useExportButton");
var useImportButton = /* @__PURE__ */ __name(() => useActionableButton({ type: "import" }), "useImportButton");

// src/components/pages/error/index.tsx
var ErrorComponent = /* @__PURE__ */ __name(() => {
  const [errorMessage, setErrorMessage] = useState9();
  const translate = useTranslate();
  const { push } = useNavigation();
  const go = useGo();
  const routerType = useRouterType();
  const { resource, action } = useResource();
  useEffect8(() => {
    if (resource && action) {
      setErrorMessage(
        translate(
          "pages.error.info",
          {
            action,
            resource: resource.name
          },
          `You may have forgotten to add the "${action}" component to "${resource.name}" resource.`
        )
      );
    }
  }, [resource, action]);
  return /* @__PURE__ */ React35.createElement(React35.Fragment, null, /* @__PURE__ */ React35.createElement("h1", null, translate(
    "pages.error.404",
    void 0,
    "Sorry, the page you visited does not exist."
  )), errorMessage && /* @__PURE__ */ React35.createElement("p", null, errorMessage), /* @__PURE__ */ React35.createElement(
    "button",
    {
      onClick: () => {
        if (routerType === "legacy") {
          push("/");
        } else {
          go({ to: "/" });
        }
      }
    },
    translate("pages.error.backHome", void 0, "Back Home")
  ));
}, "ErrorComponent");

// src/components/pages/login/index.tsx
import React36, { useState as useState10 } from "react";
var LoginPage = /* @__PURE__ */ __name(() => {
  const [username, setUsername] = useState10("");
  const [password, setPassword] = useState10("");
  const translate = useTranslate();
  const authProvider = useActiveAuthProvider();
  const { mutate: login } = useLogin({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  return /* @__PURE__ */ React36.createElement(React36.Fragment, null, /* @__PURE__ */ React36.createElement("h1", null, translate("pages.login.title", "Sign in your account")), /* @__PURE__ */ React36.createElement(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        login({ username, password });
      }
    },
    /* @__PURE__ */ React36.createElement("table", null, /* @__PURE__ */ React36.createElement("tbody", null, /* @__PURE__ */ React36.createElement("tr", null, /* @__PURE__ */ React36.createElement("td", null, translate("pages.login.username", void 0, "username"), ":"), /* @__PURE__ */ React36.createElement("td", null, /* @__PURE__ */ React36.createElement(
      "input",
      {
        type: "text",
        size: 20,
        autoCorrect: "off",
        spellCheck: false,
        autoCapitalize: "off",
        autoFocus: true,
        required: true,
        value: username,
        onChange: (e) => setUsername(e.target.value)
      }
    ))), /* @__PURE__ */ React36.createElement("tr", null, /* @__PURE__ */ React36.createElement("td", null, translate("pages.login.password", void 0, "password"), ":"), /* @__PURE__ */ React36.createElement("td", null, /* @__PURE__ */ React36.createElement(
      "input",
      {
        type: "password",
        required: true,
        size: 20,
        value: password,
        onChange: (e) => setPassword(e.target.value)
      }
    ))))),
    /* @__PURE__ */ React36.createElement("br", null),
    /* @__PURE__ */ React36.createElement("input", { type: "submit", value: "login" })
  ));
}, "LoginPage");

// src/components/pages/auth/index.tsx
import React41 from "react";

// src/components/pages/auth/components/login/index.tsx
import React37, { useState as useState11 } from "react";
var LoginPage2 = /* @__PURE__ */ __name(({
  providers,
  registerLink,
  forgotPasswordLink,
  rememberMe,
  contentProps,
  wrapperProps,
  renderContent,
  formProps,
  title = void 0,
  hideForm,
  mutationVariables
}) => {
  const routerType = useRouterType();
  const Link2 = useLink();
  const { Link: LegacyLink } = useRouterContext();
  const ActiveLink = routerType === "legacy" ? LegacyLink : Link2;
  const [email, setEmail] = useState11("");
  const [password, setPassword] = useState11("");
  const [remember, setRemember] = useState11(false);
  const translate = useTranslate();
  const authProvider = useActiveAuthProvider();
  const { mutate: login } = useLogin({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const renderLink = /* @__PURE__ */ __name((link, text2) => {
    return /* @__PURE__ */ React37.createElement(ActiveLink, { to: link }, text2);
  }, "renderLink");
  const renderProviders = /* @__PURE__ */ __name(() => {
    if (providers) {
      return providers.map((provider) => /* @__PURE__ */ React37.createElement(
        "div",
        {
          key: provider.name,
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem"
          }
        },
        /* @__PURE__ */ React37.createElement(
          "button",
          {
            onClick: () => login({
              ...mutationVariables,
              providerName: provider.name
            }),
            style: {
              display: "flex",
              alignItems: "center"
            }
          },
          provider == null ? void 0 : provider.icon,
          provider.label ?? /* @__PURE__ */ React37.createElement("label", null, provider.label)
        )
      ));
    }
    return null;
  }, "renderProviders");
  const content = /* @__PURE__ */ React37.createElement("div", { ...contentProps }, /* @__PURE__ */ React37.createElement("h1", { style: { textAlign: "center" } }, translate("pages.login.title", "Sign in to your account")), renderProviders(), !hideForm && /* @__PURE__ */ React37.createElement(React37.Fragment, null, /* @__PURE__ */ React37.createElement("hr", null), /* @__PURE__ */ React37.createElement(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        login({ ...mutationVariables, email, password, remember });
      },
      ...formProps
    },
    /* @__PURE__ */ React37.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          padding: 25
        }
      },
      /* @__PURE__ */ React37.createElement("label", { htmlFor: "email-input" }, translate("pages.login.fields.email", "Email")),
      /* @__PURE__ */ React37.createElement(
        "input",
        {
          id: "email-input",
          name: "email",
          type: "text",
          size: 20,
          autoCorrect: "off",
          spellCheck: false,
          autoCapitalize: "off",
          required: true,
          value: email,
          onChange: (e) => setEmail(e.target.value)
        }
      ),
      /* @__PURE__ */ React37.createElement("label", { htmlFor: "password-input" }, translate("pages.login.fields.password", "Password")),
      /* @__PURE__ */ React37.createElement(
        "input",
        {
          id: "password-input",
          type: "password",
          name: "password",
          required: true,
          size: 20,
          value: password,
          onChange: (e) => setPassword(e.target.value)
        }
      ),
      rememberMe ?? /* @__PURE__ */ React37.createElement(React37.Fragment, null, /* @__PURE__ */ React37.createElement("label", { htmlFor: "remember-me-input" }, translate("pages.login.buttons.rememberMe", "Remember me"), /* @__PURE__ */ React37.createElement(
        "input",
        {
          id: "remember-me-input",
          name: "remember",
          type: "checkbox",
          size: 20,
          checked: remember,
          value: remember.toString(),
          onChange: () => {
            setRemember(!remember);
          }
        }
      ))),
      /* @__PURE__ */ React37.createElement("br", null),
      forgotPasswordLink ?? renderLink(
        "/forgot-password",
        translate(
          "pages.login.buttons.forgotPassword",
          "Forgot password?"
        )
      ),
      /* @__PURE__ */ React37.createElement(
        "input",
        {
          type: "submit",
          value: translate("pages.login.signin", "Sign in")
        }
      ),
      registerLink ?? /* @__PURE__ */ React37.createElement("span", null, translate(
        "pages.login.buttons.noAccount",
        "Don\u2019t have an account?"
      ), " ", renderLink(
        "/register",
        translate("pages.login.register", "Sign up")
      ))
    )
  )), registerLink !== false && hideForm && /* @__PURE__ */ React37.createElement("div", { style: { textAlign: "center" } }, translate("pages.login.buttons.noAccount", "Don\u2019t have an account?"), " ", renderLink(
    "/register",
    translate("pages.login.register", "Sign up")
  )));
  return /* @__PURE__ */ React37.createElement("div", { ...wrapperProps }, renderContent ? renderContent(content, title) : content);
}, "LoginPage");

// src/components/pages/auth/components/register/index.tsx
import React38, { useState as useState12 } from "react";
var RegisterPage = /* @__PURE__ */ __name(({
  providers,
  loginLink,
  wrapperProps,
  contentProps,
  renderContent,
  formProps,
  title = void 0,
  hideForm,
  mutationVariables
}) => {
  const routerType = useRouterType();
  const Link2 = useLink();
  const { Link: LegacyLink } = useRouterContext();
  const ActiveLink = routerType === "legacy" ? LegacyLink : Link2;
  const [email, setEmail] = useState12("");
  const [password, setPassword] = useState12("");
  const translate = useTranslate();
  const authProvider = useActiveAuthProvider();
  const { mutate: register, isLoading } = useRegister({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const renderLink = /* @__PURE__ */ __name((link, text2) => {
    return /* @__PURE__ */ React38.createElement(ActiveLink, { to: link }, text2);
  }, "renderLink");
  const renderProviders = /* @__PURE__ */ __name(() => {
    if (providers) {
      return providers.map((provider) => /* @__PURE__ */ React38.createElement(
        "div",
        {
          key: provider.name,
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem"
          }
        },
        /* @__PURE__ */ React38.createElement(
          "button",
          {
            onClick: () => register({
              ...mutationVariables,
              providerName: provider.name
            }),
            style: {
              display: "flex",
              alignItems: "center"
            }
          },
          provider == null ? void 0 : provider.icon,
          provider.label ?? /* @__PURE__ */ React38.createElement("label", null, provider.label)
        )
      ));
    }
    return null;
  }, "renderProviders");
  const content = /* @__PURE__ */ React38.createElement("div", { ...contentProps }, /* @__PURE__ */ React38.createElement("h1", { style: { textAlign: "center" } }, translate("pages.register.title", "Sign up for your account")), renderProviders(), !hideForm && /* @__PURE__ */ React38.createElement(React38.Fragment, null, /* @__PURE__ */ React38.createElement("hr", null), /* @__PURE__ */ React38.createElement(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        register({ ...mutationVariables, email, password });
      },
      ...formProps
    },
    /* @__PURE__ */ React38.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          padding: 25
        }
      },
      /* @__PURE__ */ React38.createElement("label", { htmlFor: "email-input" }, translate("pages.register.fields.email", "Email")),
      /* @__PURE__ */ React38.createElement(
        "input",
        {
          id: "email-input",
          name: "email",
          type: "email",
          size: 20,
          autoCorrect: "off",
          spellCheck: false,
          autoCapitalize: "off",
          required: true,
          value: email,
          onChange: (e) => setEmail(e.target.value)
        }
      ),
      /* @__PURE__ */ React38.createElement("label", { htmlFor: "password-input" }, translate("pages.register.fields.password", "Password")),
      /* @__PURE__ */ React38.createElement(
        "input",
        {
          id: "password-input",
          name: "password",
          type: "password",
          required: true,
          size: 20,
          value: password,
          onChange: (e) => setPassword(e.target.value)
        }
      ),
      /* @__PURE__ */ React38.createElement(
        "input",
        {
          type: "submit",
          value: translate("pages.register.buttons.submit", "Sign up"),
          disabled: isLoading
        }
      ),
      loginLink ?? /* @__PURE__ */ React38.createElement(React38.Fragment, null, /* @__PURE__ */ React38.createElement("span", null, translate(
        "pages.login.buttons.haveAccount",
        "Have an account?"
      ), " ", renderLink(
        "/login",
        translate("pages.login.signin", "Sign in")
      )))
    )
  )), loginLink !== false && hideForm && /* @__PURE__ */ React38.createElement("div", { style: { textAlign: "center" } }, translate("pages.login.buttons.haveAccount", "Have an account?"), " ", renderLink("/login", translate("pages.login.signin", "Sign in"))));
  return /* @__PURE__ */ React38.createElement("div", { ...wrapperProps }, renderContent ? renderContent(content, title) : content);
}, "RegisterPage");

// src/components/pages/auth/components/forgotPassword/index.tsx
import React39, { useState as useState13 } from "react";
var ForgotPasswordPage = /* @__PURE__ */ __name(({
  loginLink,
  wrapperProps,
  contentProps,
  renderContent,
  formProps,
  title = void 0,
  mutationVariables
}) => {
  const translate = useTranslate();
  const routerType = useRouterType();
  const Link2 = useLink();
  const { Link: LegacyLink } = useRouterContext();
  const ActiveLink = routerType === "legacy" ? LegacyLink : Link2;
  const [email, setEmail] = useState13("");
  const { mutate: forgotPassword, isLoading } = useForgotPassword();
  const renderLink = /* @__PURE__ */ __name((link, text2) => {
    return /* @__PURE__ */ React39.createElement(ActiveLink, { to: link }, text2);
  }, "renderLink");
  const content = /* @__PURE__ */ React39.createElement("div", { ...contentProps }, /* @__PURE__ */ React39.createElement("h1", { style: { textAlign: "center" } }, translate("pages.forgotPassword.title", "Forgot your password?")), /* @__PURE__ */ React39.createElement("hr", null), /* @__PURE__ */ React39.createElement(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        forgotPassword({ ...mutationVariables, email });
      },
      ...formProps
    },
    /* @__PURE__ */ React39.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          padding: 25
        }
      },
      /* @__PURE__ */ React39.createElement("label", { htmlFor: "email-input" }, translate("pages.forgotPassword.fields.email", "Email")),
      /* @__PURE__ */ React39.createElement(
        "input",
        {
          id: "email-input",
          name: "email",
          type: "mail",
          autoCorrect: "off",
          spellCheck: false,
          autoCapitalize: "off",
          required: true,
          value: email,
          onChange: (e) => setEmail(e.target.value)
        }
      ),
      /* @__PURE__ */ React39.createElement(
        "input",
        {
          type: "submit",
          disabled: isLoading,
          value: translate(
            "pages.forgotPassword.buttons.submit",
            "Send reset instructions"
          )
        }
      ),
      /* @__PURE__ */ React39.createElement("br", null),
      loginLink ?? /* @__PURE__ */ React39.createElement("span", null, translate(
        "pages.register.buttons.haveAccount",
        "Have an account? "
      ), " ", renderLink("/login", translate("pages.login.signin", "Sign in")))
    )
  ));
  return /* @__PURE__ */ React39.createElement("div", { ...wrapperProps }, renderContent ? renderContent(content, title) : content);
}, "ForgotPasswordPage");

// src/components/pages/auth/components/updatePassword/index.tsx
import React40, { useState as useState14 } from "react";
var UpdatePasswordPage = /* @__PURE__ */ __name(({
  wrapperProps,
  contentProps,
  renderContent,
  formProps,
  title = void 0,
  mutationVariables
}) => {
  const translate = useTranslate();
  const authProvider = useActiveAuthProvider();
  const { mutate: updatePassword, isLoading } = useUpdatePassword({
    v3LegacyAuthProviderCompatible: Boolean(authProvider == null ? void 0 : authProvider.isLegacy)
  });
  const [newPassword, setNewPassword] = useState14("");
  const [confirmPassword, setConfirmPassword] = useState14("");
  const content = /* @__PURE__ */ React40.createElement("div", { ...contentProps }, /* @__PURE__ */ React40.createElement("h1", { style: { textAlign: "center" } }, translate("pages.updatePassword.title", "Update Password")), /* @__PURE__ */ React40.createElement("hr", null), /* @__PURE__ */ React40.createElement(
    "form",
    {
      onSubmit: (e) => {
        e.preventDefault();
        updatePassword({
          ...mutationVariables,
          password: newPassword,
          confirmPassword
        });
      },
      ...formProps
    },
    /* @__PURE__ */ React40.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          padding: 25
        }
      },
      /* @__PURE__ */ React40.createElement("label", { htmlFor: "password-input" }, translate("pages.updatePassword.fields.password", "New Password")),
      /* @__PURE__ */ React40.createElement(
        "input",
        {
          id: "password-input",
          name: "password",
          type: "password",
          required: true,
          size: 20,
          value: newPassword,
          onChange: (e) => setNewPassword(e.target.value)
        }
      ),
      /* @__PURE__ */ React40.createElement("label", { htmlFor: "confirm-password-input" }, translate(
        "pages.updatePassword.fields.confirmPassword",
        "Confirm New Password"
      )),
      /* @__PURE__ */ React40.createElement(
        "input",
        {
          id: "confirm-password-input",
          name: "confirmPassword",
          type: "password",
          required: true,
          size: 20,
          value: confirmPassword,
          onChange: (e) => setConfirmPassword(e.target.value)
        }
      ),
      /* @__PURE__ */ React40.createElement(
        "input",
        {
          type: "submit",
          disabled: isLoading,
          value: translate("pages.updatePassword.buttons.submit", "Update")
        }
      )
    )
  ));
  return /* @__PURE__ */ React40.createElement("div", { ...wrapperProps }, renderContent ? renderContent(content, title) : content);
}, "UpdatePasswordPage");

// src/components/pages/auth/index.tsx
var AuthPage = /* @__PURE__ */ __name((props) => {
  const { type } = props;
  const renderView = /* @__PURE__ */ __name(() => {
    switch (type) {
      case "register":
        return /* @__PURE__ */ React41.createElement(RegisterPage, { ...props });
      case "forgotPassword":
        return /* @__PURE__ */ React41.createElement(ForgotPasswordPage, { ...props });
      case "updatePassword":
        return /* @__PURE__ */ React41.createElement(UpdatePasswordPage, { ...props });
      default:
        return /* @__PURE__ */ React41.createElement(LoginPage2, { ...props });
    }
  }, "renderView");
  return /* @__PURE__ */ React41.createElement(React41.Fragment, null, renderView());
}, "AuthPage");

// src/components/pages/ready/index.tsx
import React42 from "react";
var ReadyPage = /* @__PURE__ */ __name(() => {
  return /* @__PURE__ */ React42.createElement(React42.Fragment, null, /* @__PURE__ */ React42.createElement("h1", null, "Welcome on board"), /* @__PURE__ */ React42.createElement("p", null, "Your configuration is completed."), /* @__PURE__ */ React42.createElement("p", null, "Now you can get started by adding your resources to the", " ", /* @__PURE__ */ React42.createElement("code", null, "`resources`"), " property of ", /* @__PURE__ */ React42.createElement("code", null, "`<Refine>`")), /* @__PURE__ */ React42.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React42.createElement("a", { href: "https://refine.dev", target: "_blank", rel: "noreferrer" }, /* @__PURE__ */ React42.createElement("button", null, "Documentation")), /* @__PURE__ */ React42.createElement("a", { href: "https://refine.dev/examples", target: "_blank", rel: "noreferrer" }, /* @__PURE__ */ React42.createElement("button", null, "Examples")), /* @__PURE__ */ React42.createElement("a", { href: "https://discord.gg/refine", target: "_blank", rel: "noreferrer" }, /* @__PURE__ */ React42.createElement("button", null, "Community"))));
}, "ReadyPage");

// src/components/pages/welcome/index.tsx
import React45 from "react";

// src/components/pages/config-success/index.tsx
import React43, { useState as useState15 } from "react";
var cards = [
  {
    title: "Documentation",
    description: "Learn about the technical details of using Refine in your projects.",
    link: "https://refine.dev/docs",
    iconUrl: "https://refine.ams3.cdn.digitaloceanspaces.com/welcome-page/book.svg"
  },
  {
    title: "Tutorial",
    description: "Learn how to use Refine by building a fully-functioning CRUD app, from scratch to full launch.",
    link: "https://refine.dev/tutorial",
    iconUrl: "https://refine.ams3.cdn.digitaloceanspaces.com/welcome-page/hat.svg"
  },
  {
    title: "Templates",
    description: "Explore a range of pre-built templates, perfect everything from admin panels to dashboards and CRMs.",
    link: "https://refine.dev/templates",
    iconUrl: "https://refine.ams3.cdn.digitaloceanspaces.com/welcome-page/application.svg"
  },
  {
    title: "Community",
    description: "Join our Discord community and keep up with the latest news.",
    link: "https://discord.gg/refine",
    iconUrl: "https://refine.ams3.cdn.digitaloceanspaces.com/welcome-page/discord.svg"
  }
];
var ConfigSuccessPage = /* @__PURE__ */ __name(() => {
  const isTablet = useMediaQuery("(max-width: 1010px)");
  const isMobile = useMediaQuery("(max-width: 650px)");
  const getGridTemplateColumns = /* @__PURE__ */ __name(() => {
    if (isMobile) {
      return "1, 280px";
    }
    if (isTablet) {
      return "2, 280px";
    }
    return "4, 1fr";
  }, "getGridTemplateColumns");
  const getHeaderFontSize = /* @__PURE__ */ __name(() => {
    if (isMobile) {
      return "32px";
    }
    if (isTablet) {
      return "40px";
    }
    return "48px";
  }, "getHeaderFontSize");
  const getSubHeaderFontSize = /* @__PURE__ */ __name(() => {
    if (isMobile) {
      return "16px";
    }
    if (isTablet) {
      return "20px";
    }
    return "24px";
  }, "getSubHeaderFontSize");
  return /* @__PURE__ */ React43.createElement(
    "div",
    {
      style: {
        position: "fixed",
        zIndex: 10,
        inset: 0,
        overflow: "auto",
        width: "100dvw",
        height: "100dvh"
      }
    },
    /* @__PURE__ */ React43.createElement(
      "div",
      {
        style: {
          overflow: "hidden",
          position: "relative",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          background: isMobile ? "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp), radial-gradient(88.89% 50% at 50% 100%, rgba(38, 217, 127, 0.10) 0%, rgba(38, 217, 127, 0.00) 100%), radial-gradient(88.89% 50% at 50% 0%, rgba(71, 235, 235, 0.15) 0%, rgba(71, 235, 235, 0.00) 100%), #1D1E30" : isTablet ? "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp), radial-gradient(66.67% 50% at 50% 100%, rgba(38, 217, 127, 0.10) 0%, rgba(38, 217, 127, 0.00) 100%), radial-gradient(66.67% 50% at 50% 0%, rgba(71, 235, 235, 0.15) 0%, rgba(71, 235, 235, 0.00) 100%), #1D1E30" : "url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/landing-noise.webp), radial-gradient(35.56% 50% at 50% 100%, rgba(38, 217, 127, 0.12) 0%, rgba(38, 217, 127, 0) 100%), radial-gradient(35.56% 50% at 50% 0%, rgba(71, 235, 235, 0.18) 0%, rgba(71, 235, 235, 0) 100%), #1D1E30",
          minHeight: "100%",
          minWidth: "100%",
          fontFamily: "Arial",
          color: "#FFFFFF"
        }
      },
      /* @__PURE__ */ React43.createElement(
        "div",
        {
          style: {
            zIndex: 2,
            position: "absolute",
            width: isMobile ? "400px" : "800px",
            height: "552px",
            opacity: "0.5",
            background: "url(https://refine.ams3.cdn.digitaloceanspaces.com/assets/welcome-page-hexagon.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)"
          }
        }
      ),
      /* @__PURE__ */ React43.createElement("div", { style: { height: isMobile ? "40px" : "80px" } }),
      /* @__PURE__ */ React43.createElement("div", { style: { display: "flex", justifyContent: "center" } }, /* @__PURE__ */ React43.createElement(
        "div",
        {
          style: {
            backgroundRepeat: "no-repeat",
            backgroundSize: isMobile ? "112px 58px" : "224px 116px",
            backgroundImage: "url(https://refine.ams3.cdn.digitaloceanspaces.com/assets/refine-logo.svg)",
            width: isMobile ? 112 : 224,
            height: isMobile ? 58 : 116
          }
        }
      )),
      /* @__PURE__ */ React43.createElement(
        "div",
        {
          style: {
            height: isMobile ? "120px" : isTablet ? "200px" : "30vh",
            minHeight: isMobile ? "120px" : isTablet ? "200px" : "200px"
          }
        }
      ),
      /* @__PURE__ */ React43.createElement(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            textAlign: "center"
          }
        },
        /* @__PURE__ */ React43.createElement(
          "h1",
          {
            style: {
              fontSize: getHeaderFontSize(),
              fontWeight: 700,
              margin: "0px"
            }
          },
          "Welcome Aboard!"
        ),
        /* @__PURE__ */ React43.createElement(
          "h4",
          {
            style: {
              fontSize: getSubHeaderFontSize(),
              fontWeight: 400,
              margin: "0px"
            }
          },
          "Your configuration is completed."
        )
      ),
      /* @__PURE__ */ React43.createElement("div", { style: { height: "64px" } }),
      /* @__PURE__ */ React43.createElement(
        "div",
        {
          style: {
            display: "grid",
            gridTemplateColumns: `repeat(${getGridTemplateColumns()})`,
            justifyContent: "center",
            gap: "48px",
            paddingRight: "16px",
            paddingLeft: "16px",
            paddingBottom: "32px",
            maxWidth: "976px",
            margin: "auto"
          }
        },
        cards.map((card) => /* @__PURE__ */ React43.createElement(Card, { key: `welcome-page-${card.title}`, card }))
      )
    )
  );
}, "ConfigSuccessPage");
var Card = /* @__PURE__ */ __name(({ card }) => {
  const { title, description, iconUrl, link } = card;
  const [isHover, setIsHover] = useState15(false);
  return /* @__PURE__ */ React43.createElement(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "16px"
      }
    },
    /* @__PURE__ */ React43.createElement(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center"
        }
      },
      /* @__PURE__ */ React43.createElement(
        "a",
        {
          onPointerEnter: () => setIsHover(true),
          onPointerLeave: () => setIsHover(false),
          style: {
            display: "flex",
            alignItems: "center",
            color: "#fff",
            textDecoration: "none"
          },
          href: link
        },
        /* @__PURE__ */ React43.createElement(
          "div",
          {
            style: {
              width: "16px",
              height: "16px",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${iconUrl})`
            }
          }
        ),
        /* @__PURE__ */ React43.createElement(
          "span",
          {
            style: {
              fontSize: "16px",
              fontWeight: 700,
              marginLeft: "13px",
              marginRight: "14px"
            }
          },
          title
        ),
        /* @__PURE__ */ React43.createElement(
          "svg",
          {
            style: {
              transition: "transform 0.5s ease-in-out, opacity 0.2s ease-in-out",
              ...isHover && {
                transform: "translateX(4px)",
                opacity: 1
              }
            },
            width: "12",
            height: "8",
            fill: "none",
            opacity: "0.5",
            xmlns: "http://www.w3.org/2000/svg"
          },
          /* @__PURE__ */ React43.createElement(
            "path",
            {
              d: "M7.293.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L8.586 5H1a1 1 0 0 1 0-2h7.586L7.293 1.707a1 1 0 0 1 0-1.414Z",
              fill: "#fff"
            }
          )
        )
      )
    ),
    /* @__PURE__ */ React43.createElement(
      "span",
      {
        style: {
          fontSize: "12px",
          opacity: 0.5,
          lineHeight: "16px"
        }
      },
      description
    )
  );
}, "Card");

// src/components/pages/config-error/index.tsx
import React44 from "react";
var ConfigErrorPage = /* @__PURE__ */ __name(() => {
  return /* @__PURE__ */ React44.createElement(
    "div",
    {
      style: {
        position: "fixed",
        zIndex: 11,
        inset: 0,
        overflow: "auto",
        width: "100dvw",
        height: "100dvh"
      }
    },
    /* @__PURE__ */ React44.createElement(
      "div",
      {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "24px",
          background: "#14141FBF",
          backdropFilter: "blur(3px)"
        }
      },
      /* @__PURE__ */ React44.createElement(
        "div",
        {
          style: {
            maxWidth: "640px",
            width: "100%",
            background: "#1D1E30",
            borderRadius: "16px",
            border: "1px solid #303450",
            boxShadow: "0px 0px 120px -24px #000000"
          }
        },
        /* @__PURE__ */ React44.createElement(
          "div",
          {
            style: {
              padding: "16px 20px",
              borderBottom: "1px solid #303450",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              position: "relative"
            }
          },
          /* @__PURE__ */ React44.createElement(
            ErrorGradient,
            {
              style: {
                position: "absolute",
                left: 0,
                top: 0
              }
            }
          ),
          /* @__PURE__ */ React44.createElement(
            "div",
            {
              style: {
                lineHeight: "24px",
                fontSize: "16px",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                gap: "16px"
              }
            },
            /* @__PURE__ */ React44.createElement(ErrorIcon, null),
            /* @__PURE__ */ React44.createElement(
              "span",
              {
                style: {
                  fontWeight: 400
                }
              },
              "Configuration Error"
            )
          )
        ),
        /* @__PURE__ */ React44.createElement(
          "div",
          {
            style: {
              padding: "20px",
              color: "#A3ADC2",
              lineHeight: "20px",
              fontSize: "14px",
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }
          },
          /* @__PURE__ */ React44.createElement(
            "p",
            {
              style: {
                margin: 0,
                padding: 0,
                lineHeight: "28px",
                fontSize: "16px"
              }
            },
            /* @__PURE__ */ React44.createElement(
              "code",
              {
                style: {
                  display: "inline-block",
                  background: "#30345080",
                  padding: "0 4px",
                  lineHeight: "24px",
                  fontSize: "16px",
                  borderRadius: "4px",
                  color: "#FFFFFF"
                }
              },
              "<Refine />"
            ),
            " ",
            "is not initialized. Please make sure you have it mounted in your app and placed your components inside it."
          ),
          /* @__PURE__ */ React44.createElement("div", null, /* @__PURE__ */ React44.createElement(ExampleImplementation, null))
        )
      )
    )
  );
}, "ConfigErrorPage");
var ExampleImplementation = /* @__PURE__ */ __name(() => {
  return /* @__PURE__ */ React44.createElement(
    "pre",
    {
      style: {
        display: "block",
        overflowX: "auto",
        borderRadius: "8px",
        fontSize: "14px",
        lineHeight: "24px",
        backgroundColor: "#14141F",
        color: "#E5ECF2",
        padding: "16px",
        margin: "0",
        maxHeight: "400px",
        overflow: "auto"
      }
    },
    /* @__PURE__ */ React44.createElement("span", { style: { color: "#FF7B72" } }, "import"),
    " ",
    "{",
    " Refine, WelcomePage",
    " ",
    "}",
    " ",
    /* @__PURE__ */ React44.createElement("span", { style: { color: "#FF7B72" } }, "from"),
    " ",
    /* @__PURE__ */ React44.createElement("span", { style: { color: "#A5D6FF" } }, '"@refinedev/core"'),
    ";",
    "\n",
    "\n",
    /* @__PURE__ */ React44.createElement("span", { style: { color: "#FF7B72" } }, "export"),
    " ",
    /* @__PURE__ */ React44.createElement("span", { style: { color: "#FF7B72" } }, "default"),
    " ",
    /* @__PURE__ */ React44.createElement("span", null, /* @__PURE__ */ React44.createElement("span", { style: { color: "#FF7B72" } }, "function"), " ", /* @__PURE__ */ React44.createElement("span", { style: { color: "#FFA657" } }, "App"), "(", /* @__PURE__ */ React44.createElement("span", { style: { color: "rgb(222, 147, 95)" } }), ")", " "),
    "{",
    "\n",
    "  ",
    /* @__PURE__ */ React44.createElement("span", { style: { color: "#FF7B72" } }, "return"),
    " (",
    "\n",
    "    ",
    /* @__PURE__ */ React44.createElement("span", null, /* @__PURE__ */ React44.createElement("span", { style: { color: "#79C0FF" } }, "<", /* @__PURE__ */ React44.createElement("span", { style: { color: "#79C0FF" } }, "Refine"), "\n", "      ", /* @__PURE__ */ React44.createElement("span", { style: { color: "#E5ECF2", opacity: 0.6 } }, "// ", /* @__PURE__ */ React44.createElement("span", null, "...")), "\n", "    ", ">"), "\n", "      ", /* @__PURE__ */ React44.createElement("span", { style: { opacity: 0.6 } }, "{", "/* ... */", "}"), "\n", "      ", /* @__PURE__ */ React44.createElement("span", { style: { color: "#79C0FF" } }, "<", /* @__PURE__ */ React44.createElement("span", { style: { color: "#79C0FF" } }, "WelcomePage"), " />"), "\n", "      ", /* @__PURE__ */ React44.createElement("span", { style: { opacity: 0.6 } }, "{", "/* ... */", "}"), "\n", "    ", /* @__PURE__ */ React44.createElement("span", { style: { color: "#79C0FF" } }, "</", /* @__PURE__ */ React44.createElement("span", { style: { color: "#79C0FF" } }, "Refine"), ">")),
    "\n",
    "  ",
    ");",
    "\n",
    "}"
  );
}, "ExampleImplementation");
var ErrorGradient = /* @__PURE__ */ __name((props) => /* @__PURE__ */ React44.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 204,
    height: 56,
    viewBox: "0 0 204 56",
    fill: "none",
    ...props
  },
  /* @__PURE__ */ React44.createElement("path", { fill: "url(#welcome-page-error-gradient-a)", d: "M12 0H0v12L12 0Z" }),
  /* @__PURE__ */ React44.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-b)",
      d: "M28 0h-8L0 20v8L28 0Z"
    }
  ),
  /* @__PURE__ */ React44.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-c)",
      d: "M36 0h8L0 44v-8L36 0Z"
    }
  ),
  /* @__PURE__ */ React44.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-d)",
      d: "M60 0h-8L0 52v4h4L60 0Z"
    }
  ),
  /* @__PURE__ */ React44.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-e)",
      d: "M68 0h8L20 56h-8L68 0Z"
    }
  ),
  /* @__PURE__ */ React44.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-f)",
      d: "M92 0h-8L28 56h8L92 0Z"
    }
  ),
  /* @__PURE__ */ React44.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-g)",
      d: "M100 0h8L52 56h-8l56-56Z"
    }
  ),
  /* @__PURE__ */ React44.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-h)",
      d: "M124 0h-8L60 56h8l56-56Z"
    }
  ),
  /* @__PURE__ */ React44.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-i)",
      d: "M140 0h-8L76 56h8l56-56Z"
    }
  ),
  /* @__PURE__ */ React44.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-j)",
      d: "M132 0h8L84 56h-8l56-56Z"
    }
  ),
  /* @__PURE__ */ React44.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-k)",
      d: "M156 0h-8L92 56h8l56-56Z"
    }
  ),
  /* @__PURE__ */ React44.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-l)",
      d: "M164 0h8l-56 56h-8l56-56Z"
    }
  ),
  /* @__PURE__ */ React44.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-m)",
      d: "M188 0h-8l-56 56h8l56-56Z"
    }
  ),
  /* @__PURE__ */ React44.createElement(
    "path",
    {
      fill: "url(#welcome-page-error-gradient-n)",
      d: "M204 0h-8l-56 56h8l56-56Z"
    }
  ),
  /* @__PURE__ */ React44.createElement("defs", null, /* @__PURE__ */ React44.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-a",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ React44.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ React44.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ React44.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-b",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ React44.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ React44.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ React44.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-c",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ React44.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ React44.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ React44.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-d",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ React44.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ React44.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ React44.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-e",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ React44.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ React44.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ React44.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-f",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ React44.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ React44.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ React44.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-g",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ React44.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ React44.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ React44.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-h",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ React44.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ React44.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ React44.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-i",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ React44.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ React44.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ React44.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-j",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ React44.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ React44.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ React44.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-k",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ React44.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ React44.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ React44.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-l",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ React44.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ React44.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ React44.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-m",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ React44.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ React44.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ), /* @__PURE__ */ React44.createElement(
    "radialGradient",
    {
      id: "welcome-page-error-gradient-n",
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "scale(124)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ React44.createElement("stop", { stopColor: "#FF4C4D", stopOpacity: 0.1 }),
    /* @__PURE__ */ React44.createElement("stop", { offset: 1, stopColor: "#FF4C4D", stopOpacity: 0 })
  ))
), "ErrorGradient");
var ErrorIcon = /* @__PURE__ */ __name((props) => /* @__PURE__ */ React44.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    ...props
  },
  /* @__PURE__ */ React44.createElement(
    "path",
    {
      fill: "#FF4C4D",
      fillRule: "evenodd",
      d: "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z",
      clipRule: "evenodd"
    }
  ),
  /* @__PURE__ */ React44.createElement(
    "path",
    {
      fill: "#fff",
      fillRule: "evenodd",
      d: "M7 8a1 1 0 1 0 2 0V5a1 1 0 1 0-2 0v3Zm0 3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z",
      clipRule: "evenodd"
    }
  )
), "ErrorIcon");

// src/components/pages/welcome/index.tsx
var WelcomePage = /* @__PURE__ */ __name(() => {
  const { __initialized } = useRefineContext();
  return /* @__PURE__ */ React45.createElement(React45.Fragment, null, /* @__PURE__ */ React45.createElement(ConfigSuccessPage, null), !__initialized && /* @__PURE__ */ React45.createElement(ConfigErrorPage, null));
}, "WelcomePage");

// src/components/containers/refine/index.tsx
import React48 from "react";
import { useQuerySubscription } from "@refinedev/devtools-internal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// src/components/telemetry/index.tsx
import React46 from "react";

// src/hooks/useTelemetryData/index.ts
import { useContext as useContext28 } from "react";
var REFINE_VERSION = "4.57.9";
var useTelemetryData = /* @__PURE__ */ __name(() => {
  var _a;
  const auth = useIsExistAuthentication();
  const auditLogContext = useContext28(AuditLogContext);
  const { liveProvider } = useContext28(LiveContext);
  const routerContext = useContext28(LegacyRouterContext);
  const dataContext = useContext28(DataContext);
  const { i18nProvider } = useContext28(I18nContext);
  const notificationContext = useContext28(NotificationContext);
  const accessControlContext = useContext28(AccessControlContext);
  const { resources } = useResource();
  const refineOptions = useRefineContext();
  const auditLog = !!auditLogContext.create || !!auditLogContext.get || !!auditLogContext.update;
  const live = !!(liveProvider == null ? void 0 : liveProvider.publish) || !!(liveProvider == null ? void 0 : liveProvider.subscribe) || !!(liveProvider == null ? void 0 : liveProvider.unsubscribe);
  const router = !!routerContext.useHistory || !!routerContext.Link || !!routerContext.Prompt || !!routerContext.useLocation || !!routerContext.useParams;
  const data = !!dataContext;
  const i18n = !!(i18nProvider == null ? void 0 : i18nProvider.changeLocale) || !!(i18nProvider == null ? void 0 : i18nProvider.getLocale) || !!(i18nProvider == null ? void 0 : i18nProvider.translate);
  const notification = !!notificationContext.close || !!notificationContext.open;
  const accessControl = !!accessControlContext.can;
  const projectId = (_a = refineOptions == null ? void 0 : refineOptions.options) == null ? void 0 : _a.projectId;
  return {
    providers: {
      auth,
      auditLog,
      live,
      router,
      data,
      i18n,
      notification,
      accessControl
    },
    version: REFINE_VERSION,
    resourceCount: resources.length,
    projectId
  };
}, "useTelemetryData");

// src/components/telemetry/index.tsx
var encode = /* @__PURE__ */ __name((payload) => {
  try {
    const stringifiedPayload = JSON.stringify(payload || {});
    if (typeof btoa !== "undefined") {
      return btoa(stringifiedPayload);
    }
    return Buffer.from(stringifiedPayload).toString("base64");
  } catch (err) {
    return void 0;
  }
}, "encode");
var throughImage = /* @__PURE__ */ __name((src) => {
  const img = new Image();
  img.src = src;
}, "throughImage");
var throughFetch = /* @__PURE__ */ __name((src) => {
  fetch(src);
}, "throughFetch");
var transport = /* @__PURE__ */ __name((src) => {
  if (typeof Image !== "undefined") {
    throughImage(src);
  } else if (typeof fetch !== "undefined") {
    throughFetch(src);
  }
}, "transport");
var Telemetry = /* @__PURE__ */ __name(() => {
  const payload = useTelemetryData();
  const sent = React46.useRef(false);
  React46.useEffect(() => {
    if (sent.current) {
      return;
    }
    const encoded = encode(payload);
    if (!encoded) {
      return;
    }
    transport(`https://telemetry.refine.dev/telemetry?payload=${encoded}`);
    sent.current = true;
  }, []);
  return null;
}, "Telemetry");

// src/definitions/helpers/check-router-prop-misuse/index.ts
var checkRouterPropMisuse = /* @__PURE__ */ __name((value) => {
  const bindings = ["go", "parse", "back", "Link"];
  const otherProps = Object.keys(value).filter(
    (key) => !bindings.includes(key)
  );
  const hasOtherProps = otherProps.length > 0;
  if (hasOtherProps) {
    console.warn(
      `Unsupported properties are found in \`routerProvider\` prop. You provided \`${otherProps.join(
        ", "
      )}\`. Supported properties are \`${bindings.join(
        ", "
      )}\`. You may wanted to use \`legacyRouterProvider\` prop instead.`
    );
    return true;
  }
  return false;
}, "checkRouterPropMisuse");

// src/hooks/router/use-router-misuse-warning/index.ts
import React47 from "react";
var useRouterMisuseWarning = /* @__PURE__ */ __name((value) => {
  const warned = React47.useRef(false);
  React47.useEffect(() => {
    if (warned.current === false) {
      if (value) {
        const warn = checkRouterPropMisuse(value);
        if (warn) {
          warned.current = true;
        }
      }
    }
  }, [value]);
}, "useRouterMisuseWarning");

// src/components/containers/refine/index.tsx
var Refine = /* @__PURE__ */ __name(({
  legacyAuthProvider,
  authProvider,
  dataProvider,
  legacyRouterProvider,
  routerProvider,
  notificationProvider,
  accessControlProvider,
  auditLogProvider,
  resources,
  DashboardPage,
  ReadyPage: ReadyPage2,
  LoginPage: LoginPage3,
  catchAll,
  children,
  liveProvider,
  i18nProvider,
  Title,
  Layout,
  Sider,
  Header,
  Footer,
  OffLayoutArea,
  onLiveEvent,
  options
}) => {
  const {
    optionsWithDefaults,
    disableTelemetryWithDefault,
    reactQueryWithDefaults
  } = handleRefineOptions({
    options
  });
  const queryClient = useDeepMemo(() => {
    var _a;
    if (reactQueryWithDefaults.clientConfig instanceof QueryClient) {
      return reactQueryWithDefaults.clientConfig;
    }
    return new QueryClient({
      ...reactQueryWithDefaults.clientConfig,
      defaultOptions: {
        ...reactQueryWithDefaults.clientConfig.defaultOptions,
        queries: {
          refetchOnWindowFocus: false,
          keepPreviousData: true,
          ...(_a = reactQueryWithDefaults.clientConfig.defaultOptions) == null ? void 0 : _a.queries
        }
      }
    });
  }, [reactQueryWithDefaults.clientConfig]);
  useQuerySubscription(queryClient);
  const useNotificationProviderValues = React48.useMemo(() => {
    return typeof notificationProvider === "function" ? notificationProvider : () => notificationProvider;
  }, [notificationProvider]);
  const notificationProviderContextValues = useNotificationProviderValues();
  useRouterMisuseWarning(routerProvider);
  if (legacyRouterProvider && !routerProvider && (resources ?? []).length === 0) {
    return ReadyPage2 ? /* @__PURE__ */ React48.createElement(ReadyPage2, null) : /* @__PURE__ */ React48.createElement(ReadyPage, null);
  }
  const { RouterComponent = React48.Fragment } = !routerProvider ? legacyRouterProvider ?? {} : {};
  return /* @__PURE__ */ React48.createElement(QueryClientProvider, { client: queryClient }, /* @__PURE__ */ React48.createElement(NotificationContextProvider, { ...notificationProviderContextValues }, /* @__PURE__ */ React48.createElement(
    LegacyAuthContextProvider,
    {
      ...legacyAuthProvider ?? {},
      isProvided: Boolean(legacyAuthProvider)
    },
    /* @__PURE__ */ React48.createElement(
      AuthBindingsContextProvider,
      {
        ...authProvider ?? {},
        isProvided: Boolean(authProvider)
      },
      /* @__PURE__ */ React48.createElement(DataContextProvider, { dataProvider }, /* @__PURE__ */ React48.createElement(LiveContextProvider, { liveProvider }, /* @__PURE__ */ React48.createElement(
        RouterPickerProvider,
        {
          value: legacyRouterProvider && !routerProvider ? "legacy" : "new"
        },
        /* @__PURE__ */ React48.createElement(RouterContextProvider, { router: routerProvider }, /* @__PURE__ */ React48.createElement(LegacyRouterContextProvider, { ...legacyRouterProvider }, /* @__PURE__ */ React48.createElement(ResourceContextProvider, { resources: resources ?? [] }, /* @__PURE__ */ React48.createElement(I18nContextProvider, { i18nProvider }, /* @__PURE__ */ React48.createElement(
          AccessControlContextProvider,
          {
            ...accessControlProvider ?? {}
          },
          /* @__PURE__ */ React48.createElement(
            AuditLogContextProvider,
            {
              ...auditLogProvider ?? {}
            },
            /* @__PURE__ */ React48.createElement(UndoableQueueContextProvider, null, /* @__PURE__ */ React48.createElement(
              RefineContextProvider,
              {
                mutationMode: optionsWithDefaults.mutationMode,
                warnWhenUnsavedChanges: optionsWithDefaults.warnWhenUnsavedChanges,
                syncWithLocation: optionsWithDefaults.syncWithLocation,
                Title,
                undoableTimeout: optionsWithDefaults.undoableTimeout,
                catchAll,
                DashboardPage,
                LoginPage: LoginPage3,
                Layout,
                Sider,
                Footer,
                Header,
                OffLayoutArea,
                hasDashboard: !!DashboardPage,
                liveMode: optionsWithDefaults.liveMode,
                onLiveEvent,
                options: optionsWithDefaults
              },
              /* @__PURE__ */ React48.createElement(UnsavedWarnContextProvider, null, /* @__PURE__ */ React48.createElement(RouterComponent, null, children, !disableTelemetryWithDefault && /* @__PURE__ */ React48.createElement(Telemetry, null), /* @__PURE__ */ React48.createElement(RouteChangeHandler, null)))
            ))
          )
        )))))
      )))
    )
  )));
}, "Refine");

// src/components/undoableQueue/index.tsx
import { useEffect as useEffect9, useState as useState16 } from "react";
var UndoableQueue = /* @__PURE__ */ __name(({ notification }) => {
  const translate = useTranslate();
  const { notificationDispatch } = useCancelNotification();
  const { open } = useNotification();
  const [timeoutId, setTimeoutId] = useState16();
  const cancelNotification = /* @__PURE__ */ __name(() => {
    if (notification.isRunning === true) {
      if (notification.seconds === 0) {
        notification.doMutation();
      }
      if (!notification.isSilent) {
        open == null ? void 0 : open({
          key: `${notification.id}-${notification.resource}-notification`,
          type: "progress",
          message: translate(
            "notifications.undoable",
            {
              seconds: userFriendlySecond(notification.seconds)
            },
            `You have ${userFriendlySecond(
              notification.seconds
            )} seconds to undo`
          ),
          cancelMutation: notification.cancelMutation,
          undoableTimeout: userFriendlySecond(notification.seconds)
        });
      }
      if (notification.seconds > 0) {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        const newTimeoutId = setTimeout(() => {
          notificationDispatch({
            type: "DECREASE_NOTIFICATION_SECOND" /* DECREASE_NOTIFICATION_SECOND */,
            payload: {
              id: notification.id,
              seconds: notification.seconds,
              resource: notification.resource
            }
          });
        }, 1e3);
        setTimeoutId(newTimeoutId);
      }
    }
  }, "cancelNotification");
  useEffect9(() => {
    cancelNotification();
  }, [notification]);
  return null;
}, "UndoableQueue");

// src/components/layoutWrapper/index.tsx
import React50, { useEffect as useEffect10 } from "react";
var LayoutWrapper = /* @__PURE__ */ __name(({
  children,
  Layout: LayoutFromProps,
  Sider: SiderFromProps,
  Header: HeaderFromProps,
  Title: TitleFromProps,
  Footer: FooterFromProps,
  OffLayoutArea: OffLayoutAreaFromProps
}) => {
  const { Layout, Footer, Header, Sider, Title, OffLayoutArea } = useRefineContext();
  const LayoutToRender = LayoutFromProps ?? Layout;
  return /* @__PURE__ */ React50.createElement(
    LayoutToRender,
    {
      Sider: SiderFromProps ?? Sider,
      Header: HeaderFromProps ?? Header,
      Footer: FooterFromProps ?? Footer,
      Title: TitleFromProps ?? Title,
      OffLayoutArea: OffLayoutAreaFromProps ?? OffLayoutArea
    },
    children,
    /* @__PURE__ */ React50.createElement(UnsavedPrompt, null)
  );
}, "LayoutWrapper");
var UnsavedPrompt = /* @__PURE__ */ __name(() => {
  const { Prompt } = useRouterContext();
  const translate = useTranslate();
  const { warnWhen, setWarnWhen } = useWarnAboutChange();
  const warnWhenListener = /* @__PURE__ */ __name((e) => {
    e.preventDefault();
    e.returnValue = translate(
      "warnWhenUnsavedChanges",
      "Are you sure you want to leave? You have unsaved changes."
    );
    return e.returnValue;
  }, "warnWhenListener");
  useEffect10(() => {
    if (warnWhen) {
      window.addEventListener("beforeunload", warnWhenListener);
    }
    return window.removeEventListener("beforeunload", warnWhenListener);
  }, [warnWhen]);
  return /* @__PURE__ */ React50.createElement(
    Prompt,
    {
      when: warnWhen,
      message: translate(
        "warnWhenUnsavedChanges",
        "Are you sure you want to leave? You have unsaved changes."
      ),
      setWarnWhen
    }
  );
}, "UnsavedPrompt");

// src/components/authenticated/index.tsx
import React51 from "react";
function Authenticated({
  redirectOnFail = true,
  appendCurrentPathToQuery = true,
  children,
  fallback: fallbackContent,
  loading: loadingContent,
  params
}) {
  var _a;
  const activeAuthProvider = useActiveAuthProvider();
  const routerType = useRouterType();
  const hasAuthProvider = Boolean(activeAuthProvider == null ? void 0 : activeAuthProvider.isProvided);
  const isLegacyAuth = Boolean(activeAuthProvider == null ? void 0 : activeAuthProvider.isLegacy);
  const isLegacyRouter = routerType === "legacy";
  const parsed = useParsed();
  const go = useGo();
  const { useLocation } = useRouterContext();
  const legacyLocation = useLocation();
  const {
    isFetching,
    isSuccess,
    data: {
      authenticated: isAuthenticatedStatus,
      redirectTo: authenticatedRedirect
    } = {}
  } = useIsAuthenticated({
    v3LegacyAuthProviderCompatible: isLegacyAuth,
    params
  });
  const isAuthenticated = hasAuthProvider ? isLegacyAuth ? isSuccess : isAuthenticatedStatus : true;
  if (!hasAuthProvider) {
    return /* @__PURE__ */ React51.createElement(React51.Fragment, null, children ?? null);
  }
  if (isFetching) {
    return /* @__PURE__ */ React51.createElement(React51.Fragment, null, loadingContent ?? null);
  }
  if (isAuthenticated) {
    return /* @__PURE__ */ React51.createElement(React51.Fragment, null, children ?? null);
  }
  if (typeof fallbackContent !== "undefined") {
    return /* @__PURE__ */ React51.createElement(React51.Fragment, null, fallbackContent ?? null);
  }
  const appliedRedirect = isLegacyAuth ? typeof redirectOnFail === "string" ? redirectOnFail : "/login" : typeof redirectOnFail === "string" ? redirectOnFail : authenticatedRedirect;
  const pathname = `${isLegacyRouter ? legacyLocation == null ? void 0 : legacyLocation.pathname : parsed.pathname}`.replace(/(\?.*|#.*)$/, "");
  if (appliedRedirect) {
    if (isLegacyRouter) {
      const toQuery = appendCurrentPathToQuery ? `?to=${encodeURIComponent(pathname)}` : "";
      return /* @__PURE__ */ React51.createElement(RedirectLegacy, { to: `${appliedRedirect}${toQuery}` });
    }
    const queryToValue = ((_a = parsed.params) == null ? void 0 : _a.to) ? parsed.params.to : go({
      to: pathname,
      options: { keepQuery: true },
      type: "path"
    });
    return /* @__PURE__ */ React51.createElement(
      Redirect,
      {
        config: {
          to: appliedRedirect,
          query: appendCurrentPathToQuery && (queryToValue ?? "").length > 1 ? {
            to: queryToValue
          } : void 0,
          type: "replace"
        }
      }
    );
  }
  return null;
}
__name(Authenticated, "Authenticated");
var Redirect = /* @__PURE__ */ __name(({ config }) => {
  const go = useGo();
  React51.useEffect(() => {
    go(config);
  }, [go, config]);
  return null;
}, "Redirect");
var RedirectLegacy = /* @__PURE__ */ __name(({ to }) => {
  const { replace } = useNavigation();
  React51.useEffect(() => {
    replace(to);
  }, [replace, to]);
  return null;
}, "RedirectLegacy");

// src/components/routeChangeHandler/index.tsx
import { useEffect as useEffect11 } from "react";
var RouteChangeHandler = /* @__PURE__ */ __name(() => {
  const { useLocation } = useRouterContext();
  const { checkAuth } = useLegacyAuthContext();
  const location = useLocation();
  useEffect11(() => {
    checkAuth == null ? void 0 : checkAuth().catch(() => false);
  }, [location == null ? void 0 : location.pathname]);
  return null;
}, "RouteChangeHandler");

// src/components/canAccess/index.tsx
import React52, { useEffect as useEffect12 } from "react";
var CanAccess = /* @__PURE__ */ __name(({
  resource: resourceFromProp,
  action: actionFromProp,
  params: paramsFromProp,
  fallback,
  onUnauthorized,
  children,
  queryOptions: componentQueryOptions,
  ...rest
}) => {
  const {
    id,
    resource,
    action: fallbackAction = ""
  } = useResourceParams({
    resource: resourceFromProp,
    id: paramsFromProp == null ? void 0 : paramsFromProp.id
  });
  const action = actionFromProp ?? fallbackAction;
  const params = paramsFromProp ?? {
    id,
    resource
  };
  const { data } = useCan({
    resource: resource == null ? void 0 : resource.name,
    action,
    params,
    queryOptions: componentQueryOptions
  });
  useEffect12(() => {
    if (onUnauthorized && (data == null ? void 0 : data.can) === false) {
      onUnauthorized({
        resource: resource == null ? void 0 : resource.name,
        action,
        reason: data == null ? void 0 : data.reason,
        params
      });
    }
  }, [data == null ? void 0 : data.can]);
  if (data == null ? void 0 : data.can) {
    if (React52.isValidElement(children)) {
      const Children = React52.cloneElement(children, rest);
      return Children;
    }
    return /* @__PURE__ */ React52.createElement(React52.Fragment, null, children);
  }
  if ((data == null ? void 0 : data.can) === false) {
    return /* @__PURE__ */ React52.createElement(React52.Fragment, null, fallback ?? null);
  }
  return null;
}, "CanAccess");

// src/components/gh-banner/index.tsx
import React53, { useEffect as useEffect13 } from "react";

// src/components/gh-banner/styles.ts
var CSSRules = [
  `
    .bg-top-announcement {
        border-bottom: 1px solid rgba(71, 235, 235, 0.15);
        background: radial-gradient(
                218.19% 111.8% at 0% 0%,
                rgba(71, 235, 235, 0.1) 0%,
                rgba(71, 235, 235, 0.2) 100%
            ),
            #14141f;
    }
    `,
  `
    .top-announcement-mask {
        mask-image: url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/hexagon.svg);
        -webkit-mask-image: url(https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/hexagon.svg);
        mask-repeat: repeat;
        -webkit-mask-repeat: repeat;
        background: rgba(71, 235, 235, 0.25);
    }
    `,
  `
    .banner {
        display: flex;
        @media (max-width: 1000px) {
            display: none;
        }
    }`,
  `
    .gh-link, .gh-link:hover, .gh-link:active, .gh-link:visited, .gh-link:focus {
        text-decoration: none;
        z-index: 9;
    }
    `,
  `
    @keyframes top-announcement-glow {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
    `
];

// src/components/gh-banner/index.tsx
var text = "If you find Refine useful, you can contribute to its growth by giving it a star on GitHub";
var GitHubBanner = /* @__PURE__ */ __name(({ containerStyle }) => {
  useEffect13(() => {
    const styleTag = document.createElement("style");
    document.head.appendChild(styleTag);
    CSSRules.forEach(
      (rule) => {
        var _a;
        return (_a = styleTag.sheet) == null ? void 0 : _a.insertRule(rule, styleTag.sheet.cssRules.length);
      }
    );
  }, []);
  return /* @__PURE__ */ React53.createElement(
    "div",
    {
      className: "banner bg-top-announcement",
      style: {
        width: "100%",
        height: "48px"
      }
    },
    /* @__PURE__ */ React53.createElement(
      "div",
      {
        style: {
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "200px",
          width: "100%",
          maxWidth: "100vw",
          height: "100%",
          borderBottom: "1px solid #47ebeb26",
          ...containerStyle
        }
      },
      /* @__PURE__ */ React53.createElement(
        "div",
        {
          className: "top-announcement-mask",
          style: {
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            borderBottom: "1px solid #47ebeb26"
          }
        },
        /* @__PURE__ */ React53.createElement(
          "div",
          {
            style: {
              position: "relative",
              width: "960px",
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              margin: "0 auto"
            }
          },
          /* @__PURE__ */ React53.createElement(
            "div",
            {
              style: {
                width: "calc(50% - 300px)",
                height: "100%",
                position: "relative"
              }
            },
            /* @__PURE__ */ React53.createElement(
              GlowSmall,
              {
                style: {
                  animationDelay: "1.5s",
                  position: "absolute",
                  top: "2px",
                  right: "220px"
                },
                id: "1"
              }
            ),
            /* @__PURE__ */ React53.createElement(
              GlowSmall,
              {
                style: {
                  animationDelay: "1s",
                  position: "absolute",
                  top: "8px",
                  right: "100px",
                  transform: "rotate(180deg)"
                },
                id: "2"
              }
            ),
            /* @__PURE__ */ React53.createElement(
              GlowBig,
              {
                style: {
                  position: "absolute",
                  right: "10px"
                },
                id: "3"
              }
            )
          ),
          /* @__PURE__ */ React53.createElement(
            "div",
            {
              style: {
                width: "calc(50% - 300px)",
                height: "100%",
                position: "relative"
              }
            },
            /* @__PURE__ */ React53.createElement(
              GlowSmall,
              {
                style: {
                  animationDelay: "2s",
                  position: "absolute",
                  top: "6px",
                  right: "180px",
                  transform: "rotate(180deg)"
                },
                id: "4"
              }
            ),
            /* @__PURE__ */ React53.createElement(
              GlowSmall,
              {
                style: {
                  animationDelay: "0.5s",
                  transitionDelay: "1.3s",
                  position: "absolute",
                  top: "2px",
                  right: "40px"
                },
                id: "5"
              }
            ),
            /* @__PURE__ */ React53.createElement(
              GlowBig,
              {
                style: {
                  position: "absolute",
                  right: "-70px"
                },
                id: "6"
              }
            )
          )
        )
      ),
      /* @__PURE__ */ React53.createElement(Text, { text })
    )
  );
}, "GitHubBanner");
var Text = /* @__PURE__ */ __name(({ text: text2 }) => {
  return /* @__PURE__ */ React53.createElement(
    "a",
    {
      className: "gh-link",
      href: "https://s.refine.dev/github-support",
      target: "_blank",
      rel: "noreferrer",
      style: {
        position: "absolute",
        height: "100%",
        padding: "0 60px",
        display: "flex",
        flexWrap: "nowrap",
        whiteSpace: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "linear-gradient(90deg, rgba(31, 63, 72, 0.00) 0%, #1F3F48 10%, #1F3F48 90%, rgba(31, 63, 72, 0.00) 100%)"
      }
    },
    /* @__PURE__ */ React53.createElement(
      "div",
      {
        style: {
          color: "#fff",
          display: "flex",
          flexDirection: "row",
          gap: "8px"
        }
      },
      /* @__PURE__ */ React53.createElement(
        "span",
        {
          style: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }
        },
        "\u2B50\uFE0F"
      ),
      /* @__PURE__ */ React53.createElement(
        "span",
        {
          className: "text",
          style: {
            fontSize: "16px",
            lineHeight: "24px"
          }
        },
        text2
      ),
      /* @__PURE__ */ React53.createElement(
        "span",
        {
          style: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }
        },
        "\u2B50\uFE0F"
      )
    )
  );
}, "Text");
var GlowSmall = /* @__PURE__ */ __name(({ style, ...props }) => {
  return /* @__PURE__ */ React53.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 80,
      height: 40,
      fill: "none",
      style: {
        opacity: 1,
        animation: "top-announcement-glow 1s ease-in-out infinite alternate",
        ...style
      }
    },
    /* @__PURE__ */ React53.createElement("circle", { cx: 40, r: 40, fill: `url(#${props.id}-a)`, fillOpacity: 0.5 }),
    /* @__PURE__ */ React53.createElement("defs", null, /* @__PURE__ */ React53.createElement(
      "radialGradient",
      {
        id: `${props.id}-a`,
        cx: 0,
        cy: 0,
        r: 1,
        gradientTransform: "matrix(0 40 -40 0 40 0)",
        gradientUnits: "userSpaceOnUse"
      },
      /* @__PURE__ */ React53.createElement("stop", { stopColor: "#47EBEB" }),
      /* @__PURE__ */ React53.createElement("stop", { offset: 1, stopColor: "#47EBEB", stopOpacity: 0 })
    ))
  );
}, "GlowSmall");
var GlowBig = /* @__PURE__ */ __name(({ style, ...props }) => /* @__PURE__ */ React53.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 120,
    height: 48,
    fill: "none",
    ...props,
    style: {
      opacity: 1,
      animation: "top-announcement-glow 1s ease-in-out infinite alternate",
      ...style
    }
  },
  /* @__PURE__ */ React53.createElement(
    "circle",
    {
      cx: 60,
      cy: 24,
      r: 60,
      fill: `url(#${props.id}-a)`,
      fillOpacity: 0.5
    }
  ),
  /* @__PURE__ */ React53.createElement("defs", null, /* @__PURE__ */ React53.createElement(
    "radialGradient",
    {
      id: `${props.id}-a`,
      cx: 0,
      cy: 0,
      r: 1,
      gradientTransform: "matrix(0 60 -60 0 60 24)",
      gradientUnits: "userSpaceOnUse"
    },
    /* @__PURE__ */ React53.createElement("stop", { stopColor: "#47EBEB" }),
    /* @__PURE__ */ React53.createElement("stop", { offset: 1, stopColor: "#47EBEB", stopOpacity: 0 })
  ))
), "GlowBig");

// src/components/autoSaveIndicator/index.tsx
import React54 from "react";
var AutoSaveIndicator = /* @__PURE__ */ __name(({
  status,
  elements: {
    success = /* @__PURE__ */ React54.createElement(Message, { translationKey: "autoSave.success", defaultMessage: "saved" }),
    error = /* @__PURE__ */ React54.createElement(
      Message,
      {
        translationKey: "autoSave.error",
        defaultMessage: "auto save failure"
      }
    ),
    loading = /* @__PURE__ */ React54.createElement(Message, { translationKey: "autoSave.loading", defaultMessage: "saving..." }),
    idle = /* @__PURE__ */ React54.createElement(
      Message,
      {
        translationKey: "autoSave.idle",
        defaultMessage: "waiting for changes"
      }
    )
  } = {}
}) => {
  switch (status) {
    case "success":
      return /* @__PURE__ */ React54.createElement(React54.Fragment, null, success);
    case "error":
      return /* @__PURE__ */ React54.createElement(React54.Fragment, null, error);
    case "loading":
      return /* @__PURE__ */ React54.createElement(React54.Fragment, null, loading);
    default:
      return /* @__PURE__ */ React54.createElement(React54.Fragment, null, idle);
  }
}, "AutoSaveIndicator");
var Message = /* @__PURE__ */ __name(({
  translationKey,
  defaultMessage
}) => {
  const translate = useTranslate();
  return /* @__PURE__ */ React54.createElement("span", null, translate(translationKey, defaultMessage));
}, "Message");
export {
  AccessControlContext,
  ActionTypes,
  AuditLogContext,
  AuthBindingsContext,
  AuthPage,
  Authenticated,
  AutoSaveIndicator,
  CanAccess,
  DataContext,
  ErrorComponent,
  GitHubBanner,
  I18nContext,
  KeyBuilder,
  LayoutWrapper,
  LegacyAuthContext,
  LegacyRouterContext,
  Link,
  LiveContext,
  LoginPage,
  MetaContext,
  MetaContextProvider,
  NotificationContext,
  ReadyPage,
  Refine,
  RefineContext,
  ResourceContext,
  RouteChangeHandler,
  RouterContext,
  I18nContext as TranslationContext,
  UndoableQueue,
  UndoableQueueContext,
  WelcomePage,
  createTreeView,
  file2Base64,
  flattenObjectKeys,
  generateDefaultDocumentTitle,
  getDefaultFilter,
  getDefaultSortOrder,
  getNextPageParam,
  getPreviousPageParam,
  handleUseParams,
  importCSVMapper,
  keys,
  legacyResourceTransform,
  matchResourceFromRoute,
  parseTableParams,
  parseTableParamsFromQuery,
  pickDataProvider,
  pickNotDeprecated,
  propertyPathToArray,
  queryKeys,
  routeGenerator,
  setInitialFilters,
  setInitialSorters,
  stringifyTableParams,
  unionFilters,
  unionSorters,
  useActiveAuthProvider,
  useApiUrl,
  useAuthenticated,
  useBack,
  useBreadcrumb,
  useCan,
  useCanWithoutCache,
  useCancelNotification,
  useCheckError,
  useCloneButton,
  useCreate,
  useCreateButton,
  useCreateMany,
  useCustom,
  useCustomMutation,
  useDataProvider,
  useDelete,
  useDeleteButton,
  useDeleteMany,
  useEditButton,
  useExport,
  useExportButton,
  useForgotPassword,
  useForm,
  useGetIdentity,
  useGetLocale,
  useGetToPath,
  useGo,
  useHandleNotification,
  useImport,
  useImportButton,
  useInfiniteList,
  useInvalidate,
  useInvalidateAuthStore,
  useIsAuthenticated,
  useIsExistAuthentication,
  useKeys,
  useLink,
  useList,
  useListButton,
  useLiveMode,
  useLoadingOvertime,
  useLog,
  useLogList,
  useLogin,
  useLogout,
  useMany,
  useMenu,
  useMeta,
  useMetaContext,
  useModal,
  useMutationMode,
  useNavigation,
  useNotification,
  useOnError,
  useOne,
  useParse,
  useParsed,
  usePermissions,
  usePublish,
  useRedirectionAfterSubmission,
  useRefineContext,
  useRefineOptions,
  useRefreshButton,
  useRegister,
  useResource,
  useResourceParams,
  useResourceSubscription,
  useResourceWithRoute,
  useRouterContext,
  useRouterType,
  useSaveButton,
  useSelect,
  useSetLocale,
  useShow,
  useShowButton,
  useSubscription,
  useSyncWithLocation,
  useTable,
  useTitle,
  useToPath,
  useTranslate,
  useTranslation,
  useUpdate,
  useUpdateMany,
  useUpdatePassword,
  useUserFriendlyName,
  useWarnAboutChange,
  userFriendlyResourceName
};
//# sourceMappingURL=index.mjs.map