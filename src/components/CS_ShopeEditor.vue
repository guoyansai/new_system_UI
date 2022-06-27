<template>
    <div>
        <div class="row">
        <div class="col">
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Width</span>
                </div>
                <input type="number" id="inp_width" class="form-control"
                    @input="$emit('change-Objwidth',$event)"
                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <!-- height  -->
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Height</span>
                </div>
                <input type="number" id="inp_height" class="form-control"
                    aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
        </div>
        <div class="col">2</div>
       
        <div class="col">3</div>
        <div class="col">4</div>
    </div>
    </div>
</template>

<script>

<script/>