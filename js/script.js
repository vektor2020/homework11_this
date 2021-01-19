function Bind(func, context, ...args) {

    return function(...arguments) {

        return func.apply(context, args.concat(arguments))

    }
};



