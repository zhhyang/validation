# Validation 
> The best jQuery plugin to validate form fields.

## Getting Started
This plugin requires jQuery `^1.9.1`


## Usage
It takes only 3 steps to use the plugin:

###Including library
> Choose the framework you are using to see CSS, Javascript files that need to be included in your page (Assuming frameworks and Validation are placed in the vendor directory. You might need change the path to these files)


```javascript
<!-- Bootstrap CSS v3.0.0 or higher -->
<link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">

<!-- FormValidation CSS file -->
<link rel="stylesheet" href="/dist/css/validation.min.css">

<!-- jQuery v1.9.1 or higher -->
<script type="text/javascript" src="/jquery/jquery.min.js"></script>

<!-- Bootstrap JS -->
<script src="/bootstrap/js/bootstrap.min.js"></script>

<!-- Validation plugin and the class supports validating Bootstrap form -->
<script src="/dist/js/validation.min.js"></script>
<script src="/dist/js/framework/bootstrap.min.js"></script>
```
>Don't confuse bootstrap(.min).js file provided by the Bootstrap framework with bootstrap(.min).js provided by Validation which is placed inside the /dist/js/framework directory.They are two different files and both of them need to be included as mentioned above.

If you want to use the default message translated in the language package, then finally include it:
```javascript
<script src="/dist/js/language/zh_CN.min.js"></script>
```
>You don't need to require the English package because it is already included in the plugin. The package is available here just for translating into other languages.

###Writing form

``` 
<form id="productForm" class="form-horizontal">
    <div class="form-group">
        <label class="col-xs-3 control-label">Product name</label>
        <div class="col-xs-6">
            <input type="text" class="form-control" name="name" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-xs-3 control-label">Price</label>
        <div class="col-xs-3">
            <div class="input-group">
                <div class="input-group-addon">$</div>
                <input type="text" class="form-control" name="price" />
            </div>
        </div>
    </div>

    <div class="form-group">
        <label class="col-xs-3 control-label">Size</label>
        <div class="col-xs-6">
            <div class="checkbox">
                <label><input type="checkbox" name="size[]" value="s" /> S</label>
            </div>
            <div class="checkbox">
                <label><input type="checkbox" name="size[]" value="m" /> M</label>
            </div>
            <div class="checkbox">
                <label><input type="checkbox" name="size[]" value="l" /> L</label>
            </div>
            <div class="checkbox">
                <label><input type="checkbox" name="size[]" value="xl" /> XL</label>
            </div>
        </div>
    </div>

    <div class="form-group">
        <label class="col-xs-3 control-label">Available in store</label>
        <div class="col-xs-6">
            <div class="radio">
                <label><input type="radio" name="availability" value="yes" /> Yes</label>
            </div>
            <div class="radio">
                <label><input type="radio" name="availability" value="no" /> No</label>
            </div>
        </div>
    </div>

    <div class="form-group">
        <div class="col-xs-6 col-xs-offset-3">
            <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
            <button type="submit" class="btn btn-default">Add product</button>
        </div>
    </div>
</form>
```
###Calling plugin

```javascript
$(document).ready(function() {
    $(formSelector).formValidation({
        // Indicate the framework
        framework: 'bootstrap',

        // Other settings
        excluded: ...,
        icon: ...,
        message: 'This value is not valid',
        trigger: null,
        fields: ...
    });
});
```


## Authors

**Freeman**

+ http://github.com/zidaneaa/validation


## Copyright and license

    The MIT License

    Copyright (c) 2015 - 2016 

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.