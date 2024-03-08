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

// src/legacy/index.ts
var legacy_exports = {};
__export(legacy_exports, {
  RemixRouteComponent: () => RemixRouteComponent,
  checkAuthentication: () => checkAuthentication,
  default: () => legacy_default,
  handleRefineParams: () => handleRefineParams
});
module.exports = __toCommonJS(legacy_exports);

// src/legacy/routerProvider.ts
var import_react4 = require("@remix-run/react");

// src/legacy/prompt.tsx
var import_react = __toESM(require("react"));
var import_react2 = require("@remix-run/react");
var Prompt = ({
  message,
  when,
  setWarnWhen
}) => {
  const blocker = import_react.default.useCallback(() => {
    if (when) {
      if (window.confirm(message)) {
        setWarnWhen == null ? void 0 : setWarnWhen(false);
        return false;
      }
      return true;
    }
    return false;
  }, [when, message, setWarnWhen]);
  (0, import_react2.useBlocker)(blocker);
  return null;
};

// src/legacy/useParams.ts
var import_core = require("@refinedev/core");
var import_react3 = require("@remix-run/react");
var actions = ["clone", "create", "edit", "show"];
var isAction = (param) => {
  return actions.includes(param);
};
var lastActionIndex = (params) => {
  const reversedFirstIndex = params.slice().reverse().findIndex(isAction);
  if (reversedFirstIndex === -1) {
    return -1;
  }
  return params.length - reversedFirstIndex - 1;
};
var composeParams = (params) => {
  const actionIndex = lastActionIndex(params);
  if (actionIndex !== -1 && actionIndex !== 0) {
    const resource2 = params.slice(0, actionIndex).join("/");
    const action = params[actionIndex];
    const id = params[actionIndex + 1];
    return {
      resource: resource2,
      action,
      id
    };
  }
  const resource = params.join("/");
  return {
    resource,
    action: void 0
  };
};
var handleRefineParams = (refineSplat) => {
  if (refineSplat) {
    const params = refineSplat.split("/").filter(Boolean);
    return composeParams(params);
  }
  return {};
};
var useParams = () => {
  const params = (0, import_react3.useParams)();
  return (0, import_core.handleUseParams)({
    ...handleRefineParams(params["*"]),
    ...params
  });
};

// src/legacy/routerProvider.ts
var RouterProvider = {
  useHistory: () => {
    const navigate = (0, import_react4.useNavigate)();
    return {
      push: navigate,
      replace: (path) => {
        navigate(path, { replace: true });
      },
      goBack: () => {
        navigate(-1);
      }
    };
  },
  useLocation: () => {
    const location = (0, import_react4.useLocation)();
    return location;
  },
  useParams,
  Prompt,
  Link: import_react4.Link
};

// src/legacy/checkAuthentication.ts
var import_node = require("@remix-run/node");
var checkAuthentication = async (authProvider, request, redirectTo = new URL(request.url).pathname) => {
  var _a;
  try {
    const user = await ((_a = authProvider.checkAuth) == null ? void 0 : _a.call(authProvider, { request }));
    return user;
  } catch (error) {
    if (redirectTo !== "/login") {
      const { pathname } = new URL(request.url);
      if (pathname === "/") {
        throw (0, import_node.redirect)("/login");
      }
      const searchParams = new URLSearchParams([["to", redirectTo]]);
      throw (0, import_node.redirect)(`/login?${searchParams}`);
    }
  }
};

// src/legacy/routeComponent.tsx
var import_react5 = __toESM(require("react"));
var import_react6 = require("@remix-run/react");
var import_core2 = require("@refinedev/core");
var { useHistory, useLocation: useLocation2, useParams: useParams2 } = RouterProvider;
function RemixRouteComponent({ children: _children, ...rest }) {
  const loaderData = (0, import_react6.useLoaderData)();
  const { resources } = (0, import_core2.useResource)();
  const { push } = useHistory();
  const {
    resource: routeResourceName,
    action,
    id
  } = useParams2();
  const { pathname } = useLocation2();
  const { DashboardPage, catchAll, LoginPage } = (0, import_core2.useRefineContext)();
  const resource = resources.find(
    (res) => res.name === routeResourceName || res.route === routeResourceName
  );
  (0, import_react5.useEffect)(() => {
    var _a;
    if (pathname === "/" && !DashboardPage) {
      if (typeof this !== "undefined" && this.initialRoute) {
        push(
          this.initialRoute.startsWith("/") ? this.initialRoute : `/${this.initialRoute}`
        );
      } else {
        push(`/${(_a = resources[0].route) == null ? void 0 : _a.replace(/^\//, "")}`);
      }
    }
  }, [pathname]);
  const renderLoginRouteElement = () => {
    if (LoginPage)
      return /* @__PURE__ */ import_react5.default.createElement(LoginPage, null);
    return /* @__PURE__ */ import_react5.default.createElement(import_core2.LoginPage, null);
  };
  if (routeResourceName === "login") {
    return renderLoginRouteElement();
  }
  if (pathname === "/") {
    if (DashboardPage) {
      return /* @__PURE__ */ import_react5.default.createElement(import_core2.LayoutWrapper, null, /* @__PURE__ */ import_react5.default.createElement(
        import_core2.CanAccess,
        {
          resource: "dashboard",
          action: "list",
          fallback: catchAll ?? /* @__PURE__ */ import_react5.default.createElement(import_core2.ErrorComponent, null)
        },
        /* @__PURE__ */ import_react5.default.createElement(DashboardPage, null)
      ));
    }
    return null;
  }
  if (resource) {
    const {
      list,
      create,
      edit,
      show,
      name,
      canCreate,
      canEdit,
      canShow,
      canDelete,
      options
    } = resource;
    const stringError = () => console.error(
      "`string` resource routes are not supported in legacy router. Please switch to the new router or assign Components to the resource routes."
    );
    const definitionError = () => console.error(
      "`Object` resource routes are not supported in legacy router. Please switch to the new router or assign Components to the resource routes."
    );
    const List = (typeof list === "string" ? stringError() : typeof list === "object" ? definitionError() : list) ?? (() => null);
    const Create = (typeof create === "string" ? stringError() : typeof create === "object" ? definitionError() : create) ?? (() => null);
    const Edit = (typeof edit === "string" ? stringError() : typeof edit === "object" ? definitionError() : edit) ?? (() => null);
    const Show = (typeof show === "string" ? stringError() : typeof show === "object" ? definitionError() : show) ?? (() => null);
    const renderCrud = () => {
      switch (action) {
        case void 0: {
          return /* @__PURE__ */ import_react5.default.createElement(
            import_core2.CanAccess,
            {
              resource: name,
              action: "list",
              fallback: catchAll ?? /* @__PURE__ */ import_react5.default.createElement(import_core2.ErrorComponent, null)
            },
            /* @__PURE__ */ import_react5.default.createElement(
              List,
              {
                name,
                canCreate,
                canEdit,
                canDelete,
                canShow,
                initialData: loaderData == null ? void 0 : loaderData.initialData,
                options,
                ...rest
              }
            )
          );
        }
        case "create":
        case "clone": {
          return /* @__PURE__ */ import_react5.default.createElement(
            import_core2.CanAccess,
            {
              resource: name,
              action: "create",
              fallback: catchAll ?? /* @__PURE__ */ import_react5.default.createElement(import_core2.ErrorComponent, null)
            },
            /* @__PURE__ */ import_react5.default.createElement(
              Create,
              {
                name,
                canCreate,
                canEdit,
                canDelete,
                canShow,
                initialData: loaderData == null ? void 0 : loaderData.initialData,
                options,
                ...rest
              }
            )
          );
        }
        case "edit": {
          return /* @__PURE__ */ import_react5.default.createElement(
            import_core2.CanAccess,
            {
              resource: name,
              action: "edit",
              params: { id },
              fallback: catchAll ?? /* @__PURE__ */ import_react5.default.createElement(import_core2.ErrorComponent, null)
            },
            /* @__PURE__ */ import_react5.default.createElement(
              Edit,
              {
                name,
                canCreate,
                canEdit,
                canDelete,
                canShow,
                initialData: loaderData == null ? void 0 : loaderData.initialData,
                options,
                ...rest
              }
            )
          );
        }
        case "show": {
          return /* @__PURE__ */ import_react5.default.createElement(
            import_core2.CanAccess,
            {
              resource: name,
              action: "show",
              params: { id },
              fallback: catchAll ?? /* @__PURE__ */ import_react5.default.createElement(import_core2.ErrorComponent, null)
            },
            /* @__PURE__ */ import_react5.default.createElement(
              Show,
              {
                name,
                canCreate,
                canEdit,
                canDelete,
                canShow,
                initialData: loaderData == null ? void 0 : loaderData.initialData,
                options,
                ...rest
              }
            )
          );
        }
      }
    };
    return /* @__PURE__ */ import_react5.default.createElement(import_core2.LayoutWrapper, null, renderCrud());
  }
  return catchAll ? /* @__PURE__ */ import_react5.default.createElement(import_react5.default.Fragment, null, catchAll) : /* @__PURE__ */ import_react5.default.createElement(import_core2.LayoutWrapper, null, /* @__PURE__ */ import_react5.default.createElement(import_core2.ErrorComponent, null));
}

// src/legacy/index.ts
var legacy_default = RouterProvider;
//# sourceMappingURL=legacy.js.map