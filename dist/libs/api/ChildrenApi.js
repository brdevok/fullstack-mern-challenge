"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _database=require("../../database/database");/**
 * Contains a collection of statical methods to manage the childrens data
 * inside the database.
 */class ChildrenApi{/** 
     * Creates a new children doument inside the childrens collection 
     */static async createChildren(data){return await _database.Children.create(data).then(()=>true).catch(()=>false)}/*
    public static async addChild(parentId:string, childDocument:string):Promise<boolean> {

        // Get current children array
        const children:ParentChildrenDoc[]|false = await Parents.findById(parentId, "children")
            .then((results) => results.children)
            .catch(() => false);

        // Update if children value is ok
        if (children !== false) {
            
            // Add the new child to the array only if not exist in it
            if (!children.some((child) => child.document === childDocument)) {
                children.push({ document: childDocument });
            } else {
                return false
            }

            // Update
            return await Parents.findByIdAndUpdate(parentId, { children })
                .then(() => true)
                .catch(() => false)

        } else {
            return false
        }

    }
    */}var _default=ChildrenApi;exports.default=_default;